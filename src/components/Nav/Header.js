import { CardWidget } from "./CardWidget"
import Nav from "./Nav"

export const Header = ({nombre, apellido}) => {

   
    return (
        <div>
            <Nav/>
            <CardWidget/>

            <h1>Undefined Shop</h1>
            <p>Bienvenidx {nombre} {apellido}  </p>
        </div>
    )
}
