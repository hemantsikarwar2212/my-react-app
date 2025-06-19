import React, { useEffect, useState } from 'react';

import './App.css'

function App() {
  return (
    <div style={{display:"flex"}}>
      <Card children={"hii there"}></Card>
      <Card children={<div style={{color:"green"}}>
        <input type={"text"} />
      </div>}></Card>
    </div>
  )
}
  
  // const [post,setPost] = useState([]);
// const [count , setCount] = useState(0);


//   const PostComponents = post.map(post=><PostComponent
//     name= {post.name}
//     subtitle = {post.subtitle}
//     time = {post.time}
//     img = {post.img}
//     desc= {post.desc}
// />)
  

  // function Togglemsg(){
  //   let [isVisible, setisVisible] = useState(true);
  //   function toggle(){
  //     setisVisible(!isVisible);
  //   }
  
  //   return (
  //     <div>
  //       <button onClick={toggle}>toggle msg</button>
  //       {isVisible && <p>this msg is rendered!</p>}
  //     </div>
  //   )
  // }
  // function addPost(){
  //   setPost([...post,{
  //     name:"hemant",
  //     subtitle:"1000 followers",
  //     time:"2m ago",
  //     img:"linkkk",
  //     desc:"this is my first react component that is built and fully understood by me "
  //   }])
  // }


    // return (
    //   <div style={{background:"#dfe6eg",height:"100vh"}}>
    //     <button onClick={addPost}>
    //       Add post 
    //     </button>
    //     <div style={{display:"flex",justifyContent:"center"}}>
    //       <div >
    //         {PostComponents}
    //       </div>
    //     </div>
    //   </div>
    // )
  //   function incCount(){
  //     setCount(currentValue => currentValue+1);
  //   }
  //    useEffect(()=>{
  //     setInterval(incCount,5000)
  //    },[])
  //   return (
  //     <div style={{display:'flex'}}>
  //       <div style={{background:"red" , borderRadius:25,width:20,height:20,paddingLeft:10,paddingTop:5}}>{count}</div>
  //       <div>
  //         <img style={{cursor:"pointer"}} src="https://static.vecteezy.com/system/resources/previews/009/394/758/non_2x/bell-icon-transparent-notification-free-png.png" width={40} alt="notification" />
  //       </div>
  //     </div>

  //   )
  // }

  // function PostComponent({ name, subtitle, time, img, desc }) {
  //   return (
  //     <div style={{ margin: 10, padding: 20, border: "1px solid #ccc", width: 300 }}>
  //       <h2>{name}</h2>
  //       <h4>{subtitle}</h4>
  //       <p>{time}</p>
  //       <img src={img} alt="post" style={{ width: "100%", height: "auto" }} />
  //       <p>{desc}</p>
  //     </div>
  //   );
  // }

function Card({children}){
  return (
    <div style={{background:"black",borderRadius:10,color:"white",padding:10,margin:10}}>
      {children}
    </div>
  )
}



export default App
