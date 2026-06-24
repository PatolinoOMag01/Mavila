export default function Hero() {
  return (
    <section className="h-screen bg-black text-white">

      <div className="max-w-7xl mx-auto h-full px-10 flex items-center">

        <div className="flex-1">

          <h1 className="text-8xl font-bold mb-4">
            MV-01
          </h1>

          <h2 className="text-3xl text-zinc-400 mb-8">
            STREET LUXURY
          </h2>

          <p className="text-zinc-500 text-lg max-w-md mb-10">
            Atitude. Conforto. Identidade.
            O novo padrão do streetwear premium.
          </p>

          <div className="flex gap-5">

            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 duration-300">
              Comprar Agora
            </button>

            <button className="border border-zinc-700 px-8 py-4 rounded-full hover:bg-zinc-900 duration-300">
              Explorar Coleção
            </button>

          </div>

        </div>

        <div className="flex-1 flex justify-center">

          <img
            src="/mv01.png"
            className="w-[800px]"
          />

        </div>

      </div>

    </section>
  );
}