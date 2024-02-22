import ReactTablePropsTypes, {ReactColumnType} from "./types/react-table-types.ts";
import "./style.css"
import ReactTableBody from "./ReactTableBody.tsx";
import ReactColumnSelectorMenu from "./ReactColumnSelectorMenu.tsx";
import {useEffect, useState} from "react";
const CustomReactDataTable = ({columns,className,data}:ReactTablePropsTypes) => {


    const [selectedColumns,setSelectedColumns]=useState<ReactColumnType[]>([]);

    const [selectedColumnIndexes,setSelectedColumnIndexes]=useState<number[]>([]);

    const setSelectedColumnsBasedOnSelectedIndexes = (columns:ReactColumnType[],selectedIndexes:number[]) => {
        const newList:ReactColumnType[]=[];
        columns.forEach((column,idx)=>{
            if(selectedIndexes.indexOf(idx)!=-1){
                newList.push(column);
            }
        });
        setSelectedColumns([...newList]);
    }

    useEffect(()=>{
        //match body and columns number based on max number of columns provided!
        let targetLen=(columns?.length)??0;
        data?.forEach((row)=>targetLen=Math.max(row.length,targetLen));
        //match columns names by <unnamed>
        while (columns?.length!=undefined&&columns?.length<targetLen) columns?.push({title:'<unnamed>'})
        //if any row has less column
        data?.forEach((row)=>{
           if(row.length<targetLen){
               while (row.length<targetLen){
                   row.push({content:""});
               }
           }
        });
        if(columns!=undefined) setSelectedColumnsBasedOnSelectedIndexes(columns,selectedColumnIndexes);
    },[columns]);
    return (
        <div className={className??'rt_container'}>
            <div className={'table_info_section'}>
                <h2>Table Title</h2>
                <ReactColumnSelectorMenu columns={columns} onSelectColumns={(column_indexs)=>{
                    const newColumns:ReactColumnType[]=[];
                    columns?.forEach((column,idx)=>{
                        if(column_indexs.indexOf(idx)!=-1) newColumns.push(column);
                    });
                    setSelectedColumnIndexes([...column_indexs]);
                    setSelectedColumns([...newColumns ]);
                }}/>
            </div>
            <div className={'table_header row'}>
                {
                    selectedColumns?.map((column,index)=>{
                        return (
                            <div key={index} className={"table_header_item cell"}>{column.title}</div>
                        )
                    })
                }
            </div>
            <ReactTableBody data={data} selectedColumnIndexes={selectedColumnIndexes}/>
        </div>
    );
}
export default CustomReactDataTable;