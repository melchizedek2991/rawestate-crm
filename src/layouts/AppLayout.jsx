import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function AppLayout() {
  return (
    <>
      <Sidebar />

      <div>
        <Topbar />

        <main>
          <h1>Main Content</h1>
        </main>
      </div>
    </>
  );
}

export default AppLayout;
