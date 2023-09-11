import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(https://github.com/kevindoblea1/miOrg/blob/main/build/img/footer.png?raw=true)" }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src="https://github.com/kevindoblea1/miOrg/blob/main/build/img/facebook.png?raw=true" alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="https://github.com/kevindoblea1/miOrg/blob/main/build/img/twitter.png?raw=true" alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="https://github.com/kevindoblea1/miOrg/blob/main/build/img/instagram.png?raw=true" alt='instagram' />
            </a>
        </div>
        <img src='https://github.com/kevindoblea1/miOrg/blob/main/build/img/Logo.png?raw=true' alt='org' />
        <strong>Desarrollado por Kevin Alvarenga</strong>
    </footer>
}

export default Footer