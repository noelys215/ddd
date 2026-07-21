import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import ArbiterPortfolioCaseStudy from "./Arbiter";

vi.mock("../../components/Layout", () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe("Arbiter portfolio case study", () => {
  it("presents the product before its implementation details", () => {
    const { container } = render(
      <MemoryRouter>
        <ArbiterPortfolioCaseStudy />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { level: 1, name: "Arbiter" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "breadcrumb" })).toHaveClass(
      "breadcrumb-font",
    );
    expect(
      screen.getByText("A realtime movie-night decision platform."),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "The Problem" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Product Walkthrough" }),
    ).toBeInTheDocument();
    expect(container.querySelectorAll("main")).toHaveLength(1);
  });

  it("features five product moments and exactly three primary challenges", () => {
    const { container } = render(
      <MemoryRouter>
        <ArbiterPortfolioCaseStudy />
      </MemoryRouter>,
    );

    expect(container.querySelectorAll("h3")).toHaveLength(8);
    expect(screen.getAllByText(/^Challenge 0[1-3]$/)).toHaveLength(3);
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "A shared shortlist that belongs to the group",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Durable history and deterministic insights",
      }),
    ).toBeInTheDocument();
  });

  it("exposes technical depth progressively and ends with product actions", () => {
    const { container } = render(
      <MemoryRouter>
        <ArbiterPortfolioCaseStudy />
      </MemoryRouter>,
    );

    expect(container.querySelectorAll("details")).toHaveLength(7);
    expect(container.querySelectorAll('[data-lightbox="case-study-image"]')).toHaveLength(
      8,
    );
    expect(
      [...container.querySelectorAll("main section")].filter((section) =>
        section.classList.contains("border-t"),
      ),
    ).toHaveLength(1);
    expect(
      screen.getByRole("heading", { level: 2, name: "See Arbiter in motion." }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /visit arbiter/i })[0]).toHaveAttribute(
      "href",
      "https://arbitertv.com",
    );
    expect(screen.queryByRole("link", { name: /next project/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Contact" })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /source/i })).not.toBeInTheDocument();
  });
});
