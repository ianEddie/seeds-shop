export interface Product {
  id: number
  slug: string
  title: string
  description: string
  image: string
  cogo: string
  mix: string
  genotype: string
  time: string
  weight: number
  category: string
  price: number
  quantity: number
}

export interface Store {
  cart: Product[]
  addToFavorites: (product: Product) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
}
