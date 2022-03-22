// return array whether original collection is object or array

function arrayMaker(collection) {
  let newArray = []
  if (Array.isArray(collection) === false) {
    newArray = (Object.values(collection))
  } else newArray = collection.slice()
  return newArray
}

// challenge 1

function myEach(collection, callback){
  let newArr = arrayMaker(collection)

  for (let i = 0; i < newArr.length; i++) {
    const element = newArr[i]
    callback(element)
  } 
  return collection
}

// challenge 2

function myMap(collection, callback) {
  let newArr = arrayMaker(collection)
  let secondArr = []

  for (let i = 0; i < newArr.length; i++) {
    const element = newArr[i]
    secondArr.push(callback(element))
  } 
  return secondArr
}

// challenge 3

function myReduce(collection, callback, acc) {
  const newArr = arrayMaker(collection)
  acc = acc || newArr.shift()
  console.log(acc)
  for (let i = 0; i < newArr.length; i++) {
    acc = callback(acc, newArr[i], newArr)
  }
  console.log(console.log)
  return acc
}

// try 2

// function myReduce(collection, callback, acc) {
//   const newArr = arrayMaker(collection)
//   let splitArr

//   console.log(acc)
//   if (acc === undefined)  {
//     splitArr = newArr.splice(1, 0)
//     for (let i = 0; i < newArr.length; i++) {
//       acc = callback(acc, newArr[i], newArr)
//     } return acc
//   } else {    
//   console.log(splitArr)
//   for (let i = 0; i < newArr.length; i++) {
//     acc = callback(acc, newArr[i], newArr)
//     }
//   } return acc
// }

// try 3

// function myReduce(collection, callback, acc) {
//   const newArr = arrayMaker(collection)
//   const secondArr = [...newArr]
//   secondArr.shift()

//   acc = acc || secondArr
//   for (let i = 0; i < newArr.length; i++) {
//     acc = callback(acc, newArr[i], newArr)
//   }
//   return acc
// }

// try 4

// function myReduce(collection, callback, acc) {
//   const newArr = arrayMaker(collection)

//   if (acc = null) {
//     acc = acc || newArr.shift()
//     for (let i = 0; i < newArr.length; i++) {
//       acc = callback(acc, newArr[i], newArr)
//     }
//     console.log(newArr)
//     return acc
//   } else {
//     for (let i = 1; i < newArr.length; i++) {
//       acc = callback(acc, newArr[i], newArr)
//     }
//     console.log(newArr)
//     return acc
//   }
// }

// test cases

const testArr = [1, 2, 3, 4]
const testObj = {one: 1, two: 2, three: 3, four: 4}
const callback = (acc, val, collection) => (acc + (val * 3))

console.log(myReduce(testArr, callback, 10))
console.log(myReduce(testArr, callback))
console.log(myReduce(testObj, callback))

// challenge 4

// function myFind(collection, predicate) {
//   const newArr = arrayMaker(collection)
//   console.log(newArr)

//   for (let i = 0; i < newArr.length; i++) {
//     let element = newArr[i]
//     console.log(predicate(element))
//     if (element === predicate(element)) {
//       return element
//     } else undefined 
//   }
// }

function myFind(collection, predicate) {
  const newArr = arrayMaker(collection)

  for (let i = 0; i < newArr.length; i++) {
    let element = newArr[i]
    if (predicate(element)) {
      return element
      break
    } else undefined 
  }
}

function myFilter(collection, predicate) {
  const newArr = arrayMaker(collection)
  const secondArr = []

  for (let i = 0; i < newArr.length; i++) {
    let element = newArr[i]
    if (predicate(element)) {
      secondArr.push(element)
    }
  }
  return secondArr
}

function mySize(collection) {
  const newArr = arrayMaker(collection)
  return newArr.length
}

function myFirst(array, num) {
  let copiedArr = [...array]
  if (!num) {
    return copiedArr.shift()
  } else return copiedArr.slice(0, num)
}

function myLast(array, num) {
  let copiedArr = [...array]
  if (!num) {
    return copiedArr.pop()
  } else return copiedArr.slice(-num)
}

function myKeys(object) {
  return Object.keys(object)
}

function myValues(object) {
  return Object.values(object)
}