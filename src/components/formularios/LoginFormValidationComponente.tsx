import {Component} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class LoginFormValidationComponente extends Component {
    render() {
        return (
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('Tiene que ser un email válido')
                        .required('Tiene que introducir un email, es obligatorio'),
                    password: Yup.string()
                        .min(8, 'Pero pon una contraseña un poco más larga, al menos 8 caracteres!')
                        .max(20, 'Te has pasado de caracteres, son 20 como mucho!')
                        .required('La contraseña es obligatoria'),
                })}
                onSubmit={fields => {
                    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}>
                {({ errors, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field name="email" type="email"
                                   className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <Field name="password" type="password"
                                   className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Login</button>
                        </div>
                    </Form>
                )}
            </Formik>
        )
    }
}



export default LoginFormValidationComponente;
