import{t as G,c as Ue,s as rt,u as l,j as n,b as de,r as p,d as en,f as ve,e as Be,g as jt,M as St,h as Ct,Q as tn,i as nn,B as Ne,k as on,l as rn,m as Ze,R as sn,n as an,o as ln,T as cn,p as he,q as ke,_ as q,v as Ce,w as Te,x as pe,y as k,z as st,A as Me,C as Q,D as Pe,E as ne,F as Y,G as at,H as be,I as lt,J as ct,K as dn,L as pn,N as Tt,O as Mt,P as W,S as fe,U as un,V as xn,W as hn,X as fn,Y as mn}from"./index-9367ed3c.js";import{c as gn,a as bn,b as _e,u as vn}from"./index.esm-310c2571.js";function dt(e,t){const o=G(e);if(isNaN(t))return Ue(e,NaN);if(!t)return o;const i=o.getDate(),s=Ue(e,o.getTime());s.setMonth(o.getMonth()+t+1,0);const r=s.getDate();return i>=r?s:(o.setFullYear(s.getFullYear(),s.getMonth(),i),o)}function wn(e){return Ue(e,Date.now())}function yn(e,t){const o=rt(e),i=rt(t);return+o==+i}function ze(e){const t=G(e),o=t.getMonth();return t.setFullYear(t.getFullYear(),o+1,0),t.setHours(23,59,59,999),t}function kn(e,t){const o=G(e.start),i=G(e.end);let s=+o>+i;const r=s?+o:+i,a=s?i:o;a.setHours(0,0,0,0);let c=(t==null?void 0:t.step)??1;if(!c)return[];c<0&&(c=-c,s=!s);const d=[];for(;+a<=r;)d.push(G(a)),a.setDate(a.getDate()+c),a.setHours(0,0,0,0);return s?d.reverse():d}function Ae(e){const t=G(e);return t.setDate(1),t.setHours(0,0,0,0),t}function En(e){return G(e).getDate()}function jn(e){return yn(e,wn(e))}function Sn(e,t){const o=+G(e),[i,s]=[+G(t.start),+G(t.end)].sort((r,a)=>r-a);return o>=i&&o<=s}function Cn(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Ee=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`,Tn=l.div`
  width: 280px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    width: 704px;
    flex-direction: row;
    gap: 24px;
    align-items: center;
    display: flex;
    justify-content: space-around;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    gap: 32px;
    padding-left: 5px;
  }
`,Mn=l.div`
  position: relative;
  height: 80px;
  display: flex;
  flex-direction: column;
`,Pn=l.p`
  color: #407bff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 8px;
`,Rn=l.input`
  appearance: none;
  width: 100%;
  border-radius: 10px;
  background-color: rgb(215, 227, 255);
  background-image: linear-gradient(rgb(158, 187, 255), rgb(158, 187, 255));
  background-repeat: no-repeat;
  height: 8px;

  @media screen and (min-width: 768px) {
    width: 325px;
  }

  @media screen and (min-width: 1440px) {
    width: 356px;
  }
`,Dn=l.span`
  height: 32px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
`,Fn=l.span`
  transform: translateX(-50%);
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: rgb(64, 123, 255);

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 4px;
    color: rgb(158, 187, 255);
  }
`,Bn=l.span`
  transform: translateX(50%);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: rgb(64, 123, 255);

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 4px;
    color: rgb(158, 187, 255);
  }
`,Nn=l.span`
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  margin-bottom: 4px;
  gap: 4px;
  color: #407bff;

  &::before {
    content: '|';
    font-size: 12px;

    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 4px;
    color: rgb(158, 187, 255);
  }
`,_n=l.button`
  display: inline-flex;
  padding: 6px 76px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  position: relative;
  color: white;
  border: none;
  height: 100%;

  @media screen and (min-width: 768px) {
    padding: 10px 104px;
    gap: 10px;
  }

  @media screen and (min-width: 1440px) {
    width: 178px;
    height: 44px;
    padding: 10px 30px;
  }
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0px 4px 14px 0px #407BFF8A;

  }

  &:active {
    background: #407bff;
    cursor: pointer;
  }
`,zn=({width:e=24,height:t=24,color:o="#f8f6f6",...i})=>n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...i,children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),n.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),Pt=()=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#407BFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})}),Rt=()=>n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#407BFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),n.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),Ke=()=>n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#407BFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{border:"none",backgroundColor:"transparent"},children:[n.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),n.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),An=l.div`
  translate: -50% -50%;
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 280px;
  max-height: 90vh;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  overflow: auto;
  z-index: 999;

  @media screen and (min-width: 768px) {
    min-width: 704px;
    padding: 32px 24px;
  }
`,On=l.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 24px 12px;
  color: rgb(47, 47, 47);
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 0;
    margin-bottom: 24px;
  }
`,Ye=l.button`
  border-left-style: none;
  border-block-style: none;
  border-right: none;
  background-color: transparent;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover{
      stroke: var(--orange-color);
  }
`,In=l.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`,Ln=l.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: rgb(47, 47, 47);
  margin-bottom: 12px;
`,Dt=l.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`,Ft=l.button`
  background-color: rgb(255, 255, 255);
  color: rgb(64, 123, 255);
  border-radius: 30px;
  border: 1px solid rgb(158, 187, 255);
  width: 44px;
  height: 44px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  gap: 10px;
  padding: 4px;
  box-shadow: rgba(64, 123, 255, 0.34) 0px 4px 8px;
`,Bt=l.button`
  background-color: rgb(255, 255, 255);
  color: rgb(64, 123, 255);
  border-radius: 30px;
  border: 1px solid rgb(158, 187, 255);
  width: 44px;
  height: 44px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  gap: 10px;
  padding: 4px;
  box-shadow: rgba(64, 123, 255, 0.34) 0px 4px 8px;
`,Nt=l.div`
  border-radius: 40px;
  background: rgb(215, 227, 255);
  padding-left: 10px;
  padding-right: 16px;
  margin-left: 10px;
  margin-right: 10px;
`,_t=l.p`
  color: rgb(64, 123, 255);
  text-align: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
  width: 92px;
  height: 36px;
`,$n=l.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: rgb(47, 47, 47);
  margin-bottom: 12px;
`,zt=l.input`
  color: rgb(64, 123, 255);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 50%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid rgb(215, 227, 255);
  background-color: rgb(255, 255, 255);

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,Wn=l.p`
  margin-bottom: 16px;
  color: rgb(47, 47, 47);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`,At=l.input`
  color: rgb(64, 123, 255);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 100%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid rgb(215, 227, 255);
  background-color: rgb(255, 255, 255);
`,Hn=l.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 0;
  }
`,Ot=l.span`
  color: rgb(64, 123, 255);
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
`,Un=l.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 5px;
  background-color: rgb(64, 123, 255);
  color: rgb(255, 255, 255);
  padding: 10px 30px;
  border-radius: 10px;
  font-size: 18px;
  width: 100%;
  height: 44px;
  box-shadow: rgba(64, 123, 255, 0.34) 0px 4px 8px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  border: none;

  @media screen and (min-width: 768px) {
    width: 160px;
  }

  &:hover {
    box-shadow: 0px 4px 14px 0px #407BFF8A;
    cursor: pointer;
  }

  &:active {
    background: #407bff;
    cursor: pointer;
  }
`,It=({isOpen:e,onClose:t})=>{const o=de(),[i,s]=p.useState(0),[r,a]=p.useState(g()),c=()=>{s(b=>b+50)},d=()=>{i>=50&&s(b=>b-50)},u=()=>{const[b,f]=r.split(":"),y=new Date;y.setUTCHours(b,f);const P=y.toISOString();o(en({amountWater:i,date:P})),o(ve(!0)),t(),a(g())},h=b=>{const f=parseInt(b.target.value);s(f)};function g(){const b=new Date,f=b.getHours().toString().padStart(2,"0"),y=b.getMinutes().toString().padStart(2,"0");return`${f}:${y}`}const x=b=>{const f=b.target.value;a(f)};return p.useEffect(()=>{a(g())},[e,t]),p.useEffect(()=>{const b=f=>{f.key==="Escape"&&t()};return e&&document.addEventListener("keydown",b),()=>{document.removeEventListener("keydown",b)}},[e,t]),e?n.jsxs(An,{children:[n.jsxs(On,{children:[n.jsx("h2",{children:"Add water"}),n.jsx(Ye,{onClick:t,children:n.jsx(Ke,{})})]}),n.jsx("div",{children:n.jsxs(In,{children:[n.jsx("h3",{style:{marginBottom:"16px"},children:"Choose a value:"}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx(Ln,{children:"Amount of water:"}),n.jsxs(Dt,{children:[n.jsx(Ft,{onClick:d,children:n.jsx(Pt,{})}),n.jsx(Nt,{children:n.jsxs(_t,{children:[i," ml"]})}),n.jsx(Bt,{onClick:c,children:n.jsx(Rt,{})})]})]}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx($n,{children:"Recording time:"}),n.jsx(zt,{type:"time",step:300,value:r,onChange:x})]}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx(Wn,{children:"Enter the value of the water used:"}),n.jsx(At,{type:"number",value:i,onChange:h})]}),n.jsxs(Hn,{children:[n.jsxs(Ot,{children:[i," ml"]}),n.jsx(Un,{onClick:u,children:"Save"})]})]})})]}):null},Zn=e=>e.water.waterRecords,Vn=e=>e.water.monthStats,Gn=e=>e.water.forceRender,Re=()=>({waterRecords:Be(Zn),monthStats:Be(Vn),forceRender:Be(Gn)}),qn=()=>{const[e,t]=p.useState(!1),{percentageOfWaterConsumption:o}=Re().waterRecords,i=()=>{t(!0)},s=()=>{t(!1)};return n.jsxs(Tn,{children:[e&&n.jsx(Ee,{onClick:s}),n.jsxs(Mn,{children:[n.jsx(Pn,{children:"Today"}),n.jsx(Rn,{type:"range",min:0,max:100,value:o||0,style:{backgroundSize:`${o}% 100%`},readOnly:!0}),n.jsxs(Dn,{children:[n.jsx(Fn,{children:"0%"}),o>1&&o<99&&n.jsxs(Nn,{style:{left:`calc(${o}% + 2px)`},id:"WaterMark",children:[o,"%"]}),n.jsx(Bn,{children:"100%"})]})]}),n.jsxs(_n,{onClick:i,children:[n.jsx(zn,{}),"Add Water"]}),e&&n.jsx(It,{isOpen:e,onClose:s})]})},Kn="/fs-92-react-node-BekhUriy/assets/bottle_bg_home_page_mob_1x-min-d3b7da82.png",Yn="/fs-92-react-node-BekhUriy/assets/bottle_bg_home_page_mob_2x-min-f515f354.png",Xn="/fs-92-react-node-BekhUriy/assets/bottle_bg_home_page_tablet_1x-min-59895b14.png",Qn="/fs-92-react-node-BekhUriy/assets/bottle_bg_home_page_tablet_2x-min-58402861.png",Jn="/fs-92-react-node-BekhUriy/assets/bottle_bg_home_page_desk_1x-min-3f10a7f5.png",eo="/fs-92-react-node-BekhUriy/assets/bottle_bg_home_page_desk_2x-min-b133c1b6.png",to=l.div`
  width: 280px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 704px;
    position: relative;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
    width: 624px;
  }
`,no=l.div`
  width: 164px;
  height: 74px;
  padding: 8px 20px 8px 20px;
  margin-bottom: 8px;
  border-radius: 10px;
  border: 1px solid var(--background-tracker);
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0px 4px 8px 4px rgba(158, 187, 255, 0.12);

  @media screen and (min-width: 768px) {
    height: 76px;
    position: absolute; /* Встановлюємо абсолютне позиціонування фону */
    top: 0; /* Розміщення зверху */
    left: 0; /* Розміщення зліва */
  }
  @media screen and (min-width: 1440px) {
    margin-top: 30px;
  }
`,oo=l.p`
  font-size: 18px;
  color: var(--text);
  font-weight: 500;
  line-height: 1.3;
  width: 124px;
`,io=l.div`
  display: flex;
  gap: 12px;
`,ro=l.p`
  font-size: 22px;
  font-weight: 700;
  color: var(--text-blue);
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,so=l.button`
  font-size: 16px;
  line-height: 1.25;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: var(--text-passowrd);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: var(--orange-color);
  }
`,ao=l.div`
  width: 280px;
  height: 208px;
  background-image: url(${Kn});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${Yn});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    //   position: relative;

    width: 518px;
    height: 386px;
    background-image: url(${Xn});
    margin-top: 16px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${Qn});
  }

  @media screen and (min-width: 1440px) {
    margin-top: 2px;
    margin-left: -73px;
    width: 738px;
    min-height: 548px;
    background-image: url(${Jn});
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${eo});
  }
`,lo=e=>p.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{d:"M6 18L18 6M6 6L18 18",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),co=l.div`
    width: 256px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        width: 656px;
    }

    @media screen and (min-width: 1440px) {
        width: 544px;
    }
`,po=l.div`
    margin-bottom: 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
`,uo=l.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
`,xo=l(lo)`
    stroke: var(--text-blue);
    width: 24px;
    height: 24px;
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover{
        stroke: var(--orange-color);
    }
`,ho=l.div`
    display: flex;
    align-items: center;
    gap: 24px;

    margin-bottom: 12px;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: start;
        gap: 16px;
    }
`,pt=l.p`
    font-size: 16px;
    line-height: 1.25;
`,ut=l.span`
    font-size: 18px;
    line-height: 1.33;

    color: var(--text-blue);

    margin-left: 4px;
`,fo=l.p`
    font-size: 12px;
    line-height: 1.33;

    color: #8f8f8f;
    border-radius: 10px;
    border: 1px solid var(--button-pup-up);

    padding: 10px;
    margin-bottom: 24px;
`,mo=l.span`
    color: var(--text-blue);
`,go=l.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,bo=l.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;

    margin-bottom: 16px;
`,vo=l.div`
    display: flex;
    align-items: center;
    gap: 24px;

    label {
        display: flex;
        align-items: center;
        gap: 6px;

        font-size: 16px;
        line-height: 1.25;
    }

    input:checked {
        fill: var(--text-blue);
    }
`,xt=l.div`
    input {
        display: none;
        & + span {
            display: inline-block;
            position: relative;
            padding-left: 20px;
            cursor: pointer;

            &:before {
                content: '';
                display: block;
                position: absolute;
                top: 1px;
                left: 0px;
                border-radius: 50%;
                margin-right: 5px;
                width: 14px;
                height: 14px;
                border: 1px solid var(--text-blue);
                background: var(--background);
            }

            &:after {
                content: '';
                display: block;
                width: 6px;
                height: 6px;
                background: var(--text-blue);
                position: absolute;
                border-radius: 50%;
                top: 5px;
                left: 4px;
                opacity: 0;
                transform: scale(0, 0);
                transition: all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
            }
        }

        &:checked + span:after {
            opacity: 1;
            transform: scale(1, 1);
        }
    }
`,wo=l.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,yo=l.b`
    font-size: 18px;
    line-height: 1.33;
    width: 64px;
    color: var(--text-blue);
    display: flex;
    align-items: center;
`,ko=l.div`
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;

    @media screen and (min-width: 768px) {
        button {
            width: 160px;
            height: 44px;
        }
    }
`,Eo=l.p`
    color: red;
    font-size: 18px;
    animation: blink 1s infinite;

    @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`,jo=gn({gender:bn().required("Gender is required"),weight:_e().required("Weight is required").min(0,"Weight must be a positive number"),activityTime:_e().required("Activity is required").min(0,"Activity time must be a positive number"),waterAmount:_e().required("Drank water amount is required").min(0,"Drank water amount must be a positive number")}),So=l.label`
    font-size: 18px;
    line-height: 1.33;

    display: flex;
    flex-direction: column;
    gap: 8px;
`,Co=l.input`
    width: 100%;

    padding: 12px 10px;

    font-size: 16px;
    line-height: 1.25;

    color: var(--text-blue);
    border-radius: 6px;
    border: 1px solid var(--button-pup-up);
    background-color: var(--backgroun);
    outline: none;

    &:focus {
        outline: 1px solid var(--button-pup-up);
    }

    &::placeholder {
        color: var(--text-passowrd);
    }
`,To=l.p`
    font-size: 14px;
    line-height: 1.28;
    color: var(--coral-color);
`,Oe=({inputType:e,label:t,error:o,...i})=>{if(e==="dailyNorma")return n.jsxs(So,{children:[t,n.jsx(Co,{...i}),o&&n.jsx(To,{children:o})]})},Mo=l.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1200;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.8);

    @media screen and (max-width: 1440px) {
        overflow-y: scroll;
        scrollbar-width: thin;
        scrollbar-color: transparent;
        -ms-overflow-style: none;

        &::-webkit-scrollbar-thumb {
            width: 0.5em;
        }

        &::-webkit-scrollbar-thumb {
            background-color: transparent;
        }
    }
`,Po=l.div(({type:e})=>({borderRadius:"10px",background:"var(--background)",padding:e==="settings"?"32px 12px":"24px 12px"})),Ro=l(Po)`
    margin-top: 320px;
    margin-bottom: 40px;
    @media screen and (min-width: 768px) {
        padding: 32px 24px;
        margin-top: 160px;
    }
`,Do=document.querySelector("#modal-root"),Fo=({type:e="default",onClose:t,children:o})=>{p.useEffect(()=>(window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)})),p.useEffect(()=>(document.body.style.overflowY="hidden",()=>{document.body.style.overflowY="auto"}));const i=s=>{(s.code==="Escape"||s.currentTarget===s.target)&&t()};return jt.createPortal(n.jsx(Mo,{onClick:i,children:n.jsx(Ro,{type:e,children:o})}),Do)},Bo=l.button(({width:e,buttonType:t})=>({width:`${e}px`,color:t==="cancel"?"var(--text-blue)":"var(--background)",backgroundColor:t==="cancel"?"var( --button-pup-up)":t==="delete"?"var(--coral-color)":"var(--text-blue)"})),No=l(Bo)`
  cursor: pointer;
  border: none;
  padding: 10px 30px;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;

  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,_o=({children:e,...t})=>n.jsx(No,{...t,children:e}),zo=()=>{const e=p.useContext(St),t=Ct(),o=de(),i=()=>{e()},[s,r]=p.useState(0),a=p.useCallback(x=>{const b=x.gender==="female"?.03:.04,f=x.gender==="female"?.4:.6;if(x.weight>=0&&x.activityTime>=0){const y=x.weight*b+x.activityTime*f;r(y.toFixed(1))}else r("Error")},[]),c=x=>{u.handleChange(x)},d=async()=>{let x=u.values.waterAmount*1e3;x>=0&&x<=1e4?(o(nn({waterRate:x})),o(ve(!0)),Ne.success("Daily norma successfully updated")):Ne.warning("The amount of water must be a positive number and no more than 10 liters"),u.resetForm(),e()},u=vn({initialValues:{gender:t.gender,weight:0,activityTime:0,waterAmount:0},validationSchema:jo,onSubmit:d}),h=(x,b)=>{b!=="waterAmount"&&(x.target.value="")},g=(x,b)=>{x.target.value>=0?b!=="wateramount"&&u.setFieldValue("waterAmount",s):(u.setFieldValue("waterAmount",0),Ne.warning("Negative numbers are not allowed"))};return p.useEffect(()=>{a(u.values)},[a,u.values]),n.jsx(Fo,{onClose:e,children:n.jsx(co,{children:n.jsxs(n.Fragment,{children:[n.jsxs(po,{children:["My daily norma",n.jsx(uo,{onClick:i,children:n.jsx(xo,{})})]}),n.jsxs(ho,{children:[n.jsxs(pt,{children:["For girl:",n.jsx(ut,{children:"V=(M*0,03) + (T*0,4)"})]}),n.jsxs(pt,{children:["For man:",n.jsx(ut,{children:"V=(M*0,04) + (T*0,6)"})]})]}),n.jsxs(fo,{children:[n.jsx(mo,{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]}),n.jsxs(go,{children:[n.jsx(bo,{children:"Calculate your rate:"}),n.jsxs(vo,{children:[n.jsx(xt,{children:n.jsxs("label",{children:[n.jsx("input",{type:"radio",name:"gender",value:"female",onChange:()=>u.setFieldValue("gender","female"),checked:u.values.gender==="female"}),n.jsx("span",{children:"For women"})]})}),n.jsx(xt,{children:n.jsxs("label",{children:[n.jsx("input",{type:"radio",name:"gender",value:"male",onChange:()=>u.setFieldValue("gender","male"),checked:u.values.gender==="male"}),n.jsx("span",{children:"For men"})]})})]}),n.jsx(Oe,{label:"Your weight in kilograms:",inputType:"dailyNorma",value:u.values.weight,onChange:x=>c(x),onFocus:x=>h(x,"weight"),onBlur:x=>g(x,"weight"),name:"weight",type:"number",min:"0",step:"0.1",error:u.touched.weight&&u.errors.weight}),n.jsx(Oe,{label:`The time of active participation in sports
                        or other activities with a high physical. load in hours:`,inputType:"dailyNorma",value:u.values.activityTime,onChange:x=>c(x),onFocus:x=>h(x,"activityTime"),onBlur:x=>g(x,"activityTime"),name:"activityTime",type:"number",min:"0",max:"10",step:"0.1",error:u.touched.activityTime&&u.errors.activityTime}),n.jsxs(wo,{children:[n.jsx(n.Fragment,{children:"The required amount of water in liters per day:"}),n.jsx(yo,{children:isNaN(s)||s<0?n.jsx(Eo,{children:"Input data error"}):`${s} L`})]}),n.jsx(Oe,{label:"Write down how much water you will drink:",inputType:"dailyNorma",value:u.values.waterAmount,onChange:x=>c(x),onFocus:x=>h(x,"waterAmount"),name:"waterAmount",type:"number",min:"0",max:"20",step:"0.1",error:u.touched.waterAmount&&u.errors.waterAmount}),n.jsx(ko,{children:n.jsx(_o,{type:"submit",onClick:d,children:"Save"})}),n.jsx(tn,{})]})]})})})},Ao=()=>{const{waterRate:e}=Ct().user,t=p.useContext(St),o=(e/1e3).toFixed(1),i=()=>{t(n.jsx(zo,{}))};return n.jsxs(to,{children:[n.jsxs(no,{children:[n.jsx(oo,{children:"My daily norma"}),n.jsxs(io,{children:[n.jsxs(ro,{children:[`${o}`," L"]}),n.jsx(so,{onClick:i,children:"Edit"})]})]}),n.jsx(ao,{})]})};function Oo(e,t,o,i,s){const[r,a]=p.useState(()=>s&&o?o(e).matches:i?i(e).matches:t);return Ze(()=>{let c=!0;if(!o)return;const d=o(e),u=()=>{c&&a(d.matches)};return u(),d.addListener(u),()=>{c=!1,d.removeListener(u)}},[e,o]),r}const Lt=sn["useSyncExternalStore"];function Io(e,t,o,i,s){const r=p.useCallback(()=>t,[t]),a=p.useMemo(()=>{if(s&&o)return()=>o(e).matches;if(i!==null){const{matches:h}=i(e);return()=>h}return r},[r,e,i,s,o]),[c,d]=p.useMemo(()=>{if(o===null)return[r,()=>()=>{}];const h=o(e);return[()=>h.matches,g=>(h.addListener(g),()=>{h.removeListener(g)})]},[r,o,e]);return Lt(d,c,a)}function Lo(e,t={}){const o=on(),i=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:s=!1,matchMedia:r=i?window.matchMedia:null,ssrMatchMedia:a=null,noSsr:c=!1}=rn({name:"MuiUseMediaQuery",props:t,theme:o});let d=typeof e=="function"?e(o):e;return d=d.replace(/^@media( ?)/m,""),(Lt!==void 0?Io:Oo)(d,s,r,a,c)}function $t(){const e=an(ln);return e[cn]||e}const $o=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},ht=$o;function Ve(e,t){return Ve=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Ve(e,t)}function Wo(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ve(e,t)}const ft={disabled:!1},Wt=he.createContext(null);var Ho=function(t){return t.scrollTop},me="unmounted",ee="exited",te="entering",ce="entered",Ge="exiting",X=function(e){Wo(t,e);function t(i,s){var r;r=e.call(this,i,s)||this;var a=s,c=a&&!a.isMounting?i.enter:i.appear,d;return r.appearStatus=null,i.in?c?(d=ee,r.appearStatus=te):d=ce:i.unmountOnExit||i.mountOnEnter?d=me:d=ee,r.state={status:d},r.nextCallback=null,r}t.getDerivedStateFromProps=function(s,r){var a=s.in;return a&&r.status===me?{status:ee}:null};var o=t.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(s){var r=null;if(s!==this.props){var a=this.state.status;this.props.in?a!==te&&a!==ce&&(r=te):(a===te||a===ce)&&(r=Ge)}this.updateStatus(!1,r)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var s=this.props.timeout,r,a,c;return r=a=c=s,s!=null&&typeof s!="number"&&(r=s.exit,a=s.enter,c=s.appear!==void 0?s.appear:a),{exit:r,enter:a,appear:c}},o.updateStatus=function(s,r){if(s===void 0&&(s=!1),r!==null)if(this.cancelNextCallback(),r===te){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:ke.findDOMNode(this);a&&Ho(a)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ee&&this.setState({status:me})},o.performEnter=function(s){var r=this,a=this.props.enter,c=this.context?this.context.isMounting:s,d=this.props.nodeRef?[c]:[ke.findDOMNode(this),c],u=d[0],h=d[1],g=this.getTimeouts(),x=c?g.appear:g.enter;if(!s&&!a||ft.disabled){this.safeSetState({status:ce},function(){r.props.onEntered(u)});return}this.props.onEnter(u,h),this.safeSetState({status:te},function(){r.props.onEntering(u,h),r.onTransitionEnd(x,function(){r.safeSetState({status:ce},function(){r.props.onEntered(u,h)})})})},o.performExit=function(){var s=this,r=this.props.exit,a=this.getTimeouts(),c=this.props.nodeRef?void 0:ke.findDOMNode(this);if(!r||ft.disabled){this.safeSetState({status:ee},function(){s.props.onExited(c)});return}this.props.onExit(c),this.safeSetState({status:Ge},function(){s.props.onExiting(c),s.onTransitionEnd(a.exit,function(){s.safeSetState({status:ee},function(){s.props.onExited(c)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(s,r){r=this.setNextCallback(r),this.setState(s,r)},o.setNextCallback=function(s){var r=this,a=!0;return this.nextCallback=function(c){a&&(a=!1,r.nextCallback=null,s(c))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},o.onTransitionEnd=function(s,r){this.setNextCallback(r);var a=this.props.nodeRef?this.props.nodeRef.current:ke.findDOMNode(this),c=s==null&&!this.props.addEndListener;if(!a||c){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var d=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],u=d[0],h=d[1];this.props.addEndListener(u,h)}s!=null&&setTimeout(this.nextCallback,s)},o.render=function(){var s=this.state.status;if(s===me)return null;var r=this.props,a=r.children;r.in,r.mountOnEnter,r.unmountOnExit,r.appear,r.enter,r.exit,r.timeout,r.addEndListener,r.onEnter,r.onEntering,r.onEntered,r.onExit,r.onExiting,r.onExited,r.nodeRef;var c=q(r,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return he.createElement(Wt.Provider,{value:null},typeof a=="function"?a(s,c):he.cloneElement(he.Children.only(a),c))},t}(he.Component);X.contextType=Wt;X.propTypes={};function le(){}X.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:le,onEntering:le,onEntered:le,onExit:le,onExiting:le,onExited:le};X.UNMOUNTED=me;X.EXITED=ee;X.ENTERING=te;X.ENTERED=ce;X.EXITING=Ge;const Ht=X,Ut=e=>e.scrollTop;function je(e,t){var o,i;const{timeout:s,easing:r,style:a={}}=e;return{duration:(o=a.transitionDuration)!=null?o:typeof s=="number"?s:s[t.mode]||0,easing:(i=a.transitionTimingFunction)!=null?i:typeof r=="object"?r[t.mode]:r,delay:a.transitionDelay}}function Uo(e){return Ce("MuiPaper",e)}Te("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Zo=["className","component","elevation","square","variant"],Vo=e=>{const{square:t,elevation:o,variant:i,classes:s}=e,r={root:["root",i,!t&&"rounded",i==="elevation"&&`elevation${o}`]};return Pe(r,Uo,s)},Go=pe("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],!o.square&&t.rounded,o.variant==="elevation"&&t[`elevation${o.elevation}`]]}})(({theme:e,ownerState:t})=>{var o;return k({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&k({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${st("#fff",ht(t.elevation))}, ${st("#fff",ht(t.elevation))})`},e.vars&&{backgroundImage:(o=e.vars.overlays)==null?void 0:o[t.elevation]}))}),qo=p.forwardRef(function(t,o){const i=Me({props:t,name:"MuiPaper"}),{className:s,component:r="div",elevation:a=1,square:c=!1,variant:d="elevation"}=i,u=q(i,Zo),h=k({},i,{component:r,elevation:a,square:c,variant:d}),g=Vo(h);return n.jsx(Go,k({as:r,ownerState:h,className:Q(g.root,s),ref:o},u))}),Ko=qo;function Zt(e){return typeof e=="string"}function Yo(e,t,o){return e===void 0||Zt(e)?t:k({},t,{ownerState:k({},t.ownerState,o)})}function Vt(e,t=[]){if(e===void 0)return{};const o={};return Object.keys(e).filter(i=>i.match(/^on[A-Z]/)&&typeof e[i]=="function"&&!t.includes(i)).forEach(i=>{o[i]=e[i]}),o}function Xo(e,t,o){return typeof e=="function"?e(t,o):e}function mt(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(o=>!(o.match(/^on[A-Z]/)&&typeof e[o]=="function")).forEach(o=>{t[o]=e[o]}),t}function Qo(e){const{getSlotProps:t,additionalProps:o,externalSlotProps:i,externalForwardedProps:s,className:r}=e;if(!t){const b=Q(o==null?void 0:o.className,r,s==null?void 0:s.className,i==null?void 0:i.className),f=k({},o==null?void 0:o.style,s==null?void 0:s.style,i==null?void 0:i.style),y=k({},o,s,i);return b.length>0&&(y.className=b),Object.keys(f).length>0&&(y.style=f),{props:y,internalRef:void 0}}const a=Vt(k({},s,i)),c=mt(i),d=mt(s),u=t(a),h=Q(u==null?void 0:u.className,o==null?void 0:o.className,r,s==null?void 0:s.className,i==null?void 0:i.className),g=k({},u==null?void 0:u.style,o==null?void 0:o.style,s==null?void 0:s.style,i==null?void 0:i.style),x=k({},u,o,d,c);return h.length>0&&(x.className=h),Object.keys(g).length>0&&(x.style=g),{props:x,internalRef:u.ref}}const Jo=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function Se(e){var t;const{elementType:o,externalSlotProps:i,ownerState:s,skipResolvingSlotProps:r=!1}=e,a=q(e,Jo),c=r?{}:Xo(i,s),{props:d,internalRef:u}=Qo(k({},a,{externalSlotProps:c})),h=ne(u,c==null?void 0:c.ref,(t=e.additionalProps)==null?void 0:t.ref);return Yo(o,k({},d,{ref:h}),s)}const ei=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function ti(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function ni(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=i=>e.ownerDocument.querySelector(`input[type="radio"]${i}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function oi(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||ni(e))}function ii(e){const t=[],o=[];return Array.from(e.querySelectorAll(ei)).forEach((i,s)=>{const r=ti(i);r===-1||!oi(i)||(r===0?t.push(i):o.push({documentOrder:s,tabIndex:r,node:i}))}),o.sort((i,s)=>i.tabIndex===s.tabIndex?i.documentOrder-s.documentOrder:i.tabIndex-s.tabIndex).map(i=>i.node).concat(t)}function ri(){return!0}function si(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:i=!1,disableRestoreFocus:s=!1,getTabbable:r=ii,isEnabled:a=ri,open:c}=e,d=p.useRef(!1),u=p.useRef(null),h=p.useRef(null),g=p.useRef(null),x=p.useRef(null),b=p.useRef(!1),f=p.useRef(null),y=ne(t.ref,f),P=p.useRef(null);p.useEffect(()=>{!c||!f.current||(b.current=!o)},[o,c]),p.useEffect(()=>{if(!c||!f.current)return;const v=Y(f.current);return f.current.contains(v.activeElement)||(f.current.hasAttribute("tabIndex")||f.current.setAttribute("tabIndex","-1"),b.current&&f.current.focus()),()=>{s||(g.current&&g.current.focus&&(d.current=!0,g.current.focus()),g.current=null)}},[c]),p.useEffect(()=>{if(!c||!f.current)return;const v=Y(f.current),E=m=>{P.current=m,!(i||!a()||m.key!=="Tab")&&v.activeElement===f.current&&m.shiftKey&&(d.current=!0,h.current&&h.current.focus())},j=()=>{const m=f.current;if(m===null)return;if(!v.hasFocus()||!a()||d.current){d.current=!1;return}if(m.contains(v.activeElement)||i&&v.activeElement!==u.current&&v.activeElement!==h.current)return;if(v.activeElement!==x.current)x.current=null;else if(x.current!==null)return;if(!b.current)return;let M=[];if((v.activeElement===u.current||v.activeElement===h.current)&&(M=r(f.current)),M.length>0){var w,D;const I=!!((w=P.current)!=null&&w.shiftKey&&((D=P.current)==null?void 0:D.key)==="Tab"),z=M[0],L=M[M.length-1];typeof z!="string"&&typeof L!="string"&&(I?L.focus():z.focus())}else m.focus()};v.addEventListener("focusin",j),v.addEventListener("keydown",E,!0);const F=setInterval(()=>{v.activeElement&&v.activeElement.tagName==="BODY"&&j()},50);return()=>{clearInterval(F),v.removeEventListener("focusin",j),v.removeEventListener("keydown",E,!0)}},[o,i,s,a,c,r]);const S=v=>{g.current===null&&(g.current=v.relatedTarget),b.current=!0,x.current=v.target;const E=t.props.onFocus;E&&E(v)},_=v=>{g.current===null&&(g.current=v.relatedTarget),b.current=!0};return n.jsxs(p.Fragment,{children:[n.jsx("div",{tabIndex:c?0:-1,onFocus:_,ref:u,"data-testid":"sentinelStart"}),p.cloneElement(t,{ref:y,onFocus:S}),n.jsx("div",{tabIndex:c?0:-1,onFocus:_,ref:h,"data-testid":"sentinelEnd"})]})}function ai(e){return typeof e=="function"?e():e}const li=p.forwardRef(function(t,o){const{children:i,container:s,disablePortal:r=!1}=t,[a,c]=p.useState(null),d=ne(p.isValidElement(i)?i.ref:null,o);if(Ze(()=>{r||c(ai(s)||document.body)},[s,r]),Ze(()=>{if(a&&!r)return at(o,a),()=>{at(o,null)}},[o,a,r]),r){if(p.isValidElement(i)){const u={ref:d};return p.cloneElement(i,u)}return n.jsx(p.Fragment,{children:i})}return n.jsx(p.Fragment,{children:a&&jt.createPortal(i,a)})});function ci(e){const t=Y(e);return t.body===e?be(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function ge(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function gt(e){return parseInt(be(e).getComputedStyle(e).paddingRight,10)||0}function di(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,i=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||i}function bt(e,t,o,i,s){const r=[t,o,...i];[].forEach.call(e.children,a=>{const c=r.indexOf(a)===-1,d=!di(a);c&&d&&ge(a,s)})}function Ie(e,t){let o=-1;return e.some((i,s)=>t(i)?(o=s,!0):!1),o}function pi(e,t){const o=[],i=e.container;if(!t.disableScrollLock){if(ci(i)){const a=Cn(Y(i));o.push({value:i.style.paddingRight,property:"padding-right",el:i}),i.style.paddingRight=`${gt(i)+a}px`;const c=Y(i).querySelectorAll(".mui-fixed");[].forEach.call(c,d=>{o.push({value:d.style.paddingRight,property:"padding-right",el:d}),d.style.paddingRight=`${gt(d)+a}px`})}let r;if(i.parentNode instanceof DocumentFragment)r=Y(i).body;else{const a=i.parentElement,c=be(i);r=(a==null?void 0:a.nodeName)==="HTML"&&c.getComputedStyle(a).overflowY==="scroll"?a:i}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:a,property:c})=>{r?a.style.setProperty(c,r):a.style.removeProperty(c)})}}function ui(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class xi{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,o){let i=this.modals.indexOf(t);if(i!==-1)return i;i=this.modals.length,this.modals.push(t),t.modalRef&&ge(t.modalRef,!1);const s=ui(o);bt(o,t.mount,t.modalRef,s,!0);const r=Ie(this.containers,a=>a.container===o);return r!==-1?(this.containers[r].modals.push(t),i):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:s}),i)}mount(t,o){const i=Ie(this.containers,r=>r.modals.indexOf(t)!==-1),s=this.containers[i];s.restore||(s.restore=pi(s,o))}remove(t,o=!0){const i=this.modals.indexOf(t);if(i===-1)return i;const s=Ie(this.containers,a=>a.modals.indexOf(t)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(i,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&ge(t.modalRef,o),bt(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const a=r.modals[r.modals.length-1];a.modalRef&&ge(a.modalRef,!1)}return i}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function hi(e){return typeof e=="function"?e():e}function fi(e){return e?e.props.hasOwnProperty("in"):!1}const mi=new xi;function gi(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:i=!1,manager:s=mi,closeAfterTransition:r=!1,onTransitionEnter:a,onTransitionExited:c,children:d,onClose:u,open:h,rootRef:g}=e,x=p.useRef({}),b=p.useRef(null),f=p.useRef(null),y=ne(f,g),[P,S]=p.useState(!h),_=fi(d);let v=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(v=!1);const E=()=>Y(b.current),j=()=>(x.current.modalRef=f.current,x.current.mount=b.current,x.current),F=()=>{s.mount(j(),{disableScrollLock:i}),f.current&&(f.current.scrollTop=0)},m=lt(()=>{const T=hi(t)||E().body;s.add(j(),T),f.current&&F()}),M=p.useCallback(()=>s.isTopModal(j()),[s]),w=lt(T=>{b.current=T,T&&(h&&M()?F():f.current&&ge(f.current,v))}),D=p.useCallback(()=>{s.remove(j(),v)},[v,s]);p.useEffect(()=>()=>{D()},[D]),p.useEffect(()=>{h?m():(!_||!r)&&D()},[h,D,_,r,m]);const I=T=>R=>{var O;(O=T.onKeyDown)==null||O.call(T,R),!(R.key!=="Escape"||R.which===229||!M())&&(o||(R.stopPropagation(),u&&u(R,"escapeKeyDown")))},z=T=>R=>{var O;(O=T.onClick)==null||O.call(T,R),R.target===R.currentTarget&&u&&u(R,"backdropClick")};return{getRootProps:(T={})=>{const R=Vt(e);delete R.onTransitionEnter,delete R.onTransitionExited;const O=k({},R,T);return k({role:"presentation"},O,{onKeyDown:I(O),ref:y})},getBackdropProps:(T={})=>{const R=T;return k({"aria-hidden":!0},R,{onClick:z(R),open:h})},getTransitionProps:()=>{const T=()=>{S(!1),a&&a()},R=()=>{S(!0),c&&c(),r&&D()};return{onEnter:ct(T,d==null?void 0:d.props.onEnter),onExited:ct(R,d==null?void 0:d.props.onExited)}},rootRef:y,portalRef:w,isTopModal:M,exited:P,hasTransition:_}}const bi=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],vi={entering:{opacity:1},entered:{opacity:1}},wi=p.forwardRef(function(t,o){const i=$t(),s={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{addEndListener:r,appear:a=!0,children:c,easing:d,in:u,onEnter:h,onEntered:g,onEntering:x,onExit:b,onExited:f,onExiting:y,style:P,timeout:S=s,TransitionComponent:_=Ht}=t,v=q(t,bi),E=p.useRef(null),j=ne(E,c.ref,o),F=N=>C=>{if(N){const T=E.current;C===void 0?N(T):N(T,C)}},m=F(x),M=F((N,C)=>{Ut(N);const T=je({style:P,timeout:S,easing:d},{mode:"enter"});N.style.webkitTransition=i.transitions.create("opacity",T),N.style.transition=i.transitions.create("opacity",T),h&&h(N,C)}),w=F(g),D=F(y),I=F(N=>{const C=je({style:P,timeout:S,easing:d},{mode:"exit"});N.style.webkitTransition=i.transitions.create("opacity",C),N.style.transition=i.transitions.create("opacity",C),b&&b(N)}),z=F(f),L=N=>{r&&r(E.current,N)};return n.jsx(_,k({appear:a,in:u,nodeRef:E,onEnter:M,onEntered:w,onEntering:m,onExit:I,onExited:z,onExiting:D,addEndListener:L,timeout:S},v,{children:(N,C)=>p.cloneElement(c,k({style:k({opacity:0,visibility:N==="exited"&&!u?"hidden":void 0},vi[N],P,c.props.style),ref:j},C))}))}),yi=wi;function ki(e){return Ce("MuiBackdrop",e)}Te("MuiBackdrop",["root","invisible"]);const Ei=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],ji=e=>{const{classes:t,invisible:o}=e;return Pe({root:["root",o&&"invisible"]},ki,t)},Si=pe("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})(({ownerState:e})=>k({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Ci=p.forwardRef(function(t,o){var i,s,r;const a=Me({props:t,name:"MuiBackdrop"}),{children:c,className:d,component:u="div",components:h={},componentsProps:g={},invisible:x=!1,open:b,slotProps:f={},slots:y={},TransitionComponent:P=yi,transitionDuration:S}=a,_=q(a,Ei),v=k({},a,{component:u,invisible:x}),E=ji(v),j=(i=f.root)!=null?i:g.root;return n.jsx(P,k({in:b,timeout:S},_,{children:n.jsx(Si,k({"aria-hidden":!0},j,{as:(s=(r=y.root)!=null?r:h.Root)!=null?s:u,className:Q(E.root,d,j==null?void 0:j.className),ownerState:k({},v,j==null?void 0:j.ownerState),classes:E,ref:o,children:c}))}))}),Ti=Ci;function Mi(e){return Ce("MuiModal",e)}Te("MuiModal",["root","hidden","backdrop"]);const Pi=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],Ri=e=>{const{open:t,exited:o,classes:i}=e;return Pe({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},Mi,i)},Di=pe("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(({theme:e,ownerState:t})=>k({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),Fi=pe(Ti,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Bi=p.forwardRef(function(t,o){var i,s,r,a,c,d;const u=Me({name:"MuiModal",props:t}),{BackdropComponent:h=Fi,BackdropProps:g,className:x,closeAfterTransition:b=!1,children:f,container:y,component:P,components:S={},componentsProps:_={},disableAutoFocus:v=!1,disableEnforceFocus:E=!1,disableEscapeKeyDown:j=!1,disablePortal:F=!1,disableRestoreFocus:m=!1,disableScrollLock:M=!1,hideBackdrop:w=!1,keepMounted:D=!1,onBackdropClick:I,open:z,slotProps:L,slots:N}=u,C=q(u,Pi),T=k({},u,{closeAfterTransition:b,disableAutoFocus:v,disableEnforceFocus:E,disableEscapeKeyDown:j,disablePortal:F,disableRestoreFocus:m,disableScrollLock:M,hideBackdrop:w,keepMounted:D}),{getRootProps:R,getBackdropProps:O,getTransitionProps:$,portalRef:V,isTopModal:we,exited:U,hasTransition:ye}=gi(k({},T,{rootRef:o})),J=k({},T,{exited:U}),K=Ri(J),oe={};if(f.props.tabIndex===void 0&&(oe.tabIndex="-1"),ye){const{onEnter:B,onExited:A}=$();oe.onEnter=B,oe.onExited=A}const ie=(i=(s=N==null?void 0:N.root)!=null?s:S.Root)!=null?i:Di,ue=(r=(a=N==null?void 0:N.backdrop)!=null?a:S.Backdrop)!=null?r:h,xe=(c=L==null?void 0:L.root)!=null?c:_.root,re=(d=L==null?void 0:L.backdrop)!=null?d:_.backdrop,De=Se({elementType:ie,externalSlotProps:xe,externalForwardedProps:C,getSlotProps:R,additionalProps:{ref:o,as:P},ownerState:J,className:Q(x,xe==null?void 0:xe.className,K==null?void 0:K.root,!J.open&&J.exited&&(K==null?void 0:K.hidden))}),Fe=Se({elementType:ue,externalSlotProps:re,additionalProps:g,getSlotProps:B=>O(k({},B,{onClick:A=>{I&&I(A),B!=null&&B.onClick&&B.onClick(A)}})),className:Q(re==null?void 0:re.className,g==null?void 0:g.className,K==null?void 0:K.backdrop),ownerState:J});return!D&&!z&&(!ye||U)?null:n.jsx(li,{ref:V,container:y,disablePortal:F,children:n.jsxs(ie,k({},De,{children:[!w&&h?n.jsx(ue,k({},Fe)):null,n.jsx(si,{disableEnforceFocus:E,disableAutoFocus:v,disableRestoreFocus:m,isEnabled:we,open:z,children:p.cloneElement(f,oe)})]}))})}),Ni=Bi,_i=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function qe(e){return`scale(${e}, ${e**2})`}const zi={entering:{opacity:1,transform:qe(1)},entered:{opacity:1,transform:"none"}},Le=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Gt=p.forwardRef(function(t,o){const{addEndListener:i,appear:s=!0,children:r,easing:a,in:c,onEnter:d,onEntered:u,onEntering:h,onExit:g,onExited:x,onExiting:b,style:f,timeout:y="auto",TransitionComponent:P=Ht}=t,S=q(t,_i),_=dn(),v=p.useRef(),E=$t(),j=p.useRef(null),F=ne(j,r.ref,o),m=C=>T=>{if(C){const R=j.current;T===void 0?C(R):C(R,T)}},M=m(h),w=m((C,T)=>{Ut(C);const{duration:R,delay:O,easing:$}=je({style:f,timeout:y,easing:a},{mode:"enter"});let V;y==="auto"?(V=E.transitions.getAutoHeightDuration(C.clientHeight),v.current=V):V=R,C.style.transition=[E.transitions.create("opacity",{duration:V,delay:O}),E.transitions.create("transform",{duration:Le?V:V*.666,delay:O,easing:$})].join(","),d&&d(C,T)}),D=m(u),I=m(b),z=m(C=>{const{duration:T,delay:R,easing:O}=je({style:f,timeout:y,easing:a},{mode:"exit"});let $;y==="auto"?($=E.transitions.getAutoHeightDuration(C.clientHeight),v.current=$):$=T,C.style.transition=[E.transitions.create("opacity",{duration:$,delay:R}),E.transitions.create("transform",{duration:Le?$:$*.666,delay:Le?R:R||$*.333,easing:O})].join(","),C.style.opacity=0,C.style.transform=qe(.75),g&&g(C)}),L=m(x),N=C=>{y==="auto"&&_.start(v.current||0,C),i&&i(j.current,C)};return n.jsx(P,k({appear:s,in:c,nodeRef:j,onEnter:w,onEntered:D,onEntering:M,onExit:z,onExited:L,onExiting:I,addEndListener:N,timeout:y==="auto"?null:y},S,{children:(C,T)=>p.cloneElement(r,k({style:k({opacity:0,transform:qe(.75),visibility:C==="exited"&&!c?"hidden":void 0},zi[C],f,r.props.style),ref:F},T))}))});Gt.muiSupportAuto=!0;const Ai=Gt;function Oi(e){return Ce("MuiPopover",e)}Te("MuiPopover",["root","paper"]);const Ii=["onEntering"],Li=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],$i=["slotProps"];function vt(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.height/2:t==="bottom"&&(o=e.height),o}function wt(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.width/2:t==="right"&&(o=e.width),o}function yt(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function $e(e){return typeof e=="function"?e():e}const Wi=e=>{const{classes:t}=e;return Pe({root:["root"],paper:["paper"]},Oi,t)},Hi=pe(Ni,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Ui=pe(Ko,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Zi=p.forwardRef(function(t,o){var i,s,r;const a=Me({props:t,name:"MuiPopover"}),{action:c,anchorEl:d,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:h,anchorReference:g="anchorEl",children:x,className:b,container:f,elevation:y=8,marginThreshold:P=16,open:S,PaperProps:_={},slots:v,slotProps:E,transformOrigin:j={vertical:"top",horizontal:"left"},TransitionComponent:F=Ai,transitionDuration:m="auto",TransitionProps:{onEntering:M}={},disableScrollLock:w=!1}=a,D=q(a.TransitionProps,Ii),I=q(a,Li),z=(i=E==null?void 0:E.paper)!=null?i:_,L=p.useRef(),N=ne(L,z.ref),C=k({},a,{anchorOrigin:u,anchorReference:g,elevation:y,marginThreshold:P,externalPaperSlotProps:z,transformOrigin:j,TransitionComponent:F,transitionDuration:m,TransitionProps:D}),T=Wi(C),R=p.useCallback(()=>{if(g==="anchorPosition")return h;const B=$e(d),H=(B&&B.nodeType===1?B:Y(L.current).body).getBoundingClientRect();return{top:H.top+vt(H,u.vertical),left:H.left+wt(H,u.horizontal)}},[d,u.horizontal,u.vertical,h,g]),O=p.useCallback(B=>({vertical:vt(B,j.vertical),horizontal:wt(B,j.horizontal)}),[j.horizontal,j.vertical]),$=p.useCallback(B=>{const A={width:B.offsetWidth,height:B.offsetHeight},H=O(A);if(g==="none")return{top:null,left:null,transformOrigin:yt(H)};const Je=R();let se=Je.top-H.vertical,ae=Je.left-H.horizontal;const et=se+A.height,tt=ae+A.width,nt=be($e(d)),ot=nt.innerHeight-P,it=nt.innerWidth-P;if(P!==null&&se<P){const Z=se-P;se-=Z,H.vertical+=Z}else if(P!==null&&et>ot){const Z=et-ot;se-=Z,H.vertical+=Z}if(P!==null&&ae<P){const Z=ae-P;ae-=Z,H.horizontal+=Z}else if(tt>it){const Z=tt-it;ae-=Z,H.horizontal+=Z}return{top:`${Math.round(se)}px`,left:`${Math.round(ae)}px`,transformOrigin:yt(H)}},[d,g,R,O,P]),[V,we]=p.useState(S),U=p.useCallback(()=>{const B=L.current;if(!B)return;const A=$(B);A.top!==null&&(B.style.top=A.top),A.left!==null&&(B.style.left=A.left),B.style.transformOrigin=A.transformOrigin,we(!0)},[$]);p.useEffect(()=>(w&&window.addEventListener("scroll",U),()=>window.removeEventListener("scroll",U)),[d,w,U]);const ye=(B,A)=>{M&&M(B,A),U()},J=()=>{we(!1)};p.useEffect(()=>{S&&U()}),p.useImperativeHandle(c,()=>S?{updatePosition:()=>{U()}}:null,[S,U]),p.useEffect(()=>{if(!S)return;const B=pn(()=>{U()}),A=be(d);return A.addEventListener("resize",B),()=>{B.clear(),A.removeEventListener("resize",B)}},[d,S,U]);let K=m;m==="auto"&&!F.muiSupportAuto&&(K=void 0);const oe=f||(d?Y($e(d)).body:void 0),ie=(s=v==null?void 0:v.root)!=null?s:Hi,ue=(r=v==null?void 0:v.paper)!=null?r:Ui,xe=Se({elementType:ue,externalSlotProps:k({},z,{style:V?z.style:k({},z.style,{opacity:0})}),additionalProps:{elevation:y,ref:N},ownerState:C,className:Q(T.paper,z==null?void 0:z.className)}),re=Se({elementType:ie,externalSlotProps:(E==null?void 0:E.root)||{},externalForwardedProps:I,additionalProps:{ref:o,slotProps:{backdrop:{invisible:!0}},container:oe,open:S},ownerState:C,className:Q(T.root,b)}),{slotProps:De}=re,Fe=q(re,$i);return n.jsx(ie,k({},Fe,!Zt(ie)&&{slotProps:De,disableScrollLock:w},{children:n.jsx(F,k({appear:!0,in:S,onEntering:ye,onExited:J,timeout:K},D,{children:n.jsx(ue,k({},xe,{children:x}))}))}))}),Vi=Zi;var Xe={},Gi=Mt;Object.defineProperty(Xe,"__esModule",{value:!0});var qt=Xe.default=void 0,qi=Gi(Tt()),Ki=n;qt=Xe.default=(0,qi.default)((0,Ki.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");var Qe={},Yi=Mt;Object.defineProperty(Qe,"__esModule",{value:!0});var Kt=Qe.default=void 0,Xi=Yi(Tt()),Qi=n;Kt=Qe.default=(0,Xi.default)((0,Qi.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");const Ji=W.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 10px;
    padding: 24px 0 24px 13px;
    width: 280px;
    height: 188px;
    box-shadow: 0 4px 4px 0 rgba(64, 123, 255, 0.3);
    background: #fff;

    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;

    @media screen and (min-width: 768px) {
        padding-left: 16px;
        width: 292px;
        height: 188px;
    }

    @media screen and (min-width: 1440px) {
        width: 292px;
        height: 188px;
    }
`;W.div`
    // position: fixed;
        // left: ${e=>e.x}px;
        // top: ${e=>e.y}px;

    div {
        display: flex;
        flex-direction: column;
        gap: 16px;
        border-radius: 10px;
        padding: 24px 0 24px 13px;
        width: 280px;
        height: 188px;
        box-shadow: 0 4px 4px 0 rgba(64, 123, 255, 0.3);
        background: #fff;

        font-weight: 400;
        font-size: 16px;
        line-height: 1.25;

        @media screen and (min-width: 768px) {
            padding-left: 16px;
            width: 292px;
            height: 188px;
        }

        @media screen and (min-width: 1440px) {
            width: 292px;
            height: 188px;
        }
    }

`;const er=W.p`
    margin: 0; // todo
    color: #407bff; // todo
`,We=W.p`
    margin: 0;
    color: #2f2f2f;

    span {
        margin-left: 6px;
        font-weight: 500;
        font-size: 18px;
        line-height: 1.33333;
        color: #407bff;
    }
`,tr=({dayInfo:e})=>{const{data:t,dailyNorma:o,percentage:i,totalRecords:s}=e;return n.jsxs(Ji,{children:[n.jsx(er,{children:fe(t,"dd, MMMM")}),n.jsxs(We,{children:["Daily norma:",n.jsxs("span",{children:[o," L"]})]}),n.jsxs(We,{children:["Fulfillment of the daily norm:",n.jsxs("span",{children:[i,"%"]})]}),n.jsxs(We,{children:["How many servings of water:",n.jsx("span",{children:s})]})]})},nr=W.div`
    width: 264px;
    background-color: var(--background-tracker);

    @media screen and (min-width: 768px) {
        min-width: 656px;
    }

    @media screen and (min-width: 1440px) {
        min-width: 538px;
    }
`,or=W.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    h2 {
        font-weight: 500;
        line-height: var(line-height);

        font-size: 24px;

        color: var(--text);
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 24px;

        h2 {
            font-size: 26px;
            line-height: 1.2;
        }
    }
`,ir=W.div`
    display: flex;
    align-items: center;
    gap: 12px;

    font-size: var(font-size);
    font-weight: 400;
    line-height: var(line-height);

    color: var(--text-blue);
`,rr=W.span`
min-width: 118px;
    text-align: center;
`,kt=W.button`
    border: none;
    padding: 0;

    color: inherit;
    background-color: transparent;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        color: #7FAAFD; // todo
    }
`,Et=W.div`
    svg {
        color: ${e=>e.isCurrentMonth?"transparent":"inherit"};
        width: 14px;
        height: 14px;
    }
`,sr=W.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 50px);
    justify-content: space-between;
    align-items: center;
    gap: 26px;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: ${e=>e.lastDayNumber===31?"repeat(4, 50px)":"repeat(3, 50px)"};
        gap: 20px;
    }
    @media screen and (min-width: 1440px) {
        gap: 20px;
    }
`,ar=W.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    width: 32px;
    height: 52px;

    font-weight: var(font-weight);

    color: #7FAAFD;
`,lr=W.button`
    width: 32px;
    height: 32px;
    padding: 7px 6px;
    border: 1px solid ${({percentage:e})=>e===100?"var(--background)":"var(--orange-color)"};
    border-radius: 20px;
    font-size: 14px;
    line-height: 1.28;

    color: var(--text);
    background: ${({isToday:e})=>e?"#7FAAFD":"var(--background)"}; // todo

    @media screen and (min-width: 768px) {
        width: 34px;
        height: 34px;
        padding: 7px;

        font-size: vat(font-size);
        line-height: var(line-height);
    }
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`,cr=W.p`
    font-size: 10px;
    line-height: 1.6;

    color: var(--text-passowrd);

    @media screen and (min-width: 768px) {
        font-size: 13px;
        line-height: 1.5;
    }

    @media screen and (min-width: 1440px) {
        font-size: 12px;
    }
`,dr=()=>{const e=de(),[t,o]=p.useState(new Date),[i,s]=p.useState(!0),[r,a]=p.useState(null),[c,d]=p.useState(null),{monthStats:u,waterRecords:h}=Re(),g=!!r,x=Lo("(min-width:768px)"),b=Ae(t),f=ze(t),y=kn({start:b,end:f}),P=f.getDate(),S=p.useMemo(()=>y.map(m=>{const M=fe(m,"yyyy-MM-dd");return{day:En(m),isToday:jn(m),fullDate:M}}),[y]),_=()=>{o(m=>Ae(dt(m,-1)))},v=()=>{o(m=>{const M=dt(m,1);return ze(M)})},E=m=>{const M=m.target.value,w=F(u,M);d(w),a(m.currentTarget)},j=()=>{a(null)};p.useEffect(()=>{const m=new Date,M=Ae(m),w=ze(m);s(Sn(t,{start:M,end:w}))},[t]),p.useEffect(()=>{e(un(fe(t,"yyyy-MM-dd")))},[e,t]);const F=(m,M)=>{const[w]=m.filter(D=>D.date===M);if(w){const D=(w.percentage/10).toFixed(1)*10>100?100:(w.percentage/10).toFixed(1)*10;return{data:t,dailyNorma:D===0?1.5:w.dailyNorma/1e3,percentage:fe(t,"yyyy-MM-dd")===M?h.percentageOfWaterConsumption:D,totalRecords:w.totalRecords}}else return{data:t,dailyNorma:1.5,percentage:0,totalRecords:0}};return n.jsxs(nr,{children:[n.jsxs(or,{children:[n.jsx("h2",{children:"Month"}),n.jsxs(ir,{children:[n.jsx(kt,{onClick:_,children:n.jsx(Et,{children:n.jsx(Kt,{})})}),n.jsx(rr,{children:fe(t,"MMMM yyyy")}),n.jsx(kt,{onClick:v,disabled:i,children:n.jsx(Et,{isCurrentMonth:i,children:n.jsx(qt,{})})})]})]}),n.jsx(sr,{lastDayNumber:P,children:S.map(m=>{const M=F(u,m.fullDate);return n.jsxs(ar,{children:[n.jsx(lr,{percentage:M.percentage,isToday:m.isToday,"aria-owns":g?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:E,onMouseLeave:j,value:m.fullDate,children:m.day}),n.jsxs(cr,{children:[M.percentage,"%"]})]},m.day)})}),n.jsx(Vi,{id:"mouse-over-popover",sx:{pointerEvents:"none"},open:g,anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:x?"left":"center"},onClose:j,disableRestoreFocus:!0,children:n.jsx(tr,{dayInfo:c})})]})};l.div`
  background-color: #ecf2ff;
  padding: 32px 24px 32px 24px;
  border-radius: 10px;
  margin-top: 40px;
  width: 280px;
  height: 836px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 14px 0px #407bff4d;

  @media (min-width: 768px) {
    width: 1000px;
    height: 688px;
  }
  @media (min-width: 1440px) {
    width: 1000px;
    height: 688px;
    position: absolute;
    top: 80px;
    left: 32px;
  }
`;const pr=l.div`
  width: 264px;
  height: 258px;
  margin: 0 auto;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 656px;
    height: 260px;
  }
  @media (min-width: 1440px) {
    width: 544px;
    height: 260px;
    position: relative;
  }
`,ur=l.p`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  text-align: left;
  margin: 0;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,xr=l.div`
  width: 264px;
  position: relative;
  margin-bottom: 12px;

  max-height: 180px;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 4px;
    height: 170px;
  }
  ::-webkit-scrollbar-track {
    background: #d7e3ff;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #9ebbff;
    border-radius: 8px;
  }
  scrollbar-width: thin;
  scrollbar-color: #9ebbff #d7e3ff;

  @media (min-width: 768px) {
    max-height: 176px;
    width: 656px;
    }
    @media (min-width: 1440px){
        width: 544px;
    }
`,hr=l.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
`,fr=l.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
border-bottom:1px #d7e3ff solid;
  padding-right: 4px;
  line-height: 26px;

  height:48px;
  gap: 38px;

   
  
  @media (min-width: 768px) {
    line-height: 36px;
    gap: 390px;

  }
  @media (min-width: 1158px) {
    gap: 278px;
  
  }
`,mr=l.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,Yt=l.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding-top: 1px;
  padding-bottom: 1px;
  @media (min-width: 768px) {
    gap: 16px;
  }
`,gr=l.div`
  display: flex;
  gap: 18px;
  align-items: center;
  `,br=l.div`
  display: flex;
  width: 26px;
  height: 26px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
  //
`,vr=l.button`

  display: flex;
  align-items: center;
  width: 16px;
  height: 19px;
  margin: 0;
  padding: 0;
  color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  justify-content: center;
  transition: border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover{
    border-bottom:1px #9EBBFF solid;
}
  &:active {
    cursor: pointer;
  }
`,wr=l.button`

  display: flex;
  align-items: center;
  width: 16px;
  height: 19px;
  margin: 0;
  padding: 0;
  color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  justify-content: center;
  transition: border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover{
    border-bottom:1px #EF5050 solid;
}
  &:active {
    cursor: pointer;
  }
`,yr=l.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #407bff;
`,kr=l.time`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #2f2f2f;
`,Er=l.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 97px;
  height: 20px;
  margin: 0;
  justify-content: space-between;
  padding: 0;
  color: transparent;
  border: none;
   outline: none;
  background-color: transparent;
stroke:#407BFF;
color:#407BFF;

transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
   color:#FF9D43;
   stroke:#FF9D43;
 cursor: pointer;
  }

  &:active {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    height: 24px;
    width: 114px;
  }
`,jr=l.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover{stroke:#FF9D43;}
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,Sr=l.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: current-color;
  transition: color cubic-bezier(0.4, 0, 0.2, 1);

  &:hover{color:#FF9D43;}
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`,Cr=e=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,fill:"none",...e,children:n.jsx("path",{stroke:"#9EBBFF",strokeLinecap:"round",strokeLinejoin:"round",d:"M10.241 1.991 11.366.866a1.25 1.25 0 0 1 1.768 1.768l-7.08 7.08a3 3 0 0 1-1.264.753L3 11l.533-1.79a3 3 0 0 1 .754-1.265l5.954-5.954Zm0 0L12 3.75m-1 4.583V11.5A1.5 1.5 0 0 1 9.5 13h-7A1.5 1.5 0 0 1 1 11.5v-7A1.5 1.5 0 0 1 2.5 3h3.167"})}),Tr=e=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:14,fill:"none",...e,children:n.jsx("path",{stroke:"#EF5050",strokeLinecap:"round",strokeLinejoin:"round",d:"m7.827 5-.231 6m-3.192 0-.23-6m6.645-2.14c.228.035.454.071.681.11m-.681-.11-.712 9.255A1.5 1.5 0 0 1 8.61 13.5H3.389a1.5 1.5 0 0 1-1.496-1.385L1.181 2.86m9.638 0A32.071 32.071 0 0 0 8.5 2.595m-7.319.265c-.228.034-.454.07-.681.11m.681-.11c.77-.116 1.543-.205 2.319-.265m5 0v-.61c0-.787-.607-1.443-1.393-1.468a34.642 34.642 0 0 0-2.214 0C4.107.542 3.5 1.2 3.5 1.985v.61m5 0a32.446 32.446 0 0 0-5 0"})}),Mr=e=>n.jsx(vr,{type:"button",children:e.children}),Xt=e=>n.jsx(br,{children:e.children}),Pr=e=>n.jsx(wr,{type:"button",children:e.children}),Rr=e=>n.jsxs("svg",{width:17,height:22,fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[n.jsx("path",{d:"m.522.26 1.544 21.42v.06h13.298L16.91.327V.26H.522ZM14.818 21.14H2.617L1.458 5.095h.637l1.048 14.14c.006.074.04.143.093.194.054.051.125.08.198.08h.025a.287.287 0 0 0 .2-.1.296.296 0 0 0 .071-.216L2.683 5.095h13.293l-1.158 16.044Zm1.2-16.644H2.637l-.23-3.126a.306.306 0 0 0-.1-.198.297.297 0 0 0-.205-.077.299.299 0 0 0-.2.105.307.307 0 0 0-.07.216l.23 3.084h-.646L1.154.857H16.28l-.263 3.638Z",fill:"#407BFF"}),n.jsx("path",{d:"M5.23 8.062a.96.96 0 0 0 .538-.166.997.997 0 0 0 .147-1.513.965.965 0 0 0-1.056-.213.973.973 0 0 0-.436.362.994.994 0 0 0 .121 1.242.963.963 0 0 0 .686.288Zm0-1.371a.378.378 0 0 1 .352.24.393.393 0 0 1-.082.422.38.38 0 0 1-.653-.274.39.39 0 0 1 .112-.274.38.38 0 0 1 .27-.114ZM5.225 11.258a.993.993 0 0 0 .17.544.957.957 0 0 0 1.491.134.988.988 0 0 0 .202-1.072.98.98 0 0 0-.359-.439.96.96 0 0 0-1.434.454.996.996 0 0 0-.07.38Zm1.348 0a.392.392 0 0 1-.236.358.377.377 0 0 1-.416-.084.39.39 0 0 1 .27-.661.38.38 0 0 1 .27.113.39.39 0 0 1 .112.274ZM12.115 11.283a.96.96 0 0 0 .538-.165.997.997 0 0 0 .147-1.513.965.965 0 0 0-1.056-.214.972.972 0 0 0-.435.363.993.993 0 0 0 .12 1.241.962.962 0 0 0 .686.288Zm0-1.367a.379.379 0 0 1 .353.24.393.393 0 0 1-.085.424.38.38 0 0 1-.65-.28.39.39 0 0 1 .113-.272.38.38 0 0 1 .269-.112ZM8.738 9.429a.96.96 0 0 0 .538-.166.997.997 0 0 0 .147-1.513.965.965 0 0 0-1.056-.213.973.973 0 0 0-.435.362.994.994 0 0 0 .12 1.242.963.963 0 0 0 .686.288Zm0-1.371a.378.378 0 0 1 .353.24.393.393 0 0 1-.083.421.38.38 0 0 1-.652-.274.393.393 0 0 1 .23-.377c.048-.02.1-.031.152-.03v.02ZM6.89 15.005a.82.82 0 0 0 .144.445.803.803 0 0 0 .825.328.797.797 0 0 0 .405-.227.816.816 0 0 0 .164-.883.811.811 0 0 0-.295-.361.793.793 0 0 0-.443-.136.816.816 0 0 0-.568.252.84.84 0 0 0-.233.582Zm.8-.217a.212.212 0 0 1 .198.134.22.22 0 0 1-.047.236.213.213 0 0 1-.233.047.215.215 0 0 1-.131-.2c0-.058.022-.113.062-.154a.212.212 0 0 1 .151-.063ZM10.763 14.1a.814.814 0 0 0 .781-.498.844.844 0 0 0-.168-.92.818.818 0 0 0-.906-.181.825.825 0 0 0-.369.315.842.842 0 0 0 .107 1.038c.147.15.346.24.555.247Zm0-1.029c.057 0 .111.023.151.064a.218.218 0 0 1 0 .306.212.212 0 0 1-.303 0 .222.222 0 0 1-.065-.153.22.22 0 0 1 .064-.155.214.214 0 0 1 .153-.062ZM12.456 7.374a.813.813 0 0 0 .456-.14.845.845 0 0 0 .124-1.282.818.818 0 0 0-.895-.181.825.825 0 0 0-.368.307.842.842 0 0 0 .102 1.052.816.816 0 0 0 .58.244Zm0-1.029a.21.21 0 0 1 .187.035.215.215 0 0 1 .085.173.218.218 0 0 1-.085.173.212.212 0 0 1-.187.036.21.21 0 0 1-.25-.112.218.218 0 0 1 .152-.31.21.21 0 0 1 .098.005ZM4.424 20.093a.297.297 0 0 0-.17.3c.003.04.015.08.035.117a.304.304 0 0 0 .263.162.275.275 0 0 0 .131-.029 8.86 8.86 0 0 1 4.055-1c1.492.022 2.964.358 4.322.988a.292.292 0 0 0 .336-.044.301.301 0 0 0 .074-.336.307.307 0 0 0-.156-.166 11.207 11.207 0 0 0-4.576-1.042 9.43 9.43 0 0 0-4.314 1.05Z",fill:"#407BFF"})]}),Dr=e=>n.jsxs("svg",{width:23,height:30,fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[n.jsx("path",{d:"M.261.13 2.4 29.79v.08h18.412L22.951.224V.13H.26ZM20.056 29.04H3.162L1.558 6.824h.882l1.45 19.578c.009.103.055.199.13.27.074.07.172.11.274.11h.034a.401.401 0 0 0 .356-.279.415.415 0 0 0 .02-.159L3.252 6.824H21.66l-1.604 22.215Zm1.66-23.046H3.19l-.318-4.328a.423.423 0 0 0-.137-.274.412.412 0 0 0-.284-.107.413.413 0 0 0-.276.146.425.425 0 0 0-.1.299l.319 4.27h-.893L1.137.956h20.944l-.364 5.037Z",fill:"#407BFF"}),n.jsx("path",{d:"M6.78 10.932c.265 0 .525-.08.745-.23.221-.149.393-.362.495-.61a1.38 1.38 0 0 0-.291-1.485 1.325 1.325 0 0 0-1.463-.295 1.347 1.347 0 0 0-.603.502 1.376 1.376 0 0 0 .167 1.72c.252.255.594.398.95.398Zm0-1.898a.524.524 0 0 1 .488.331.544.544 0 0 1-.114.585.527.527 0 0 1-.903-.38.54.54 0 0 1 .155-.38c.099-.1.233-.156.374-.156ZM6.774 15.358c.003.269.085.53.235.752.15.222.36.394.607.494a1.325 1.325 0 0 0 1.457-.309 1.38 1.38 0 0 0 .28-1.484 1.358 1.358 0 0 0-.497-.607 1.33 1.33 0 0 0-1.697.182 1.363 1.363 0 0 0-.385.972Zm1.865 0a.542.542 0 0 1-.326.495.522.522 0 0 1-.577-.116.539.539 0 0 1 .375-.916c.14 0 .274.057.374.157.099.1.155.237.155.38ZM16.313 15.392c.265 0 .525-.08.746-.23.22-.149.392-.361.494-.61a1.38 1.38 0 0 0-.29-1.484 1.325 1.325 0 0 0-1.463-.295 1.347 1.347 0 0 0-.603.501 1.376 1.376 0 0 0 .167 1.72c.251.255.593.398.949.398Zm0-1.892a.524.524 0 0 1 .49.332.543.543 0 0 1-.118.586.527.527 0 0 1-.901-.387.54.54 0 0 1 .157-.376.525.525 0 0 1 .372-.155ZM11.637 12.825c.266 0 .525-.08.746-.23.22-.15.393-.362.495-.611a1.38 1.38 0 0 0-.292-1.484 1.326 1.326 0 0 0-1.463-.295 1.346 1.346 0 0 0-.602.501 1.376 1.376 0 0 0 .167 1.72c.252.255.593.399.95.399Zm0-1.899a.524.524 0 0 1 .489.332.543.543 0 0 1-.115.584.527.527 0 0 1-.576.117.53.53 0 0 1-.327-.496.546.546 0 0 1 .145-.398.528.528 0 0 1 .384-.168v.03ZM9.078 20.545c.005.221.075.436.2.617s.3.321.504.402a1.093 1.093 0 0 0 1.199-.262 1.13 1.13 0 0 0 .228-1.223 1.122 1.122 0 0 0-.409-.5 1.097 1.097 0 0 0-.613-.188 1.13 1.13 0 0 0-.786.348 1.163 1.163 0 0 0-.323.806Zm1.109-.3a.293.293 0 0 1 .273.185.304.304 0 0 1-.064.327.295.295 0 0 1-.322.065.297.297 0 0 1-.183-.277c0-.08.031-.156.087-.212a.294.294 0 0 1 .209-.088ZM14.441 19.293c.228.008.453-.054.646-.177s.345-.302.436-.514a1.17 1.17 0 0 0-.234-1.274 1.132 1.132 0 0 0-1.254-.25c-.21.09-.387.242-.51.437a1.166 1.166 0 0 0 .147 1.436c.204.21.48.332.77.342Zm0-1.425c.079 0 .154.031.21.088a.303.303 0 0 1 0 .424.294.294 0 0 1-.42 0 .308.308 0 0 1-.091-.212.305.305 0 0 1 .089-.215.294.294 0 0 1 .212-.085ZM16.785 9.98c.225 0 .445-.068.632-.194a1.15 1.15 0 0 0 .42-.518 1.17 1.17 0 0 0-.247-1.258 1.133 1.133 0 0 0-1.24-.25 1.142 1.142 0 0 0-.51.425 1.166 1.166 0 0 0 .14 1.457c.214.216.503.338.805.338Zm0-1.425a.292.292 0 0 1 .346.154.304.304 0 0 1-.087.374.294.294 0 0 1-.259.049.292.292 0 0 1-.346-.155.304.304 0 0 1 .087-.373.294.294 0 0 1 .26-.05ZM5.665 27.59a.41.41 0 0 0-.218.247.421.421 0 0 0 .03.33.419.419 0 0 0 .364.225.382.382 0 0 0 .182-.04 12.27 12.27 0 0 1 5.614-1.385c2.067.03 4.104.496 5.984 1.368a.405.405 0 0 0 .465-.061.416.416 0 0 0 .104-.464.425.425 0 0 0-.216-.231 15.518 15.518 0 0 0-6.337-1.443c-2.076.002-4.122.5-5.972 1.454Z",fill:"#407BFF"})]}),Fr=e=>n.jsx("svg",{width:10,height:10,fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:n.jsx("path",{d:"M5 1v8m4-4H1",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})});l.div`
position: fixed;
top: 0;
left: 0;
z-index: 90;

width: 100%;
height: 100%;

display: flex;
justify-content: center;
align-items: center;

background: rgba(0, 0, 0, 0.8);

ovrflow:auto;
`;const Br=l.div`
position:fixed;
top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
width: 280px;
height: 648px;
padding: 24px 12px 24px 12px;
border-radius: 10px;
z-index: 100;
box-shadow: 0px 4px 8px 0px #407BFF33;
background-color: #fff;

@media (min-width: 768px){
  max-height: 580px;
  width: 704px;
  padding: 32px 24px 32px 24px;
  }
  @media (min-width: 1440px){
    width: 592px;
}
`,Qt=l.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,Nr=l.div`
display: flex;
-webkit-box-pack: justify;

flex-direction:column;
color: rgb(47, 47, 47);

gap:24px;
margin-top:24px;
@media (min-width: 768px){
  margin-top:24px;
  }
  @media (min-width: 1158px){}
  
`,_r=l.div`
width: 256px;
height: 52px;
padding: 8px 24px 8px 24px;
border-radius: 10px;
align-items: center;
background-color:#ECF2FF;
display:flex;
gap:12px;
@media (min-width: 768px){
  width: 254px;
   }
`,zr=l.p`
font-size: 18px;
font-weight: 400;
line-height: 24px;
text-align: left;
color:#407BFF;
`,Ar=l.p`

font-size: 12px;
font-weight: 400;
line-height: 24px;
text-align: left;

`;l.div`
display:flex;
gap:12px;
align-items:center;
padding-top:1px;
padding-bottom:1px;
@media (min-width: 768px){
   gap:16px;
    }`;const Or=l.p`
font-size: 18px;
font-weight: 500;
line-height: 20px;
text-align: left;
margin-bottom:16px;
`,He=l.p`
font-size: 16px;
font-weight: 400;
line-height: 20px;
text-align: left;
margin-bottom:12px;
`,Ir=l.div`
display:flex;
flex-direction:column;
gap:24px;
align-items: center;
@media (min-width: 768px){
  flex-direction:row;
  justify-content: flex-end;
  }
`,Lr=l.button`
width: 256px;
height: 36px;
padding: 8px 30px 8px 30px;
border-radius: 10px;
opacity: 0px;
background-color: rgb(64, 123, 255);
box-shadow: 0px 4px 8px 0px #407BFF57;
border:none;
color:white;
transition:  box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover {
  box-shadow: 0px 4px 14px 0px #407BFF8A;
}

&:active {
  background: #407bff;
  cursor: pointer;
}

  @media (min-width: 768px){
    width: 160px;
    height: 44px;
      } 
  
`,$r=l.div`
position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 280px;
    height: 288px;
    padding: 32px 24px 32px 24px;
    border-radius: 10px;
    z-index: 100;
    box-shadow: 0px 4px 8px 0px #407BFF33;
    background-color: #fff;
      @media (min-width: 768px){
      width: 592px;
      height: 208px;
          }  
        @media (min-width: 1158px){
       
        }
   
`,Jt=l.p`
font-family: Roboto;
font-size: 26px;
font-weight: 500;
line-height: 32px;
text-align: left;

`,Wr=l.p`
font-size: 18px;
font-weight: 500;
line-height: 20px;
text-align: left;
margin-top:24px;
`,Hr=l.div`
display:flex;
flex-direction:column;
gap:24px;
margin-top:24px;
@media (min-width: 768px){
  flex-direction:row;
  justify-content: flex-end;
    }  
    @media (min-width: 1158px){
    
    }`,Ur=l.button`
width: 232px;
height: 36px;
padding: 8px 30px 8px 30px;
border-radius: 10px;
opacity: 0px;
background-color:#EF5050;
box-shadow: 0px 4px 8px 0px #407BFF57;
border:none;
transition:  box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover {
  box-shadow: 0px 4px 14px 0px #407BFF8A;
}

&:active {
  background: #407bff;
}
@media (min-width: 768px){
  width: 160px;
  height: 44px;
    }  
`,Zr=l.button`
width: 232px;
height: 36px;
padding: 8px 30px 8px 30px;
border-radius: 10px;
opacity: 0px;
background-color:#D7E3FF;
border:none;
transition:  box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover {
  box-shadow: 0px 4px 14px 0px #407BFF8A;
 }


@media (min-width: 768px){
  width: 160px;
  height: 44px;
    } 
`,Vr=l.p`
font-size: 16px;
font-weight: 500;
line-height: 20px;
text-align: center;
color:#FFFFFF;

`,Gr=l.p`
font-size: 16px;
font-weight: 500;
line-height: 20px;
text-align: center;
color:#407BFF;

`,qr=({isOpen:e,onClose:t,recordData:o})=>{const{amountWater:i,date:s,_id:r}=o,a=de(),[c,d]=p.useState(i),[u,h]=p.useState(y()),g=()=>{d(w=>w+50)},x=()=>{c>=50&&d(w=>w-50)},b=()=>{const[w,D]=u.split(":"),I=new Date;I.setUTCHours(w,D);const z=I.toISOString();a(xn({id:r,amountWater:c,date:z})),a(ve(!0)),t(),h(y())},f=w=>{const D=parseInt(w.target.value);d(D)};function y(){const w=new Date(s),D=w.getUTCHours().toString().padStart(2,"0"),I=w.getUTCMinutes().toString().padStart(2,"0");return`${D}:${I}`}if(p.useEffect(()=>{const w=D=>{D.key==="Escape"&&t()};return e&&document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[e,t]),e===!1)return null;const _=o.date.toLocaleString(),v=new Date(_),E=v.getUTCHours(),j=v.getUTCMinutes(),F=j<10?"0"+j:j,m=E<10?"0"+E:E,M=E>=12?"PM":"AM";return n.jsxs(Br,{children:[n.jsxs(Qt,{children:[n.jsx(Jt,{children:"Edit the entered amount of water"}),n.jsx(Ye,{onClick:t,children:n.jsx(Ke,{})})]}),n.jsxs(Nr,{children:[n.jsxs(_r,{children:[n.jsx(Xt,{children:n.jsx(Dr,{})}),n.jsxs(Yt,{children:[n.jsxs(zr,{children:[i," ml"]}),n.jsxs(Ar,{children:[m,":",F," ",M]})]})]}),n.jsxs("div",{children:[n.jsx(Or,{children:"Correct entered data:"}),n.jsx(He,{children:"Amount of water:"}),n.jsxs(Dt,{children:[n.jsx(Ft,{onClick:x,children:n.jsx(Pt,{})}),n.jsx(Nt,{children:n.jsxs(_t,{children:[c," ml"]})}),n.jsx(Bt,{onClick:g,children:n.jsx(Rt,{})})]})]}),n.jsxs("div",{children:[n.jsx(He,{children:"Recording time:"}),n.jsx(zt,{type:"time",step:300,value:u,onChange:w=>h(w.target.value)})]}),n.jsxs("div",{children:[n.jsx(He,{children:"Enter the value of the water used:"}),n.jsx(At,{type:"number",value:c,onChange:f})]}),n.jsxs(Ir,{children:[n.jsxs(Ot,{children:[c," ml"]}),n.jsx(Lr,{onClick:b,children:"Save"})]})]})]})},Kr=({isOpen:e,onClose:t,recordData:o})=>{const i=de();if(p.useEffect(()=>{const r=a=>{a.key==="Escape"&&t()};return e&&document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[e,t]),e===!1)return null;const s=()=>{const r=o._id;i(hn(r)),i(ve(!0)),t()};return n.jsx("div",{children:n.jsxs($r,{children:[n.jsxs(Qt,{children:[n.jsx(Jt,{children:"Delete entry"}),n.jsx(Ye,{onClick:t,children:n.jsx(Ke,{})})]}),n.jsx(Wr,{children:"Are you sure you want to delete the entry?"}),n.jsxs(Hr,{children:[n.jsx(Ur,{children:n.jsx(Vr,{onClick:s,children:"Delete"})}),n.jsx(Zr,{onClick:t,children:n.jsx(Gr,{children:"Cancel"})})]})]})})},Yr=()=>{const[e,t]=p.useState(!1),[o,i]=p.useState(!1),[s,r]=p.useState(!1),[a,c]=p.useState(null),{waterRecords:d}=Re().waterRecords,u=()=>{t(!0)},h=()=>{t(!1)},g=S=>{c(S),i(!0)},x=()=>{i(!1)},b=S=>{r(!0),c(S)},f=()=>{r(!1)},y=()=>{if(!(!d||d.length===0))return d.map(S=>{const E=S.date.toLocaleString(),j=new Date(E),F=j.getUTCHours(),m=j.getUTCMinutes(),M=m<10?"0"+m:m,w=F<10?"0"+F:F;return n.jsxs(fr,{children:[n.jsxs(mr,{children:[n.jsx(Xt,{children:n.jsx(Rr,{})}),n.jsxs(Yt,{children:[n.jsxs(yr,{children:[S.amountWater," ml"]}),n.jsxs(kr,{children:[w,":",M]})]})]}),n.jsxs(gr,{children:[n.jsx(Mr,{children:n.jsx(Cr,{onClick:()=>g(S)})}),n.jsx(Pr,{children:n.jsx(Tr,{onClick:()=>b(S)})})]})]},S._id)})},P=()=>n.jsx(xr,{children:n.jsx(hr,{children:n.jsx(y,{})})});return n.jsxs("div",{children:[e&&n.jsx(Ee,{onClick:h}),o&&n.jsx(Ee,{onClick:x}),s&&n.jsx(Ee,{onClick:f}),n.jsxs(pr,{children:[n.jsx(ur,{children:"Today"}),n.jsx(P,{}),n.jsxs(Er,{onClick:u,children:[n.jsx(jr,{children:n.jsx(Fr,{})}),n.jsx(Sr,{children:"Add water"})]})]}),o&&n.jsx(qr,{isOpen:o,onClose:x,recordData:a}),n.jsx(It,{isOpen:e,onClose:h}),s&&n.jsx(Kr,{isOpen:s,onClose:f,recordData:a})]})},Xr="/fs-92-react-node-BekhUriy/assets/Bubbles_bg_main_desk-ffd148af.svg",Qr="/fs-92-react-node-BekhUriy/assets/Bubbles_bg_home_tablet-f54d97ba.svg",Jr="/fs-92-react-node-BekhUriy/assets/Bubbles_bg_home_mob-0163f2d5.svg",es=l.div`
  // position: relative;
  background-position: center 28px;
  background-image: url(${Jr});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: url(${Qr});
    background-position: center 0px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${Xr});
    background-size: 100%;
    background-size: contain;
    background-repeat: repeat;
  }
`,ts=l.section`
  // // padding: 24px 20px 40px;
  // background-position: center center;
  // // додати сюди зображення
  // background-size: contain;
  // background-repeat: no-repeat;
  // width: 100%;
  // width: 1216px;

`,ns=l.div`
display: flex;
flex-direction: column;
padding: 24px 20px 40px;
align-items: center;
gap: 40px;

@media screen and (min-width: 7680px){
  padding: 40px 32px 44px;
  gap: 40px;
}
@media screen and (min-width: 1440px) {
  flex-direction: row;
  justify-content: center;
  padding: 20px 112px 40px;
  gap: 32px;
  min-width: 1216px;



  // height: 92vh;
`,os=l.div`
  gap: 16px;
  
  @media screen and (min-width: 768px) {
    // padding: 0 24px;
    width: 704px;
    // width: 100%;
    // height: 688px;
    overflow: hidden;
    
  }
`,is=l.div`
  padding: 24px 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 280px;
  max-width: 100%

  border-radius: 10px;
  background: var(--background-tracker);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    width: 704px;
    height: 688px;
  }
  @media only screen and (min-width: 1440px) {
    // margin: auto;
    min-width: 592px;
    height: 680px;
    padding: 32px 24px;
    align-items: center;
  }
`,as=()=>{const e=de(),t=Re().forceRender;return p.useEffect(()=>{e(fn()),e(mn()),t&&e(ve(!1))},[t,e]),n.jsx(es,{children:n.jsx(ts,{children:n.jsxs(ns,{children:[n.jsxs(os,{children:[n.jsx(Ao,{}),n.jsx(qn,{})]}),n.jsxs(is,{children:[n.jsx(Yr,{}),n.jsx(dr,{})]})]})})})};export{as as default};
