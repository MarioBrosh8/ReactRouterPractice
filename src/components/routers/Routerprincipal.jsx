import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Inicio } from '../components/Inicio.jsx';
import { Contacto } from '../components/Contacto.jsx';
import { Articulos } from '../components/Articulos.jsx';

export const Routerprincipal = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Inicio" element={<Inicio />} />
                <Route path="/Contacto" element={<Contacto />} />
                <Route path="/Articulos" element={<Articulos />} />
            </Routes>

        </BrowserRouter>
    )
}
