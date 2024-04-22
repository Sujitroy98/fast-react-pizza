import SearchOrder from '../features/order/SearchOrder';
import { Link } from 'react-router-dom';
import Username from '../features/user/username';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-300 bg-yellow-400 px-4 py-3 uppercase sm:px-6 font-pizza">
      <Link className="tracking-widest" to="/">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
