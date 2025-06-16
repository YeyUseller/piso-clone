import { useState, useEffect } from 'react'

const CookieBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Gestionar el consentimiento de las cookies</h3>
            <p className="text-gray-300 mb-4">
              Para ofrecer las mejores experiencias, utilizamos tecnologías como las cookies para almacenar
              y/o acceder a la información del dispositivo. El consentimiento de estas tecnologías nos
              permitirá procesar datos como el comportamiento de navegación o las identificaciones únicas
              en este sitio.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="flex items-center">
                <input type="checkbox" id="funcional" className="mr-2" defaultChecked disabled />
                <label htmlFor="funcional" className="text-sm">Funcional</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="preferencias" className="mr-2" defaultChecked />
                <label htmlFor="preferencias" className="text-sm">Preferencias</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="estadisticas" className="mr-2" defaultChecked />
                <label htmlFor="estadisticas" className="text-sm">Estadísticas</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="marketing" className="mr-2" defaultChecked />
                <label htmlFor="marketing" className="text-sm">Marketing</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3 w-full md:w-auto">
            <div className="flex space-x-2">
              <button
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition"
                onClick={() => setVisible(false)}
              >
                Aceptar
              </button>
              <button
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition"
                onClick={() => setVisible(false)}
              >
                Denegar
              </button>
            </div>
            <div className="flex space-x-2 mt-2">
              <a href="#" className="text-blue-300 hover:text-blue-200 text-sm">Ver preferencias</a>
              <a href="#" className="text-blue-300 hover:text-blue-200 text-sm">Política de cookies</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
