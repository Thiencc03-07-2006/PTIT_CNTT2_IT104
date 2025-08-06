let username:string="An Nien"
let age:number=2000
let job:string="unknows"
let printInfo=(username:string,age:number,job:string):string=>{
    return `Ten: ${username} Tuoi: ${age} job: ${job}`
}
console.log(printInfo(username,age,job))