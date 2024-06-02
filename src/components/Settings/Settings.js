import { useContext} from "react"
import { UserContext } from '../../components/Context/Context';
import axios from "axios";



function Settings () {

    const {
        currentUser
      } = useContext(UserContext);

      const defusername = currentUser.name
      const defemail = currentUser.email
      const defpassword = currentUser.password

      const resetDefaultUserInfo = () =>{
        const UserName = document.getElementById("UserName")
        UserName.value = defusername

        const Email = document.getElementById("Email")
        Email.value = defemail

        const Password = document.getElementById("Password")
        Password.value = defpassword
      }

      const submitUserNewInfo =() =>{
        axios.put(`http://localhost:5000/users/${defemail}`)
      }
    return(
        <div className="Setting">
            <div className=" flex flex-col items-center justify-center h-screen w-screen">
                <div className="grid grid-rows-3 h-screen items-center">
                <div className="">
                    <label>Username</label>
                    <input id="UserName" className="h-10 w-full border border-[#000000]" defaultValue={defusername}/>  
                </div>
                <div className="">
                    <label>email</label>
                    <input id="Email" className="h-10 w-full border border-[#000000]" defaultValue={defemail}/>    
                </div>
                <div className="">
                    <label>password</label>
                    <input id="Password" type="password" className="h-10 w-full border border-[#000000]" defaultValue={defpassword}/>    
                </div>
                <div>
                    <button className="h-10 w-full border border-[#000000]" onClick={()=>{resetDefaultUserInfo()}}> Reset values</button>
                </div>
                <div>
                    <button className="h-10 w-full border border-[#000000]" onClick={()=>{submitUserNewInfo()}}> Submit Changes</button>
                </div>
                </div>
            </div>
        </div>
        
    )
}
export default Settings