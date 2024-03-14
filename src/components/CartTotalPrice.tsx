import { useActions } from '@hooks/useActions'

export default function CartTotalPrice() {
  const { totalPrice } = useActions()
  return (
    <div className='w-full flex justify-between items-center sm:mb-8 border-t border-neutral-400 sm:pt-4 pt-2'>
      <h4 className='font-bold sm:text-lg text-base '>Total</h4>
      <div className='flex items-center gap-x-1'>
        <span className='text-green-600'>$</span>
        <span className='font-number sm:text-base text-sm text-neutral-700'>{totalPrice}</span>
      </div>
    </div>
  )
}
