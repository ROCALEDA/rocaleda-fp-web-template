import React from "react";
import { render} from "@testing-library/react";
import ProyectPage from "../projects/page";


describe('<ProyectPage />', () => {
    it('renders without crashing', () => {
        expect(() => {
            render(<ProyectPage />);
        }).not.toThrow();
    });
});

