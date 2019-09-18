'use strict';
function createMyObject() {
    return  {
        foo: 'bar',
        answerToUniverse: 42,
        'olly olly': 'oxen free',
        sayHello() {
            return 'hello';
        }
    };
}

function updateObject(obj) {
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';
    return obj;
}

function personMaker() {
    var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      fullName() {
          return `${this.firstName} ${this.lastName}`;
      },
    };
    return person;
}
  
function keyDeleter(obj) {
    delete obj.foo;
    delete obj.bar;
    return obj;
}
  
//------------------------------------------------------------------------

function makeStudentsReport(data) {
    let newArray = [];
    for (let i = 0; i < data.length; i++) {
        newArray.push(`${data[i].name}: ${data[i].grade}`);
    }
    return newArray;
}
  
function enrollInSummerSchool(students) {
    for(let i = 0; i < students.length; i++) {
        students[i].status = 'In Summer school';
    }
    return students;
}
  
function findById(items, idNum) {
    for(let i = 0; i < items.length; i++) {
        if(items[i].id === idNum) {
            return items[i];
        }
    }
}

function validateKeys(object, expectedKeys) {
    let counter = 0;
    for(let key in object) {
        counter ++; //counts how many key/value pairs are in objects
    }
    if (expectedKeys.length === counter) { 
        for (let i = 0; i < expectedKeys.length; i++) {
            if (expectedKeys[i] in object)/*do nothing and continue with loop*/; else return false;
        }
        return true;
    } else return false;
}

//------------------------------------------------------------------------

const loaf = {
    flour:300,
    water:210,
    hydration() {
        return (this.water/this.flour) * 100;
    }
};

console.log(loaf);
console.log(loaf.hydration());



const secondObj = {
    foo:'fool',
    bar:'barl',
    fum:'fuml',
    quux:'quuxl',
    spam:'spaml'
};

for(let key in secondObj) {
    console.log(`${key}: ${secondObj[key]}`);
}



const hobbit = {
    meals:['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(`${hobbit.meals[3]} is the fourth meal of the day.`);



const vin = {
    name:'Valette Renoux',
    jobTitle:'Mistborn',
    boss: 'Kelsier'
};
const kel = {
    name:'Kelsier',
    jobTitle:'Survivor of Hathsin'
};
const clu = {
    name:'Clubs',
    jobTitle:'Smoker/Artisan',
    boss:'Kelsier'
};
let fictionArray = [vin, kel, clu];

for(let i = 0; i < fictionArray.length; i++) {
    if ('boss' in fictionArray[i]){
        console.log(`${fictionArray[i].jobTitle} ${fictionArray[i].name} reports to ${fictionArray[i].boss}.`);
    } else console.log(`${fictionArray[i].jobTitle} ${fictionArray[i].name} reports to no one.`);
}



function decode(codedWord, subArray) {
    let decodedWord = '';
    const cipher = {
        a:2,
        b:3,
        c:4,
        d:5
    };
    for(let i = 0; i < codedWord.length; i++) {
        if(codedWord.charAt(i) in cipher) {
            decodedWord += subArray[i].charAt(cipher[codedWord.charAt(i)]-1); //adds the letter at the index, corrosponding to the value of the key, - 1 of the nth word in subArray to the decoded word
        } else decodedWord += ' ';
    }
    return decodedWord;
}

function decodeWords(strOWords) {
    let subArray = strOWords.split(' ');
    let codedWord = '';
    for(let i = 0; i < subArray.length; i ++) {
        codedWord += subArray[i].charAt(0); //coded word = the first letter of each word in the strOWords
    }
    return decode(codedWord, subArray);
}
  
console.log(decodeWords('craft block argon meter bells brown croon droop'));



function createCharacter (name, race, origin, attack, defence, weapon) {
    let nickname = name.slice(0, name.search(' ')).toLowerCase();
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defence,
        weapon,
        describe() {
            console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}`);
        },
        evaluateFight(chara) {
            let damageGiven = this.attack - chara.defence;
            let damageTaken = chara.attack - this.defence;
            if(damageGiven < 0) damageGiven = 0;
            if(damageTaken < 0) damageTaken = 0;
            return `${chara.name} takes ${damageGiven} damage and ${this.name} recieves ${damageTaken} damage.`;
        }
    };
}

let characterArray = [
    createCharacter('Gandalf the White', 'Wizard', 'Middle Earth', 10, 6,'a wizard staff'),
    createCharacter('Bilbo Baggins', 'Hobbit', 'The Shire', 2, 1,'the ring'),
    createCharacter('Frodo Baggins', 'Hobbit', 'The Shire', 3, 2,'a string and barrow blade'),
    createCharacter('Aragorn son of Arathorn', 'Man', 'Dunnedain', 6, 8,'Anduril'),
    createCharacter('Legolas', 'Elf', 'Woodland Realm', 8, 5,'a bow and arrow')
];
characterArray.push(createCharacter('Arwen Undomiel', 'Half-Elf', 'Rivendell', 7, 6,'Hadhafang'));

characterArray.find(item => item.nickname === 'aragorn').describe();

let hobbitArray = characterArray.filter(item => item.race === 'Hobbit');
for(let item of hobbitArray) item.describe();

let highAttackArray = characterArray.filter(item => item.attack > 5);
for(let item of highAttackArray) console.log(item.evaluateFight(characterArray[5]));



const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
    { id: 1, name: 'Captain America', squad: 'Avengers' }
];

function findOne(arr, query) {
    let filtered;
    let found;
    for(let key in query) {
        for(let i = 0; i < arr.length; i++) {
            filtered = arr.filter(element => element[key] === query[key]);
        }
        if(found === undefined) found = filtered;       
        if(found[0] === undefined)return "null";
    }
    for(let keys in found[0]) {
        for(let j = 0; j < filtered.length; j++) {
            if (found[0] === filtered[j]){
                return filtered[j];
            }
        } 
    }
    return "null";
}

console.log(findOne(HEROES, { id: 1 }));
//=> { id: 1, name: 'Captain America', squad: 'Avengers' }

console.log(findOne(HEROES, { id: 10 }));
//=> null

console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
//=> null

console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
//=> { id: 5, name: 'Wonder Woman', squad: 'Justice League' }

console.log(findOne(HEROES, { squad: 'Justice League' }));
//=> { id: 4, name: 'Superman', squad: 'Justice League' }



const Database = {
    store: {
      heroes: [
        { id: 1, name: 'Captain America', squad: 'Avengers' },
        { id: 2, name: 'Iron Man', squad: 'Avengers' },
        { id: 3, name: 'Spiderman', squad: 'Avengers' },
        { id: 4, name: 'Superman', squad: 'Justice League' },
        { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
        { id: 6, name: 'Aquaman', squad: 'Justice League' },
        { id: 7, name: 'Hulk', squad: 'Avengers' },
      ]
    },
    findOne(query) {
        let filtered;
        let found;
        for(let key in query) {
            for(let i = 0; i < this.store.heroes.length; i++) {
                filtered = this.store.heroes.filter(element => element[key] === query[key]);
            }
            if(found === undefined) found = filtered;       
            if(found[0] === undefined)return "null";
        }
        for(let keys in found[0]) {
            for(let j = 0; j < filtered.length; j++) {
                if (found[0] === filtered[j]){
                    return filtered[j];
                }
            } 
        }
        return "null";
    }

};

console.log('From the Database');
console.log(Database.findOne({id: 2}));