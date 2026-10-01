import { Outlet, ScrollRestoration } from "react-router-dom";

export default function RouterLayout() {
  return (
    <>
      <Outlet />
      <ScrollRestoration
        getKey={(location) =>
          location.pathname === "/works" ? location.pathname : location.key
        }
      />
    </>
  );
}
