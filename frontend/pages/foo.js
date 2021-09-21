import { useRouter } from "next/router";

export default function foo() {
    const route = useRouter();

    return (
        <div className="App">
            <h2>foo page</h2>
            <h3>value: {route?.query?.value}</h3>
        </div>
    );
}
