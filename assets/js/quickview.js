"use strict";

function fillQuickview(totalECTS,desiredECTS){
    progressBar(calculateECTS(desiredECTS), totalECTS);
    document.querySelector("aside p:first-of-type").innerHTML =  calculateECTS(desiredECTS).toString();
    let currentects = parseInt(document.querySelector("#asideECTS p:first-of-type").innerHTML.substring(0,2));
    currentects -= desiredECTS;
    document.querySelector("#asideECTS p:first-of-type").innerHTML = `${currentects} ECTS left`;
    ectsPerSemester();
}

function progressBar(desiredECTS, totalECTS){
    let percent = ((desiredECTS / totalECTS) * 100).toFixed(0)
    document.querySelector("#progress").style.width = `${percent}%`;
    document.querySelector("#asideECTS p:last-of-type").innerHTML = `${percent}% desired ects allocated`;
    let color = calculateColorProgressBar(percent);
    document.querySelector("#progress").removeAttribute("class");
    document.querySelector("#progress").setAttribute("class", color);
}

function ectsPerSemester(){
    let ul = document.querySelector("aside ul")
    ul.innerHTML = "";
    let counter = countSemestersOfChosenCourses(modulesToTake);
    let i = 0;
    counter.forEach(semester => {
        i ++;
        if(semester !== 0){
            document.querySelector("aside ul").insertAdjacentHTML("beforeend",`<li> ${semester} courses in S${i}</li>`);
        }
    })
}

function initQuickview(){
    document.querySelector("aside p:first-of-type").innerHTML = "0";
    document.querySelector("#asideECTS p:first-of-type").innerHTML = "0 ECTS left";
    document.querySelector("#asideECTS p:last-of-type").innerHTML = "0% desired ects allocated";
    document.querySelector("aside ul").innerHTML = "";
}

function assignTotalECTS(totalECTS){
    document.querySelector("#asideECTS p:first-of-type").innerHTML = `${totalECTS} ECTS left`;
}

function calculateECTS(desiredECTS){
    let currentDesiredECTS = parseInt(document.querySelector("aside p:first-of-type").innerHTML);
    return currentDesiredECTS + parseInt(desiredECTS);
}

function checkECTS(totalECTS, desiredECTS){
    return totalECTS >= calculateECTS(desiredECTS);
}

function calculateColorProgressBar(percent){
    let color = "";
    switch(true){
        case percent <= 25:
            color = "white";
            break;
        case percent <= 50 && percent > 25:
            color = "purple";
            break;
        case percent <= 75 && percent > 50:
            color = "pink";
            break;
        case percent < 100 && percent > 75:
            color = "orange";
            break;
        case percent > 99:
            color = "yellow";
            break;
    }
    return color;
}