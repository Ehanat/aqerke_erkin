import Banner from "./sections/Banner";
import Nav from "./components/Nav";
import Details from "./components/Details";
import Services from "./sections/Services";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Banner />
      </section>
      <section
        id="details"
        className="padding bg-[#9f907f] rounded-t-[8%] max-lg:rounded-t-3xl"
      >
        <Details />
      </section>
      <section id="services" className="padding">
        <Services />
      </section>
      <section className="padding-x bg-black padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
