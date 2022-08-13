import Link from "next/link";

export default function Home() {
    return (
        <div className="jumbotron">
            <div className="row justify-content-center">
                <Link href="/buildings">
                    <u className="h1 text-center" role="button">BUILDINGS</u>
                </Link>
            </div>
            <div className="row justify-content-center">
                <p>Explore the best-looking buildings</p>
            </div>
        </div>
    )
}
