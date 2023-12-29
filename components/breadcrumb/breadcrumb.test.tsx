import { test, expect, vi } from "vitest";
import { render, cleanup } from "@testing-library/react";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";

test("breadcrumb path with leading forward slash", () => {
    vi.mock("next/navigation", () => ({
        usePathname() {
            return "/blog/gnome";
        },
    }));
    const { container } = render(<Breadcrumb />);
    expect(container.textContent).toBe("blog/gnome/");
    cleanup();
});

test("breadcrumb path without leading forward slash", () => {
    vi.mock("next/navigation", () => ({
        usePathname() {
            return "blog/gnome";
        },
    }));
    const { container } = render(<Breadcrumb />);
    console.log(container.textContent);
    expect(container.textContent).toBe("blog/gnome/");
    cleanup();
});

test.todo("link is functional");
