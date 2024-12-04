import { describe, test, expect } from 'vitest';
import { render} from '@testing-library/react';
import Sith from "../src/components/Sith";

describe('<App />', () => {
    test('El componente App se monta correctamente', () => {
        const { container } = render(<Sith />);
        expect(container).toBeTruthy();

        const element = container.querySelector('.sith-box');
        expect(element?.textContent).toBe('I\'m Bad, you know!');
    });
});
