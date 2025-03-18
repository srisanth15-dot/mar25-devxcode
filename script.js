window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const cloudTop = document.querySelector('.cloud-top');
    const cloudBottom = document.querySelector('.cloud-bottom');
  
    
    cloudTop.style.transform = `translateX(${scrollY * 0.5}px)`;
  
    
    cloudBottom.style.transform = `translateX(${-scrollY * 0.5}px)`;
  });

    let lastScrollPosition = 0;
    const sliderText = document.querySelector(".slider-text");

    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;

      // Calculate the difference in scroll position
      const scrollDelta = scrollPosition - lastScrollPosition;

      // Update the text's position based on scroll direction
      const currentLeft = parseFloat(getComputedStyle(sliderText).left) || 0;
      const newLeft = currentLeft + scrollDelta * 1.5; // Increased multiplier for faster movement

      // Apply the new position
      sliderText.style.left = `${newLeft}px`;

      // Update the last scroll position
      lastScrollPosition = scrollPosition;
    });
  







const handleScrollAnimations1 = () => {
  const elements = document.querySelectorAll('.content p, .content h2, .masonry-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      } else {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(20px)';
        entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      }
    });
  }, {
    threshold: 0.5, 
  });

  elements.forEach((el) => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', handleScrollAnimations1);






const handleScrollAnimations = () => {
  const images = document.querySelectorAll('.image-grid img');
  const tableRows = document.querySelectorAll('table tbody tr');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'scale(1)';
        entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      } else {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'scale(0.9)';
        entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      }
    });
  }, {
    threshold: 0.5, 
  });

  images.forEach((img) => observer.observe(img));
  tableRows.forEach((row) => observer.observe(row));
};

window.addEventListener("scroll", function() {
  let scrollY = window.scrollY;
  let textElement = document.querySelector(".slider-text");

  // Move text from left to right based on scroll
  textElement.style.transform = `translateX(${scrollY}px)`;
});

const words = [
    { word: 'dog', sound: 'woof' },
    { word: 'cat', sound: 'meow' },
    { word: 'pig', sound: 'ahh' },
    { word: 'goat', sound: 'goated' },
    { word: 'pony', sound: 'chirp' },
    { word: 'duck', sound: 'quack' },
    { word: 'bull', sound: 'howl' },
    { word: 'chicken', sound: 'cluck' },
    { word: 'sheep', sound: 'baa' },
    { word: 'horse', sound: 'neigh' }
];

class TypingGame {
    constructor() {
        this.wordDisplay = document.querySelector('.word-display');
        this.wordInput = document.querySelector('.word-input');
        this.correctSpan = document.querySelector('.correct');
        this.incorrectSpan = document.querySelector('.incorrect');
        this.correct = 0;
        this.incorrect = 0;
        this.currentWordObj = null;
        this.sounds = {};
        
        this.init();
    }

    init() {
        this.setNewWord();
        this.wordInput.addEventListener('input', () => this.checkWord());
        this.loadSounds();
    }

    async loadSounds() {
        try {
            // Replace these URLs with your own sound links
            const soundUrls = {
                woof: 'https://freeanimalsounds.org/wp-content/uploads/2017/07/Bluthund_jault.mp3',  // Replace with your dog sound URL
                meow: 'https://freeanimalsounds.org/wp-content/uploads/2017/07/Katze_miaut.mp3',  // Replace with your cat sound URL
                ahh: 'https://freeanimalsounds.org/wp-content/uploads/2017/07/schwein.mp3', // Replace with your lion sound URL
                goated: 'https://freeanimalsounds.org/wp-content/uploads/2017/07/Ziege.mp3',    // Replace with your cow sound URL
                chirp: 'https://freeanimalsounds.org/wp-content/uploads/2017/07/Pony.mp3',     // Replace with your bird sound URL
                quack: 'https://freeanimalsounds.org/wp-content/uploads/2017/07/Ente_quackt.mp3',     // Replace with your duck sound URL
                howl: 'https://freeanimalsounds.org/wp-content/uploads/2017/07/ochse.mp3',      // Replace with your wolf sound URL
                cluck: 'https://freeanimalsounds.org/wp-content/uploads/2017/07/huehner.mp3',  // Replace with your chicken sound URL
                baa: 'https://freeanimalsounds.org/wp-content/uploads/2017/07/schafe.mp3',      // Replace with your sheep sound URL
                neigh: 'https://freeanimalsounds.org/wp-content/uploads/2017/07/pferd_whinnert.mp3'     // Replace with your horse sound URL
            };

            // Load all sounds
            for (const [key, url] of Object.entries(soundUrls)) {
                this.sounds[key] = new Audio(url);
                // Preload the audio
                this.sounds[key].load();
                console.log(`Loaded sound: ${key}`);
            }
        } catch (error) {
            console.error('Error loading sounds:', error);
        }
    }

    setNewWord() {
        this.currentWordObj = words[Math.floor(Math.random() * words.length)];
        this.wordDisplay.textContent = this.currentWordObj.word;
        this.wordDisplay.classList.add('bounce');
        setTimeout(() => this.wordDisplay.classList.remove('bounce'), 500);
    }

    showSoundPopup(word, sound) {
        const popup = document.getElementById('sound-popup');
        popup.style.display = 'block';
        popup.textContent = `${word.toUpperCase()}: ${sound.toUpperCase()}!`;
        
        // Position popup randomly on screen
        const maxX = window.innerWidth - popup.offsetWidth;
        const maxY = window.innerHeight - popup.offsetHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        popup.style.left = randomX + 'px';
        popup.style.top = randomY + 'px';
        
        // Remove popup after animation
        setTimeout(() => {
            popup.style.display = 'none';
        }, 1500);
    }

    playAnimalSound() {
        try {
            const sound = this.sounds[this.currentWordObj.sound];
            if (sound) {
                sound.currentTime = 0;
                
                const playPromise = sound.play();
                
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            this.showSoundPopup(this.currentWordObj.word, this.currentWordObj.sound);
                        })
                        .catch(error => {
                            console.error('Error playing sound:', error);
                        });
                }
            }
        } catch (error) {
            console.error('Error in playAnimalSound:', error);
        }
    }

    checkWord() {
        const inputWord = this.wordInput.value.toLowerCase();
        if (inputWord === this.currentWordObj.word) {
            this.correct++;
            this.correctSpan.textContent = `Correct: ${this.correct}`;
            this.playAnimalSound();
            this.wordInput.value = '';
            this.wordInput.classList.add('correct-flash');
            setTimeout(() => this.wordInput.classList.remove('correct-flash'), 500);
            this.setNewWord();
        } else if (inputWord.length >= this.currentWordObj.word.length) {
            this.incorrect++;
            this.incorrectSpan.textContent = `Incorrect: ${this.incorrect}`;
            this.wordInput.value = '';
            this.wordInput.classList.add('incorrect-flash');
            setTimeout(() => this.wordInput.classList.remove('incorrect-flash'), 500);
        }
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Typing effect for main heading
    const text = "TYPE AND EXPLODE";
    const typedHeading = document.getElementById('typed-heading');
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typedHeading.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }
    
    typeWriter();

    // Create a button to start the game (browsers require user interaction to play audio)
    const startButton = document.createElement('button');
    startButton.textContent = 'Start Game';
    startButton.className = 'start-button';
    document.querySelector('.typing-practice').prepend(startButton);

    startButton.addEventListener('click', () => {
        new TypingGame();
        startButton.remove();
    });
});