import{N as r,O as a,j as n,u as t,a0 as s,a1 as l,a2 as p}from"./index-579bc625.js";import{E as c,e as x,f as d}from"./index.esm-3a6a1aec.js";var o={},h=a;Object.defineProperty(o,"__esModule",{value:!0});var i=o.default=void 0,u=h(r()),b=n;i=o.default=(0,u.default)((0,b.jsx)("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4m0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"VisibilityRounded");const m=t(l)`
font-size: 16px;
font-weight: 400;
line-height: 20px;
text-align: left;
color: var(--text-blue);
margin-top: 8px;
transition: font-size 250ms cubic-bezier(0.4, 0, 0.2, 1), 
line-height 250ms cubic-bezier(0.4, 0, 0.2, 1), 
color 250ms cubic-bezier(0.4, 0, 0.2, 1);
 &:hover {
font-size: 18px;
line-height: 24px;
color: var(--orange-color);
  } 
`,v=t(c)`
position: absolute;
font-size: 15px;
font-weight: 400;
line-height: 1.3;
// color:  ${({$error:e})=>e?"rgba(255, 255, 255, 1)":"rgba(64, 123, 255, 1)"};
color: var(--coral-color);
`,w=t.div`
font-size: 18px;
font-weight: 400;
line-height: 1.3;
text-align: left;
margin-top: 5px;
color: var(--text);
`,z=t(i)`
cursor: pointer;
width: 13px;
height: 12px;
color:  var(--text-blue);
`,y=t(p)`
cursor: pointer;
width: 13px;
height: 12px;
color: var(--text-blue);
`,E=t.div`
font-size: 26px;
font-weight: 500;
line-height: 1.23;
text-align: left;
margin-bottom: 8px;
color: var(--text);
`,j=t.label`
width: 100%;
position: relative;
`,F=t.span`
  display: block;
  position: absolute;
  top: 40px;
  right: 12px;
`,R=t.button`
font-size: 18px;
font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
  padding: 8px 30px 8px 30px;
  border-radius: 10px;
  border-color: transparent;
  color:var( --background);
  background-color: var(--text-blue);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0px 4px 14px 0px #407BFF8A;

   }
  
  @media screen and (min-width:768px) {
    padding: 10px 30px 10px 30px;
  }
 `,_=t(x)`
display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  width: 280px;
  height: 404px;
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
    }
`,C=t(d)`
padding-left:10px;
position: relative;
min-width: 280px;
  font-family: Roboto;
  font-weight: 400;
  text-align: left;
  font-family: inherit;
  font-size: 16px;
  line-height: calc(20 / 16);
  padding-top: 12px;
  padding-bottom: 12px;
   color: var( --text-blue) ; 
  border: 1px solid var( --button-pup-up) ;
  border-radius: 6px;
  width: 100%;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
   color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--text-passowrd) ;
    position: absolute;
    left: 10px;

  }
  
  ${({$error:e})=>e&&s`
      color: var(--coral-color); 
      border-color: var(--coral-color); 
      &::placeholder {
        color: var(--coral-color); 
       
      }
    `}
@media screen and (min-width: 768px ) {
  width:336px;
};
@media screen and (min-width: 1440px) {
   width: 384px;
}
`;export{_ as A,R as B,z as C,v as E,C as I,j as L,m as N,y as O,E as T,w as a,F as b};
