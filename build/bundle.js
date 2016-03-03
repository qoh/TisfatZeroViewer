!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e){if(T){null===S&&(S=e);var t=void 0;t=(e-S)/1e3;var n=1/R.fps;t=Math.floor(t/n)*n,t*=R.animSpeed,t+=C,w.value=t,l(),t>=R.getEndTime()?i(!1):requestAnimationFrame(o)}}function i(e){e?(T||requestAnimationFrame(o),w.value>=R.getEndTime()&&(w.value=0),T=!0,S=null,C=parseFloat(w.value),g.textContent="Pause"):(T=!1,S=null,C=null,g.textContent="Play")}function l(){if(null!==R){m.textContent="Frame "+(Math.floor(w.value)+1)+"/"+(R.getEndTime()+1);var e=b.getContext("2d");e.fillStyle=(0,c.TisfatColorToCSS)(R.backgroundColor),e.fillRect(0,0,b.width,b.height),e.save();var t=R.layers[0],n=t.findCurrentState(w.value);t.data.transform(e,n),R.draw(e,w.value),e.restore()}}function u(){y.style.display="none",p.style.display="block",b.width=R.width,b.height=R.height,w.max=R.getEndTime(),w.value=0,w.style.width=R.width+"px",l()}var c=n(1),f=n(2),s=r(f),d=n(4),h=r(d),v=7;top===self&&(document.body.style.backgroundColor="black");var y=document.getElementById("text-view"),p=document.getElementById("main-view");y.style.display="block",y.textContent="Initializing player...";var b=document.getElementById("view"),w=document.getElementById("time"),m=document.getElementById("text"),k=document.getElementById("link"),g=document.getElementById("btn-play"),R=null,T=!1,C=null,S=null;g.addEventListener("click",function(){null!==R&&i(!T)}),w.addEventListener("input",function(){T&&(S=null,C=parseFloat(w.value)),l()}),y.textContent="Loading TISFAT Zero project...",k.href=location.search.substring(1);var j=function P(e,t){a(this,P),this.version=e,this.maxSupported=t},O=function x(){a(this,x)};fetch(k.href).then(function(e){if(!e.ok)throw new O;return e.arrayBuffer()}).then(function(e){y.textContent="Parsing TISFAT Zero project...";var t=new s["default"](e,!0),n=t.ReadUInt16();if(n>v)throw new j(n,v);R=h["default"].read(t,n),u()})["catch"](function(e){console.error(e),console.log(e.stack),e instanceof O?y.textContent="Failed to fetch the project file from '"+k.href+"'.\n                             Check for bad links or CORS support.":e instanceof j?y.textContent="Failed to parse the project (file format version "+e.version+",\n                             this viewer only supports up to version "+e.maxSupported+")":y.textContent="Something unhandled went wrong while trying to load the project. "+e})},function(e,t){"use strict";function n(e){var t=u(e,4),n=t[0],r=t[1],a=t[2],o=t[3];return"rgba("+r+","+a+","+o+","+n/255+")"}function r(e,t,n){for(var r=[],a=e.ReadUInt16(),o=0;a>o;o++)r.push(n(e,t));return r}function a(e,t){var n=e.ReadByte(),r=e.ReadByte(),a=e.ReadByte(),o=e.ReadByte();return[n,r,a,o]}function o(e){var t=e.ReadInt32(),n=e.Read(t),r=new Blob([n],{type:"image/png"}),a=window.URL||window.webkitURL||window,o=a.createObjectURL(r),i=new Image;return i.onload=function(){return a.revokeObjectURL(o)},i.src=o,i}function i(e){var t=e.ReadDouble(),n=e.ReadDouble();return[t,n]}function l(e){var t=e.ReadDouble(),n=e.ReadDouble(),r=e.ReadDouble();return[t,n,r]}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{!r&&l["return"]&&l["return"]()}finally{if(a)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.TisfatColorToCSS=n,t.TisfatReadList=r,t.TisfatReadColor=a,t.TisfatReadBitmap=o,t.TisfatReadPointF=i,t.TisfatReadVec3=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.DataFormatError=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(3),c=r(u),f=t.DataFormatError=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),t}(c["default"]),s=function(){function e(t,n){a(this,e),this.arrayBuffer=t,this.dataView=new DataView(t),this.littleEndian=n,this.cursor=0}return l(e,[{key:"Read",value:function(e){var t=this.arrayBuffer.slice(this.cursor,this.cursor+e);return this.cursor+=e,t}},{key:"ReadBoolean",value:function(){return 0!==this.ReadByte()}},{key:"ReadByte",value:function(){var e=this.dataView.getUint8(this.cursor,this.littleEndian);return this.cursor++,e}},{key:"ReadUInt16",value:function(){var e=this.dataView.getUint16(this.cursor,this.littleEndian);return this.cursor+=2,e}},{key:"ReadUInt32",value:function(){var e=this.dataView.getUint32(this.cursor,this.littleEndian);return this.cursor+=4,e}},{key:"ReadInt32",value:function(){var e=this.dataView.getInt32(this.cursor,this.littleEndian);return this.cursor+=4,e}},{key:"ReadDouble",value:function(){var e=this.dataView.getFloat64(this.cursor,this.littleEndian);return this.cursor+=8,e}},{key:"Read7BitEncodedInt",value:function(){var e,t=0,n=0;do{if(35==n)throw new f("Bad 7-bit encoded Int32");e=this.ReadByte(),t|=(127&e)<<n,n+=7}while(0!==(128&e));return t}},{key:"ReadString",value:function(){var e=this.Read7BitEncodedInt(),t=this.Read(e),n=String.fromCharCode.apply(null,new Uint8Array(t));return n}}]),e}();t["default"]=s},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(e){n(this,t);var a=r(this,Object.getPrototypeOf(t).call(this));return a.message=e,a.stack=(new Error).stack,a.name=a.constructor.name,a}return a(t,e),t}(Error);t["default"]=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(5),l=r(i),u=n(17),c=r(u),f=n(18),s=r(f),d=n(16),h=n(1),v=function(){function e(){a(this,e),this.layers=[],this.animSpeed=10,this.fps=60,this.width=460,this.height=360,this.backgroundColor=[255,255,255,255]}return o(e,[{key:"draw",value:function(e,t){var n=!0,r=!1,a=void 0;try{for(var o,i=this.layers[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var l=o.value;l.draw(e,t)}}catch(u){r=!0,a=u}finally{try{!n&&i["return"]&&i["return"]()}finally{if(r)throw a}}}},{key:"getEndTime",value:function(){var e=0,t=!0,n=!1,r=void 0;try{for(var a,o=this.layers[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var i=a.value;e=Math.max(e,i.framesets[i.framesets.length-1].getEndTime())}}catch(l){n=!0,r=l}finally{try{!t&&o["return"]&&o["return"]()}finally{if(n)throw r}}return e}},{key:"createCameraLayer",value:function(){var e=new d.Camera,t=new l["default"],n=new c["default"];return t.name="Camera",t.timelineColor=[255,70,120,255],t.data=e,n.keyframes.push(new s["default"](0,e.createRefState())),n.keyframes.push(new s["default"](this.getEndTime(),e.createRefState())),t.framesets.push(n),t}}],[{key:"read",value:function(t,n){var r=new e;return r.layers=(0,h.TisfatReadList)(t,n,l["default"].read),console.log(r.layers.map(function(e){return e.name})),6>n&&r.layers.unshift(r.createCameraLayer()),n>=1&&(r.animSpeed=t.ReadDouble(),n>=5&&(r.fps=t.ReadDouble()),n>=2&&(r.width=t.ReadInt32(),r.height=t.ReadInt32(),r.backgroundColor=(0,h.TisfatReadColor)(t,n))),r}}]),e}();t["default"]=v},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),l=n(6),u=n(17),c=r(u),f=function(){function e(){a(this,e),this.name="Layer",this.visible=!0,this.timelineColor="aliceblue",this.data=null,this.framesets=[],this.depth=0}return o(e,[{key:"findFrameset",value:function(e){var t=!0,n=!1,r=void 0;try{for(var a,o=this.framesets[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var i=a.value;if(e>=i.getStartTime()&&e<=i.getEndTime())return i}}catch(l){n=!0,r=l}finally{try{!t&&o["return"]&&o["return"]()}finally{if(n)throw r}}return null}},{key:"findCurrentState",value:function(e){if(!this.visible||null===this.data)return null;var t=this.findFrameset(e);if(null===t)return null;var n=void 0;for(n=1;n<t.keyframes.length&&!(t.keyframes[n].time>=e);n++);var r=t.keyframes[n-1],a=t.keyframes[n],o=(e-r.time)/(a.time-r.time);return this.data.interpolate(o,r.state,a.state,r.interpMode)}},{key:"draw",value:function(e,t){var n=this.findCurrentState(t);null!==n&&this.data.draw(e,n)}}],[{key:"read",value:function(t,n){var r=new e;r.name=t.ReadString(),r.visible=t.ReadBoolean(),r.timelineColor=(0,i.TisfatReadColor)(t,n);var a=(0,l.TisfatResolveEntityID)(t.ReadUInt16());return r.data=a.read(t,n),r.framesets=(0,i.TisfatReadList)(t,n,c["default"].read),r}}]),e}();t["default"]=f},function(e,t,n){"use strict";function r(e){if(h[e])return h[e];throw new Error("cannot resolve entity id "+e)}function a(e){if(v[e])return v[e];throw new Error("cannot resolve entity state id "+e)}Object.defineProperty(t,"__esModule",{value:!0}),t.TisfatResolveEntityID=r,t.TisfatResolveEntityStateID=a;var o=n(7),i=n(10),l=n(11),u=n(12),c=n(13),f=n(14),s=n(15),d=n(16),h={0:o.StickFigure,1:i.BitmapObject,3:l.LineObject,4:u.RectObject,5:c.CircleObject,6:f.PolyObject,7:s.TextObject,8:o.StickFigure,9:d.Camera},v={0:o.StickFigureState,1:i.BitmapObjectState,3:l.LineObjectState,4:u.RectObjectState,5:c.CircleObjectState,6:f.PolyObjectState,7:s.TextObjectState,8:o.StickFigureState,9:d.CameraState}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.StickFigureJoint=t.StickFigureState=t.StickFigure=t.StickFigureJointState=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=n(8),l=n(9),u=t.StickFigureJointState=function(){function e(){r(this,e),this.parent=null,this.children=[],this.location=[0,0],this.jointColor=[255,0,0,0],this.thickness=6,this.bitmapIndex=-1,this.manipulatable=!0}return a(e,null,[{key:"read",value:function(t,n){var r=new e;r.location=(0,o.TisfatReadPointF)(t,n),r.jointColor=(0,o.TisfatReadColor)(t,n),r.thickness=t.ReadDouble(),n>=2&&(r.manipulatable=t.ReadBoolean(),n>=4&&(r.bitmapIndex=t.ReadInt32())),r.children=(0,o.TisfatReadList)(t,n,e.read);var a=!0,i=!1,l=void 0;try{for(var u,c=r.children[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var f=u.value;f.parent=r}}catch(s){i=!0,l=s}finally{try{!a&&c["return"]&&c["return"]()}finally{if(i)throw l}}return r}},{key:"interpolate",value:function(t,n,r,a){var o=new e;o.parent=n.parent,o.bitmapIndex=n.bitmapIndex,o.location=(0,l.InterpolatePointF)(t,n.location,r.location,a),o.jointColor=(0,l.InterpolateColor)(t,n.jointColor,r.jointColor,a),o.thickness=(0,l.Interpolate)(t,n.thickness,r.thickness,a);for(var i=0;i<n.children.length;i++)o.children.push(e.interpolate(t,n.children[i],r.children[i],a));return o}}]),e}(),c=(t.StickFigure=function(){function e(){r(this,e)}return a(e,[{key:"draw",value:function(e,t){this.root.draw(e,t.root)}},{key:"interpolate",value:function(e,t,n,r){var a=new c;return a.root=u.interpolate(e,t.root,n.root,r),a}}],[{key:"read",value:function(t,n){var r=new e;return r.root=f.read(t,n),r}}]),e}(),t.StickFigureState=function(){function e(){r(this,e)}return a(e,null,[{key:"read",value:function(t,n){var r=new e;return r.root=u.read(t,n),r}}]),e}()),f=t.StickFigureJoint=function(){function e(){r(this,e),this.parent=null,this.children=[],this.jointColor=[255,0,0,0],this.handleColor=[255,0,0,255],this.thickness=6,this.initialBitmapIndex=-1,this.handleVisible=!0,this.visible=!0,this.manipulatable=!0}return a(e,[{key:"draw",value:function(e,t){if(this.children.count!=t.children.count)throw new Error("state does not match this joint");for(var n=0;n<this.children.length;n++)this.children[n].drawTo(e,t.children[n],this,t),this.children[n].draw(e,t.children[n])}},{key:"drawTo",value:function(e,t,n,r){if(this.visible)switch(this.drawType){case"CircleLine":var a=t.location[0]-r.location[0],o=t.location[1]-r.location[1],l=Math.sqrt(a*a+o*o)/2,u=r.location[0]+a/2,c=r.location[1]+o/2;(0,i.TisfatCircle)(e,[u,c],l,t.jointColor);break;case"CircleRadius":(0,i.TisfatCircle)(e,t.location,t.thickness,t.jointColor);break;case"Normal":(0,i.TisfatCappedLine)(e,t.location,r.location,t.thickness,t.jointColor);break;default:throw new Error("unknown joint drawing type "+this.drawType)}}}],[{key:"read",value:function(t,n){var r=new e;r.parent=null,r.location=(0,o.TisfatReadPointF)(t,n),r.jointColor=(0,o.TisfatReadColor)(t,n),r.handleColor=(0,o.TisfatReadColor)(t,n),r.thickness=t.ReadDouble(),n>=2?(r.drawType=t.ReadString(),r.handleVisible=t.ReadBoolean(),r.manipulatable=t.ReadBoolean(),r.visible=t.ReadBoolean()):r.drawType=t.ReadBoolean()?"CircleLine":"Normal",r.children=(0,o.TisfatReadList)(t,n,e.read);var a=!0,i=!1,l=void 0;try{for(var u,c=r.children[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var f=u.value;f.parent=r}}catch(s){i=!0,l=s}finally{try{!a&&c["return"]&&c["return"]()}finally{if(i)throw l}}if(n>=4){for(var d=(0,o.TisfatReadList)(t,n,function(e){return e.ReadString()}),h=((0,o.TisfatReadList)(t,n,o.TisfatReadBitmap),(0,o.TisfatReadList)(t,n,function(e){return e.ReadDouble()}),(0,o.TisfatReadList)(t,n,o.TisfatReadPointF),0);h<d.length;h++);r.initialBitmapIndex=t.ReadInt32()}return r}}]),e}()},function(e,t,n){"use strict";function r(e,t,n,r){e.beginPath(),e.arc(t[0],t[1],n,0,2*Math.PI,!1),e.fillStyle=(0,o.TisfatColorToCSS)(r),e.fill()}function a(e,t,n,a,i){e.beginPath(),e.moveTo(t[0],t[1]),e.lineTo(n[0],n[1]),e.lineWidth=2*a,e.strokeStyle=(0,o.TisfatColorToCSS)(i),e.stroke(),r(e,t,a,i),r(e,n,a,i)}Object.defineProperty(t,"__esModule",{value:!0}),t.TisfatCircle=r,t.TisfatCappedLine=a;var o=n(1)},function(e,t){"use strict";function n(e,t,n,r){switch(r){case"None":return 1>e?t:n;case"Linear":return t+(n-t)*e;case"QuadInOut":return n-=t,e*=2,1>e?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t);case"ExpoInOut":return n-=t,e*=2,1>e?n/2*Math.pow(2,10*(e-1))+t:(e--,n/2*(-Math.pow(2,-10*e)+2)+t);case"BounceOut":return n-=t,1/2.75>e?n*(7.5625*e*e)+t:2/2.75>e?(e-=1.5/2.75,n*(7.5625*e*e+.75)+t):2.5/2.75>e?(e-=2.25/2.75,n*(7.5625*e*e+.9375)+t):(e-=2.625/2.75,n*(7.5625*e*e+.984375)+t);case"BackOut":return n-=t,n*((e-=1)*e*(2.70158*e+1.70158)+1)+t;default:throw new Error("unknown interpMode "+r)}}function r(e,t,r,a){return[n(e,t[0],r[0],a),n(e,t[1],r[1],a)]}function a(e,t,r,a){return[Math.max(Math.min(n(e,t[0],r[0],a),255),0),Math.max(Math.min(n(e,t[1],r[1],a),255),0),Math.max(Math.min(n(e,t[2],r[2],a),255),0),Math.max(Math.min(n(e,t[3],r[3],a),255),0)]}Object.defineProperty(t,"__esModule",{value:!0}),t.Interpolate=n,t.InterpolatePointF=r,t.InterpolateColor=a},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.BitmapObjectState=t.BitmapObject=void 0;var a=function(){function e(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{!r&&l["return"]&&l["return"]()}finally{if(a)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),l=n(9),u=(t.BitmapObject=function(){function e(){r(this,e)}return o(e,[{key:"interpolate",value:function(e,t,n,r){var a=new u;return a.location=(0,l.InterpolatePointF)(e,t.location,n.location,r),a.size=(0,l.InterpolatePointF)(e,t.size,n.size,r),a.rotation=(0,l.Interpolate)(e,t.rotation,n.rotation,r),a.alpha=(0,l.Interpolate)(e,t.alpha,n.alpha,r),a}},{key:"draw",value:function(e,t){var n=a(t.location,2),r=n[0],o=n[1],i=a(t.size,2),l=i[0],u=i[1];e.globalAlpha=t.alpha,e.drawImage(this.bitmap,r,o,l,u),e.globalAlpha=1}}],[{key:"read",value:function(t,n){var r=new e;return r.bitmap=(0,i.TisfatReadBitmap)(t,n),r}}]),e}(),t.BitmapObjectState=function(){function e(){r(this,e)}return o(e,null,[{key:"read",value:function(t,n){var r=new e;r.location=(0,i.TisfatReadPointF)(t,n),r.size=(0,i.TisfatReadPointF)(t,n);t.ReadDouble(),t.ReadDouble();return r.rotation=t.ReadDouble(),n>=5?r.alpha=t.ReadInt32()/255:r.alpha=1,r}}]),e}())},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.LineObjectState=t.LineObject=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(8),i=n(1),l=n(9),u=(t.LineObject=function(){function e(){r(this,e)}return a(e,[{key:"draw",value:function(e,t){(0,o.TisfatCappedLine)(e,t.a,t.b,t.thickness,t.color)}},{key:"interpolate",value:function(e,t,n,r){var a=new u;return a.a=(0,l.InterpolatePointF)(e,t.a,n.a,r),a.b=(0,l.InterpolatePointF)(e,t.b,n.b,r),a.color=(0,l.InterpolateColor)(e,t.color,n.color,r),a.thickness=(0,l.Interpolate)(e,t.thickness,n.thickness,r),a}}],[{key:"read",value:function(){return new e}}]),e}(),t.LineObjectState=function(){function e(){r(this,e)}return a(e,null,[{key:"read",value:function(t,n){var r=new e;return r.a=(0,i.TisfatReadPointF)(t,n),r.b=(0,i.TisfatReadPointF)(t,n),r.color=(0,i.TisfatReadColor)(t,n),r.thickness=t.ReadDouble(),r}}]),e}())},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.RectObjectState=t.RectObject=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=n(9),l=(t.RectObject=function(){function e(){r(this,e)}return a(e,[{key:"draw",value:function(e,t){e.fillStyle=(0,o.TisfatColorToCSS)(t.color),e.fillRect(t.position[0],t.position[1],t.extent[0],t.extent[1])}},{key:"interpolate",value:function(e,t,n,r){var a=new l;return a.position=(0,i.InterpolatePointF)(e,t.position,n.position,r),a.extent=(0,i.InterpolatePointF)(e,t.extent,n.extent,r),a.color=(0,i.InterpolateColor)(e,t.color,n.color,r),a}}],[{key:"read",value:function(){return new e}}]),e}(),t.RectObjectState=function(){function e(){r(this,e)}return a(e,null,[{key:"read",value:function(t,n){var r=new e;return r.position=(0,o.TisfatReadPointF)(t,n),r.extent=(0,o.TisfatReadPointF)(t,n),r.color=n>=3?(0,o.TisfatReadColor)(t,n):[255,0,0,0],r}}]),e}())},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(8),i=n(9),l=n(1),u=(function(){function e(){r(this,e)}return a(e,[{key:"draw",value:function(e,t){(0,o.TisfatCircle)(e,t.position,t.radius,t.color)}},{key:"interpolate",value:function(e,t,n,r){var a=new u;return a.position=(0,i.InterpolatePointF)(e,t.position,n.position,r),a.radius=(0,i.Interpolate)(e,t.radius,n.radius,r),a.color=(0,i.InterpolateColor)(e,t.color,n.color,r),a}}],[{key:"read",value:function(){return new e}}]),e}(),function(){function e(){r(this,e)}return a(e,null,[{key:"read",value:function(t,n){var r=new e;return r.position=(0,l.TisfatReadPointF)(t,n),r.radius=t.ReadDouble(),r.color=(0,l.TisfatReadColor)(t,n),r}}]),e}())},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.PolyObjectState=t.PolyObjectJoint=t.PolyObject=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=n(9),l=(t.PolyObject=function(){function e(){r(this,e)}return a(e,[{key:"interpolate",value:function(e,t,n,r){var a=new u;a.color=(0,i.InterpolateColor)(e,t.color,n.color,r);for(var o=0;o<t.points.length;o++){var c=new l;c.location=(0,i.InterpolatePointF)(e,t.points[o].location,n.points[o].location,r),a.points.append(c)}return a}},{key:"draw",value:function(e,t){e.fillStyle=(0,o.TisfatColorToCSS)(t.color),e.beginPath();var n=!0,r=!0,a=!1,i=void 0;try{for(var l,u=t.points[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var c=l.value.location;n?(e.moveTo(c),n=!1):e.lineTo(c)}}catch(f){a=!0,i=f}finally{try{!r&&u["return"]&&u["return"]()}finally{if(a)throw i}}e.closePath(),e.fill()}}],[{key:"read",value:function(t,n){return new e}}]),e}(),t.PolyObjectJoint=function(){function e(){r(this,e)}return a(e,null,[{key:"read",value:function(e,t){this.location=(0,o.TisfatReadPointF)(e,t)}}]),e}()),u=t.PolyObjectState=function(){function e(){r(this,e)}return a(e,null,[{key:"read",value:function(t,n){var r=new e;return r.points=(0,o.TisfatReadList)(t,n,l.read),r.color=(0,o.TisfatReadColor)(t,n),r}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.TextObjectState=t.TextObject=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=n(9),l={Bold:"bold",Italic:"italic",Regular:"normal"},u={Center:"center",Far:"end",Near:"start"},c={Center:"middle",Far:"bottom",Near:"top"},f=(t.TextObject=function(){function e(){r(this,e)}return a(e,[{key:"draw",value:function(e,t){e.font=t.textFont,e.fillStyle=(0,o.TisfatColorToCSS)(t.textColor),e.textAlign=u[t.textAlignment],e.textBaseline=c[t.textAlignment],e.fillText(t.text,t.location,t.location)}},{key:"interpolate",value:function(e,t,n,r){var a=new f;return a.location=(0,i.InterpolatePointF)(e,t.location,n.location,r),a.size=(0,i.InterpolatePointF)(e,t.size,n.size,r),a.text=t.text,a.textAlignment=t.textAlignment,a.textFont=t.textFont,a.textColor=(0,i.InterpolateColor)(e,t.textColor,n.textColor,r),a}}],[{key:"read",value:function(){return new e}}]),e}(),t.TextObjectState=function(){function e(){r(this,e)}return a(e,null,[{key:"read",value:function(t,n){var r=new e;r.location=(0,o.TisfatReadPointF)(t,n),r.size=(0,o.TisfatReadPointF)(t,n),r.text=t.ReadString();var a=t.ReadString(),i=t.ReadDouble(),u=t.ReadString();return r.textFont=l[u]+" "+i+"px "+a,n>7?r.textColor=(0,o.TisfatReadColor)(t,n):r.textColor=[255,0,0,0],r}}]),e}())},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Camera=t.CameraState=void 0;var a=function(){function e(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{!r&&l["return"]&&l["return"]()}finally{if(a)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),l=n(9),u=t.CameraState=function(){function e(){r(this,e)}return o(e,null,[{key:"read",value:function(t,n){var r=new e;return r.location=(0,i.TisfatReadPointF)(t,n),r.scale=t.ReadDouble(),r.angle=t.ReadDouble(),r}}]),e}();t.Camera=function(){function e(){r(this,e)}return o(e,[{key:"interpolate",value:function(e,t,n,r){var a=new u;return a.location=(0,l.InterpolatePointF)(e,t.location,n.location,r),a.angle=(0,l.Interpolate)(e,t.angle,n.angle,r),a.scale=(0,l.Interpolate)(e,t.scale,n.scale,r),a}},{key:"draw",value:function(){}},{key:"transform",value:function(e,t){var n=a(t.location,2),r=n[0],o=n[1],i=1/t.scale;e.translate(-r/t.scale,-o/t.scale),e.scale(i,i),e.rotate(t.angle)}},{key:"createRefState",value:function(){var e=new u;return e.location=[0,0],e.scale=1,e.angle=0,e}}],[{key:"read",value:function(){return new e}}]),e}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(18),l=r(i),u=n(1),c=function(){function e(){a(this,e),this.keyframes=[]}return o(e,[{key:"getStartTime",value:function(){return this.keyframes[0].time}},{key:"getEndTime",value:function(){return this.keyframes[this.keyframes.length-1].time}}],[{key:"read",value:function(t,n){var r=new e;return r.keyframes=(0,u.TisfatReadList)(t,n,l["default"].read),r}}]),e}();t["default"]=c},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(6),i=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?null:arguments[1],a=arguments.length<=2||void 0===arguments[2]?"Linear":arguments[2];r(this,e),this.time=t,this.state=n,this.interpMode=a}return a(e,null,[{key:"read",value:function(t,n){var r=new e;r.time=t.ReadUInt32();var a=(0,o.TisfatResolveEntityStateID)(t.ReadUInt16());return r.interpMode=n>=2?t.ReadString():"Linear",r.state=a.read(t,n),r}}]),e}();t["default"]=i}]);
//# sourceMappingURL=bundle.js.map