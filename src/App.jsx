import Footer from './components/UI/Footer'
import Navbar from './components/UI/Navbar'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

// intersection animation variant
export const animateOnScrollVariant = {
  visible: { opacity: 1, transform: 'translateY(0)' },
  hidden: { opacity: 0, transform: 'translateY(6.25rem)' },
}
