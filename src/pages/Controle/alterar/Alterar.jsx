import Filter from "../../../components/filter/Filter"
import Table from "../../../components/table/Table"
import CardInfo from '../../../components/cardInfo/CardInfo'

export default function Alterar(){
    return(
        <div className="d-flex flex-column m-auto text-center gap-2">
            <div className="d-flex m-auto gap-5 text-center">
                <CardInfo></CardInfo>
            </div>
            <Filter></Filter>
            <Table></Table>
        </div>
    )
}