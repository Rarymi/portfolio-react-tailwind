import { Layout } from "./layout/Layout.tsx";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <div>
        <Layout>
          <Home />
        </Layout>
      </div>
    </>
  );
}

export default App;
