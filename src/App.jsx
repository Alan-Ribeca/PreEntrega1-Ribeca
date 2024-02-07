import "./styles/App.scss"
import { Navbar } from "./components/navbar/Navbar"
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer"

export const App = () => {
    return (
        <>
            <Navbar/>
            <main className="main">
                <ItemListContainer greeting={"¡Bienvenidos a mi futura pagina!"} />
            </main>
        </>
    )
}