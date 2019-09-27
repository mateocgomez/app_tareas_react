import React from 'react';

const Tareas = ({tarea, eliminarTarea}) => {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <p className="card-text"><span>Nombre de la tarea: </span> {tarea.home}</p>
                <p className="card-text"><span>Cliente: </span> {tarea.cliente}</p>
                <p className="card-text"><span>Fecha de entrega: </span> {tarea.fecha}</p>
                <button
                    className="btn btn-danger"
                    onClick={() =>eliminarTarea(tarea.id)}
                >
                    Borrar &times;
                </button>
            </div>
        </div>
    );
}

export default Tareas;