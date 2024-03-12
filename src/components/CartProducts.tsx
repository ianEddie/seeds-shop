import { useStore } from '@store/cart'
import WeedIconSmall from '@icons/WeedIconSmall'

export default function CartProducts() {
  const { cart } = useStore()

  return (
    <div className='w-full flex flex-col gap-y-5 flex-grow'>
      <h4 className='font-bold text-lg '>Productos</h4>
      <div className='flex flex-col'>
        {cart.map((product) => (
          <div
            key={product.id}
            className='flex gap-x-2 items-center relative p-1'
          >
            <WeedIconSmall />
            <span className='font-semibold text-neutral-800'>
              {product.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
