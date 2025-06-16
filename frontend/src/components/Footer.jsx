const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 pt-16 pb-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {/* Column 1 */}
        <div>
          <div className="mb-4">
            <div className="bg-emerald-500 rounded-lg px-4 py-2 font-bold text-white text-xl inline-block">
              Minty<span className="font-light">Host</span>
            </div>
          </div>
          <p className="mb-6">
            Gestión profesional de apartamentos turísticos para maximizar tu rentabilidad.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        {/* Column 2 */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Servicios</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Gestión de alquiler</a></li>
            <li><a href="#" className="hover:text-white transition">Viviendas turísticas</a></li>
            <li><a href="#" className="hover:text-white transition">Edificios turísticos</a></li>
            <li><a href="#" className="hover:text-white transition">Hostales y otras modalidades</a></li>
            <li><a href="#" className="hover:text-white transition">Optimización de precios</a></li>
          </ul>
        </div>
        {/* Column 3 */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Enlaces útiles</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Tarifas</a></li>
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Trabaja con nosotros</a></li>
            <li><a href="#" className="hover:text-white transition">Descubre nuestros apartamentos</a></li>
          </ul>
        </div>
        {/* Column 4 */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Contacto</h3>
          <div className="space-y-3">
            <div className="flex">
              <i className="fas fa-map-marker-alt mt-1 mr-3 text-emerald-500"></i>
              <span>C. de Augusto Figueroa, 16, 1D, 28004 Madrid</span>
            </div>
            <div className="flex">
              <i className="fas fa-phone-alt mt-1 mr-3 text-emerald-500"></i>
              <span>+34 919 994 931</span>
            </div>
            <div className="flex">
              <i className="fas fa-clock mt-1 mr-3 text-emerald-500"></i>
              <span>L-V de 9h a 21h</span>
            </div>
            <div className="flex">
              <i className="fas fa-envelope mt-1 mr-3 text-emerald-500"></i>
              <span>info@mintyhost.com</span>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-gray-800 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© 2023 Minty Host. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition">Aviso legal</a>
            <a href="#" className="hover:text-white transition">Política de privacidad</a>
            <a href="#" className="hover:text-white transition">Política de cookies</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
