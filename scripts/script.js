// createCalendar(2022)

// function createCalendar(year) {
//   const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
//   let table = document.createElement('table')

//   for(let indexMonth = 0; indexMonth < 12; indexMonth++) {
//     const date = new Date(year, indexMonth, 1)

//     createHeadCalendar(table, daysOfWeek)
//     createBodyCalendar(table, daysOfWeek, date, indexMonth)
//   }

//   document.body.append(table)
// }

// function createBodyCalendar(table, daysOfWeek, date, indexMonth) {
//   while(indexMonth === date.getMonth()) {
//     const tr = document.createElement('tr')

//     daysOfWeek.forEach((e, i) => {
//       const td = document.createElement('td')
//       const dayOfWeek = date.getUTCDay()

//       if(indexMonth !== date.getMonth()) return

//       if(i === dayOfWeek) {
//         const day = date.getDate()

//         td.textContent = day
//         date.setDate(day + 1)
//       }

//       tr.append(td)
//     })

//     table.append(tr)
//   }
// }

// function createHeadCalendar(table, daysOfWeek) {
//   // const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

//   // const tr = document.createElement('tr')
//   // const td = document.createElement('td')

//   // td.textContent = months[indexMonth]
//   // console.log(months[indexMonth])
//   // tr.append(td)
//   // table.append(tr)

//   let trHead = document.createElement('tr')

//   daysOfWeek.forEach(e => {
//     const th = document.createElement('th')
//     th.textContent = e
//     trHead.append(th)
//   })

//   table.append(trHead)
// }