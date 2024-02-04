import React, { useMemo } from 'react'

import TableContainer from '../../../common/TableContainer'
import { Card, CardBody } from 'reactstrap';

const Users = () => {

    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Position',
                accessor: 'position'
            },
            {
                Header: 'Office',
                accessor: 'office'
            },
            {
                Header: 'Age',
                accessor: 'age'
            },
            {
                Header: 'Start date',
                accessor: 'startDate'
            },
            {
                Header: 'Salary',
                accessor: 'salary'
            },
        ],
        []
    );

    const data = [
        {
            "name": "Jennifer Chang",
            "position": "Regional Director",
            "age": 28,
            "office": "Singapore",
            "startDate": "2010/11/14",
            "salary": "$357,650"
        },
        {
            "name": "Gavin Joyce",
            "position": "Developer",
            "age": 42,
            "office": "Edinburgh",
            "startDate": "2010/12/22",
            "salary": "$92,575"
        },
    ];
  return (
    <div className="page-content mt-4">
            <div className="container-fluid">
                <Card>
                    <CardBody>
                    <TableContainer
                    columns={columns}
                    data={data}
                    isGlobalFilter={true}
                    customPageSize={10}
                    // className="custom-header-css"
                />
                    </CardBody>
                </Card>
            </div>
        </div>
  )
}

export default Users
