import { useRouter } from "next/router";
import { getRandom } from "../src/api";

export default function Foo(props) {
    const route = useRouter();

    return (
        <div className="App">
            <h2>foo page</h2>
            <h3>value: {route?.query?.value}</h3>
            <h3>random: {props.random}</h3>
        </div>
    );
}

export async function getStaticProps() {
    const data = await getRandom();

    return {
        props: {
            random: data?.value,
        },
    };
}
