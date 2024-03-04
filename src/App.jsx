import Banner from "./components/Banner";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Banner />
      </section>
    </main>
  );
};

export default App;
