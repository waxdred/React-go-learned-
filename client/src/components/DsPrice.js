import {StyledContent, StyledContentScroll} from "./Styles"
import Myheader from "./Myheader"
import {Loren} from "./DsHome"

export const DsPrice = () => {
   return (
         <StyledContent>
            <h1>Price</h1>
            <StyledContentScroll>
               <Loren/>
            </StyledContentScroll>
         <Myheader/>
         </StyledContent>
   )
}

export default DsPrice
