import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div
      className="flex h-screen flex-col items-center justify-center text-2xl text-[--color-secondary]"
      id="error-page"
    >
      <h1 className="mb-3 text-6xl font-black">Oops!</h1>
      <p className="mb-3 p-2 text-center">
        Sorry, this is not the page you're looking for.
      </p>

      <Link
        to="/"
        className="border-4 border-[--color-secondary] px-4 py-1 font-black decoration-[--color-accent] transition-all duration-200 hover:bg-[--color-secondary] hover:text-[--color-primary] hover:underline hover:underline-offset-8"
      >
        Go back
      </Link>
    </div>
  );
}
