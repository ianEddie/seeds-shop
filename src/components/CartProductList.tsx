import { useStore } from '@store/cart'
import CartProductListItem from './CartProductListItem.tsx'

export default function FavoriteList() {
  const { cart } = useStore()

  return (
    <article className='w-2/3 flex flex-col relative gap-y-3 py-5 px-10 overflow-auto scrollbar-thin scrollbar-thumb-neutral-400/40'>
      {cart.map((products) => (
        <CartProductListItem products={products} key={products.id} />
      ))}
    </article>
  )
}
