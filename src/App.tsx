import './App.css'
import "./assets/fontawesome/css/fontawesome.min.css"
import "./assets/fontawesome/css/solid.min.css"
import ReactTable from "./customReactTable/ReactTable.tsx";

const columns = [
    {title: "Title"},
    {title: "Categories"},
    {title: "Price"},
    {title: "Date"},
    {title: "Author"},
    {title: "Status",},
    {title: "Action"}
];

const tableData = [
    [
        {
            content: (
                <p>
                    <a href={"#"}>AWAW ER</a><br/>
                    <span>Topic: 1</span><br/>
                    <span>Lesson: 1</span>
                </p>
            ),
        },
        {
            content: "Course"
        },
        {
            content: "200$"
        },
        {
            content: <>February 04, 2024 <br/> 11:26 AM</>
        },
        {
            content: "admin"
        },
        {
            content: (
                <select className={'status_button positive'}>
                    <option>Approve</option>
                    <option>Draft</option>
                </select>
            )
        },
        {
            content: (
                <>
                    <button className={'action_button'}>Edit</button>
                    <br/>
                    <i className={'fa fa-bars more-icon'}></i>
                </>
            )
        }
    ],
    [
        {
            content: (
                <p>
                    <a href={"#"}>teastr</a>
                </p>
            )
        },
        {
            content: "Course"
        },
        {
            content: "150$"
        },
        {
            content: <>February 04, 2024 <br/> 11:26 AM</>
        },
        {
            content: "admin"
        },
        {
            content: (
                <select className={'status_button neutral'}>
                    <option>Approve</option>
                    <option selected={true}>Draft</option>
                </select>
            )
        },
        {
            content: (
                <>
                    <button className={'action_button'}>Edit</button>
                    <br/>
                    <i className={'fa fa-bars more-icon'}></i>
                </>
            )
        }
    ],
];

function App() {

    return (
        <>
            <ReactTable
                columns={columns}
                data={tableData}
            />
        </>
    )
}

export default App
