import React, { useContext } from 'react'
import AppContext from '../utils/AppContext'
import employees from './employee.json'


export default function Cards() {
    let { criteria, sort, search } = useContext(AppContext)
    sort = parseInt(sort)
    return (
        <div className="d-flex flex-wrap justify-content-around">

            {employees
                .filter(item => search === "" ? true : item[criteria].toString().toLowerCase().includes(search.toString().toLowerCase())) //display all if search is empty
                .sort((a, b) => (a[criteria] > b[criteria]) ? 1 * sort : ((b[criteria] > a[criteria]) ? -1 * sort : 0)) //sort based on criteria
                .map(employee =>
                    <div className="card mb-3 mx-3 flex-grow-1" key={employee["Employee Number"]}>
                        <h5 className="card-header text-center">{employee["First Name"]} {employee["Last Name"]}</h5>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li><strong>Employee Number: </strong>{employee["Employee Number"]}</li>
                                <li><strong>Position: </strong>{employee["E-mail"]}</li>
                                <li><strong>E-mail: </strong>{employee["Position"]}</li>
                            </ul>
                        </div>
                    </div>)}

        </div>
    )
}