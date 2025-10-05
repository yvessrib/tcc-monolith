import { ShoppingCart } from "lucide-react"
import { useContext, useState } from "react"
import { QuantityInput } from "./quantityInput"
import type { Coffee } from "@/types"
import { CartContext } from "@/contexts/CartContext"
import { UserContext } from "@/contexts/UserContext"

export function CoffeeCard(coffee: Coffee) {

  const { addItemToCart, cart } = useContext(CartContext)
  const { user } = useContext(UserContext)
  const [quantity, setQuantity] = useState(1)

  function incrementQuantity() {
    setQuantity(quantity + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function handleAddItem() {
    if (!cart || !user) {
      console.error("Carrinho ou usuário não encontrado")
      return
    }
    console.log(cart)
    addItemToCart(user.id, cart.cartId, coffee.id, quantity)
    setQuantity(1)
  }

  return (
    <section
      className="
        flex flex-col items-center text-center justify-center
        w-64 p-5 pb-6 rounded-[6px_36px] bg-zinc-100 mt-7
      "
    >
      <img
        src={coffee.image}
        alt=""
        className="max-w-[120px] max-h-[120px] -mt-14 self-center"
      />

      <div className="flex justify-center gap-1 mt-3">
        {coffee.categories.map((category, index) => (
          <span
            key={index}
            className="
              text-xs font-bold uppercase
              text-yellow-900 bg-yellow-100
              px-2 py-1 rounded-md
            "
          >
            {category}
          </span>
        ))}
      </div>

      <span className="mt-4 text-lg font-extrabold text-base-subtitle">
        {coffee.name}
      </span>

      <span className="mt-2 text-sm text-base-label">{coffee.description}</span>

      <div className="flex items-center justify-between w-full mt-8">

        <div className="flex items-baseline gap-1 text-base-text">
          <span className="text-sm">R$</span>
          <span className="text-2xl font-extrabold">{coffee.price}</span>
        </div>

        <div className="flex items-center gap-2">
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          <button
            onClick={handleAddItem}
            className="
              flex items-center justify-center p-2 rounded-md border-0
              bg-purple-900 text-white transition-colors
              hover:bg-purple-700
            "
          >
            <ShoppingCart height={22} width={22} />
          </button>
        </div>
      </div>
    </section>
  )
}
