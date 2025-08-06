let str="hello world"
let newStr=""
for (let index = 0; index < str.length; index++) {
    if(!newStr?.includes(str[index])){
        newStr+=str[index];
    }
}
console.log(`"${newStr}"`);
