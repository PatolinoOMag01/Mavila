import { Link } from "react-router-dom";
import "../styles//NewCollection.css";

export default function NewCollection() {

  const products = [
    {
      name: "MV-01",
      description: "Street Luxury",
      image: "/mv01.png"
    },
    {
      name: "MV-02",
      description: "Urban Motion",
      image: "/mv02.png"
    },
    {
      name: "MV-03",
      description: "Future Flow",
      image: "/mv03.png"
    }
  ];

  return (

    <section className="collection">

      <h1>NOVA COLEÇÃO</h1>

      <div className="cards">

        {products.map((item, index) => (

          <div className="card" key={index}>

            <img src={item.image} />

            <h2>{item.name}</h2>

            <p>{item.description}</p>

        <Link to="/mv01">
            <button>
                Ver Produto
            </button>
        </Link>

          </div>

        ))}

      </div>

    </section>

  );
}