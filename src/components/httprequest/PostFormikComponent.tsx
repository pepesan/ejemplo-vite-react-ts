import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const PostFormikComponent = () => {
    const [response, setResponse] = useState("");

    const initialValues = {
        title: "",
        body: "",
    };

    const validationSchema = Yup.object({
        title: Yup.string()
            .required("El título es obligatorio")
            .max(50, "El título no puede exceder los 50 caracteres"),
        body: Yup.string()
            .required("El cuerpo es obligatorio")
            .max(200, "El cuerpo no puede exceder los 200 caracteres"),
    });

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const res = await axios.post(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    title: values.title,
                    body: values.body,
                    userId: 1,
                }
            );
            setResponse(res.data); // Almacena la respuesta en el estado
            resetForm(); // Reinicia el formulario después de enviar
        } catch (error) {
            console.error("Error al realizar la llamada POST", error);
            setResponse({ error: "Error en la solicitud." });
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Enviar Datos con Formik y Yup</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({isSubmitting}) => (
                    <Form className="bg-light p-4 rounded shadow-sm">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">
                                Título:
                            </label>
                            <Field
                                type="text"
                                name="title"
                                className="form-control"
                                placeholder="Título del post"
                            />
                            <ErrorMessage
                                name="title"
                                component="div"
                                className="text-danger mt-1"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="body" className="form-label">
                                Cuerpo:
                            </label>
                            <Field
                                as="textarea"
                                name="body"
                                className="form-control"
                                rows="5"
                                placeholder="Escribe el cuerpo del post..."
                            />
                            <ErrorMessage
                                name="body"
                                component="div"
                                className="text-danger mt-1"
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                            >
                                Enviar
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
            {response && (
                <div className="mt-4">
                    <h3>Respuesta del Servidor:</h3>
                    <pre className="bg-dark text-white p-3 rounded">
            {JSON.stringify(response, null, 2)}
          </pre>
                </div>
            )}
        </div>
    );
};

export default PostFormikComponent;
