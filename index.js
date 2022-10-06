function binarySearch(arr, value){
    const sortedArr = arr.sort((a,b)=>a-b)

    inicio = 0
    fim = sortedArr.length - 1
    while (inicio <= fim) {
        meio = Math.trunc((fim - inicio)/2) + inicio
        if (sortedArr[meio] === value){
            return value
        } else if (sortedArr[meio] > value ) {
            fim = meio - 1
        } else {
            inicio = meio + 1
        }
    }
    return -1
}

console.log(binarySearch([5, 6, 7, 8, 9, 10], 4))
console.log(binarySearch([5, 6, 7, 8, 9, 10], 5))
console.log(binarySearch([5, 6, 7, 8, 9, 10], 6))
console.log(binarySearch([5, 6, 7, 8, 9, 10], 7))
console.log(binarySearch([5, 6, 7, 8, 9, 10], 8))
console.log(binarySearch([5, 6, 7, 8, 9, 10], 9))
console.log(binarySearch([5, 6, 7, 8, 9, 10], 10))
console.log(binarySearch([5, 6, 7, 8, 9, 10], 11))