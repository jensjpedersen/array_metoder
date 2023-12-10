

const animals = ["Hund", "Katt", "Kanin", "Hamster", "Fugl", "Fisk"]; 
const colors = ["Rød", "Blå", "Grønn", "Gul", "Lilla", "Hvit"]; 
const traits = [
    "Vennlig", "Energisk", "Rolig", "Nysgjerrig", "Sky",
    "Leken", "Intelligent", "Trofast", "Uavhengig", "Sosial",
    "Snill", "Beskyttende", "Kjærlig", "Forsiktig", "Eventyrlysten",
    "Stille", "Lydig", "Utholdende", "Modig", "Tålmodig",
    "Morsom", "Aktiv", "Rolig", "Selvsikker", "Nervøs"
]

const randNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min; 

function createRandTraitArray() {
    const [ minNumberOfTraits, maxNumberOfTraits ] = [1, 4]; 
    const numberOfTraits = randNumber(minNumberOfTraits, maxNumberOfTraits); 

    const traitsArray = []; 

    while (traitsArray.length <= numberOfTraits) {

        const randTrait = traits[randNumber(0, traits.length - 1)]; 

        if (traitsArray.includes(randTrait)) { continue }

        traitsArray.push(randTrait); 
    }

    return traitsArray; 

}

function createRandObject(name) {
    const randColor = colors[randNumber(0, colors.length - 1)]; 
    const randAge = randNumber(1, 15); 
    const randTraitArray = createRandTraitArray(); 

    return {
        name, 
        color: randColor, 
        age: randAge,
        traits: randTraitArray
    }
}


// --------------- Problem 1 ---------------
const pets = animals.map((animal) => createRandObject(animal)); 
console.log(pets);


// Oppgave 2: Implementer Filtreringsfunksjoner
// Lag en funksjon for å finne et kjæledyr etter navn ved hjelp av find-metoden.

function findAnimal(name, petsArr) {
    return petsArr.find((pet) => name.toLowerCase() == pet.name.toLowerCase())
}

console.log(findAnimal('hund', pets) );


// Implementer en funksjon for å finne indeksen til det første kjæledyret av en gitt farge ved hjelp av findIndex.
function findIndexOfColor(color, petsArr) {
    const index = petsArr.findIndex((pet) => pet.color.toLowerCase() == color.toLowerCase()); 
    if (index == -1) { return 'No pets with that color' }

    return index;
}


const colorIndex = findIndexOfColor('rød', pets); 
console.log('pet with color red at index: ', colorIndex, pets[colorIndex]);

// Skriv en funksjon for å finne det siste kjæledyret av en spesifikk alder ved hjelp av findLastIndex og findLast.
function lastAnimal(age, petsArr) {
    return petsArr.findLast(pet => pet.age == age); 
}

function lastAnimal2(age, petsArr) {
    const lastAnimalIndex = petsArr.findLastIndex(pet => pet.age == age); 
    return petsArr[lastAnimalIndex]; 
}

console.log("Oppgave 2.3");
console.log(lastAnimal(10, pets));
console.log(lastAnimal2(10, pets));


// Utvikle en funksjon for å filtrere kjæledyr etter et spesifikt trekk ved hjelp av filter.
function filterByTrait(trait, petsArr) {
    return petsArr.filter(pet => pet.traits.includes(trait) )
}

console.log("Oppgave 2.4");
console.log(filterByTrait('Modig', pets));

// Bruk forEach eller map metoden for å console.logge (eller vise på nettsiden vha document.createElement())
// detaljene til hvert kjæledyr.
console.log("Oppgave 2.5");




