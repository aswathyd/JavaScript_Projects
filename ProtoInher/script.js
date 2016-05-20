"use strict";

var arr =['red','blue','green']
var arr1 = [1,2,3]

Object.defineProperty(Array.prototype,'last',{get:function(){
    return this[this.length-1]
}})
 var last = arr.last;
 var last1 = arr1.last;
display(last)
display(last1)

function Cat(name, color){
    this.name = name
    this.color = color
}
//
var fluffy = new Cat('Fluffy','White')
Cat.prototype.age = 3
//display(Cat.prototype)
//display(fluffy._proto_)

var muffin = new Cat('Muffine','Brown')
//display(muffin._proto_)

display(fluffy.age)
display(muffin.age)

//creating prototypal inheritance chain

function Animal(voice){
    this.voice = voice || 'Grunt'
}
Animal.prototype.speak = function(){
    display(this.voice)
}
function Cat(name,color){
    Animal.call(this,'Meow')
    this.name = name
    this.color = color
}
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat
var fluffy = new Cat('Fuffy','White')
display(fluffy)
fluffy.speak()

//creating prototype using class

class Animal {
    constructor(voice){
        this.voice = voice ||'Grunt'
    }
    speak(){
        display(this.voice)
    }
}
class Cat extends Animal {
    constructor(name, color) {
        super('Meow')
        this.name = name
        this.color= color
    }
}

var fluffy = new Cat('Fluffy','White')
display(fluffy)
