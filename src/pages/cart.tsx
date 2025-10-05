import { CartItem } from "@/components/internal/cartItem"
import { Button } from "@/components/ui/button"
import { CartContext } from "@/contexts/CartContext"
import { useContext } from "react"

export function CartPage() {

  const { cart } = useContext(CartContext)

  return (
    <div>
      <span className="text-xl font-extrabold text-gray-900">Cafés selecionados</span>
      <div className="flex flex-row justify-between gap-4">
        <div className="flex flex-col gap-6 mt-6 bg-zinc-100 flex-1 rounded-[9px] px-8 py-4 max-h-[420px] overflow-y-auto">
          {cart?.items.map(item => (
            <CartItem key={item.productId} image={item.image} productId={item.productId} productName={item.productName} price={item.price} quantity={item.quantity} />
          ))}
        </div>

        <div className="flex flex-col gap-3 mt-6 rounded-[6px_44px] p-8 bg-zinc-100 h-fit w-[448px]">
          <div className="flex items-center justify-between">
            <span className="text-lg">Total de itens</span>
            <span className="text-lg">R$ {cart?.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg">Entrega</span>
            <span className="text-lg">R$ 8.00</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-extrabold">Total</span>
            <span className="text-lg font-extrabold">R$ {(cart ? cart.items.reduce((total, item) => total + item.price * item.quantity, 0) + 8 : 0 + 8).toFixed(2)}</span>
          </div>
          <Button className="bg-amber-500 hover:bg-amber-600">Confirmar Pedido</Button>
        </div>
      </div>
    </div>
  )
}
