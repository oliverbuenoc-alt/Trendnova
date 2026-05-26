export default function TiendaVirtual() {
  const productos = [
    {
      nombre: "Mini Proyector LED",
      precio: "49€",
      categoria: "Tendencia",
      imagen: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800"
    },
    {
      nombre: "Lámpara RGB Inteligente",
      precio: "29€",
      categoria: "Hogar",
      imagen: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800"
    },
    {
      nombre: "Mini Impresora Portátil",
      precio: "59€",
      categoria: "Gadgets",
      imagen: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-white rounded-3xl shadow p-8 text-center mb-6">
        <h1 className="text-5xl font-bold">TrendNova</h1>
        <p className="text-gray-500 mt-3">
          Productos virales y tendencias del momento
        </p>
      </header>

      <input
        className="w-full p-4 rounded-2xl border mb-6"
        placeholder="Buscar productos..."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {productos.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-xl p-5"
          >
            <img
              src={p.imagen}
              alt={p.nombre}
              className="h-44 w-full object-cover rounded-2xl mb-4"
            />

            <span className="text-sm text-gray-500">
              {p.categoria}
            </span>

            <h2 className="text-xl font-bold mt-1">
              {p.nombre}
            </h2>

            <p className="text-2xl mt-2">
              {p.precio}
            </p>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-black text-white p-3 rounded-2xl">
                Comprar ahora
              </button>

              <button className="px-4 rounded-2xl border">
                ❤️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
