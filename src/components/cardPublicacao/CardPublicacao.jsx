import InputCodigo from "../input/publicacao/codigo/InputCodigo";
import InputNome from "../input/publicacao/nome/InputNome";
import InputTipo from "../input/publicacao/tipo/InputTipo";
import Button from '../button/Button'

export default function CardPublicacao({ isRequiredTipo, isRequiredNItem, showDeleteBtn, handleDelete, btnName, onSubmit, isRequiredCodigo, isRequiredNome, codigo, setCodigo, nome, setNome, tipo, setTipo}) {
    return(
        <form 
            className="d-flex flex-column form-control bg-dark justify-content-center gap-2 rounded-3 p-4"
            onSubmit={onSubmit}>
            <InputCodigo
                codigo={codigo}
                setCodigo={setCodigo}
                isRequired={isRequiredCodigo}
            ></InputCodigo>
            <InputNome
                nome={nome}
                setNome={setNome}
                isRequired={isRequiredNome}
            ></InputNome>
            <InputTipo
                isRequired={isRequiredTipo}
                tipo={tipo}
                setTipo={setTipo}
            ></InputTipo>
            <Button
                showDeleteBtn={showDeleteBtn}
                handleDelete={handleDelete} 
                btnName={btnName} 
            ></Button>     
        </form>
    )
}