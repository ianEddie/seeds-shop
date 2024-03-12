import { useActions } from '@hooks/useActions'

export default function CartTotalPrice() {
  const { totalPrice } = useActions()
  return (
    <div className='w-full flex justify-between items-center mb-8 border-t border-neutral-400 pt-4'>
      <h4 className='font-bold text-lg'>Total</h4>
      <div className='flex gap-x-1 font-semibold text-lg'>
        <span className='text-green-600'>$</span>
        <span>{totalPrice}</span>
      </div>
    </div>
  )
}
