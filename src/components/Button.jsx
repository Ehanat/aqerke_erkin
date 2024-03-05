import React from "react";

const Button = ({
  label,
  iconURL,
  bgColor,
  textColor,
  borderColor,
  fullWidth,
  destination,
  blank,
}) => {
  return (
    <a
      href={destination}
      alt="destinaiton"
      target={`${blank ? "_blank" : "_self"}`}
    >
      <button
        className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
          bgColor
            ? `${bgColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red rounded-xl"
        } rounded-full ${fullWidth && "w-full"}`}
      >
        {label}
        {iconURL && (
          <img
            src={iconURL}
            alt="arrow right"
            className="ml-2 rounded-full w-5 h-5"
          />
        )}
      </button>
    </a>
  );
};

export default Button;
