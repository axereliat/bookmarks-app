import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-info">
            <div className="row justify-content-center">
                <Link href="/">
                    <button className="btn btn-link text-white">Home</button>
                </Link>
                <Link href="/buildings">
                    <button className="btn btn-link text-white">Buildings</button>
                </Link>
            </div>
        </footer>
    );
}
