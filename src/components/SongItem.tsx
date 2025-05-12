import { Link } from "react-router-dom";

type SongItemProps = {
    id: number;
    name: string;
    image: string;
    duration: string;
    index: number;
}

export default function SongItem(props: SongItemProps) {
    return (
        <Link to={`/songs/${props.id}`} className="song-item">
            <div className="song-item__number-album">
                <p>{props.index}</p>
                <div className="song-item__album">
                    <img src={props.image} alt={`Imagem da música ${props.name}`} className="song-item__image" />
                    <p className="song-item__name">{props.name}</p>
                </div>
            </div>
            <p>{props.duration}</p>
        </Link>
    )
}