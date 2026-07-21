import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import MODWorldwide from "./MODWorldwide";

vi.mock("../../components/Layout", () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe("MOD Worldwide portfolio case study", () => {
  it("presents the platform before its implementation details", () => {
    render(
      <MemoryRouter>
        <MODWorldwide />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { level: 1, name: "MOD Worldwide" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "A modular publishing platform for an independent creative agency.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "The Problem" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Platform Walkthrough" }),
    ).toBeInTheDocument();
  });

  it("features three product moments and three engineering challenges", () => {
    const { container } = render(
      <MemoryRouter>
        <MODWorldwide />
      </MemoryRouter>,
    );

    expect(screen.getAllByText(/^Challenge 0[1-3]$/)).toHaveLength(3);
    expect(container.querySelectorAll("h3")).toHaveLength(6);
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Pages assembled from structured content",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Content autonomy without operational drift",
      }),
    ).toBeInTheDocument();
  });

  it("keeps archived implementation evidence behind accessible disclosures", () => {
    const { container } = render(
      <MemoryRouter>
        <MODWorldwide />
      </MemoryRouter>,
    );

    expect(container.querySelectorAll("details")).toHaveLength(6);
    expect(
      container.querySelectorAll('[data-lightbox="case-study-image"]'),
    ).toHaveLength(3);

    const routeNote = screen.getByText("File-based content routing");
    const details = routeNote.closest("details");
    expect(details).not.toHaveAttribute("open");
    fireEvent.click(routeNote);
    expect(details).toHaveAttribute("open");
    expect(screen.getByText("Archived routing excerpt")).toBeInTheDocument();

    expect(
      screen.getAllByRole("link", { name: /visit mod worldwide/i })[0],
    ).toHaveAttribute("href", "https://themoderati.com");
    expect(screen.queryByRole("link", { name: /source/i })).not.toBeInTheDocument();
  });
});
