import React, { Fragment } from 'react';
import Tarea from './Tareas.js'

const listaTareas = ({tarea, eliminarTarea}) => {

        // Imprimir un mensaje en base si hay citas o no
        const mensaje = Object.keys(tarea).length === 0 ? 'No hay tareas' : 'Estas son tus tareas';

        return (
                <Fragment>
                        <h3>{mensaje}</h3>
                        <div className="lista-citas">
                                {tarea.map(tarea => (
                                        <Tarea 
                                                key={tarea.id}
                                                tarea={tarea}
                                                eliminarTarea={eliminarTarea}
                                        />
                                ))}
                        </div>
                </Fragment>
        );
}

export default listaTareas;