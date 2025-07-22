import { BrowserRouter, Route, Routes } from "react-router";
import AsideBar from "../components/asideBar/AsideBar";
import CardInfo from "../components/cardInfo/CardInfo";
import CardManager from "../components/cardManager/CardManager";
import '../pages/General.css'

export default function General(){
    
    return(
        <div className="d-flex flex-1" style={{backgroundColor:"#F5F7FA"}}>
            <AsideBar></AsideBar>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<h1>NOT FOUNDED 404</h1>}></Route>
                    <Route path="/dashboard"  element={
                        <div className="d-flex p-3 m-2 border-dashed" style={{width: '100%'}}>
                            <h1 className="m-auto">Dashboard</h1>
                        </div>              
                    }></Route>
                    <Route path="/controle/lancar" element={
                        <div className="d-flex p-3 m-2 border-dashed" style={{width: '100%'}}>
                            <CardInfo></CardInfo>
                            <CardManager></CardManager>
                        </div>
                    }></Route>
                    <Route path="/controle/alterar"  element={
                        <div className="d-flex p-3 m-2 border-dashed" style={{width: '100%'}}>
                            <CardInfo></CardInfo>
                        </div>              
                    }></Route>
                    <Route path="/publicacoes/registrar"  element={
                        <div className="d-flex p-3 m-2 border-dashed" style={{width: '100%'}}>
                            <h1 className="m-auto">Registrar Publicação</h1>
                        </div>              
                    }></Route>
                    <Route path="/publicacoes/alterar"  element={
                        <div className="d-flex p-3 m-2 border-dashed" style={{width: '100%'}}>
                            <CardInfo></CardInfo>
                        </div>              
                    }></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}