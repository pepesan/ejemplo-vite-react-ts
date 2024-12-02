import { useState, useMemo } from 'react';

const ExpensiveCalculationComponent = () => {
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);

    // Función que simula un cálculo costoso
    const expensiveCalculation = (num: number) => {
        console.log("Ejecutando cálculo costoso...");
        for (let i = 0; i < 1000000000; i++) { /* empty */ } // Simula un proceso pesado
        return num * 2;
    };

    // Memoriza el resultado del cálculo solo si 'count' cambia
    const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

    return (
        <div>
            <h1>Contador con Cálculo Costoso</h1>
            <div>
                <p>Valor de count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Incrementar count</button>
            </div>
            <div>
                <p>Valor de otherCount: {otherCount}</p>
                <button onClick={() => setOtherCount(otherCount + 1)}>
                    Incrementar otherCount
                </button>
            </div>
            <div>
                <p>Resultado del cálculo (memoizado): {memoizedValue}</p>
            </div>
        </div>
    );
};

export default ExpensiveCalculationComponent;
