import { useStore } from '@store/cart'
import WeedIconSmall from '@icons/WeedIconSmall'

export default function CartProducts() {
  const { cart } = useStore()

  return (
    <div className='w-full flex flex-col sm:gap-y-5 gap-y-2 flex-grow overflow-auto scrollbar-thin scrollbar-thumb-neutral-200'>
      <h4 className='font-bold sm:text-lg text-sm'>Productos</h4>
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
