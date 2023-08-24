import { Link } from 'preact-router/match';
import logo from "../assets/logo.svg";

export default function Nav() {
  return (
    <nav className="h-16 bg-white border-b-2 border-gray-400 flex items-center justify-between p-2">
        <div className="flex items-center">
        <Link href="/" className="mr-4">
          <img src={logo} className="h-12 w-auto"/>
        </Link>
        <Link className="text-xl font-semibold text-gray-400 mr-2" activeClassName="text-gray-500" href="/">
            Home
        </Link>
        <Link className="text-xl font-semibold text-gray-400 mr-2" activeClassName="text-gray-500" href="/dash">
            Dashboard
        </Link>
        </div>
        <div>
        </div>
    </nav>
  )
}
