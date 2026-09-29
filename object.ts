// typescript objects

//  this  inter face says that the object should have these properties and their types
interface Car{
    name:string,
    color:string,
    model:number,
}

const mycar:Car={
    name:"toyota",
    color:"black",
    model:2020
}

console.log(`the name of the car is ${mycar.name}`)


interface Author{
    name:string,
    page: number,
    genre:string,
    book?:string
}
const Mybook:Author={
    name:"Ebun",
    page: 300,
    genre:"fiction",
    book:"highschool"
}

console.log(`the name of the author is ${Mybook.name} `)