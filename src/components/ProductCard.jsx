const ProductCard = ({ img, changeBigImg, bigImg }) => {
  const handleClick = () => {
    if (bigImg !== img.bigImg) {
      changeBigImg(img.bigImg);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl cursor-pointer ${
        bigImg === img.bigImg ? "border-coral-red" : "border-slate-gray"
      }`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center rounded-xl">
        <img
          src={img.thumbnail}
          alt="product collection"
          width={110}
          height={110}
          className="object-contain rounded-xl"
        />
      </div>
    </div>
  );
};

export default ProductCard;
