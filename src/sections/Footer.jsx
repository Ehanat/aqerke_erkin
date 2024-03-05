import React from "react";
import { socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between max-sm:flex-col items-center gap-20">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start">
            <h2 className="text-base font-montserrat text-white sm:max-w-sm">
              Aqerke Yerkin
            </h2>
          </div>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <a
                key={icon.src}
                href={icon.url}
                target="_blank"
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between text-white-400 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img
              src={copyrightSign}
              alt="copy right sign"
              width={20}
              height={20}
              className="rounded-full m-0"
            />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
