import { ListGroup } from "react-bootstrap";
import ItemTarea from './ItemTarea'


const ListaTarea = ({tareas, borrarTarea}) => {
    return (
        <ListGroup>
            {
                tareas.map((item, indice)=><ItemTarea key={indice} nombreTarea={item} borrarTarea={borrarTarea}></ItemTarea>)
            }
        </ListGroup>
    );
};

export default ListaTarea;