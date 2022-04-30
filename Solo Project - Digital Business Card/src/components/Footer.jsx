import twitter from '../images/twitter-icon.png'
import facebook from '../images/facebook-icon.png'
import insta from '../images/insta-icon.png'
import github from '../images/github-icon.png'

function Footer() {
    return (
        <footer>
            <a href="#"><img src={twitter} alt="twitter icon" /></a>
            <a href='#'><img src={facebook} alt="facebook icon" /></a>
            <a href='#'><img src={insta} alt="instagram icon" /></a>
            <a href='#'><img src={github} alt="github icon" /></a>
        </footer>
    )
}

export default Footer