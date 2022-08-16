
let displayOther = document.querySelector('.other');
let addClick = document.querySelector('.add-answer-other_choose');
addClick.onclick = function(){
    addOther();
};

let questionDiv = document.getElementById('form-question');
let addOptionDiv = document.querySelector('.add');
addOptionDiv.style.display = "block";
let addChoiceDiv = document.querySelector('.answer');
addChoiceDiv.style.display = "block";
let addRankDiv = document.querySelector('.rank');
addRankDiv.style.display = "none";
let addShortDiv = document.querySelector('.short');
addShortDiv.style.display = "none";
let addOtherDiv = document.querySelector('.other');
addOtherDiv.style.display = "none";

// var addClick = document.querySelector('.add-answer-option_choose')
// addClick.onclick = function(){
//     addAnswer()
// };

// if(addChoiceDiv.style.display =='block'){
//     var getValueInput = document.querySelector('input[name="answer-list-content_input"]');
//     if(getValueInput.value == ''){
//         console.log('hi');
//     }else{
//         console.log('hi1');
// }
// }
// answer-list-content_input

let typeInput = 'radio';
let number = 1;
let checkOther = true;
function selectType(){
    let select = document.getElementById('type-question');
    let option = select.options[select.selectedIndex];
    number = option.value;
    checkTypeInput();
    if(number == 1 || number == 2){
        addChoiceDiv.style.display ="block";
        addOptionDiv.style.display ="block";
        if(!checkOther){
            displayOther.style.display ="block";
        }
    }else{
        addChoiceDiv.style.display ="none";
        addOptionDiv.style.display ="none";
    }
    let getType = document.querySelectorAll('.answer-list-choose_input');
    changeType(getType,typeInput);
    if(number ==3){
        addRankDiv.style.display ="block";
        displayOther.style.display ="none";
    }else{
        addRankDiv.style.display ="none";
    }
    if(number == 4){
        addShortDiv.style.display ="block";
        displayOther.style.display ="none";
    }else{
        addShortDiv.style.display ="none";
    }
    // console.log(number);
    // switch(number) {
    //     case 1:
    //         addChoiceDiv.style.display ="block";
    //         addOptionDiv.style.display ="block";
    //         if(!checkOther){
    //             displayOther.style.display ="block";
    //         }
    //         addRankDiv.style.display ="none";
    //         addShortDiv.style.display ="none";
    //     case 2:
    //         addChoiceDiv.style.display ="block";
    //         addOptionDiv.style.display ="block";
    //         if(!checkOther){
    //             displayOther.style.display ="block";
    //         }
    //     case 3:
    //         addChoiceDiv.style.display ="none";
    //         addOptionDiv.style.display ="none";
    //         addRankDiv.style.display ="block";
    //         displayOther.style.display ="none";
    //     case 4:
    //         addChoiceDiv.style.display ="none";
    //         addOptionDiv.style.display ="none";
    //         addShortDiv.style.display ="block";
    //         displayOther.style.display ="none";   
    //   }
}
// function addAnswer(){
//     if(number == 1){
//         var btn = document.createElement("button");
//         btn.className="btnDelete";
//         const textnode = document.createTextNode("Click here");
//         btn.appendChild(textnode);
//         var answer = document.querySelector(".answer");
//         // create div answer-list
//         var divAnswer = document.createElement("DIV");
//         divAnswer.className='answer-list';
//         divAnswer.id='answer-list';
//         // div choose
//         var divAnswerChoose = document.createElement("div");
//         divAnswerChoose.className='answer-list-choose';
//         //Input radio choose
//         const inputRadio = document.createElement('input');
//         inputRadio.type='radio';
//         inputRadio.className='answer-list-choose_input';
//         inputRadio.name='btn_answer';
//         // div content answer
//         var divAnswerContent = document.createElement("div");
//         divAnswerContent.className='answer-list-content';
//         //input content answer
//         var inputContent = document.createElement('input');
//         inputContent.type ='text';
//         inputContent.className='answer-list-content_input';
//         inputContent.placeholder= 'Câu trả lời';
//         answer.appendChild(divAnswer);
//         divAnswer.appendChild(divAnswerChoose);
//         divAnswerChoose.appendChild(inputRadio);
//         // add input div choose
//         divAnswer.appendChild(divAnswerContent);
//         // add input div content
//         divAnswerContent.appendChild(inputContent);
//         divAnswer.appendChild(btn);
//         i++;
//     }else if (number ==2){
//         addMulti();
//     }
   
// }
// function addOther(){
//     if(count ===0){
//         var other = document.querySelector(".other");
//     // create div answer-list
//     var divOther = document.createElement("DIV");
//     divOther.className='other-list';
//     // div choose
//     var divOtherChoose = document.createElement("div");
//     divOtherChoose.className='other-list-choose';
//     //Input radio choose
//     const inputRadio = document.createElement('input');
//     inputRadio.type='radio';
//     inputRadio.className='other-list-choose_input';
//     inputRadio.name='btn_answer';
//     // div content answer
//     var divOtherContent = document.createElement("div");
//     divOtherContent.className='other-list-content';
//     const span = document.createElement("span");
//     span.className='answer-list-content_other';
//     const temp = document.createTextNode("Others");
//     span.appendChild(temp);
//     other.appendChild(divOther);
//     divOther.appendChild(divOtherChoose);
//     divOtherChoose.appendChild(inputRadio);
//     // add input div choose
//     divOther.appendChild(divOtherContent);
//     // add input div content
//     divOtherContent.appendChild(span);
//     count ++;
//     }
    
// }

// function addMulti(){
//     var multi = document.querySelector(".multi");
//     // create div answer-list
//     var divMulti = document.createElement("div");
//     divMulti.className='multi-list';
//     // div choose
//     var divMultiChoose = document.createElement("div");
//     divMultiChoose.className='multi-list-choose';
//     //Input radio choose
//     const inputCheckBox = document.createElement('input');
//     inputCheckBox.type='checkbox';
//     // div content answer
//     var divMultiContent = document.createElement("div");
//     divMultiContent.className='multi-list-content';
//     //input content answer
//     var inputContent = document.createElement('input');
//     inputContent.type ='text';
//     inputContent.className='multi-list-content_input';
//     inputContent.placeholder= 'Câu trả lời';
//     multi.appendChild(divMulti);
//     divMulti.appendChild(divMultiChoose);
//     divMultiChoose.appendChild(inputCheckBox);
//     // add input div choose
//     divMulti.appendChild(divMultiContent);
//     // add input div content
//     divMultiContent.appendChild(inputContent);
// }

function addOther(){
    if(addOtherDiv.style.display =='none'){
        addOtherDiv.style.display = "block";
        checkOther = false;
    }
}
function removeOther(){
    if(addOtherDiv.style.display =='block'){
        addOtherDiv.style.display = "none";
        checkOther = true;
    }
}
let numberAnswer = 1;
// let answerDiv = document.querySelector('.answer');
function addAnswer(){
    // else if (number == 2){
    //     // let multiDetails = `
    //     // <div class="multi-list">
    //     //     <div class="multi-list-choose">
    //     //         <input type="checkbox" name="multi_name" value="">
    //     //     </div>
    //     //     <div class="multi-list-content">
    //     //         <input type="text" class="multi-list-content_input" placeholder="Câu trả lời">
    //     //     </div>
    //     //     <button  type="button" class="btnMultiDelete" onclick="removeAnswer(this)">X</button>
    //     // </div>  
    //     // `;
    //     // multiDiv.insertAdjacentHTML('beforeend',multiDetails);
    //     // var btn = document.querySelectorAll('.btnMultiDelete');
    //     // removeAnswer(btn,multiDiv,'.multi-list')
    //     // for(let i = 0 ; i< btn.length;i++){
    //     //     btn[i].onclick = function(){
    //     //         let multiListDiv = document.querySelector('.multi-list');
    //     //         multiDiv.removeChild(multiListDiv);
    //     //     }
    //     // }   

    //     // let btnDelete = document.querySelector('#btnMultiDelete-' +  multiDelete);
    //     // btnDelete.onclick = function(){
    //     //     let multiListDiv = document.querySelector('.multi-list');
    //     //     multiDiv.removeChild(multiListDiv);
    //     // };
    //     // multiDelete++;
    // }
    let answerDetails = `
        <div class="answer-list">
            <div class="answer-list-choose">
                <input type="${typeInput}" class="answer-list-choose_input" name="radio_answer">
            </div>
            <div class="answer-list-content">
                <input type="text" class="answer-list-content_input" value="Option ${numberAnswer}" placeholder="Câu trả lời">
            </div>
            <button  type="button" class="btnAnswerDelete" onclick="removeAnswer(this)">X</button>
        </div>
        `;
        addChoiceDiv.insertAdjacentHTML('beforeend',answerDetails);

        // let btn = document.querySelectorAll('.btnDelete')
        // // let answerListDiv = document.querySelector('.answer-list');
        // // removeAnswer(btn,answerListDiv,answerDiv)
        // for(let i = 0 ; i< btn1.length;i++){
        //     btn1[i].onclick = function(){
        //         let answerListDiv = document.querySelector('.answer-list');
        //         answerDiv.removeChild(answerListDiv);
        //     }
        // }   
        // let btn = document.querySelectorAll('.btnAnswerDelete');
        // removeAnswer(btn,answerDiv,'.answer-list')
        // for(let i = 0 ; i< btn.length;i++){
        //     btn[i].onclick = function(){
        //         let answerListDiv = document.querySelector('.answer-list');
        //         answerDiv.removeChild(answerListDiv);
        //     }
        // }   

        // let btnDelete = document.querySelector('#btnDelete-' + answerDelete);
        // btnDelete.onclick = function(){
        //     let answerListDiv = document.querySelector('.answer-list');
        //     answerDiv.removeChild(answerListDiv);
        // };
        // answerDelete++;
        numberAnswer++;
}
function removeAnswer(element){
    element.parentElement.remove();
}

function checkTypeInput(){
    if(number == 1){
        txtType ="radio";
     }
     else{
        txtType ="checkbox";
     }
}
function changeType(listInput){
    for(let i = 0 ; i < listInput.length ;i++){
        listInput[i].type = txtType;
    }
}
function selectNumberLast(){
    let select = document.querySelector('.rank-number_last');
    let option = select.options[select.selectedIndex];
    let numberRank = option.value;
    let txtRank = document.querySelector('.rank-content-last_txt');
    txtRank.innerHTML = numberRank+"";
}

