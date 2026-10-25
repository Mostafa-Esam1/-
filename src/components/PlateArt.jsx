import { useMemo } from 'react'

// طبق كشري من فوق، متولّد بأرقام عشوائية ثابتة (نفس الشكل كل مرة)
function makeRng(seed) {
  let s = seed
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646 }
}

export default function PlateArt() {
  const parts = useMemo(() => {
    const r = makeRng(7)
    const pt = (R) => { const a = r() * Math.PI * 2, d = Math.sqrt(r()) * R; return [200 + Math.cos(a) * d, 200 + Math.sin(a) * d] }
    const rice = Array.from({ length: 300 }, () => ({ p: pt(138), rot: (r() * 180) | 0, c: r() < 0.5 ? '#f3e3ae' : '#ead48c' }))
    const lentils = Array.from({ length: 170 }, () => ({ p: pt(138), r: 3.6 + r() * 1.4, c: r() < 0.5 ? '#6b4429' : '#54331d' }))
    const pasta = Array.from({ length: 80 }, () => ({ p: pt(136), rot: (r() * 360) | 0 }))
    const chick = Array.from({ length: 46 }, () => ({ p: pt(136) }))
    const sauce = Array.from({ length: 22 }, () => ({ p: pt(50), r: 3 + r() * 5, c: r() < 0.5 ? '#a62512' : '#dd4a2e' }))
    const onion = Array.from({ length: 70 }, () => {
      const a = r() * Math.PI * 2, d = 10 + r() * 100
      return { x: 200 + Math.cos(a) * d, y: 200 + Math.sin(a) * d, q: [(r() * 22 - 11) | 0, (r() * 22 - 11) | 0, (r() * 26 - 13) | 0, (r() * 26 - 13) | 0], c: r() < 0.5 ? '#8a5a14' : '#a8741c' }
    })
    return { rice, lentils, pasta, chick, sauce, onion }
  }, [])

  return (
    <div role="img" aria-label="طبق كشري من فوق" className="mx-auto aspect-square w-full max-w-[300px] drop-shadow-[0_24px_30px_rgba(0,0,0,0.35)] md:max-w-[440px]">
      <svg viewBox="0 0 400 400" className="block h-full w-full" aria-hidden="true">
        <circle cx="200" cy="200" r="196" fill="#e9ece6" />
        <circle cx="200" cy="200" r="178" fill="#f7f8f4" />
        <circle cx="200" cy="200" r="150" fill="none" stroke="#dfe3dc" strokeWidth="2" />
        {parts.rice.map((o, i) => <ellipse key={'r' + i} cx={o.p[0]} cy={o.p[1]} rx="6" ry="2.2" transform={`rotate(${o.rot} ${o.p[0]} ${o.p[1]})`} fill={o.c} />)}
        {parts.lentils.map((o, i) => <circle key={'l' + i} cx={o.p[0]} cy={o.p[1]} r={o.r} fill={o.c} />)}
        {parts.pasta.map((o, i) => <path key={'p' + i} d={`M${o.p[0]} ${o.p[1]} q6 -8 12 0`} fill="none" stroke="#ebb760" strokeWidth="7" strokeLinecap="round" transform={`rotate(${o.rot} ${o.p[0]} ${o.p[1]})`} />)}
        {parts.chick.map((o, i) => <circle key={'c' + i} cx={o.p[0]} cy={o.p[1]} r="6.5" fill="#d8aa5e" />)}
        <circle cx="200" cy="200" r="58" fill="#c3301a" />
        {parts.sauce.map((o, i) => <circle key={'s' + i} cx={o.p[0]} cy={o.p[1]} r={o.r} fill={o.c} />)}
        {parts.onion.map((o, i) => <path key={'o' + i} d={`M${o.x} ${o.y} q${o.q[0]} ${o.q[1]} ${o.q[2]} ${o.q[3]}`} fill="none" stroke={o.c} strokeWidth="3.2" strokeLinecap="round" />)}
      </svg>
    </div>
  )
}
