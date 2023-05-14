import { NavLink, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tweets">tweets</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navigation;
