//  typescript functions
function add(a: number, b:number): number{
    return a + b
}
console.log(`addition of the two numbers is ${add(5, 3)}`)
console.log("check your tax below")
function checkAge(age:number, salary:number): string{
const TaxAmount = (salary *0.5)

    if(age>=18){
        return ` your tax amount is ${TaxAmount}`
    }
   else
     return " you are not eligible to pay tax"
}

console.log(checkAge(20, 50000))