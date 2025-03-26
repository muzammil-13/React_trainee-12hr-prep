// Write a function that takes an array of numbers and returns the sum of all even numbers.
const array=[1,2,3,4,5,6,7,8,9,10];

function sumEvenNumbers(arr) {
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            sum+=arr[i];
        }
    }
    console.log(sum)
    // return sum;
}

sumEvenNumbers(array)