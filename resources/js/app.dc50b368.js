(function(e){function t(t){for(var c,i,o=t[0],r=t[1],l=t[2],b=0,h=[];b<o.length;b++)i=o[b],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&h.push(n[i][0]),n[i]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],c=!0,o=1;o<a.length;o++){var r=a[o];0!==n[r]&&(c=!1)}c&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var c={},n={app:0},s=[];function i(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=c,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(a,c,function(t){return e[t]}.bind(null,c));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=r;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"00c3":function(e,t){e.exports=[{image:"/resources/imgs/github-icon.svg",link:"https://github.com/Michaelpalacce",text:"GitHub"},{image:"/resources/imgs/npm-icon.svg",link:"https://www.npmjs.com/~stefantigro",text:"NPM"},{image:"/resources/imgs/linkedin-icon.svg",link:"https://www.linkedin.com/in/stefan-genov-286972a3/",text:"LinkedIn"},{image:"/resources/imgs/facebook-icon.svg",link:"https://www.facebook.com/stefantigro",text:"Facebook"},{image:"/resources/imgs/telegram-icon.svg",link:"https://t.me/stefantigro",text:"Telegram"}]},"3f0e":function(e,t,a){},"3f29":function(e,t,a){"use strict";a("9002")},"3fdc":function(e,t,a){"use strict";a("9b87")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("7a23"),n={key:1};function s(e,t,a,s,i,o){var r=Object(c["x"])("Cover"),l=Object(c["x"])("Welcome"),u=Object(c["x"])("Navbar"),b=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["e"])(c["a"],null,[Object(c["h"])(r),0==e.$store.state.welcomeScreen?(Object(c["q"])(),Object(c["e"])(l,{key:0})):Object(c["f"])("",!0),1==e.$store.state.welcomeScreen?(Object(c["q"])(),Object(c["e"])("div",n,[Object(c["h"])(u),Object(c["h"])(b)])):Object(c["f"])("",!0)],64)}a("99af");var i=Object(c["F"])("data-v-5bc856ae");Object(c["t"])("data-v-5bc856ae");var o={class:"border-b p-4 text-lg"},r={class:"sm:block hidden"},l={class:"max-w-7xl flex justify-between sm:items-stretch sm:justify-start "},u={class:"flex"},b={class:"sm:hidden"},h={class:"flex truncate"},m=Object(c["h"])("span",{class:"hamburger-box text-center"},[Object(c["h"])("span",{class:"hamburger-inner"})],-1);Object(c["r"])();var d=i((function(e,t,a,n,s,i){var d=Object(c["x"])("LinkComponent");return Object(c["q"])(),Object(c["e"])("div",o,[Object(c["h"])("div",r,[Object(c["h"])(d,{class:"sm:inline-block truncate",text:"sg@website: ".concat(e.$store.state.navbarPath," $ ").concat(e.$store.state.navbarText),blink:!0},null,8,["text"]),Object(c["h"])("div",l,[Object(c["h"])("div",u,[Object(c["h"])(d,{href:"/",text:"/home"}),Object(c["h"])(d,{href:"/projects",text:"/projects","text-color":"text-yellow-500"}),Object(c["h"])(d,{href:"/readme",text:"/README.md","text-color":"text-blue-500"}),Object(c["h"])(d,{class:"cursor-pointer",onClick:i.exit,text:"exit","text-color":"text-red-600"},null,8,["onClick"])])])]),Object(c["h"])("div",b,[Object(c["h"])("div",h,[Object(c["h"])(d,{class:"inline-block truncate",text:"sg@website: ".concat(e.$store.state.navbarPath," $ ").concat(e.$store.state.navbarText),blink:!0},null,8,["text"])]),Object(c["h"])("button",{class:"w-full hamburger hamburger--elastic p-2",type:"button",onClick:t[1]||(t[1]=function(t){return e.mobileCollapsed=!e.mobileCollapsed})},[m]),Object(c["h"])("div",{class:["px-2 pt-2 pb-3 text-lg text-center",{hidden:e.mobileCollapsed}]},[Object(c["h"])(d,{class:"block",href:"/",text:"/home"}),Object(c["h"])(d,{class:"block",href:"/projects",text:"/projects","text-color":"text-yellow-500"}),Object(c["h"])(d,{class:"block",href:"/readme",text:"/README.md","text-color":"text-blue-500"}),Object(c["h"])(d,{class:"block cursor-pointer",onClick:i.exit,text:"exit","text-color":"text-red-600"},null,8,["onClick"])],2)])])})),p=Object(c["F"])("data-v-14e2d3e8"),g=p((function(e,t,a,n,s,i){var o=Object(c["x"])("router-link");return a.href?(Object(c["q"])(),Object(c["e"])(o,{key:0,class:e.componentClass,to:a.href},{default:p((function(){return[Object(c["g"])(Object(c["z"])(a.text),1)]})),_:1},8,["class","to"])):(Object(c["q"])(),Object(c["e"])("div",{key:1,class:e.componentClass},Object(c["z"])(a.text),3))})),v=(a("04d3"),{name:"LinkComponent",data:function(){return{componentClass:"font-semibold px-3 py-2 mx-2 ".concat(this.textColor," ").concat(this.blink?"animated-cursor border-r-4":"")}},props:{href:{type:String,default:""},text:{type:String,default:""},textColor:{type:String,default:"text-white"},blink:{type:Boolean,default:!1}}});a("cc54");v.render=g,v.__scopeId="data-v-14e2d3e8";var f=v,x={name:"Navbar",components:{LinkComponent:f},data:function(){return{mobileCollapsed:!0}},methods:{exit:function(){var e=this;this.emitter.emit("cover"),setTimeout((function(){e.$store.commit("unseenWelcomeScreen")}),250)}}};a("f9c3");x.render=d,x.__scopeId="data-v-5bc856ae";var j=x,k=(a("b0c0"),Object(c["F"])("data-v-a0e41e52")),O=k((function(e,t,a,n,s,i){var o=Object(c["x"])("TypewriterText"),r=Object(c["x"])("LinkComponent");return Object(c["q"])(),Object(c["e"])("div",null,[Object(c["h"])(o,{class:"mx-5",title:"sg@website: /".concat(e.$route.name," $")},null,8,["title"]),Object(c["h"])(o,{class:"mx-5",text:"The authenticity of host '127.0.0.1 (127.0.0.1)' can't be established.",chunks:3},null,8,["text"]),Object(c["h"])(o,{class:"mx-5",text:"ECDSA key fingerprint is SHA256:12ca17b49af2289436f303e01.",chunks:3},null,8,["text"]),Object(c["h"])(o,{class:"mx-5 inline-block",text:"Are you sure you want to continue connecting (yes/no/[fingerprint])?",chunks:3},null,8,["text"]),!1===e.answeredNo?Object(c["D"])((Object(c["q"])(),Object(c["e"])("input",{key:0,id:"answer",type:"text",class:"hidden sm:inline-block w-1/12 bg-transparent outline-none",onKeyup:t[1]||(t[1]=Object(c["E"])((function(){return i.onEnter&&i.onEnter.apply(i,arguments)}),["enter","native"])),autofocus:"","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.selection=t})},null,544)),[[c["B"],e.selection]]):Object(c["f"])("",!0),e.answeredNo?(Object(c["q"])(),Object(c["e"])(o,{key:1,class:"mx-5",text:"Host key verification failed.",chunks:10},null,8,["text"])):Object(c["f"])("",!0),e.answeredNo?(Object(c["q"])(),Object(c["e"])(o,{key:2,class:"mx-5",text:"Retry in 5 second...",chunks:10},null,8,["text"])):Object(c["f"])("",!0),!1===e.answeredNo?(Object(c["q"])(),Object(c["e"])(r,{key:3,class:"sm:hidden cursor-pointer",text:"Yes",onClick:t[3]||(t[3]=function(e){return i.onClick("y")})})):Object(c["f"])("",!0),!1===e.answeredNo?(Object(c["q"])(),Object(c["e"])(r,{key:4,class:"sm:hidden cursor-pointer",text:"No",onClick:t[4]||(t[4]=function(e){return i.onClick("n")})})):Object(c["f"])("",!0)])})),w=(a("caad"),a("2532"),Object(c["F"])("data-v-22ee7046")),y=w((function(e,t,a,n,s,i){return Object(c["q"])(),Object(c["e"])("div",null,Object(c["z"])(a.title)+" "+Object(c["z"])(s.displayText),1)})),_=(a("fb6a"),a("a9e3"),{name:"TypewriterText",data:function(){return{displayText:"",textIndex:0,timeout:null}},created:function(){this.start()},beforeUnmount:function(){clearTimeout(this.timeout)},methods:{start:function(){0===this.displayText.length&&setTimeout(this.type,this.speed)},type:function(){var e=this;this.displayText.length!==this.text.length?(this.displayText+=this.text.slice(this.textIndex,this.textIndex+this.chunks),this.textIndex+=this.chunks,this.timeout=setTimeout(this.type,this.speed)):this.timeout=setTimeout((function(){e.$emit("done-typing")}),this.doneTypingTimeout)}},props:{title:{type:String,default:""},text:{type:String,default:""},chunks:{type:Number,default:1},speed:{type:Number,default:1},doneTypingTimeout:{type:Number,default:500}}});_.render=y,_.__scopeId="data-v-22ee7046";var M=_,q={name:"Welcome",data:function(){return{selection:"",answeredNo:!1,yesAnswers:["yes","ye","yas","y"]}},mounted:function(){document.getElementById("answer").focus()},components:{TypewriterText:M,LinkComponent:f},methods:{onEnter:function(){var e=this;this.yesAnswers.includes(this.selection)?(this.emitter.emit("cover"),this.selection="",setTimeout((function(){e.$store.commit("seenWelcomeScreen")}),250)):(this.answeredNo=!0,setTimeout((function(){e.$router.go()}),5e3))},onClick:function(e){this.selection=e,this.onEnter()}}};q.render=O,q.__scopeId="data-v-a0e41e52";var T=q,C=Object(c["F"])("data-v-5cc6a46a"),R=C((function(e,t,a,n,s,i){return Object(c["q"])(),Object(c["e"])("div",{class:{fade:e.show,"z-10":e.show,"w-full":e.show,"h-full":e.show,top:0}},null,2)})),S={name:"Cover",data:function(){return{show:!1}},created:function(){var e=this;this.emitter.on("cover",(function(){e.show=!0,setTimeout((function(){e.show=!1}),500)}))}};a("3f29");S.render=R,S.__scopeId="data-v-5cc6a46a";var E=S,N={components:{Cover:E,Welcome:T,Navbar:j}};N.render=s;var A=N,I=a("6c02"),$=(a("9911"),Object(c["F"])("data-v-691549f3"));Object(c["t"])("data-v-691549f3");var P={class:"flex"},L={key:0},z=Object(c["h"])("div",{class:"text-blue-500 text-xl text-center mt-20 tracking-wider"},[Object(c["g"])(" <name> "),Object(c["h"])("span",{class:"hidden sm:inline-block text-white text-xl mx-3"},"My name is"),Object(c["h"])("span",{class:"text-white text-2xl sm:text-3xl"},"Stefan Genov"),Object(c["g"])(" </name> ")],-1),D=Object(c["h"])("div",{class:"text-yellow-500 text-md text-center mt-10 tracking-wider"},[Object(c["h"])("span",{class:"hidden sm:inline-block"},"<profession>"),Object(c["h"])("span",{class:"text-base sm:text-xl text-center text-white mx-3"}," Backend Developer & DevOps "),Object(c["h"])("span",{class:"hidden sm:inline-block"},"</profession>")],-1),F={key:0,class:"grid grid-cols-5 gap-y-20 mt-20"},B={class:"mt-2 text-center text-xs sm:text-base"};Object(c["r"])();var H=$((function(e,t,a,n,s,i){var o=Object(c["x"])("LinkComponent");return Object(c["q"])(),Object(c["e"])(c["a"],null,[Object(c["h"])("div",P,[Object(c["h"])(o,{class:"text-5xl sm:text-7xl mt-10 w-1/2 mx-auto",text:"Hello!"})]),Object(c["h"])(c["b"],{name:"whoami"},{default:$((function(){return[e.whoami?(Object(c["q"])(),Object(c["e"])("div",L,[z,D])):Object(c["f"])("",!0)]})),_:1}),Object(c["h"])(c["b"],{name:"whois"},{default:$((function(){return[e.whois?(Object(c["q"])(),Object(c["e"])("div",F,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(e.contacts,(function(e){return Object(c["q"])(),Object(c["e"])("a",{href:e.link,class:"h-10 w-10 sm:h-14 sm:w-14 mx-auto"},[Object(c["h"])("img",{src:e.image,alt:"",class:"h-full"},null,8,["src"]),Object(c["h"])("p",B,Object(c["z"])(e.text),1)],8,["href"])})),256))])):Object(c["f"])("",!0)]})),_:1})],64)})),W={name:"Home",components:{LinkComponent:f},data:function(){return{whois:!1,whoami:!1,contacts:this.$store.state.contacts}},mounted:function(){var e=this;this.$store.commit("animateNavbarText",{text:"cd ~",remove:!0,removeAfter:500,callback:function(){e.whoami=!0,e.$store.commit("changeNavbarPath","~"),e.$store.commit("animateNavbarText",{text:"whoami",remove:!0,removeAfter:500,callback:function(){e.whois=!0,e.$store.commit("animateNavbarText",{text:"whois stefangenov.site"})}})}})}};a("929f");W.render=H,W.__scopeId="data-v-691549f3";var J=W;function U(e,t,a,n,s,i){var o=Object(c["x"])("Project");return Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(e.projects,(function(e){return Object(c["q"])(),Object(c["e"])(o,{project:e},null,8,["project"])})),256)}var V=Object(c["F"])("data-v-2fb20261");Object(c["t"])("data-v-2fb20261");var G={class:"my-20"},Y={key:0,class:"mx-auto text-center w-full lg:w-4/6"},K={class:"text-3xl"},Q={class:"md:flex mt-10"},X={key:0},Z=Object(c["h"])("br",null,null,-1),ee={key:2,class:"flex mt-5"},te=Object(c["h"])("div",{class:"md:w-1/12"},null,-1),ae={key:0,class:"flex w-full md:w-6/12 h-96 my-auto"};Object(c["r"])();var ce=V((function(e,t,a,n,s,i){var o=Object(c["x"])("TypewriterText"),r=Object(c["x"])("CopyableText"),l=Object(c["x"])("Carousel");return Object(c["q"])(),Object(c["e"])("div",G,[!1===e.show?(Object(c["q"])(),Object(c["e"])(o,{key:0,class:"md:ml-20 break-words",title:"sg@website: /".concat(e.$route.name," $"),text:"git clone ".concat(e.link," ."),speed:10,onDoneTyping:t[1]||(t[1]=function(t){return e.show=!0})},null,8,["title","text"])):Object(c["f"])("",!0),Object(c["h"])(c["b"],{name:"fade"},{default:V((function(){return[!0===e.show?(Object(c["q"])(),Object(c["e"])("div",Y,[Object(c["h"])("p",K,Object(c["z"])(e.title),1),e.installCommand?(Object(c["q"])(),Object(c["e"])(r,{key:0,text:e.installCommand,textColor:"text-yellow-500"},null,8,["text"])):Object(c["f"])("",!0),Object(c["h"])("div",Q,[Object(c["h"])("div",{class:["w-full",{"md:w-5/12":0!==e.images.length}]},[Object(c["h"])("span",{innerHTML:e.text},null,8,["innerHTML"]),e.nodeModule.version?(Object(c["q"])(),Object(c["e"])("div",X,[Z,Object(c["h"])("span",null,Object(c["z"])(e.title)+" supports NodeJS "+Object(c["z"])(e.nodeModule.version)+" and newer.",1)])):Object(c["f"])("",!0),e.badges.length>0?(Object(c["q"])(),Object(c["e"])("div",{key:1,class:["grid mt-5","".concat(e.images.length>0?"grid-cols-2 gap-2":"grid-cols-4 gap-2")]},[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(e.badges,(function(e){return Object(c["q"])(),Object(c["e"])("a",{href:e.link,class:"mx-auto"},[Object(c["h"])("img",{src:e.badge,alt:e.link},null,8,["src","alt"])],8,["href"])})),256))],2)):Object(c["f"])("",!0),e.links.length>0?(Object(c["q"])(),Object(c["e"])("div",ee,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(e.links,(function(e){return Object(c["q"])(),Object(c["e"])("a",{href:e.link,class:"w-20 h-20 mx-auto"},[Object(c["h"])("img",{src:e.icon,alt:"",class:"h-full"},null,8,["src"])],8,["href"])})),256))])):Object(c["f"])("",!0)],2),te,e.images.length>0?(Object(c["q"])(),Object(c["e"])("div",ae,[Object(c["h"])(l,{class:"mx-auto",images:e.images},null,8,["images"])])):Object(c["f"])("",!0)])])):Object(c["f"])("",!0)]})),_:1})])})),ne=Object(c["F"])("data-v-38b09116");Object(c["t"])("data-v-38b09116");var se={class:"flex"},ie={class:"relative"},oe=Object(c["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"mx-auto my-auto h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(c["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),re=Object(c["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"mx-auto my-auto items-center h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(c["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1);Object(c["r"])();var le=ne((function(e,t,a,n,s,i){return Object(c["q"])(),Object(c["e"])("div",se,[Object(c["h"])(c["b"],{name:"slide"},{default:ne((function(){return[Object(c["h"])("div",ie,[a.images.length>1?(Object(c["q"])(),Object(c["e"])("span",{key:0,class:"absolute left-0 rounded-2xl cursor-pointer w-12 h-full flex text-gray-400 opacity-70 hover:opacity-100",onClick:t[1]||(t[1]=function(){return i.prev&&i.prev.apply(i,arguments)})},[oe])):Object(c["f"])("",!0),a.images.length>1?(Object(c["q"])(),Object(c["e"])("span",{key:1,class:"absolute right-0 rounded-2xl cursor-pointer w-12 h-full flex text-gray-400 opacity-70 hover:opacity-100",onClick:t[2]||(t[2]=function(){return i.next&&i.next.apply(i,arguments)})},[re])):Object(c["f"])("",!0),(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(a.images,(function(t,a){return Object(c["q"])(),Object(c["e"])("img",{src:t,alt:"",class:[{hidden:e.activeIndex!==a},"object-contain w-full h-full"]},null,10,["src"])})),256))])]})),_:1})])})),ue={name:"Carousel",components:{},data:function(){return{activeIndex:0}},methods:{prev:function(){this.activeIndex--,this.activeIndex<0&&(this.activeIndex=this.images.length-1)},next:function(){this.activeIndex++,this.activeIndex>this.images.length-1&&(this.activeIndex=0)}},props:{images:{type:Array,default:[]}}};ue.render=le,ue.__scopeId="data-v-38b09116";var be=ue,he=Object(c["F"])("data-v-7826ee86");Object(c["t"])("data-v-7826ee86");var me=Object(c["h"])("span",{class:"inline-block my-auto"},[Object(c["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(c["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})])],-1);Object(c["r"])();var de=he((function(e,t,a,n,s,i){return Object(c["q"])(),Object(c["e"])("span",{ref:e.refName,onClick:t[1]||(t[1]=function(){return i.copy&&i.copy.apply(i,arguments)}),class:["cursor-pointer",a.textColor]},[Object(c["g"])(Object(c["z"])(a.text)+" ",1),me],2)})),pe={name:"CopyableText",data:function(){return{refName:"copyText".concat(Math.random())}},methods:{copy:function(){var e=window.getSelection(),t=document.createRange();t.selectNodeContents(this.$refs[this.refName]),e.removeAllRanges(),e.addRange(t),document.execCommand("copy"),e.removeAllRanges()}},props:{text:{type:String,default:""},textColor:{type:String,default:""}}};pe.render=de,pe.__scopeId="data-v-7826ee86";var ge=pe,ve={name:"Project",data:function(){return{show:!1,title:this.project.title,link:this.project.link,text:this.project.text,images:this.project.images||[],nodeModule:this.project.nodeModule||{},links:this.project.links||[],badges:this.project.badges||[],installCommand:this.project.installCommand}},components:{CopyableText:ge,Carousel:be,TypewriterText:M},props:{project:Object}};a("3fdc");ve.render=ce,ve.__scopeId="data-v-2fb20261";var fe=ve,xe={name:"Projects",components:{Project:fe},data:function(){return{projects:this.$store.state.projects}},mounted:function(){var e=this;this.$store.commit("animateNavbarText",{text:"cd /projects",remove:!0,removeAfter:200,callback:function(){e.$store.commit("changeNavbarPath","/projects"),e.$store.commit("animateNavbarText",{text:"ls -lah"})}})}};xe.render=U;var je=xe;function ke(e,t,a,c,n,s){return null}var Oe={name:"Readme",data:function(){return{}},mounted:function(){var e=this;this.$store.commit("animateNavbarText",{text:"cd ~",remove:!0,removeAfter:200,callback:function(){e.$store.commit("changeNavbarPath","~"),e.$store.commit("animateNavbarText",{text:"cat README.md"})}})}};Oe.render=ke;var we=Oe,ye=[{path:"/",name:"home",component:J},{path:"/projects",name:"projects",component:je},{path:"/readme",name:"readme",component:we}],_e=Object(I["a"])({history:Object(I["b"])("/"),routes:ye}),Me=_e,qe=a("5502"),Te=Object(qe["a"])({state:{welcomeScreen:localStorage.welcomeScreen||0,navbarText:"",navbarPath:"",navbarTimeout:null,projects:a("a978"),contacts:a("00c3")},mutations:{seenWelcomeScreen:function(e){e.welcomeScreen=localStorage.welcomeScreen=1},unseenWelcomeScreen:function(e){e.welcomeScreen=localStorage.welcomeScreen=0},setNavbarText:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";clearTimeout(e.navbarTimeout),e.navbarText=t},animateNavbarText:function(e,t){var a=t.text,c=t.speed,n=void 0===c?50:c,s=t.chunks,i=void 0===s?1:s,o=t.remove,r=void 0!==o&&o,l=t.removeAfter,u=void 0===l?2e3:l,b=t.callback,h=void 0===b?function(){}:b,m=function t(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;a.length!==e.navbarText.length?(e.navbarText+=a.slice(c,c+i),c+=i,e.navbarTimeout=setTimeout((function(){t(c)}),n)):r?e.navbarTimeout=setTimeout((function(){e.navbarText="",h()}),u):h()};clearTimeout(e.navbarTimeout),e.navbarText="",m()},changeNavbarPath:function(e,t){e.navbarPath=t}},actions:{},modules:{}}),Ce=a("14b7"),Re=(a("927c"),Object(Ce["a"])()),Se=Object(c["d"])(A);Se.config.globalProperties.emitter=Re,Se.use(Te).use(Me).mount("#app")},9002:function(e,t,a){},"927c":function(e,t,a){},"929f":function(e,t,a){"use strict";a("3f0e")},"95e5":function(e,t,a){},"9b87":function(e,t,a){},a978:function(e,t){e.exports=[{title:"EventRequest",nodeModule:{version:"12.x"},installCommand:"npm i event_request",badges:[{link:"https://github.com/Michaelpalacce/EventRequest/actions?query=workflow%3Alinux-12.x",badge:"https://github.com/Michaelpalacce/EventRequest/workflows/linux-12.x/badge.svg"},{link:"https://github.com/Michaelpalacce/EventRequest/actions?query=workflow%3Alinux-14.x",badge:"https://github.com/Michaelpalacce/EventRequest/workflows/linux-14.x/badge.svg"},{link:"https://github.com/Michaelpalacce/EventRequest/actions?query=workflow%3Alinux-15.x",badge:"https://github.com/Michaelpalacce/EventRequest/workflows/linux-15.x/badge.svg"},{link:"https://github.com/Michaelpalacce/EventRequest/actions?query=workflow%3Awindows-12.x",badge:"https://github.com/Michaelpalacce/EventRequest/workflows/windows-12.x/badge.svg"},{link:"https://github.com/Michaelpalacce/EventRequest/actions?query=workflow%3Awindows-14.x",badge:"https://github.com/Michaelpalacce/EventRequest/workflows/windows-14.x/badge.svg"},{link:"https://github.com/Michaelpalacce/EventRequest/actions?query=workflow%3Awindows-15.x",badge:"https://github.com/Michaelpalacce/EventRequest/workflows/windows-15.x/badge.svg"},{link:"https://www.codacy.com/manual/Michaelpalacce/EventRequest?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Michaelpalacce/EventRequest&amp;utm_campaign=Badge_Coverage",badge:"https://app.codacy.com/project/badge/Coverage/3c843dd2bc454f06b10eb60820dc6d1b"}],links:[{icon:"/resources/imgs/github-icon.svg",link:"https://github.com/Michaelpalacce/EventRequest.git"},{icon:"/resources/imgs/npm-icon.svg",link:"https://www.npmjs.com/package/event_request"}],link:"https://github.com/Michaelpalacce/EventRequest.git",text:"EventRequest is a zero-dependency, extremely fast and highly customizable web framework built in NodeJS.<br/><br/>It offers a wide array of built in plugins and a wide sort of extendable components. This site is powered by EventRequest!",images:["/resources/imgs/EventRequest-1.svg","/resources/imgs/EventRequest-2.png"]},{title:"ServerEmulator",badges:[{badge:"https://img.shields.io/maintenance/yes/2021",link:"https://github.com/Michaelpalacce/Server.git"}],links:[{icon:"/resources/imgs/github-icon.svg",link:"https://github.com/Michaelpalacce/Server.git"},{icon:"/resources/imgs/npm-icon.svg",link:"https://www.npmjs.com/package/server-emulator"}],nodeModule:{version:"12.x"},installCommand:"npm i -g server-emulator",link:"https://github.com/Michaelpalacce/Server.git",text:"This npm module allows you to access your file system in the browser. Allows for a wide variety of operations ( copy, cut, paste, delete, download, etc. ). It also allows for video, text, image and audio streaming.<br/><br/>In the future more modules will be added to it. Intended as a personal cloud replacement.<br/><br/>It acts as a Command Line Interface ( CLI ) and can be booted from anywhere by installing it as a global module.",images:["/resources/imgs/ServerEmulator-1.png"]},{title:"FsBrowser",badges:[{badge:"https://img.shields.io/maintenance/yes/2021",link:"https://github.com/Michaelpalacce/er_redis_data_server.git"}],links:[{icon:"/resources/imgs/github-icon.svg",link:"https://github.com/Michaelpalacce/fs-browser.git"},{icon:"/resources/imgs/npm-icon.svg",link:"https://www.npmjs.com/package/fs-browser"}],link:"https://github.com/Michaelpalacce/fs-browser.git",nodeModule:{version:"12.x"},installCommand:"npm i fs-browser",text:"This npm module allows pagination of the file system. It fetches directories first and then files, allowing you to order the results in a more predictable fashion.<br/><br/>The module is entirely asynchronous and works in Linux and Windows systems.",images:["/resources/imgs/fs-browser-1.svg","/resources/imgs/fs-browser-2.svg","/resources/imgs/fs-browser-3.svg"]},{title:"Redis DataServer",badges:[{badge:"https://travis-ci.com/Michaelpalacce/er_redis_data_server.svg?branch=master",link:"https://travis-ci.com/Michaelpalacce/er_redis_data_server"},{badge:"https://codecov.io/gh/Michaelpalacce/er_redis_data_server/branch/master/graph/badge.svg",link:"https://codecov.io/gh/Michaelpalacce/er_redis_data_server"},{badge:"https://img.shields.io/maintenance/yes/2021",link:"https://github.com/Michaelpalacce/er_redis_data_server.git"}],links:[{icon:"/resources/imgs/github-icon.svg",link:"https://github.com/Michaelpalacce/er_redis_data_server.git"},{icon:"/resources/imgs/npm-icon.svg",link:"https://www.npmjs.com/package/er_redis_data_server"}],link:"https://github.com/Michaelpalacce/er_redis_data_server.git",nodeModule:{version:"12.x"},installCommand:"npm i er_redis_data_server",text:"er_redis_data_server is a plugin for EventRequest that adds the ability to attach a redis data server. This allows for distributed caching.",images:["/resources/imgs/er_redis_data_server-1.svg"]},{title:"Memcached DataServer",badges:[{badge:"https://travis-ci.com/Michaelpalacce/er_memcached_data_server.svg?branch=master",link:"https://travis-ci.com/Michaelpalacce/er_memcached_data_server"},{badge:"https://codecov.io/gh/Michaelpalacce/er_memcached_data_server/branch/master/graph/badge.svg",link:"https://codecov.io/gh/Michaelpalacce/er_memcached_data_server"},{badge:"https://img.shields.io/maintenance/yes/2021",link:"https://github.com/Michaelpalacce/er_memcached_data_server.git"}],links:[{icon:"/resources/imgs/github-icon.svg",link:"https://github.com/Michaelpalacce/er_memcached_data_server.git"},{icon:"/resources/imgs/npm-icon.svg",link:"https://www.npmjs.com/package/er_memcached_data_server"}],link:"https://github.com/Michaelpalacce/er_memcached_data_server.git",nodeModule:{version:"12.x"},installCommand:"npm i er_memcached_data_server",text:"er_memcached_data_server. is a plugin for EventRequest that adds the ability to attach a memcached data server. This allows for distributed caching.",images:["/resources/imgs/er_memcached_data_server-1.svg"]},{title:"Ansible Role docker",installCommand:"ansible-galaxy install michaelpalacce.docker",badges:[{badge:"https://img.shields.io/maintenance/yes/2021",link:"https://github.com/Michaelpalacce/ansible-docker.git"}],links:[{icon:"/resources/imgs/github-icon.svg",link:"https://github.com/Michaelpalacce/ansible-docker.git"},{icon:"/resources/imgs/ansible-galaxy-icon.svg",link:"https://galaxy.ansible.com/michaelpalacce/docker"}],link:"https://github.com/Michaelpalacce/ansible-docker.git",text:"Ansible Role that installs Docker on Ubuntu machines."},{title:"Ansible Role helm",installCommand:"ansible-galaxy install michaelpalacce.helm",badges:[{badge:"https://img.shields.io/maintenance/yes/2021",link:"https://github.com/Michaelpalacce/ansible-helm.git"}],links:[{icon:"/resources/imgs/github-icon.svg",link:"https://github.com/Michaelpalacce/ansible-helm.git"},{icon:"/resources/imgs/ansible-galaxy-icon.svg",link:"https://galaxy.ansible.com/michaelpalacce/helm"}],link:"https://github.com/Michaelpalacce/ansible-helm.git",text:"Ansible Role that installs Helm, the kubernetes package manager on Ubuntu machines."},{title:"Ansible Role kubernetes_preflight",installCommand:"ansible-galaxy install michaelpalacce.kubernetes_preflight",badges:[{badge:"https://img.shields.io/maintenance/yes/2021",link:"https://github.com/Michaelpalacce/ansible-kubernetes-preflight.git"}],links:[{icon:"/resources/imgs/github-icon.svg",link:"https://github.com/Michaelpalacce/ansible-kubernetes-preflight.git"},{icon:"/resources/imgs/ansible-galaxy-icon.svg",link:"https://galaxy.ansible.com/michaelpalacce/kubernetes_preflight"}],link:"https://github.com/Michaelpalacce/ansible-kubernetes-preflight.git",text:"Ansible Role that installs All the kubernetes binaries and does all preflight checks and configurations."},{title:"Ansible Role kubernetes_cluster",installCommand:"ansible-galaxy install michaelpalacce.kubernetes_cluster",badges:[{badge:"https://img.shields.io/maintenance/yes/2021",link:"https://github.com/Michaelpalacce/ansible-kubernetes-cluster.git"}],links:[{icon:"/resources/imgs/github-icon.svg",link:"https://github.com/Michaelpalacce/ansible-kubernetes-cluster.git"},{icon:"/resources/imgs/ansible-galaxy-icon.svg",link:"https://galaxy.ansible.com/michaelpalacce/kubernetes_cluster"}],link:"https://github.com/Michaelpalacce/ansible-kubernetes-cluster.git",text:"Ansible Role that sets up a kubernetes cluster. Supports multiple stacked masters as well as single master"},{title:"Ansible Role kubernetes_master_security",installCommand:"ansible-galaxy install michaelpalacce.kubernetes_master_security",badges:[{badge:"https://img.shields.io/maintenance/yes/2021",link:"https://github.com/Michaelpalacce/ansible-kubernetes-master-security.git"}],links:[{icon:"/resources/imgs/github-icon.svg",link:"https://github.com/Michaelpalacce/ansible-kubernetes-master-security.git"},{icon:"/resources/imgs/ansible-galaxy-icon.svg",link:"https://galaxy.ansible.com/michaelpalacce/kubernetes_master_security"}],link:"https://github.com/Michaelpalacce/ansible-kubernetes-master-security.git",text:"Ansible Role that does security checks for kubernetes master nodes"},{title:"Website",badges:[{badge:"https://img.shields.io/maintenance/yes/2021",link:"https://github.com/Michaelpalacce/personal-website-vue.git"}],links:[{icon:"/resources/imgs/github-icon.svg",link:"https://github.com/Michaelpalacce/personal-website-vue.git"}],link:"https://github.com/Michaelpalacce/personal-website-vue.git",text:'Nothing to say really! You are looking at it. Uses NodeJS as a backend, VueJs as the front-end.<br/><br/>Main idea of this website was to test how <a href="https://github.com/Michaelpalacce/EventRequest" class="text-red-600">EventRequest</a> will handle an actual environment.',images:[]}]},cc54:function(e,t,a){"use strict";a("95e5")},f176:function(e,t,a){},f9c3:function(e,t,a){"use strict";a("f176")}});