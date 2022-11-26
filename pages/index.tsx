import type { NextPage } from 'next'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Profile from '../components/ProfileSection'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
    return (
        <>
            <Hero />
            <Profile />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
