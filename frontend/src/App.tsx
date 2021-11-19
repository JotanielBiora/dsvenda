import Barchart from "components/Barchart";
import Datatable from "components/Datatable";
import Donutchart from "components/Donutchart";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container" >
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <Barchart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas as vendas</h5>
            <Donutchart />
          </div>
        </div>
       
        <div className="py-3">
          <h2 className="text-primary">Todas as Vendas</h2>
        </div>

        <Datatable />
      </div>
      <Footer />
    </>
  );
}

export default App;
