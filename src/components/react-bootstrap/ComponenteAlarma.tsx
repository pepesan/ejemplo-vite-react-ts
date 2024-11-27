import { Button, Alert } from 'react-bootstrap';

const ComponenteAlarma = () => {
    return (
        <div>
            {[
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
            ].map((variant) => (
                <Alert key={variant} variant={variant}>
                    This is a {variant} alert—check it out!
                </Alert>
            ))}
            <Alert variant="success">Este es un mensaje de éxito!</Alert>
            <Button variant="primary">Haz clic aquí</Button>
        </div>
    );
}
export default ComponenteAlarma;