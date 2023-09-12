import "./MiOrg.css"

const MiOrg = (props) => {
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="https://github.com/kevindoblea1/miOrg/blob/main/build/img/add.png?raw=true" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg