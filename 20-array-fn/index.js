//1. indexOf
// let arr = ["Jhonny", "Jimmy", "Jully"]
// let res = arr.indexOf("Biily")
// console.log(res);


//2. find
// let arr = ["Jhonny", "Jimmy", "Jully"]
// let res = arr.find(function(el){
//     return el == "Jhonny"
// })
// console.log(res);


//example: finding object by key
// let data = [
//     {
//         id: 1,
//         name: "John"
//     },
//     {
//         id: 2,
//         name: "Sam"
//     },
//     {
//         id: 3,
//         name: "Harry"
//     },
// ]

// let res = data.find(function(obj){
//     return obj.id == 2
// })
// console.log(res);


//3. push
// let arr = [1, 2, 3, 4, 5]
// let res = arr.push(6)
// console.log(arr);


//4. pop
// let arr = [1, 2, 3, 4, 5]
// arr.pop()
// console.log(arr);


//5. shift
// let arr = [1, 2, 3, 4, 5]
// arr.shift()
// console.log(arr);


//6. unshift
// let arr = [1, 2, 3, 4, 5]
// arr.unshift(0)
// console.log(arr);


//7. splice
// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 2, 200)
// console.log(arr);


//8. slice
// let arr = [1, 2, 3, 4, 5]
// let res = arr.slice(2, 4)
// console.log(res);

//9. join
// let arr = ["I", "am", "a", "string!"]
// let res = arr.join("-")
// console.log(res);


//10. concat
// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10]
// let res = arr1.concat(arr2)
// console.log(res);

//11. sort
// let arr = [3, 5, 1, 9, 2, 4, 7, 8, 6]
// arr.sort(function(a, b){
//     return b - a
// })
// console.log(arr);


//example: sorting array of object by key
// let data = [
//     {
//         id: 3,
//         name: "John"
//     },
//     {
//         id: 1,
//         name: "Sam"
//     },
//     {
//         id: 2,
//         name: "Harry"
//     },
// ]
// data.sort(function(a, b){
//     return a.id - b.id
// })
// console.log(data);


//12. reverse
// let arr = [1, 2, 3, 4, 5]
// arr.reverse()
// console.log(arr);
 

//13. map
// let arr = [1, 2, 3, 4, 5]
// let res = arr.map(function(el, index){
//     return el * 2
// })
// console.log(res);


//14. flat
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// let res = arr.flat()
// console.log(res);


//example: flatting array with myltiple depth
// let arr = [
//     [1, [2], 3],
//     [4, [5], 6],
//     [7, [8], 9]
// ]
// let res = arr.flat(Infinity)
// console.log(res);


//15. flatMap
// let sentences = ["JavaScript Array flatMap()", " ", "is", " ", "Awesome"]
// let words = sentences.flatMap(s => s.split(' '))// map -> flat
// console.log(words);


//16. reduce
// let arr = [34, 64, 29, 44]
// let res = arr.reduce(function(acc, val){
//     return acc + val
// }, 0)
// console.log(res);


//exercise: removing duplicates of array
// let arr = [1, 2, 2, 3, 4, 4, 6, 6, 9]
// let res = arr.reduce(function(acc, val){
//     if(acc.indexOf(val) == -1) acc.push(val)
//     return acc
// }, [])
// console.log(res);


//17. reduceRight
// let arr = [34, 64, 29, 44]
// let res = arr.reduceRight(function(acc, val){
//     console.log(acc, val);
//     return acc + val
// }, 0)
// console.log(res);


// //18. filter
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let res = arr.filter(function(el){
//     return el > 3
// })
// console.log(res);

//19. some
// let arr = [1, 2, 3, 4, 5]
// let res = arr.some(function(el){
//     return el > 6
// })
// console.log(res);

//20. every
// let arr = [1, 2, 3, 4, 5]
// let res = arr.every(function(el){
//     return el > 2
// })
// console.log(res);
