import { useActions } from '@hooks/useActions'

export default function CartTotalPrice() {
  const { totalPrice } = useActions()
  return (
    <div>
      <h4>Total</h4>
      <span>{totalPrice}</span>
    </div>
  )
}
