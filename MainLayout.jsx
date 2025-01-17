import { Outlet } from "react-router";
import AppNavbar from "../Components/AppNavbar";
import Footer from "../Components/Footer"
import CardRinghtSide from "../Components/CardRightSide"



export default function MainLayout(){
     return(
          <>
<AppNavbar/>
<div className="grid grid-col-12">
     <div className="col-span-8">
          <Outlet/>
     </div>
     <div className="col-span-4">
          <CardRinghtSide/>
     </div>

</div>
<Footer/>
          </>
     )
}