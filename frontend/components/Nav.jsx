import { Link } from 'preact-router/match';
import Button from './Button';

export default function Nav() {
  return (
    <nav className="h-16 bg-white border-b-2 border-gray-400 flex items-center justify-between p-2">
        <div>
        <Link class="text-xl font-semibold text-gray-400 mr-2" activeClassName="text-gray-500" href="/">
            Home
        </Link>
        <Link class="text-xl font-semibold text-gray-400 mr-2" activeClassName="text-gray-500" href="/dash">
            Foo
        </Link>
        </div>
        <div>
        <Button text={"Login"} classList={"py-1"} />
        </div>
    </nav>
  )
}
