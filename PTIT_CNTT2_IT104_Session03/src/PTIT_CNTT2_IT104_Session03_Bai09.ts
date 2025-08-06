let num1:number;
let num2:number;
let result=document.getElementById("result")
function sum(num1:number|string,num2:number|string){
    if(typeof(num1)=="string")num1=parseFloat(num1);
    if(typeof(num2)=="string")num2=parseFloat(num2);
    if(isNaN(num1)||isNaN(num2)){result.innerText= "Gia tri truyen vao khong hop le" ;return}
    result.innerText= `${num1} + ${num2} = ${num1+num2}`;
}
function sub(num1:number|string,num2:number|string){
    if(typeof(num1)=="string")num1=parseFloat(num1);
    if(typeof(num2)=="string")num2=parseFloat(num2);
    if(isNaN(num1)||isNaN(num2)){result.innerText= "Gia tri truyen vao khong hop le" ;return}
    result.innerText= `${num1} - ${num2} = ${num1-num2}`;
}
function mul(num1:number|string,num2:number|string){
    if(typeof(num1)=="string")num1=parseFloat(num1);
    if(typeof(num2)=="string")num2=parseFloat(num2);
    if(isNaN(num1)||isNaN(num2)){result.innerText= "Gia tri truyen vao khong hop le" ;return}
    result.innerText= `${num1} * ${num2} = ${num1*num2}`;
}
function div(num1:number|string,num2:number|string){
    if(typeof(num1)=="string")num1=parseFloat(num1);
    if(typeof(num2)=="string")num2=parseFloat(num2);
    if(isNaN(num1)||isNaN(num2)){result.innerText= "Gia tri truyen vao khong hop le" ;return}
    if(num2===0){result.innerText= "Khong the chia cho 0";return}
    result.innerText= `${num1} / ${num2} = ${num1/num2}`;
}
function power(num1:number|string,num2:number|string){
    if(typeof(num1)=="string")num1=parseFloat(num1);
    if(typeof(num2)=="string")num2=parseFloat(num2);
    if(isNaN(num1)||isNaN(num2)){result.innerText= "Gia tri truyen vao khong hop le" ;return}
    result.innerText= `${num1}^${num2} = ${Math.pow(num1,num2)}`;
}
function sqrt(num1:number|string,num2:number|string){
    if(typeof(num1)=="string")num1=parseFloat(num1);
    if(typeof(num2)=="string")num2=parseFloat(num2);
    if(isNaN(num1)||isNaN(num2)){result.innerText= "Gia tri truyen vao khong hop le" ;return}
    result.innerText= `${num1}√${num2} = ${Math.pow(1/num1,num2)}`;
}
function factorial(num1:number|string){
    if(typeof(num1)=="string")num1=parseFloat(num1);
    if(isNaN(num1)){result.innerText= "Gia tri truyen vao khong hop le" ;return}
    if(num1<0){result.innerText= "Gia tri truyen vao am";return}
    let num3=1
    for(let i=1;i<=num1;i++){
        num3*=i;
    }
    result.innerText= `${num1}! = ${num3}`;
}
function takeInput(){
    num1=document.getElementById("num1").value
    num2=document.getElementById("num2").value
}
document.getElementById("sum")?.addEventListener("click",function(){
    takeInput();
    sum(num1,num2);
})
document.getElementById("sub")?.addEventListener("click",function(){
    takeInput();
    sub(num1,num2);
})
document.getElementById("mul")?.addEventListener("click",function(){
    takeInput();
    mul(num1,num2);
})
document.getElementById("div")?.addEventListener("click",function(){
    takeInput();
    div(num1,num2);
})
document.getElementById("power")?.addEventListener("click",function(){
    takeInput();
    power(num1,num2);
})
document.getElementById("sqrt")?.addEventListener("click",function(){
    takeInput();
    sqrt(num1,num2);
})
document.getElementById("factorial")?.addEventListener("click",function(){
    takeInput();
    factorial(num1);
})