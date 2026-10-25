// الساعة واليوم الحاليين بتوقيت القاهرة
export function cairoNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Cairo', hour: 'numeric', hour12: false, weekday: 'short',
  }).formatToParts(new Date())
  const hour = Number(parts.find((p) => p.type === 'hour').value) % 24
  const weekday = parts.find((p) => p.type === 'weekday').value // Mon..Sun
  return { hour, weekday }
}
