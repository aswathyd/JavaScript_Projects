"use strict";

////creating object in literal method
//var cat = {name:"Fluffy",
//           color:"white",
//           speak: function(){display("mawooo")}
//
//          }
//
//
//display(cat.name);
//cat.speak();
//
////using constructor function to create javascript object
//
//function Cat(name,color){
//    this.name = name,
//    this.color = color
//}
//
//var cat = new Cat("fluffy","white")
//
//display(cat);
//
////using object.create() to create javascript object
//
//var cat = Object.create(Object.prototype,{
//                        name:{
//                              value:"Fluffy",
//                              enumerable:true,
//                              writeable:true,
//                              configurable:true},
//                        color:{
//                             value:"White",
//                               enumerable:true,
//                               writeable:true,
//                               configurable:true}
//                        });
//display(cat);
//
////using ECMAScript 6 class to crate javascript object
//
//class Cat {
//    constructor (name,color){
//        this.name = name;
//        this.color = color;
//    }
//    speak(){display("meeoow")}
//}
//
//var cat = new Cat("fluffy","white")
//display(cat);
//cat.speak();

//name property can't change if the writable is false
//var cat = {name:"Fluffy",
//           color:"white",
//          }
//Object.defineProperty(cat,'name',{writable:false})
//cat.name ='scrachy'
//display(Object.getOwnPropertyDescriptor(cat,'name'))

// property is an object in order to make it readable we need to freeze that Object

//var cat = {name: {first:'fluffy',last:'leBoo'},
//           color:"white",
//          }
//Object.defineProperty(cat,'name',{writable:false})
//Object.freeze(cat.name)
//cat.name.first ='scrachy'
//display(cat.name)

//using the Enumerable Attributes

//var cat = { name :{first: 'Flufy', last:'leBow'},
//            color: 'white'
//          }
//make not enumerable(not loop over it)
//Object.defineProperty(cat,'name',{enumerable:false})
//make  enumerable( loop over it)
//Object.defineProperty(cat,'name',{enumerable:true})
////for(var propertyName in cat)
////    {
////        display(propertyName+ ':'+cat[propertyName])
////    }
////display(Object.keys(cat));
//
////to get all cat Object
//display(JSON.stringify(cat))

//using the configurable attribute

//using getters and setters

var cat = { name :{first: 'Flufy', last:'leBow'},
            color: 'white'
          }
Object.defineProperty(cat,'fullName',{
    get: function(){
            return this.name.first+ ' ' + this.name.last
                      },
    //set the first and last name based on the full name
    set:function(value){
        var nameParts = value.split(' ')
        this.name.first = nameParts[0]
        this.name.last = nameParts[1]
    }
    
     })
cat.fullName = 'Muffin Top'
display(cat.fullName)
display(cat.name.first)
display(cat.name.last)