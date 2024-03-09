import { useStore } from '@store/cart'

export default function ClearCart() {
  const { clearCart, cart } = useStore()
  const isProductsInCart = cart.length >= 1
  const handleClearCart = () => {
    clearCart()
  }
  return (
    <button
      onClick={handleClearCart}
      className={`${
        isProductsInCart ? 'flex' : 'hidden'
      }  absolute flex items-center left-5 bg-red-600 text-neutral-100 font-medium rounded-full px-3 py-[3px]`}
    >
      Eliminar todo
    </button>
  )
}
