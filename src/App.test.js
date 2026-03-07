import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders the homepage navigation", () => {
	render(
		<MemoryRouter initialEntries={["/"]}>
			<App />
		</MemoryRouter>
	);

	expect(screen.getAllByRole("link", { name: /home/i }).length).toBeGreaterThan(0);
});
