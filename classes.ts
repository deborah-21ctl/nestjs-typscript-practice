// classes in typescript
class Car{
    color:string;
    name:string;

  constructor(color:string = "white", name:string = "Default Car") {
    this.color = color;
    this.name = name;
  }
}
const myCar = new Car();
myCar.color = "red";
myCar.name = "BMW";








class person{
    name:string;
    age:number;
    grade:number;

constructor(name:string, age:number, grade:number){
    this.name= name;
    this.age =age;
    this.grade = grade;
}

}

const person1= new person("john", 20, 90);
console.log(`Name: ${person1.name}, Age: ${person1.age}, Grade: ${person1.grade}`);


