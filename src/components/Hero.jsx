import useOpenStatus from './useOpenStatus.js'
import PlateArt from './PlateArt.jsx'

export default function Hero() {
  const open = useOpenStatus()
  return (
    <div
      className="overflow-hidden bg-deep px-4 pb-16 pt-14 text-ondeep"
      style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.07) 1.5px, transparent 1.6px)', backgroundSize: '26px 26px' }}
    >
      <div className="mx-auto grid max-w-[1120px] items-center gap-10 md:grid-cols-[1.1fr_.9fr]">
        <div className="order-2 md:order-1">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/25 px-4 py-1.5 text-[15px]">
            <span className={`size-2.5 rounded-full ${open ? 'bg-green-400 shadow-[0_0_0_4px_rgba(74,222,128,.25)]' : 'bg-[#8a948f]'}`} />
            {open ? 'مفتوح دلوقتي · لحد ١ بعد منتصف الليل' : 'مقفول دلوقتي · بنفتح ١٢ الضهر'}
          </div>
          <h1 className="mb-4 text-[clamp(46px,7.5vw,92px)]">
            أكل بيت <em className="not-italic text-gold">بجد</em>،<br />زي ما اتعودت عليه
          </h1>
          <p className="mb-8 max-w-[34ch] text-[19px] text-ondeep-muted">
            كشري، ملوخية، محشي وفتة على أصولها. بنطبخ كل يوم على نار هادية، وبنقدمه سخن على الطاولة.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a href="#menu" className="rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#b82a13]">شوف المنيو</a>
            <a href="#book" className="rounded-full border-2 border-current px-6 py-3 font-semibold transition hover:-translate-y-0.5">احجز طاولة</a>
          </div>
        </div>
        <div className="order-1 md:order-2"><PlateArt /></div>
      </div>
    </div>
  )
}
