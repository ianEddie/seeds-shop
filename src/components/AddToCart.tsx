import { useStore } from '../store/cart'
import type { Product } from 'types'
import { useActions } from '@hooks/useActions'
import AddToCartIcon from '@icons/AddToCartIcon'
import CheckIcon from '@icons/CheckIcon'

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
    <div className='absolute top-3 right-5'>
      {isProductInCart ? (
        <CheckIcon />
      ) : (
        <button onClick={handleAddToFavorites}>
          <AddToCartIcon />
        </button>
      )}
    </div>
  )
}
