import Footer from "./menues/Footer";
import MobileDrawer from "./menues/MobileDrawer";
import Nav from "./menues/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <MobileDrawer />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
