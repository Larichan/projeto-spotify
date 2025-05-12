import { Link, useLocation } from "react-router-dom";
import SingleItem from "./SingleItem";

type ItemListProps = {
    title: string;
    items: {
        id: number;
        name: string;
        image: string;
        artist?: string;
        banner?: string;
    }[];
    itemsOnDisplay: number;
    path: string;
}

export default function ItemList(props: ItemListProps) {
    const { pathname } = useLocation();
    const isHome = pathname === "/";

    return (
        <div className="item-list">
            <div className="item-list__header">
                <h2>
                    {`${props.title} populares`}
                </h2>
                {isHome && <Link className="item-list__link" to={props.path}>Mostrar tudo</Link>}
            </div>
            <div className="item-list__container">
                {props.items.slice(0, isHome ? props.itemsOnDisplay : props.items.length).map((item) => (
                    <SingleItem
                        key={item.id}
                        path={props.path}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}