(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+qyr":function(t,e,n){},"7YcG":function(t,e,n){"use strict";var o=n("xZpt"),i=n("FXw5");function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){l=!0,r=t},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw r}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(e,n){o(this,t),this.styles=e||t.DEFAULT_STYLES,this.defaultStyle=n||t.DEFAULT_STYLE,this.onDocumentClick=this.onDocumentClick.bind(this)}return i(t,[{key:"getDefaultPosition",value:function(){return"top-right"}},{key:"onAdd",value:function(t){var e=this;this.map=t,this.controlContainer=document.createElement("div"),this.controlContainer.classList.add("mapboxgl-ctrl"),this.controlContainer.classList.add("mapboxgl-ctrl-group"),this.mapStyleContainer=document.createElement("div"),this.styleButton=document.createElement("button"),this.styleButton.type="button",this.mapStyleContainer.classList.add("mapboxgl-style-list");var n,o=r(this.styles);try{for(o.s();!(n=o.n()).done;){var i=n.value,a=document.createElement("button");a.type="button",a.innerText=i.title,a.classList.add(i.title.replace(/[^a-z0-9-]/gi,"_")),a.dataset.uri=JSON.stringify(i.uri),a.addEventListener("click",(function(t){var n=t.srcElement;if(!n.classList.contains("active")){e.map.setStyle(JSON.parse(n.dataset.uri)),e.mapStyleContainer.style.display="none",e.styleButton.style.display="block";for(var o=e.mapStyleContainer.getElementsByClassName("active");o[0];)o[0].classList.remove("active");n.classList.add("active")}})),i.title===this.defaultStyle&&a.classList.add("active"),this.mapStyleContainer.appendChild(a)}}catch(s){o.e(s)}finally{o.f()}return this.styleButton.classList.add("mapboxgl-ctrl-icon"),this.styleButton.classList.add("mapboxgl-style-switcher"),this.styleButton.addEventListener("click",(function(){e.styleButton.style.display="none",e.mapStyleContainer.style.display="block"})),document.addEventListener("click",this.onDocumentClick),this.controlContainer.appendChild(this.styleButton),this.controlContainer.appendChild(this.mapStyleContainer),this.controlContainer}},{key:"onRemove",value:function(){this.controlContainer&&this.controlContainer.parentNode&&this.map&&this.styleButton&&(this.styleButton.removeEventListener("click",this.onDocumentClick),this.controlContainer.parentNode.removeChild(this.controlContainer),document.removeEventListener("click",this.onDocumentClick),this.map=void 0)}},{key:"onDocumentClick",value:function(t){this.controlContainer&&!this.controlContainer.contains(t.target)&&this.mapStyleContainer&&this.styleButton&&(this.mapStyleContainer.style.display="none",this.styleButton.style.display="block")}}]),t}();s.DEFAULT_STYLE="Streets",s.DEFAULT_STYLES=[{title:"Dark",uri:"mapbox://styles/mapbox/dark-v10"},{title:"Light",uri:"mapbox://styles/mapbox/light-v10"},{title:"Outdoors",uri:"mapbox://styles/mapbox/outdoors-v11"},{title:"Satellite",uri:"mapbox://styles/mapbox/satellite-streets-v11"},{title:"Streets",uri:"mapbox://styles/mapbox/streets-v11"}],e.MapboxStyleSwitcherControl=s},FXw5:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},aAv3:function(t,e,n){"use strict";var o=n("q1tI"),i=n.n(o),r=n("4ZJM"),a=n.n(r),s=(n("rG3h"),n("Sa8L")),l=n("2jDm"),c=n("uDWs"),u=n.n(c),d=n("i8i4"),f=n("Mpt7"),p=s.c.div.withConfig({componentId:"vddixz-0"})([""]),m=s.c.img.withConfig({componentId:"vddixz-1"})(["box-sizing:border-box;border:2px solid ",";box-shadow:0 1px 5px rgba(0,0,0,0.65);margin:0;"," &:not(:first-child){margin-left:0.25rem;}"],(function(t){return t.isActive?Object(s.e)("colors.highlight.500"):"#fff"}),(function(t){var e=t.size;return Object(s.b)(["width:",";height:",";border-radius:",";"],e,e,e)})),y=function(t){return"https://api.mapbox.com/styles/v1/mapbox/"+t.styleID+"/tiles/256/"+t.z+"/"+t.x+"/"+t.y+"?access_token="+t.token},h=function(t){var e=t.map,n=t.token,r=t.styles,a=t.tile,s=t.size,l=t.onChange;console.log("render StyleSelector"),e.on("style.load",(function(){console.log("style load")}));var c=Object(o.useState)(r[0]),u=c[0],d=c[1],h=Object(o.useState)(!1),v=h[0],b=h[1],g=Object(o.useRef)(null);e.once("style.load",(function(){g.current=Object(f.a)(e.getStyle())}));var x=function(t){if(console.log("handle click",t),b(!1),t!==u){d(t);var n=g.current,o=Object(f.a)(e.getStyle()),i=n.get("sources"),r=n.get("layers"),a=o.get("sources").filter((function(t,e){return!i.has(e)})),s=o.get("layers").filter((function(t){return!r.includes(t)}));e.setStyle("mapbox://styles/mapbox/"+t),e.once("style.load",(function(){console.log("on style update"),g.current=Object(f.a)(e.getStyle()),a.forEach((function(t,n){e.addSource(n,t.toJS())})),s.forEach((function(t){e.addLayer(t.toJS())})),l(t)}))}},k=function(){b(!0)};if(2===r.length){var E=u===r[0]?r[1]:r[0];return i.a.createElement(p,null,i.a.createElement(m,{size:s,src:y(Object.assign({styleID:E,token:n},a)),onClick:function(){return x(E)}}))}var S=r.filter((function(t){return t!==u}))[0];return i.a.createElement(p,{onMouseEnter:k,onMouseLeave:function(){b(!1)}},v?i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{size:s,src:y(Object.assign({styleID:S,token:n},a)),onClick:function(){return x(S)}}),r.filter((function(t){return t!==S})).map((function(t){return i.a.createElement(m,{key:t,isActive:t===u,size:s,src:y(Object.assign({styleID:t,token:n},a)),onClick:function(){return x(t)}})}))):i.a.createElement(m,{size:s,src:y(Object.assign({styleID:S,token:n},a)),onClick:k}))};h.defaultProps={map:null,tile:{x:0,y:0,z:0},size:"64px",onChange:function(){}};var v=function(){function t(t){var e=t.styles,n=t.token,o=t.position;this.styles=e,this.token=n,this.position=o}var e=t.prototype;return e.onAdd=function(t){console.log("onAdd"),this.map=t;var e=this.styles,n=this.token;return this.container=document.createElement("div"),this.container.classList.add("mapboxgl-ctrl"),this.container.classList.add("mapboxgl-ctrl-style-selector"),this.container.style.float="none !important",this.container.style.cursor="pointer",Object(d.render)(i.a.createElement(h,{map:t,styles:e,token:n}),this.container),this.container},e.init=function(){console.log("init");var t=this.map,e=this.styles,n=this.token,o=this.container;Object(d.render)(i.a.createElement(h,{map:t,styles:e,token:n}),o)},e.onRemove=function(){this.map=null,this.container.parentNode.removeChild(this.container)},t}(),b=n("orsu"),g=n.n(b),x=n("7YcG"),k=(n("+qyr"),n("jFb6")),E=s.c.div.withConfig({componentId:"sc-6nyq7y-0"})(["width:",";height:",";position:relative;flex:1 0 auto;"],(function(t){return t.width}),(function(t){return t.height})),S=function(t){var e=t.width,n=t.height,r=t.zoom,s=t.center,c=t.bounds,d=t.padding,f=t.styles,p=t.sources,m=t.layers,y=t.minZoom,h=t.maxZoom,b=t.directions,S=t.scale,C=t.styleSwitcher,w=t.layerSwitcher,L=k.siteMetadata.mapboxToken;if(L||console.error("ERROR: Mapbox token is required in gatsby-config.js siteMetadata"),!l.a)return null;var O=Object(o.useRef)(null),j=Object(o.useRef)(null);return Object(o.useEffect)((function(){var t=s,e=r;if(c&&4===c.length){var n=function(t,e,n){void 0===n&&(n=0);var o=t.width,i=t.height,r=u.a.viewport(e,[o,i],void 0,void 0,void 0,!0),a=Math.max(r.zoom-1,0)*(1-n);return{center:r.center,zoom:a}}(O.current,c,d);t=n.center,e=n.zoom}a.a.accessToken=L;var o=new a.a.Map({container:O.current,style:"mapbox://styles/mapbox/"+f[0],center:t,zoom:e,minZoom:y,maxZoom:h});return j.current=o,window.map=o,o.addControl(new a.a.NavigationControl,"top-right"),f.length>1&&o.addControl(new v({styles:f,token:L}),"bottom-left"),o.on("load",(function(){var t;console.log("map onload"),Object.entries(p).forEach((function(t){var e=t[0],n=t[1];o.addSource(e,n)})),m.forEach((function(t){o.addLayer(t)})),b.forEach((function(e){e.pois.forEach((function(t){(new a.a.Marker).setLngLat([t[0],t[1]]).setPopup(new a.a.Popup({offset:25}).setText(t[2])).addTo(o)})),(t=new g.a(e)).setOrigin(e.origin),t.setDestination(e.destination),o.addControl(t,"top-right")})),S.forEach((function(t){o.addControl(new a.a.ScaleControl({maxWidth:t.maxWidth,unit:t.unit}))})),C.forEach((function(t){console.log(t.styles+t.position),o.addControl(new x.MapboxStyleSwitcherControl(t.styles,t.position))})),w.forEach((function(t){console.log(t)}))})),function(){o.remove()}}),[]),i.a.createElement(E,{width:e,height:n},i.a.createElement("div",{ref:O,style:{width:"100%",height:"100%"}}))};S.defaultProps={width:"auto",height:"100%",center:[7.221275,50.326111],zoom:9.5,bounds:null,minZoom:0,maxZoom:24,styles:["streets-v11"],padding:.1,sources:{},layers:[],directions:[],scale:[],styleSwitcher:[],layerSwitcher:[]};e.a=S},wxy5:function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),i=n.n(o),r=n("Sa8L"),a=r.c.p.withConfig({componentId:"sc-1dh2zal-0"})(["text-align:center;margin-bottom:0.05rem;"]),s=function(t){var e=t.title;return i.a.createElement(a,null,i.a.createElement("a",{id:e,className:"active",href:"#"},e))},l=r.c.nav.withConfig({componentId:"mtpsq1-0"})(["background:#fff;position:absolute;z-index:1;bottom:10px;right:10px;border-radius:3px;width:120px;border:1px solid rgba(0,0,0,0.4);font-family:'Open Sans',sans-serif;a{font-size:13px;color:#404040;display:block;margin:0;padding:0;padding:10px;text-decoration:none;border-bottom:1px solid rgba(0,0,0,0.25);text-align:center;}a:last-child{border:none;}a:hover{background-color:#f8f8f8;color:#404040;}a.active{background-color:#3887be;color:#ffffff;}a.active:hover{background:#3074a4;}"]),c=function(t){return i.a.createElement("div",null,t.layercontrol.map((function(t,e){return i.a.createElement(l,{key:e,id:t.uniqueid},t.layer.map((function(t,e){return i.a.createElement(s,{key:e,title:t.id})})))})))},u=[{uniqueid:"menu1",layer:[{id:"Dreieck",source:"dreieck",sources:{dreieck:{type:"geojson",data:{type:"Polygon",coordinates:[[[7.03,50.19],[7.58,50.39],[7.18,50.29]]]}}},type:"fill",paint:{"fill-color":"red","fill-opacity":.5}},{id:"Polygon",source:"dreieck2",sources:{dreieck2:{type:"geojson",data:{type:"Polygon",coordinates:[[[7.4,50.1],[7.4,50.3],[7.5,50.3],[7.5,50.1]]]}}},type:"fill",paint:{"fill-color":"red","fill-opacity":.5}}]}],d=n("ntAx"),f=n("aAv3");e.default=function(){var t=function(){u.forEach((function(t){t.layer.forEach((function(t){map.on("load",(function(){console.log("map onload"),Object.entries(t.sources).forEach((function(t){var e=t[0],n=t[1];map.addSource(e,n)})),map.addLayer(t),document.getElementById(t.id).onclick=function(t){var e=this.textContent;t.preventDefault(),t.stopPropagation();var n=map.getLayoutProperty(e,"visibility");console.log(n),"visible"===n||void 0===n?(map.setLayoutProperty(e,"visibility","none"),this.className="visk"):(this.className="active",map.setLayoutProperty(e,"visibility","visible"))}}))}))}))};return Object(o.useEffect)((function(){if("complete"!==document.readyState)return window.addEventListener("load",t),function(){window.removeEventListener("load",t)};t()}),[]),i.a.createElement(d.a,{title:"Full Screen Map with GeoJSON and Layer Control/Layer Switcher"},i.a.createElement(c,{layercontrol:u}),i.a.createElement(f.a,null))}},xZpt:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}}}]);
//# sourceMappingURL=component---src-pages-map-show-and-hide-layers-jsx-d06fbb7d4b000457a7a6.js.map