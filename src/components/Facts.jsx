const facts = [
  ['عيش طازة', 'بيتخبز كل ساعتين'],
  ['توصيل لحد الباب', 'في المعادي وحلوان والمقطم'],
  ['قعدة عائلية', 'ركن للأطفال وطاولات كبيرة'],
]

export default function Facts() {
  return (
    <section aria-label="مميزاتنا" className="border-b border-line">
      <div className="mx-auto grid max-w-[1120px] px-4 sm:grid-cols-3">
        {facts.map(([title, sub]) => (
          <div key={title} className="flex flex-col gap-1 border-line px-5 py-7 max-sm:border-t max-sm:first:border-t-0 sm:border-s sm:first:border-s-0">
            <b className="font-display text-[26px] font-normal">{title}</b>
            <span className="text-[15px] text-muted">{sub}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
