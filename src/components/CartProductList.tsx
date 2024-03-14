import { useStore } from '@store/cart'
import CartProductListItem from './CartProductListItem.tsx'

export default function FavoriteList() {
  const { cart } = useStore()

  return (
    <article className='sm:w-2/3 sm:border-none border-b border-b-neutral-400 flex flex-col relative gap-y-3 py-5 sm:px-16 px-2 overflow-auto scrollbar-thin scrollbar-thumb-neutral-400/40'>
      {cart.map((products) => (
        <CartProductListItem products={products} key={products.id} />
      ))}
    </article>
  )
}
