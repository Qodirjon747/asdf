let input=document.getElementById("input");
let send=document.getElementById("btn");
let plus=document.getElementById("plus");
let minus=document.getElementById("minus");
let colinp=document.getElementById("colinp");
let sonh=document.getElementById("son");
send.addEventListener("click",()=>{
    sonh.textContent=input.value;
})
plus.addEventListener("click",()=>{
    sonh.textContent=+sonh.textContent+1
})
minus.addEventListener("click",()=>{
    sonh.textContent=+sonh.textContent-1
})
colinp.addEventListener("input",()=>{
    sonh.style.color=colinp.value
})