/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her
function evenOrOdd(n) {
    if (isNaN(n)) /* check if input is a number */ {
        isEven = "Must input numbers"; /* ERROR MESSAGE FOR NOT NUMBER */
    } else if (n % 2 == 0) { /* CHECK IF REST FROM DIVISION BY TWO IS 0 */
        isEven = "Even Number"; /* MESSAGE FOR AN EVEN NUMBER */
    } else {
        isEven = "Odd Number"; /* MESSAGE FOR AN ODD NUMBER */
    }
    return isEven;
}
console.log(evenOrOdd())
/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her
function toUpperExclaim(string) {
    const newString = String(string).toUpperCase().trim() + " !";
    return newString;
}
console.log(toUpperExclaim(""))
/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her
let message = "";
let name = "";
function welcome(name, hour) {
    if (hour < 0 && hour >= 23) {
        message = "Invalid time."
        name = "";
    } else if (hour == null) {
        message = "Error! Provide an hour."
        name = "";
    } else if (hour <= 5) {
        message = "Good night"
    } else if (hour <= 11) {
        message = "Good morning"
    }
    else if (hour <= 17) {
        message = "Good day"
    }
    else if (hour <= 23) {
        message = "Good evening"
    }
    let greetName = `${message} ${name}`;
    return greetName;
}
console.log(welcome("Olga", 3))
/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

let animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Kangaroo", "Panda"];
let colors = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Pink"];
function removeFirstLast(array) {
    let newArray = array.slice();
    newArray.pop();
    newArray.shift();
    return newArray;
}
console.log(removeFirstLast(colors))

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/



function transformString(string) {
    newString = string.trim();
    newString = newString.replace(/vanskelig/g, "gøy")
    return newString;
}
console.log(transformString(" Det er vanskelig å bruke metoder "))
/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// 


function transformArray(array) {
    let newArray = array.slice(1); //remove "Bok"
    newArray.splice(0, 2, "Markeringspenn"); //replace index 0, 1 (Penn,Notatbok) with Markeringspenn
    newArray = newArray.map(item => item === "Viskelær" ? "Linjal" : item);//replace Viskelær with Linjal
    let newArrayE = newArray.filter(words => words.toLowerCase().includes("e"));//make new array with only words containing "e"
    const arrayToString = newArray.join(" | ");//join the newArray with " / ", make it a string
    return [arrayToString, newArrayE];//return values of arrayToString and newArrayE and store it in an array
}
let result = transformArray(items);//assign result to result of transformArray, populate it with arrayToString and newArrayE
console.log(result[0]);//log items from array result with index [0]-arrayToString
console.log(result[1]);//log item from array result with index [1]-newArrayE

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her
let array = ["Red", "Green"];
let string = "Purple";
if (array.includes(string)) {
    array.pop(string)
} else {
    array.push(string)
}
console.log(array);
/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

let emoji = "😎";
function typeOperations(param) {
    let message = "";
    if (typeof param === "string") {
        message = param;
    } else if (typeof param === "number") {
        param = (param * 2).toString();
        message = param;
    }
    else if (typeof param === "boolean") {
        if (param) {
            message = "Ja"
        } else {
            message = "Slapp av";
        }
    } else {
        message = "Kun primitive verdier"
    }
    message = emoji + message + emoji;
    return message;
}
console.log(typeOperations(3));
console.log(typeOperations(true));
console.log(typeOperations(false));
console.log(typeOperations("Coding is life"));
