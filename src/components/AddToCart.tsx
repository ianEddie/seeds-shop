import { useStore } from '../store/cart'
import type { Product } from 'types'
import { useActions } from '@hooks/useActions'
import AddToCartIcon from '@icons/AddToCartIcon'
import CheckIcon from '@icons/CheckIcon'
import PlusIcon from '@icons/PlusIcon'
import FavoriteIcon from '@icons/FavoriteIcon'

interface Props {
  product: Product
}

export default function AddToCart({ product }: Props) {
  const { addToFavorites } = useStore()
  const { checkProductInCart } = useActions()
  //
  const isProductInCart = checkProductInCart(product)
  //
  const handleAddToFavorites = () => {
    addToFavorites(product)
  }
  return (
    <div className='absolute top-3 right-4'>
      {isProductInCart ? (
        <FavoriteIcon className='text-[#FF0000]' />
      ) : (
        <button onClick={handleAddToFavorites} className='hover:scale-110 '>
          <FavoriteIcon className='text-[#FF0000]/20' />
        </button>
      )}
    </div>
  )
}
