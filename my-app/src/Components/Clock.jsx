function Clock(props){
    return(
         <h2>Time is, {props.time.toLocaleTimeString()}</h2>);
}  
export default Clock;