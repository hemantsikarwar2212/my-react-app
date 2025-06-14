
import './App.css'

function App() {
  return (
    <div style={{background:"#dfe6e9",height:"100vh"}}>
      <Togglemsg/>
      <div>
        <div>
      <PostComponent
      name={"hemant"}
      subtitle={"some followers"}
      time={"2m ago"}
      image = {"img"}
      desc={"this is the des "}
      />
        </div>
        <div>
        <PostComponent
      name={"hemant2"}
      subtitle={"some followers2"}
      time={"2m ago2"}
      image = {"img2"}
      desc={"this is the des2 "}
      />
        </div>
      </div>
    </div>
  )
}
  // const [count,setCount] = useState(0);
  // const [count1,setCount1] = useState(0);
  //  function increase(){
  //   setCount(c=>c+1)
  //  } 
  //  function decrease(){
  //   setCount1(c=>c-1)
  //  } 
 

 // {/* <Counter count={count}  count1={count1}></Counter>
 // <button onClick={increase}>Increase Count</button>
  //<button onClick={decrease}>decrease Count</button> *///


// mounting , re-rendering , un-mounting
// function Counter(props){
// //hooking into the lifecycle events of react\
// //gaurd our setinterval from re-render
// useEffect(()=>{
//   console.log("mount");
//   return function(){
//     console.log("unmount"); 
//   }
// },[]);// dependency array ,cleanup
//      return <div> 
//           Counter {props.count} <br />
//           Counter1 {props.count1}
//     </div>
//   }
  const style = {
    width:200, backgroundColor:"white",borderRadius:10,
    borderColor:"grey",borderWidth:1,display:"flex"
  }
  function PostComponent(){
    return <div style={style}>
      <img src={"https://png.pngtree.com/png-vector/20250603/ourmid/pngtree-world-blood-donor-day-vector-png-image_16456442.png"} style={
       {
         width:20,
          height:20,
          borderRadius:20
       } 
      } />
      <div>
        <b>
          100xdevs
        </b>
        <div>20000 followers</div>
        <div>12m</div>
      </div>
        <div>what to vcbvnmccccck cwkffdfnnnnskdnfknkjgndfkngkng</div>
    </div>
  }

  function Togglemsg(){
    const [isVisible, setisVisible] = setisVisible(0);
    return (
      <div>
        <button onClick={()=>setisVisible(!isVisible)}></button>
        {isVisible && <p>this msg is rendered!</p>}
      </div>
    )
  }




export default App
