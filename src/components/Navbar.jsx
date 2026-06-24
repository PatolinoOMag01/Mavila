export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-widest">
            MAVILA
          </h1>
        </div>

        <nav className="hidden md:flex gap-10 text-sm uppercase">
          <a href="#">Lançamentos</a>
          <a href="#">Masculino</a>
          <a href="#">Feminino</a>
          <a href="#">Coleções</a>
          <a href="#">Sobre</a>
        </nav>

        <div className="flex gap-5 text-xl">
          🔍
          ♡
          🛒
        </div>

      </div>
    </header>
  )
}