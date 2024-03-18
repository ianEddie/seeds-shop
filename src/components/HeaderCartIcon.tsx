import { useActions } from '@hooks/useActions'
import AddToCartIcon from '@icons/AddToCartIcon'

export default function HeaderCartIcon() {
  const { cartLength } = useActions()
  return (
    <a href='/carrito' className='relative hover:scale-110 transition-all duration-300'>
      <AddToCartIcon />
      <span className='absolute -top-2 -right-3 font-number text-sm'>{cartLength}</span>
    </a>
  )
}
