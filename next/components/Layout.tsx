import { PropsWithChildren } from 'react';
import Navbar from 'components/Navbar';
import ActiveResource from './ActiveResource';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <ActiveResource />
      {children}
    </>
  );
};

export default Layout;
