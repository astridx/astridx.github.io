(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+qyr":function(t,e,n){},"7YcG":function(t,e,n){"use strict";var o=n("xZpt"),i=n("FXw5");function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){l=!0,r=t},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw r}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(e,n){o(this,t),this.styles=e||t.DEFAULT_STYLES,this.defaultStyle=n||t.DEFAULT_STYLE,this.onDocumentClick=this.onDocumentClick.bind(this)}return i(t,[{key:"getDefaultPosition",value:function(){return"top-right"}},{key:"onAdd",value:function(t){var e=this;this.map=t,this.controlContainer=document.createElement("div"),this.controlContainer.classList.add("mapboxgl-ctrl"),this.controlContainer.classList.add("mapboxgl-ctrl-group"),this.mapStyleContainer=document.createElement("div"),this.styleButton=document.createElement("button"),this.styleButton.type="button",this.mapStyleContainer.classList.add("mapboxgl-style-list");var n,o=r(this.styles);try{for(o.s();!(n=o.n()).done;){var i=n.value,a=document.createElement("button");a.type="button",a.innerText=i.title,a.classList.add(i.title.replace(/[^a-z0-9-]/gi,"_")),a.dataset.uri=JSON.stringify(i.uri),a.addEventListener("click",(function(t){var n=t.srcElement;if(!n.classList.contains("active")){e.map.setStyle(JSON.parse(n.dataset.uri)),e.mapStyleContainer.style.display="none",e.styleButton.style.display="block";for(var o=e.mapStyleContainer.getElementsByClassName("active");o[0];)o[0].classList.remove("active");n.classList.add("active")}})),i.title===this.defaultStyle&&a.classList.add("active"),this.mapStyleContainer.appendChild(a)}}catch(s){o.e(s)}finally{o.f()}return this.styleButton.classList.add("mapboxgl-ctrl-icon"),this.styleButton.classList.add("mapboxgl-style-switcher"),this.styleButton.addEventListener("click",(function(){e.styleButton.style.display="none",e.mapStyleContainer.style.display="block"})),document.addEventListener("click",this.onDocumentClick),this.controlContainer.appendChild(this.styleButton),this.controlContainer.appendChild(this.mapStyleContainer),this.controlContainer}},{key:"onRemove",value:function(){this.controlContainer&&this.controlContainer.parentNode&&this.map&&this.styleButton&&(this.styleButton.removeEventListener("click",this.onDocumentClick),this.controlContainer.parentNode.removeChild(this.controlContainer),document.removeEventListener("click",this.onDocumentClick),this.map=void 0)}},{key:"onDocumentClick",value:function(t){this.controlContainer&&!this.controlContainer.contains(t.target)&&this.mapStyleContainer&&this.styleButton&&(this.mapStyleContainer.style.display="none",this.styleButton.style.display="block")}}]),t}();s.DEFAULT_STYLE="Streets",s.DEFAULT_STYLES=[{title:"Dark",uri:"mapbox://styles/mapbox/dark-v10"},{title:"Light",uri:"mapbox://styles/mapbox/light-v10"},{title:"Outdoors",uri:"mapbox://styles/mapbox/outdoors-v11"},{title:"Satellite",uri:"mapbox://styles/mapbox/satellite-streets-v11"},{title:"Streets",uri:"mapbox://styles/mapbox/streets-v11"}],e.MapboxStyleSwitcherControl=s},FXw5:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},aAv3:function(t,e,n){"use strict";var o=n("q1tI"),i=n.n(o),r=n("4ZJM"),a=n.n(r),s=(n("rG3h"),n("Sa8L")),l=n("2jDm"),c=n("uDWs"),u=n.n(c),d=n("i8i4"),h=n("Mpt7"),m=s.c.div.withConfig({componentId:"vddixz-0"})([""]),f=s.c.img.withConfig({componentId:"vddixz-1"})(["box-sizing:border-box;border:2px solid ",";box-shadow:0 1px 5px rgba(0,0,0,0.65);margin:0;"," &:not(:first-child){margin-left:0.25rem;}"],(function(t){return t.isActive?Object(s.e)("colors.highlight.500"):"#fff"}),(function(t){var e=t.size;return Object(s.b)(["width:",";height:",";border-radius:",";"],e,e,e)})),y=function(t){return"https://api.mapbox.com/styles/v1/mapbox/"+t.styleID+"/tiles/256/"+t.z+"/"+t.x+"/"+t.y+"?access_token="+t.token},p=function(t){var e=t.map,n=t.token,r=t.styles,a=t.tile,s=t.size,l=t.onChange;console.log("render StyleSelector"),e.on("style.load",(function(){console.log("style load")}));var c=Object(o.useState)(r[0]),u=c[0],d=c[1],p=Object(o.useState)(!1),v=p[0],b=p[1],g=Object(o.useRef)(null);e.once("style.load",(function(){g.current=Object(h.a)(e.getStyle())}));var x=function(t){if(console.log("handle click",t),b(!1),t!==u){d(t);var n=g.current,o=Object(h.a)(e.getStyle()),i=n.get("sources"),r=n.get("layers"),a=o.get("sources").filter((function(t,e){return!i.has(e)})),s=o.get("layers").filter((function(t){return!r.includes(t)}));e.setStyle("mapbox://styles/mapbox/"+t),e.once("style.load",(function(){console.log("on style update"),g.current=Object(h.a)(e.getStyle()),a.forEach((function(t,n){e.addSource(n,t.toJS())})),s.forEach((function(t){e.addLayer(t.toJS())})),l(t)}))}},S=function(){b(!0)};if(2===r.length){var C=u===r[0]?r[1]:r[0];return i.a.createElement(m,null,i.a.createElement(f,{size:s,src:y(Object.assign({styleID:C,token:n},a)),onClick:function(){return x(C)}}))}var k=r.filter((function(t){return t!==u}))[0];return i.a.createElement(m,{onMouseEnter:S,onMouseLeave:function(){b(!1)}},v?i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{size:s,src:y(Object.assign({styleID:k,token:n},a)),onClick:function(){return x(k)}}),r.filter((function(t){return t!==k})).map((function(t){return i.a.createElement(f,{key:t,isActive:t===u,size:s,src:y(Object.assign({styleID:t,token:n},a)),onClick:function(){return x(t)}})}))):i.a.createElement(f,{size:s,src:y(Object.assign({styleID:k,token:n},a)),onClick:S}))};p.defaultProps={map:null,tile:{x:0,y:0,z:0},size:"64px",onChange:function(){}};var v=function(){function t(t){var e=t.styles,n=t.token,o=t.position;this.styles=e,this.token=n,this.position=o}var e=t.prototype;return e.onAdd=function(t){console.log("onAdd"),this.map=t;var e=this.styles,n=this.token;return this.container=document.createElement("div"),this.container.classList.add("mapboxgl-ctrl"),this.container.classList.add("mapboxgl-ctrl-style-selector"),this.container.style.float="none !important",this.container.style.cursor="pointer",Object(d.render)(i.a.createElement(p,{map:t,styles:e,token:n}),this.container),this.container},e.init=function(){console.log("init");var t=this.map,e=this.styles,n=this.token,o=this.container;Object(d.render)(i.a.createElement(p,{map:t,styles:e,token:n}),o)},e.onRemove=function(){this.map=null,this.container.parentNode.removeChild(this.container)},t}(),b=n("orsu"),g=n.n(b),x=n("7YcG"),S=(n("+qyr"),n("jFb6")),C=s.c.div.withConfig({componentId:"sc-6nyq7y-0"})(["width:",";height:",";position:relative;flex:1 0 auto;"],(function(t){return t.width}),(function(t){return t.height})),k=function(t){var e=t.width,n=t.height,r=t.zoom,s=t.center,c=t.bounds,d=t.padding,h=t.styles,m=t.sources,f=t.layers,y=t.minZoom,p=t.maxZoom,b=t.directions,k=t.scale,w=t.styleSwitcher,E=t.layerSwitcher,L=S.siteMetadata.mapboxToken;if(L||console.error("ERROR: Mapbox token is required in gatsby-config.js siteMetadata"),!l.a)return null;var O=Object(o.useRef)(null),j=Object(o.useRef)(null);return Object(o.useEffect)((function(){var t=s,e=r;if(c&&4===c.length){var n=function(t,e,n){void 0===n&&(n=0);var o=t.width,i=t.height,r=u.a.viewport(e,[o,i],void 0,void 0,void 0,!0),a=Math.max(r.zoom-1,0)*(1-n);return{center:r.center,zoom:a}}(O.current,c,d);t=n.center,e=n.zoom}a.a.accessToken=L;var o=new a.a.Map({container:O.current,style:"mapbox://styles/mapbox/"+h[0],center:t,zoom:e,minZoom:y,maxZoom:p});return j.current=o,window.map=o,o.addControl(new a.a.NavigationControl,"top-right"),h.length>1&&o.addControl(new v({styles:h,token:L}),"bottom-left"),o.on("load",(function(){var t;console.log("map onload"),Object.entries(m).forEach((function(t){var e=t[0],n=t[1];o.addSource(e,n)})),f.forEach((function(t){o.addLayer(t)})),b.forEach((function(e){e.pois.forEach((function(t){(new a.a.Marker).setLngLat([t[0],t[1]]).setPopup(new a.a.Popup({offset:25}).setText(t[2])).addTo(o)})),(t=new g.a(e)).setOrigin(e.origin),t.setDestination(e.destination),o.addControl(t,"top-right")})),k.forEach((function(t){o.addControl(new a.a.ScaleControl({maxWidth:t.maxWidth,unit:t.unit}))})),w.forEach((function(t){console.log(t.styles+t.position),o.addControl(new x.MapboxStyleSwitcherControl(t.styles,t.position))})),E.forEach((function(t){console.log(t)}))})),function(){o.remove()}}),[]),i.a.createElement(C,{width:e,height:n},i.a.createElement("div",{ref:O,style:{width:"100%",height:"100%"}}))};k.defaultProps={width:"auto",height:"100%",center:[7.221275,50.326111],zoom:9.5,bounds:null,minZoom:0,maxZoom:24,styles:["streets-v11"],padding:.1,sources:{},layers:[],directions:[],scale:[],styleSwitcher:[],layerSwitcher:[]};e.a=k},hKum:function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),i=n.n(o),r=n("ntAx"),a=n("aAv3"),s=(n("u+Le"),[{title:"Dark",uri:"mapbox://styles/mapbox/dark-v9"},{title:"Light",uri:"mapbox://styles/mapbox/light-v9"},{title:"Streets",uri:"mapbox://styles/mapbox/streets-v11"},{title:"Satellite",uri:"mapbox://styles/mapbox/satellite-v9"}]);e.default=function(){return i.a.createElement(r.a,{title:"Full Screen Map with Route"},i.a.createElement(a.a,{styleSwitcher:[{styles:s,position:"top-left"}]}))}},"u+Le":function(t,e,n){},xZpt:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}}}]);
//# sourceMappingURL=component---src-pages-map-style-switcher-jsx-c6e404688e823cf5c2b5.js.map