import "./Footer.css"
import { AiFillGithub, AiOutlineFacebook, AiFillLinkedin} from "react-icons/ai"
const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(https://github.com/kevindoblea1/miOrg/blob/main/build/img/footer.png?raw=true)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/kevindoblea93'>
                <AiOutlineFacebook size={32} color="white" alt='Facebook' />
            </a>
            <a href='https://github.com/kevindoblea1'>
                <AiFillGithub size={32} color="white" alt='Github' />
            </a>
            <a href='https://www.instagram.com/kevin_doblea/'>
                <AiFillLinkedin size={32} color="white" alt='instagram' />
            </a>
        </div>
        <img src='https://github.com/kevindoblea1/miOrg/blob/main/build/img/Logo.png?raw=true' alt='org' />
        <strong>Desarrollado por Kevin Alvarenga</strong>
    </footer>
}

export default Footer
