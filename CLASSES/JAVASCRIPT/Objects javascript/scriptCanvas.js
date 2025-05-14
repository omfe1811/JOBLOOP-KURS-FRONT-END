const names=["Ola", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy", "Karl", "Leo", "Mallory", "Nina", "Oscar", "Peggy", "Quentin", "Rupert", "Sybil", "Trent",
    "Alice",];
    

let person = {
    navn: "Anna",
    alder: 25,
    yrke: "Utvikler"
};

console.log(person.navn); // "Anna"
console.log(person["alder"]); // 25




// Oppdatere en eksisterende egenskap
person.alder = 26;

// Legge til en ny egenskap
person.yrke = "Utvikler";

// Fjerne en egenskap
delete person.alder;

console.log(person);
// { navn: "Anna", yrke: "Utvikler" }

let personer = [
    { navn: "Anna", alder: 25, yrke: "Utvikler" },
    { navn: "Ola", alder: 30, yrke: "Designer" },
    { navn: "Kari", alder: 28, yrke: "Tester" }
];
console.log(personer[0].navn); // "Anna"
// Skriv ut navn og yrke for hver person
for (let person of personer) {
    console.log(`${person.navn} jobber som ${person.yrke}`);
}

/* Oppsummering */

  /*   Objekter:
        Strukturert som nøkkel-verdi-par.
        Brukes for å lagre relaterte data om én ting (f.eks. en person, et produkt).
    Objekt-arrays:
        Brukes når du har mange elementer med samme type data (f.eks. en liste med personer).
    Oppdatering:
        Oppdater eksisterende egenskaper, legg til nye, eller slett med enkel syntaks.
    Løkker:
        Bruk for...of-løkker for å iterere over arrays med objekter.
 */
