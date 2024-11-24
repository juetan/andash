export function timeago(startTime: number | Date | string) {
  if (startTime instanceof Date) {
    startTime = startTime.valueOf()
  }
  if (typeof startTime == "string") {
    try {
      startTime = new Date(startTime).valueOf()
    } catch {
      startTime = Date.now()
    }
  }
  const time = Date.now() - startTime
  const day = Math.floor(time / (1000 * 60 * 60 * 24))
  const hour = Math.floor(time / (1000 * 60 * 60))
  const min = Math.floor(time / (1000 * 60))
  const month = Math.floor(day / 30)
  const year = Math.floor(month / 12)
  if (time < 0) return "将来"
  if (year) return year + " 年前"
  if (month) return month + " 月前"
  if (day) return day + " 天前"
  if (hour) return hour + " 小时前"
  if (min) return min + " 分钟前"
  else return " 刚刚"
}
