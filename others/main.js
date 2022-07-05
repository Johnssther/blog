let year = 2022;
let month = 'JULIO';
const dias_mes_actual = diasDelMesYAñoActual();

let template_month = `
<div class="calendar__item calendar__item--head">
    <div>
        <i class="bi bi-arrow-left"></i>
    </div>
    <div>
        ${month} ${year}
    </div>
    <div>
        <i class="bi bi-arrow-right"></i>
    </div>
</div>

<div class="calendar__item calendar__item--head">Domingo</div>
<div class="calendar__item calendar__item--head">Lunes</div>
<div class="calendar__item calendar__item--head">Martes</div>
<div class="calendar__item calendar__item--head">Miercoles</div>
<div class="calendar__item calendar__item--head">Jueves</div>
<div class="calendar__item calendar__item--head">Viernes</div>
<div class="calendar__item calendar__item--head">Sabado</div>

`;

template_month += `<div class="calendar__item"></div>`
template_month += `<div class="calendar__item"></div>`
template_month += `<div class="calendar__item"></div>`
template_month += `<div class="calendar__item"></div>`
template_month += `<div class="calendar__item"></div>`

for (let index = 1; index <= dias_mes_actual; index++) {
    template_month += `<div class="calendar__item">${index}</div>`

}


document.getElementById('calendar').innerHTML = template_month

function diasEnUnMes(mes, año) {
    return new Date(año, mes, 0).getDate();
}
function diasDelMesYAñoActual() {
    var fecha = new Date();
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