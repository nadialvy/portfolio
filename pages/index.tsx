import type { NextPage } from 'next'
import Logo from '../components/Logo'
import Nav from "../components/Nav"
import Button from "../components/Button"

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-hero">
        <div className="container mx-auto px-20">
          <div className="flex items-center">
            <div className="w-3/12">
              <Logo />
            </div>
            <div className="w-6/12">
              <Nav />
            </div>
            <div className="w-3/12 text-right">
              <Button className="" variant="outline-yellow">Contact</Button>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl text-white font-semibold font-mono w-8/12 mx-auto">Saya seorang tukang benerin remote AC, ngebalikin akun fb emak saya yang lupa password, dan benerin printer~, oiya kang ngetik juga</h1>
            <p className="text-white text-opacity-60 text-lg w-5/12 mx-auto mt-4">Sejak masuk RPL, saya sering dibilang kalau saya itu pinter dan jadi hengker, padahal ngga, reduce your expectation to zero pls :(</p>
            <Button className="m-10" variant="yellow">Get to Know Me</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
