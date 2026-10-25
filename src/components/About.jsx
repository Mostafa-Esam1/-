const why = [
  ['مكونات طازة', 'بنشتري يوم بيوم ومفيش تخزين طويل.'],
  ['نار هادية', 'المحشي والملوخية بياخدوا وقتهم لحد ما يستوو صح.'],
  ['سعر مفهوم', 'الأسعار مكتوبة قدامك وبتشمل الضريبة.'],
]

export default function About() {
  return (
    <section id="about" className="border-t border-line px-4 py-[72px]">
      <div className="mx-auto grid max-w-[1120px] items-start gap-8 md:grid-cols-2 md:gap-14">
        <div>
          <div className="mb-2.5 text-sm font-semibold tracking-wide text-accent-ink">عننا</div>
          <h2 className="text-[clamp(34px,5vw,52px)]">مطبخ صغير بيطبخ كتير</h2>
          <p className="mt-4 max-w-[52ch] text-muted">
            بنبدأ الشغل الصبح بدري. الخضار بتتغسل وتتقطع في المطبخ، واللحمة بتتسوى على مهلها، والصلصة بتتعمل من الطماطم مش من العلب. الفكرة عندنا بسيطة: الأكل اللي بيطلع من المطبخ هو اللي كنا هنقدمه لأهلنا.
          </p>
        </div>
        <div className="border-b border-line">
          {why.map(([t, d]) => (
            <div key={t} className="border-t border-line py-5">
              <h3 className="mb-1 text-[26px]">{t}</h3>
              <p className="text-base text-muted">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
