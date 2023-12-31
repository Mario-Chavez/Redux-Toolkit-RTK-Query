import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUser } from "../api/userSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        Swal.fire({
            title: "Quieres registrarte?",
            showDenyButton: true,
            confirmButtonText: "Registrarme",
            confirmButtonColor: "#1261BA",
            denyButtonText: `Cancelar`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(setUser({ ...data, orders: [] }));
                Swal.fire("Registrado!", "", "success");
                reset();
                navigate("/");
            }
        });
    };

    return (
        <div className="container-detail py-5 ">
            <section className="container py-5 d-flex flex-column my-5 align-items-center justify-content-center text-white">
                <h1 className="mb-5">Registrate para hacer tu pedido </h1>
                <Form onSubmit={handleSubmit(onSubmit)} className=" formCrearEditar">
                    <Form.Group className="my-3 ">
                        <label className="text-white mb-1">Nombre</label>
                        <input
                            type="text"
                            placeholder="Nombre de Usuario"
                            className="form-control"
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
                            className="form-control"
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
                        <label className="text-white mb-1">Contraseña</label>
                        <input
                            type="password"
                            placeholder="Password123..."
                            className="form-control"
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
                    <div className=" d-flex justify-content-center mt-4">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{
                                backgroundColor: "rgb(22, 68, 117)",
                                width: "10rem",
                            }}
                        >
                            {" "}
                            Iniciar{" "}
                        </button>
                    </div>
                </Form>
            </section>
        </div>
    );
};

export default Register;
