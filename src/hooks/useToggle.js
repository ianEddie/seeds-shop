import { useState } from 'react'

export function usetoggle() {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return { toggle, handleToggle }
}
