import { songsArray } from "../assets/songs.ts"
import { artistArray } from "../assets/artists.ts"
import ItemList from "./ItemList.tsx"

type MainProps = {
    type?: string
}

const Main = (props: MainProps) => {
    return (
        <div className="main">
            {props.type === "artist" || props.type === undefined ? (
                <ItemList
                    title="Artistas"
                    items={artistArray}
                    itemsOnDisplay={10}
                    path="/artists"
                />
            ) :
                <></>
            }

            {props.type === "song" || props.type === undefined ? (
                <ItemList
                    title="Músicas"
                    items={songsArray}
                    itemsOnDisplay={20}
                    path="/songs"
                />
            ) :
                <></>
            }

        </div>
    )
}

export default Main