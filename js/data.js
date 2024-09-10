var month_data = generateMonthData(2100)

function generateMonthData(maxYear){
    let data = [
        {
            month_index: 10,
            amount_of_days: 30,
            starting_day: 3,
            year: 2018
        }, {
            month_index: 11,
            amount_of_days: 31,
            starting_day: 5,
            year: 2018
        }
    ];

    let previousMonth = data[data.length - 1];
    let nextStartingDay = (previousMonth.amount_of_days + previousMonth.starting_day) % 7;

    for(let year = 2019; year <= maxYear; year++){
        for(let month = 0; month <= 11; month++){
            let m = {
                month_index: month,
                amount_of_days: new Date(year, month + 1, 0).getDate(),
                starting_day: nextStartingDay,
                year: year
            }
            nextStartingDay = (m.amount_of_days + m.starting_day) % 7;
            data.push(m)
        }
    }
    return data;
}

var data = {
    today: {
        day: "Default",
        date: "Default",
        month: "Default",
        year: "Default"
    },
    calendar: {
        month: "Default",
        year: "Default"
    }
}