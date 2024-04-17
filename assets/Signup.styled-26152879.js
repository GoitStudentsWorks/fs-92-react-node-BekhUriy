import{u as t,Q as a}from"./index-579bc625.js";const o="/fs-92-react-node-BekhUriy/assets/desktopBottle1x-9ad515d8.png",n="/fs-92-react-node-BekhUriy/assets/desktopBottle2x -e0237641.png",i="/fs-92-react-node-BekhUriy/assets/tabletBottle1x-d35d8598.png",r="/fs-92-react-node-BekhUriy/assets/tabletBottle2x-43c656aa.png",e="/fs-92-react-node-BekhUriy/assets/mobileBottle1x-b2de7c33.png",s="/fs-92-react-node-BekhUriy/assets/desktopBackground1x-dc2b17e8.jpg",d="/fs-92-react-node-BekhUriy/assets/tabletBackground1x-ec35771b.png",c="/fs-92-react-node-BekhUriy/assets/mobileBackground1x-397160f2.png",g=t(a)`
&&&.Toastify__toast-container {
    background-color: #407BFF;
  }
  .Toastify__toast {
    color: #407BFF;
  }
  .Toastify__toast-body {
    font-size: 18px;
    font-weight: 500;
  }
  .Toastify__progress-bar {
  }
`,x=t.section`
  background-image:  url(${c});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (min-width: 768px) {
  background-image:  url(${d});
  }
  @media screen and (min-width: 1440px) {
  background-image:  url(${s});
  }
`,m=t.div`
  display: block;
  line-height: 0;
  background-image: -webkit-image-set(
    url(${e}) 1x,
    url(${e}) 2x);
  background-size: contain;
  background-repeat: no-repeat;
  min-width: 280px;
  height: 210px;
  border: transparent;
  background-position: center;
   @media screen and (min-width: 768px) {
    background-image: -webkit-image-set(
      url(${i}) 1x,
      url(${r}) 2x);
    min-width: 736px;
    height: 548px;
    background-position: 120px center;
  }
  @media screen and (min-width: 1440px) {
     background-image: -webkit-image-set(
      url(${o}) 1x,
      url(${n}) 2x);
    background-position: -120px center;
    min-width: 916px;
    min-height: 680px;
  }`,l=t.div`
@media screen and (max-width:767px) {
 max-width: 280px;
 margin-top: 24px;
  margin-left: auto;
  margin-right: auto; 
}
@media screen and (min-width: 768px) {
  position: relative;
 max-width: 704px; 
  margin-top: 0px;
   margin-left: auto;
  margin-right: auto; 
}
@media screen and (min-width: 1440px) {
 max-width: 1216px; 
  margin-left: auto;
  margin-right: auto; 
}
`,h=t.div`
margin-top: 66px;
@media screen and (min-width: 768px ) {
position: absolute;
top: 40px;
left: 0px;

}
@media screen and (min-width: 1440px) {
  left: auto;
  top: 140px;
  right: 104px;
}
 `;export{m as B,x as C,h as F,g as S,l as W};
