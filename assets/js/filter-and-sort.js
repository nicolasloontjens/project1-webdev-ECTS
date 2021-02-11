"use strict";

function changeFilter(e) {
    e.preventDefault();
    e.stopPropagation();
    let filter = e.target.innerHTML;
    fillModulesFirstTimeFiltering();
    let modules = document.querySelectorAll(`${currentModules} section`);
    modules.forEach(module => {
        if(module.getAttribute("data-semester") === filter){
            module.classList.toggle("hidden");
        }
    })
    e.target.parentElement.classList.toggle("filtersActive");

}

function filterAndSortModules(e) {
    let value = e.target.selectedIndex;
    if(value === 0){
        sortModules(modules);
        fillModulesButton(false);
        adjustModulesWhenSorted();
    }
    else{
        sortModules(modules);
        fillModulesButton(true);
        adjustModulesWhenSorted();
    }
}

function sortModules(filteredModules) {
    sortedModules = JSON.parse(JSON.stringify(filteredModules));
    sortedModules.sort(function(a,b){
        return a.module.localeCompare(b.module);
    });
}

function fillModulesFirstTimeFiltering(){
    if(sortedModules.length === 0){
        sortModules(modules);
        fillModulesButton(false);
    }
}

function adjustModulesWhenSorted(){
    let filters = document.querySelectorAll(`#${currentfilters} li a p`);
    let modules = document.querySelectorAll(`${currentModules} section`);
    filters.forEach(filter => {
        if(filter.parentElement.classList.contains("filtersActive") !== true){
            let currentFilter = filter.innerHTML;
            modules.forEach(module => {
                if(module.getAttribute("data-semester") === currentFilter){
                    module.classList.toggle("hidden");
                }
            })
        }
    })
    fixButtonStateAfterSorting();
}

function fillModulesButton(reverse){
    if(reverse === true){
        if(currentModules === "#completedcoursesmodules"){
            fillModules(`${currentModules}`, sortedModules.reverse(),"Completed");
        }
        else{
            fillModules(`${currentModules}`, sortedModules.reverse(),"Take Course");
        }
    }
    else{
        if(currentModules === "#completedcoursesmodules"){
            fillModules(`${currentModules}`, sortedModules, "Completed");
        }
        else{
            fillModules(`${currentModules}`, sortedModules, "Take course");
        }
    }
}

function fixButtonStateAfterSorting(){
    let buttons = document.querySelectorAll(`${currentModules} button`);
    let moduleArray;
    if(currentModules === "#completedcoursesmodules"){
        moduleArray = alreadyCompletedModules;
    }
    else{
        moduleArray = modulesToTake;
    }
    moduleArray.forEach(module =>{
        buttons.forEach(button =>{
            if(button.getAttribute("data-abbreviation") === module.module){
                button.classList.toggle("moduleButtonClicked");
            }
        })
    })
}