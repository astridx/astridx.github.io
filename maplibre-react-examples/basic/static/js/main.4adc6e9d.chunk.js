(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{16:function(e,t,n){e.exports=n(41)},21:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),l=(n(21),n(3)),i=n(5),u=n.n(i),s=(n(39),n(40),function(){var e=Object(a.useRef)(null),t=Object(a.useState)(5),n=Object(l.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(34),s=Object(l.a)(i,2),m=s[0],d=s[1],b=Object(a.useState)(1.5),f=Object(l.a)(b,2),v=f[0],p=f[1];return Object(a.useEffect)((function(){var t=new u.a.Map({container:e.current,style:"https://demotiles.maplibre.org/style.json",center:[o,m],zoom:v});return t.addControl(new u.a.NavigationControl,"top-right"),t.on("move",(function(){c(t.getCenter().lng.toFixed(4)),d(t.getCenter().lat.toFixed(4)),p(t.getZoom().toFixed(2))})),function(){return t.remove()}}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"sidebarStyle"},r.a.createElement("div",null,"Longitude: ",o," | Latitude: ",m," | Zoom: ",v)),r.a.createElement("div",{className:"map-container",ref:e}))});var m=function(){return r.a.createElement("div",null,r.a.createElement(s,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4adc6e9d.chunk.js.map