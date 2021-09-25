import Link from "next/link";
import { getItems } from "../src/api";

export default function Items(props) {
    return (
        <div className="App">
            <h2>index page</h2>

            {props?.itemList?.map((e) => (
                <li>
                    <Link href="/item/[itemId]" as={`/item/${e.itemId}`}>
                        {e.name}
                    </Link>
                </li>
            ))}
        </div>
    );
}

export async function getServerSideProps() {
    const data = await getItems();

    return {
        props: {
            itemList: data?.items,
        },
    };
}
