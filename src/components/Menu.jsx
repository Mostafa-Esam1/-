import { useState } from 'react'
import { menu } from '../data/menu.js'
import { num } from '../lib/format.js'

const categories = Object.keys(menu)

export default function Menu() {
  const [current, setCurrent] = useState(categories[0])

  return (
    <section id="menu" className="px-4 py-[72px]">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <div className="mb-2.5 text-sm font-semibold tracking-wide text-accent-ink">المنيو</div>
            <h2 className="text-[clamp(34px,5vw,52px)]">اختار اللي نفسك فيه</h2>
          </div>
          <div role="group" aria-label="أقسام المنيو" className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={c === current}
                onClick={() => setCurrent(c)}
                className={`rounded-full border-[1.5px] px-5 py-2 font-medium transition ${c === current ? 'border-fg bg-fg text-bg' : 'border-line text-fg hover:border-fg'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <ul className="grid gap-x-14 gap-y-1.5 md:grid-cols-2">
          {menu[current].map((item) => (
            <li key={item.name} className="py-4">
              <div className="flex items-baseline gap-2.5">
                <span className="text-[19px] font-semibold">{item.name}</span>
                {item.tag && <span className="whitespace-nowrap rounded-md bg-gold px-2 text-xs font-semibold text-[#2a1d00]">{item.tag}</span>}
                <span className="-translate-y-1 min-w-5 flex-1 border-b-2 border-dotted border-line" />
                <span className="whitespace-nowrap font-semibold tabular-nums">
                  {num(item.price)} <small className="text-[13px] font-normal text-muted">ج.م</small>
                </span>
              </div>
              {item.desc && <p className="max-w-[44ch] text-[15px] text-muted">{item.desc}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
