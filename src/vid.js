function e(e,t){let i=!1;e<0&&(i=!0,e=0-e),e=e<0?0:e;let n=Math.floor(e%60),o=Math.floor(e/60%60),r=Math.floor(e/3600);const c=Math.floor(t/60%60),a=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(r=o=n="-"),r=r>0||a>0?r+":":"",o=((r||c>=10)&&o<10?"0"+o:o)+":",n=n<10?"0"+n:n,(i?"-":"")+r+o+n}function t(e){const t=document.all,i=decodeURIComponent(location.search).slice(3);t.v.insertAdjacentHTML("afterend",'<p id="p"></p>'),t.p.outerHTML+="<br>Video failed!<br>"+(e||"Unknown Error")+'<br><input id="b" type="button" value="Retry?">',t.b.addEventListener("click",(()=>window.location.replace("Vid.html?v="+i))),t.v.remove(),document.removeEventListener("keydown",a),t.b.addEventListener("keydown",(e=>" "!==e.key||e.target.click()),r.c),t.b.addEventListener("blur",(()=>window.history.back()||window.close())),t.b.focus()}const i=document.getElementById("v"),n={viz(e,t=e.srcElement.visibilityState){"hidden"===t?document.fullscreenElement?navigator.userActivation.isActive&&document.exitFullscreen()&&["keyup","mouseup"].forEach((e=>window.addEventListener(e,i.requestFullscreen,r.o))):document.pictureInPictureElement?["keyup","mouseup"].forEach((e=>window.addEventListener(e,(()=>document.exitPictureInPicture()&&i.requestFullscreen()),r.o))):i.pause.call(i):(i.focus(),i.focus())},vizin(e){if("hidden"===document.visibilityState)return!1;"focusin"!==e.type&&document.removeEventListener("focusin",n.vizin,r.o),"keydown"!==e.type&&document.removeEventListener("keydown",n.vizin,r.o),document.body.append(i),i.play(),document.onvisibilitychange=n.viz,document.onkeydown=void 0,window.addEventListener("keydown",a)},end:function(){let e=+new URLSearchParams(document.location.search).get("e");o.end=e,i.ontimeupdate=function(){if(i.currentTime<=o.end)return!1;i.pause(),o.end=i.duration,i.currentTime=o.end,i.ontimeupdate=void 0}},vid:function(c){let a=new URLSearchParams(c),s=a.get("v"),l=+a.get("t");return s&&s.startsWith("file")&&s.includes("mp4")?(a.has("e")&&n.end(),document.title=s.substring(s.lastIndexOf("/")+1,s.indexOf(".mp4"))||s,32!=window.outerHeight-window.innerHeight||640===window.outerWidth&&360===window.outerHeight||window.resizeTo(640,360),i.src=s,i.onvolumechange=o.level,i.onratechange=o.speed,i.onseeked=()=>o.caption(`${e(i.currentTime)} | ${e(i.duration-i.currentTime)}`),i.load(),i.setAttribute("autofocus",!0),Number.isFinite(l)&&(i.currentTime=l),document.onvisibilitychange=n.viz,i.addEventListener("focus",o.check,r.p),i.addEventListener("play",o.start,r.p),i.addEventListener("click",o.check,r.p),window.addEventListener("mousedown",o.check,r.p),window.addEventListener("keydown",o.check,r.p),void o.clear()):t("No Video File Specified")},page:function(){i.volume=+(sessionStorage.s||"0.4"),i.addEventListener("timeupdate",(()=>document.querySelector("progress").setAttribute("value",i.currentTime.toFixed()))),document.addEventListener("keyup",o.progress,{passive:!0}),location.search||location.assign("Sex.html"),window.opener&&window.opener.postMessage("audchk","*"),document.addEventListener("keydown",a),window.addEventListener("message",(e=>r.m.call(e,e.data)),r.c),n.vid(location.search)}},o={winrt:function(){let e,t,n,r;return t=screen.availWidth-(window.screenLeft+window.outerWidth),window.outerWidth<t<=350?(o.win(),!1):(e=[350,300].includes(t)?t-50:350,n=window.outerWidth,r=window.screenLeft,!(e<t)&&void(r>e?window.moveTo(r-e,window.screenTop):r<e&&i.videoWidth>=screen.availWidth-e&&(window.resizeTo(screen.availWidth-e,window.outerHeight),window.moveTo(0,window.screenTop))))},win:function(e=!1){let t,n,o,r,c;t=i.videoWidth>=.98*screen.availWidth||i.videoHeight>=.98*screen.availHeight,n=t?.98*screen.availWidth:i.videoWidth,o=t?.98*screen.availHeight:i.videoHeight,e&&(n*=e,o*=e),r=screen.availWidth/2-n/2,c=t?0:parseInt(.3*(screen.availHeight-i.videoHeight)),window.resizeTo(n,o),window.moveTo(r,c)},clear:function(){i.removeAttribute("style"),delete o.fits,window.locationbar.visible?(i.style="object-fit: contain; max-width: 100%; max-height: "+.98*window.innerHeight+"px;",i.playbackRate=1):o.win()},fail:function(){return window.removeEventListener("mousedown",o.check,r.p),window.removeEventListener("keydown",o.check,r.p),t(i.error.message||"Media Element Error")},start:function(){let e=document.querySelector("video"),t=document.querySelector("progress");t.setAttribute("max",e.duration),t.style.setProperty("width",CSS.px(e.clientWidth)),window.removeEventListener("mousedown",o.check,r.p),window.removeEventListener("keydown",o.check,r.p),e.removeEventListener("focus",o.check,r.p),e.removeEventListener("play",o.start,r.p),e.removeEventListener("click",o.check,r.p),delete o.check},check:function(){navigator.userActivation.hasBeenActive&&i.play().then(o.start,o.fail)},fits:void 0,size:function(e=!1){o.fits=o.fits||((e=[0,100,250,300],t=(e=>window.innerWidth-e),n=(e=>CSS.px(e)))=>[i.videoWidth,...e.map(t)].map(n))(),i.style.width=e?o.fits.pop():o.fits.shift(),i.style.width||delete o.fits,o.fits.length||o.clear()},right:function(e=parseInt(i.style.marginRight)||400){let t=e-50,n=parseInt(getComputedStyle(i).marginRight),o=t<250||n>t?"auto":t+"px";i.style.marginRight=o},caption(e){let t=document.querySelector("dialog");if(t.open)t.addEventListener("close",(()=>o.caption(e)),{once:!0});else{t.innerHTML=e,document.fullscreenElement?t.showModal():t.show(),t.style.setProperty("left",`calc( 85% - ${t.clientWidth}px )`);let i=window.setInterval((()=>t.open?t.close():clearInterval(i)),600)}},end:(e=location.search+"&e="+(parseInt(i.currentTime)+1))=>location.search=decodeURIComponent(e),speed(){i.playbackRate>3?i.muted=!0:i.muted&&!o.quiet&&(i.muted=!1),o.caption(i.playbackRate+"x")},progress(){let e=document.querySelector("progress");i.duration!==e.max||e.setAttribute("max",i.duration),i.clientWidth===e.clientWidth||e.style.setProperty("width",CSS.px(i.clientWidth)),e.attributes.bar||e.toggleAttribute("bar");let t=window.setInterval((()=>e.attributes.bar?e.removeAttribute("bar"):clearInterval(t)),600)},level(){let e={l:['type="range" min="0" max="1" step="0.05"','value="'+i.volume+'"'],m:['type="radio"','checked="true"'],n:Math.max(0,i.volume-+i.muted),get cap(){let{l:e,m:t,n:i}=this;return`<input ${(i>0?e:t).join(" ")}>`}};return sessionStorage.setItem("s",e.n),o.caption(e.cap)}},r={c:{capture:!0},o:{once:!0},p:{passive:!0},end:(e=window.event)=>!!e&&("function"==typeof e.stopPropagation&&e.stopPropagation(),void 0!==e.cancelBubble&&(e.cancelBubble=!0),"function"==typeof e.preventDefault&&e.preventDefault(),e),vsp:async()=>{const e=await window.prompt("uri","...");/^http.*mp4/.test(e)?(i.currentTime=i.duration,i.src=e):window.alert("Not an MP4!")},mx:e=>"string"==typeof e&&e.includes(".mp4")&&(e.startsWith("Vid.html?v=")||e.startsWith("file://")),m:function(e){i.volume;let t=r.mx(e),c=n.vid,a=["rect","src"].includes(e);return!0===t?(e.startsWith("Vid.html?v=")&&c(e.substring(e.indexOf("?"))),void(e.startsWith("file://")&&c("v="+e))):!0===a?(a={msg:e,src:decodeURI(i.currentSrc),tabs:!!window.locationbar.visible,full:["width","height"].every((e=>screen[e]===visualViewport[e]))},e="*",self.opener.postMessage(a,e)):(!0===e&&(o.quiet=i.volume,"visible"===document.visibilityState||!document.pictureInPictureElement||i.requestPictureInPicture(),i.muted=!0,!i.paused||i.play()),void(e&&!1!==e||(i.volume=o.quiet||1,delete o.quiet,!i.muted||i.playbackRate>2||!navigator.userActivation.hasBeenActive||(i.muted=!1))))},d:()=>{let e=i.style.filter,t=e?+e.slice(11,14):1;return t<.15?i.style.removeProperty("filter"):i.style.filter=`brightness(${t-.1})`},x:()=>i.style.setProperty("filter",((e=[[(()=>Math.random())(),"brightness",1,!1],[(()=>Math.random())(),"contrast",1,!1],[(()=>Math.random())(),"grayscale",1,!1],[(()=>Math.random())(),"hue-rotate",360,"deg"],[(()=>Math.random())(),"saturate",1,!1],[(()=>Math.random())(),"sepia",1,!1],[(()=>Math.random())(),"url",0,!1]])=>(e=e.sort().pop())[1]+"("+("url"===e[1]?localStorage.randallpic:e[2]>1?parseInt(e[2]/e[0]):e[0].toPrecision(3))+(e[3]?e[3]:"")+")")())};r.pip={pop:!1,full:!1,see(){switch(navigator.userActivation.isActive+document.visibilityState){case"truevisible":document.pictureInPictureElement&&document.exitPictureInPicture(),this.full?document.fullscreenElement&&document.exitFullscreen():i.requestFullscreen();break;case"truehidden":document.fullscreenElement&&document.exitFullscreen(),!document.pictureInPictureElement&&i.requestPictureInPicture();break;case"falsehidden":i.pause();break;case"falsevisible":document.pictureInPictureElement&&document.exitPictureInPicture(),this.full?document.fullscreenElement&&document.exitFullscreen():i.requestFullscreen(),!i.playbackRate||i.play(),i.onratechange.call(globalThis,"inactive!");break;default:window.confirm(navigator.userActivation.isActive+document.visibilityState)&&this.set(!1)}},set(e=!this.pop){let t=`Picture in Picture onblur listener is ${e?"Enabled":"Disabled"}. < br > Viewing mode is ${this.full?"Fullscreen":"In-Line"}.`;return this.pop=e,document.onvisibilitychange=e?this.see:r.vizin,o.caption(t)},fill(){this.full=!this.full;let e=`Fullscreen ${this.full?"Enabled":"Disabled"}!`;return o.caption(e)}};const c=()=>location.assign(`${decodeURI(i.currentSrc)}#t=${parseInt(i.currentTime)}`);function a(e){const t=a.prototype.el;document.activeElement!==t&&(t.sel(),t.to=window.setTimeout(t.del,1e3),a.prototype.el=t);const i={Start:decodeURI(t.src),Now:void 0,Vid:o.end instanceof Function?o.end:c},n=o.quiet||!0!==o.quiet,s=e=>(window.onbeforeunload=window.navigator.clipboard.writeText(e.slice(3)),location.search=e),l=function(e){return e.preventDefault&&!e.defaultPrevented&&e.preventDefault(),e.cancelable&&e.stopPropagation(),e},u=window.locationbar.visible;return i.Now=parseInt(t.currentTime)>0?"&t="+parseInt(t.currentTime):""," "===e.key?(l(window.event),e.metaKey?window.close():t.paused?t.play():t.pause()):("Meta"===e.key&&(e.shiftKey||l(e),document.fullscreenElement?document.exitFullscreen():document.pictureInPictureElement?document.exitPictureInPicture():!0===t.muted?[()=>t.muted=!1,()=>o.quiet=void 0].forEach((e=>e())):t.volume=.4),"r"===e.key&&(location.search="?v="+i.Start+i.Now),"w"===e.key&&(e.repeat?window.close():u?t.style.zoom=t.style.zoom?+t.style.zoom+.1:1:o.win(.4)),"e"===e.key&&(u?t.style.zoom=t.style.zoom?+t.style.zoom-.1:1:o.win(.6)),"E"===e.key&&(u?t.style.zoom=1:window.screenTop>=.8*(screen.availHeight-window.outerHeight)?o.win():window.moveTo(window.screenLeft,window.screenTop+.05*screen.availHeight)),"W"===e.key&&(u?o.clear():window.screenTop<1?o.win():window.moveTo(window.screenLeft,window.screenTop-.05*screen.availHeight)),"t"===e.key&&s("?v="+i.Start+i.Now),"T"===e.key&&s("?v="+i.Start),"v"===e.key&&n&&(t.volume=Math.min(1,t.volume+.05)),"c"===e.key&&n&&(t.volume=0>t.volume-.05?0:t.volume-.05),"V"===e.key&&n&&(t.volume=0),"C"===e.key&&n&&!e.ctrlKey&&(t.volume=1),"S"===e.key&&(t.playbackRate=[4,1.5,1,.9].find((e=>e<t.playbackRate))||.9),"s"===e.key&&(t.playbackRate=[1,1.5,4].find((e=>e>t.playbackRate))||4),"f"===e.key&&e.ctrlKey&&(o.size(),l(e)),"f"!==e.key||e.ctrlKey||(document.fullscreenElement?document.exitFullscreen():t.requestFullscreen()),"p"===e.key?document.pictureInPictureElement?document.exitPictureInPicture():t.requestPictureInPicture():"F"===e.key?e.ctrlKey?r.vsp():t.style.setProperty("filter","hue-rotate(437deg)","important"):("d"===e.key&&r.d(),"D"===e.key&&r.x(),"a"===e.key?e.ctrlKey?a.prototype.aud.listen="see":t.playbackRate=1:"A"===e.key?a.prototype.aud.listen=e.metaKey?"loop":"":("x"===e.key&&(t.currentTime=e.ctrlKey?t.currentTime+2:t.currentTime+t.duration/70),"z"===e.key&&(t.currentTime=e.ctrlKey?t.currentTime-2:t.currentTime-t.duration/70),"X"===e.key&&(t.currentTime=t.currentTime+t.duration/25),"Z"===e.key&&(t.currentTime=t.currentTime-t.duration/25),"1"===e.key&&(t.currentTime=.1*t.duration),"2"===e.key&&(t.currentTime=.2*t.duration),"3"===e.key&&(t.currentTime=.3*t.duration),"4"===e.key&&(t.currentTime=.4*t.duration),"5"===e.key&&(t.currentTime=.5*t.duration),"6"===e.key&&(t.currentTime=.6*t.duration),"7"===e.key&&(t.currentTime=.7*t.duration),"8"===e.key&&(t.currentTime=.8*t.duration),"9"===e.key&&(t.currentTime=.9*t.duration),"~"===e.key&&(t.currentTime=t.duration-5),"!"===e.key&&(a.prototype.el.id.startsWith("v")?a.prototype.audio():a.prototype.video()),"@"===e.key&&window.open("","Sex"),"?"===e.key&&(window.confirm("vid or cxl 4 dir")?c():window.location.assign(i.Start.split("/").slice(0,-1).join("/"))),"`"!==e.key||e.ctrlKey||e.shiftKey||(t.currentTime=0),"Tab"!==e.key||e.ctrlKey||(l(e),e.metaKey?window.opener.focus():u?(e.shiftKey||o.size())&&o.right():o.winrt()),"ArrowRight"===e.key&&(t.currentTime=e.ctrlKey?t.currentTime+3:t.currentTime+6),"ArrowLeft"===e.key&&(t.currentTime=e.ctrlKey?t.currentTime-3:t.currentTime-6),"ArrowUp"===e.key&&n&&(t.volume=Math.min(1,t.volume+.05)),"ArrowDown"===e.key&&n&&(t.volume=Math.max(0,t.volume-.05)),"Q"===e.key&&(l(e),!0===t.muted?[()=>t.muted=!1,()=>o.quiet=void 0].forEach((e=>e())):t.volume=.4),t)))}a.prototype.el=Object.assign(i,{sel(){const e=a.prototype.el,t=e.to;return e.classList.add("sel"),t&&window.clearTimeout(t),e.focus()},del(){const e=a.prototype.el,t=e.to;return t&&(e.to=void window.clearTimeout(t)),e.classList.remove("sel"),e.blur()}}),a.prototype.aud={get listen(){if(!this.win||this.win.closed){let e=`popup=true,width=${parseInt(.5*screen.availWidth)},left=${parseInt(.25*screen.availWidth)},height=150`;this.win=window.open("Dir.html#a","listen",e)}return this.win},set listen(e=""){let t=this.listen;return"see"===e?t.focus():t.postMessage("loop"==e,"*")}},a.prototype.audio=function(){let e=document.createElement("audio");return document.body.prepend(e),e.id="a",e.src=i.src,e.currentTime=i.currentTime,i.src="",a.prototype.el=e,i.load(),i.toggleAttribute("hidden"),e.play()},a.prototype.video=function(){a.prototype.el=i;let e=document.getElementById("a");e.pause(),i.src=e.src,i.currentTime=e.currentTime,e.remove(),i.toggleAttribute("hidden"),i.play()},document.onselectionchange=e=>{document.getSelection().isCollapsed||document.getSelection().empty()},window.onload=n.page;
// function formatTime ( seconds, guide ) {
//     let negative = false;
//     if ( seconds < 0 ) {
//         negative = true;
//         seconds = 0 - seconds;
//     }
//     seconds = seconds < 0 ? 0 : seconds;
//     let s = Math.floor( seconds % 60 );
//     let m = Math.floor( seconds / 60 % 60 );
//     let h = Math.floor( seconds / 3600 );
//     const gm = Math.floor( guide / 60 % 60 );
//     const gh = Math.floor( guide / 3600 );
//     if ( isNaN( seconds ) || seconds === Infinity ) {
//         h = m = s = '-';
//     }
//     h = h > 0 || gh > 0 ? h + ':' : '';
//     m = ( ( h || gm >= 10 ) && m < 10 ? '0' + m : m ) + ':';
//     s = s < 10 ? '0' + s : s;
//     return ( negative ? '-' : '' ) + h + m + s;
// }

// function popmoves ( ) {
//     const w = window
//         , d = document
//         , s = sessionStorage
//         , wideIt = function wideIt ( ) {
//             let ww = w.outerWidth
//                 , nw = ww === 250 ? 300 : ww === 300 ? 350 : 250;
//             w.resizeTo( nw, w.outerHeight );
//             if ( 0 != w.screenLeft ) w.moveTo( screen.availWidth - w.outerWidth, 0 );
//             return w.outerWidth;
//         }
//         , moveIt = ( sl = screen.availWidth - w.outerWidth, nl = w.screenLeft === 0 ? 0.5 * sl : w.screenLeft === sl ? 0 : sl ) => w.moveTo( nl, 0 )
//         , centerIt = function doCenter ( i = 3, sw = screen.availWidth, sh = screen.availHeight, w = sw / i, h = sh / i, l = sw / 2 - w / 2, t = sh / 2 - h / 2 ) {
//             window.resizeTo( w, h );
//             window.moveTo( l, t );
//         }
//         , sizeIt = vid.size
//         , rightIt = vid.winrt;
//     let codes = {
//             BracketLeft: this.sizeIt
//             , BracketRight: this.sizeIt
//             , Backslash: this.wideIt
//             , Equal: this.centerIt
//             , Minus: this.centerIt
//             , shift: {
//                 Backslash: this.marginIt
//                 , Equal: this.centerIt
//                 , Minus: this.w.moveTo
//             }
//         }
//         , args = {
//             BracketLeft: false
//             , BracketRight: true
//             , Backslash: null
//             , Equal: 3
//             , Minus: 4
//             , shift: {
//                 Backslash: null
//                 , Equal: 2
//                 , Minus: ( w.screenLeft, 0 )
//             }
//         };
// }

// function onFail ( msg ) {
//     const all = document.all
//         , str = decodeURIComponent( location.search ).slice( 3 )
//         , fout = ( ) => window.history.back( ) || window.close( )
//         , ftry = ( ) => window.location.replace( 'Vid.html?v=' + str );
//     all.v.insertAdjacentHTML( 'afterend', '<p id="p"></p>' );
//     all.p.outerHTML += '<br>Video failed!<br>' + ( msg || 'Unknown Error' ) + '<br><input id="b" type="button" value="Retry?">';
//     all.b.addEventListener( 'click', ftry );
//     all.v.remove( );
//     document.removeEventListener( 'keydown', vkey );
//     all.b.addEventListener( 'keydown', e => e.key !== ' ' || e.target.click( ), func.c );
//     all.b.addEventListener( 'blur', fout );
//     all.b.focus( );
// }

// const v = document.getElementById( 'v' )
//     , load = {
//         /*viz(e,vs = e.srcElement.visibilityState) { let nextf = () => {}; if (vs === 'hidden') !!document.fullscreenElement ? !!navigator.userActivation.isActive && v.requestPictureInPicture() : v.pause.call(v); else !!document.pictureInPictureElement && ['keyup', 'mouseup'].forEach(el => window.addEventListener(el, () => document.exitPictureInPicture() && v.requestFullscreen(), func.o)), v.focus(); },*/
//         viz ( e, vs = e.srcElement.visibilityState ) {
//             if ( vs === 'hidden' ) !!document.fullscreenElement ? !!navigator.userActivation.isActive && document.exitFullscreen( ) && [ 'keyup', 'mouseup' ].forEach( el => window.addEventListener( el, v.requestFullscreen, func.o ) ) : !!document.pictureInPictureElement ? [ 'keyup', 'mouseup' ].forEach( el => window.addEventListener( el
//                 , ( ) => document.exitPictureInPicture( ) && v.requestFullscreen( ), func.o ) ) : v.pause.call( v );
//             else {
//                 v.focus( );
//                 v.focus( );
//             }
//         }
//         , vizin ( e ) {
//             if ( document.visibilityState === 'hidden' ) return false;
//             if ( e.type !== 'focusin' ) document.removeEventListener( 'focusin', load.vizin, func.o );
//             if ( e.type !== 'keydown' ) document.removeEventListener( 'keydown', load.vizin, func.o );
//             document.body.append( v );
//             v.play( );
//             document.onvisibilitychange = load.viz;
//             document.onkeydown = undefined;
//             window.addEventListener( 'keydown', vkey );
//         }
//         , end: function loadend ( ) {
//             let end = +new URLSearchParams( document.location.search ).get( 'e' )
//                 , atend = function atendf ( ) {
//                     if ( v.currentTime <= vid.end ) return false;
//                     v.pause( );
//                     vid.end = v.duration;
//                     v.currentTime = vid.end;
//                     v.ontimeupdate = void 0;
//                 };
//             vid.end = end;
//             v.ontimeupdate = atend;
//         },
//         /*function pl(s = new URLSearchParams(location.search), o = Object.fromEntries(s.entries())), n = e => o[e] = !+o[e] ? false : +o[e] => ['t', 'e'].forEach(e => n(e)) && o*/
//         vid: function loadvid ( ss ) {
//             let ls = new URLSearchParams( ss )
//                 , f = ls.get( 'v' )
//                 , t = +ls.get( 't' );
//             if ( !f ) return onFail( 'No Video File Specified' );
//             if ( !f.startsWith( 'file' ) || !f.includes( 'mp4' ) ) return onFail( 'No Video File Specified' );
//             if ( ls.has( 'e' ) ) load.end( );
//             document.title = f.substring( f.lastIndexOf( '/' ) + 1, f.indexOf( '.mp4' ) ) || f;
//             if ( 32 === window.outerHeight - window.innerHeight && ( 640 !== window.outerWidth || 360 !== window.outerHeight ) ) {
//                 window.resizeTo( 640, 360 );
//             }
//             v.src = f;
//             v.onvolumechange = vid.level;
//             v.onratechange = vid.speed;
//             v.onseeked = ( ) => vid.caption( `${formatTime(v.currentTime)} | ${formatTime(v.duration - v.currentTime)}` );
//             v.load( );
//             v.setAttribute( 'autofocus', true );
//             if ( Number.isFinite( t ) ) v.currentTime = t;
//             document.onvisibilitychange = load.viz;
//             /* document.addEventListener('visibilitychange', load.viz, func.c); */
//             v.addEventListener( 'focus', vid.check, func.p );
//             v.addEventListener( 'play', vid.start, func.p );
//             v.addEventListener( 'click', vid.check, func.p );
//             window.addEventListener( 'mousedown', vid.check, func.p );
//             window.addEventListener( 'keydown', vid.check, func.p );
//             vid.clear( );
//         }
//         , page: function loadpage ( ) {
//             // v.addEventListener('pause', ()=>vid.caption('||'));
//             // v.addEventListener('play', ()=>vid.caption(`${v.currentTime === 0 ? '=>' : v.playbackRate < 2 ? '>' : '>>'}`));
//             v.volume = +( sessionStorage.s || '0.4' );
//             v.addEventListener( 'timeupdate', ( ) => document.querySelector( 'progress' ).setAttribute( 'value', v.currentTime.toFixed( ) ) );
//             document.addEventListener( 'keyup', vid.progress, {
//                 passive: true
//             } );
//             if ( !location.search ) location.assign( 'Sex.html' );
//             if ( window.opener ) window.opener.postMessage( 'audchk', '*' );
//             document.addEventListener( 'keydown', vkey );
//             window.addEventListener( 'message', m => func.m.call( m, m.data ), func.c );
//             load.vid( location.search );
//         }
//     };

// const vid = {
//     winrt: function ( ) {
//         let x, r, w, l;
//         r = screen.availWidth - ( window.screenLeft + window.outerWidth );
//         if ( window.outerWidth < r <= 350 ) {
//             vid.win( );
//             return false;
//         }
//         x = [ 350, 300 ].includes( r ) ? r - 50 : 350;
//         w = window.outerWidth;
//         l = window.screenLeft;
//         if ( x < r ) return false;
//         if ( l > x ) window.moveTo( l - x, window.screenTop );
//         else if ( l < x ) {
//             if ( v.videoWidth >= screen.availWidth - x ) window.resizeTo( screen.availWidth - x, window.outerHeight ), window.moveTo( 0, window.screenTop );
//         }
//     }
//     , win: function ( m = false ) {
//         let b, w, h, l, t;
//         b = v.videoWidth >= 0.98 * screen.availWidth || v.videoHeight >= 0.98 * screen.availHeight;
//         w = !b ? v.videoWidth : 0.98 * screen.availWidth;
//         h = !b ? v.videoHeight : 0.98 * screen.availHeight;
//         if ( m )( w = m * w ), ( h = m * h );
//         l = screen.availWidth / 2 - w / 2;
//         t = !b ? parseInt( 0.3 * ( screen.availHeight - v.videoHeight ) ) : 0;
//         window.resizeTo( w, h );
//         window.moveTo( l, t );
//     }
//     , clear: function ( ) {
//         v.removeAttribute( 'style' );
//         delete vid.fits;
//         if ( !window.locationbar.visible ) vid.win( );
//         else {
//             v.style = 'object-fit: contain; max-width: 100%; max-height: ' + window.innerHeight * 0.98 + 'px;';
//             v.playbackRate = 1;
//         }
//         //  v.volume = +sessionStorage.s;
//     }
//     , fail: function vidfail ( ) {
//         window.removeEventListener( 'mousedown', vid.check, func.p );
//         window.removeEventListener( 'keydown', vid.check, func.p );
//         return onFail( v.error.message || 'Media Element Error' );
//     }
//     , start: function vidstart ( ) {
//         let v = document.querySelector( 'video' )
//             , bar = document.querySelector( 'progress' );
//         bar.setAttribute( 'max', v.duration );
//         bar.style.setProperty( 'width', CSS.px( v.clientWidth ) );
//         window.removeEventListener( 'mousedown', vid.check, func.p );
//         window.removeEventListener( 'keydown', vid.check, func.p );
//         v.removeEventListener( 'focus', vid.check, func.p );
//         v.removeEventListener( 'play', vid.start, func.p );
//         v.removeEventListener( 'click', vid.check, func.p );
//         delete vid.check;
//     }
//     , check: function vidcheck ( ) {
//         let u = navigator.userActivation;
//         if ( u.hasBeenActive ) v.play( ).then( vid.start, vid.fail );
//     }
//     , fits: undefined
//     , size: function vsize ( x = false ) {
//         vid.fits = vid.fits || ( ( a = [ 0, 100, 250, 300 ], b = n => window.innerWidth - n, c = n => CSS.px( n ) ) => [ v.videoWidth, ...a.map( b ) ].map( c ) )( );
//         v.style.width = !x ? vid.fits.shift( ) : vid.fits.pop( );
//         !!v.style.width || delete vid.fits;
//         !!vid.fits.length || vid.clear( );
//     }
//     , right: function vright ( m = parseInt( v.style.marginRight ) || 400 ) {
//         let r = m - 50
//             , w = parseInt( getComputedStyle( v ).marginRight )
//             , s = r < 250 || w > r ? 'auto' : r + 'px';
//         v.style.marginRight = s;
//     }
//     , caption ( msg ) {
//         let x = document.querySelector( 'dialog' );
//         if ( x.open ) {
//             x.addEventListener( 'close', ( ) => vid.caption( msg ), {
//                 once: true
//             } );
//         } else {
//             x.innerHTML = msg;
//             !document.fullscreenElement ? x.show( ) : x.showModal( );
//             x.style.setProperty( 'left', `calc( 85% - ${x.clientWidth}px )` );
//             let y = window.setInterval( ( ) => ( x.open ? x.close( ) : clearInterval( y ) ), 600 );
//         }
//     }
//     , end: ( s = location.search + '&e=' + ( parseInt( v.currentTime ) + 1 ) ) => ( location.search = decodeURIComponent( s ) )
//     , speed ( ) {
//         let r = v.playbackRate;
//         if ( r > 3 ) v.muted = true;
//         else if ( v.muted && !vid.quiet ) {
//             v.muted = false;
//             /* v.volume = +sessionStorage.s; */
//         }
//         vid.caption( v.playbackRate + 'x' );
//     }
//     , progress ( ) {
//         let x = document.querySelector( 'progress' );
//         v.duration !== x.max || x.setAttribute( 'max', v.duration );
//         v.clientWidth === x.clientWidth || x.style.setProperty( 'width', CSS.px( v.clientWidth ) );
//         x.attributes.bar || x.toggleAttribute( 'bar' );
//         let y = window.setInterval( ( ) => ( x.attributes.bar ? x.removeAttribute( 'bar' ) : clearInterval( y ) ), 600 );
//     }
//     , level ( ) {
//         let lvl = {
//             l: [ 'type="range" min="0" max="1" step="0.05"', 'value="' + v.volume + '"' ]
//             , m: [ 'type="radio"', 'checked="true"' ]
//             , n: Math.max( 0, v.volume - +v.muted )
//             , get cap( ) {
//                 let {
//                     l
//                     , m
//                     , n
//                 } = this
//                 , a = n > 0 ? l : m;
//                 return `<input ${a.join(' ')}>`;
//             }
//         };
//         sessionStorage.setItem( 's', lvl.n );
//         return vid.caption( lvl.cap );
//     } //   level() {
//     //     let x = document.createElement("input");
//     //     x.type = v.muted ? "radio": "range";
//     //     x.min = 0;
//     //     x.max = 1;
//     //     x.step = 0.05;
//     //     x.value = v.volume;
//     //      x.style = "position: absolute; left: calc(50% - 50px); top: 5%; width: 100px;";
//     //     sessionStorage.s = v.volume;
//     // let      y=document.createElement("dialog");
//     //     document.body.append(y.append(x));
//     //     y.open="true";
//     //     let y = window.setInterval(() => (x.isConnected ? x.remove() : clearInterval(y)), 600);
//     // },
// };

// const func = {
//     c: {
//         capture: true
//     }
//     , o: {
//         once: true
//     }
//     , p: {
//         passive: true
//     }
//     , end: ( e = window.event ) => {
//         if ( !e ) return false;
//         if ( typeof e.stopPropagation === 'function' ) e.stopPropagation( );
//         if ( typeof e.cancelBubble !== 'undefined' ) e.cancelBubble = true;
//         if ( typeof e.preventDefault === 'function' ) e.preventDefault( );
//         return e;
//     }
//     , vsp: async ( ) => {
//         const url = await window.prompt( 'uri', '...' );
//         if ( /^http.*mp4/.test( url ) ) {
//             v.currentTime = v.duration;
//             v.src = url;
//         } else {
//             window.alert( 'Not an MP4!' );
//         }
//     },
//     /*pop: (f = vid.pip ? v.requestPictureInPicture : document.exitPictureInPicture) => f() .then(w => vid.pip = w), l() {; lInt = window.setInterval(() => { if (func.lw || func.lw.closed) { func.lw = f window.clearInterval(pInt); } }, 500); },*/
//     // ms: (s) => location.search = (s.includes('%2')) ? decodeURI(s) : s,
//     mx: m => typeof m === 'string' && m.includes( '.mp4' ) && ( m.startsWith( 'Vid.html?v=' ) || m.startsWith( 'file://' ) )
//     , m: function ( m ) {
//         let l = v.volume
//             , x = func.mx( m )
//             , s = load.vid
//             , r = [ 'rect', 'src' ].includes( m );
//         if ( x === true ) {
//             if ( m.startsWith( 'Vid.html?v=' ) ) s( m.substring( m.indexOf( '?' ) ) );
//             if ( m.startsWith( 'file://' ) ) s( 'v=' + m );
//             false;
//             return;
//         }
//         if ( r === true ) {
//             ( r = {
//                 msg: m
//                 , src: decodeURI( v.currentSrc )
//                 , tabs: !!window.locationbar.visible
//                 , full: [ 'width', 'height' ].every( p => screen[ p ] === visualViewport[ p ] )
//             } ), ( m = '*' );
//             return self.opener.postMessage( r, m );
//         }
//         if ( m === true ) {
//             vid.quiet = v.volume;
//             document.visibilityState === 'visible' || !document.pictureInPictureElement || v.requestPictureInPicture( );
//             v.muted = true;
//             !v.paused || v.play( );
//         }
//         if ( !m || m === false ) {
//             v.volume = vid.quiet || 1;
//             delete vid.quiet;
//             !v.muted || v.playbackRate > 2 || !navigator.userActivation.hasBeenActive || ( v.muted = false );
//         }
//     }
//     , d: ( ) => {
//         let f = v.style.filter
//             , n = !f ? 1 : +f.slice( 11, 14 );
//         if ( n < 0.15 ) return v.style.removeProperty( 'filter' );
//         else return ( v.style.filter = `brightness(${n - 0.1})` );
//     }
//     , x: ( ) => v.style.setProperty( 'filter'
//         , ( ( f = [
//             [ ( ( ) => Math.random( ) )( ), 'brightness', 1, false ]
//             , [ ( ( ) => Math.random( ) )( ), 'contrast', 1, false ]
//             , [ ( ( ) => Math.random( ) )( ), 'grayscale', 1, false ]
//             , [ ( ( ) => Math.random( ) )( ), 'hue-rotate', 360, 'deg' ]
//             , [ ( ( ) => Math.random( ) )( ), 'saturate', 1, false ]
//             , [ ( ( ) => Math.random( ) )( ), 'sepia', 1, false ]
//             , [ ( ( ) => Math.random( ) )( ), 'url', 0, false ]
//        ] ) => {
//             f = f.sort( ).pop( );
//             return ( f[ 1 ] + '(' + ( f[ 1 ] === 'url' ? localStorage.randallpic : f[ 2 ] > 1 ? parseInt( f[ 2 ] / f[ 0 ] ) : f[ 0 ].toPrecision( 3 ) ) + ( f[ 3 ] ? f[ 3 ] : '' ) + ')' );
//         } )( ) )
// };
// func.pip = {
//     pop: false
//     , full: false
//     , see ( ) {
//         switch ( navigator.userActivation.isActive + document.visibilityState ) {
//         case 'truevisible':
//             document.pictureInPictureElement && document.exitPictureInPicture( );
//             this.full ? document.fullscreenElement && document.exitFullscreen( ) : v.requestFullscreen( );
//             /* this.full ? (document.fullscreenElement && document.exitFullscreen()) : v.requestFullscreen(); */
//             break;
//         case 'truehidden':
//             document.fullscreenElement && document.exitFullscreen( );
//             !document.pictureInPictureElement && v.requestPictureInPicture( );
//             break;
//         case 'falsehidden':
//             v.pause( );
//             break;
//         case 'falsevisible':
//             document.pictureInPictureElement && document.exitPictureInPicture( );
//             this.full ? document.fullscreenElement && document.exitFullscreen( ) : v.requestFullscreen( );
//             !v.playbackRate || v.play( );
//             v.onratechange.call( globalThis, 'inactive!' );
//             break;
//         default:
//             if ( window.confirm( navigator.userActivation.isActive + document.visibilityState ) ) this.set( false );
//             break;
//         }
//     }
//     , set( p = !this.pop ) {
//         let str = `Picture in Picture onblur listener is ${(p ? 'Enabled' : 'Disabled')}. < br > Viewing mode is ${(this.full ? 'Fullscreen' : 'In-Line')}.`;
//         this.pop = p;
//         document.onvisibilitychange = p ? this.see : func.vizin;
//         return vid.caption( str );
//     }
//     , fill ( ) {
//         this.full = !this.full;
//         let str = `Fullscreen ${(!this.full ? 'Disabled' : 'Enabled')}!`;
//         return vid.caption( str );
//     }
// };

// const atType = ( ) => location.assign( `${decodeURI(v.currentSrc)}#t=${parseInt(v.currentTime)}` );

// function vkey ( e ) {
//     const v = vkey.prototype.el;
//     if ( document.activeElement !== v ) {
//         v.sel( );
//         v.to = window.setTimeout( v.del, 1000 );
//         vkey.prototype.el = v;
//     }
//     // if (e.ctrlKey && ["1", "2", "3", "4", "5", "6", "7", "8", "9", "Tab"].includes(e.key))
//     //  return false;
//     const a = {
//             Start: decodeURI( v.src )
//             , Now: undefined
//             , Vid: vid.end instanceof Function ? vid.end : atType // List(timed = false) {
//             //    let a = "Sex.html?v=" + decodeURI(v.currentSrc),
//             //       b = timed ? "_blank" : "lists",
//             //       c =
//             //          "width=400,height=100,left=" +
//             //          (window.innerWidth - 400) +
//             //          ",top=5,menubar=0,scrollbars=0,status=0,titlebar=0,locationbar=0,toolbar=0,personalbar=0,locationbar=0";
//             //    if (timed)
//             //       a += timed[0] ? "&f=" + timed : "&t=" + parseInt(v.currentTime);
//             //    return window.open(a, b, c);
//             // },
//             // Lists() {
//             //    let f = JSON.parse(localStorage.vf),
//             //       p = this.List;
//             //    f.forEach((fl) => p(fl));
//             // },
//         }
//         , out = ( ) => {
//             v.pause( );
//             v.remove( );
//             document.onvisibilitychange = undefined;
//             document.addEventListener( 'focusin', load.vizin, func.o );
//             document.removeEventListener( 'keydown', vkey );
//             window.addEventListener( 'blur'
//                 , ( ) => {
//                     document.addEventListener( 'keydown', load.vizin, func.o );
//                 }, func.o );
//         }
//         , loud = vid.quiet || vid.quiet !== true
//         , clip = str => {
//             window.onbeforeunload = window.navigator.clipboard.writeText( str.slice( 3 ) );
//             return ( location.search = str );
//         }
//         , p = function ( e ) {
//             if ( e.preventDefault && !e.defaultPrevented ) e.preventDefault( );
//             if ( e.cancelable ) e.stopPropagation( );
//             return e;
//         }
//         , x = ( ) => func.x( )
//         , vsp = ( ) => func.vsp( )
//         , xd = ( ) => func.d( )
//         , b = window.locationbar.visible
//         , n = ( ) => ( a.Now = parseInt( v.currentTime ) > 0 ? '&t=' + parseInt( v.currentTime ) : '' );
//     /* v.muted ? v.muted = true : false; */
//     n( );
//     if ( e.key === ' ' ) return p( window.event ), e.metaKey ? window.close( ) : v.paused ? v.play( ) : v.pause( );
//     if ( e.key === 'Meta' ) e.shiftKey || p( e ), !!document.fullscreenElement ? document.exitFullscreen( ) : !!document.pictureInPictureElement ? document.exitPictureInPicture( ) : v.muted === true ? [
//        ( ) => ( v.muted = false )
//        , ( ) => ( vid.quiet = undefined )
//     ].forEach( e => e( ) ) : ( v.volume = 0.4 );
//     // !!document.fullscreenElement ? document.exitFullscreen() : (e.altKey || e.shiftKey) ? !!document.pictureInPictureElement ? document.exitPictureInPicture() : func.pip.set() : e.ctrlKey ? func.pip.fill() : --v.muted;
//     if ( e.key === 'r' ) location.search = '?v=' + a.Start + a.Now;
//     if ( e.key === 'w' ) e.repeat ? window.close( ) : !b ? vid.win( 0.4 ) : ( v.style.zoom = !v.style.zoom ? 1 : +v.style.zoom + 0.1 );
//     if ( e.key === 'e' ) !b ? vid.win( 0.6 ) : ( v.style.zoom = !v.style.zoom ? 1 : +v.style.zoom - 0.1 );
//     if ( e.key === 'E' ) !b ? window.screenTop >= 0.8 * ( screen.availHeight - window.outerHeight ) ? vid.win( ) : window.moveTo( window.screenLeft, window.screenTop + 0.05 * screen.availHeight ) : ( v.style.zoom = 1 );
//     if ( e.key === 'W' ) !b ? window.screenTop < 1 ? vid.win( ) : window.moveTo( window.screenLeft, window.screenTop - 0.05 * screen.availHeight ) : vid.clear( );
//     if ( e.key === 't' )
//         /* clip('"' + a.Start + '",'), */
//         clip( '?v=' + a.Start + a.Now );
//     if ( e.key === 'T' ) clip( '?v=' + a.Start );
//     if ( e.key === 'v' && loud ) v.volume = Math.min( 1, v.volume + 0.05 );
//     if ( e.key === 'c' ) loud ? ( v.volume = 0 > v.volume - 0.05 ? 0 : v.volume - 0.05 ) : false;
//     if ( e.key === 'V' && loud ) v.volume = 0;
//     if ( e.key === 'C' && loud && !e.ctrlKey ) v.volume = 1;
//     if ( e.key === 'S' ) v.playbackRate = [ 4, 1.5, 1, 0.9 ].find( e => e < v.playbackRate ) || 0.9;
//     if ( e.key === 's' ) v.playbackRate = [ 1, 1.5, 4 ].find( e => e > v.playbackRate ) || 4;
//     if ( e.key === 'f' && e.ctrlKey ) vid.size( ), p( e );
//     if ( e.key === 'f' && !e.ctrlKey ) !!document.fullscreenElement ? document.exitFullscreen( ) : v.requestFullscreen( ) /* v.style.zoom = !v.style.zoom ? 1 : +v.style.zoom + 0.1 */ ;
//     if ( e.key === 'p' ) return document.pictureInPictureElement ? document.exitPictureInPicture( ) : v.requestPictureInPicture( );
//     if ( e.key === 'F' ) return e.ctrlKey ? vsp( ) : v.style.setProperty( 'filter', 'hue-rotate(437deg)', 'important' );
//     /* e.ctrlKey ? vid.size(true) : v.style.zoom = !v.style.zoom ? 1 : +v.style.zoom - 0.1; */
//     if ( e.key === 'd' ) xd( );
//     if ( e.key === 'D' ) x( );
//     if ( e.key === 'a' ) return e.ctrlKey ? ( vkey.prototype.aud.listen = 'see' ) : ( v.playbackRate = 1 );
//     if ( e.key === 'A' )
//         // e.metaKey ? (v.muted === true) ? [()=>v.muted = false, ()=>vid.quiet = undefined].forEach(e=>e()) : v.volume = 0.4 : !e.ctrlKey ? v.playbackRate = 1 : /*!!window.opener ? window.opener.postMessage('listen', '*') :*/
//         return ( vkey.prototype.aud.listen = e.metaKey ? 'loop' : '' );
//     if ( e.key === 'x' ) v.currentTime = e.ctrlKey ? v.currentTime + 2 : v.currentTime + v.duration / 70;
//     if ( e.key === 'z' ) v.currentTime = e.ctrlKey ? v.currentTime - 2 : v.currentTime - v.duration / 70;
//     if ( e.key === 'X' ) v.currentTime = v.currentTime + v.duration / 25;
//     if ( e.key === 'Z' ) v.currentTime = v.currentTime - v.duration / 25;
//     if ( e.key === '1' ) v.currentTime = v.duration * 0.1;
//     if ( e.key === '2' ) v.currentTime = v.duration * 0.2;
//     if ( e.key === '3' ) v.currentTime = v.duration * 0.3;
//     if ( e.key === '4' ) v.currentTime = v.duration * 0.4;
//     if ( e.key === '5' ) v.currentTime = v.duration * 0.5;
//     if ( e.key === '6' ) v.currentTime = v.duration * 0.6;
//     if ( e.key === '7' ) v.currentTime = v.duration * 0.7;
//     if ( e.key === '8' ) v.currentTime = v.duration * 0.8;
//     if ( e.key === '9' ) v.currentTime = v.duration * 0.9;
//     if ( e.key === '~' ) v.currentTime = v.duration - 5;
//     if ( e.key === '!' ) vkey.prototype.el.id.startsWith( 'v' ) ? vkey.prototype.audio( ) : vkey.prototype.video( );
//     /* window.open(!e.ctrlKey ? 'Sex.html?v=' + v.src : 'Sex.html?v=' + a.Start + a.Now); */
//     // if (e.key === '@') e.ctrlKey ? (location.search = '') : a.Lists();
//     /* location.assign('Xr.html'); */
//     if ( e.key === '@' ) window.open( '', 'Sex' );
//     if ( e.key === '?' ) !window.confirm( 'vid or cxl 4 dir' ) ? window.location.assign( a.Start.split( '/' ).slice( 0, -1 ).join( '/' ) ) : atType( );
//     if ( e.key === '`' && !e.ctrlKey && !e.shiftKey ) v.currentTime = 0;
//     if ( e.key === 'Tab' && !e.ctrlKey ) p( e ), e.metaKey ? window.opener.focus( ) : !b ? vid.winrt( ) : !e.shiftKey ? vid.size( ) && vid.right( ) : vid.right( );
//     if ( e.key === 'ArrowRight' ) v.currentTime = e.ctrlKey ? v.currentTime + 3 : v.currentTime + 6;
//     if ( e.key === 'ArrowLeft' ) v.currentTime = e.ctrlKey ? v.currentTime - 3 : v.currentTime - 6;
//     if ( e.key === 'ArrowUp' && loud ) v.volume = Math.min( 1, v.volume + 0.05 );
//     if ( e.key === 'ArrowDown' && loud ) v.volume = Math.max( 0, v.volume - 0.05 );
//     if ( e.key === 'Q' ) p( e ), v.muted === true ? [ ( ) => ( v.muted = false ), ( ) => ( vid.quiet = undefined ) ].forEach( e => e( ) ) : ( v.volume = 0.4 );
//     return v;
// }

// vkey.prototype.el = Object.assign( v, {
//     sel ( ) {
//         const v = vkey.prototype.el
//             , n = v.to;
//         v.classList.add( 'sel' );
//         if ( n ) void window.clearTimeout( n );
//         return v.focus( );
//     }
//     , del ( ) {
//         const v = vkey.prototype.el
//             , n = v.to;
//         if ( n ) v.to = void window.clearTimeout( n );
//         v.classList.remove( 'sel' );
//         return v.blur( );
//     }
// } );
// vkey.prototype.aud = {
//     get listen( ) {
//         if ( !this.win || this.win.closed ) {
//             let str = `popup=true,width=${parseInt( 0.5 * screen.availWidth )},left=${parseInt(0.25 * screen.availWidth)},height=150`;
//             this.win = window.open( 'Dir.html#a', 'listen', str );
//         }
//         return this.win;
//     }
//     , set listen( i = '' ) {
//         let win = this.listen;
//         if ( i === 'see' ) {
//             return win.focus( );
//         } else return win.postMessage( 'loop' == i, '*' );
//     }
// };
// vkey.prototype.audio = function ( ) {
//     let a = document.createElement( 'audio' );
//     document.body.prepend( a );
//     a.id = 'a';
//     a.src = v.src;
//     // a.toggleAttribute('controls');
//     a.currentTime = v.currentTime;
//     v.src = '';
//     vkey.prototype.el = a;
//     v.load( );
//     v.toggleAttribute( 'hidden' );
//     return a.play( );
// };
// vkey.prototype.video = function ( ) {
//     vkey.prototype.el = v;
//     let a = document.getElementById( 'a' );
//     a.pause( );
//     v.src = a.src;
//     v.currentTime = a.currentTime;
//     a.remove( );
//     v.toggleAttribute( 'hidden' );
//     v.play( );
// };


// document.onselectionchange = ( e ) => {
//     document.getSelection( ).isCollapsed || document.getSelection( ).empty( )
// }
// window.onload = load.page;