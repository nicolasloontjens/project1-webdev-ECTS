"use strict";

/* Declare any global variables below this line, but before the first function call */
let currentSection = 0;
let sections = [];
let person = null;
let sortedModules = []
let currentModules = "#completedcoursesmodules"
let alreadyCompletedModules = []
let modulesToTake = []
let totalECTS = 0
let currentfilters = "f1"

document.addEventListener("DOMContentLoaded", init);

function init() {
    // Fillings
        //sections
            sections = document.querySelectorAll('#container>section')
            sections.forEach((section) => {section.classList.toggle('hidden')})
            sections[currentSection].classList.toggle('hidden');
        //modules
            fillModules("#completedcoursesmodules",modules,"Completed")
            fillModules("#configurecoursesmodules", modules,"Take Course")
        //quickview
            initQuickview();
    // Bindings
    document.querySelectorAll('.button a:not([id="validate"])').forEach(button => button.addEventListener("click", handleNavigation));
    document.querySelector('.button a[id="validate"]').addEventListener("click", processPersonalData);
    document.querySelectorAll('.filters a').forEach(button => button.addEventListener("click", changeFilter));

    document.querySelector('#sortCourses').addEventListener("change",filterAndSortModules);
    document.querySelector('#sorteerModules').addEventListener("change",filterAndSortModules);

    document.querySelector("#gotoconfigurecourses").addEventListener("click", goToConfigureCourses);
    document.querySelector("#gotocompletedcourses").addEventListener("click", goToCompletedCourses);

    document.querySelector("#gotochoiceoverview").removeEventListener("click", handleNavigation);
    document.querySelector("#gotochoiceoverview").addEventListener("click", validateCourseConfiguration);

    document.querySelector('button[type="submit"]').addEventListener("click", submitForm);
    // Delegates
    document.querySelector("#completedcoursesmodules").addEventListener("click", delegateModuleAction);
    document.querySelector("#configurecoursesmodules").addEventListener("click", delegateModuleAction);

    // Other initialisations
    checkLocalstorage();
}

function handleNavigation(e) {
    e.preventDefault();
    let currentSection = e.target.getAttribute("data-current-section");
    let nextSection = e.target.getAttribute("data-reference-section");
    switchPage(currentSection, nextSection);
}

function switchPage(previousPage,nextPage){
    sections[previousPage].classList.toggle('hidden');
    sections[nextPage].classList.toggle('hidden');
}

function goToConfigureCourses(){
    sortedModules = [];
    currentModules = "#configurecoursesmodules";
    currentfilters = "f2";
    document.querySelector("#ConfigureCourses").scrollIntoView(false);
}

function goToCompletedCourses(){
    sortedModules = [];
    currentModules = "#completedcoursesmodules";
    currentfilters = "f1";
}

function submitForm(e){
    e.preventDefault();
    e.stopPropagation();
    switchPage(4,5);
    localStorage.clear();
}
