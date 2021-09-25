import { getItem } from "../../src/api";

export default function ItemByItemId(props) {
    return (
        <div className="App">
            <h2>item page</h2>
            <ul>상품코드: {props.item?.itemId}</ul>
            <ul>상품명: {props.item?.name}</ul>
            <ul>상품가격: {props.item?.price}</ul>
        </div>
    );
}

export async function getServerSideProps({ query }) {
    const data = await getItem(query?.itemId);

    return {
        props: {
            item: data?.item,
        },
    };
}
