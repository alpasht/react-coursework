import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../src/components/Navbar";

describe("Navbar", () => {
    test("renders logo and navigation links", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        expect(screen.getByText(/home/i)).toBeInTheDocument();
        expect(screen.getByText(/properties/i)).toBeInTheDocument();
    });
});
