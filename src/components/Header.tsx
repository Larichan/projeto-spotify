import logoSpotify from '../assets/spotify-logo.png'

const Header = () => {
    return (
        <div className="header">
            <img src={logoSpotify} alt="Spotify Logo" />
            <a href="/" className="header__link header__link--small"><h1>Spotify</h1></a>
        </div>
    )
}

export default Header
