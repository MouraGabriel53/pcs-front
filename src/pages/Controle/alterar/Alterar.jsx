import Filter from "../../../components/filter/Filter"
import Table from "../../../components/table/Table"
import Lancar from "../lancar/Lancar"

export default function Alterar(){
    return(
        <div className="d-flex flex-column m-auto text-center gap-2">
            <Lancar></Lancar>
            <Filter></Filter>
            <Table></Table>
        </div>
    )
}