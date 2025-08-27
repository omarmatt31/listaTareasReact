import {Form, Button} from "react-bootstrap";
import ListaTarea from "./ListaTarea";
import { useForm } from "react-hook-form"
import { crearTarea } from "../helpers/queries";

const FormularioTarea = () => {

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    } = useForm()

    const agregarTareas= async (data)=>{
        const respuesta = await crearTarea(data)
        if(respuesta.status !== 201){
            console.log('No se creo la tarea')
        }
        reset()
    }


    return (
        <section>
            <Form onSubmit={handleSubmit(agregarTareas)}>
                <Form.Group className="mb-2 d-flex">
                    <Form.Control type="text" placeholder="Ingresa una tarea" onChange={(e)=> setTarea(e.target.value)} {...register('tarea', {required:'La tarea es un dato obligatorio',
                        minLength: { value: 3, message: 'La tarea debe tener 3 caracteres como minimo'},
                        maxLength: { value: 50, message: 'La tarea debe tener como maximo 50 caracteres'},
                        pattern: { value:/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]{1,50}$/, message: 'La tarea debe contener caracteres alfanumericos, mayusculas o minusculas'}
                    })} />
                    <Button className="ms-3" variant="info" type="submit">Agregar</Button>
                    </Form.Group>
                <Form.Text className="text-danger">{errors.inputTarea?.message}</Form.Text>
            </Form>
            <ListaTarea></ListaTarea>
        </section>
    );
};

export default FormularioTarea;