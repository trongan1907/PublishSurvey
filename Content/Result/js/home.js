let formQuestion = document.querySelector('.section-question');
let numberQuestion =1 ;
let numberAnswer = 1;

let typeInput = 'radio';
let number = 1;
let checkOther = true;

function selectType(numberClick){
    let addOptionDiv = document.querySelector('.add-'+numberClick);
    let addChoiceDiv = document.querySelector('.answer-'+numberClick);
    let addRankDiv = document.querySelector('.rank-'+numberClick);
    let addShortDiv = document.querySelector('.short-'+numberClick);
    let addChoiceOtherDiv = document.querySelector('.other-'+numberClick);
    let select = document.getElementById('type-question-'+numberClick);
    let addOtherDiv = document.querySelector('.add-answer-other-'+numberClick);
    let option = select.options[select.selectedIndex];
    number = option.value;
    checkTypeInput();
    // if(checkOther && addChoiceOtherDiv.style.display == 'block' ){
    //     checkOther =false;
    // }
    // if(!checkOther){
    //     addChoiceOtherDiv.style.display ="block";
    // }
    if(number == 1 || number == 2){
        addChoiceDiv.style.display ="block";
        addOptionDiv.style.display ="block";
    }else{
        addChoiceDiv.style.display ="none";
        addOptionDiv.style.display ="none";
    }
    let getType = document.querySelectorAll('.answer-list-choose_input-'+numberClick);
    changeType(getType);
    if(number ==3){
        addRankDiv.style.display ="block";
    }else{
        addRankDiv.style.display ="none";
    }
    if(number == 4){
        addOtherDiv.style.display ="none";
        addChoiceOtherDiv.style.display ="none";
        addShortDiv.style.display ="block";
    }else{
        addShortDiv.style.display ="none";
        addOtherDiv.style.display ="block";
    }
}
function addQuestion(){
    typeInput = 'radio';
    numberAnswer=1;
    numberQuestion++;
    let questionDetails =
    `
    <div class="question">
                        <div class="question-list">
                            <div class="question-list-title">
                                <input class="question-list-title_input" placeholder="C??u h???i kh??ng c?? ti??u ?????">
                                <div class="question-list-title_option">
                                <select name="typeQuestion-${numberQuestion}" id="type-question-${numberQuestion}" onChange="selectType(${numberQuestion})">
                                    <option value="1">Tr???c nghi???m</option>
                                    <option value="2">Nhi???u l???a ch???n</option>
                                    <option value="3">Ph???m vi tuy???n t??nh</option>
                                    <option value="4">Tr??? l???i ng???n</option>        
                                </select>
                                </div>
                            </div>
                            <div class="option-add">
                                <div class="add add-${numberQuestion}">
                                    <div class="add-answer">
                                        <div class="add-answer-option">
                                            <span class="add-answer-option_choose" onclick="addAnswer(${numberQuestion})">Add Option</span>
                                        </div>
                                        <div class="add-answer-choice add-answer-choice-${numberQuestion}">
                                            <span class="add-answer-choice_other" onclick="addChoiceOther(${numberQuestion})">Add ChoiceOther</span>
                                        </div>
                                    </div>
                                    </div> 
                                <div class="add-answer-other add-answer-other-${numberQuestion}">
                                    <span class="add-answer-other_choose " onclick="addOther(${numberQuestion})">Add Other</span>
                                </div>
                            </div>
                            <!-- C??u tr??? l???i tr???c nghi???m     -->
                            <div class="answer answer-${numberQuestion}">
                                
                            </div>
                            <!-- /C??u tr??? l???i tr???c nghi???m     -->
                            <!-- C??u tr??? l???i ranking -->
                            <div class="rank rank-${numberQuestion}" style="display: none;">
                                <div class="rank-number">
                                    <select class="rank-number_first">
                                        <option value="1" selected>1</option>
                                    </select>
                                    <span class="rank-number_txt">to</span>
                                    <select name="number-rank-${numberQuestion}" class="rank-number_last" id="rank-number_last-${numberQuestion}" onChange="selectNumberLast()">
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5" selected>5</option>
                                    </select>
                                </div>
                                <div class="rank-content">
                                    <div class="rank-content-first">
                                        <span class="rank-content-first_txt">1</span>
                                        <input type="text" name="numberFirst" class="rank-content-first_input" placeholder="Nh???p m???c th???p nh???t">
                                    </div>
                                    <div class="rank-content-last">
                                        <span class="rank-content-last_txt rank-content-last_txt-${numberQuestion}">5</span>
                                        <input type="text" name="numberLast" class="rank-content-last_input" placeholder="Nh???p m???c cao nh???t">
                                    </div>
                                </div>
                            </div>
                            <!-- /C??u tr??? l???i ranking -->

                            
                            <!-- C??u tr??? l???i ng???n -->
                            <div class="short short-${numberQuestion}" style="display: none;">
                                <div class="short-content">
                                    <input type="text" name="shortAnswer" class="short-content_input" placeholder="Vi???t c??u tr??? l???i ">
                                </div>
                            </div>
                            
                            <!-- /C??u tr??? l???i ng???n -->

                            <!-- C??u tr??? l???i th??m -->
                            <div class="other other-${numberQuestion}" style="display: none;">
                                <div class="other-content">
                                    <input type="text" name="otherAnswer" class="other-content_input" placeholder="Other:">
                                    <button class="btnOtherDelete"  type="button" onclick="removeOther(${numberQuestion})">X</button>  
                                </div>          
                            </div>
                            <!-- /C??u tr??? l???i th??m -->


                            <div class="icon-box">
                                <i class="fa-solid fa-copy"></i>
                                <i class="fa-solid fa-trash-can"></i>
                                <span class="checkbox-content">b???t bu???c</span>
                                <div class="checkbox-a">
                                    <input type="checkbox">
                                </div>
                            </div>
                        </div>
                        <div class="option-box">
                            <div class="option-element">
                                <i class="fa-solid fa-plus" id="add-question" onclick="addQuestion()"></i>
                                <i class="fa-solid fa-font" id="del-question" onclick="delQuestion(this)"></i>
                                <i class="fa-solid fa-image"></i>
                                <i class="fa-solid fa-bars-progress"></i>
                            </div>
                        </div>
                    </div>
    `;
    formQuestion.insertAdjacentHTML('beforeend',questionDetails);
}
// let addChoiceDiv = document.querySelector('.answer'+numberQuestion);
function addAnswer(numberClick){
    let addChoiceDiv = document.querySelector('.answer-'+numberClick);
    let answerDetails = `
        <div class="answer-list">
            <div class="answer-list-choose">
                <input type="${typeInput}" class="answer-list-choose_input-${numberClick}" name="radio_answer-${numberAnswer}">
            </div>
            <div class="answer-list-content">
                <input type="text" class="answer-list-content_input" placeholder="C??u tr??? l???i">
            </div>
            <button  type="button" class="btnAnswerDelete" onclick="removeAnswer(this)">X</button>
        </div>
        `;
        addChoiceDiv.insertAdjacentHTML('beforeend',answerDetails);
        numberAnswer++;
}
function removeAnswer(element){
    element.parentElement.remove();
}

function addChoiceOther(numberClick){
    let disableChoiceOther = document.querySelector('.add-answer-choice-'+numberClick);
    disableChoiceOther.style.display='none';
    let addChoiceDiv = document.querySelector('.answer-'+numberClick);
    let answerDetails = `
        <div class="answer-list">
            <div class="answer-list-choose">
                <input type="${typeInput}" class="answer-list-choose_input-${numberClick}" name="radio_answer-${numberAnswer}">
            </div>
            <div class="answer-list-content">
                <input type="text" class="answer-list-content_input" placeholder="Others:">
            </div>
            <button  type="button" class="btnAnswerDelete" onclick="removeChoiceOther(this,${numberClick})">X</button>
        </div>
        `;
        addChoiceDiv.insertAdjacentHTML('beforeend',answerDetails);
        numberAnswer++;
}
function removeChoiceOther(element,numberClick){
    let disableChoiceOther = document.querySelector('.add-answer-choice-'+numberClick);
    disableChoiceOther.style.display='block';
    element.parentElement.remove();
}
function delQuestion(element){
    element.parentElement.parentElement.parentElement.remove();
}

function addOther(numberClick){
    addChoiceOtherDiv = document.querySelector('.other-'+numberClick);
    if(addChoiceOtherDiv.style.display =='none'){
        addChoiceOtherDiv.style.display = "block";
    }
}
function removeOther(numberClick){
    addChoiceOtherDiv = document.querySelector('.other-'+numberClick);
    if(addChoiceOtherDiv.style.display =='block'){
        addChoiceOtherDiv.style.display = "none";
    }
}
function checkTypeInput(){
    if(number == 1){
        typeInput = 'radio';
     }
    else if (number ==2){
        typeInput ='checkbox';
    }
}
function changeType(listInput){
    for(let i = 0 ; i < listInput.length ;i++){
        listInput[i].type = typeInput;
    }
}
function selectNumberLast(clickNumber){
    let select = document.getElementById('rank-number_last-'+clickNumber);
    let option = select.options[select.selectedIndex];
    let numberRank = option.value;
    let txtRank = document.querySelector('.rank-content-last_txt');
    txtRank.innerHTML = numberRank+"";
}
