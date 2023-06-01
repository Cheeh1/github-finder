import React from "react"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import ErrorPage from "./Pages/ErrorPage"
import { GithubProvider } from "./contexts/GithubContext"

const App = () => {

  return (
    <>
      <GithubProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/errorpage" element={<ErrorPage />} />
                <Route path="/*" element={<ErrorPage />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </GithubProvider>
    </>
  )
}

export default App
