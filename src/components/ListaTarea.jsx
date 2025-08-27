import { ListGroup } from "react-bootstrap";
import ItemTarea from './ItemTarea'
import { useState, useEffect } from "react";
import { leerTareas } from "../helpers/queries";


const ListaTarea = ({listaTareas, setListaTareas}) => {

    useEffect(()=>{
        obtenerTareas()
    }, [])

    const obtenerTareas = async ()=>{
        const respuesta = await leerTareas()
        if(respuesta.status === 200){
            const datos = await respuesta.json()
            setListaTareas(datos)
        }else{
            console.info('Ocurrio un error al buscar las tareas')
        }
    }
    return (
        <section className="d-flex justify-content-center">
            <ListGroup className="w-75">
                {
                    listaTareas && listaTareas.length > 0 ? (
                        listaTareas.map((item) => (
                            <ItemTarea key={item._id} nombreTarea={item} setListaTareas={setListaTareas}></ItemTarea>
                        ))
                    ) : (
                        <p className="text-center">No hay tareas</p>
                    )
                }
            </ListGroup>
        </section>

    );
};

export default ListaTarea;