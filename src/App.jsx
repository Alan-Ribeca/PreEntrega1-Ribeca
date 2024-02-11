import "./styles/App.scss"
import { Navbar } from "./components/navbar/Navbar"
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer"
import { Footer } from "./components/footer/Footer"
import { BentoGrid } from "./components/bentoGrid/BentoGrid"

export const App = () => {
    return (
        <>
            <Navbar/>
            <main className="main">
                <BentoGrid/>
                <ItemListContainer/>
            </main>
            <Footer/>
        </>
    )
}