import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Footer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [enviandoEmail, setEnviandoEmail] = useState(false);
    const envio = (data) => {
        setEnviandoEmail(true);
        reset();
    };

    return (
        <>
            <footer
                className="mt-auto  text-bg-dark py-5 border border-primary p-2"
                id="footer"
            >
                <div className="container d-flex justify-content-center ">
                    <div className="row">
                        <div className="col-md-4 text-center text-md-start ">
                            <h3>INFORMACIÓN</h3>
                            <ul className="list-unstyled">
                                <li className="py-2">
                                    <Link to={"/"} className="text-decoration-none">
                                        Acerca de nosotros
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link to={"/"} className="text-decoration-none">
                                        Información de entrega
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link to={"/"} className="text-decoration-none">
                                        Políticas de privacidad
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link to={"/"} className="text-decoration-none">
                                        Términos y condiciones
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 text-center text-md-start">
                            <h3>MI CUENTA</h3>
                            <ul className="list-unstyled">
                                <li className="py-2">
                                    <Link to={"/"} className="text-decoration-none">
                                        Historial de pedidos
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link to={"/"} className="text-decoration-none">
                                        Boletín
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link to={"/"} className="text-decoration-none">
                                        Reembolsos
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 text-center text-md-start">
                            <h3 className="text-decoration-none">BOLETÍN INFORMATIVO</h3>
                            <p className="text-center text-md-start">
                                Suscríbete a nuestros boletines ahora y mantente al día
                                con ofertas exclusivas.
                            </p>
                            <form onSubmit={handleSubmit(envio)}>
                                <div>
                                    <input
                                        type="email"
                                        className="form-control w-100"
                                        placeholder="Ingrese el correo electrónico"
                                        id="user_email"
                                        required
                                        {...register("user_email", {
                                            required: "El email es obligatorio",
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                                message:
                                                    "Por favor, introduce una dirección de correo electrónico válida",
                                            },
                                            minLength: 5,
                                            maxLength: 100,
                                        })}
                                    />
                                    <div className="text-danger mt-2 texto_email">
                                        {errors.email?.message}
                                    </div>
                                </div>
                                <button
                                    className="w-100 btn btn-primary"
                                    type="submit"
                                    style={{
                                        backgroundColor: "rgb(22, 68, 117)",
                                        width: "12rem",
                                    }}
                                >
                                    {enviandoEmail ? "Enviado" : "Enviar"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
