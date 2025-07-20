import "../asideBar/AsideBar.css"

export default function AsideBar() {
    return(
        <aside className="sidebar p-2">
            <div className="sidebar-logo fs-1">
                <a className="text-black" href="">PCS</a>
            </div>
            <ul className="sidebar-nav list-group gap-2 fs-5 tex">
                <li className="sidebar-item">
                    <a className="text-black" href="/dashboard">
                        <i className="bi bi-house fs-3">
                        </i>
                        <span className="mx-1">Dashboard</span>
                    </a> 
                </li>
                    <button className="accordion-button collapsed fs-5 gap-2 animation" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Controle
                        <i className="bi bi-caret-right-fill"></i>
                    </button>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <li className="sidebar-item">
                                <a href="/lançar">
                                    <i className="bi bi-database-add"></i>
                                    <span>Lançar</span>
                                </a> 
                            </li>
                            <li className="sidebar-item">
                                <a href="/alterar">
                                    <i className="bi bi-gear"></i>
                                    <span>Alterar</span>
                                </a> 
                            </li>
                        </div>
                    </div>
                    <button className="accordion-button collapsed fs-5 gap-2 animation" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Publicações
                        <i className="bi bi-caret-right-fill"></i>
                    </button>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <li className="sidebar-item">
                                <a href="/registrar">
                                    <i className="bi bi-pencil-square"></i>
                                    <span>Registrar</span>
                                </a> 
                            </li>
                            <li className="sidebar-item">
                                <a href="/alterar">
                                    <i className="bi bi-gear"></i>
                                    <span>Alterar</span>
                                </a> 
                            </li>
                        </div>
                    </div>
                </ul>
        </aside>
    )
}