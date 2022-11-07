import { NavLink } from "@remix-run/react";

export default function Index() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/use-effect">useEffect</NavLink>
        </li>
      </ul>
    </nav>
  );
}
