let str="hello world apple banana orange pumpkin cucumber";
let arr=str.split(/\s+/);
let temp=[...arr].map(target=>{
    let newStr="";
    for (let index = 0; index < target.length; index++) {
        if(!newStr?.includes(target[index])){
            newStr+=target[index];
        }
    }
    return newStr
}).map(target=>target.length)
console.log(arr[temp.indexOf(Math.max(...temp))])