import "bootstrap/dist/css/bootstrap.min.css";
import FormularioTarea from "./components/FormularioTarea";

function App() {

  return (
    <>
      <main>
        <FormularioTarea></FormularioTarea>
        <h1>Hola Mundo</h1>
      </main>
      <footer className="bg-dark text-light text-center py-3">
        <p>&copy; Todos los derechos reservados</p>
        <p>Omar Mattos 💻</p>
      </footer>
    </>
  )
}

export default App
