import Link from "next/link";
import { useRouter } from "next/router";
import { getItem, getRandom } from "../../src/api";

export default function itemByItemId(props) {
    return (
        <div className="App">
            <h2>item page</h2>
            <ul>상품코드: {props.item?.itemId}</ul>
            <ul>상품명: {props.item?.name}</ul>
            <ul>상품가격: {props.item?.price}</ul>

            <hr />
            <div>{props.random}</div>
        </div>
    );
}

itemByItemId.getInitialProps = async function ({ query }) {
    const data = await getItem(query?.itemId);
    const { value: random } = await getRandom();
    return {
        item: data?.item,
        random,
    };
};
