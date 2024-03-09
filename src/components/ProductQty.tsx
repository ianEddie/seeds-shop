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
    <div className='flex items-center justify-center gap-x-5 bg-slate-300'>
      <div className='bg-green-400 flex gap-x-5 px-5 rounded-3xl'>
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  )
}
