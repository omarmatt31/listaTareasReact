import "bootstrap/dist/css/bootstrap.min.css";
import FormularioTarea from "./components/FormularioTarea";

function App() {

  return (
    <>
      <main className="fondo">
        <section className="container my-5 w-50">
          <h1 className="text-center fw-bold">Lista de Tareas</h1>
          <FormularioTarea></FormularioTarea>
        </section>
      </main>
      <footer className="bg-dark text-light text-center py-3">
        <p>&copy; Todos los derechos reservados</p>
        <p>Omar Mattos 💻</p>
      </footer>
    </>
  )
}

export default App
