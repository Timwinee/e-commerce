import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar } from "../components";
import { Loading } from "../components/Loading";

export default function HomeLayout() {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";

  return (
    <>
      <Header />
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="align-element py-20">
          <Outlet />
        </div>
      )}
    </>
  );
}
