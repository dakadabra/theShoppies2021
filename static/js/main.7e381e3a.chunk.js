(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n.n(i),o=n(6),r=n.n(o),a=n(8),j=n(7),u=n(2),l=function(e){var t=e.movie,n=e.removeMovie;return Object(c.jsxs)("div",{className:"singleMovie",children:[t.Title+" ("+t.Year+") ",Object(c.jsx)("button",{type:"submit",onClick:function(){n(t)},children:"Remove"}),Object(c.jsx)("img",{className:"poster",alt:t.Title,src:"N/A"===t.Poster?"https://placehold.it/198x264&text=Image+Not+Found":t.Poster})]})},b=function(e){var t=e.nominations,n=e.removeMovie;return Object(c.jsx)("div",{className:"movieListContainer",children:t.map((function(e){return Object(c.jsx)(l,{movie:e,removeMovie:n},e.Title)}))})},m=function(e){var t=e.setSearchText,n=Object(i.useState)(""),s=Object(u.a)(n,2),o=s[0],r=s[1];return Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{type:"text",value:o,onChange:function(e){r(e.target.value)}}),Object(c.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),t(o),r("")},children:"Enter"})]})},h=(n(14),[]);var d=function(){var e=Object(i.useState)(h),t=Object(u.a)(e,2),n=t[0],s=t[1],o=Object(i.useState)(0),r=Object(u.a)(o,2),l=r[0],d=r[1],O=function(e){!n.some((function(t){return e.imdbID===t.imdbID}))&&l<5&&(s([].concat(Object(j.a)(n),[e])),d(l+1))},v=Object(i.useState)([]),x=Object(u.a)(v,2),f=x[0],p=x[1],g=Object(i.useState)(null),N=Object(u.a)(g,2),S=N[0],M=N[1],I=Object(i.useState)(!1),y=Object(u.a)(I,2),w=y[0],T=y[1],k=Object(i.useState)("shop"),C=Object(u.a)(k,2),D=C[0],E=C[1];Object(i.useEffect)((function(){T(!0),M(null),p([]),fetch("https://www.omdbapi.com/?s=".concat(D,"&apikey=").concat("9fefc733")).then((function(e){return e})).then((function(e){return e.json()})).then((function(e){"False"===e.Response?M(e.Error):p(e.Search),T(!1)})).catch((function(e){var t=e.message;M(t),T(!1)}))}),[D]);var F=function(e){var t=e.Title,i=e.Year,s=e.Poster,o=e.imdbID,r=e.nominateMovie;return Object(c.jsxs)("div",{className:"singleMovie",children:[t+" ("+i+") ",Object(c.jsx)("button",{type:"submit",disabled:n.some((function(e){return o===e.imdbID})),onClick:function(){r({Title:t,Year:i,Poster:s,imdbID:o})},children:"Nominate"}),Object(c.jsx)("img",{className:"poster",alt:t,src:"N/A"===s?"https://placehold.it/198x264&text=Image+Not+Found":s})]})};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Movie title"}),Object(c.jsx)(m,{setSearchText:function(e){return E(e)}})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Nominations"}),Object(c.jsx)(b,{nominations:n,removeMovie:function(e){var t=n.filter((function(t){return t!==e}));s(t),d(l-1)}})]}),Object(c.jsxs)("h2",{children:['Results for "',D,'"']}),Object(c.jsxs)("div",{className:"movieListContainer",children:[w&&Object(c.jsx)("h1",{children:"I'm loading"}),null!==S&&Object(c.jsx)("div",{style:{margin:"20px 0"},children:S}),null!==f&&f.length>0&&f.map((function(e,t){return Object(c.jsx)(F,Object(a.a)({nominateMovie:O},e),t)}))]}),5===l&&Object(c.jsx)("p",{children:"You have already nominated 5 movies, which is the maximum allowed!"})]})};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7e381e3a.chunk.js.map