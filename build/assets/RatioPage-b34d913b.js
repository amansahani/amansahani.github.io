import{r,j as t,C as c,b as s,a4 as u,a5 as S,U as P,a6 as R}from"./index-ed88989a.js";import{N as m,S as b}from"./NumberInput-ab658c02.js";import{a as d,S as N,u as v}from"./L1ControlledNumber-9a2b012a.js";import{N as p}from"./NumberOutput-1d47cff7.js";import"./io-df8bba7d.js";function k(e){const[l,a]=e.stateHook,[i,x]=r.useState(e.ratioPair),[n,j]=r.useState(i[0]),[o,g]=r.useState(i[1]);return r.useEffect(()=>{const f=i,h=[n,o];x(h),a(l.replaceInSameSpot(f,h))},[n,o]),t.jsx(t.Fragment,{children:t.jsxs(c,{children:[t.jsx(s,{children:e.label}),t.jsx(s,{children:t.jsx(d,{label:"",children:t.jsx(m,{stateHook:[n,j]})})}),t.jsx(s,{children:t.jsx(d,{label:"",children:t.jsx(m,{stateHook:[o,g]})})})]})})}class C{static getState(){if(u.version===void 0)throw Error("Config did not set version! "+u.url);return N.BumpState(u.version,[S],[])}}function H(){const[e,l]=v(C.getState()),[a,i]=r.useState(e.ratioPairs.calculateNetRatio().asNumber()),[x,n]=r.useState(a===0?0:1/a);return r.useEffect(()=>{i(e.ratioPairs.calculateNetRatio().asNumber())},[e.ratioPairs]),r.useEffect(()=>{n(a===0?0:1/a)},[a]),t.jsxs(t.Fragment,{children:[t.jsx(b,{queryParams:S,state:e,title:u.title}),t.jsxs(c,{desktop:!0,centered:!0,children:[t.jsxs(s,{children:[t.jsxs(c,{children:[t.jsx(s,{children:t.jsx("b",{children:"Stage"})}),t.jsx(s,{children:t.jsx("b",{children:"Driving"})}),t.jsx(s,{children:t.jsx("b",{children:"Driven"})})]}),e.ratioPairs.pairs.map((j,o)=>t.jsx(t.Fragment,{children:t.jsx(k,{label:`Stage ${o}`,ratioPair:j,stateHook:[e.ratioPairs,l.setRatioPairs]})})),t.jsx(P,{color:"primary",onClick:()=>{l.setRatioPairs(new R([...e.ratioPairs.pairs,[1,1]]))},children:"Add Stage"})]}),t.jsx(s,{children:t.jsxs(c,{children:[t.jsx(s,{children:t.jsx(d,{label:"Net Reduction",children:t.jsx(p,{stateHook:[a,i],roundTo:4})})}),t.jsx(s,{children:t.jsx(d,{label:"Net Step-Up",children:t.jsx(p,{stateHook:[x,n],roundTo:4})})})]})})]})]})}function y(){return t.jsx(t.Fragment,{children:t.jsx(H,{})})}export{y as default};
