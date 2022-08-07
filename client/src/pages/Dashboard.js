import {Motion, StyledContainerDash} from "../components/Styles"
import { motion } from "framer-motion";
import  SideBar from "../components/DashHeader"
import { useState } from "react";
import {DsHome} from "../components/DsHome"
import DsProduit from "../components/DsProduit"
import DsPrice from "../components/DsPrice"
import { Tb3DCubeSphere} from 'react-icons/tb';
import { MdDashboard, MdOutlinePriceChange} from 'react-icons/md';
import { HiLogout} from 'react-icons/hi';

function getMenu (sideBars, setDsActive){
   sideBars.map((side) =>{ 
      if (side.active)
         setDsActive(side.name);
      })
}

const handleMenu = (side, sideBar) => {
   sideBar.map((t) => {
      t.active=false;
      if (t.name == side)
         t.active=true;
   })
}



const Dashboard = () => {
   const ActiveMenu = (props) => {
      let { dsActive, sideBars, setDsActive} = props;
      getMenu(sideBars, setDsActive);
      if (dsActive == "Menu")
         return (<DsHome/>)
      else if (dsActive == "Produit")
         return (<DsProduit/>)
      else if (dsActive == "Price")
         return (<DsPrice/>)
   }
   const [sideBars, setSideBar] = useState([
      {active: true, id: "de4b6abc-4e53-4861-ba41-f085fda5b1bd", icon: <Tb3DCubeSphere/>, name: 'Menu', to: ''},
      {active: false, id: "c95c72c6-64fd-4463-be5b-721002da1853", icon: <MdDashboard/>, name: 'Produit', to: ''},
      {active: false, id: "91373acf-26f4-4eef-9725-b416627bebdb", icon: <MdOutlinePriceChange/>, name: 'Price', to: ''},
      {active: false, id: "20585aa8-402d-46b2-a665-0e65fcb0bcf2", icon: <HiLogout/>, name: 'Logout', to: '/'},
   ]);
   const [dsActive, setDsActive] = useState()
   return(
      <StyledContainerDash className="Dashboard">
         <Motion
            initial={{opacity: 0}}
            animate={{opacity:1}}
            transition={{duration: 1}}
            exit={{x: -200, opacity: 0}}>
            <SideBar sideBars={sideBars} handleMenu={handleMenu}/>
         </Motion>
         <Motion
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            exit={{opacity: 0}}>
            <ActiveMenu dsActive={dsActive} sideBars={sideBars} setSideBar={setSideBar} setDsActive={setDsActive}/>
         </Motion>
         </StyledContainerDash>
   )
}

export default Dashboard
