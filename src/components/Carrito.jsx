export default function Carrito({ carrito, eliminarDelCarrito, actualizarCantidad, onClose }) {
  const total = carrito.reduce((sum, p) => {
    const precio = parseFloat(p.precio.replace('€', ''))
    return sum + (precio * p.cantidad)
  }, 0)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto shadow-lg">
        <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-white">
          <h2 className="text-2xl font-bold">🛒 Mi Carrito</h2>
          <button
            onClick={onClose}
            className="text-2xl hover:text-gray-600 transition"
          >
            ✕
          </button>
        </div>

        {carrito.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            <p className="text-lg">Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <div className="p-6 space-y-4">
              {carrito.map((producto, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg border">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold">{producto.nombre}</h3>
                      <p className="text-sm text-gray-500">{producto.categoria}</p>
                    </div>
                    <button
                      onClick={() => eliminarDelCarrito(producto.nombre)}
                      className="text-red-500 hover:text-red-700 font-bold"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => actualizarCantidad(producto.nombre, producto.cantidad - 1)}
                        className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-bold">{producto.cantidad}</span>
                      <button
                        onClick={() => actualizarCantidad(producto.nombre, producto.cantidad + 1)}
                        className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-bold text-green-600">
                      {(parseFloat(producto.precio.replace('€', '')) * producto.cantidad).toFixed(2)}€
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t sticky bottom-0 bg-white p-6 space-y-3">
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-green-600">{total.toFixed(2)}€</span>
              </div>
              <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition font-bold">
                Proceder al Pago
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}