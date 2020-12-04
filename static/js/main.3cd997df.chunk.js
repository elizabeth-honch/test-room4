(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{33:function(t,c,e){},34:function(t,c,e){},36:function(t,c,e){},37:function(t,c,e){},38:function(t,c,e){},39:function(t,c,e){},40:function(t,c,e){},41:function(t,c,e){"use strict";e.r(c);var n=e(1),a=e(0),r=e(13),s=e.n(r),i=e(9),o=e(8),j=e(10),u=e(15),l=Object(u.b)((function(t,c){switch(c.type){case"SHOW_TRACK":return Object(j.a)(Object(j.a)({},t),{},{tracks:c.payload.tracks});case"SHOW_INFO":return console.log("in reducer"),Object(j.a)(Object(j.a)({},t),{},{artist:c.payload.artist});case"NEW_TRACK":return Object(j.a)(Object(j.a)({},t),{},{newTrack:c.payload.newTrack});default:return t}}),{tracks:[],artist:{},newTrack:[]}),b=(e(33),e(3)),m=(e(34),function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("nav",{className:"navbar ui three item menu",children:[Object(n.jsx)(i.b,{className:"navbar__item item",to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(n.jsx)(i.b,{className:"navbar__item item",to:"/track",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043f\u043e\u0438\u0441\u043a\u0430 \u0442\u0440\u0435\u043a\u0430"}),Object(n.jsx)(i.b,{className:"navbar__item item",to:"/artist/:name",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043e\u0431 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u0435"})]})})}),h="http://ws.audioscrobbler.com/",f="c74f5908f8495ada750ffabb4532770c",d="&format=json",O=function(){return fetch("\n".concat(h,"2.0/?method=chart.gettoptracks&api_key=").concat(f).concat(d)).then((function(t){return t.json()})).then((function(t){return t.tracks.track})).catch((function(t){return t}))},p=(e(36),function(){var t=Object(o.c)((function(t){return t.tracks})),c=Object(o.b)();return Object(a.useEffect)((function(){O().then((function(t){c({type:"SHOW_TRACK",payload:{tracks:t}})}))}),[]),Object(n.jsx)("div",{className:"ui link cards",children:t.map((function(t){return Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("div",{className:"header",children:t.name}),Object(n.jsxs)("div",{className:"meta artist",children:[void 0!==t.artist.name&&Object(n.jsx)(i.b,{to:"artist/:".concat(t.artist.name),children:t.artist.name}),Object(n.jsx)("a",{href:t.artist.url,className:"artist__link",children:"".concat(t.artist.name," \u043d\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u0435 Last.fm")})]})]})},t.playcount)}))})}),x=e(23),k=(e(37),function(t){var c=t.tracks;return Object(n.jsx)("ul",{className:"list",children:c.map((function(t){return Object(n.jsxs)("li",{className:"list__item",children:[Object(n.jsx)("h4",{children:"Track name - ".concat(t.name)}),Object(n.jsx)("p",{children:"Artist - ".concat(t.artist)})]},t.url)}))})}),_=function(t){return fetch("\n".concat(h,"/2.0/?method=track.search&track=").concat(t,"&api_key=").concat(f).concat(d)).then((function(t){return t.json()})).then((function(t){return t.results.trackmatches.track})).catch((function(t){return t}))},N=(e(38),function(){var t=Object(a.useState)(""),c=Object(x.a)(t,2),e=c[0],r=c[1],s=Object(o.c)((function(t){return t.newTrack})),i=Object(o.b)();return Object(n.jsxs)("div",{className:"track",children:[Object(n.jsxs)("div",{className:"ui icon input",children:[Object(n.jsx)("i",{className:"search icon"}),Object(n.jsx)("input",{type:"text",value:e,onChange:function(t){var c=t.target;r(c.value)},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0440\u0435\u043a\u0430"})]}),Object(n.jsx)("button",{type:"button",className:"ui primary button",onClick:function(){_(e).then((function(t){i({type:"NEW_TRACK",payload:{newTrack:t}})}))},children:"\u041d\u0430\u0439\u0442\u0438"}),s.length>0&&Object(n.jsx)(k,{tracks:s})]})}),v=(e(39),function(t){return fetch("\n".concat(h,"2.0/?method=artist.getinfo&artist=").concat(t,"&api_key=").concat(f).concat(d)).then((function(t){return t.json()})).then((function(t){return t.artist})).catch((function(t){return t}))}),y=function(t){var c=t.location.pathname.split(":")[1],e=Object(o.c)((function(t){return t.artist})),r=Object(o.b)();return Object(a.useEffect)((function(){"Name"!==c&&(console.log("name in UseEffect",c),v(c).then((function(t){console.log(t),r({type:"SHOW_INFO",payload:{artist:t}})})))}),[]),console.log("artist - ",e),Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"information",children:[Object(n.jsx)("h4",{className:"information__name",children:e.name}),Object(n.jsx)("p",{children:e.bio.summary}),Object(n.jsx)("ul",{className:"information__tags",children:e.tags.tag.map((function(t){return Object(n.jsxs)("li",{className:"information__item",children:[Object(n.jsx)("p",{className:"information__tag-name",children:"Tag - ".concat(t.name)}),Object(n.jsx)("a",{href:t.url,className:"information__tag-url",children:t.url})]},t.name)}))})]})})},g=(e(40),function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(m,{}),Object(n.jsx)("section",{children:Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{path:"/",exact:!0,component:p}),Object(n.jsx)(b.a,{path:"/track",component:N}),Object(n.jsx)(b.a,{path:"/artist",component:y})]})})]})});s.a.render(Object(n.jsx)(i.a,{children:Object(n.jsx)(o.a,{store:l,children:Object(n.jsx)(g,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.3cd997df.chunk.js.map