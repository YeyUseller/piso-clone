const HeroSection = () => (
  <section className="bg-gradient-to-r from-emerald-50 to-blue-50 py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Gestión de pisos y <span className="text-emerald-500">apartamentos turísticos</span>
          </h1>
          <p className="text-gray-600 text-xl mb-8 max-w-xl">
            Nos encargamos de gestionar íntegramente tu alquiler turístico para maximizar tus beneficios
            mientras te proporcionamos tranquilidad total.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-medium shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center space-x-2 cta-pulse">
              <span>Confíanos tu gestión vacacional</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#" className="bg-white hover:bg-gray-100 text-emerald-600 border-2 border-emerald-500 px-8 py-4 rounded-full font-medium shadow-lg transition flex items-center justify-center space-x-2">
              <span>Conoce nuestros servicios</span>
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="relative floating-img">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-emerald-200 rounded-xl transform rotate-12"></div>
            <div className="absolute top-10 right-4 w-56 h-56 bg-blue-200 rounded-xl transform -rotate-6"></div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 relative z-10 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-400 to-blue-400">
                <div className="text-white text-center px-6">
                  <div className="text-4xl mb-4"><i className="fas fa-home"></i></div>
                  <h3 className="text-xl font-bold">Apartamentos turísticos</h3>
                  <p>Gestión profesional integral</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
