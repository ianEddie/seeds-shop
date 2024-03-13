import CartProducts from './CartProducts'
import CartTotalPrice from './CartTotalPrice'
import PayButton from './PayButton'

export default function Cart() {
  return (
    <article
      id='cart'
      className='bg-neutral-50 border border-neutral-400 shadow-xl shadow-neutral-900/40 rounded-md flex flex-col justify-between items-center flex-grow px-7 py-5 gap-y-7'
    >
      <h3 className='font-bold text-lg w-full text-center border-b border-neutral-500 pb-4'>
        Detalles del Pago
      </h3>
      <CartProducts />
      <CartTotalPrice />
      <PayButton />
    </article>
  )
}
