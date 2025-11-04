document.addEventListener('DOMContentLoaded', () => {
    const months = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
    const tableDays = document.getElementById('dias');

    function getDayCalendar(month,year) {

        document.getElementById('mes').innerHTML = months[month];
        document.getElementById('ano').innerHTML = year;

        let firstDayWeek = new Date(year,month,1).getDay()-1;
        let getLastDayMonth = new Date(year,month+1,0).getDate()
        
        for (var i = -firstDayWeek, index = 0; i < (42-firstDayWeek); i++, index++) {
            let dt = new Date(year, month, i);
            let dtNow = new Date()
            let dayTable = tableDays.getElementsByTagName('td')[index];
            dayTable.classList.remove('mes-anterior');
            dayTable.classList.remove('proximo-mes');
            dayTable.classList.remove('dia-atual');
            dayTable.innerHTML = dt.getDate();

            if (dt.getFullYear() == dtNow.getFullYear() && dt.getMonth() == dtNow.getMonth() && dt.getDate() == dtNow.getDate()) {
                dayTable.classList.add('dia-atual')
            }

            if (i < 1){
                dayTable.classList.add('mes-anterior')
            }
            if (i > getLastDayMonth){
                dayTable.classList.add('proximo-mes')
            }
        }
    }

    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    getDayCalendar(month,year);

    const next = document.getElementById('next');
    const previous = document.getElementById('previous');

    next.addEventListener('click', ()=>{
        if (month >= 11){
            month = 0;
            year++;
        } else{
            month++;
        }
        getDayCalendar(month,year);
    })
    previous.addEventListener('click', ()=>{
        if (month <= 0){
            month = 11;
            year--;
        } else{
            month--;
        }
        getDayCalendar(month,year);
    })
    
    
})
