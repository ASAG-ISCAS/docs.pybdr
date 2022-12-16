"use strict";(self.webpackChunkdocs_pyrat=self.webpackChunkdocs_pyrat||[]).push([[119],{3905:(a,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>o});var s=t(7294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function n(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,s,m=function(a,e){if(null==a)return{};var t,s,m={},n=Object.keys(a);for(s=0;s<n.length;s++)t=n[s],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(s=0;s<n.length;s++)t=n[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var N=s.createContext({}),l=function(a){var e=s.useContext(N),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},i=function(a){var e=l(a.components);return s.createElement(N.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},k=s.forwardRef((function(a,e){var t=a.components,m=a.mdxType,n=a.originalType,N=a.parentName,i=r(a,["components","mdxType","originalType","parentName"]),k=l(t),o=m,h=k["".concat(N,".").concat(o)]||k[o]||c[o]||n;return t?s.createElement(h,p(p({ref:e},i),{},{components:t})):s.createElement(h,p({ref:e},i))}));function o(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var n=t.length,p=new Array(n);p[0]=k;var r={};for(var N in e)hasOwnProperty.call(e,N)&&(r[N]=e[N]);r.originalType=a,r.mdxType="string"==typeof a?a:m,p[1]=r;for(var l=2;l<n;l++)p[l]=t[l];return s.createElement.apply(null,p)}return s.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3128:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>N,contentTitle:()=>p,default:()=>c,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var s=t(7462),m=(t(7294),t(3905));const n={sidebar_position:2},p="NonLinear System",r={unversionedId:"dynamic_systems/nonlinear_system",id:"dynamic_systems/nonlinear_system",title:"NonLinear System",description:"Definition",source:"@site/docs/dynamic_systems/nonlinear_system.md",sourceDirName:"dynamic_systems",slug:"/dynamic_systems/nonlinear_system",permalink:"/docs.pybdr/docs/dynamic_systems/nonlinear_system",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/dynamic_systems/nonlinear_system.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Linear System",permalink:"/docs.pybdr/docs/dynamic_systems/linear_system"},next:{title:"Set Representations",permalink:"/docs.pybdr/docs/category/set-representations"}},N={},l=[{value:"Definition",id:"definition",level:2},{value:"Example",id:"example",level:2}],i={toc:l};function c(a){let{components:e,...t}=a;return(0,m.kt)("wrapper",(0,s.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"nonlinear-system"},"NonLinear System"),(0,m.kt)("h2",{id:"definition"},"Definition"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mover",{parentName:"mrow",accent:"true"},(0,m.kt)("mi",{parentName:"mover"},"x"),(0,m.kt)("mo",{parentName:"mover"},"\u02d9")),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"f"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\dot{x} = f(x(t),u(t))")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6679em"}}),(0,m.kt)("span",{parentName:"span",className:"mord accent"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6679em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")),(0,m.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.1111em"}},(0,m.kt)("span",{parentName:"span",className:"mord"},"\u02d9"))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"))")))))),(0,m.kt)("p",null,"where ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow"},"\u2208"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup",mathvariant:"double-struck"},"R"),(0,m.kt)("mi",{parentName:"msup"},"n"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x(t) \\in \\mathbb{R}^{n}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6889em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathbb"},"R"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6644em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))))))))))))," is the system state, ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow"},"\u2208"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup",mathvariant:"double-struck"},"R"),(0,m.kt)("mi",{parentName:"msup"},"m"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"u(t) \\in \\mathbb{R}^{m}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6889em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathbb"},"R"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6644em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"m")))))))))))))," is the system input, and ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"f"),(0,m.kt)("mo",{parentName:"mrow"},":"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup",mathvariant:"double-struck"},"R"),(0,m.kt)("mi",{parentName:"msup"},"n")),(0,m.kt)("mo",{parentName:"mrow"},"\xd7"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup",mathvariant:"double-struck"},"R"),(0,m.kt)("mi",{parentName:"msup"},"m")),(0,m.kt)("mo",{parentName:"mrow"},"\u2192"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup",mathvariant:"double-struck"},"R"),(0,m.kt)("mi",{parentName:"msup"},"n"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f: \\mathbb{R}^{n} \\times \\mathbb{R}^{m} \\rightarrow \\mathbb{R}^{n}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},":"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7722em",verticalAlign:"-0.0833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathbb"},"R"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6644em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"))))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6889em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathbb"},"R"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6644em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"m"))))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6889em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathbb"},"R"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6644em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))))))))))))," is sufficiently smooth."),(0,m.kt)("h2",{id:"example"},"Example"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mrow",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"mrow",fence:"true"},"["),(0,m.kt)("mtable",{parentName:"mrow",rowspacing:"0.16em",columnalign:"center",columnspacing:"1em"},(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,m.kt)("msub",{parentName:"mstyle"},(0,m.kt)("mover",{parentName:"msub",accent:"true"},(0,m.kt)("mi",{parentName:"mover"},"x"),(0,m.kt)("mo",{parentName:"mover"},"\u02d9")),(0,m.kt)("mn",{parentName:"msub"},"0"))))),(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,m.kt)("msub",{parentName:"mstyle"},(0,m.kt)("mover",{parentName:"msub",accent:"true"},(0,m.kt)("mi",{parentName:"mover"},"x"),(0,m.kt)("mo",{parentName:"mover"},"\u02d9")),(0,m.kt)("mn",{parentName:"msub"},"1")))))),(0,m.kt)("mo",{parentName:"mrow",fence:"true"},"]")),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mrow",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"mrow",fence:"true"},"["),(0,m.kt)("mtable",{parentName:"mrow",rowspacing:"0.16em",columnalign:"center",columnspacing:"1em"},(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,m.kt)("mrow",{parentName:"mstyle"},(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"x"),(0,m.kt)("mn",{parentName:"msub"},"1")),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mi",{parentName:"mrow"},"u"))))),(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,m.kt)("mrow",{parentName:"mstyle"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("msubsup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msubsup"},"x"),(0,m.kt)("mn",{parentName:"msubsup"},"0"),(0,m.kt)("mn",{parentName:"msubsup"},"2")),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"x"),(0,m.kt)("mn",{parentName:"msub"},"1")),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"x"),(0,m.kt)("mn",{parentName:"msub"},"0"))))))),(0,m.kt)("mo",{parentName:"mrow",fence:"true"},"]"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\begin{bmatrix} \\dot{x}_{0} \\\\ \\dot{x}_{1} \\end{bmatrix} = \\begin{bmatrix} x_{1} + u \\\\ (1- x_{0}^{2}) x_{1} -x_{0} \\end{bmatrix}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"2.4em",verticalAlign:"-0.95em"}}),(0,m.kt)("span",{parentName:"span",className:"minner"},(0,m.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},(0,m.kt)("span",{parentName:"span",className:"delimsizing size3"},"[")),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mtable"},(0,m.kt)("span",{parentName:"span",className:"col-align-c"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.45em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.61em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord accent"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6679em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")),(0,m.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.1111em"}},(0,m.kt)("span",{parentName:"span",className:"mord"},"\u02d9"))))))),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"0"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))))),(0,m.kt)("span",{parentName:"span",style:{top:"-2.41em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord accent"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6679em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")),(0,m.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.1111em"}},(0,m.kt)("span",{parentName:"span",className:"mord"},"\u02d9"))))))),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"}))))))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.95em"}},(0,m.kt)("span",{parentName:"span"}))))))),(0,m.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},(0,m.kt)("span",{parentName:"span",className:"delimsizing size3"},"]"))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"2.4em",verticalAlign:"-0.95em"}}),(0,m.kt)("span",{parentName:"span",className:"minner"},(0,m.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},(0,m.kt)("span",{parentName:"span",className:"delimsizing size3"},"[")),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mtable"},(0,m.kt)("span",{parentName:"span",className:"col-align-c"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.45em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.61em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"))),(0,m.kt)("span",{parentName:"span",style:{top:"-2.41em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.4519em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2481em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"0"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"}))))))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.95em"}},(0,m.kt)("span",{parentName:"span"}))))))),(0,m.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},(0,m.kt)("span",{parentName:"span",className:"delimsizing size3"},"]")))))))))}c.isMDXComponent=!0}}]);