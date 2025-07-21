import { BrowserRouter, Route, Routes } from "react-router";
import AsideBar from "../components/asideBar/AsideBar";
import CardInfo from "../components/cardInfo/CardInfo";
import CardManager from "../components/cardManager/CardManager";
import '../pages/General.css'

export default function General(){
    
    return(
        <div className="d-flex flex-1" style={{backgroundColor:"#F5F7FA"}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={
                        <>
                            <AsideBar></AsideBar>
                            <h1>Dashboard</h1>
                        </>              
                    }></Route>
                    <Route path="/dashboard"  element={
                        <>
                            <AsideBar></AsideBar>
                            <h1>Dashboard</h1>
                        </>              
                    }></Route>
                    <Route path="/controle/lancar" element={
                        <>
                            <AsideBar></AsideBar>
                            <div className="d-flex p-3 m-2 border-dashed" style={{width: '100%'}}>
                                <CardInfo></CardInfo>
                                <CardManager></CardManager>
                            </div>
                        </>
                    }></Route>
                    <Route path="/controle/alterar"  element={
                        <>
                            <AsideBar></AsideBar>
                            <h1>Alterar</h1>
                        </>              
                    }></Route>
                    <Route path="/publicacoes/registrar"  element={
                        <>
                            <AsideBar></AsideBar>
                            <h1>Registrar</h1>
                        </>              
                    }></Route>
                    <Route path="/publicacoes/alterar"  element={
                        <>
                            <AsideBar></AsideBar>
                            <h1>Alterar</h1>
                        </>              
                    }></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}