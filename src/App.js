import React, {Component} from 'react';
import './bootstrap.min.css'
import Header from './components/Header'
import NuevaTarea from './components/NuevaTarea'
import ListaTarea from './components/ListaTarea'


class App extends Component {

  state = {
    tareas: []
  }

  // para guardar la informacion en el storage
  componentDidMount() {
    const tareasLS = localStorage.getItem('tareas');
    if (tareasLS) {
      this.setState({
        tareas : JSON.parse(tareasLS)
      })
    }
  }

  // cuando eliminamos o agregamos una nueva cita
  componentDidUpdate() {
    localStorage.setItem('tareas', JSON.stringify(this.state.tareas));
  }

  crearNuevaTarea = (datos) => {
    //copiar el state actual
    const tareas = [...this.state.tareas, datos];

    //agregar el nuevo state
    this.setState({
      tareas: tareas
    })

    //elimina las citas del state

  }

  eliminarTarea = id => {
    const tareasActuales = [...this.state.tareas];

    const tareas = tareasActuales.filter(tareas => tareas.id !== id)

    this.setState({
      tareas
    })
  }

  render() {
    return(
      <div className="container">
        <Header 
          titulo="Listado de tareas"
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaTarea 
              crearNuevaTarea = {this.crearNuevaTarea}
            />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <ListaTarea
              tarea={this.state.tareas}
              eliminarTarea = {this.eliminarTarea}
            />
          </div>

      

        </div>
      </div>
    );
  }
}

export default App;