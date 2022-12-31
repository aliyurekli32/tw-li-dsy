import Footer from "./Footer";
import Navbar from "./Navbar";


const Layout = ({children}) => {
  return <div className="sm:p-10">
  <Navbar/>
  <main className="flex min-h-screen flex-col items-center justify-center py-2">
  {children}
  </main>
  <Footer/>
  </div>;
};

export default Layout;
