import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="flex h-screen flex-col items-center justify-center text-2xl text-[--color-secondary]"
      id="error-page"
    >
      <h1 className="text-4xl font-black mb-3">Oops!</h1>
      <p className="mb-3">Sorry, this is not the page you're looking for.</p>
      
      <Link to="/" className="font-black hover:text-[--color-primary] px-2 hover:bg-[--color-secondary] hover:underline transition-all duration-200 hover:underline-offset-8 decoration-[--color-accent]"  >Go back</Link>
    </div>
  );
}
