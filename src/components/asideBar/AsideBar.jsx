import "../asideBar/AsideBar.css"

export default function AsideBar() {
    return(
        <aside className="sidebar p-2 bg-dark">
            <div className="d-flex fs-1 gap-3 my-3 justify-content-center">
                <a 
                className="rounded-circle bg-danger" 
                href="" 
                style={{width:'3rem', height:'3rem'}}></a>
                <span className="text-white" style={{all: 'unset'}}>PCS</span>
            </div>
            <ul className="sidebar-nav list-group gap-2 fs-5 tex">
                <li className="sidebar-item bg-animation">
                    <a className="" href="/dashboard">
                        <i className="bi bi-house fs-3 text-white">
                        </i>
                        <span className="">Dashboard</span>
                    </a> 
                </li>
                    <button className="accordion-button collapsed fs-5 gap-2 bg-animation arrow-animation text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Controle
                        <i className="bi bi-caret-right-fill"></i>
                    </button>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <li className="sidebar-item bg-animation">
                                <a href="/controle/lancar">
                                    <i className="bi bi-database-add"></i>
                                    <span>Lançar</span>
                                </a> 
                            </li>
                            <li className="sidebar-item bg-animation">
                                <a href="/controle/alterar">
                                    <i className="bi bi-gear"></i>
                                    <span>Alterar</span>
                                </a> 
                            </li>
                        </div>
                    </div>
                    <button className="accordion-button collapsed fs-5 gap-2 bg-animation arrow-animation text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Publicações
                        <i className="bi bi-caret-right-fill"></i>
                    </button>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <li className="sidebar-item bg-animation">
                                <a href="/publicacoes/registrar">
                                    <i className="bi bi-pencil-square"></i>
                                    <span>Registrar</span>
                                </a> 
                            </li>
                            <li className="sidebar-item bg-animation">
                                <a href="/publicacoes/alterar">
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