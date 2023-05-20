import{H as v,L as I,M as r,J as _,R as k,K as A,r as d,j as t,C as q,b as j,O,G as U,e as W,__tla as Y}from"./index-ed88989a.js";import{G as z}from"./Graph-b962b43a.js";import{S as Q,N as X}from"./NumberInput-ab658c02.js";import{S as Z,u as $,a as s}from"./L1ControlledNumber-9a2b012a.js";import{M as C}from"./MeasurementInput-70656c8f.js";import{M as ee,R as te}from"./RatioInput-7ba7bad2.js";import{M as w}from"./MeasurementOutput-fca1a435.js";import{u as E,K as oe}from"./KgKvKaDisplay-94b48dc7.js";import{e as ae,w as re}from"./promise-worker-e6956b4a.js";import{c as ie,a as se,b as le}from"./sharedMath-4842c3fc.js";import{L as ne}from"./readmes-1eff17f1.js";import"./io-df8bba7d.js";let F,me=Promise.all([(()=>{try{return Y}catch{}})()]).then(async()=>{class P{static getState(){if(v.version===void 0)throw Error("Config did not set version! "+v.url);return Z.BumpState(v.version,[I],[])}}function N(e,o,a){return[a.asNumber(),e.quantity].includes(0)?new r(0,"ft/s"):e.freeSpeed.div(a.asNumber()).mul(o).mul(Math.PI).div(new r(360,"deg")).to("ft/s")}function H(e,o,a,i){return[o.scalar].includes(0)?new r(0,"lb"):e.stallTorque.mul(e.quantity).mul(a.asNumber()).mul(i/100).div(o.div(2)).div(r.GRAVITY)}function M(e,o,a,i,l){const c=H(e,o,a,i);if([a.asNumber(),c.scalar].includes(0))return new r(0,"ft/s");const u=e.freeSpeed.div(a.asNumber()),n=u.div(c).mul(l),f=o.mul(Math.PI);return n.add(u).mul(f).div(new r(360,"deg")).to("ft/s")}function b(e,o){return e.lte(new r(0,"ft/s"))?new r(0,"s"):o.div(e).to("s")}function S(e,o,a,i){if([i.asNumber(),e.quantity].includes(0))return new r(0,"A");const l=a.div(i.asNumber()).mul(o).div(2);return e.kT.inverse().mul(l).mul(new r(9.81,"m/s^2")).add(e.freeCurrent.mul(e.quantity)).div(e.quantity)}function V(e,o,a,i,l,c){const u=_.fromDict(e),n=r.fromDict(o),f=r.fromDict(a),D=r.fromDict(i),p=k.fromDict(l),x=.25*p.magnitude,y=2*p.magnitude,T=100,m=(y-x)/T,g=h=>b(M(u,f,h,c,D),n),L=[];for(let h=x;h<y;h=A(m+h)){const R=g(new k(h,p.ratioType));R.scalar>=0&&L.push({x:h,y:Number(R.to("s").scalar.toFixed(4))})}return L}function B(e,o,a,i){const l=_.fromDict(e),c=r.fromDict(o),u=r.fromDict(a),n=k.fromDict(i),f=.25*n.magnitude,D=2*n.magnitude,p=100,x=(D-f)/p,y=m=>S(l,c,u,m),T=[];for(let m=f;m<D;m=A(x+m)){const g=y(new k(m,n.ratioType)).to("A");g.scalar>=0&&T.push({x:m,y:Number(g.scalar.toFixed(4))})}return T}ae({calculateCurrentDraw:S,calculateDragLoad:H,calculateLoadedSpeed:M,calculateTimeToGoal:b,calculateUnloadedSpeed:N,generateCurrentDrawChartData:B,generateTimeToGoalChartData:V});function J(){return new Worker("/assets/linearMath-b55bb9e1.js")}const G=await re(new J);function K(){const[e,o]=$(P.getState()),a=d.useMemo(()=>N(e.motor,e.spoolDiameter,e.ratio),[e.motor,e.spoolDiameter,e.ratio]),i=d.useMemo(()=>M(e.motor,e.spoolDiameter,e.ratio,e.efficiency,e.load),[e.motor,e.spoolDiameter,e.ratio,e.efficiency,e.load]),l=d.useMemo(()=>b(a,e.travelDistance),[e.travelDistance,a]),c=d.useMemo(()=>b(i,e.travelDistance),[e.travelDistance,i]),u=d.useMemo(()=>H(e.motor,e.spoolDiameter,e.ratio,e.efficiency).negate(),[e.motor,e.spoolDiameter,e.ratio,e.efficiency]),n=E([],()=>G.generateTimeToGoalChartData(e.motor.toDict(),e.travelDistance.toDict(),e.spoolDiameter.toDict(),e.load.toDict(),e.ratio.toDict(),e.efficiency),[e.motor,e.travelDistance,e.spoolDiameter,e.load,e.ratio,e.efficiency]),f=E([],()=>G.generateCurrentDrawChartData(e.motor.toDict(),e.spoolDiameter.toDict(),e.load.toDict(),e.ratio.toDict()),[e.motor,e.spoolDiameter,e.load,e.ratio,e.efficiency]),D=d.useMemo(()=>S(e.motor,e.spoolDiameter,e.load,e.ratio),[e.motor,e.spoolDiameter,e.load,e.ratio]),p=d.useMemo(()=>ie(e.motor.stallTorque.mul(e.motor.quantity).mul(e.ratio.asNumber()),e.spoolDiameter.div(2),e.load.mul(e.efficiency/100)),[e.motor.stallTorque,e.motor.quantity,e.efficiency,e.ratio,e.load,e.spoolDiameter]),x=d.useMemo(()=>e.ratio.asNumber()==0?new r(0,"V*s/m"):se(e.motor.freeSpeed.div(e.ratio.asNumber()),e.spoolDiameter.div(2)),[e.motor.freeSpeed,e.spoolDiameter]),y=d.useMemo(()=>le(e.motor.stallTorque.mul(e.motor.quantity).mul(e.ratio.asNumber()).mul(e.efficiency/100),e.spoolDiameter.div(2),e.load),[e.motor.stallTorque,e.motor.quantity,e.efficiency,e.ratio,e.spoolDiameter,e.load]);return t.jsxs(t.Fragment,{children:[t.jsx(Q,{queryParams:I,state:e,title:"Linear Mechanism Calculator"}),t.jsxs(q,{desktop:!0,children:[t.jsxs(j,{children:[t.jsx(s,{label:"Motor",id:"motor",tooltip:"The motors powering the system.",children:t.jsx(ee,{stateHook:[e.motor,o.setMotor]})}),t.jsx(s,{label:"Efficiency (%)",id:"efficiency",tooltip:"The efficiency of the system in transmitting torque from the motors.",children:t.jsx(X,{stateHook:[e.efficiency,o.setEfficiency]})}),t.jsx(s,{label:"Ratio",id:"ratio",tooltip:"The ratio between the motors and the system.",children:t.jsx(te,{stateHook:[e.ratio,o.setRatio]})}),t.jsx(s,{label:"Travel Distance",id:"comLength",tooltip:"How far the system is traveling.",children:t.jsx(C,{stateHook:[e.travelDistance,o.setTravelDistance]})}),t.jsx(s,{label:"Spool Diameter",id:"comLength",tooltip:"The diameter of the part that rope may spool around. Use 1 if absent.",children:t.jsx(C,{stateHook:[e.spoolDiameter,o.setSpoolDiameter]})}),t.jsx(s,{label:"Load",id:"comLength",tooltip:"How much weight the system is lifting upwards.",children:t.jsx(C,{stateHook:[e.load,o.setLoad]})}),t.jsxs(q,{formColumns:!0,children:[t.jsx(j,{children:t.jsx(s,{label:"Loaded Top Speed\xA0\xA0\xA0",id:"loadedTopSpeed",tooltip:"How fast the system travels under expected load.",children:t.jsx(w,{stateHook:[i,()=>{}],numberRoundTo:2,dangerIf:()=>i.lte(new r(0,"ft/s"))})})}),t.jsx(j,{children:t.jsx(s,{label:"Time To Goal",id:"loadedTimeToGoal",tooltip:"How long the system takes to travel the target distance under expected load.",children:t.jsx(w,{stateHook:[c,()=>{}],numberRoundTo:2,dangerIf:()=>i.lte(new r(0,"ft/s"))})})})]}),t.jsxs(q,{formColumns:!0,children:[t.jsx(j,{children:t.jsx(s,{label:"Unloaded Top Speed",id:"unloadedTopSpeed",tooltip:"How fast the system would travel if no load were present.",children:t.jsx(w,{stateHook:[a,()=>{}],numberRoundTo:2,dangerIf:()=>a.lte(new r(0,"ft/s"))})})}),t.jsx(j,{children:t.jsx(s,{label:"Time To Goal",id:"unloadedTimeToGoal",tooltip:"How long the system takes to travel the target distance if no load were present.",children:t.jsx(w,{stateHook:[l,()=>{}],numberRoundTo:2,dangerIf:()=>a.lte(new r(0,"ft/s"))})})})]}),t.jsx(s,{label:"Stall Load",id:"stallLoad",tooltip:"The amount of weight the system can handle before stalling.",children:t.jsx(w,{stateHook:[u,()=>{}],numberRoundTo:2,defaultUnit:"lbs"})}),t.jsx(s,{label:"Estimated Current Draw",id:"currentDraw",tooltip:"The estimated current draw per motor.",children:t.jsx(w,{stateHook:[D,()=>{}],numberRoundTo:1,defaultUnit:"A"})}),t.jsx(oe,{kG:p,kV:x,kA:y,distanceType:"linear"})]}),t.jsx(j,{children:t.jsx(z,{options:O,simpleDatasets:[U.dataset("Time to Goal (s)",n.filter(T=>T.y>0),0,"y-time"),U.dataset("Current Draw (A)",f,1,"y-current")],title:"",id:"linearGraph",height:800})})]})]})}F=function(){return t.jsxs(t.Fragment,{children:[t.jsx(W,{pageConfig:v}),t.jsx(K,{}),t.jsx(ne,{})]})}});export{me as __tla,F as default};
