import { useState } from 'react'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#">
              <div className="bg-emerald-500 rounded-lg px-4 py-2 font-bold text-white text-xl">
                Minty<span className="font-light">Host</span>
              </div>
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <div className="group relative">
              <button className="font-medium text-gray-600 hover:text-emerald-500 transition flex items-center">
                Gestión de alojamientos turísticos
                <i className="ml-1 fas fa-chevron-down text-xs"></i>
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-4 mt-2 w-64">
                <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Gestión de alquiler</a>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Viviendas turísticas</a>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Edificios turísticos</a>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Hostales y otras modalidades</a>
              </div>
            </div>
            <a href="#" className="font-medium text-gray-600 hover:text-emerald-500 transition">Tarifas</a>
            <a href="#" className="font-medium text-gray-600 hover:text-emerald-500 transition">Identidad</a>
            <a href="#" className="font-medium text-gray-600 hover:text-emerald-500 transition">FAQ</a>
            <a href="#" className="font-medium text-gray-600 hover:text-emerald-500 transition">Contacto</a>
          </nav>
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-gray-500"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className={`${mobileOpen ? '' : 'hidden'} lg:hidden bg-white py-2`}>
        <div className="container mx-auto px-4">
          <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded font-medium">Gestión de alojamientos</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded font-medium">Tarifas</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded font-medium">Identidad</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded font-medium">FAQ</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded font-medium">Contacto</a>
        </div>
      </div>
    </header>
  )
}

export default Header
