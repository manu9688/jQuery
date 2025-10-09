   function reproducirSonido() {
      const audio = document.getElementById('sonido-darbuka');
      audio.currentTime = 0; // Reinicia el sonido si ya se está reproduciendo
      audio.play();
    }
