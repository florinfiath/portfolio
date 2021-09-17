(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(3),i=n(1),a=n(0),l=Object(i.createContext)(),r=function(e){var t=e.children,n=Object(i.useState)("light"),c=Object(s.a)(n,2),r=c[0],o=c[1];Object(i.useEffect)((function(){"dark"===localStorage.getItem("themeName")&&o("dark")}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="FF",j="Florin Fiath",h="Full Stack Web Developer",b="An engineer with more than 10 years experience in deployment and rollout management who decided to take another challenge and learn something new in the programming world.",d="https://drive.google.com/file/d/12CwUyN6r8kTp14ApqDHCEAYs95o0qy1M/view?usp=sharing",u="https://drive.google.com/file/d/13621mvCec8KWrael_ufh0h3FZgfVrib9/view?usp=sharing",m={linkedin:"https://www.linkedin.com/in/florin-fiath-20637827/",github:"https://github.com/florinfiath"},O=[{name:"DCI DEVS",description:"DCI Developer Community ",stack:["HTML","CSS","React","Node.js","Express.js","MongoDB"],sourceCode:"https://github.com/florinfiath/Final-Project-DCI-Developer-Community-Frontend ",livePreview:"https://dci-devs.herokuapp.com/"},{name:"S.F.K Entertainment",description:"React Final Project",stack:["CSS","React","Node.js","Express.js","MongoDB"],sourceCode:"https://github.com/florinfiath/React_Final_Project",livePreview:"https://sfk-entertainment.herokuapp.com/"}],x=["HTML","CSS","JavaScript","MongoDB","Express.js","React","Node.js","Redux","SASS","Material UI","Git"],f="fiathf@gmail.com",p=n(14),v=n.n(p),k=n(12),g=n.n(k),N=n(16),_=n.n(N),C=n(15),w=n.n(C),S=(n(26),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(i.useState)(!1),o=Object(s.a)(r,2),j=o[0],h=o[1],b=function(){return h(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:b,className:"link link--nav",children:"Projects"})}):null,x.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:b,className:"link link--nav",children:"Skills"})}):null,f?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:b,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(g.a,{}):Object(a.jsx)(v.a,{})}),Object(a.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(w.a,{}):Object(a.jsx)(_.a,{})})]})}),y=(n(32),function(){var e=o;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e}),Object(a.jsx)(S,{})]})}),F=n(10),E=n.n(F),D=n(17),P=n.n(D),I=(n(33),function(){var e=j,t=h,n=b,c=d,s=u,i=m;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"resume"})}),s&&Object(a.jsx)("a",{href:s,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"lebenslauf"})}),i&&Object(a.jsxs)(a.Fragment,{children:[i.github&&Object(a.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(E.a,{})}),i.linkedin&&Object(a.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(P.a,{})})]})]})]})}),M=n(7),R=n.n(M),A=n(18),B=n.n(A),T=(n(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},R()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(E.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(B.a,{})})]})}),H=(n(36),function(){return O.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(a.jsx)(T,{project:e},R()())}))})]}):null}),L=(n(37),function(){return x.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:x.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},R()())}))})]}):null}),J=n(19),q=n.n(J),K=(n(38),function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(q.a,{fontSize:"large"})})}):null}),U=(n(39),function(){return f?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(f),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),V=(n(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://florinfiath.github.io/my-portfolio",className:"link footer__link",children:"Created By Florin Fiath"})})}),W=(n(41),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(y,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(I,{}),Object(a.jsx)(H,{}),Object(a.jsx)(L,{}),Object(a.jsx)(U,{})]}),Object(a.jsx)(K,{}),Object(a.jsx)(V,{})]})});n(42);Object(c.render)(Object(a.jsx)(r,{children:Object(a.jsx)(W,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.e53f448c.chunk.js.map