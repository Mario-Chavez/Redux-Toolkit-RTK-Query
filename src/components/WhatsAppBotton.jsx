import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppBotton = () => {
    return (
        <div className=" boton-Whatsapp">
            <a href="https://wa.me/+543815723588" target="_blank">
                <IoLogoWhatsapp size={60} style={{ color: "#42C152" }} />
            </a>
        </div>
    );
};

export default WhatsAppBotton;
