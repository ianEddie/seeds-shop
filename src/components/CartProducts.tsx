import { useStore } from '@store/cart'
import WeedIconSmall from '@icons/WeedIconSmall'

export default function CartProducts() {
  const { cart } = useStore()

  return (
    <div className='bg-red-200 w-full flex flex-col gap-y-5'>
      <h4>Productos</h4>
      <div className='flex flex-col'>
        {cart.map((product) => (
          <div
            key={product.id}
            className='flex gap-x-2 items-center relative bg-zinc-200 p-1'
          >
            <WeedIconSmall />
            <span className='font-medium'>{product.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
