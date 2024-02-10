let dayElement=document.getElementById("day");
let monthElement=document.getElementById("month");
let yearElement=document.getElementById("year");
let btnElement=document.getElementById("btn");

let dayErrorElement=document.getElementById("dayError");
let monthErrorElement=document.getElementById("monthError");
let yearErrorElement=document.getElementById("yearError");

let resultInYearsElement=document.getElementById("resultInYears");
let resultInMonthsElement=document.getElementById("resultInMonths");
let resultInDaysElement=document.getElementById("resultInDays");

let currentDate=new Date();

btnElement.onclick=function formSubmit(){
    

    resultInYearsElement.textContent="";
    resultInMonthsElement.textContent="";
    resultInDaysElement.textContent="";


    let d1=dayElement.value;
    let m1=monthElement.value;
    let y1=yearElement.value;


    let d2=currentDate.getDate();
    let m2=1+currentDate.getMonth();
    let y2=currentDate.getFullYear();
    let month=[31,28,31,30,31,30,31,31,30,31,30,31]


    if(d1>d2){
        d2=d2+month[m2-1];
        m2=m2-1
    }
    if(m1>m2){
        m2=m2+12;
        y2=y2-1;

    }

    resultInYearsElement.textContent=y2-y1;
    resultInMonthsElement.textContent=m2-m1;
    resultInDaysElement.textContent=d2-d1;


};


dayElement.addEventListener("focusout",function(){
    if(dayElement.value===""){
        dayErrorElement.textContent="*Required";
        dayErrorElement.style.color="hsl(0, 100%, 67%)";
    }
    else if(dayElement.value>31){
        dayErrorElement.textContent="Invalid Number";
        dayErrorElement.style.color="hsl(0, 100%, 67%)";
    }
    else{
        dayErrorElement.textContent="";
    }
});

monthElement.addEventListener("focusout",function(){
    if(monthElement.value===""){
        monthErrorElement.textContent="*Required";
        monthErrorElement.style.color="hsl(0, 100%, 67%)";
    }
    else if(monthElement.value>12){
        monthErrorElement.textContent="Invalid Number";
        monthErrorElement.style.color="hsl(0, 100%, 67%)";
    }
    else{
        monthErrorElement.textContent="";
    }
});

yearElement.addEventListener("focusout",function(){
    if(yearElement.value===""){
        yearErrorElement.textContent="*Required";
        yearErrorElement.style.color="hsl(0, 100%, 67%)";
    }
    else if(yearElement.value>currentDate.getFullYear()){
        yearErrorElement.textContent="Must be Past";
        yearErrorElement.style.color="hsl(0, 100%, 67%)";
    }
    else{
        yearErrorElement.textContent="";
    }
});




