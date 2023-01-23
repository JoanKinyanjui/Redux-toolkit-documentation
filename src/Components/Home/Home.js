import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,incrementByAmount } from '../../features/counter/counter';
import Users from '../Users/users';

function Home() {
const dispatch = useDispatch();
const count = useSelector(state=>state.counter.value);
// console.log(useSelector(state=>state))
const [incrementAmount,setIncrementAmount]=useState('');

const onIncreasingByAmount =(e)=>{
    e.preventDefault();
    dispatch(incrementByAmount(Number(incrementAmount)))
    console.log('i have increased by ...')
}
const onChangeIncrementAmount =(e)=>{
    setIncrementAmount(e.target.value)
}
return(
    <div >
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <form onSubmit={onIncreasingByAmount}>
            <input 
             value={incrementAmount}
             onChange={onChangeIncrementAmount}
             />
            <input type='submit' value={`increaseBy ${incrementAmount}`}/>
        </form>   
        <button onClick={()=>dispatch(decrement())}>Decrement</button>

        <div>{count}</div>

        <Users />
    </div>
  )
}

export default Home;