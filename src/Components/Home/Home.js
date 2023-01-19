import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,incrementByAmount } from '../../features/counter/counter';

function Home() {
const dispatch = useDispatch();
const count = useSelector(state=>state.counter.value);
const [incrementAmount,setIncrementAmount]=useState('1');

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
    </div>
  )
}

export default Home;