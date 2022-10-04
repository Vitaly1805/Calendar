createCalendar(cal, 2022, 10)

function createCalendar(cal, year, month) {
  const indexMonth = month - 1
  const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
  let date = new Date(year, indexMonth, 1)
  let table = document.createElement('table')

  createHeadCalendar(table, daysOfWeek)
  createBodyCalendar(table, daysOfWeek, date, indexMonth)

  cal.append(table)
}

function createHeadCalendar(table, daysOfWeek) {
  let trHead = document.createElement('tr')

  daysOfWeek.forEach(e => {
    const th = document.createElement('th')
    th.textContent = e
    trHead.append(th)
  })

  table.append(trHead)
}

function createBodyCalendar(table, daysOfWeek, date, indexMonth) {
  while(indexMonth === date.getMonth()) {
    const tr = document.createElement('tr')

    daysOfWeek.forEach((e, i) => {
      const td = document.createElement('td')
      const dayOfWeek = date.getUTCDay()

      if(i === dayOfWeek && indexMonth  === date.getMonth()) {
        const day = date.getDate()

        td.textContent = day
        date.setDate(day + 1)
      }

      tr.append(td)
    })

    table.append(tr)
  }
}