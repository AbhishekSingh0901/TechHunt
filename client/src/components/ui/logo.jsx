import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <h3 className=" font-arvo text-2xl md:text-3xl font-bold text-neutral-900">
        Tech:<span className=" text-indigo-900">Hunt</span>
      </h3>
    </Link>
  );
}

export default Logo;
