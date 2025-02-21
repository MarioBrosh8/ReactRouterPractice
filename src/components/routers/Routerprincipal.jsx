import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Inicio } from '/src/components/Inicio';
import { Contacto } from '/src/components/Contacto';
import { Articulos } from '/src/components/Articulos';

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