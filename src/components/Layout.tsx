// src/components/Layout.tsx

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
