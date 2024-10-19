// // variable declaration and assignment
// var man = "Mubarak"
// var phone = 7037421323
// var disability = false
// var accountBalance = undefined
// var debt = null
// var greeting = "hello world"

// var costPrice = 25000
// var sellingPrice = 34000
// var profit = sellingPrice - costPrice
// var percentageProfit = (profit / costPrice) * 100 

// var shoePrice = 50000
// var discount = 40000
// shoePrice **= discount



// // printing values using the console
// console.log(greeting)
// console.log(man)
// console.log(phone)
// console.log(disability)
// console.log(accountBalance)
// console.log(debt)
// console.log(profit)
// console.log(percentageProfit)
// console.log(shoePrice)


// console.log(5 !== 5)

// var firstName = "mubarak "
// var lastName = "thanni "
// var course = "web development "
// var school = "Gmc "
// var dreamSalary = "$10,000 "
// var jobTitle = "web developer "

// var sentence = "my name is " + firstName + lastName + "i am currently studying " + course + "at " + school + "i would like to be a " + jobTitle + "earning " + dreamSalary

// console.log(sentence)

var president = "tinubu "
var nickname = "T Pain "
var description = "amazing "
var wishes = "long life and prosperity "

var sentence = "my president name is " + president + "we call him " + nickname + "he his the most " + description + "president ever and i wish him " + wishes

console.log(sentence)

// Introduction to Arrays
var shoppingCart = ["milo", "sardine", "water", "bread", "rice"]
var array2 = [undefined, null, 25, false, "testing"]

// Array methods
// .pop(), .push(), .shift(), .unshift()
shoppingCart.pop()
console.log(shoppingCart)
shoppingCart.pop()
console.log(shoppingCart)

shoppingCart.push("turkey")
console.log(shoppingCart)
shoppingCart.push("chicken", "big", "beans", "plantain")
console.log(shoppingCart)

shoppingCart.shift()
console.log(shoppingCart)

shoppingCart.unshift("tea, lice, big")
console.log(shoppingCart)

// accessing arrays
console.log(shoppingCart.length)

console.log(shoppingCart[2])

var totalName = ["fisayo", "korede", "fiyin", "moridiyat", "rosheed", "fola", "muhammed", "badmus", "eunice"]
console.log(totalName)

totalName.unshift("Lee", "Mubarak")
console.log(totalName)

console.log(totalName[4])
totalName[5] = "temitope"
console.log(totalName)

// conditional statement
// var accountBalance = 50500
// if(accountBalance <= 50000){
    // console.log("omo i don broke")
// } else{
    // console.log("omo i get money pass T-Pain")
// }

// // var student = true
// // if(student === true){
//     // console.log("freetickets")
// // } else{
//     console.log("pls pay money")
// }

// var customerAge = 18
// if(customerAge >= 1 && customerAge <= 13){
//     console.log("free tickets")
// } else if(customerAge >= 14 && customerAge <= 20){
//     console.log("your bill is 5000")
// } else if(customerAge >= 21 && customerAge <= 30){
//     console.log("your bill is 10000")
// } else {
//     console.log("your bill is 20000")
// }

var customer = "students"
if(customer === "students"){
    console.log("your bill is 2000")
} else if(customer === "civilservant"){
    console.log("your bill is 5000")
} else if(customer === "developers"){
    console.log("your bill is 100000")
} else if (customer === "politician"){
    console.log("your bill is 500000")
} else {
    console.log("your bill is 1000000")
}