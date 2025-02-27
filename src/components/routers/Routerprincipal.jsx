import { BrowserRouter, NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { Inicio } from '/src/components/Inicio';
import { Contacto } from '/src/components/Contacto';
import { Articulos } from '/src/components/Articulos';
import { Persona } from '/src/components/Persona';
import { ControlPanel } from '/src/Components/ControlPanel';
import { Home } from '/src/Components/panel/Home';
import { Create } from '/src/Components/panel/Create.jsx';

export const Routerprincipal = () => {
    return (
        <BrowserRouter>
            <h1>Header</h1>
            <hr />

            <nav>
                <ul>
                    <li>
                        <NavLink to="/Inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
                        <NavLink to="/Contacto" className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink>
                        <NavLink to="/Articulos" className={({isActive}) => isActive ? "active" : ""}>Articulos</NavLink>
                    </li>
                </ul>
            </nav>


            <h2>Menu</h2>
            <hr />

            <section>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/Inicio" element={<Inicio />} />
                    <Route path="/Contacto" element={<Contacto />} />
                    <Route path="/Articulos" element={<Articulos />} />
                    <Route path="/Persona/:nombre" element={<Persona />} />
                    <Route path="/Persona/:nombre/:apellido" element={<Persona />} />
                    <Route path="*" element={<h1>Error 404</h1>} />
                    <Route path="/Redirigir" element={<Navigate to="/persona/Mario/Valdez"/>} />
                    <Route path="/ControlPanel/*" element={<ControlPanel />}>
                        <Route index element={<Home />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Create" element={<Create/>} />
                    </Route>
                </Routes>
            </section>

        </BrowserRouter>
    )
}