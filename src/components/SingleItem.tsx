import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type SingleItemProps = {
    id: number;
    name: string;
    artist: string;
    image: string;
    banner: string;
    isArtist: boolean;
    path: string;
}

export default function SingleItem(props: SingleItemProps) {
    return (
        <Link to={`${props.path}/${props.id}`} className="single-item">
            <div className="single-item__div-image-button">
                <div className="single-item__div-image">
                    <img className="single-item__image" src={props.image} alt={`Imagem do Artista ${props.artist}`} />
                </div>
                <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
            </div>
            <div className="single-item__texts">
                <div className="single-item__2lines">
                    <p className="single-item__title">
                        {props.name}
                    </p>
                </div>
                <p className="single-item__type">
                    {props.isArtist ?? "Artista"}
                </p>
            </div>
        </Link>
    )
}