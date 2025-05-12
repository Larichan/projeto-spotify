import { useState } from "react";
import SongItem from "./SongItem";

type SongListProps = {
    songs: {
        id: number;
        name: string;
        image: string;
        duration: string;
        audio: string;
        artist: string
    }[]
}

export default function SongList({ songs }: SongListProps) {

    const [numberOfShowingSongs, setNumberOfShowingSongs] = useState(5);

    const handleSeeMore = () => {
        setNumberOfShowingSongs(prev => prev + 5);
    }

    return (
        <div className="song-list">
            {songs.slice(0, numberOfShowingSongs).map((song, index) => (
                <SongItem
                    key={song.id}
                    index={index + 1}
                    {...song}
                />
            ))}

            <p className="song-list__see-more" onClick={handleSeeMore}>Ver mais</p>
        </div>
    )
}