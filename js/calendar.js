function fillInCalendar(){
    updateCalendarDates();
    var monthToFillIn = {};
    var previousMonthIndex;

    month_data.forEach(function(month, i){
        if(month.year == data.calendar.year && month.month_index == data.calendar.month){
            monthToFillIn = month;
            previousMonthIndex = i - 1;
        }
    });

    // Identifies all days in the calendar for numbering
    let days = document.getElementsByTagName("span");
    // Identifies all cells in the calnedar for styling
    let cells = document.getElementsByTagName("td");
    // Count of the days in this month
    let currentMonthCount = 1;
    // Count of the visible days from the previous month
    let previousMonthCount = month_data[previousMonthIndex].amount_of_days - monthToFillIn.starting_day + 1;
    // Count of the visible days from the next month
    let nextMonthCount = 1;

    cleanCells();
    for(let i = 0; i < days.length; i++){
        // Fills current month
        if(monthToFillIn.starting_day <= i && currentMonthCount <= monthToFillIn.amount_of_days){
            days[i].innerHTML = currentMonthCount;
            if(currentMonthCount == data.today.date && calenderMonthIsCurrentMonth()){
                cells[i].setAttribute("id", "current-day");
            }
            currentMonthCount++;
        }

        // Fills previous month
        else if(currentMonthCount <= monthToFillIn.amount_of_days){
            cells[i].classList.add("colour");
            days[i].innerHTML = previousMonthCount;
            previousMonthCount++;
        }
        // Fills next month
        else {
            cells[i].classList.add("colour");
            days[i].innerHTML = nextMonthCount;
            nextMonthCount++;
        }
    }
}

// Checks whether the calenar month is the current month
function calenderMonthIsCurrentMonth(){
    if(data.today.year == data.calendar.year && data.today.month == data.calendar.month){
        return true;
    } else {
        return false;
    }
}

// Removes all the unnecessary cell attributes
function cleanCells(){
    if(document.getElementById("current-day")){
        document.getElementById("current-day").removeAttribute("id", "");
    }

    var tableCells = document.getElementsByTagName("td");
    for(let i = 0; i < tableCells.length; i++){
        if(tableCells[i].classList.contains("colour")){
            tableCells[i].classList.remove("colour");
        }
    }
}

// Fills out the next month in the calendar when icons are triggered
function nextMonth(){
    if(data.calendar.month != 11 || data.calendar.year != month_data[month_data.length - 1].year){
        data.calendar.month++;
    } 
    if(data.calendar.month >= 12){
        data.calendar.month = 0;
        data.calendar.year++;
    }
    fillInCalendar();
}

// Fills out the previous month in the calendar when icons are triggered
function previousMonth(){
    if(data.calendar.month != 11 || data.calendar.year != month_data[0].year){
        data.calendar.month--;
    } 
    if(data.calendar.month <= -1){
        data.calendar.month = 11;
        data.calendar.year--;
    }
    fillInCalendar();
}

// Triggers nextMonth() and previousMonth() with arrow keys
document.onkeydown = function(e){
    switch(e.key){
        case "ArrowLeft": previousMonth(); break;
        case "ArrowRight": nextMonth(); break;
    }
}