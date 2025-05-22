/* 
class Entity {
  constructor(hp, atk) {
    this.hp = hp;
    this.atk = atk;
  }
  fight(entity) {
    entity.hp -= this.atk;
  }
}
const player = new Entity(100, 10);
console.log(`Player health: ${player.hp} & Player attack: ${player.atk}`);
const monster = new Entity(125, 5);
console.log(`Monster health: ${monster.hp} & monster attack: ${monster.atk}`);

while (player.hp > 0 && monster.hp > 0) {
  player.fight(monster);
  console.log(`Monster health: ${monster.hp} & monster attack: ${monster.atk}`);
  monster.fight(player);
  console.log(`Player health: ${player.hp} & Player attack: ${player.atk}`);
}
 */

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
}
const drumContainer=document.querySelector("#drum-container");
for(const key in soundMap){
  const drumElement=document.createElement('div');
  drumElement.classList.add('soundButton');
  drumContainer.append(drumElement);

 const keySpan = document.createElement('span');
keySpan.classList.add('keyLabel');
keySpan.textContent = key;

const labelSpan = document.createElement('span');
labelSpan.classList.add('soundLabel');
labelSpan.textContent = soundMap[key].replace(/_/g, ' ');//replace underscore with spaces

const textElement = document.createElement('p');
textElement.appendChild(keySpan);
textElement.appendChild(document.createElement('br'));//add breakline-Letter is gonna be on top
textElement.appendChild(labelSpan);

drumElement.appendChild(textElement);
  drumElement.addEventListener('click', ()=>{
    playsound(soundMap[key]);
  });
};
const playsound=(sound)=>{
  const audio = new Audio(`./SOUNDS/${sound}.wav`);
  audio.play();
}
document.addEventListener('keydown', (e)=>{
  drumElement.classList.add('active');
  const key=e.key;
  const sound=soundMap[key];
  if (sound){
    playsound(sound);
  }
})