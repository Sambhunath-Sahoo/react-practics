import React from 'react'
import { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css'
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'

function DataList() {
    const [userList, setUserList] = useState([]);


    const columns = [
        { dataField: 'id', text: 'Id' },
        { dataField: 'name', text: 'Name', sort: true},
        { dataField: 'username', text: 'Username' },
        { dataField: 'email', text: 'Email' }
    ]

    const pagination = paginationFactory ({
        page: 1,
        sizePerPage: 5,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText:'<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
            console.log('page ', page);
            console.log('sizeperpage ', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
            console.log('page ', page);
            console.log('sizeperpage ', sizePerPage);
        }
    })

    useEffect(() => {

        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => setUserList(result))
            .catch(error => console.log(error));
    }, [])

    console.log(userList);
    return (
        <div>

            <BootstrapTable keyField='id' columns={columns} data={userList} pagination={pagination} />

            {/* <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList && userList.length > 0 ?
                            userList.map(user => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                )
                            })
                            : "Loading..."
                    }
                </tbody>
            </table> */}
        </div>
    )
}

export default DataList
