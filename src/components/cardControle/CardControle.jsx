import Button from "../button/Button";
import InputAno from "../input/controle/ano/InputAno";
import InputMes from "../input/controle/mes/InputMes";
import InputQuantidade from "../input/controle/quantidade/InputQuantidade";

export default function CardControle({ btnName, onSubmit, setQuantidade, setMes, setAno, quantidade, mes, ano, showDeleteBtn, handleDelete, isRequiredQuantidade }){
    
    return(
        <form
            style={{height: '20rem'}} 
            className="d-flex flex-column form-control bg-dark justify-content-center gap-2 rounded-3 p-4"
            onSubmit={onSubmit}>
            <InputQuantidade 
                isRequired={isRequiredQuantidade}
                quantidade={quantidade} 
                setQuantidade={setQuantidade}></InputQuantidade>
            <InputMes 
                mes={mes} 
                setMes={setMes}></InputMes>
            <InputAno 
                ano={ano} 
                setAno={setAno}></InputAno>
            <Button
                showDeleteBtn={showDeleteBtn}
                handleDelete={handleDelete} 
                btnName={btnName}  
            ></Button>
        </form>
    )
}