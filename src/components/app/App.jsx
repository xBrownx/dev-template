import './App.css'
import { useRef } from 'react';
import Landing from "../pages/landing/index.jsx";
import Header from "../organisms/header/index.jsx";
import Footer from "../organisms/footer/index.jsx";

function App() {

    const pageRefs = {
        landing: useRef(),
    }

    const navigateTo = (pageId) => {

        setTimeout(() => {
            pageRefs[pageId].current.scrollIntoView({
                behavior: "smooth",
                block: 'start'
            })
        }, 100);
    }

    return (
        <>
            <Header $pageRefs={pageRefs} navigateTo={navigateTo} />
            <Landing $pageRef={pageRefs.landing} navigateTo={navigateTo} />
            <Footer />
        </>
    )
}

export default App
