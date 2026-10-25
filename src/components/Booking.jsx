import { useMemo, useState } from 'react'
import { brand } from '../config.js'
import { num } from '../lib/format.js'

// أوقات الحجز كل نص ساعة من ١٢ الضهر لحد ١٢ بالليل
function buildTimes() {
  const out = []
  for (let h = 12; h <= 24; h++) {
    for (const m of [0, 30]) {
      if (h === 24 && m === 30) continue
      const hh = h === 24 ? 0 : h
      const label = hh % 12 || 12
      const suffix = hh === 0 ? 'بعد منتصف الليل' : hh < 17 ? 'الضهر' : 'مساءً'
      out.push({ value: `${label}:${m ? '30' : '00'} ${suffix}`, text: `${num(label)}:${m ? '٣٠' : '٠٠'} ${suffix}` })
    }
  }
  return out
}

const inputCls = 'w-full min-w-0 rounded-xl border-2 border-transparent bg-[#f4f6f1] px-3.5 py-[11px] text-[#14231f]'
const labelCls = 'text-sm text-ondeep-muted'

export default function Booking() {
  const times = useMemo(buildTimes, [])
  const today = useMemo(() => {
    const d = new Date()
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
    return d.toISOString().slice(0, 10)
  }, [])

  const [form, setForm] = useState({ name: '', guests: 2, date: today, time: times[14].value, note: '' })
  const [waUrl, setWaUrl] = useState(null)
  const [error, setError] = useState('')

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  function submit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.date) {
      setWaUrl(null)
      setError('اكتب اسمك واختار التاريخ الأول.')
      return
    }
    const msg =
      `أهلًا ${brand.name}، عايز أحجز طاولة:\nالاسم: ${form.name.trim()}\nالتاريخ: ${form.date}\nالساعة: ${form.time}\nالعدد: ${form.guests}` +
      (form.note.trim() ? `\nملاحظات: ${form.note.trim()}` : '')
    setError('')
    setWaUrl(`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(msg)}`)
  }

  return (
    <section id="book" className="bg-deep px-4 py-[72px] text-ondeep">
      <div className="mx-auto grid max-w-[1120px] items-start gap-8 md:grid-cols-[.9fr_1.1fr] md:gap-14">
        <div>
          <div className="mb-2.5 text-sm font-semibold tracking-wide text-gold">الحجز</div>
          <h2 className="text-[clamp(34px,5vw,52px)]">احجز طاولتك</h2>
          <p className="mt-3.5 max-w-[38ch] text-ondeep-muted">
            املا البيانات واضغط حجز، وهنجهّزلك رسالة واتساب تبعتها لنا ونأكد معاك.
          </p>
        </div>

        <form onSubmit={submit} noValidate className="grid gap-4 sm:grid-cols-2">
          <div className="flex min-w-0 flex-col gap-1.5">
            <label htmlFor="fName" className={labelCls}>الاسم</label>
            <input id="fName" type="text" autoComplete="name" required value={form.name} onChange={set('name')} className={inputCls} />
          </div>
          <div className="flex min-w-0 flex-col gap-1.5">
            <label htmlFor="fGuests" className={labelCls}>عدد الأفراد</label>
            <select id="fGuests" value={form.guests} onChange={set('guests')} className={inputCls}>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>{num(n)} {n === 1 ? 'فرد' : 'أفراد'}</option>
              ))}
            </select>
          </div>
          <div className="flex min-w-0 flex-col gap-1.5">
            <label htmlFor="fDate" className={labelCls}>التاريخ</label>
            <input id="fDate" type="date" min={today} required value={form.date} onChange={set('date')} className={inputCls} />
          </div>
          <div className="flex min-w-0 flex-col gap-1.5">
            <label htmlFor="fTime" className={labelCls}>الساعة</label>
            <select id="fTime" value={form.time} onChange={set('time')} className={inputCls}>
              {times.map((t) => <option key={t.value} value={t.value}>{t.text}</option>)}
            </select>
          </div>
          <div className="flex min-w-0 flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="fNote" className={labelCls}>ملاحظات (اختياري)</label>
            <textarea id="fNote" value={form.note} onChange={set('note')} placeholder="مناسبة، كرسي أطفال، ركن هادي…" className={`${inputCls} min-h-20 resize-y`} />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="w-full rounded-full bg-gold px-6 py-3 font-semibold text-[#2a1d00] transition hover:-translate-y-0.5">حجز</button>
          </div>
          {(waUrl || error) && (
            <div className="rounded-xl bg-white/10 px-4 py-4 sm:col-span-2" role="status">
              {error || (
                <>
                  الرسالة جاهزة.{' '}
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold underline">افتح واتساب وابعتها</a>
                  {' '}وهنأكد معاك الحجز.
                </>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
