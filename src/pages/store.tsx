import { CoffeeIcon, Package, ShoppingCart, Timer } from "lucide-react";
import heroImg from '../assets/hero_img.svg'
import { CoffeeCard } from "@/components/internal/coffeeCard";
import { useContext, useEffect } from "react";
import { CoffeesContext } from "@/contexts/CoffeeContext";
import { CartContext } from "@/contexts/CartContext";
import { UserContext } from "@/contexts/UserContext";


export function StorePage() {
  const { coffees, getCoffees } = useContext(CoffeesContext);
  const { getOrCreateCart } = useContext(CartContext)
  const { user } = useContext(UserContext)

  useEffect(() => {
    getCoffees();
    if (user) {
      getOrCreateCart(user.id);
    }
  }, []);


  return (
    <>
      <div className="flex gap-12">
        {/* Bloco de texto */}
        <div className="flex flex-col justify-between">
          {/* Cabeçalho */}
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-xl text-gray-700">
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora
            </p>
          </div>

          {/* Lista de benefícios */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-yellow-600 rounded-full"><ShoppingCart height={20} width={20} className="text-white" /></div>
              <p className="text-base text-gray-700">Compra simples e segura</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 bg-gray-700 rounded-full"><Package height={20} width={20} className="text-white" /></div>
              <p className="text-base text-gray-700">Embalagem mantém o café intacto</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 bg-yellow-500 rounded-full"><Timer height={20} width={20} className="text-white" /></div>
              <p className="text-base text-gray-700">Entrega rápida e rastreada</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 bg-purple-900 rounded-full"><CoffeeIcon height={20} width={20} className="text-white" /></div>
              <p className="text-base text-gray-700">O café chega fresquinho até você</p>
            </div>
          </div>
        </div>

        {/* Imagem do hero */}
        <img src={heroImg} alt="" className="max-w-md" />
      </div>

      <div className="flex flex-col gap-10 py-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Nossos cafés</h2>

        <div className="grid grid-cols-4 gap-8">
          {coffees.map(coffee => (
            <CoffeeCard key={coffee.id} {...coffee} />
          ))}
        </div>
      </div>
    </>
  )
}