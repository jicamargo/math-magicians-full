import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const Layout = () => {
  return (
    <div className="wrapper">
        <Navbar />
        <div className="content">
          <Outlet />
        </div>
    </div>
  );
};
export default Layout;