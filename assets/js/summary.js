"use strict";

function fillSummary(e) {
    let totalCompletedEcts = calculateTotalEcts(alreadyCompletedModules);
    let totalConfiguredEcts = calculateTotalEcts(modulesToTake);
    document.querySelector("#choiceoverviewects li p:first-of-type").innerHTML = totalCompletedEcts.toString();
    //p:last-of-type wou niet werken dus daarom id
    document.querySelector("#desired").innerHTML = totalConfiguredEcts.toString();
    fillTbody(alreadyCompletedModules, modulesToTake);
    filltfoot(totalCompletedEcts, totalConfiguredEcts);
}

function fillTbody(parent, parent2) {
    let table = document.querySelector("tbody");
    table.innerHTML = "";
    addFirstTableRow(table)
    let shortestArray = getShortestArray(parent, parent2);
    let i = 0;
    while(i < shortestArray.length){
         let row = `<tr>
                    <td>${parent[i].semester}</td>
                    <td>${parent[i].name}</td>
                    <td>${parent[i].ects}</td>
                    <td>${parent2[i].semester}</td>
                    <td>${parent2[i].name}</td>
                    <td>${parent2[i].ects}</td>
                 </tr>`;
        table.insertAdjacentHTML("beforeend", row);
        i ++;
    }
    if(shortestArray === parent){
        addEmptyRows(i,2, table);
    }
    else{
        addEmptyRows(i,1, table);
    }
}

function filltfoot(parent, parent2) {
    let table = document.querySelector("tbody");
    let row = `<tr>
                <th colspan="2">Totaal aantal SP</th>
                <th>${parent} ECTS</th>
                <th colspan="2">Totaal aantal SP</th>
                <th>${parent2} ECTS</th>
                </tr>`;
    table.insertAdjacentHTML("beforeend", row);
}

function calculateTotalEcts(moduleArray){
    let total = 0;
    moduleArray.forEach(module => {
        let currentEcts = parseInt(module.ects);
        total += currentEcts;
    })
    return total;
}

function addFirstTableRow(table){
    table.innerHTML =
        `<tr> 
            <th>semester</th>
            <th>module</th>
            <th># SP</th>
            <th>semester</th>
            <th>module</th>
            <th># SP</th>
        </tr>`;
}

function getShortestArray(array1, array2){
    if(array1.length > array2.length){
        return array2;
    }
    else{
        return array1;
    }
}

function addEmptyRows(index, modules, table){
    if(modules === 1){
        let array = alreadyCompletedModules;
        while(index < array.length){
            let row = `<tr> <td>${array[index].semester}</td> <td>${array[index].name}</td> <td>${array[index].ects}</td> <td></td> <td></td> <td></td> </tr>`;
            table.innerHTML += row;
            index ++;
        }
    }
    else{
        let array = modulesToTake;
        while(index < array.length){
            let row = `<tr> <td></td> <td></td> <td></td> <td>${array[index].semester}</td> <td>${array[index].name}</td> <td>${array[index].ects}</td> </tr>`;
            table.innerHTML += row;
            index ++;
        }
    }
}