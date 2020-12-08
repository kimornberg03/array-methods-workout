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


//map
const triangleArea = [5, 2, 9, 25, 2500]
let height = 5

const map = triangleArea.map(x => (x * height) /2 )

console.log(map)

//filter
const skiResort = ["Alagna", "Chamonix", "Sankt Anton", "Sölden", "Zermatt"]

const result = skiResort.filter(skiResort => skiResort.length > 7)

console.log(result)

//forEach
const names = ["Elias", "Max", "Julia", "Lukas"]

names.forEach(x => console.log(x))

//Sort
const numbers2 = [5, 7, 3, 4, 9, 1]
numbers2.sort()
console.log(numbers2)

const filmRate = ["8/10 dark knight", "9/10 Tokyo Drift", "4/10 Death note"]

console.log(filmRate)

//Fill
const num = [5, 2 , 3, 1, 7, 8, 9]

console.log(num.fill(2, 1, 4));

console.log(num.fill(0, 3));

console.log(num.fill(9));