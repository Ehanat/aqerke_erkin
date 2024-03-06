import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

import Button from "../components/Button";
import ProductCard from "../components/ProductCard";

import { machine_sm } from "../assets/images";
import { boxHover, boxSlideIn, products } from "../constants";
import { arrowRight } from "../assets/icons";

const Banner = () => {
  const [bigImg, setBigImg] = useState(machine_sm);

  const animationControls = useAnimationControls();

  const handleClick = () => {
    animationControls.start("move");
    console.log("clicked");
  };

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
        <motion.h1
          initial={{ x: -450 }}
          animate={{ x: 0 }}
          className="mt-8 mb-8 font-palanquin text-8xl max-sm:text-[70px] max-sm:leading-[82px] font-bold"
        >
          Аяқ массаж апараты
        </motion.h1>
        <Button label="Бағасы" iconURL={arrowRight} destination="#details" />
      </div>

      <div className="flex flex-col gap-2 justify-center items-center mt-16 max-sm:mt-0">
        <motion.img
          src={bigImg}
          alt="machine"
          width={500}
          height={500}
          className="object-contain"
          variants={boxSlideIn}
          initial="init"
          animate={animationControls}
        />
        <div className="flex sm:gap-6 gap-1">
          {products.map((product, index) => (
            <motion.div
              key={index}
              onClick={handleClick}
              variants={boxHover}
              initial="init"
              whileHover="action"
            >
              <ProductCard
                img={product}
                changeBigImg={() => setBigImg(product.bigImg)}
                bigImg={bigImg}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
