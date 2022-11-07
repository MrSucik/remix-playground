import { NavLink } from "@remix-run/react";

export default function Index() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/use-effect">useEffect</NavLink>
        </li>
        <li>
          <NavLink to="/use-effect-2">useEffect v2</NavLink>
        </li>
      </ul>
    </nav>
  );
}
