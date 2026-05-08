import { useRouteError, Link } from "react-router-dom";
export default function Error() {
  const error = useRouteError();
//   console.log(error);
  if(error.status === 404){
    return(
        <main className="grid place-items-center min-h-screen">
            <div className="text-center ">
                <p className="text-9xl font-semibold text-primary">404</p>
                <h1 className="mt-4 text-3xl *:font-bold tracking-tight sm:text-5xl">page not found</h1>
                <p className="mt-6 text-lg leading-7 ">Sorry, we could't find the page you are looking for.</p>
                <div className="mt-10">
                    <Link to={'/'} className="btn btn-primary uppercase">Go home back</Link>
                </div>
            </div>
        </main>
    )
  }
  return (
    <main className="grid place-items-center min-h-screen">
        <h1 className="text-6xl font-semibold ">There was an error ...</h1>
    </main>
  )
}
