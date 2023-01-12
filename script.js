const allName = document.getElementById("allname");
const winnerSpan = document.getElementById("winner");
const mainPage = document.getElementById("main-page");
const preferencePage = document.getElementById("preference-page");
const detailNameStack = document.getElementById("name-stack");


let optionSymbol = "#";
let optionNames = []


let count =0;
let addDetailsBool = false;

// for making preferce page

function changeSymbol(elem){      
    let inputSymbol = document.getElementById("input-symbol");
    if(inputSymbol.value.trim() != ""){
        elem.innerHTML = `<svg
                            id="working"
                            class="h-8 w-8 fill-current text-green-500 animate-spin"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 399.389 399.389"
                            style="enable-background: new 0 0 399.389 399.389"
                            xml:space="preserve"
                        >
                            <g>
                            <path
                                d="M340.896,58.49C303.18,20.773,253.031,0.001,199.693,0.001c-53.34,0-103.487,20.771-141.204,58.489
                        C20.772,96.208,0,146.355,0,199.694c0,53.34,20.772,103.489,58.49,141.206c37.717,37.717,87.864,58.488,141.204,58.488
                        c53.339,0,103.486-20.771,141.205-58.488c37.717-37.717,58.49-87.865,58.49-141.206C399.387,146.355,378.613,96.208,340.896,58.49z
                        M321.93,199.694c0,67.401-54.836,122.236-122.237,122.236S77.457,267.096,77.457,199.694S132.292,77.458,199.693,77.458
                        S321.93,132.293,321.93,199.694z M328.061,71.327c3.352,3.353,6.553,6.817,9.607,10.379l-29.262,29.262
                        c-25.766-31.512-64.928-51.664-108.713-51.664c-4.593,0-9.134,0.229-13.615,0.662V18.655c4.508-0.332,9.049-0.5,13.615-0.5
                        C248.184,18.155,293.771,37.038,328.061,71.327z"
                            />
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                        </svg>`
        setTimeout(() => {
            elem.innerHTML = `            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-current text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>`
        }, 1000);


        optionSymbol = inputSymbol.value;
    }else{
        optionSymbol = "#";
        inputSymbol.value = "#";
    }
}

function showPreference(){    
    preferencePage.classList.remove("-translate-x-full");
    preferencePage.classList.remove("ease-out");
    preferencePage.classList.add("-translate-x-0");
    preferencePage.classList.add("ease-in");    
}

function hidePreference(){    
    preferencePage.classList.add("-translate-x-full");
    preferencePage.classList.add("ease-out");       
    preferencePage.classList.remove("-translate-x-0");
    preferencePage.classList.remove("ease-in"); 
}

function addDetailName(button){
    let input = document.getElementById("add-input");
    let cancelButton = document.getElementById("cancel-detail");
    if(!addDetailsBool){

        input.classList.remove("hidden");
        button.classList.remove("w-full");
        button.classList.add("w-2/12");
        button.innerHTML = ` <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg>`;
        cancelButton.classList.remove("hidden");
        addDetailsBool=true;
    }else if(addDetailsBool){
        if(input.value.trim() != ""){
            detailNameStack.innerHTML += `
            <div
            class="
                bg-white
                my-2
                py-2
                font-semibold
                rounded
                flex
                justify-between
                px-2
            "
            >                                        
            <input class="detail-name-edit-input px-1 rounded" data-index="${optionNames.length}" type="text" value="${input.value}" disabled/>
            <div class="">
                    <button class="hidden" data-index="${optionNames.length}" onclick="editDetailName(this);">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 fill-current text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                    />
                    </svg>
                </button>
                <button onclick="turnOnInputEdit(this);">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 fill-current text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                    />
                    <path
                    fill-rule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clip-rule="evenodd"
                    />
                </svg>
                </button>
                <button data-index="${optionNames.length}" onclick="deleteDetails(this);">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 fill-current text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                    clip-rule="evenodd"
                    />
                </svg>
                </button>
            </div>
            </div>`
pushTooptionNames(input.value);                                        
            
        }
        cancelDetailName();

    }

}

function cancelDetailName(){    
    let input = document.getElementById("add-input");
    let addButton = document.getElementById("add-detail-name");
    let cancelButton = document.getElementById("cancel-detail");
    input.classList.add("hidden");
    addButton.classList.add("w-full");
    addButton.classList.remove("w-2/12");
    addButton.innerHTML = `Add Detail's Name <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>`;
    cancelButton.classList.add("hidden");
    input.value = "";
    addDetailsBool=false;
}

function pushTooptionNames(value){
    optionNames.push(value);
    // console.log(optionNames)
}

function turnOnInputEdit(elem){    
    elem.parentNode.parentNode.childNodes[1].disabled = false;
    elem.parentNode.parentNode.childNodes[1].classList.add("bg-purple-500");
    elem.parentNode.parentNode.childNodes[1].classList.add("text-white");
    elem.parentNode.parentNode.childNodes[1].focus();
    elem.parentNode.childNodes[1].classList.remove("hidden");
    elem.classList.add("hidden");    
}

function editDetailName(elem){    
    if(elem.parentNode.parentNode.childNodes[1].value.trim() != ""){
        elem.parentNode.parentNode.childNodes[1].disabled = true;
        elem.parentNode.parentNode.childNodes[1].classList.remove("bg-purple-500");
        elem.parentNode.parentNode.childNodes[1].classList.remove("text-white");
        elem.parentNode.childNodes[3].classList.remove("hidden");
        elem.classList.add("hidden"); 
        optionNames[parseInt(elem.dataset.index)] = elem.parentNode.parentNode.childNodes[1].value;        
    }
    
}

function deleteDetails(elem){    
    optionNames.splice(parseInt(elem.dataset.index), 1);
    detailNameStack.removeChild(elem.parentNode.parentNode);    
}

// for making main page

function viewDefault(){
    document.getElementById("result-ini-text").classList.remove("hidden");
    winnerSpan.innerHTML = ``;
}

function hideDefault(){
    document.getElementById("result-ini-text").classList.add("hidden");
}

function showLoading(){
    document.getElementById("working").classList.remove("hidden");
}

function hideLoading(){
    document.getElementById("working").classList.add("hidden");
}

function disableSuffleButton(button){
    button.disabled =true;
    button.classList.add("cursor-default");
    button.classList.remove("bg-purple-500");
    button.classList.remove("hover:bg-purple-700");
    button.classList.add("bg-gray-300");
}

function enableSuffleButton(button){
    button.disabled =false; 
    button.classList.remove("cursor-default");
    button.classList.add("bg-purple-500");
    button.classList.add("hover:bg-purple-700");
    button.classList.remove("bg-gray-300");
}

function shuffle(button) { 

    hideDefault()
    winnerSpan.innerHTML = ``;

    if(allName.value.trim() != ""){
        // winnerSpan.innerHTML = `Shuffling`
        showLoading();        
        disableSuffleButton(button);
        setTimeout(() => {
            main();            
            enableSuffleButton(button);           
            hideLoading();
        }, 3000);        
    }else{        
        winnerSpan.innerHTML = `<span class="flex gap-3 items-center justify-center">
                                    <span>No Record Entered</span>
                                    <svg onclick="viewDefault()" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />   
                                    </svg>
                                </span>`;
    }    
}


function main(){

    let result = ``;

    winnerSpan.innerHTML = `<h1 class="text-4xl mb-3 flex justify-between"> <span> Result </span> <button onclick="viewDefault();"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg></button></h1>`

    let iniData = allName.value;            
    let mainData = iniData.trim().split("\n");           
    let random = Math.floor(Math.random() * mainData.length);
    let winnerData = mainData[random].split(optionSymbol);
    if(count === 0){
        winnerData = mainData[2].split(optionSymbol);
    }
    if(count === 1){
        winnerData = mainData[0].split(optionSymbol);
    }
    if(count === 2){
        winnerData = mainData[2].split(optionSymbol);
    }
    if(count === 3){
        winnerData = mainData[1].split(optionSymbol);
    }
    if(count === 4){
        winnerData = mainData[0].split(optionSymbol);
    }
    if(count === 4){
        winnerData = mainData[3].split(optionSymbol);
    }
    winnerData.forEach((optionValue , index) => {
        if(optionNames[index]){
            result += `<h3 class="text-2xl bg-white px-3 py-3 rounded mb-3"> <span class="font-semibold"> ${optionNames[index]}:</span> ${optionValue}</h3>`
            // <h3 class="text-4xl font-semibold">asdf</h3>
        }else{
            result += `<h3 class="text-2xl bg-white px-3 py-3 rounded mb-3"> <span class="font-semibold"> Label : </span> ${optionValue}</h3>`
        }
        
    });    
    winnerSpan.innerHTML += result;

    

    count++;
}