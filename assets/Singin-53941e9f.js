import{r as x,j as s,u as h,b as j,Z as u,B as w}from"./index-579bc625.js";import{c as g,a as t,F as E}from"./index.esm-3a6a1aec.js";import{A as S,T as f,L as l,a as m,I as d,E as p,b as c,C as F,O as y,B as b,N as v}from"./LoginForm.styled-6f29f97e.js";import{C,W as $,B,S as I}from"./Signup.styled-26152879.js";const P=g().shape({email:t().email("Enter a valid email").matches(/^[^\s@]+@[^\s@]+.[^\s@]+$/,"Email is not valid").required("Email is required"),password:t().required("Password is required").min(8,"Enter the correct password")}),q=({handleSubmit:i})=>{const[r,o]=x.useState(!1),n=()=>{o(e=>!e)};return s.jsxs(s.Fragment,{children:[s.jsx(E,{initialValues:{email:"",password:""},validationSchema:P,onSubmit:(e,a)=>{i(e),a.resetForm()},children:({errors:e,touched:a})=>s.jsxs(S,{children:[s.jsx(f,{children:"Sign In"}),s.jsxs(l,{htmlFor:"email",children:[s.jsx(m,{children:"Enter your email"}),s.jsx(d,{$error:e.email&&a.email,name:"email",placeholder:"E-mail"}),s.jsx(p,{name:"email",component:"div",$error:e.email&&a.email})]}),s.jsxs(l,{htmlFor:"password",children:[s.jsx(m,{children:"Enter your password"}),s.jsx(d,{$error:e.password&&a.password,type:r?"text":"password",name:"password",placeholder:"Password"}),s.jsxs("span",{onClick:n,children:[" ",r?s.jsx(c,{children:s.jsx(F,{})}):s.jsx(c,{children:s.jsx(y,{})})]}),s.jsx(p,{name:"password",component:"div",$error:e.password&&a.password})]}),s.jsx(b,{type:"submit",children:"Sign In"})]})}),s.jsx(v,{to:"/signup",children:"Sign Up"})]})},T=h.div`
margin-top: 66px;
@media screen and (min-width: 768px ) {
position: absolute;
top: 40px;
left: 0px;

}
@media screen and (min-width: 1440px) {
  left: auto;
  top: 162px;
  right: 104px;
}
 `,N=()=>{const i=j(),r=()=>{w.info(" Incorrect password or email",{position:"bottom-right",autoClose:3e3,delay:1e3})},o=({email:n,password:e})=>{i(u({email:n,password:e})),r()};return s.jsxs(C,{children:[s.jsxs($,{children:[s.jsx(B,{}),s.jsxs(T,{children:[" ",s.jsx(q,{handleSubmit:o})]})]}),s.jsx(I,{})]})};export{N as default};
