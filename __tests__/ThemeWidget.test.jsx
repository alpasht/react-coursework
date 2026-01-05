import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeWidget from "../src/components/ThemeWidget";

jest.mock("@fortawesome/react-fontawesome", () => ({
    FontAwesomeIcon: ({ icon }) => (
        <span data-testid="icon">{icon.iconName}</span>
    ),
}));

describe("ThemeWidget", () => {
    beforeEach(() => {
        document.body.style.cssText = "";
    });

    test("renders Toggle Theme button", () => {
        render(<ThemeWidget />);
        expect(screen.getByRole("button", { name: /toggle theme/i })).toBeInTheDocument();
    });

    test("default is light mode (moon icon)", () => {
        render(<ThemeWidget />);
        expect(screen.getByTestId("icon")).toHaveTextContent("moon");
    });

    test("click toggles to dark mode and CSS variable updates", async () => {
        const user = userEvent.setup();
        render(<ThemeWidget />);
        await user.click(screen.getByRole("button", { name: /toggle theme/i }));
        expect(document.body.style.getPropertyValue("--bg-color")).toBe("#1e1e2e");
        expect(screen.getByTestId("icon")).toHaveTextContent("sun");
    });
});
