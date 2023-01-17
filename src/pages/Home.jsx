import AboutUs from '../components/Home/AboutUs'
import Blog from '../components/Home/Blog/Blog'
import Counter from '../components/Home/Counter'
import Header from '../components/Home/Header'
import Projects from '../components/Home/Projects/Projects'
import Testimonial from '../components/Home/Testimonial'
import Work from '../components/Home/Work'

export default function Home() {
  return (
    <>
      <Header />
      <Work />
      <AboutUs />
      <Testimonial />
      <Projects />
      <Counter />
      <Blog />
    </>
  )
}
