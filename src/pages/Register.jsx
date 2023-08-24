import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        reset,
    } = useForm();
    return (
        <div className="container-detail p-5">
            <section className="container  d-flex flex-column  my-5  align-items-center justify-content-center text-white">
                <h1>Soy el register</h1>
                <Form className="formCrearEditar">
                    <Form.Group className="my-3">
                        <label className="text-white text-start mb-1">Nombre</label>
                        <input
                            type="text"
                            placeholder="Nombre de Usuario"
                            className="input_CrearEditarpd"
                            {...register("nombre", {
                                required: "El nombre de usuario es obligatorio",
                                minLength: {
                                    value: 2,
                                    message:
                                        "La cantidad minima de caracteres es de 2 digitos",
                                },
                                maxLength: {
                                    value: 60,
                                    message:
                                        "La cantidad maxima  de caracteres es de 60 digitos",
                                },
                            })}
                        />
                        <Form.Text className="text-danger fw-bold">
                            {errors.nombre?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 ">
                        <label className="text-white mb-1">Email</label>
                        <input
                            type="text"
                            placeholder="E-mail"
                            className="input_CrearEditarpd"
                            {...register("email", {
                                required: "El email es obligatorio",
                                pattern: {
                                    value: /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
                                    message:
                                        'El Email debe contener "@" y terminar en: ".com"',
                                },
                            })}
                        />
                        <Form.Text className="text-danger fw-bold">
                            {errors.email?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <label className="text-white mb-1">Imagen</label>
                        <input
                            type="text"
                            placeholder="Imagen de Usuario"
                            className="input_CrearEditarpd"
                            {...register("imagen", {
                                required: "La imagen es obligatoria",
                            })}
                        />
                        <Form.Text className="text-danger fw-bold">
                            {errors.imagen?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <label className="text-white mb-1">Contraseña</label>
                        <input
                            type="password"
                            placeholder="Ej:RollingCode1"
                            className="input_CrearEditarpd"
                            {...register("contrasenia", {
                                required: "La contraseña es obligatoria",
                                pattern: {
                                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                    message:
                                        "La contraseña debe tener minimo 8 caracteres, al menos una mayúscula una minúscula y un número",
                                },
                            })}
                        />
                        <Form.Text className="text-danger fw-bold">
                            {errors.contrasenia?.message}
                        </Form.Text>
                    </Form.Group>
                    <button type="submit" className="boton_iniciar">
                        {" "}
                        Iniciar{" "}
                    </button>
                </Form>
            </section>
        </div>
    );
};

export default Register;
