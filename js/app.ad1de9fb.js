(function(e){function t(t){for(var n,i,u=t[0],s=t[1],l=t[2],g=0,m=[];g<u.length;g++)i=u[g],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);c&&c(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,u=1;u<a.length;u++){var s=a[u];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/text-cook/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"0cf2":function(e,t,a){"use strict";var n=a("780c"),r=a.n(n);r.a},2219:function(e,t,a){},4732:function(e,t,a){},"48af":function(e,t,a){"use strict";var n=a("6372"),r=a.n(n);r.a},5277:function(e,t,a){"use strict";var n=a("d3f9"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1),a("Footer")],1)},o=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},u=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer-section"},[e._v(" Developed by "),a("span",{staticStyle:{"font-weight":"700"}},[e._v("Team Cook")]),e._v(" @codeBOSS2020 ")])}],s={},l=s,c=(a("0cf2"),a("2877")),g=Object(c["a"])(l,i,u,!1,null,"c420ba6e",null),m=g.exports,p={components:{Footer:m}},d=p,f=(a("034f"),Object(c["a"])(d,r,o,!1,null,null,null)),h=f.exports,v=a("8c4f"),x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("ColorBg"),a("Title"),a("div",{staticClass:"btn-holder"},[a("div",{staticClass:"btn-box"},[a("el-button",{attrs:{type:"success"},on:{click:function(t){return e.redirect("text")}}},[e._v(e._s(e.text_btn))])],1),a("div",{staticClass:"btn-box"},[a("el-button",{attrs:{type:"warning"},on:{click:function(t){return e.redirect("image")}}},[e._v(e._s(e.image_btn))])],1),a("div",{staticClass:"btn-box"},[a("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.redirect("audio")}}},[e._v(e._s(e.audio_btn))])],1)])],1)},b=[],_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"animated-bg"},[a("canvas",{attrs:{id:"c"}})])}],w={},y=w,C=(a("5277"),Object(c["a"])(y,_,k,!1,null,"667b9589",null)),j=C.exports,O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title-block"},[a("h1",[e._v("Text Cook")])])}],R={},U=R,S=(a("6d4a"),Object(c["a"])(U,O,T,!1,null,"1ccbac12",null)),E=S.exports,B={name:"Home",components:{Title:E,ColorBg:j},data:function(){return{language:"en",text_btn:"I got text!",image_btn:"I got image!",audio_btn:"I got audio!"}},methods:{redirect:function(e){$e.push({name:e})}}},$=B,L=(a("8466"),Object(c["a"])($,x,b,!1,null,"3ef328cd",null)),z=L.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"text-view",attrs:{"element-loading-text":"Loading...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[a("ColorBg"),a("BackBtn"),a("Title"),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.input_text,expression:"input_text"}],attrs:{type:"textarea",rows:12,placeholder:"Input your text here to start translating!",resize:"none"},domProps:{value:e.input_text},on:{input:function(t){t.target.composing||(e.input_text=t.target.value)}}}),a("div",{staticClass:"language-selection-box"},[e._m(0),a("el-select",{attrs:{size:"mini",placeholder:"Select"},model:{value:e.to,callback:function(t){e.to=t},expression:"to"}},e._l(e.options,(function(e){return a("el-option",{key:e.language,attrs:{label:e.name,value:e.language}})})),1)],1),a("el-tooltip",{attrs:{content:"Click to copy to clipboard",effect:"dark",placement:"top"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.output_text,expression:"output_text"}],ref:"translated",attrs:{type:"textarea",rows:12,resize:"none",readonly:""},domProps:{value:e.output_text},on:{click:e.copyText,input:function(t){t.target.composing||(e.output_text=t.target.value)}}})])],1)},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{color:"white"}},[e._v(" Translate to: "),a("i",{staticClass:"el-icon-caret-right"})])}],A=(a("96cf"),a("1da1")),I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"back-btn-holder"},[a("el-button",{attrs:{type:"danger",circle:"",icon:"el-icon-arrow-left"},on:{click:function(t){return e.redirect("home")}}})],1)},M=[],F={methods:{redirect:function(e){$e.push({name:e})}}},H=F,K=(a("48af"),Object(c["a"])(H,I,M,!1,null,"664ecfa7",null)),D=K.exports,G=a("bc3a"),q=a.n(G),J="AIzaSyDWy1jfeY48F5Jq90LFbVbX5P8ONrhhslw";function W(e){return X.apply(this,arguments)}function X(){return X=Object(A["a"])(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.post("https://translation.googleapis.com/language/translate/v2/detect?key="+J,{q:t});case 3:if(a=e.sent,n=a.data.data.detections,!(n.length>0)){e.next=9;break}return e.abrupt("return",{success:!0,data:n[0][0].language});case 9:return e.abrupt("return",{success:!1,error:"No language detected!"});case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e["catch"](0),e.abrupt("return",{success:!1,error:e.t0.response.data.error});case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),X.apply(this,arguments)}function Y(e,t,a){return V.apply(this,arguments)}function V(){return V=Object(A["a"])(regeneratorRuntime.mark((function e(t,a,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.post("https://translation.googleapis.com/language/translate/v2?key="+J,{q:t,source:a,target:n,format:"text"},{"Content-Type":"application/json"});case 3:return r=e.sent,e.abrupt("return",{success:!0,data:r.data.data.translations[0].translatedText});case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",{success:!1,error:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),V.apply(this,arguments)}function Z(e){return Q.apply(this,arguments)}function Q(){return Q=Object(A["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,W(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}function ee(e,t,a){return te.apply(this,arguments)}function te(){return te=Object(A["a"])(regeneratorRuntime.mark((function e(t,a,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,Y(t,a,n);case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.abrupt("return",{success:!0,data:""});case 8:case"end":return e.stop()}}),e)}))),te.apply(this,arguments)}var ae=[{language:"af",name:"Afrikaans"},{language:"sq",name:"Albanian"},{language:"am",name:"Amharic"},{language:"ar",name:"Arabic"},{language:"hy",name:"Armenian"},{language:"az",name:"Azerbaijani"},{language:"eu",name:"Basque"},{language:"be",name:"Belarusian"},{language:"bn",name:"Bengali"},{language:"bs",name:"Bosnian"},{language:"bg",name:"Bulgarian"},{language:"ca",name:"Catalan"},{language:"ceb",name:"Cebuano"},{language:"ny",name:"Chichewa"},{language:"zh-CN",name:"Chinese (Simplified)"},{language:"zh-TW",name:"Chinese (Traditional)"},{language:"co",name:"Corsican"},{language:"hr",name:"Croatian"},{language:"cs",name:"Czech"},{language:"da",name:"Danish"},{language:"nl",name:"Dutch"},{language:"en",name:"English"},{language:"eo",name:"Esperanto"},{language:"et",name:"Estonian"},{language:"tl",name:"Filipino"},{language:"fi",name:"Finnish"},{language:"fr",name:"French"},{language:"fy",name:"Frisian"},{language:"gl",name:"Galician"},{language:"ka",name:"Georgian"},{language:"de",name:"German"},{language:"el",name:"Greek"},{language:"gu",name:"Gujarati"},{language:"ht",name:"Haitian Creole"},{language:"ha",name:"Hausa"},{language:"haw",name:"Hawaiian"},{language:"iw",name:"Hebrew"},{language:"hi",name:"Hindi"},{language:"hmn",name:"Hmong"},{language:"hu",name:"Hungarian"},{language:"is",name:"Icelandic"},{language:"ig",name:"Igbo"},{language:"id",name:"Indonesian"},{language:"ga",name:"Irish"},{language:"it",name:"Italian"},{language:"ja",name:"Japanese"},{language:"jw",name:"Javanese"},{language:"kn",name:"Kannada"},{language:"kk",name:"Kazakh"},{language:"km",name:"Khmer"},{language:"rw",name:"Kinyarwanda"},{language:"ko",name:"Korean"},{language:"ku",name:"Kurdish (Kurmanji)"},{language:"ky",name:"Kyrgyz"},{language:"lo",name:"Lao"},{language:"la",name:"Latin"},{language:"lv",name:"Latvian"},{language:"lt",name:"Lithuanian"},{language:"lb",name:"Luxembourgish"},{language:"mk",name:"Macedonian"},{language:"mg",name:"Malagasy"},{language:"ms",name:"Malay"},{language:"ml",name:"Malayalam"},{language:"mt",name:"Maltese"},{language:"mi",name:"Maori"},{language:"mr",name:"Marathi"},{language:"mn",name:"Mongolian"},{language:"my",name:"Myanmar (Burmese)"},{language:"ne",name:"Nepali"},{language:"no",name:"Norwegian"},{language:"or",name:"Odia (Oriya)"},{language:"ps",name:"Pashto"},{language:"fa",name:"Persian"},{language:"pl",name:"Polish"},{language:"pt",name:"Portuguese"},{language:"pa",name:"Punjabi"},{language:"ro",name:"Romanian"},{language:"ru",name:"Russian"},{language:"sm",name:"Samoan"},{language:"gd",name:"Scots Gaelic"},{language:"sr",name:"Serbian"},{language:"st",name:"Sesotho"},{language:"sn",name:"Shona"},{language:"sd",name:"Sindhi"},{language:"si",name:"Sinhala"},{language:"sk",name:"Slovak"},{language:"sl",name:"Slovenian"},{language:"so",name:"Somali"},{language:"es",name:"Spanish"},{language:"su",name:"Sundanese"},{language:"sw",name:"Swahili"},{language:"sv",name:"Swedish"},{language:"tg",name:"Tajik"},{language:"ta",name:"Tamil"},{language:"tt",name:"Tatar"},{language:"te",name:"Telugu"},{language:"th",name:"Thai"},{language:"tr",name:"Turkish"},{language:"tk",name:"Turkmen"},{language:"uk",name:"Ukrainian"},{language:"ur",name:"Urdu"},{language:"ug",name:"Uyghur"},{language:"uz",name:"Uzbek"},{language:"vi",name:"Vietnamese"},{language:"cy",name:"Welsh"},{language:"xh",name:"Xhosa"},{language:"yi",name:"Yiddish"},{language:"yo",name:"Yoruba"},{language:"zu",name:"Zulu"},{language:"he",name:"Hebrew"},{language:"zh",name:"Chinese (Simplified)"}],ne={components:{ColorBg:j,BackBtn:D,Title:E},data:function(){return{loading:!1,input_text:"",output_text:"",options:ae,from:"",to:"en"}},methods:{get_translation:function(e){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.from!==t.to){a.next=4;break}t.output_text=t.input_text,a.next=8;break;case 4:return a.next=6,ee(t.input_text,e,t.to);case 6:n=a.sent,n.success?t.output_text=n.data:t.$message.error(n.error);case 8:case"end":return a.stop()}}),a)})))()},copyText:function(){this.$refs.translated.select(),document.execCommand("copy"),this.$notify.success("Copied to clipboard!")}},watch:{to:function(){this.get_translation(this.from)},input_text:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.input_text.length>0)){t.next=7;break}return t.next=3,Z(e.input_text);case 3:a=t.sent,a.success?(e.from=a.data,e.get_translation(e.from)):e.$message.error(a.error),t.next=8;break;case 7:e.output_text=e.input_text;case 8:case"end":return t.stop()}}),t)})))()}}},re=ne,oe=(a("e544"),Object(c["a"])(re,P,N,!1,null,"680e3b52",null)),ie=oe.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"image-view",attrs:{"element-loading-text":"Running OCR and Translation...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[a("ColorBg"),a("BackBtn"),a("Title"),a("div",{staticClass:"image-container"},[a("el-upload",{ref:"imgUpload",attrs:{action:"#",limit:1,"auto-upload":!1,"on-change":e.onUploadChange,"on-exceed":e.onExceed,"file-list":e.fileList,"show-file-list":!1}},[a("el-button",{attrs:{size:"small",type:"warning"}},[e._v("Click to upload your image")])],1),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-image",{attrs:{src:e.imgUrl,fit:"fill",alt:"Failed to Load Image"}},[a("div",{staticStyle:{"background-color":"white",color:"#909399",height:"50vw",display:"flex","justify-content":"center","align-items":"center"},attrs:{slot:"error"},slot:"error"},[e._v(" NO IMAGE ")])])],1)],1),a("div",{staticClass:"language-selection-box"},[e._m(0),a("el-select",{attrs:{size:"mini",placeholder:"Select"},model:{value:e.to,callback:function(t){e.to=t},expression:"to"}},e._l(e.options,(function(e){return a("el-option",{key:e.language,attrs:{label:e.name,value:e.language}})})),1)],1),a("el-tooltip",{attrs:{content:"Click to copy to clipboard",effect:"dark",placement:"top"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.output_text,expression:"output_text"}],ref:"translated",attrs:{type:"textarea",rows:12,resize:"none",readonly:""},domProps:{value:e.output_text},on:{click:e.copyText,input:function(t){t.target.composing||(e.output_text=t.target.value)}}})])],1)},se=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{color:"white"}},[e._v(" Translate to: "),a("i",{staticClass:"el-icon-caret-right"})])}];a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("b0c0"),a("ac1f"),a("1276"),a("a4d3"),a("e01a");function le(e){return ce.apply(this,arguments)}function ce(){return ce=Object(A["a"])(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.post("https://vision.googleapis.com/v1/images:annotate?key="+J,{requests:[{image:{content:t},features:[{type:"TEXT_DETECTION"}]}]});case 3:if(a=e.sent,n=a.data.responses[0].textAnnotations,!(n.length>0)){e.next=9;break}return e.abrupt("return",{success:!0,text:n[0].description,lang:n[0].locale});case 9:return e.abrupt("return",{success:!1,error:"No language detected!"});case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e["catch"](0),e.abrupt("return",{success:!1,error:e.t0.response});case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),ce.apply(this,arguments)}function ge(e){switch(e.toLowerCase()){case"jpg":case"gif":case"bmp":case"png":return!0}return!1}var me=function(e){return new Promise((function(t,a){var n=e.name.split("."),r=n[n.length-1];ge(r)||a({data:{error:{message:"Unable to encode invalid image file!"}}});var o=new FileReader;o.readAsDataURL(e),o.onload=function(){return t(o.result)},o.onerror=function(e){return a(e)}}))};function pe(e){return de.apply(this,arguments)}function de(){return de=Object(A["a"])(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,me(t);case 3:return a=e.sent,a=a.split(",")[1],e.next=7,le(a);case 7:if(n=e.sent,!n.success){e.next=12;break}return e.abrupt("return",n);case 12:throw n.error;case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e["catch"](0),e.abrupt("return",{success:!1,error:void 0===e.t0?"Unknown Error!":e.t0.data.error.message});case 18:case"end":return e.stop()}}),e,null,[[0,15]])}))),de.apply(this,arguments)}var fe={components:{ColorBg:j,BackBtn:D,Title:E},data:function(){return{loading:!1,imgUrl:"",output_text:"",options:ae,to:"en",fileList:[],img:null}},methods:{copyText:function(){this.$refs.translated.select(),document.execCommand("copy"),this.$notify.success("Copied to clipboard!")},onExceed:function(e){var t={raw:e[0]};this.fileList[0]=t,this.onUploadChange(t)},onUploadChange:function(e){this.img=e.raw,this.imgUrl=URL.createObjectURL(e.raw)},get_detected_text:function(e){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function a(){var n,r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.loading=!0,a.next=3,pe(e);case 3:if(n=a.sent,!n.success){a.next=19;break}if(r=n.lang,o=n.text,r!==t.to){a.next=12;break}t.output_text=o,t.loading=!1,a.next=17;break;case 12:return a.next=14,ee(o,r,t.to);case 14:n=a.sent,n.success?t.output_text=n.data:t.$message.error(n.error),t.loading=!1;case 17:a.next=22;break;case 19:t.loading=!1,console.error(n.error),t.$message.error(n.error);case 22:case"end":return a.stop()}}),a)})))()}},watch:{to:function(){this.imgUrl.length>0&&this.get_detected_text(this.img)},imgUrl:function(){this.imgUrl.length>0&&this.get_detected_text(this.img)}}},he=fe,ve=(a("7457"),Object(c["a"])(he,ue,se,!1,null,"1aa3f4cd",null)),xe=ve.exports,be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"audio-view",attrs:{"element-loading-text":"Running Speech to Text and Translation...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[a("ColorBg"),a("BackBtn"),a("Title"),a("div",{staticClass:"audio-upload-box"},[a("el-upload",{ref:"audioUpload",attrs:{action:"#",limit:1,"auto-upload":!1,"on-change":e.onUploadChange,"on-exceed":e.onExceed,"file-list":e.fileList,"show-file-list":!1}},[a("el-button",{attrs:{size:"small",type:"warning"}},[e._v("Click to upload your audio")])],1)],1),a("audio",{attrs:{id:"audio_playback",controls:""}}),a("div",{staticClass:"language-selection-box"},[e._m(0),a("el-select",{attrs:{size:"mini",placeholder:"Select"},model:{value:e.to,callback:function(t){e.to=t},expression:"to"}},e._l(e.options,(function(e){return a("el-option",{key:e.language,attrs:{label:e.name,value:e.language}})})),1)],1),a("el-tooltip",{attrs:{content:"Click to copy to clipboard",effect:"dark",placement:"top"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.output_text,expression:"output_text"}],ref:"translated",attrs:{type:"textarea",rows:12,resize:"none",readonly:""},domProps:{value:e.output_text},on:{click:e.copyText,input:function(t){t.target.composing||(e.output_text=t.target.value)}}})])],1)},_e=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{color:"white"}},[e._v(" Translate to: "),a("i",{staticClass:"el-icon-caret-right"})])}];function ke(e){return we.apply(this,arguments)}function we(){return we=Object(A["a"])(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.post("https://speech.googleapis.com/v1/speech:recognize?key="+J,{config:{encoding:"FLAC",languageCode:"en-US",enableWordTimeOffsets:!1},audio:{content:t}});case 3:if(a=e.sent,n=a.data.results[0].alternatives,!(n.length>0)){e.next=9;break}return e.abrupt("return",{success:!0,text:n[0].transcript});case 9:return e.abrupt("return",{success:!1,error:"No language detected!"});case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e["catch"](0),e.abrupt("return",{success:!1,error:e.t0.response});case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),we.apply(this,arguments)}function ye(e){switch(e.toLowerCase()){case"flac":return!0}return!1}var Ce=function(e){return new Promise((function(t,a){var n=e.name.split("."),r=n[n.length-1];ye(r)||a({data:{error:{message:"Audio must be in FLAC format! Please use online converter to convert your audio file first!"}}});var o=new FileReader;o.readAsDataURL(e),o.onload=function(){return t(o.result)},o.onerror=function(e){return a(e)}}))};function je(e){return Oe.apply(this,arguments)}function Oe(){return Oe=Object(A["a"])(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ce(t);case 3:return a=e.sent,a=a.split(",")[1],e.next=7,ke(a);case 7:if(n=e.sent,!n.success){e.next=12;break}return e.abrupt("return",n);case 12:throw n.error;case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e["catch"](0),e.abrupt("return",{success:!1,error:void 0===e.t0?"Unknown Error!":e.t0.data.error.message});case 18:case"end":return e.stop()}}),e,null,[[0,15]])}))),Oe.apply(this,arguments)}var Te={components:{Title:E,ColorBg:j,BackBtn:D},data:function(){return{loading:!1,output_text:"",options:ae,to:"en",audioUrl:"",fileList:[],audio:null}},methods:{copyText:function(){this.$refs.translated.select(),document.execCommand("copy"),this.$notify.success("Copied to clipboard!")},onExceed:function(e){var t={raw:e[0]};this.fileList[0]=t,this.onUploadChange(t)},onUploadChange:function(e){var t=this;this.audio=e.raw;var a=document.getElementById("audio_playback");this.audioUrl=URL.createObjectURL(e.raw),a.src=this.audioUrl,a.onend=function(){return URL.revokeObjectURL(t.audioUrl)}},get_detected_text:function(e){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function a(){var n,r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.loading=!0,a.next=3,je(e);case 3:if(n=a.sent,!n.success){a.next=19;break}if(r=n.lang,o=n.text,r!==t.to){a.next=12;break}t.output_text=o,t.loading=!1,a.next=17;break;case 12:return a.next=14,ee(o,r,t.to);case 14:n=a.sent,n.success?t.output_text=n.data:t.$message.error(n.error),t.loading=!1;case 17:a.next=22;break;case 19:t.loading=!1,console.error(n.error),t.$message.error(n.error);case 22:case"end":return a.stop()}}),a)})))()}},watch:{to:function(){this.audioUrl.length>0&&this.get_detected_text(this.audio)},audioUrl:function(){this.audioUrl.length>0&&this.get_detected_text(this.audio)}}},Re=Te,Ue=(a("741e"),Object(c["a"])(Re,be,_e,!1,null,"a6e6bf6a",null)),Se=Ue.exports;n["default"].use(v["a"]);var Ee=[{path:"/",name:"home",component:z},{path:"/text",name:"text",component:ie},{path:"/image",name:"image",component:xe},{path:"/audio",name:"audio",component:Se}],Be=new v["a"]({base:"/text-cook/",routes:Ee}),$e=Be,Le=a("2f62");n["default"].use(Le["a"]);var ze=new Le["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Pe=a("5c96"),Ne=a.n(Pe),Ae=(a("0fae"),a("4897")),Ie=a.n(Ae),Me=a("b2d6"),Fe=a.n(Me),He=a("3003");n["default"].config.productionTip=!1,n["default"].use(Ne.a),n["default"].use(He["a"]),Ie.a.use(Fe.a),new n["default"]({router:$e,store:ze,render:function(e){return e(h)}}).$mount("#app")},6372:function(e,t,a){},"63ae":function(e,t,a){},"6d4a":function(e,t,a){"use strict";var n=a("2219"),r=a.n(n);r.a},"741e":function(e,t,a){"use strict";var n=a("9059"),r=a.n(n);r.a},7457:function(e,t,a){"use strict";var n=a("4732"),r=a.n(n);r.a},"780c":function(e,t,a){},8466:function(e,t,a){"use strict";var n=a("ae46"),r=a.n(n);r.a},"85ec":function(e,t,a){},9059:function(e,t,a){},ae46:function(e,t,a){},d3f9:function(e,t,a){},e544:function(e,t,a){"use strict";var n=a("63ae"),r=a.n(n);r.a}});
//# sourceMappingURL=app.ad1de9fb.js.map