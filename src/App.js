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
      foto: "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/274319450_5046760545374108_6214660349846117273_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeGwqPfavyhcKNuyhivyheGU6LErjT8IZ4josSuNPwhniDjEeKLCkwIDyg2s_EVgNgVM9QpxJZAFIvlL6V4KDnSB&_nc_ohc=Z8CmG0joiO8AX9Vwu5d&_nc_oc=AQnR6h_dq-GuIj301_ym0VF-5CXJBimp7g2W9_cI40TFy5SsqlLBHoDP6ouViif2H60&_nc_ht=scontent-mia3-1.xx&oh=00_AfDo5oIegSUPHFA-5FK4iZQnJCsDwnrXriWgzY6kI4mQrA&oe=65059843",
      nombre: "Kevin Alvarenga",
      puesto: "Head de MiOrg y front end",
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://media.licdn.com/dms/image/D4E35AQFrthNt2GHTIQ/profile-framedphoto-shrink_800_800/0/1688855858071?e=1695139200&v=beta&t=eVV64TOV3tcLQVlWfGhw8M4e-PPqSs71AP6ZJmid3eE",
      nombre: "Gustavo Adolfo Hernandez Melendez",
      puesto: "Desarrollador"
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
      foto: "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/301861673_5581539048605633_3452687871366679869_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeF9SYLLqlmLctXUeykElPBY2Df4z_CVAGrYN_jP8JUAaqA1RUYiy-tsZdFeh6yWZ24XcXDGAttHHouF7J2n3N1c&_nc_ohc=KgFgki0KzkIAX9cWJde&_nc_ht=scontent-mia3-2.xx&oh=00_AfAGzrkFkRcH2L_k5C6VyIMZM8iL_X1Sg4NyomR417H2Vg&oe=650611B5",
      nombre: "Jonathan Eduardo Cruz",
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
