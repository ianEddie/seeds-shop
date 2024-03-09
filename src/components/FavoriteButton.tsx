import { useStore } from '../store/cart'
import FavoriteIcon from '../icons/FavoriteIcon'
import type { Product } from '../lib/data'
import { usetoggle } from '@hooks/useToggle'

interface Props {
  product: Product
}

export default function FavoriteButton({ product }: Props) {
  const { addToFavorites } = useStore()
  const { handleToggle, toggle } = usetoggle()
  //
  const handleAddToFavorites = () => {
    addToFavorites(product)
    handleToggle()
  }
  //
  return (
    <button className='absolute top-3 right-3' onClick={handleAddToFavorites}>
      <FavoriteIcon
        className={`${
          toggle ? 'text-red-500' : 'text-red-200/50'
        } transition-all duration-300`}
      />
    </button>
  )
}
