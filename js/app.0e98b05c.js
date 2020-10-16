(function(e){function t(t){for(var i,a,r=t[0],u=t[1],c=t[2],l=0,h=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);d&&d(t);while(h.length)h.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],i=!0,r=1;r<s.length;r++){var u=s[r];0!==o[u]&&(i=!1)}i&&(n.splice(t--,1),e=a(a.s=s[0]))}return e}var i={},o={app:0},n=[];function a(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=i,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(s,i,function(t){return e[t]}.bind(null,i));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=u;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"1fab":function(e,t,s){},3374:function(e,t,s){"use strict";var i=s("cd04"),o=s.n(i);o.a},"4fe8":function(e,t,s){e.exports=s.p+"media/1.76fd3fb8.ogg"},"56d7":function(e,t,s){"use strict";s.r(t);var i=s("a026"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"game-container"},[s("GameBox",e._b({ref:"gamebox"},"GameBox",{isStarted:e.isStarted,sequence:e.sequence,isLose:e.isLose,isApprove:e.isApprove},!1)),s("DashBoard",e._b({ref:"dashboard"},"DashBoard",{rounds:e.rounds,modeLevels:e.modeLevels,isStarted:e.isStarted,isLose:e.isLose},!1))],1)])},n=[],a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[e._l(e.buttonsState,(function(t,i){return s("GameButton",{key:i,style:e.styles[i],attrs:{audio:e.audio[i],isActive:e.buttonsState[i],isStarted:e.isStarted,buttonId:i,isSequencePlaying:e.isSequencePlaying},on:{onTurnedButton:e.onTurnedButton}})})),e.isLose.missClick?s("div",{staticClass:"sphere",class:{error:e.isLose.missClick}},[e._v(" Lose! ")]):e.isLose.slowed?s("div",{staticClass:"sphere",class:{error:e.isLose.slowed}},[e._v(" Slowed! ")]):e.isApprove?s("div",{staticClass:"sphere",class:{correct:e.isApprove}},[e._v(" Correct! ")]):s("div",{staticClass:"sphere"})],2)},r=[],u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tile",class:{active:e.isActive},on:{click:e.turnButton}})},c=[],d={props:{buttonId:Number,isActive:Boolean,isPlaying:Boolean,isStarted:Boolean,audio:HTMLAudioElement},data:()=>({}),methods:{turnButton(){this.isStarted&&(this.onTurned(),this.$root.$emit("onGetAnswer",this.buttonId))},onTurned(){this.isPlaying||this.$emit("onTurnedButton",this.buttonId)}},mounted(){}},l=d,h=(s("6e26"),s("2877")),m=Object(h["a"])(l,u,c,!1,null,"b2ea5adc",null),p=m.exports,v={props:{isStarted:Boolean,sequence:Array,missClick:Boolean,isLose:{missClick:Boolean,slowed:Boolean},isApprove:Boolean},data:()=>({audio:[],isSequencePlaying:!1,buttonsState:[!1,!1,!1,!1],styles:[{backgroundColor:"rgb(84, 202, 84)",borderRadius:"100% 0% 0% 0%"},{backgroundColor:"rgb(252, 102, 102)",borderRadius:"0% 100% 0% 0%"},{backgroundColor:"royalblue",borderRadius:"0% 0% 0% 100%"},{backgroundColor:"yellow",borderRadius:"0% 0% 100% 0%"}]}),methods:{onTurnedButton(e){this.isStarted&&(this.$set(this.buttonsState,e,!0),setTimeout(()=>this.$set(this.buttonsState,e,!1),300),this.audio[e].play())},playSequence(){this.isSequencePlaying=!0;let e=0,t=setInterval(()=>{this.isSequencePlaying&&this.isStarted?(this.onTurnedButton(this.sequence[e]),e++,e>=this.sequence.length&&(clearInterval(t),this.isSequencePlaying=!1,setTimeout(()=>{this.$root.$emit("onStartModeTimeOut")},600))):clearInterval(t)},600)},waitAnswer(){}},components:{GameButton:p},mounted(){this.audio=[new Audio(s("4fe8")),new Audio(s("a84a")),new Audio(s("ea84")),new Audio(s("6f0d"))]}},f=v,S=(s("3374"),Object(h["a"])(f,a,r,!1,null,null,null)),b=S.exports,g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("h2",[e._v("Simon The Game")]),s("div",{staticClass:"info-box"},[(!e.isLose.missClick||!e.isLose.slowed)&e.isStarted?s("span",{staticClass:"text"},[e._v("Номер раунда: "+e._s(e.rounds))]):e.isLose.missClick||e.isLose.slowed?s("span",{staticClass:"text"},[e._v("Пройдено раундов: "+e._s(e.rounds))]):(!e.isLose.missClick||!e.isLose.slowed)&!e.isStarted?s("span",{staticClass:"text"},[e._v("Нажмите START для начала игры")]):e._e()]),s("div",{staticClass:"setting-box"},[s("span",{staticClass:"text"},[e._v("Уровень сложности:")]),s("div",{staticClass:"settings-container"},e._l(e.modeLevels,(function(e,t){return s("ModeButton",{key:t,attrs:{name:e.name,isActive:e.isActive,asMode:t}})})),1)]),s("div",{staticClass:"box-control"},[e.isStarted?e.isStarted?s("button",{on:{click:e.stopGame}},[e._v("STOP")]):e._e():s("button",{on:{click:e.startGame}},[e._v("START")])])])},y=[],A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"setting-param",class:{active:e.isActive},on:{click:e.setActive}},[e._v(" "+e._s(e.name)+" ")])},T=[],_={props:{asMode:Number,name:String,isActive:Boolean},methods:{setActive(){this.isActive||this.$root.$emit("changeMode",this.asMode)}},mounted(){}},L=_,O=(s("99a4"),Object(h["a"])(L,A,T,!1,null,"25a73818",null)),w=O.exports,C={props:{rounds:Number,modeLevels:Array,isStarted:Boolean,isLose:{missClick:Boolean,slowed:Boolean}},methods:{startGame(){this.isStarted||this.$root.$emit("onStartGame")},stopGame(){this.isStarted&&this.$root.$emit("onStopGame")}},mounted(){},components:{ModeButton:w}},k=C,x=(s("885d"),Object(h["a"])(k,g,y,!1,null,"6f94c8e9",null)),M=x.exports,$={name:"App",data:()=>({modeLevels:[{name:"Easy",kd:1500,isActive:!0},{name:"Medium",kd:1e3,isActive:!1},{name:"Hard",kd:400,isActive:!1}],currentMode:0,rounds:0,isStarted:!1,isLose:{missClick:!1,slowed:!1},isApprove:!1,sequence:[],currentSecuence:[],modeTimeOut:null}),components:{DashBoard:M,GameBox:b},methods:{changeMode(e){this.isStarted||(this.modeLevels.forEach(e=>e.isActive=!1),this.modeLevels[this.currentMode=e].isActive=!0,this.sequence=this.currentSecuence=[],this.cleanStats())},startGame(){this.cleanStats(),this.nextRound(),this.isStarted=!0},stopGame(){this.clearModeTimeOut(),this.isStarted=!1,this.sequence=this.currentSecuence=[]},cleanStats(){this.rounds=0,this.isLose.missClick=this.isLose.slowed=!1},checkOnLose(e){if(this.currentSecuence.push(e),this.clearModeTimeOut(),this.startModeTimeOut(),this.sequence.shift()!=e)return this.isLose.missClick=!0,void this.stopGame();0==this.sequence.length&&(this.isApprove=!0,this.clearModeTimeOut(),setTimeout(()=>{this.nextRound(),this.isApprove=!1},1e3))},startModeTimeOut(){null!=this.modeTimeOut&&this.clearModeTimeOut(),this.modeTimeOut=setTimeout(()=>{this.isLoseAsSlowed()},this.modeLevels[this.currentMode].kd)},clearModeTimeOut(){clearTimeout(this.modeTimeOut),this.modeTimeOut=null},isLoseAsSlowed(){this.isLose.slowed=!0,this.stopGame()},nextRound(){0!=this.rounds&&(this.sequence=this.currentSecuence),this.sequence.push(Math.floor(4*Math.random())),this.$refs.gamebox.playSequence(),this.currentSecuence=[],this.rounds++}},mounted(){this.$root.$on("changeMode",this.changeMode),this.$root.$on("onStartGame",this.startGame),this.$root.$on("onStopGame",this.stopGame),this.$root.$on("onGetAnswer",this.checkOnLose),this.$root.$on("onStartModeTimeOut",this.startModeTimeOut)}},B=$,G=(s("5c0b"),Object(h["a"])(B,o,n,!1,null,null,null)),q=G.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(q)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var i=s("9c0c"),o=s.n(i);o.a},"6e26":function(e,t,s){"use strict";var i=s("ec94"),o=s.n(i);o.a},"6f0d":function(e,t,s){e.exports=s.p+"media/3.7d29331d.ogg"},"7d1e":function(e,t,s){},"885d":function(e,t,s){"use strict";var i=s("7d1e"),o=s.n(i);o.a},"99a4":function(e,t,s){"use strict";var i=s("1fab"),o=s.n(i);o.a},"9c0c":function(e,t,s){},a84a:function(e,t,s){e.exports=s.p+"media/2.63d780a9.ogg"},cd04:function(e,t,s){},ea84:function(e,t,s){e.exports=s.p+"media/4.36d5a722.mp3"},ec94:function(e,t,s){}});
//# sourceMappingURL=app.0e98b05c.js.map