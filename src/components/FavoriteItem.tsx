import CloseIcon from '@icons/CloseIcon'
import type { Product } from 'types'
import ProductQty from './ProductQty'
import { useStore } from '@store/cart'
import { useActions } from '@hooks/useActions'

interface Props {
  products: Product
}

export default function FavoriteItem({ products }: Props) {
  const { title, image, id, price, quantity } = products
  const { subTotal } = useActions(price, quantity)

  return (
    <div className='border-b-2 bg-cyan-200 border-b-neutral-400/50 grid grid-cols-4 pb-5 relative'>
      {/* Delete icon */}
      <CloseIcon id={id} />
      {/* Image */}
      <picture className='h-32 aspect-square bg-red-200'>
        <img src={image} alt='' className='h-full object-cover rounded-lg' />
      </picture>
      {/* Title */}
      <div className='flex items-center justify-center bg-lime-200'>
        <h3>{title}</h3>
      </div>
      {/* Quantity */}
      <ProductQty productId={id} quantity={quantity} />
      {/* Price */}
      <div className='flex items-center justify-center bg-blue-300'>
        <span>$</span>
        <span>{subTotal}</span>
      </div>
    </div>
  )
}
