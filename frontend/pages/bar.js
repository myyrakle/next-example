import { useState } from "react";
import { getRandom } from "../src/api";

export default function bar() {
    const { data, mutate } = getRandom();

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
