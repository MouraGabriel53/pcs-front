import { useState } from "react"
import InputAno from "../input/ano/InputAno";
import InputMes from "../input/mes/InputMes";
import InputQuantidade from "../input/quantidade/InputQuantidade";

export default function CardControle({ btnName, onSubmit, setQuantidade, setMes, setAno, quantidade, mes, ano }){
    
    return(
        <form
            style={{height: '20rem'}} 
            className="d-flex flex-column form-control bg-dark justify-content-center gap-2 rounded-3 p-4"
            onSubmit={onSubmit}>
            <InputQuantidade quantidade={quantidade} setQuantidade={setQuantidade}></InputQuantidade>
            <InputMes mes={mes} setMes={setMes}></InputMes>
            <InputAno ano={ano} setAno={setAno}></InputAno>
            <button 
                className="btn btn-outline-success" 
                type="submit">{btnName}</button>
        </form>
    )
}