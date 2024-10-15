import { Link } from "react-router-dom";

function Logo({ monotone = false }) {
  return (
    <Link className="w-20" to="/">
      <h3
        className={`font-arvo text-2xl md:text-3xl font-bold  ${
          monotone ? "text-neutral-400" : "text-neutral-900"
        }`}
      >
        Tech:<span className={!monotone ? "text-indigo-900" : ""}>Hunt</span>
      </h3>
    </Link>
  );
}

export default Logo;
