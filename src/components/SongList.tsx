import SongItem from "./SongItem";

export default function SongList() {

    const mockSong = {
        id: 1,
        name: "Song Name",
        image: "https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d",
        duration: "3:45",
        index: 1
    }

    return (
        <div className="song-list">
            <SongItem
                {...mockSong}
            />
            <SongItem
                {...mockSong}
            />
            <SongItem
                {...mockSong}
            />
            <SongItem
                {...mockSong}
            />
            <SongItem
                {...mockSong}
            />
            <p className="song-list__see-more">Ver mais</p>
        </div>
    )
}