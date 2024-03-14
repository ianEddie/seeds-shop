import CartProductList from '@components/CartProductList.tsx'
import CartPayment from '@components/CartPayment.tsx'
import { useActions } from '@hooks/useActions'
import EmptyCart from './EmptyCart'

export default function Cart() {
  const { cartLength } = useActions()
  return (
    <>
      {cartLength ? (
        <section className='h-screen w-full flex sm:flex-row flex-col bg-neutral-200 sm:gap-y-0 gap-y-5 gap-x-5 pt-16 sm:pb-8 pb-3 px-5'>
          <CartProductList />
          <CartPayment />
        </section>
      ) : (
        <EmptyCart />
      )}
    </>
  )
}
