import Footer from './footerComplete/Footer'
import Navbar from './navbarComplete/Navbar';
const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
                {children}
            <Footer />
        </div>
    )
}

export default Layout