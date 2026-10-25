import { useEffect, useState } from 'react'
import { brand } from '../config.js'
import { cairoNow } from '../lib/cairo.js'

const isOpen = (hour) => hour >= brand.openHour || hour < brand.closeHour

export default function useOpenStatus() {
  const [open, setOpen] = useState(() => isOpen(cairoNow().hour))
  useEffect(() => {
    const id = setInterval(() => setOpen(isOpen(cairoNow().hour)), 60_000)
    return () => clearInterval(id)
  }, [])
  return open
}
