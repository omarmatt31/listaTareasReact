import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({nombreTarea, borrarTarea}) => {
    return (
        <ListGroup.Item className="list-group-item d-flex justify-content-between align-items-center">
            {nombreTarea}
            <Button variant="danger" onClick={()=>borrarTarea(nombreTarea)}>Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;