import {ReactNode} from "react";

interface TableCell{
    content: string|ReactNode
}

interface ReactColumnType{
    title?:string,
    selected?:boolean;
}
interface ReactTablePropsTypes{
    columns?: ReactColumnType[];
    data?: (TableCell[])[],
    className?:string
}
export type {ReactColumnType};
export default ReactTablePropsTypes;