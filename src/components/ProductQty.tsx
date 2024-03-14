import MinusIcon from '@icons/MinusIcon'
import PlusIcon from '@icons/PlusIcon'
import { useStore } from '@store/cart'

interface Props {
  productId: number
  quantity: number
}

export default function ProductQty({ productId, quantity }: Props) {
  const { increaseQuantity, decreaseQuantity } = useStore()

  const handleIncrement = () => {
    increaseQuantity(productId)
    console.log('ok')
  }
  const handleDecrement = () => {
    decreaseQuantity(productId)
  }
  return (
    <div className='flex items-center justify-center'>
      <div className='flex sm:gap-x-5 gap-x-2 sm:px-5 py-[3px] rounded-3xl'>
        <button
          onClick={handleDecrement}
          className='hover:scale-125 hover:text-black transition-all duration-300 text-neutral-800'
        >
          <MinusIcon />
        </button>
        <span className='font-number sm:text-base text-xs text-neutral-700'>
          {quantity}
        </span>
        <button
          onClick={handleIncrement}
          className='hover:scale-125 hover:text-black transition-all duration-300 text-neutral-800'
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  )
}
