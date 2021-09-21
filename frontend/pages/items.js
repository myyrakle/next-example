import Link from "next/link";
import { getItems } from "../src/api";

export default function items(props) {
    return (
        <div className="App">
            <h2>index page</h2>

            {props?.itemList?.map((e) => (
                <li>
                    <Link href="/item/[itemId]" as={`/item/${e.itemId}`}>
                        <a>{e.name}</a>
                    </Link>
                </li>
            ))}
        </div>
    );
}

items.getInitialProps = async function () {
    const data = await getItems();

    return {
        itemList: data?.items,
    };
};
