import { MapPinnedIcon, ShoppingCartIcon } from 'lucide-react'
import CoffeLogo from '../../assets/CoffeDeliveryLogo.svg'
import { Link } from 'react-router-dom'

export function HeaderComponent() {

  return (
    <header className="flex items-center justify-between py-4 px-6 fixed bg-white w-full top-0 left-0 z-10 border-b border-gray-200">
      <Link to="/store">
        <img src={CoffeLogo} alt="" />
      </Link>

      <nav className="flex gap-6">
        <button
          className="
            flex items-center gap-1 p-2
            text-sm
            text-purple-900 bg-purple-100
            rounded-md border-0 transition-all
            hover:bg-purple-900 hover:text-purple-100
          "
        >
          <MapPinnedIcon height={22} />
          <p>Porto Alegre, RS</p>
        </button>

        <Link to="/checkout">
          <button
            className="
              relative flex items-center p-2
              text-yellow-900 bg-yellow-100
              rounded-md border-0 transition-all
              hover:bg-yellow-900 hover:text-yellow-100
            "
          >
            <ShoppingCartIcon height={22} />
              <span
                className='absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold text-white bg-yellow-900'
              >
                2
              </span>
          </button>
        </Link>
      </nav>
    </header>
  )
}
