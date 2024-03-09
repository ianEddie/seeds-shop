import { useStore } from '@store/cart'
import FavoriteItem from './FavoriteItem.tsx'
import ClearCart from './ClearCart'

export default function FavoriteList() {
  const { cart } = useStore()

  return (
    <article className='w-2/3 flex flex-col relative gap-y-3 py-5 px-10'>
      {/* Title */}
      <h2 className='text-lg font-medium'>Productos</h2>
      {/* Product List */}
      <div className='product-list overflow-auto flex flex-col gap-y-3 py-3 scroll-smooth'>
        {cart.map((products) => (
          <FavoriteItem products={products} key={products.id} />
        ))}
      </div>
    </article>
  )
}
