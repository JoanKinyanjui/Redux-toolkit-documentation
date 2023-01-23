import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../features/user/usersSlice';

function Users() {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);

    useEffect(()=>{
   dispatch(getUsers())
   console.log(users)
    },[])
  return (
    <div className="App">
    <p>Welcome to React Redux Toolkit Crash Course</p>
    {users && users.map((user, i) => <p key={i}>{user.name}</p>)}
  </div>
  )
}

export default Users;