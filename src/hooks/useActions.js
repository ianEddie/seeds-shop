import { useStore } from '@store/cart'

export function useActions(price, quantity) {
  const { cart } = useStore()
  // function for get sub total price
  const getSubTotalPrice = () => {
    return price * quantity
  }
  const subTotal = getSubTotalPrice()
  // function to get the total price of cart
  const getTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )
  }
  const totalPrice = getTotalPrice()
  // return
  return { subTotal, totalPrice }
}
