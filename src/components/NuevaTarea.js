import React, {Component} from 'react';
import uuid from 'uuid';


const stateInicial = {
    tarea: {
        home : '',
        fecha : '',
        cliente: ''
      },
      error: false
}
class NuevaTarea extends Component {

  state = { ...stateInicial }

  handleChange = (e) => {
    // Setear en el state lo que el usuario escribe

    this.setState({
        tarea : {
            ...this.state.tarea,
            [e.target.name] : e.target.value
        }
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    

    //extraer los valores del state
    const {home, fecha, cliente } = this.state.tarea;
    //validar que todos los campos esten llenos
    if (home === '' || fecha === '' || cliente === '') {
        this.setState({
            error: true
        });

        //detener la ejecucción
        return;
    }

    // generar objeto con los datos
    const nuevaTarea = {...this.state.tarea}
    nuevaTarea.id = uuid();
    //agregar la cita al state de App
    this.props.crearNuevaTarea(nuevaTarea);

    this.setState({
        ...stateInicial
    })

  }

  render() {

    // extraer valor del state

    const { error } = this.state;
    return(
        <div className="card mt-5 py-5">
            <div className="card-body">
                <h2 className="card-title text center mb-5">
                    Llena el formulario para crear una nueva tarea
                </h2>

                {error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios!</div> : null}

                <form
                    onSubmit={this.handleSubmit}
                >
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre de la tarea</label>
                        <div className="col-sm-8 col-lg-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre tarea"
                                name="home"
                                onChange={this.handleChange}
                                value={this.state.tarea.home}
                            />
                        </div>
                    </div> 

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre del cliente</label>
                        <div className="col-sm-8 col-lg-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre del cliente"
                                name="cliente"
                                onChange={this.handleChange}
                                value={this.state.tarea.cliente}
                            />
                        </div>
                    </div> 

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha de entrega</label>
                        <div className="col-sm-8 col-lg-4">
                            <input
                                type="date"
                                className="form-control"
                                name="fecha"
                                onChange={this.handleChange}
                                value={this.state.tarea.fecha}
                            />
                        </div>
                    </div> 

                    <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar tarea" />

                </form>

            </div>
        </div>
    );
  }
}

export default NuevaTarea;