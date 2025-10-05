import { CartContext } from "@/contexts/CartContext"
import { useContext } from "react"

export function CartPage() {

  const { getOrCreateCart, cart } = useContext(CartContext)

  return (
    <div>
      <h1>Carrinho</h1>
    </div>
  )
}
