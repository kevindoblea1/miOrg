import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from "./componentes/Header/Header"
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor"
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://media.licdn.com/dms/image/D4D03AQEQ5DGPEu63pQ/profile-displayphoto-shrink_800_800/0/1666749321927?e=1699488000&v=beta&t=srKmSE16DekyXGA09qY39nuVLf5f8vn03l7pin4FTjQ",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e intructora"
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor"
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzales",
      puesto: "Dev Fullstack"
    },
    {
      id: uuid(),
      equipo: "Mobile",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam"
    },
    
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(), // Nuevo ID generado
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "##E8F8FF"
    },
    {
      id: uuid(), // Nuevo ID generado
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(), // Nuevo ID generado
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(), // Nuevo ID generado
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(), // Nuevo ID generado
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(), // Nuevo ID generado
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
  ]);
  

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    console.log(nuevosColaboradores)
  }

  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });
    actualizarEquipos(equiposActualizados);
  }

  return (
    <div>
      <Header />
      {mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
      />}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => <Equipo
        datos={equipo}
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
      />
      )}
      {/* Rodapie de la página */}
      <Footer />
    </div>
  );
}

export default App;
