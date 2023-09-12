import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {


    //use state para colaborador
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const { registrarColaborador } = props

    //use state para equipo
    const [titulo, actualizartitulo] = useState("")
    const [color, actualizarColor] = useState("")
    const { crearEquipo } = props


    const manejarColaborador = (e) => {
        e.preventDefault()
        //creamos un objeto
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        //pasamos los datos a app.js
        registrarColaborador(datosAEnviar)
        //mostramos la notificacion
    }
    
    const manejarEquipo = (e) => {
        e.preventDefault()
        //pasamos los datos a app.js
        crearEquipo({titulo, colorPrimario: color})
    }
    
    return <section className="formulario">
        <form onSubmit={manejarColaborador}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Registrar Colaborador
            </Boton>
            
        </form>
        <form onSubmit={manejarEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                actualizarValor={actualizartitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar el color en Hex..."
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>
                Registrar Equipo
            </Boton>
        </form>
    </section>
}

export default Formulario