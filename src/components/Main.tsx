import { songsArray } from "../assets/songs.ts"
import { artistArray } from "../assets/artists.ts"
import ItemList from "./ItemList.tsx"

const Main = () => {
    return (
        <div className="main">
            <ItemList
                title="Artistas"
                items={artistArray}
                itemsOnDisplay={10}
                path="/artist"
            />

            <ItemList
                title="Músicas"
                items={songsArray}
                itemsOnDisplay={20}
                path="/song"
            />
        </div>
    )
}

export default Main