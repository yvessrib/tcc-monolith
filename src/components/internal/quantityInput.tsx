import { Minus, Plus } from "lucide-react"

interface QuantityInputProps {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function QuantityInput(props: QuantityInputProps) {
  return (
    <div
      className="
        flex items-center gap-1.5 px-2 py-[5px]
        rounded-md bg-zinc-200
      "
    >
      <button
        onClick={props.decrementQuantity}
        className="flex items-center p-1 text-purple-600 hover:text-purple-900 transition-colors"
      >
        <Minus size={14} />
      </button>

      <span className="pt-0.5 text-base-title">{props.quantity}</span>

      <button
        onClick={props.incrementQuantity}
        className="flex items-center p-1 text-purple-600 hover:text-purple-900 transition-colors"
      >
        <Plus size={14} />
      </button>
    </div>
  )
}
