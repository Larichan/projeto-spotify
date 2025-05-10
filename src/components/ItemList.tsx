import { Link } from "react-router-dom";
import SingleItem from "./SingleItem";

type ItemListProps = {
    title: string;
    items: {
        id: number;
        name: string;
        image: string;
        artist: string;
        banner: string;
    }[];
    itemsOnDisplay: number;
    path: string;
}

export default function ItemList(props: ItemListProps) {
    return (
        <div className="item-list">
            <div className="item-list__header">
                <h2>
                    {`${props.title} populares`}
                </h2>
                <Link className="item-list__link" to={props.path}>Mostrar tudo</Link>
            </div>
            <div className="item-list__container">
                {props.items.slice(0, props.itemsOnDisplay).map((item) => (
                    <SingleItem
                        key={item.id}
                        path={props.path}
                        isArtist={props.path.includes("artist")}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}