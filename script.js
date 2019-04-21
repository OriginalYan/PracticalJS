"use strict";

let money, timeDate;

let start = () => {
    money = +prompt("Введите ваш бюджет на месяц", "");
    timeDate = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null || money < 0){
        money = +prompt("Введите ваш бюджет на месяц", "");
    }
};

start();

let appData = {
    dataMoney: money,
    dataDate: timeDate,
    expences: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

for(let i = 0;i < 2; i++){
    let a = prompt('Введите обязательную статью расходов в этом месяце' + i, ""),
    b = +prompt('Во сколько обойдется?', "");
    if (typeof(a) != null && typeof(b) != null && a != "" && b != "" && b > 0){
        appData.expences[a] = b;
    } else {
        i = i - 1;
    }
}

let detectedDayBudget = () => {
    appData.moneyPerDay = +(appData.dataMoney / 30).toFixed(2);


    switch(true){
        case appData.moneyPerDay >= 2000:
            alert('Ваш дневной бюджет - ' + appData.moneyPerDay + '. Вы в достатке.');
        break;

        case appData.moneyPerDay <= 1000:
            alert('Ваш дневной бюджет - ' + appData.moneyPerDay + '. Вы живете не очень хорошо.');
        break;

        case appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000:
            alert('Ваш дневной бюджет - ' + appData.moneyPerDay + '. Вы хорошо жиывете.');
        break;

        default:
            alert('Ваш дневной бюджет - ' + appData.moneyPerDay + ', но в определении статуса возникла проблема.');
        break;
    }
};

detectedDayBudget();

let checkSavings = () => {
    if (appData.savings == true){
        let save = +prompt('Какова сумма накоплений', ''),
            persent = +prompt('Под какой процент', '');

        appData.monthIncome = save / 100 / 12 * persent;

        alert('Доход вашего депозита - ' + appData.monthIncome);
    }
};

checkSavings();

let optionalExpenses = () => {
    let questionsExpenses = +prompt('Если есть необязательные расходы введите их количество', '');

    if (typeof(questionsExpenses) !== null || questionsExpenses > 0 || !isNaN(questionsExpenses)){
        for (let i = 0; i < questionsExpenses; i++){
            let questOtvet = +prompt('Введите сумму расхода', '');
            appData.income[i] = questOtvet;100
        }
    }
};

optionalExpenses();
