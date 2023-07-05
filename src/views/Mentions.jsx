import { Navbar, Mention, Footer } from '../components'

const Mentions = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="my-20">
        <Navbar />
      </div>
      <Mention />
      <Footer />
    </div>
  )
}

export default Mentions
