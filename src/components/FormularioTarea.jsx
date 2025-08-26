import {Form, Button} from "react-bootstrap";
import ListaTarea from "./ListaTarea";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"

const FormularioTarea = () => {
    const tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || []
    console.log(tareasLocalStorage)
    const [tareas, setTareas] = useState(tareasLocalStorage)

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    } = useForm()

    useEffect(()=>{
    //todas las lineas que escriba aqui se ejecutan automaticamente en montaje y actualizacion del component
    console.log('desde use efect')
    localStorage.setItem('listaTareas', JSON.stringify(tareas))
    }, [tareas])

    const agregarTareas= (data)=>{
        console.log("aqui debería guardar la tarea")
        //tomar la tarea que esta en el state tarea y guardarla en el state tareas (array)
        // tareas.push(tarea)
        setTareas([...tareas, data.inputTarea])
        //limpiar formulario
        reset()
    }

    const borrarTarea = (nombreTarea) =>{
        const tareasFiltradas = tareas.filter((item)=> item !== nombreTarea)
        //Actualizar tareas
        setTareas(tareasFiltradas)
    }
    return (
        <section>
            <Form onSubmit={handleSubmit(agregarTareas)}>
                <Form.Group className="mb-2 d-flex">
                    <Form.Control type="text" placeholder="Ingresa una tarea" onChange={(e)=> setTarea(e.target.value)} {...register('inputTarea', {required:'La tarea es un dato obligatorio',
                        minLength: { value: 3, message: 'La tarea debe tener 3 caracteres como minimo'},
                        maxLength: { value: 50, message: 'La tarea debe tener como maximo 50 caracteres'},
                        pattern: { value:/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]{1,50}$/, message: 'La tarea debe contener caracteres alfanumericos, mayusculas o minusculas'}
                    })} />
                    <Button className="ms-3" variant="info" type="submit">Agregar</Button>
                    </Form.Group>
                <Form.Text className="text-danger">{errors.inputTarea?.message}</Form.Text>
            </Form>
            <ListaTarea tareas={tareas} borrarTarea={borrarTarea}></ListaTarea>
        </section>
    );
};

export default FormularioTarea;