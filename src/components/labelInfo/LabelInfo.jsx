import '../labelInfo/LabelInfo.css'

export default function LabelInfo(props){
    return(
        <>
            <div className='text-light' style={{width: '30rem'}}>
                <div>
                    <h4>{props.name}</h4>
                    <p className='fs-4 text-success'>{props.value}</p>
                </div>
            </div>
        </>
    )
}