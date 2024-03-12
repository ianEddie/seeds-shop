import { useActions } from '@hooks/useActions'

export default function CartTotalPrice() {
  const { totalPrice } = useActions()
  return (
    <div className='w-full flex justify-between items-center mb-8 border-t border-neutral-400 pt-4'>
      <h4 className='font-bold text-lg '>Total</h4>
      <div className='flex gap-x-1 text-sm'>
        <span className='text-green-600 '>$</span>
        <span className='font-number text-neutral-700'>{totalPrice}</span>
      </div>
    </div>
  )
}
