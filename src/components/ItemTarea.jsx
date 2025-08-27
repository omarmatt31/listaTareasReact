import { Button, ListGroup } from "react-bootstrap";
import { borrarTareaPorId, leerTareas } from "../helpers/queries";

const ItemTarea = ({nombreTarea}) => {

    
    const borrarTarea = async () =>{
        const respuesta = await borrarTareaPorId(nombreTarea._id)
        if(respuesta.status === 200){
            console.log('se elimino')
            const respuestaTareas = await leerTareas();
            
        }else{
            console.log('no se elimino')
        }
    }

    return (
        <ListGroup.Item className="list-group-item d-flex justify-content-between align-items-center">
            {nombreTarea.tarea}
            <Button variant="danger" onClick={()=>borrarTarea()}>Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;