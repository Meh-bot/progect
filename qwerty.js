let money = prompt("Ваш бюджет на месяц?",''),
    time = prompt('Введите дату в формате YYYY-MM-DD','');

let appData = {
    budget: money,
    exspenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for(let i = 0; i < 2; i++ ) {
    let a = prompt("Введите обязательную строку расходов в этом месяце", '')
        b = prompt("Во сколько обойдется?", '');

    appData.exspenses[a] = b;    
}

alert(appData.budget / 30);

   