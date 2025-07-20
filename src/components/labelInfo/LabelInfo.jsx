import '../labelInfo/LabelInfo.css'

export default function LabelInfo(props){
    return(
        <>
            <div className='d-flex bg-black' style={{width: '30rem'}}>
                <div className='text-white'>
                    <h1>{props.name}</h1>
                    <p className='fs-4'>{props.value}</p>
                </div>
            </div>
        </>
    )
}