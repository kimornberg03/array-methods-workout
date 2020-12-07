// indexOf
//
// Metoden söker igenom arrayen efter ett visst argument
// och returnerar indexet hos det elementet som matchar.
// indexOf returnerar -1 om inget matchande element hittas i arrayen


//IndexOF
const things = ['car', 'house', 'castle', 'bridge', 'tree']

console.log(things.indexOf('tree')) // 4
console.log(things.indexOf('car')) // 0

console.log(things.indexOf('spaceship')) // -1


//includes
const jdm = ["Rx7", "R34", "Supra", "NSX"]

console.log(jdm.includes("Rx7"))

console.log(jdm.includes("C63"))


//push_pop
const countries = ["Sweden", "Ecuador", "Russia", "Kazakstan"]

let last = countries.pop()
let first = countries.push("Indonesia")

console.log(countries)


//some
const numbers = [3, 5, 9, 12, 25, 4]

const findNumber = numbers.find(element => element > 15)

console.log(findNumber);




//every
const lower = (currentValue) => currentValue < 5

const numbers1 = [2, 5, 9, 1, 3]

        console.log(numbers1.every(lower))