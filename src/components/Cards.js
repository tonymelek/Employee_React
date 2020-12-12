import React, { useState, useEffect } from 'react'
import employees from './employee.json'


export default function Cards({ criteria, search, sort, display }) {
    sort = parseInt(sort)
    return display === "Cards" ? (
        <div className="d-flex flex-wrap justify-content-around">

            {employees
                .filter(item => search === "" ? true : item[criteria].toString().toLowerCase().includes(search.toString().toLowerCase())) //display all if search is empty
                .sort((a, b) => (a[criteria] > b[criteria]) ? 1 * sort : ((b[criteria] > a[criteria]) ? -1 * sort : 0)) //sort based on criteria
                .map(employee =>
                    <div className="card mb-3" key={employee["Employee Number"]}>
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
    ) : (<></>)
}