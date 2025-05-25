const soundMap = {
  q: 'work_it',
  w: 'make_it',
  e: 'do_it',
  r: 'makes_us',
  t: 'harder',
  y: 'better',
  u: 'faster',
  i: 'stronger',
  o: 'more_than',
  p: 'hour',
  a: 'our',
  s: 'never',
  d: 'ever',
  f: 'after',
  g: 'work_is',
  h: 'over'
};

const drumContainer = document.querySelector("#drum-container");
const keyToElementMap = {};

for (const key in soundMap) {
  const drumElement = document.createElement('div');
  drumElement.classList.add('soundButton');
  drumContainer.appendChild(drumElement);

  const keySpan = document.createElement('span');
  keySpan.classList.add('keyLabel');
  keySpan.textContent = key;

  const labelSpan = document.createElement('span');
  labelSpan.classList.add('soundLabel');
  labelSpan.textContent = soundMap[key].replace(/_/g, ' ');

  const textElement = document.createElement('p');
  textElement.appendChild(keySpan);
  textElement.appendChild(document.createElement('br'));
  textElement.appendChild(labelSpan);

  drumElement.appendChild(textElement);
  keyToElementMap[key] = drumElement;

  drumElement.addEventListener('click', () => {
    playSoundWithEffect(key);
  });
}

document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  if (soundMap[key]) {
    playSoundWithEffect(key);
  }
});

function playSoundWithEffect(key) {
  const drumElement = keyToElementMap[key];
  if (!drumElement) return;

  drumElement.classList.add('active');
  playsound(soundMap[key]);

  setTimeout(() => {
    drumElement.classList.remove('active');
  }, 500);
}

function playsound(sound) {
  const audio = new Audio(`./SOUNDS/${sound}.wav`);
  audio.play();
}
