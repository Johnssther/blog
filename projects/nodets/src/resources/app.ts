import './sass/style.scss'

window.addEventListener('load', (event) => {
    console.log(event);
    

    let dateInitial = new Date('07-01-2022');
    let date_currency: string = String(dateInitial.getMonth() + 1).padStart(2, '0') + '-' + String(dateInitial.getDate()).padStart(2, '0') + '-' + dateInitial.getFullYear();
    let dayInitial: string = String(new Date().getDate()).padStart(2, '0');
    // events
    document.getElementById('datePrevious')?.addEventListener('click', () => {
        let d = new Date(date_currency);
        d.setMonth(d.getMonth() - 1);

        let date = d;
        date_currency = String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0') + '-' + date.getFullYear();
        console.log(date_currency);
        renderCalendar(date_currency)

    })
    document.getElementById('dateLater')?.addEventListener('click', () => {
        let d = new Date(date_currency);
        d.setMonth(d.getMonth() + 1);

        let date = d;
        date_currency = String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0') + '-' + date.getFullYear();
        renderCalendar(date_currency)

    })
    document.getElementById('yearSearch')?.addEventListener('click', () => {
        const yearHtm = document.getElementById('year') as HTMLInputElement | null;

        const year: string = yearHtm!.value;

        let d = new Date('1-1-' + year);

        let date = d;
        date_currency = String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0') + '-' + date.getFullYear();
        renderCalendar(date_currency)
    })
    renderCalendar(date_currency)
    function renderCalendar(date: string) {
        const fecha = new Date(date);
        let year = fecha.getFullYear();
        let month = monthName(fecha.getMonth());
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
            if (dayInitial === String(index)) {
                template_month += `<div class="calendar__item calendar__item--festive">${index}</div>`
            } else {
                template_month += `<div class="calendar__item">${index}</div>`
            }
        }

        const calendar = document.getElementById('calendar');
        if (calendar != null) {
            calendar.innerHTML = template_month;
        }

    }

    function diasDelMesYAñoActual(fecha: Date) {
        return new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate();
    }

    function monthName(mes: number) {
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        return meses[mes]
    }

    // sidebar
    document.getElementById('btn-close')?.addEventListener('click', () => {
        document.getElementById('sidebar')?.classList.add('sidebar--active');
        document.getElementById('body')?.classList.remove('block-scroll');
    })
    document.getElementById('btn-open')?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('sidebar')?.classList.remove('sidebar--active');
        document.getElementById('body')?.classList.add('block-scroll');
    })


});