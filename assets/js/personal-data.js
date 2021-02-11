"use strict";

function processPersonalData(e) {
    let name = document.querySelector('input[id="name"]').value;
    let email = document.querySelector('input[id="email"]').value;
    let ECTS = document.querySelector('input[id="ECTS"]').value;
    person = {name:`${name}`, email: `${email}`, ECTS:`${ECTS}`};

    if(validateData(person)){
        handleNavigation(e);
        savePersonalData(person);
        assignTotalECTS(person.ECTS);
        totalECTS = person.ECTS;
    }
}

function validateData(person){
    let nameLength = person.name.length;
    let ects = parseInt(person.ECTS);
    return nameLength >= 2 && (ects >= 3 && ects <= 60);
}

function savePersonalData(person){
    localStorage.setItem("person", JSON.stringify(person));
}

function checkLocalstorage(){
    if(localStorage.getItem("person") !== null){
        let person = JSON.parse(localStorage.getItem("person"));
        document.querySelector('input[id="name"]').value = person.name;
        document.querySelector('input[id="email"]').value = person.email;
        document.querySelector('input[id="ECTS"]').value = person.ECTS;
    }
}