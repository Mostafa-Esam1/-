import { brand } from '../config.js'

const links = [
  ['#menu', 'المنيو'],
  ['#special', 'طبق النهارده'],
  ['#about', 'عننا'],
  ['#visit', 'مواعيدنا'],
]

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg">
      <div className="mx-auto flex max-w-[1120px] items-center gap-5 px-4 py-3">
        <a href="#top" className="me-auto flex items-center gap-2.5 font-display text-3xl">
          <i className="size-3.5 rounded-full bg-accent" />
          {brand.name}
        </a>
        <nav aria-label="التنقل" className="hidden gap-5 font-medium text-muted md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-fg">{label}</a>
          ))}
        </nav>
        <a href="#book" className="inline-flex items-center rounded-full bg-accent px-[18px] py-2 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#b82a13]">
          احجز طاولة
        </a>
      </div>
    </header>
  )
}
