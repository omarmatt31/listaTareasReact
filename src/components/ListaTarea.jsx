import { ListGroup } from "react-bootstrap";
import ItemTarea from './ItemTarea'


const ListaTarea = ({tareas, borrarTarea}) => {
    return (
        <section className="d-flex justify-content-center">
            <ListGroup className="w-75">
                {
                    tareas.map((item, indice)=><ItemTarea key={indice} nombreTarea={item} borrarTarea={borrarTarea}></ItemTarea>)
                }
            </ListGroup>
        </section>

    );
};

export default ListaTarea;