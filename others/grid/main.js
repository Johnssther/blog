let dateInitial = new Date('07-01-2022');
let date_currency = String(dateInitial.getMonth() + 1).padStart(2, '0') + '-' + String(dateInitial.getDate()).padStart(2, '0') + '-' + dateInitial.getFullYear();
let dayInitial = String(new Date().getDate()).padStart(2, '0');
console.log(dayInitial);
// events
document.getElementById('datePrevious').addEventListener('click', () => {
    let d = new Date(date_currency);
    d.setMonth(d.getMonth() - 1);

    let date = d;
    date_currency = String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0') + '-' + date.getFullYear();
    console.log(date_currency);
    renderCalendar(date_currency)

})
document.getElementById('dateLater').addEventListener('click', () => {
    let d = new Date(date_currency);
    d.setMonth(d.getMonth() + 1);
    
    let date = d;
    date_currency = String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0') + '-' + date.getFullYear();
    renderCalendar(date_currency)

})
document.getElementById('yearSearch').addEventListener('click', () => {
    let year = document.getElementById('year').value
    let d = new Date('1-1-'+year);
    
    let date = d;
    date_currency = String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0') + '-' + date.getFullYear();
    renderCalendar(date_currency)
})  
renderCalendar(date_currency)
function renderCalendar(date) {
    console.log(date);
    const fecha = new Date(date);
    let year = fecha.getFullYear();
    let month = monthName(fecha.getMonth());
    let day_name = dayName(fecha.getDay())
    const dias_mes_actual = diasDelMesYAñoActual(fecha);

    let template_month = `
        <div class="calendar__item calendar__item--head">
            <div>
                ${month} ${year}
            </div>
        </div>

        <div class="calendar__item calendar__item--head">D</div>
        <div class="calendar__item calendar__item--head">L</div>
        <div class="calendar__item calendar__item--head">M</div>
        <div class="calendar__item calendar__item--head">M</div>
        <div class="calendar__item calendar__item--head">J</div>
        <div class="calendar__item calendar__item--head">V</div>
        <div class="calendar__item calendar__item--head">S</div>

    `;

    for (let index = 1; index <= fecha.getDay(); index++) {
        template_month += `<div class="calendar__item"></div>`
    }

    for (let index = 1; index <= dias_mes_actual; index++) {
        if (dayInitial == index) {
            template_month += `<div class="calendar__item calendar__item--festive">${index}</div>`
        } else {
            template_month += `<div class="calendar__item">${index}</div>`
        }
    }

    document.getElementById('calendar').innerHTML = template_month

}

function diasEnUnMes(mes, año) {
    return new Date(año, mes, 0).getDate();
}
function diasDelMesYAñoActual(fecha) {
    return new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate();
}


function diaSemana(año, mes, dia) {
    let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    let date = new Date(año, mes, dia);

    let fechaNum = date.getDate() + 1;
    let mes_name = date.getMonth();
}
diaSemana(2022, 9, 0)

function monthName(mes) {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return meses[mes]
}
function dayName(day) {
    let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    return dias[day]
}