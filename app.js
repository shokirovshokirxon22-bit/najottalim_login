let kozel = document.querySelector(".koz");

let parolEl = document.querySelector("#parol");

kozel.addEventListener("click" , ()=>{
    if(parolEl.hasAttribute("type") = "password"){
        parolEl.setAttribute("type" , "text");
    }
});