const names=["Ola", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy", "Karl", "Leo", "Mallory", "Nina", "Oscar", "Peggy", "Quentin", "Rupert", "Sybil", "Trent",
    "Alice",];/* 


/*            FOR LOOP */
for (let i=0; i<names.length; i++){
    console.log(`Hei ${names[i]}, håper du har en fin dag!`)
}
//BREAK CONTINUE



console.log("hei " + names[0]);
for (let name of names){
  console.log(name);
}
//while loop
const secretNumber=Math.ceil(Math.random()*10)
console.log(secretNumber)
/* const secretNumber=7
let guess=0

while (guess!==secretNumber){
  guess++
  console.log(`Guessing ${guess} ....`)
}
console.log(`The secret number was $`) */
//oppgave funksjon som lager en funksjon som lager et array som er x langt tall mellom 1 og Y

function numArrayGen(arrLength, maxNum ){
const arr=[];
for (let i=0; i<arrLength;i++){
  const randomNum=Math.ceil(Math.random()*maxNum)
arr.push(randomNum);
}
return arr

}
console.log(arr[i]);

const MaxFinder=(nums)=>{
  let highest=0;
  for(let num of nums){
    if (num>highest){
      highest=num;
    }
  }
  return highest;
}
const highestNumber=maxFinder(myCoolNumberArray);

  /* FROM CANVAS */
let tall = [10, 20, 30, 40, 50];

// Bruk en for-løkke til å iterere gjennom indeksene
for (let i = 0; i < tall.length; i++) {
    console.log(`Indeks ${i} har verdien: ${tall[i]}`);
}

// Bruk en for...of-løkke til å iterere gjennom verdiene
for (let verdi of tall) {
    console.log(`Verdien er: ${verdi}`);
}

// Bruk en while-løkke til å telle ned fra 5
let nedtelling = 5;
while (nedtelling > 0) {
    console.log(`Nedtelling: ${nedtelling}`);
    nedtelling--;
}
let teller = 1;

// Skriv ut tallene fra 1 til 5
while (teller <= 5) {
    console.log(`Tallet er: ${teller}`);
    teller++; // Øker teller med 1
}
let navn = ["Anna", "Ola", "Kari"];

// Skriv ut hvert navn i listen
for (let person of navn) {
    console.log(`Hei, ${person}!`);
}
// Skriv ut tallene fra 1 til 5
for (let i = 1; i <= 5; i++) {
  console.log(`Tallet er: ${i}`);
}
function numArrayGenerator(arrLength, maxNUm){
  if (arrLength>maxNum){
    arrLength=maxNum;
  }
  const arr=[];



while(arr.Length< arrLength){
  const randomNum=Math.ceil(Math.random()*maxNum);
  if(!arr.includes(randomNum)){
    arr.push(randomNum);

  }
}return arr;}