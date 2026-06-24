import { useState } from "react";
const [selectedSize, setSelectedSize] = useState("");
export default function ProductInfo() {

  return (

    <div className="product-info">

      <h1>MV-01</h1>

      <span className="subtitle">
        Street Luxury
      </span>

        <div className="rating">

            ★★★★★

            <span>4.9 (327 avaliações)</span>

        </div>

      <div className="price">

        R$ 899,90

      </div>

      <p className="description">

        O MV-01 combina performance e luxo em uma silhueta exclusiva da Mavila.
        Desenvolvido para quem busca conforto, identidade e presença.

      </p>

      <div className="features">

            <h3>Características</h3>

            <ul>

                <li>✓ Mesh premium respirável</li>

                <li>✓ Estrutura em TPU reforçada</li>

                <li>✓ Palmilha em espuma de alta densidade</li>
        
                <li>✓ Solado de amortecimento responsivo</li>

                <li>✓ Logo MV em metal</li>

                <li>✓ Construção Street Luxury</li>

            </ul>  

            </div>

                <h3>Cores</h3>

                <div className="colors">

                    {["Preto/Branco","Preto/Azul","Cinza/Prata"].map(color=>(

                    <button

                    key={color}

                    className={selectedColor === color ? "selected" : ""}

                    onClick={()=>setSelectedColor(color)}

                    >

                    {color}

                    </button>

                ))}

            </div>

      <h3>Tamanhos</h3>

            <div className="sizes">

                {[38,39,40,41,42,43].map(size=>(

                <button

                    key={size}

                    className={selectedSize === size ? "selected" : ""}

                    onClick={()=>setSelectedSize(size)}

                    >

                    {size}

                </button>

                ))}

            </div>

      <div className="buttons">

        <button className="buy">
          Comprar Agora
        </button>

        <button className="cart">
          Adicionar ao Carrinho
        </button>

      </div>

    </div>

  );

}