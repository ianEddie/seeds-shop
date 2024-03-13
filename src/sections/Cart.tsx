import CartProductList from '@components/CartProductList.tsx'
import CartPayment from '@components/CartPayment.tsx'
import { useActions } from '@hooks/useActions'
import EmptyCart from './EmptyCart'

export default function Cart() {
  const { cartLength } = useActions()
  return (
    <>
      {cartLength ? (
        <section className='h-screen w-full flex bg-neutral-200 gap-x-5 pt-16 pb-8 px-5'>
          <CartProductList />
          <CartPayment />
        </section>
      ) : (
        <EmptyCart />
      )}
    </>
  )
}
