import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className=" border border-gray-400 bg-blue-200">
        <div className="container">
          <nav className="flex items-center py-3 text-[18px] font-[500]">
            <NavLink to="/">Logo</NavLink>
            <ul className="flex items-center gap-3 ml-auto">
              <li>
                <NavLink className="py-3" to="/catalog">
                  Catalog
                </NavLink>
              </li>
              <li>
                <NavLink className="py-3" to="/favorite">
                  Favorite
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>{<Outlet />}</main>
    </>
  );
};

export default Layout;
