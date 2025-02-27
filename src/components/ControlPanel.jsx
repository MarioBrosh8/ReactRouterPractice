import { Outlet, NavLink } from "react-router-dom"

export const ControlPanel = () => {
    return (
        <div>
            <h1>Control Panel</h1>
            <p>Choose one of this options</p>

            <nav>
                <ul>
                    <li><NavLink to="/ControlPanel/Create">Create</NavLink></li>
                    <li><NavLink to="/ControlPanel/Home">Home</NavLink></li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
