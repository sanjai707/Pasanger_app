let countEl=document.getElementById("count-el")
let mesId=document.getElementById("mes-id")
console.log(countEl)
let count=0
function increcount(){
    console.log("button was run") 
    count+=1;
    countEl.innerText=count;
console.log(count);
}
function decrement(){
    count-=1;
    countEl.innerText=count;
console.log(count);
}
function reset()
{
    count=0;
    countEl.innerText=count;
    mesId.textContent="Previous Entries: "
}
function save()
{
    var st=" "+count+" - ";
    mesId.textContent+=st;
    countEl.innerText=0;
    count=0;
}
