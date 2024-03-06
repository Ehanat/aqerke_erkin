import Button from "./Button";
import { contact, productDetails } from "../constants";

const Details = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Өнім мәліметтері
        </h2>
        <div className="grid grid-cols-2 gap-8 max-lg:gap-4 mt-8">
          <p className="font-montserrat text-slate-900 text-lg leading-8">
            Өнім атауы
            <br />{" "}
            <span className="font-palanquin text-xl font-semibold text-black">
              {productDetails.name}
            </span>
          </p>
          <p className="font-montserrat text-slate-900 text-lg leading-8">
            Өнім өлшемі
            <br />{" "}
            <span className="font-palanquin text-xl font-semibold text-black">
              {productDetails.size}
            </span>
          </p>
          <p className="font-montserrat text-slate-900 text-lg leading-8">
            Өнім салмағы
            <br />
            <span className="font-palanquin text-xl font-semibold text-black">
              {productDetails.weight}
            </span>
          </p>
          <p className="font-montserrat text-slate-900 text-lg leading-8">
            Компресс температурасы
            <br />
            <span className="font-palanquin text-xl font-semibold text-black">
              {productDetails.temperature}
            </span>
          </p>
        </div>
        <hr className="bg-slate-gray mt-8" />
        <h2 className="mt-8 font-montserrat text-black font-bold text-2xl">
          Бағасы: <span className="text-coral-red">{productDetails.price}</span>{" "}
          тг
        </h2>
        <div className="mt-8">
          <Button
            label="Сатып алам"
            fullWidth
            destination={contact.whatsapp_link}
            blank
          />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={productDetails.imgURL}
          alt="product details"
          width={522}
          height={522}
          className="object-container shadow-lg shadow-[#7d6b59]"
        />
      </div>
    </section>
  );
};

export default Details;
