let array = [23, 11, 99, 85, 9, 7, 43, 13, 73, 89, 25, 35, 3, 1, 39, 47, 67, 79, 29, 21, 75, 45, 41, 91, 93, 95, 97, 59, 37, 31];

/* let vetorfinal=[]
for(let i = 0; i < array.length; i ++){
   array[i] % 2 == 1   

    vetorfinal.push(array[i])
}


console.log(vetorfinal) */
array.sort(function compare(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
})

console.log(array)



