import Button from "../components/Button";
import { machine_sm } from "../assets/images";
import { products } from "../constants";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { arrowRight } from "../assets/icons";

const Banner = () => {
  const [bigImg, setBigImg] = useState(machine_sm);
  return (
    <section
      id="home"
      className="w-full max-container flex lg:flex-row flex-col justify-center p-2 min-h-screen gap-10"
    >
      <div className="flex relative lg:w-2/5 flex-col justify-center items-start w-full max-lg:padding-x pt-20">
        <p className="max-lg:hidden text-3xl font-montserrat text-coral-red leading-normal">
          MoRiS <br />
          8D Air-bag
        </p>
        <h1 className="mt-8 mb-8 font-palanquin text-8xl max-sm:text-[70px] max-sm:leading-[82px] font-bold">
          Аяқ массаж апараты
        </h1>
        <Button label="Бағасы" iconURL={arrowRight} destination="#details" />
      </div>

      <div className="flex flex-col gap-2 justify-center items-center mt-16 max-sm:mt-0">
        <img
          src={bigImg}
          alt="machine"
          width={500}
          height={500}
          className="object-contain"
        />
        <div className="flex sm:gap-6 gap-1">
          {products.map((product, index) => (
            <div key={index}>
              <ProductCard
                img={product}
                changeBigImg={() => setBigImg(product.bigImg)}
                bigImg={bigImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
