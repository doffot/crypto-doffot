import { IoAppsOutline, IoWallet, IoWalletOutline } from "react-icons/io5";
import { SideBar, Wallet } from "./component";
import  './userpage.css'

export const UserPage = () => {
  return (
        <div className="container_user">
         
        	  <SideBar />
         <Wallet /> 
    </div>
  )
}
