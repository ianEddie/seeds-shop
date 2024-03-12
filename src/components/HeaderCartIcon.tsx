import { useActions } from '@hooks/useActions'
import AddToCartIcon from '@icons/AddToCartIcon'

export default function HeaderCartIcon() {
  const { cartLength } = useActions()
  return (
    <a href='/carrito' className='relative '>
      <AddToCartIcon />
      <span className='absolute -top-2 -right-3 font-number text-sm'>{cartLength}</span>
    </a>
  )
}
