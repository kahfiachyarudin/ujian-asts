import { Link, NavLink } from "react-router";
import { Button } from "@/components/ui/button";

function Navbar() {
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Testimony", to: "/testimony" },
    { label: "FAQ", to: "/faq" },
  ];

  return (
    <nav className="w-full border-b bg-background">
      <div className="flex h-16 w-full items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <a
            class="flex items-center gap-2 text-lg font-bold tracking-tight transition-opacity hover:opacity-80"
            href="/"
            data-discover="true"
          >
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground shadow-sm">
              L
            </div>
            <span>Logo</span>
          </a>
          <div class="mx-6 hidden h-6 w-px bg-border md:block"></div>

          <div className="flex items-center gap-6 ">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-foreground bg-accent px-2 py-1 rounded-md"
                      : "text-muted-foreground hover:text-foreground "
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <Button asChild className="h-8 px-4 text-sm">
          <Link to="/">Sign Up</Link>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
