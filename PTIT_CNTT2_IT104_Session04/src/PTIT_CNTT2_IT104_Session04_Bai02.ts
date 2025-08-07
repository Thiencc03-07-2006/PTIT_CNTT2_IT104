let arr:number[]=[9.25,7.5,7]
console.log(`Diem trung binh: ${(arr.reduce((a,b)=>a+b,0)/arr.length).toFixed(2)}`)