const form=document.getElementById('form');
const date=document.getElementById('date');
const breakfast=document.getElementById('breakfast');
const lunch=document.getElementById('lunch');
const tea=document.getElementById('tea');
const dinner=document.getElementById('dinner');
const others=document.getElementById('others');

const submitBtn=document.getElementById('submitBtn');
const result=document.getElementById('result');
const sumDaily=document.getElementById('sumDaily');
const todaySum=document.getElementById('todaySum');
const food_Sum=document.getElementById('food_Sum');
const monthlyBtn=document.getElementById('monthlyBtn');
const monthlyResult=document.getElementById('monthlyResult');
const totalExpense=document.getElementById('totalExpense');
const totalFoodExpense=document.getElementById('totalFoodExpense');

const items=JSON.parse(localStorage.getItem('items')) || [];

//adding to array
const addItems=(date,breakfast,lunch,tea,dinner,others,dailyExpense,foodExpense)=>{
    items.push({
        date:date.value,
        breakfast:breakfast.value,
        lunch:lunch.value,
        tea:tea.value,
        dinner:dinner.value,
        others:others.value,
        dailyExpense,
        foodExpense
    }
    )

    localStorage.setItem('items',JSON.stringify(items));

    return {date,breakfast,lunch,tea,dinner,others,date,dailyExpense,foodExpense}
}

//finding daily sum
const dailySum = (breakfast,lunch,tea,dinner,others)=>{
    var daily_sum=0;
    daily_sum = Number(breakfast.value) + Number(lunch.value) + Number(tea.value)
    + Number(dinner.value) + Number(others.value) ;
    return daily_sum
}

//finding food sum
const foodSum = (breakfast,lunch,tea,dinner)=>{
    var food_sum=0;
    food_sum =  Number(breakfast.value) + Number(lunch.value) + Number(tea.value)
    + Number(dinner.value);
    return food_sum
}

//finding monthly total expense
const monthlyTotalExpense=(items)=>{
    var monthly_Total_Expense=0;
    for(let i=0;i<items.length;i++){
        monthly_Total_Expense = monthly_Total_Expense + items[i].dailyExpense
    }
    return monthly_Total_Expense
}


//finding monthly total food expense
const monthlyTotalFoodExpense=(items)=>{
    var monthlyTotalFoodExpense=0;
    for(let i=0;i<items.length;i++){
        monthlyTotalFoodExpense = monthlyTotalFoodExpense + items[i].foodExpense;
    }
    return monthlyTotalFoodExpense
}

//function on clicking submit button
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    var dailyExpense=dailySum(breakfast,lunch,tea,dinner,others);
    var foodExpense=foodSum(breakfast,lunch,tea,dinner);

    result.insertAdjacentHTML('afterend',`<div id='sumDaily' style=" text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;"><h3 id='todaySum'>Today's sum = ${dailyExpense}</h3><h3 id='food_Sum'>food sum = ${foodExpense}</h3></div>`);

   addItems(date,breakfast,lunch,tea,dinner,others,dailyExpense,foodExpense);
})

//function on clicking monthly button
monthlyBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    monthlyResult.insertAdjacentHTML('afterend',`<div id="sumMonthly" style='text-align: center;
        font-family: Georgia, 'Times New Roman', Times, serif;'><h2>Total Expense = ${monthlyTotalExpense(items)}</h2><h2>Total Food Expense = ${monthlyTotalFoodExpense(items)}</h2></div>`);

})



