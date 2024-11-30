const form=document.getElementById('form');
var date=document.getElementById('date');
var breakfast=document.getElementById('breakfast');
var lunch=document.getElementById('lunch');
var tea=document.getElementById('tea');
var dinner=document.getElementById('dinner');
var others=document.getElementById('others');

const submitBtn=document.getElementById('submitBtn');
//const sumDaily=document.getElementById('sumDaily');
const todaySum=document.getElementById('todaySum');
const food_sum=document.getElementById('food_sum');
//const monthlyBtn=document.getElementById('monthlyBtn');
//const monthlySumDisplay=document.getElementById('monthlySumDisplay');

const items=JSON.parse(localStorage.getItem('items')) || [];

const addItems=(date,breakfast,lunch,tea,dinner,others,dailyExpense)=>{
    items.push({
        date:date.value,
        breakfast:breakfast.value,
        lunch:lunch.value,
        tea:tea.value,
        dinner:dinner.value,
        others:others.value,
        dailyExpense
    }
    )

    localStorage.setItem('items',JSON.stringify(items));

    return {date,breakfast,lunch,tea,dinner,others,date,dailyExpense}
}


const dailySum = (breakfast,lunch,tea,dinner,others)=>{
    var sum=0;
    sum = Number(breakfast.value) + Number(lunch.value) + Number(tea.value)
    + Number(dinner.value) + Number(others.value) ;
    return sum
}

const foodSum=(breakfast,lunch,tea,dinner)=>{
    var sum_food=0;
    sum_food=  Number(breakfast.value) + Number(lunch.value) + Number(tea.value)
    + Number(dinner.value);
    return sum_food
}


submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    var dailyExpense=dailySum(breakfast,lunch,tea,dinner,others);

    todaySum.innerHTML=dailyExpense;

    addItems(date,breakfast,lunch,tea,dinner,others,dailyExpense);

    //var foodExpense=foodSum(breakfast,lunch,tea,dinner);
    // food_sum.innerHTML=foodExpense;
 
})



