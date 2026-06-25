import "../styles/RelatedProducts.css";

export default function RelatedProducts() {

  const products = [
    {
      name: "MV-02",
      price: "R$ 949,90",
      image: "/mv02.png"
    },
    {
      name: "MV-03",
      price: "R$ 999,90",
      image: "/mv03.png"
    },
    {
      name: "MV-04",
      price: "R$ 1.099,90",
      image: "/mv04.png"
    }
  ];

  return (
    <section className="related">

      <h2>Você também pode gostar</h2>

      <div className="related-grid">

        {products.map((product, index) => (

          <div className="related-card" key={index}>

            <img src={product.image} />

            <h3>{product.name}</h3>

            <p>{product.price}</p>

            <button>Ver Produto</button>

          </div>

        ))}

      </div>

    </section>
  );
}