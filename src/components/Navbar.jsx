export const Navbar = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <a className="navbar-brand" href="">
                        <img src="/public/vite.svg" alt="Logo de la navegacion" />
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Sobre mí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}
