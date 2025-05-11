import { Link } from 'react-router-dom'
import logoSpotify from '../assets/spotify-logo.png'

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img src={logoSpotify} alt="Spotify Logo" />
            </Link>
            <Link to="/" className="header__link header__link--small"><h1>Spotify</h1></Link>
        </div>
    )
}

export default Header
