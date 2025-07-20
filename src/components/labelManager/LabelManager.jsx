import '../labelManager/LabelManager.css'

export default function LabelManager(props){
    return(
        <>
            <div className='d-flex bg-black' style={{width: '30rem'}}>
                <div className='text-white'>
                    <h1>{props.name}</h1>
                    <input type={props.type} placeholder={props.placeholder}></input>
                </div>
            </div>
        </>
    )
}