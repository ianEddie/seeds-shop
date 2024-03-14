import { useStore } from '@store/cart'

export default function PayButton() {
  const { clearCart } = useStore()
  const handleClearCart = () => {
    clearCart()
  }

  return (
    <button
      onClick={handleClearCart}
      className='bg-green-700 font-bold sm:text-base text-sm shadow-lg shadow-neutral-900/20 text-neutral-100 px-5 py-1 rounded-3xl hover:bg-green-800 hover:scale-105 hover:shadow-neutral-900/30 transition-all duration-300'
    >
      Pagar
    </button>
  )
}
