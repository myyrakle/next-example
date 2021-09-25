import Link from "next/link";

export default function index() {
    return (
        <div className="App">
            <h2>index page</h2>

            <li>
                <Link href="/foo?value=boom">foo 페이지로 이동</Link>
            </li>
            <li>
                <Link href="/bar">bar 페이지로 이동</Link>
            </li>
            <li>
                <Link href="/items">items 페이지로 이동</Link>
            </li>
        </div>
    );
}
