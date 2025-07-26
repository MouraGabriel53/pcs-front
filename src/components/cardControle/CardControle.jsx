import { useState } from "react"
import InputAno from "../input/ano/InputAno";
import InputMes from "../input/mes/InputMes";
import InputQuantidade from "../input/quantidade/InputQuantidade";

export default function CardControle({ btnName, onSubmit, setQuantidade, setMes, setAno }){
    return(
        <form
            style={{height: '20rem'}} 
            className="d-flex flex-column form-control bg-dark justify-content-center gap-2 rounded-3 p-4"
            onSubmit={onSubmit}>
            <InputQuantidade setQuantidade={setQuantidade}></InputQuantidade>
            <InputMes setMes={setMes}></InputMes>
            <InputAno setAno={setAno}></InputAno>
            <button 
                className="btn btn-outline-success" 
                type="submit">{btnName}</button>
        </form>
    )
}