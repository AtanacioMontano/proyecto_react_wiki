import { JSX, useState } from "react";
import { Link, useNavigate } from "react-router";
import authStore from "../../../store/authStore";

const Header = () => {
    const navigate = useNavigate();
    const logOut = authStore((state) => state.logOut);

    // Estado para rastrear qué menú está expandido
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

    const headerMenu: { key: string; label: JSX.Element; subMenu?: { key: string; label: JSX.Element }[] }[] = [
        {
            key: "",
            label: <Link to="/Home">Home</Link>,
        },
        {
            key: "herramientas",
            label: <div>Menú herramientas</div>,
            subMenu: [
                { key: "usuarios", label: <Link to="/usuarios">Usuarios</Link> },
                { key: "permisos", label: <Link to="/permisos">Permisos</Link> },
                { key: "consultas", label: <Link to="/consultas">Consultas Dinámicas</Link> },
            ],
        },
        {
            key: "formulario",
            label: <Link to="/formulario">Actualizar usuario</Link>,
        },
        {
            key: "playground",
            label: <Link to="/playground">Probar Utils</Link>,
        },
        {
            key: "hooks",
            label: <Link to="/hooks">Probar Hooks</Link>,
        },
        {
            key: "Alertas",
            label: <Link to="/Alertas">Alertas</Link>,
        },
        {
            key: "Componentes",
            label: <Link to="/Componentes">Componentes</Link>,
        },
        {
            key: "Perfil",
            label: <Link to="/Perfil">Perfil</Link>,
        },
        {
            key: "Login",
            label: <Link to="/Login" onClick={logOut}>Logout</Link>,
        },
    ];

    const handleToggleMenu = (key: string) => {
        setExpandedMenu((prev) => (prev === key ? null : key)); // Alterna entre expandir y colapsar
    };

    const handleChangePage = (to: string) => {
      handleToggleMenu(to);
      navigate(to);
    };

    return (
        <header>
            <div className="menu flex">
                {headerMenu.map((item) => (
                    <div key={item.key} className="menu-item relative">
                        <li
                            className="inline-block mx-4 py-4 px-2 text-black-700 hover:text-blue-500 cursor-pointer"
                            onClick={() => (item.subMenu ? handleToggleMenu(item.key) : handleChangePage(item.key))}
                        >
                            {item.label}
                        </li>
                        {/* Submenú */}
                        {item.subMenu && expandedMenu === item.key && (
                            <ul className="absolute top-12 left-10 mt-0 ml-2 bg-white shadow-lg border rounded-md">
                                {item.subMenu.map((subItem) => (
                                    <li
                                        key={subItem.key}
                                        className="px-4 py-2 text-black-500 hover:text-blue-500 cursor-pointer whitespace-nowrap"
                                        onClick={() => handleChangePage(subItem.key)}
                                    >
                                        {subItem.label}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
            <hr />
        </header>
    );
};

export default Header;