import Link from "next/link";

export default function Layout({children}) {
    return (
        <div>
            <nav className="navbar navbar-light bg-primary">
                <span className="navbar-brand mb-0 h1 text-white">Welcome</span>
            </nav>
            {children}
            <footer className="bg-light">
                <div className="row justify-content-center">
                    <Link href="/">
                        <button className="btn btn-link">Home</button>
                    </Link>
                    <Link href="/buildings">
                        <button className="btn btn-link">Buildings</button>
                    </Link>
                </div>
            </footer>
        </div>
    );
}
