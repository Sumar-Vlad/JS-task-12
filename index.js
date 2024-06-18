'use strict'

class Animal {
    #species

    constructor(name, kind) {
        this.name = name
        this.kind = kind
        this.#species = 'domestic pet'
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.kind}.`);
    }
    describeSpecies() {
        console.log(`I am a ${this.#species}.`);
    }
    voice = () => console.log('meow-meow-meow')
}

class Pokemon {
    #hit

    constructor(name, element) {
        this.name = name
        this.element = element
        this.#hit = '3..2..1 SHOK'
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and my element is ${this.element}.`);
    }
    letsHit() {
        console.log(this.#hit);
    }
    phrase = () => console.log('I think you already understand what I can do')
}

class Human {
    constructor(name) {
        this.name = name
    }
        sayHello() {
            console.log(`Hello, my name is ${this.name}.`);
        }
    }


class Race extends Human {
    #food

    constructor(name, race) {
        super(name)
        this.race = race
        this.#food = 'everything that moves'
    }
    sayHello() {
        super.sayHello();
        console.log(`My race is ${this.race}.`);
    }
    foodSelection() {
        console.log(`I can eat ${this.#food}`);
    }
    joke = () => console.log('I see you are moving too ha ha ha');
}

class Country extends Human {
    #direction

    constructor(name, country) {
        super(name)
        this.country = country
        this.#direction = 'west'
    }
    sayHello() {
        super.sayHello();
        console.log(`I am from ${this.country}.`);
    }
    side(){
        console.log(`I'm from the ${this.#direction} part of the country`)
    }
    film = () => console.log('like I am a cowboy from the wild west ha ha ha')
}

const animal = new Animal('Murka', 'a cat');
animal.sayHello();
animal.voice();
animal.describeSpecies();

const pokemon = new Pokemon('Picachu', 'electicity');
pokemon.sayHello();
pokemon.letsHit();
pokemon.phrase();

const race = new Race('Rick', 'asian');
race.sayHello();
race.foodSelection();
race.joke();

const country = new Country('Rick', 'China');
country.sayHello();
country.side();
country.film();