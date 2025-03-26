const grades=[50,22,54,23,52,30]
for(let i=0;i<grades.length;i++){
    console.log(`Index: ${i}, Grade: ${grades[i]}`);
}

// get all grades <50
const result1=grades.filter(i=>i<50);
console.log(result1)

// get all grades >50
const result2=grades.filter(i=>i>50)
console.log(result2)