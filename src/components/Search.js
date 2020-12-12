import React, { useState, useEffect } from 'react'
import Table from "./Table"
import Cards from "./Cards"

export default function Search() {
    const [criteria, setCriteria] = useState("First Name")
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("1")
    const [display, setDisplay] = useState("Table")
    let type;
    switch (criteria) {
        case "First Name":
            type = "text"
            break;
        case "Last Name":
            type = "text"
            break;
        case "E-mail":
            type = "email"
            break;
        case "Employee Number":
            type = "number"
            break;
        case "Position":
            type = "text"
            break;
        default:
            break;
    }
    return (
        <>
            <div className="container">

                <form className="my-3">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group mb-3 ">
                                <label for="search-criteria" className="form-label">Search / Sort by :</label>
                                <select className="form-control" id="search-criteria" value={criteria} onChange={(e) => setCriteria(e.target.value)}>
                                    <option value="Employee Number">Employee Number</option>
                                    <option value="First Name">First Name</option>
                                    <option value="Last Name">Last Name</option>
                                    <option value="Position">Position</option>
                                </select>
                            </div>
                            <label for="search-input" className="form-label">{criteria}</label>
                            <input type={type} className="form-control" id="search-input" onChange={(e) => setSearch(e.target.value)}></input>
                        </div>
                        <div className="col-6">
                            <div className="form-group mb-3 ">
                                <label for="sort-criteria" className="form-label">Sort </label>
                                <select className="form-control" id="sort-criteria" value={sort} onChange={(e) => setSort(e.target.value)}>
                                    <option value="1">Ascending</option>
                                    <option value="-1">Descending</option>
                                </select>
                            </div>
                            <div className="form-group mb-3 ">
                                <label for="display-criteria" className="form-label">Display Mode </label>
                                <select className="form-control" id="display-criteria" value={display} onChange={(e) => setDisplay(e.target.value)}>
                                    <option value="Table">Table</option>
                                    <option value="Cards">Cards</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
                <Table criteria={criteria} search={search} sort={sort} display={display} />
                <Cards criteria={criteria} search={search} sort={sort} display={display} />
            </div>
        </>
    )
}