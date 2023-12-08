

const animals = ["Hund", "Katt", "Kanin", "Hamster", "Fugl", "Fisk"]; 
const colors = ["Rød", "Blå", "Grønn", "Gul", "Lilla", "Hvit"]; 
const traits = [
    "Vennlig", "Energisk", "Rolig", "Nysgjerrig", "Sky",
    "Leken", "Intelligent", "Trofast", "Uavhengig", "Sosial",
    "Snill", "Beskyttende", "Kjærlig", "Forsiktig", "Eventyrlysten",
    "Stille", "Lydig", "Utholdende", "Modig", "Tålmodig",
    "Morsom", "Aktiv", "Rolig", "Selvsikker", "Nervøs"
]







const pets = [];



const randNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min; 








function createRandObject(name) {
    const randColor = colors[randNumber(0, colors.length + 1)]
    const randAge = randNumber(1, 15)
}


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

createRandTraitArray()
// Et dyrenavn (fra animals-arrayet).
// En tilfeldig farge (fra colors-arrayet).
// En tilfeldig alder, mellom 1 og 15 år.
// En liste med traits: minst ett, men ikke mer enn 4 (uten duplikater). f.eks:
// Sørg for at lengden på pets-arrayet tilsvarer animals-arrayet.
//

