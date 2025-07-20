import '../cardInfo/CardInfo.css'

export default function CardInfo(props){
    return(
        <>
            <div className='bg-black'>
                <div className='text-white'>
                    <h1>{props.name}</h1>
                    <p>{props.value}</p>
                </div>
            </div>
        </>
    )
}