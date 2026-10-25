import { brand } from '../config.js'

export default function Footer() {
  return (
    <footer id="visit" className="px-4 pb-14 pt-12">
      <div className="mx-auto max-w-[1120px]">
        <div className="grid gap-9 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <h3 className="mb-2.5 text-2xl">{brand.name}</h3>
            <p className="text-muted">{brand.address}</p>
            <p className="mt-2 text-muted">
              تليفون: <span dir="ltr" className="inline-block [unicode-bidi:isolate]">{brand.phoneDisplay}</span>
            </p>
          </div>
          <div>
            <h3 className="mb-2.5 text-2xl">مواعيدنا</h3>
            <ul className="max-w-[300px] text-muted">
              {brand.hoursText.map(([d, h]) => (
                <li key={d} className="flex justify-between gap-3 py-0.5"><span>{d}</span><span>{h}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2.5 text-2xl">روابط</h3>
            <ul className="text-muted">
              <li><a href="#menu">المنيو</a></li>
              <li><a href="#book">الحجز</a></li>
              <li><a href="#about">عننا</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-9 border-t border-line pt-5 text-sm text-muted">© {brand.name}، كل الحقوق محفوظة</div>
      </div>
    </footer>
  )
}
