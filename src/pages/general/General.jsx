import { BrowserRouter, Route, Routes } from "react-router";
import AsideBar from "../../components/asideBar/AsideBar";
import '../general/General.css'
import Lancar from "../Controle/lancar/Lancar";
import Alterar from "../Controle/alterar/Alterar";

export default function General(){
    
    return(
        <div className="d-flex flex-1" style={{backgroundColor:"#F5F7FA"}}>
            <BrowserRouter>
                <AsideBar></AsideBar>
                <Routes>
                    <Route path="/dashboard"  element={
                        <div className="d-flex p-3 m-2 border-dashed" style={{width: '100%'}}>
                            <h1 className="m-auto">Dashboard</h1>
                        </div>              
                    }></Route>
                    <Route path="/controle/lancar" element={
                        <Lancar></Lancar>
                    }></Route>
                    <Route path="/controle/alterar"  element={
                       <Alterar></Alterar>      
                    }></Route>
                    <Route path="/publicacoes/registrar"  element={
                        <div className="d-flex p-3 m-2 border-dashed" style={{width: '100%'}}>
                            <h1 className="m-auto">Registrar Publicação</h1>
                        </div>              
                    }></Route>
                    <Route path="/publicacoes/alterar"  element={
                        <div className="d-flex justify-content-center my-auto" style={{width: '100%'}}>
                            <h1>Alterar Publicação</h1>
                        </div>              
                    }></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}