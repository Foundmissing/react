import React, {useState} from "react"
function App(){
 
  let [user, setUser] = useState( {
      name:"Henshaw Samuel",
      Score:200,
      Location:"Netherland"
    })
    
   const OnchangeName = () =>
  {
    setUser({...user, name:"icode opeyemi"})
    setUser([...names, "Edoho"])
  }
  return(    <main>
      <h1>User Details</h1>
      {/* <h1>Name: </h1>
      <h1>Score: {user.Score}</h1>
      <h1>Location: {user.Location}</h1>
      <button onClick={onChangeName}>ChangeName</button> */}
    </main>
  )
}
export default App



