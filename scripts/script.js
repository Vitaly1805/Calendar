const button = document.querySelector('.form__button')

button.addEventListener('click', () => {
  let inputYear = document.getElementById('input-year')
  const year = inputYear.value

  inputYear.value = ''

  if(!year) return

  createCalendar(year)
})

function createCalendar(year) {
  let table = document.querySelector('.calendar__months')

  addTitle(year)
  createMonths(table, year)
}

function createMonths(table, year) {
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

  for(let indexMonth = 0; indexMonth < 12; indexMonth++) {
    const date = new Date(year, indexMonth, 1)
    let blockMonth = document.createElement('div')

    blockMonth.classList.add('calendar__month')

    createHeadOfMonth(blockMonth, months[indexMonth])
    createNamesOfDaysOfWeek(blockMonth, daysOfWeek)
    createDaysOfWeek(blockMonth, daysOfWeek, date, indexMonth)

    table.append(blockMonth)
  }
}

function createHeadOfMonth(blockMonth, monthName) {
  let blockTitleMonth = document.createElement('div')

  blockTitleMonth.classList.add('calendar__subtitle')
  blockTitleMonth.textContent = monthName
  blockMonth.append(blockTitleMonth)
}

function createNamesOfDaysOfWeek(blockMonth, daysOfWeek) {
  let blockDaysOfWeek = document.createElement('div')

  blockDaysOfWeek.classList.add('calendar__days-week')

  daysOfWeek.forEach(e => {
    let blockDayOfWeek = document.createElement('div')

    blockDayOfWeek.classList.add('calendar__day-week')
    blockDayOfWeek.textContent = e
    blockDaysOfWeek.append(blockDayOfWeek)
  })

  blockMonth.append(blockDaysOfWeek)
}

function addTitle(year) {
  let title = document.querySelector('.calendar__title')
  title.textContent = year
}

function createDaysOfWeek(blockMonth, daysOfWeek, date, indexMonth) {
  while(indexMonth === date.getMonth()) {
    let week = document.createElement('div')
    
    week.classList.add('calendar__week')

    daysOfWeek.forEach((e, i) => {
      const blockDay = document.createElement('div')
      const dayOfWeek = date.getUTCDay()

      blockDay.classList.add('calendar__day')

      if(indexMonth !== date.getMonth()) return

      if(i === dayOfWeek) {
        const day = date.getDate()

        blockDay.textContent = day
        date.setDate(day + 1)

        if(i > 4) {
          blockDay.classList.add('calendar__day_chill')
        }
      }

      week.append(blockDay)
    })

    blockMonth.append(week)
  }
}