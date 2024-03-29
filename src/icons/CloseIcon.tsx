import { useStore } from '@store/cart'
interface Props {
  id: number
}

export default function CloseIcon({ id }: Props) {
  const { removeFromCart } = useStore()
  const handleRemove = () => {
    removeFromCart(id)
  }
  return (
    <button
      onClick={handleRemove}
      className='absolute sm:top-3 top-2 sm:right-4 right-2'
    >
      <svg
        className='sm:size-5 size-3'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 40 40'
      >
        <path
          fill='currentcolor'
          d='M21.499 19.994L32.755 8.727a1.064 1.064 0 0 0-.001-1.502c-.398-.396-1.099-.398-1.501.002L20 18.494L8.743 7.224c-.4-.395-1.101-.393-1.499.002a1.05 1.05 0 0 0-.309.751c0 .284.11.55.309.747L18.5 19.993L7.245 31.263a1.064 1.064 0 0 0 .003 1.503c.193.191.466.301.748.301h.006c.283-.001.556-.112.745-.305L20 21.495l11.257 11.27c.199.198.465.308.747.308a1.058 1.058 0 0 0 1.061-1.061c0-.283-.11-.55-.31-.747z'
        ></path>
      </svg>
    </button>
  )
}
