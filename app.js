let kozel = document.querySelector(".koz");

let parolEl = document.querySelector("#parol");

let formEl = document.querySelector(".form");


formEl.addEventListener("submit" , (e) =>{
    e.preventDefault();

    let formData = new FormData(e.target);

    let formDb = {
        login: formData.get(`loginn`),
        parol: formData.get(`paroll`),
    };
    console.log(formDb);
    formEl.reset();
});
