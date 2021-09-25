import { getRandomBySWR } from "../src/api";

export default function Bar() {
    const { data, mutate } = getRandomBySWR();

    return (
        <div className="App">
            <h2>bar page</h2>
            <h3>random: {data?.value}</h3>
            <button
                onClick={() => {
                    mutate();
                }}
            >
                붐
            </button>
        </div>
    );
}
