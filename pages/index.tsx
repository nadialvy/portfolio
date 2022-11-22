import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Profile from '../components/ProfileSection'
import Skills from '../components/Skills'

const Home: NextPage = () => {
    return (
        <>
            <Hero />
            <Profile />
            <Skills />
        </>
    )
}

export default Home
