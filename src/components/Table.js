import React, { useContext } from 'react'
import AppContext from '../utils/AppContext'
import employees from './employee.json'


export default function Table() {
    let { criteria, sort, search } = useContext(AppContext)
    sort = parseInt(sort)
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Employee Number</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Position</th>
                    </tr>
                </thead>
                <tbody>
                    {employees
                        .filter(item => search === "" ? true : item[criteria].toString().toLowerCase().includes(search.toString().toLowerCase())) //display all if search is empty
                        .sort((a, b) => (a[criteria] > b[criteria]) ? 1 * sort : ((b[criteria] > a[criteria]) ? -1 * sort : 0)) //sort based on criteria
                        .map(employee =>
                            <tr key={employee["Employee Number"]}>
                                <th scope="row">{employee["Employee Number"]}</th>
                                <td>{employee["First Name"]}</td>
                                <td>{employee["Last Name"]}</td>
                                <td>{employee["E-mail"]}</td>
                                <td>{employee["Position"]}</td>
                            </tr>)}
                </tbody>
            </table>
        </>
    )
}