// función que recibe como parámetro
// un objeto que tiene un atributo llamado message
// @ts-expect-error
// const SimpleComponent = ({ message }) => {
const SimpleComponent = ({ message }) => {
    // que presenta un div con el contenido en texto de message
    return <div>{message}</div>;
};

export default SimpleComponent;
