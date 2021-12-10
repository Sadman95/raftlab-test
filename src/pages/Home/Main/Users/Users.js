import React from 'react';
import './Users.css'

const Users = ({users}) => {
    const handleSelect = id => {
        const user = users.find(user => user.id === id);
        console.log(user);
        
    }
    return (
        <div className='users'>
            <h2>Users: {users.length}</h2>
            {
                users.map(user => <div className='user' key={user.id}>
                    <img height='50px' width='50px' src={user.imgUrl} alt="name" />
                    <div style={{textAlign: 'start'}}>
                    <p>{user.name}</p>
                    <button>Add</button>
                    <button onClick={() =>handleSelect(user.id)}>Select</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Users;