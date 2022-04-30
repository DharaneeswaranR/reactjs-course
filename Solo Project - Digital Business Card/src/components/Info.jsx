import picture from '../images/picture.png'
import email from '../images/email.png'
import linkedin from '../images/linkedin.png'

function Info() {
    return (
        <div className='info'>
            <img className='info-picture' src={picture}/>
            <h1>Laura Smith</h1>
            <p>Frontend Developer</p>
            <a href="#">laurasmith.website</a>
            <div className='btn-container'>
                <button>
                    <img src={email} />
                    Email
                </button>
                <button className='bg-blue'>
                    <img src={linkedin} />
                    LinkedIn
                </button>
            </div>
        </div>
    )
}

export default Info