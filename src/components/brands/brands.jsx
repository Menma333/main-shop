import "./brands.css";
import hm from "./../../img/fashion-images/brands/HM.png";
import obey from "./../../img/fashion-images/brands/Obey.png";
import shopify from "./../../img/fashion-images/brands/Shopify.png";
import lacoste from "./../../img/fashion-images/brands/Lacoste.png";
import levis from "./../../img/fashion-images/brands/Levis.png";
import amazon from "./../../img/fashion-images/brands/Amazon.png";

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands__list">
          <il>
            <a href="#!">
              <img src={hm} alt="" />
            </a>
          </il>
          <il>
            <a href="#!">
              <img src={obey} alt="" />
            </a>
          </il>
          <il>
            <a href="#!">
              <img src={shopify} alt="" />
            </a>
          </il>
          <il>
            <a href="#!">
              <img src={lacoste} alt="" />
            </a>
          </il>
          <il>
            <a href="#!">
              <img src={levis} alt="" />
            </a>
          </il>
          <il>
            <a href="#!">
              <img src={amazon} alt="" />
            </a>
          </il>
        </ul>
      </div>
    </section>
  );
};

export default Brands;
