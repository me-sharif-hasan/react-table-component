import ReactTablePropsTypes from "./types/react-table-types.ts";

interface ReactTableBodyTypes extends ReactTablePropsTypes{
    selectedColumnIndexes:number[]
}

const ReactTableBody = ({data,selectedColumnIndexes}:ReactTableBodyTypes) => {
    return (
        <div className={'table_body'}>
            {
                data?.map((row,row_idx)=>{
                    return(
                        <div className={"row"} key={row_idx}>
                            {
                                row.map((cell,cell_idx)=>{
                                    return (
                                        selectedColumnIndexes.indexOf(cell_idx)!=-1
                                            ?
                                                <div className={'cell'} key={cell_idx}>
                                                    <div>
                                                        {cell.content}
                                                    </div>
                                                </div>
                                            :   <></>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ReactTableBody;