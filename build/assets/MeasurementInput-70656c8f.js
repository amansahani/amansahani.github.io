import{j as f,r as s,ag as l,af as r,M as u}from"./index-ed88989a.js";import{g as I,b as m,c as o,d as g,C as k,e as b,L as S,m as x}from"./L1ControlledNumber-9a2b012a.js";function C(e){const[n,d]=e.stateHook,a=["select",I(e),m(e),o(e),g(e)];return f.jsx("div",{className:a.join(" "),children:f.jsx("select",{defaultValue:n,onChange:t=>d(t.target.value),id:e.id,"data-testid":e.id,children:e.choices.map(t=>f.jsx("option",{children:t},t))})})}function h(e){return{dangerIf:e.dangerIf??l,infoIf:e.infoIf??l,linkIf:e.linkIf??l,loadingIf:e.loadingIf??l,primaryIf:e.primaryIf??l,successIf:e.successIf??l,warningIf:e.warningIf??l,id:e.id??r(),rounded:e.rounded??!1,size:e.size??"normal",stateHook:e.stateHook,...b(e)}}function y(e){const[n,d]=e.stateHook,[a,t]=s.useState(e.makeString(n));return s.useEffect(()=>{d(e.fromString(a))},[a]),s.useEffect(()=>{t(e.makeString(n))},[n]),f.jsx(k,{expanded:e.expanded,skipControl:e.skipControl,children:f.jsx(C,{id:e.id,choices:e.choices,dangerIf:e.dangerIf,infoIf:e.infoIf,linkIf:e.linkIf,primaryIf:e.primaryIf,successIf:e.successIf,warningIf:e.warningIf,loadingIf:e.loadingIf,rounded:e.rounded,size:e.size,stateHook:[a,t]})})}function N(e){const n={dangerIf:e.dangerIf,expanded:!1,id:e.selectId,infoIf:e.infoIf,linkIf:e.linkIf,loadingIf:e.loadingIf,primaryIf:e.primaryIf,rounded:e.rounded,size:e.size,stateHook:e.stateHook,successIf:e.successIf,warningIf:e.warningIf},d={dangerIf:e.dangerIf,delay:e.numberDelay,disabledIf:e.numberDisabledIf,expanded:e.expanded,id:e.numberId,infoIf:e.infoIf,linkIf:e.linkIf,loadingIf:e.loadingIf,primaryIf:e.primaryIf,readonly:e.numberReadonly,roundTo:e.numberRoundTo,rounded:e.rounded,size:e.size,stateHook:e.stateHook,static:e.numberStatic,successIf:e.successIf,warningIf:e.warningIf};return f.jsxs("div",{className:"field has-addons",children:[f.jsx(S,{fromNumber:e.fromNumber,makeNumber:e.makeNumber,...x(d),skipControl:!0}),f.jsx(y,{choices:e.choices,fromString:e.fromString,makeString:e.makeString,...h(n),skipControl:!0})]})}function H(e){const[n,d]=e.stateHook,[a,t]=s.useState(n.to(e.defaultUnit??n.units()));return s.useEffect(()=>{e.numberDisabledIf?.()&&t(n.to(a.units()))},[n]),s.useEffect(()=>{e.numberDisabledIf?.()||d(a)},[a]),f.jsx(N,{...(({stateHook:i,...c})=>c)(e),stateHook:[a,t],fromNumber:i=>new u(i,u.clarifyUnit(n.units())),makeNumber:i=>i.scalar,fromString:i=>e.numberDisabledIf?.()?n.to(i):new u(n.scalar,i),makeString:i=>u.clarifyUnit(i.units()),choices:u.choices(n)})}export{y as L,H as M,N as a,h as m};
