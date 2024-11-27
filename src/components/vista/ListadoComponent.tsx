// const ListadoComponent = () => {
const ListadoComponent = () => {
    // Array de elementos para listar
    const items = ['Manzana', 'Banana', 'Naranja', 'Uva', 'Pera'];

    return (
        <div>
            <h1>Listado de Frutas</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListadoComponent;
