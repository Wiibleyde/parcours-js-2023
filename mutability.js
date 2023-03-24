const clone1 = { ...person }
const clone2 = { ...person }
const samePerson = person

person.age = person.age + 1
person.country = 'FR'

console.log(clone1)
console.log(clone2)
console.log(samePerson)
