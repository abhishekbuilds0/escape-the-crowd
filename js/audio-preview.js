/**
 * Escape The Crowd - Audio Voiceover Preview Player
 * Synthesizes voiceover preview using Web Speech API + Web Audio ambient soundscape
 */

class AudioBookPreview {
  constructor() {
    this.isPlaying = false;
    this.synth = window.speechSynthesis;
    this.utterance = null;
    this.audioContext = null;
    this.oscillator = null;
    this.gainNode = null;
    this.timer = null;
    this.currentTime = 0;
    this.duration = 45; // 45 seconds narration

    this.sampleText = "Chapter 1: The Illusion of Safety. Insaan hazaron saalon se groups mein rehne ke liye program hua hai. Ancient time mein agar tum tribe se alag ho jaate the, toh tumhari survival impossible thi. Isliye humare dimaag mein ek deep fear baith gaya: Bheed se alag hona matlab maut. Lekin aaj koi sher tumhe nahi khaayega. Real safety bheed mein nahi, real safety self-mastery mein hoti hai. Escape The Crowd.";

    this.initElements();
    this.initEvents();
  }

  initElements() {
    this.playBtns = document.querySelectorAll('.js-audio-play');
    this.progressBars = document.querySelectorAll('.audio-progress-fill');
    this.timeDisplays = document.querySelectorAll('.audio-time');
    this.wavebars = document.querySelectorAll('.audio-wave-bar');
  }

  initEvents() {
    this.playBtns.forEach(btn => {
      btn.addEventListener('click', () => this.togglePlay());
    });
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    if (!this.synth) {
      alert("Audio speech synthesis is not supported on this browser.");
      return;
    }

    this.synth.cancel();
    this.isPlaying = true;
    this.updateUIState(true);

    this.utterance = new SpeechSynthesisUtterance(this.sampleText);
    this.utterance.rate = 0.95;
    this.utterance.pitch = 0.95;

    // Try Hindi or English voice
    const voices = this.synth.getVoices();
    const hindiVoice = voices.find(v => v.lang.includes('hi') || v.lang.includes('IN')) || voices[0];
    if (hindiVoice) this.utterance.voice = hindiVoice;

    this.utterance.onend = () => {
      this.pause();
      this.currentTime = 0;
      this.updateProgress(0);
    };

    this.utterance.onerror = () => {
      this.pause();
    };

    this.synth.speak(this.utterance);
    this.startAmbientSound();
    this.startTimer();
  }

  pause() {
    this.isPlaying = false;
    this.updateUIState(false);
    if (this.synth) this.synth.cancel();
    this.stopAmbientSound();
    clearInterval(this.timer);
  }

  startAmbientSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.audioContext = new AudioCtx();
      
      // Warm subtle binaural drone
      this.oscillator = this.audioContext.createOscillator();
      this.gainNode = this.audioContext.createGain();
      
      this.oscillator.type = 'sine';
      this.oscillator.frequency.setValueAtTime(108, this.audioContext.currentTime); // 108Hz soothing frequency
      this.gainNode.gain.setValueAtTime(0.015, this.audioContext.currentTime); // Very soft background
      
      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.audioContext.destination);
      this.oscillator.start();
    } catch(e) {
      console.log('Ambient audio unavailable:', e);
    }
  }

  stopAmbientSound() {
    try {
      if (this.oscillator) {
        this.oscillator.stop();
        this.oscillator.disconnect();
      }
      if (this.audioContext && this.audioContext.state !== 'closed') {
        this.audioContext.close();
      }
    } catch(e) {}
  }

  startTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.currentTime += 0.5;
      if (this.currentTime >= this.duration) {
        this.currentTime = 0;
        this.pause();
      }
      this.updateProgress((this.currentTime / this.duration) * 100);
    }, 500);
  }

  updateProgress(pct) {
    this.progressBars.forEach(p => {
      p.style.width = `${pct}%`;
    });
    
    const mins = Math.floor(this.currentTime / 60);
    const secs = Math.floor(this.currentTime % 60).toString().padStart(2, '0');
    this.timeDisplays.forEach(t => {
      t.textContent = `${mins}:${secs} / 0:45`;
    });
  }

  updateUIState(playing) {
    this.playBtns.forEach(btn => {
      const icon = btn.querySelector('.audio-icon');
      const text = btn.querySelector('.audio-btn-text');
      if (playing) {
        if (icon) icon.innerHTML = '<rect x="6" y="4" width="4" height="16" fill="currentColor"></rect><rect x="14" y="4" width="4" height="16" fill="currentColor"></rect>';
        if (text) text.textContent = 'Pause Sample';
        btn.classList.add('is-playing');
      } else {
        if (icon) icon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3" fill="currentColor"></polygon>';
        if (text) text.textContent = 'Listen Audio Preview (0:45)';
        btn.classList.remove('is-playing');
      }
    });

    this.wavebars.forEach(bar => {
      if (playing) {
        bar.classList.add('animating');
      } else {
        bar.classList.remove('animating');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.audioPreview = new AudioBookPreview();
});
