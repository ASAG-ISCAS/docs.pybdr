"use strict";(self.webpackChunkdocs_pyrat=self.webpackChunkdocs_pyrat||[]).push([[76],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,y=d["".concat(s,".").concat(u)]||d[u]||l[u]||a;return n?r.createElement(y,i(i({ref:t},m),{},{components:n})):r.createElement(y,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},i="Under Approximation of Reachable set",p={unversionedId:"benchmark/under_approximation",id:"benchmark/under_approximation",title:"Under Approximation of Reachable set",description:"We test our implementation on a PC with following configurations:",source:"@site/docs/benchmark/under_approximation.md",sourceDirName:"benchmark",slug:"/benchmark/under_approximation",permalink:"/docs.pybdr/docs/benchmark/under_approximation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/benchmark/under_approximation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Over Approximation of Reachable set",permalink:"/docs.pybdr/docs/benchmark/over_approximation"},next:{title:"References",permalink:"/docs.pybdr/docs/refs"}},s={},c=[{value:"Settings",id:"settings",level:2}],m={toc:c};function l(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"under-approximation-of-reachable-set"},"Under Approximation of Reachable set"),(0,o.kt)("p",null,"We test our implementation on a PC with following configurations:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Hardware"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Detail"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"CPU"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Intel(R) Core(TM) i7-11800H CPU @ 2.30GHz (8 CPUs)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Memory"),(0,o.kt)("td",{parentName:"tr",align:"center"},"16GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"GPU"),(0,o.kt)("td",{parentName:"tr",align:"center"},"RTX3060")))),(0,o.kt)("h2",{id:"settings"},"Settings"),(0,o.kt)("p",null,"Based on the synchronous machine model of dimension 2, the XSE2016CAV algorithm is called to compute the\nunder-approximation of the reachable set: the under-approximation of the reachable set from the initial set ","[-0.1,2.9]","\n\xd7 ","[0.1,3.1]"," is computed at moment 0.5."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from __future__ import annotations\n\nimport numpy as np\n\nnp.seterr(divide='ignore', invalid='ignore')\n\nfrom pyrat.geometry import Geometry, Zonotope, Interval\nfrom pyrat.geometry.operation import cvt2, boundary\nfrom pyrat.algorithm import ASB2008CDC, XSE2016CAV\nfrom pyrat.dynamic_system import NonLinSys\nfrom pyrat.model import Model, synchronous_machine\nfrom pyrat.util.visualization import plot\n\n# init system\nsystem = NonLinSys(Model(synchronous_machine, [2, 1]))\n\nepsilon = 0.1\nopt = ASB2008CDC.Options()\nopt.t_end = 1\nopt.step = 0.05\nopt.r0 = Interval([-0.1, 0.1], [2.9, 3.1])\nopt.tensor_order = 2\nopt.taylor_terms = 4\nopt.u = Zonotope.zero(1, 1)\nopt.u_trans = np.zeros(1)\n\n# reach\nassert opt.validation(system.dim)\ntp_set = [opt.r0]\nopt.r0 = boundary(opt.r0, epsilon, Geometry.TYPE.ZONOTOPE)\n\n_, tp, _, _ = ASB2008CDC.reach(system, opt)\n\nvis_idx = [int(len(tp) / 2) - 1]\n\nfor this_idx in vis_idx:\n    omega = [cvt2(zono, Geometry.TYPE.INTERVAL) for zono in tp[this_idx]]\n    o = XSE2016CAV.polytope(omega)\n    p, _ = XSE2016CAV.contraction(omega, o)\n    tp_set.append(p)\n    tp_set.append(o)\n    tp_set += omega\n\nplot(tp_set, [0, 1])\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6222).Z,width:"800",height:"800"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Error"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Time (second)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"0"),(0,o.kt)("td",{parentName:"tr",align:"center"},"11.55")))))}l.isMDXComponent=!0},6222:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/under-58f7a365c69cea9c733dc6fa2379d0d8.png"}}]);