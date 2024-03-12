import { useStore } from '@store/cart'
import CartProductListItem from './CartProductListItem.tsx'
import ClearCart from './ClearCart.tsx'

export default function FavoriteList() {
  const { cart } = useStore()

  return (
    <article className='w-2/3 flex flex-col relative gap-y-3 py-5 px-10'>
      {/* Product List */}
      <div className='product-list overflow-auto flex flex-col gap-y-3 py-3 scroll-smooth'>
        {cart.map((products) => (
          <CartProductListItem products={products} key={products.id} />
        ))}
      </div>
    </article>
  )
}
