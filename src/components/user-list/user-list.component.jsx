import React from 'react'
import withData from '../../with-data'

const UserList = ({data}) => (
            <div className='container user-list'>
                <h1>User List</h1>
                {
                    data.map(user => (
                        <div key={user.id} className='post'>
                            <h1>{user.name}</h1>
                            <h2>{user.email}</h2>
                        </div>
                    ))
                }
            </div>
)

export default withData(UserList)