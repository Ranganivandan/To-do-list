const inputvalue=document.querySelector("#inputvalue") as HTMLFormElement
const submit =document.querySelector("#button") as HTMLButtonElement
const ullist=document.querySelector(".todolist") as HTMLElement
const deleter=document.querySelector("#delete") as HTMLButtonElement

const handlesubmit = (e:Event)=>{
e.preventDefault();
const newli=document.createElement("li");
const newcheck=document.createElement("input");
newcheck.type="checkbox";
newli.append(inputvalue.value,newcheck);
ullist.append(newli);
console.log(inputvalue.value)
inputvalue.value=""
}


deleter.addEventListener("click",()=>{
ullist.innerHTML="";
})


submit.addEventListener("click",(e)=>{
    handlesubmit(e);
})