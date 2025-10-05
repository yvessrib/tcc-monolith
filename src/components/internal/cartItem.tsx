import { CartContext } from "@/contexts/CartContext"
import type { CartItem } from "@/types"
import { useContext, useState } from "react"
import { QuantityInput } from "./quantityInput"
import { UserContext } from "@/contexts/UserContext"
import { Button } from "../ui/button"
import { Trash2 } from "lucide-react"

export function CartItem( {
  productId,
  productName,
  image,
  price,
  quantity,
} : CartItem) {
  const { updateItemQuantity, cart, removeItemFromCart } = useContext(CartContext)
  const { user } = useContext(UserContext)
  const [localQuantity, setLocalQuantity] = useState(quantity)

  const incrementQuantity = async () => {
    if (!cart || !user) return

    const newQuantity = localQuantity + 1
    setLocalQuantity(newQuantity)
    await updateItemQuantity(user.id, cart.cartId, productId, newQuantity)
  }

  const decrementQuantity = async () => {
    if (!cart || !user) return
    if (localQuantity <= 1) return
    const newQuantity = localQuantity - 1
    setLocalQuantity(newQuantity)
    await updateItemQuantity(user.id, cart.cartId, productId, newQuantity)
  }

  const handleRemoveItem = async (userId: string, cartId: string, productId: number) => {
    if (!cart || !user) return
    // await removeItemFromCart(user.id, cart.cartId, productId)
    removeItemFromCart(userId, cartId, productId)
  }


  return (
    <div className="flex items-center gap-8 not-last:border-b-2 pb-4">
      <img
        src={image}
        alt={productName}
        className="w-[60px] h-[60px]"
      />

      <div className="flex flex-col flex-1">
        <span className="text-lg font-medium text-gray-900">
          {productName}
        </span>

        <div className="flex items-center gap-3 mt-1">
          <QuantityInput
            quantity={localQuantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          {user && cart && (
            <Button onClick={() => handleRemoveItem(user.id, cart.cartId, productId)} variant="outline" className="bg-zinc-200 hover:bg-zinc-300 rounded-md flex items-center">
              <Trash2 size={16} className="text-purple-600 hover:text-purple-900 transition-colors" />
              <span className="ml-1 text-sm text-gray-700">Remover</span>
            </Button>
          )}
        </div>
      </div>

      <span className="text-lg font-bold ml-auto">
        R$ {(price * localQuantity).toFixed(2)}
      </span>
    </div>
  )
}