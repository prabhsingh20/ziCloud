import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main className="hide-scrollbar h-screen overflow-scroll rounded-3xl  bg-selectedMessageBackground">
      <Outlet />
    </main>
  );
}

export default Main;
