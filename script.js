

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
    const randColor = colors[randNumber(0, colors.length + 1)]; 
    const randAge = randNumber(1, 15); 
    const randTraitArray = createRandTraitArray(); 

    return {
        name, 
        color: randColor, 
        age: randAge,
        traits: randTraitArray
    }
}



const pets = animals.map((animal) => createRandObject(animal)); 
console.log(pets);





