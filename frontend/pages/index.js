import Link from "next/link";

export default function index() {
    return (
        <div className="App">
            <h2>index page</h2>

            <li>
                <Link href="/foo?value=boom">
                    <a>foo 페이지로 이동</a>
                </Link>
            </li>
            <li>
                <Link href="/bar">
                    <a>bar 페이지로 이동</a>
                </Link>
            </li>
            <li>
                <Link href="/items">
                    <a>items 페이지로 이동</a>
                </Link>
            </li>
        </div>
    );
}
