import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserContext } from "@/contexts/UserContext";
import { Lock, ShoppingCart, User } from "lucide-react";
import { useContext } from "react";

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(20),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export function LoginPage() {
  const { register, handleSubmit, reset } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const { loginUser } = useContext(UserContext);

  const onSubmit = async (data: LoginFormInputs) => {
    await loginUser(data.email, data.password);
    reset();
  }

  return (
    <div className="bg-[url(src/assets/login-bg.jpg)] bg-no-repeat bg-cover w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center max-w-80 w-full gap-5">
        <ShoppingCart className="text-white w-14 h-14" />

        {/* Input com ícone */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative w-full">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            <Input 
              type="email" 
              placeholder="Email" 
              {...register('email')}
              className="bg-white text-black pl-10 rounded-sm" 
            />
          </div>

          <div className="relative w-full">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            <Input 
              type="password" 
              placeholder="Password"
              {...register('password')}
              className="bg-white text-black pl-10 rounded-sm" 
            />
          </div>
          <Button type="submit" className="bg-blue-600 text-white w-full hover:bg-blue-700 rounded-sm">
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}
