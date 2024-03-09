import CartProducts from './CartProducts'
import CartTotalPrice from './CartTotalPrice'

export default function Cart() {
  return (
    <article className='bg-zinc-300 rounded-3xl flex flex-col justify-around relative flex-grow px-7 pt-5'>
      <h3 className='font-bold text-lg opacity-80 absolute top-5'>
        Detalles del Pago
      </h3>
      <CartProducts />
      <CartTotalPrice />
      <div className='bg-cyan-200'>
        <button>Pagar</button>
      </div>
    </article>
  )
}
