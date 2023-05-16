import { Outlet } from 'react-router-dom';
import { LinkNav } from './Navigation-styled';

const Navigation = () => {
  return (
    <>
      <nav>
        <LinkNav to="/">Home</LinkNav>
        <LinkNav to="/tweets">Tweets</LinkNav>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navigation;
