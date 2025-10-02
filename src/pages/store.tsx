import { Input } from "@/components/ui/input";
import { ShoppingCart, User } from "lucide-react";

export function StorePage() {
  return (
    <div>
      <header className="p-4 bg-amber-500 text-white flex flex-row gap-4 items-center justify-between px-8">
        <h1 className="text-lg font-bold">Products</h1>

        <div className="relative max-w-1/2 w-full">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
          <Input 
            placeholder="Search products..." 
            className="bg-white text-black pl-10 rounded-sm" 
          />
        </div>

        <div className="flex items-center gap-6">
          <ShoppingCart className="w-6 h-6" />
          <User className="w-6 h-6" />
        </div>
      </header>
    </div>
  )
}