import React from "react";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

import Footer from "../components/Footer";
import Navbar from "./../components/Navbar";

const App: React.FC = () => {
  Swal.fire(
    "¡Atención!",
    "Este sitio fue creado con fines educativos no es oficial de Mercado Libre",
    "warning",
  );

  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default App;
