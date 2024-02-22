import ReactTablePropsTypes from "./types/react-table-types.ts";
import {useEffect, useMemo, useState} from "react";

interface ColumnSelectorTypes extends ReactTablePropsTypes{
    onSelectColumns?:(column_indexs:number[])=>void,
}

const ReactColumnSelectorMenu = ({columns,onSelectColumns}:ColumnSelectorTypes) => {

    const [showContextMenu,setShowContextMenu]=useState(false);

    const [selectedListIndex,setSelectedListIndex]=useState<number[]>([]);


    useEffect(()=>{
       columns?.forEach((column,idx)=>{
           if(column.selected||column.selected==null) selectedListIndex.push(idx);
       });
       setSelectedListIndex([...selectedListIndex]);
    },[]);

    useEffect(()=>{
        onSelectColumns?onSelectColumns(selectedListIndex):null;
    },[selectedListIndex])

    const selectionData=useMemo(()=>{
        return selectedListIndex;
    },[selectedListIndex]);

    return (
        <div className={'menu'}>
            {showContextMenu&&<div className={'overlay'} onClick={() => setShowContextMenu(false)}></div>}
            <div className={"btn_wrapper"}>
                <div className={"btn"} onClick={()=>setShowContextMenu(prev=>!prev)}></div>
            </div>
            {
                <div className={`context ${showContextMenu&&'active'}`}>
                    <div className={'title'}>Add or remove columns</div>
                    {
                        columns?.map((column,index)=>{
                            return (
                                <label key={index} className={'row'}>
                                    <input onClick={(e)=>{
                                        selectedListIndex.push(index);
                                        //sorting the selected list
                                        let newList=selectedListIndex.sort((a,b)=>{
                                            return a-b;
                                        });
                                        //remove the duplicates
                                        newList=selectedListIndex.filter((column_idx,actual_idx)=>{
                                            return selectedListIndex?.indexOf(column_idx)==actual_idx;
                                        });
                                        //check if unchecked
                                        if(!e.currentTarget.checked){
                                            newList = newList.filter((column_idx)=>{
                                                return column_idx!=index;
                                            });
                                        }
                                        setSelectedListIndex([...newList]);
                                    }} id={`marker-${index}`} type={'checkbox'} defaultChecked={selectionData.indexOf(index)!=-1}/> <span>{column.title}</span>
                                </label>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default ReactColumnSelectorMenu;