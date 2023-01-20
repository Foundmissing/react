import React from "react";
class image extends React.Component
{
render()
{
    return(
        <>
        <center> 
        <h1>Image gallery with react</h1>
        <h1>Reactjs tutorial</h1>
        <br/>
        </center>
        </>
    )
}
}
export default image








// import React, {useState} from "react"
// function App(){
 
//   let [user, setUser] = useState(
//     {
//       name:"Henshaw Samuel",
//       Score:200,
//       Location:"Netherland"
//     }
//   )
//    const OnchangeName = () =>
//   {
//     setUser({...user, name:"icode opeyemi"})
//   }
//   return(    <main>
//       <h1>User Details</h1>
//       <h1>Name: {user.name}</h1>
//       <h1>Score: {user.Score}</h1>
//       <h1>Location: {user.Location}</h1>
//       <button onClick={onChangeName}>ChangeName</button>
//     </main>
//   )
// }
// export default App
















//   let [user, setUser] = useState(
//     {
//       name:"Henshaw Samuel",
//       Score:200,
//       Location:"Netherland"
//     }
//   )
//   const OnchangeName = () =>
//     {
//       setUser({...user, name:"icode opeyemi"})
//     }
//   return(
//     <div>
//       <h1>User Details</h1>
//       <h1>Name: {user.name}</h1>
//       <h1>Score: {user.Score}</h1>
//       <h1>Location: {user.Location}</h1>
//       <button onClick={onChangeName}>ChangeName</button>
//     </div>
//   )
// }




// import React from "react";
// class image extends React.Component
// {
// render()
// {
//   let img =[
//     {src:"./bg.jpg", title:"my_image"},
//     {src:"./girl.jpg", title:"my_image2"},
//     {src:"./2.png", title:"my_image3"},
//     {src:"./oau.jpg", title:"my_image4"}
//   ]
//     return(
//         <>
//         <center> 
//         <h1>Image gallery with react</h1>
//         <h1>Reactjs tutorial</h1>
//         <br/>
//         <div>
//           {
//             img.map((index)=> <img src={index.src} title={index.title} 
//             alt="images" height="250px" width="350px" style={{border:"solid", 
//             backgroundColor:"aliceblue"}} />)
//           }
//         </div>
//         </center>
//         </>
//     )
// }
// }
// export default image