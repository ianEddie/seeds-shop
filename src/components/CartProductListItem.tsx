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
    <div className='bg-neutral-100/70 grid grid-cols-4 p-1 relative border border-neutral-500/70 shadow-lg shadow-neutral-900/30 rounded-r-2xl rounded-l-lg'>
      {/* Delete icon */}
      <CloseIcon id={id} />
      {/* Image */}
      <picture className='h-32 aspect-square'>
        <img src={image} alt='' className='h-full object-cover rounded-lg' />
      </picture>
      {/* Title */}
      <div className='flex items-center justify-center font-bold'>
        <h3>{title}</h3>
      </div>
      {/* Quantity */}
      <ProductQty productId={id} quantity={quantity} />
      {/* Price */}
      <div className='flex items-center justify-center font-bold gap-x-1'>
        <span className='text-green-600'>$</span>
        <span>{subTotal}</span>
      </div>
    </div>
  )
}
