import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-neutral text-neutral-content py-4">
      <div className="align-element flex justify-center sm:justify-end">
        <div className="flex gap-x-6 justify-center items-center">
          <Link to={"/login"} className="link link-hover text-xs sm:text-sm">
            Sign in/Guest
          </Link>
          <Link to={"/register"} className="link link-hover text-xs sm:text-sm">
            Create an account
          </Link>
        </div>
      </div>
    </header>
  );
}
