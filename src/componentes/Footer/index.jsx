import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(build/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src="https://kevindoblea1.github.io/miOrg/build/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="https://kevindoblea1.github.io/miOrg/build/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="https://kevindoblea1.github.io/miOrg/build/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='https://kevindoblea1.github.io/miOrg/build/img/Logo.png' alt='org' />
        <strong>Desarrollado por Kevin Alvarenga</strong>
    </footer>
}

export default Footer