export default function TiendaVirtual() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-5xl font-bold text-center">
        TrendNova
      </h1>

      <p className="text-center mt-4">
        Productos virales y tendencias del momento
      </p>

      <div className="bg-white rounded-3xl shadow p-5 mt-8">
        <img
          src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800"
          alt="Producto"
          className="h-44 w-full object-cover rounded-2xl"
        />

        <h2 className="text-xl font-bold mt-4">
          Mini Proyector LED
        </h2>

        <p className="text-2xl mt-2">49€</p>

        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-black text-white p-3 rounded-2xl">
            Comprar ahora
          </button>

          <button className="px-4 border rounded-2xl">
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
}
