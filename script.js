const cinnamoroll = document.getElementById('cinnamoroll');
const speechBubble = document.getElementById('speech-bubble');

const messages = [
  "You're doing great!",
  "Keep smiling!",
  "Believe in yourself!",
  "Stay positive!",
  "You are enough!",
  "Shine bright!",
  "Never give up!"
];

function showMessage(x, y) {
  const message = messages[Math.floor(Math.random() * messages.length)];
  speechBubble.textContent = message;
  speechBubble.style.left = (x + 50) + 'px';
  speechBubble.style.top = (y - 40) + 'px';
  speechBubble.style.opacity = '1';
  clearTimeout(speechBubble.hideTimeout);
  speechBubble.hideTimeout = setTimeout(() => {
    speechBubble.style.opacity = '0';
  }, 3000);
}

function moveCinnamoroll() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const marginSide = 150;
  let newX;
  if (Math.random() < 0.5) {
    newX = Math.random() * (marginSide - cinnamoroll.clientWidth);
  } else {
    newX = vw - marginSide + Math.random() * (marginSide - cinnamoroll.clientWidth);
  }
  const newY = Math.random() * (vh - cinnamoroll.clientHeight);
  cinnamoroll.style.left = newX + 'px';
  cinnamoroll.style.top = newY + 'px';
}

document.body.addEventListener('click', e => {
  moveCinnamoroll();
  showMessage(e.clientX, e.clientY);
});

document.body.addEventListener('scroll', () => {
  moveCinnamoroll();
  showMessage(window.innerWidth / 2, window.scrollY + 100);
});

moveCinnamoroll();
