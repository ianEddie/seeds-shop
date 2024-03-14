import CartProducts from './CartProducts'
import CartTotalPrice from './CartTotalPrice'
import PayButton from './PayButton'

export default function Cart() {
  return (
    <article className='bg-neutral-100 sm:h-auto h-[50%] border flex flex-col justify-between items-center sm:flex-grow px-7 sm:py-5 py-3 sm:gap-y-7 gap-y-2 border-neutral-400 shadow-xl shadow-neutral-900/40 sm:rounded-md rounded-xl'>
      <h3 className='font-bold sm:text-lg text-sm w-full text-center border-b border-neutral-500 sm:pb-4 pb-2'>
        Detalles del Pago
      </h3>
      <CartProducts />
      <CartTotalPrice />
      <PayButton />
    </article>
  )
}
