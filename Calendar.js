const weeks = ['日', '月', '火', '水', '木', '金', '土']
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
const endDate = new Date(year, month,  0) // 月の最後の日を取得
const endDayCount = endDate.getDate() // 月の末日
const startDay = startDate.getDay() // 月の最初の日の曜日を取得
let dayCount = 1 // 日にちのカウント
let calendarTitleHtml = '' //カレンダーのタイトル(年月)を組み立てる変数
let calendarHtml = '' // カレンダーの中身を組み立てる変数

calendarTitleHtml += '<h1 class="calendar-title">' + year  + '年' + month + '月</h1>'

calendarHtml += '<div class="container">'
calendarHtml += '<table border="1">'
// 曜日の行を作成
for (let i = 0; i < weeks.length; i++) {
    calendarHtml += '<th>' + weeks[i] + '</th>'
}

for (let w = 0; w < 6; w++) {
    calendarHtml += '<tr>'

    for (let d = 0; d < 7; d++) {
        if (w == 0 && d < startDay) {
            // 1行目で1日の曜日の前
            calendarHtml += '<td></td>'
        } else if (dayCount > endDayCount) {
            // 末尾の日数を超えた
            calendarHtml += '<td></td>'
        } else {
            calendarHtml += '<td>' + dayCount + '</td>'
            dayCount++
        }
    }
    calendarHtml += '</tr>'
}
calendarHtml += '</table>'
calendarHtml += '</div>'

//HTMLの要素を取得して、書き込む
document.querySelector('#calendar-title').innerHTML = calendarTitleHtml
document.querySelector('#calendar').innerHTML = calendarHtml