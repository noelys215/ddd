import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  ArchitectureDiagram,
  EngineeringNotes,
  MediaFrame,
} from "./ArbiterCaseStudyParts";

describe("Arbiter case-study components", () => {
  it("provides a text equivalent for the architecture diagram", () => {
    render(<ArchitectureDiagram />);

    expect(
      screen.getByRole("figure", { name: /react communicates with fastapi/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Authentication")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL + Redis")).toBeInTheDocument();
  });

  it("uses keyboard-native disclosures for engineering notes", () => {
    render(
      <EngineeringNotes
        notes={[
          {
            title: "WebSocket event model",
            body: "Semantic events invalidate canonical query data.",
          },
        ]}
      />,
    );

    const summary = screen.getByText("WebSocket event model");
    const details = summary.closest("details");

    expect(details).not.toHaveAttribute("open");
    fireEvent.click(summary);
    expect(details).toHaveAttribute("open");
    expect(
      screen.getByText("Semantic events invalidate canonical query data."),
    ).toBeInTheDocument();
  });

  it("eagerly loads only media explicitly marked as high priority", () => {
    const { rerender } = render(
      <MediaFrame
        media={{ src: "/hero.webp", alt: "Arbiter watchlist" }}
        eager
      />,
    );

    expect(screen.getByRole("img", { name: "Arbiter watchlist" })).toHaveAttribute(
      "loading",
      "eager",
    );
    expect(
      screen
        .getByRole("img", { name: "Arbiter watchlist" })
        .closest('[data-lightbox="case-study-image"]'),
    ).toBeInTheDocument();

    rerender(
      <MediaFrame media={{ src: "/history.webp", alt: "Movie Night History" }} />,
    );
    expect(
      screen.getByRole("img", { name: "Movie Night History" }),
    ).toHaveAttribute("loading", "lazy");
  });
});
