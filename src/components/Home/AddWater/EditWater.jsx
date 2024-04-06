import XMarkOutlineIcon from "../Crossbar/CrossbarIcons/XMarkOutlineIcon";
import { CrossbarAddWaterButton } from "../Crossbar/CrossbarModal.styled";
import { Icon } from "./IconButtons";
import { GlassIcon } from "./Icons/GlassIcon";
import {  Overlay, StyledCounter, StyledDataBar, StyledEditWaterBox, StyledModal, StyledModalHeader } from "./StyledEditWaterModal";
import { IconFramTwo, StyledDataContainer, StyledTime, StyledWater } from "./StyledaddWaterList";

export const EditWaterModal = ({ isOpen, onClose })=>{

  if (isOpen===false) return null
    return (
   <Overlay >
     <StyledModal>
         <StyledModalHeader>
             <h2>Edit the entered amount of water</h2>
         <CrossbarAddWaterButton onClick={onClose}>
         <XMarkOutlineIcon />
        </CrossbarAddWaterButton>
         </StyledModalHeader>

         <StyledEditWaterBox>
          <StyledDataBar>
       <Icon>
            <IconFramTwo>
              <GlassIcon />
            </IconFramTwo>
          </Icon> 
          <StyledDataContainer>
            <StyledWater>200ml</StyledWater>
            <StyledTime>11:00 AM</StyledTime>
          </StyledDataContainer>
         </StyledDataBar>
<p>Correct entered data:</p>
<p>Amount of water:</p>
<StyledCounter>
<button type="button"></button>

<button type="button"></button>
</StyledCounter>



<p>Recording time:</p>
Enter the value of the water used:

</StyledEditWaterBox>
     </StyledModal>
   </Overlay>
 );
}

