import { cairoNow } from '../lib/cairo.js'
import { dayNames, specials } from '../data/special.js'
import { num } from '../lib/format.js'

export default function Special() {
  const { weekday } = cairoNow()
  const s = specials[weekday] ?? specials.Sun

  return (
    <section id="special" className="px-4 pb-[72px]">
      <div className="mx-auto grid max-w-[1120px] items-center gap-7 rounded-[20px] border border-line bg-surface p-6 md:grid-cols-[auto_1fr_auto] md:p-9">
        <div className="font-display text-[22px] text-accent-ink">{dayNames[weekday]}</div>
        <div>
          <div className="text-sm font-semibold tracking-wide text-accent-ink">طبق النهارده</div>
          <h3 className="my-1 text-[clamp(30px,4vw,44px)]">{s.name}</h3>
          <p className="max-w-[52ch] text-muted">{s.desc}</p>
        </div>
        <div className="font-display text-[56px] leading-none text-accent-ink">
          {num(s.price)}
          <small className="block font-body text-[15px] text-muted">جنيه</small>
        </div>
      </div>
    </section>
  )
}
