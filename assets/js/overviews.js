"use strict";

//buttons
function delegateModuleAction(e) {
    e.stopPropagation();
    let button = e.target;
    if(button.hasAttribute("form")){
        if(currentModules === "#completedcoursesmodules"){
            if(button.classList.contains("moduleButtonClicked") !== true ){
                addToModules(button, alreadyCompletedModules);
            }
            else{
                removeFromModules(button, alreadyCompletedModules);
            }
            button.classList.toggle("moduleButtonClicked");
        }
        else{
            if(button.classList.contains("moduleButtonClicked") !== true){
                if(checkECTS(totalECTS, button.getAttribute("data-ects")) && checkTimeBetweenModules(button.getAttribute("data-semester"))){
                    addToModules(button,modulesToTake);
                    fillQuickview(totalECTS, button.getAttribute("data-ects"));
                    button.classList.toggle("moduleButtonClicked");
                }
            }
            else{
                removeFromModules(button, modulesToTake);
                fillQuickview(totalECTS, "-" + button.getAttribute("data-ects"));
                button.classList.toggle("moduleButtonClicked");
            }
        }
    }
}

//sorry voor de lange functie maar het is veel overzichtelijker
function fillModules(selector, modules, buttonText) {
    let section = document.querySelector(`${selector}`);
    section.innerHTML = "";
    modules.forEach(module =>{
        let moduleName = module.module;
        let lecturer = module.lecturer;
        let semester = module.semester;
        let ects = module.ects;
        let abbreviation = generateAbbreviation(moduleName);
        let color = randomModuleColor();
        section.insertAdjacentHTML('beforeend', `
        <section data-semester="${semester}"> 
            <h2>${moduleName}</h2> 
            <div class="${color}"> 
                <p class="modulecard">${abbreviation}</p> 
            </div> 
            <p>${ects}SP</p> 
            <h3>${lecturer}</h3> 
            <button data-abbreviation="${abbreviation}" data-ects="${ects}" data-semester="${semester}" data-fullname="${moduleName}" form="personalData" type="button">${buttonText}</button> 
        </section>`);
    })
}

function randomModuleColor(){
    const colors = ["green", "yellow", "pink", "orange", "blue", "purple", "white"];
    let randomIndex = Math.floor(Math.random() * 7);
    return colors[randomIndex];
}

function generateAbbreviation(moduleName){
    let letters = moduleName.match(/\b([A-Z])/g);
    return letters.join('');
}


function addToModules(moduleToAdd, modules){
    let ects = moduleToAdd.getAttribute("data-ects");
    let moduleAbbreviation = moduleToAdd.getAttribute("data-abbreviation");
    let semester = moduleToAdd.getAttribute("data-semester");
    let moduleName = moduleToAdd.getAttribute("data-fullname");
    let module = {module:`${moduleAbbreviation}`, ects: `${ects}`, semester:`${semester}`, name:`${moduleName}`};
    modules.push(module);
}

function removeFromModules(moduleToRemove, modules){
    let moduleName = moduleToRemove.getAttribute("data-abbreviation");
    let indexToRemove = 0;
    for(let i = 0; i < modules.length; i++){
        if(modules[i].module === moduleName){
            indexToRemove = i;
        }
    }
    modules.splice(indexToRemove,1);
}

function checkTimeBetweenModules(currentModule){
    if(modulesToTake.length === 0){
        return true;
    }
    let counter = countSemestersOfChosenCourses(modulesToTake);
    let lowestSemesterIndex = 0;
    let go = true;
    counter.forEach(semester => {
        if(go){
            if(semester > 0){
                go = false;
            }
            else{
                lowestSemesterIndex ++;
            }
        }
    })
    let lowestSemester = lowestSemesterIndex + 1;
    let currentSemester = currentModule.match(/\d+/);
    currentSemester.join("");
    let difference = lowestSemester-currentSemester;
    if(difference < 0){
        return -difference < 3;
    }
    else{
        return difference < 3;
    }
}

function validateCourseConfiguration(e){
    let ectsSelected = document.querySelector("aside p:first-of-type").innerHTML;
    if(ectsSelected === totalECTS.toString()){
        switchPage(3,4);
        fillSummary(e);
    }
}

function countSemestersOfChosenCourses(modules){
    let counter = [0,0,0,0,0,0];
    modules.forEach(module =>{
        let semesterIndex = module.semester;
        let number = semesterIndex.match(/\d+/);
        number.join("");
        counter[parseInt(number)-1] += 1;
    })
    return counter;
}