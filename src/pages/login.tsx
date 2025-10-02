import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, ShoppingCart, User } from "lucide-react";

export function LoginPage() {
  return (
    <div className="bg-[url(src/assets/login-bg.jpg)] bg-no-repeat bg-cover w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center max-w-80 w-full gap-5">
        <ShoppingCart className="text-white w-14 h-14" />

        {/* Input com ícone */}
        <div className="relative w-full">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
          <Input 
            type="email" 
            placeholder="Email" 
            className="bg-white text-black pl-10 rounded-sm" 
          />
        </div>

        <div className="relative w-full">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
          <Input 
            type="password" 
            placeholder="Password" 
            className="bg-white text-black pl-10 rounded-sm" 
          />
        </div>
        <Button className="bg-blue-600 text-white w-full hover:bg-blue-700 rounded-sm">
          Login
        </Button>
      </div>
    </div>
  )
}
