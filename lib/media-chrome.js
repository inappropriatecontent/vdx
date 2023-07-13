var MediaChrome=(()=>{var xe=Object.defineProperty;var Ss=Object.getOwnPropertyDescriptor;var Ls=Object.getOwnPropertyNames;var Ds=Object.prototype.hasOwnProperty;var Cs=(s,i,e)=>i in s?xe(s,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[i]=e;var Ct=(s,i)=>{for(var e in i)xe(s,e,{get:i[e],enumerable:!0})},ys=(s,i,e,t)=>{if(i&&typeof i=="object"||typeof i=="function")for(let a of Ls(i))!Ds.call(s,a)&&a!==e&&xe(s,a,{get:()=>i[a],enumerable:!(t=Ss(i,a))||t.enumerable});return s};var Rs=s=>ys(xe({},"__esModule",{value:!0}),s);var Yt=(s,i,e)=>(Cs(s,typeof i!="symbol"?i+"":i,e),e),yt=(s,i,e)=>{if(!i.has(s))throw TypeError("Cannot "+e)};var c=(s,i,e)=>(yt(s,i,"read from private field"),e?e.call(s):i.get(s)),b=(s,i,e)=>{if(i.has(s))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(s):i.set(s,e)},p=(s,i,e,t)=>(yt(s,i,"write to private field"),t?t.call(s,e):i.set(s,e),e);var y=(s,i,e)=>(yt(s,i,"access private method"),e);var Oa={};Ct(Oa,{MediaAirplayButton:()=>ii,MediaCaptionsButton:()=>Oi,MediaCastButton:()=>ri,MediaChromeButton:()=>I,MediaChromeRange:()=>se,MediaContainer:()=>Lt,MediaControlBar:()=>yi,MediaController:()=>Xe,MediaCurrentTimeDisplay:()=>ki,MediaDurationDisplay:()=>wi,MediaFullscreenButton:()=>Qi,MediaGestureReceiver:()=>oi,MediaLiveButton:()=>Ki,MediaLoadingIndicator:()=>Is,MediaMuteButton:()=>ji,MediaPipButton:()=>es,MediaPlayButton:()=>ss,MediaPlaybackRateButton:()=>ns,MediaPosterImage:()=>ds,MediaPreviewThumbnail:()=>fs,MediaPreviewTimeDisplay:()=>bs,MediaProgressRange:()=>us,MediaSeekBackwardButton:()=>ps,MediaSeekForwardButton:()=>Hi,MediaTimeDisplay:()=>xi,MediaTimeRange:()=>ft,MediaTitleElement:()=>vs,MediaVolumeRange:()=>Ms,constants:()=>Ne,labels:()=>Zt,timeUtils:()=>Be});var Ne={};Ct(Ne,{AttributeToStateChangeEventMap:()=>Rt,AvailabilityStates:()=>w,MediaStateChangeEvents:()=>ee,MediaStateReceiverAttributes:()=>f,MediaUIAttributes:()=>n,MediaUIEvents:()=>h,PointerTypes:()=>Pe,ReadyStates:()=>ws,StateChangeEventToAttributeMap:()=>ks,StreamTypes:()=>U,TextTrackKinds:()=>G,TextTrackModes:()=>F});var h={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_CAPTIONS_REQUEST:"mediashowcaptionsrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_CAPTIONS_REQUEST:"mediadisablecaptionsrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},ee={MEDIA_AIRPLAY_UNAVAILABLE:"mediaairplayunavailablechange",MEDIA_PIP_UNAVAILABLE:"mediapipunavailablechange",MEDIA_PAUSED:"mediapausedchange",MEDIA_HAS_PLAYED:"mediahasplayedchange",MEDIA_MUTED:"mediamutedchange",MEDIA_VOLUME_LEVEL:"mediavolumelevelchange",MEDIA_VOLUME:"mediavolumechange",MEDIA_VOLUME_UNAVAILABLE:"mediavolumeunavailablechange",MEDIA_IS_PIP:"mediaispipchange",MEDIA_IS_CASTING:"mediaiscastingchange",MEDIA_CAPTIONS_LIST:"mediacaptionslistchange",MEDIA_SUBTITLES_LIST:"mediasubtitleslistchange",MEDIA_CAPTIONS_SHOWING:"mediacaptionsshowingchange",MEDIA_SUBTITLES_SHOWING:"mediasubtitlesshowingchange",MEDIA_IS_FULLSCREEN:"mediaisfullscreenchange",MEDIA_PLAYBACK_RATE:"mediaplaybackratechange",MEDIA_CURRENT_TIME:"mediacurrenttimechange",MEDIA_DURATION:"mediadurationchange",MEDIA_SEEKABLE:"mediaseekablechange",MEDIA_PREVIEW_IMAGE:"mediapreviewimagechange",MEDIA_PREVIEW_COORDS:"mediapreviewcoordschange",MEDIA_LOADING:"medialoadingchange",USER_INACTIVE:"userinactivechange"},f={MEDIA_CHROME_ATTRIBUTES:"media-chrome-attributes",MEDIA_CONTROLLER:"media-controller"},n={MEDIA_AIRPLAY_UNAVAILABLE:"media-airplay-unavailable",MEDIA_FULLSCREEN_UNAVAILABLE:"media-fullscreen-unavailable",MEDIA_PIP_UNAVAILABLE:"media-pip-unavailable",MEDIA_CAST_UNAVAILABLE:"media-cast-unavailable",MEDIA_PAUSED:"media-paused",MEDIA_HAS_PLAYED:"media-has-played",MEDIA_MUTED:"media-muted",MEDIA_VOLUME_LEVEL:"media-volume-level",MEDIA_VOLUME:"media-volume",MEDIA_VOLUME_UNAVAILABLE:"media-volume-unavailable",MEDIA_IS_PIP:"media-is-pip",MEDIA_IS_CASTING:"media-is-casting",MEDIA_CAPTIONS_LIST:"media-captions-list",MEDIA_SUBTITLES_LIST:"media-subtitles-list",MEDIA_CAPTIONS_SHOWING:"media-captions-showing",MEDIA_SUBTITLES_SHOWING:"media-subtitles-showing",MEDIA_IS_FULLSCREEN:"media-is-fullscreen",MEDIA_PLAYBACK_RATE:"media-playback-rate",MEDIA_CURRENT_TIME:"media-current-time",MEDIA_DURATION:"media-duration",MEDIA_SEEKABLE:"media-seekable",MEDIA_PREVIEW_TIME:"media-preview-time",MEDIA_PREVIEW_IMAGE:"media-preview-image",MEDIA_PREVIEW_COORDS:"media-preview-coords",MEDIA_LOADING:"media-loading",MEDIA_BUFFERED:"media-buffered",MEDIA_STREAM_TYPE:"media-stream-type",MEDIA_TARGET_LIVE_WINDOW:"media-target-live-window",MEDIA_TIME_IS_LIVE:"media-time-is-live"},ks=Object.entries(ee).reduce((s,[i,e])=>{let t=n[i];return t&&(s[e]=t),s},{userinactivechange:"user-inactive"}),Rt=Object.entries(n).reduce((s,[i,e])=>{let t=ee[i];return t&&(s[e]=t),s},{"user-inactive":"userinactivechange"}),G={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},F={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},ws={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},Pe={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},w={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},U={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"};var T={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:s=1}={})=>`current playback rate ${s}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading"},_={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",AIRPLAY:()=>"air play",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:s=30}={})=>`seek forward ${s} seconds`,SEEK_BACK_N_SECS:({seekOffset:s=30}={})=>`seek back ${s} seconds`},Zt={...T,..._};var Be={};Ct(Be,{formatAsTimePhrase:()=>W,formatTime:()=>R});function Oe(s,i=!1){return s.split("_").map(function(e,t){return(t||i?e[0].toUpperCase():e[0].toLowerCase())+e.slice(1).toLowerCase()}).join("")}function jt(s){return typeof s=="number"&&!Number.isNaN(s)&&Number.isFinite(s)}var zt=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],Us=(s,i)=>{let e=s===1?zt[i].singular:zt[i].plural;return`${s} ${e}`},W=s=>{if(!jt(s))return"";let i=Math.abs(s),e=i!==s,t=new Date(0,0,0,0,0,i,0);return`${[t.getHours(),t.getMinutes(),t.getSeconds()].map((l,u)=>l&&Us(l,u)).filter(l=>l).join(", ")}${e?" remaining":""}`};function R(s,i){let e=!1;s<0&&(e=!0,s=0-s),s=s<0?0:s;let t=Math.floor(s%60),a=Math.floor(s/60%60),r=Math.floor(s/3600),d=Math.floor(i/60%60),l=Math.floor(i/3600);return(isNaN(s)||s===1/0)&&(r=a=t="-"),r=r>0||l>0?r+":":"",a=((r||d>=10)&&a<10?"0"+a:a)+":",t=t<10?"0"+t:t,(e?"-":"")+r+a+t}var $e=(s,i,e=".value")=>{let t=s.querySelector(e);!t||(t.textContent=i)},xs=(s,i)=>{let e=`slot[name="${i}"]`,t=s.shadowRoot.querySelector(e);return t?t.children:[]},Ve=(s,i)=>xs(s,i)[0],le=(s,i)=>!s||!i?!1:s.contains(i)?!0:le(s,i.getRootNode().host),ce=(s,i)=>{if(!s)return null;let e=s.closest(i);return e||ce(s.getRootNode().host,i)};function S(s,i){var t;let e;for(e of s.querySelectorAll("style")){let a;try{a=(t=e.sheet)==null?void 0:t.cssRules}catch{continue}for(let r of a!=null?a:[])if(r.selectorText===i)return r}return e!=null&&e.sheet?(e.sheet.insertRule(`${i}{}`,e.sheet.cssRules.length),e.sheet.cssRules[e.sheet.cssRules.length-1]):{style:{setProperty:()=>{},removeProperty:()=>{}}}}var He=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},kt=class{observe(){}},Xt={ResizeObserver:kt,HTMLElement:class extends He{},DocumentFragment:class extends He{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},CustomEvent:function(){},getComputedStyle:function(){}},Ps={createElement:function(){return new Xt.HTMLElement}},Jt=typeof window=="undefined"||typeof window.customElements=="undefined",o=Jt?Xt:window,m=Jt?Ps:window.document;var ei=m.createElement("template");ei.innerHTML=`
<style>
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    box-sizing: border-box;
    background: var(--media-control-background, rgba(20,20,30, 0.7));

    padding: var(--media-control-padding, 10px);

    
    font-size: 14px;
    line-height: var(--media-text-content-height, var(--media-control-height, 24px));
    font-weight: bold;
    color: #fff;

    transition: background 0.15s linear;

    pointer-events: auto;
    cursor: pointer;
    font-family: Arial, sans-serif;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgba(27, 127, 204, 0.9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50,50,70, 0.7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, #eee);
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }
</style>
`;var x,ue,K,We,Fe=class extends o.HTMLElement{constructor(e={}){super();b(this,x,void 0);Yt(this,"preventClick",!1);b(this,ue,e=>{this.preventClick||this.handleClick(e)});b(this,K,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",c(this,K));return}this.handleClick(e)});b(this,We,e=>{let{metaKey:t,altKey:a,key:r}=e;if(t||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",c(this,K));return}this.addEventListener("keyup",c(this,K),{once:!0})});this.attachShadow({mode:"open"});let t=ei.content.cloneNode(!0);this.nativeEl=t;let a=e.slotTemplate;a||(a=m.createElement("template"),a.innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(a.content.cloneNode(!0)),this.shadowRoot.appendChild(t);let{style:r}=S(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`)}static get observedAttributes(){return["disabled",f.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",c(this,ue)),this.addEventListener("keydown",c(this,We)),this.setAttribute("tabindex","0")}disable(){this.removeEventListener("click",c(this,ue)),this.removeEventListener("keyup",c(this,K)),this.removeAttribute("tabindex")}attributeChangedCallback(e,t,a){var r,d,l,u,E;e===f.MEDIA_CONTROLLER?(t&&((d=(r=c(this,x))==null?void 0:r.unassociateElement)==null||d.call(r,this),p(this,x,null)),a&&(p(this,x,(l=this.getRootNode())==null?void 0:l.getElementById(a)),(E=(u=c(this,x))==null?void 0:u.associateElement)==null||E.call(u,this))):e==="disabled"&&a!==t&&(a==null?this.enable():this.disable())}connectedCallback(){var t,a,r;this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");let e=this.getAttribute(f.MEDIA_CONTROLLER);e&&(p(this,x,(t=this.getRootNode())==null?void 0:t.getElementById(e)),(r=(a=c(this,x))==null?void 0:a.associateElement)==null||r.call(a,this))}disconnectedCallback(){var e,t;this.disable(),(t=(e=c(this,x))==null?void 0:e.unassociateElement)==null||t.call(e,this),p(this,x,null)}get keysUsed(){return["Enter"," "]}handleClick(e){}};x=new WeakMap,ue=new WeakMap,K=new WeakMap,We=new WeakMap;o.customElements.get("media-chrome-button")||o.customElements.define("media-chrome-button",Fe);var I=Fe;var Ns=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,ti=m.createElement("template");ti.innerHTML=`
  <slot name="airplay">${Ns}</slot>
`;var Qe=class extends I{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(i={}){super({slotTemplate:ti,...i})}connectedCallback(){this.setAttribute("aria-label",_.AIRPLAY()),super.connectedCallback()}handleClick(){let i=new o.CustomEvent(h.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(i)}};o.customElements.get("media-airplay-button")||o.customElements.define("media-airplay-button",Qe);var ii=Qe;var Os='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',Bs='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>',ai=m.createElement("template");ai.innerHTML=`
  <style>
  :host([${n.MEDIA_IS_CASTING}]) slot:not([name=exit]) > *,
  :host([${n.MEDIA_IS_CASTING}]) ::slotted(:not([slot=exit])) {
    display: none !important;
  }

  
  :host(:not([${n.MEDIA_IS_CASTING}])) slot:not([name=enter]) > *,
  :host(:not([${n.MEDIA_IS_CASTING}])) ::slotted(:not([slot=enter])) {
    display: none !important;
  }
  </style>

  <slot name="enter">${Os}</slot>
  <slot name="exit">${Bs}</slot>
`;var si=s=>{let e=s.getAttribute(n.MEDIA_IS_CASTING)!=null?_.EXIT_CAST():_.ENTER_CAST();s.setAttribute("aria-label",e)},Ge=class extends I{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_IS_CASTING,n.MEDIA_CAST_UNAVAILABLE]}constructor(i={}){super({slotTemplate:ai,...i})}connectedCallback(){si(this),super.connectedCallback()}attributeChangedCallback(i,e,t){i===n.MEDIA_IS_CASTING&&si(this),super.attributeChangedCallback(i,e,t)}handleClick(){let i=this.getAttribute(n.MEDIA_IS_CASTING)!=null?h.MEDIA_EXIT_CAST_REQUEST:h.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new o.CustomEvent(i,{composed:!0,bubbles:!0}))}};o.customElements.get("media-cast-button")||o.customElements.define("media-cast-button",Ge);var ri=Ge;var ni=m.createElement("template");ni.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;var L,Ke=class extends o.HTMLElement{constructor(e={}){super();b(this,L,void 0);let t=this.attachShadow({mode:"open"}),a=ni.content.cloneNode(!0);this.nativeEl=a;let r=e.slotTemplate;r||(r=m.createElement("template"),r.innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(r.content.cloneNode(!0)),t.appendChild(a)}static get observedAttributes(){return[f.MEDIA_CONTROLLER,n.MEDIA_PAUSED]}attributeChangedCallback(e,t,a){var r,d,l,u,E;e===f.MEDIA_CONTROLLER&&(t&&((d=(r=c(this,L))==null?void 0:r.unassociateElement)==null||d.call(r,this),p(this,L,null)),a&&(p(this,L,(l=this.getRootNode())==null?void 0:l.getElementById(a)),(E=(u=c(this,L))==null?void 0:u.associateElement)==null||E.call(u,this)))}connectedCallback(){var e,t,a,r;this.setAttribute("tabindex",-1),this.setAttribute("aria-hidden",!0),p(this,L,$s(this)),this.getAttribute(f.MEDIA_CONTROLLER)&&((t=(e=c(this,L))==null?void 0:e.associateElement)==null||t.call(e,this)),(a=c(this,L))==null||a.addEventListener("pointerdown",this),(r=c(this,L))==null||r.addEventListener("click",this)}disconnectedCallback(){var e,t,a,r;this.getAttribute(f.MEDIA_CONTROLLER)&&((t=(e=c(this,L))==null?void 0:e.unassociateElement)==null||t.call(e,this)),(a=c(this,L))==null||a.removeEventListener("pointerdown",this),(r=c(this,L))==null||r.removeEventListener("click",this),p(this,L,null)}handleEvent(e){var r;let t=(r=e.composedPath())==null?void 0:r[0];if(!!["video","media-controller"].includes(t==null?void 0:t.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){let{clientX:d,clientY:l}=e,{left:u,top:E,width:A,height:g}=this.getBoundingClientRect(),M=d-u,D=l-E;if(M<0||D<0||M>A||D>g||A===0&&g===0)return;let{pointerType:k=this._pointerType}=e;if(this._pointerType=void 0,k===Pe.TOUCH){this.handleTap(e);return}else if(k===Pe.MOUSE){this.handleMouseClick(e);return}}}}handleTap(e){}handleMouseClick(e){let t=this.getAttribute(n.MEDIA_PAUSED)!=null?h.MEDIA_PLAY_REQUEST:h.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new o.CustomEvent(t,{composed:!0,bubbles:!0}))}};L=new WeakMap;function $s(s){var e;let i=s.getAttribute(f.MEDIA_CONTROLLER);return i?(e=s.getRootNode())==null?void 0:e.getElementById(i):ce(s,"media-controller")}o.customElements.get("media-gesture-receiver")||o.customElements.define("media-gesture-receiver",Ke);var oi=Ke;var di=m.createElement("template");di.innerHTML=`
  <style>
    
    :host([media-is-fullscreen])  ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([audio])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    
    :host([audio]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([audio])[gestures-disabled]) ::slotted([slot=gestures-chrome]),
    :host(:not([audio])[gestures-disabled]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator)) {
      pointer-events: auto;
    }

    :host(:not([audio])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([audio])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([audio])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([audio])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([no-auto-hide])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    
    :host([user-inactive]:not([${n.MEDIA_PAUSED}]):not([${n.MEDIA_IS_CASTING}]):not([audio])) ::slotted(:not([slot=media]):not([no-auto-hide])) {
      opacity: 0;
      transition: opacity 1s;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    :host([${n.MEDIA_HAS_PLAYED}]) ::slotted([slot=poster]) {
      display: none;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
`;var Vs=Object.values(n),Hs="sm:384 md:576 lg:768 xl:960",Fs=s=>{var i;for(let e of s){let t=e.target;if(!t.isConnected)continue;let a=(i=t.getAttribute("breakpoints"))!=null?i:Hs,r=Ws(a),d=Qs(r,e.contentRect);Object.keys(r).forEach(l=>{if(d.includes(l)){t.hasAttribute(`breakpoint-${l}`)||t.setAttribute(`breakpoint-${l}`,"");return}t.removeAttribute(`breakpoint-${l}`)})}};function Ws(s){let i=s.split(/\s+/);return Object.fromEntries(i.map(e=>e.split(":")))}function Qs(s,i){return Object.keys(s).filter(e=>i.width>=s[e])}var qe=class extends o.HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(di.content.cloneNode(!0));let i=d=>{let l=this.media;for(let u of d)u.type==="childList"&&(u.removedNodes.forEach(E=>{if(E.slot=="media"&&u.target==this){let A=u.previousSibling&&u.previousSibling.previousElementSibling;if(!A||!l)this.mediaUnsetCallback(E);else{let g=A.slot!=="media";for(;(A=A.previousSibling)!==null;)A.slot=="media"&&(g=!1);g&&this.mediaUnsetCallback(E)}}}),l&&u.addedNodes.forEach(E=>{E==l&&this.handleMediaUpdated(l).then(A=>this.mediaSetCallback(A))}))};new MutationObserver(i).observe(this,{childList:!0,subtree:!0});let t=new ResizeObserver(Fs);this.resizeObserver=t,t.observe(this);let a=this.media,r=this.querySelector(":scope > slot[slot=media]");r&&r.addEventListener("slotchange",()=>{if(!r.assignedElements({flatten:!0}).length){this.mediaUnsetCallback(a);return}this.media&&(a=this.media,this.handleMediaUpdated(this.media).then(l=>this.mediaSetCallback(l)))})}static get observedAttributes(){return["autohide","gestures-disabled"].concat(Vs)}attributeChangedCallback(i,e,t){i.toLowerCase()=="autohide"&&(this.autohide=t)}get media(){let i=this.querySelector(":scope > [slot=media]");return(i==null?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i}mediaSetCallback(i){this._mediaClickPlayToggle=()=>{let e=i.paused?h.MEDIA_PLAY_REQUEST:h.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new o.CustomEvent(e,{composed:!0,bubbles:!0}))}}handleMediaUpdated(i){let e=r=>Promise.resolve(r),t=r=>(console.error('<media-chrome>: Media element set with slot="media" does not appear to be compatible.',r),Promise.reject(r));if(!i)return t(i);let a=i.nodeName.toLowerCase();return a.includes("-")?o.customElements.whenDefined(a).then(()=>e(i)):e(i)}mediaUnsetCallback(i){}connectedCallback(){let e=this.getAttribute("audio")!=null?T.AUDIO_PLAYER():T.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",e),this.media&&this.handleMediaUpdated(this.media).then(d=>this.mediaSetCallback(d)),this.setAttribute("user-inactive","user-inactive");let t=()=>{if(this.autohide<0)return;this.setAttribute("user-inactive","user-inactive");let d=new o.CustomEvent(ee.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(d)},a=()=>{this.removeAttribute("user-inactive");let d=new o.CustomEvent(ee.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(d)},r=()=>{a(),o.clearTimeout(this._inactiveTimeout),!(this.autohide<0)&&(this._inactiveTimeout=o.setTimeout(()=>{t()},this.autohide*1e3))};this.addEventListener("keyup",()=>{r()}),this.addEventListener("pointerup",d=>{d.pointerType==="touch"?[this,this.media].includes(d.target)&&!this.hasAttribute("user-inactive")?t():r():d.composedPath().some(l=>{var u;return["media-play-button","media-fullscreen-button"].includes((u=l==null?void 0:l.nodeName)==null?void 0:u.toLowerCase())})&&r()}),this.addEventListener("pointermove",d=>{d.pointerType==="mouse"&&d.target!==this&&(a(),o.clearTimeout(this._inactiveTimeout),[this,this.media].includes(d.target)&&r())}),this.addEventListener("mouseleave",()=>{t()}),this.addEventListener("keyup",()=>{this.setAttribute("media-keyboard-control","")}),o.addEventListener("mouseup",()=>{this.removeAttribute("media-keyboard-control")})}set autohide(i){i=Number(i),this._autohide=isNaN(i)?0:i}get autohide(){return this._autohide===void 0?2:this._autohide}};o.customElements.get("media-container-temp")||o.customElements.define("media-container-temp",qe);var li=qe;var q,Y,C,Ye=class{constructor(i,e){b(this,q,void 0);b(this,Y,void 0);b(this,C,new Set);p(this,q,i),p(this,Y,e)}[Symbol.iterator](){return c(this,C).values()}get length(){return c(this,C).size}get value(){var i;return(i=[...c(this,C)].join(" "))!=null?i:""}set value(i){var e;i!==this.value&&(p(this,C,new Set),this.add(...(e=i==null?void 0:i.split(" "))!=null?e:[]))}toString(){return this.value}item(i){return[...c(this,C)][i]}values(){return c(this,C).values()}keys(){return c(this,C).keys()}forEach(i){c(this,C).forEach(i)}add(...i){var e,t;i.forEach(a=>c(this,C).add(a)),!(this.value===""&&!((e=c(this,q))!=null&&e.hasAttribute(`${c(this,Y)}`)))&&((t=c(this,q))==null||t.setAttribute(`${c(this,Y)}`,`${this.value}`))}remove(...i){var e;i.forEach(t=>c(this,C).delete(t)),(e=c(this,q))==null||e.setAttribute(`${c(this,Y)}`,`${this.value}`)}contains(i){return c(this,C).has(i)}toggle(i,e){return typeof e!="undefined"?e?(this.add(i),!0):(this.remove(i),!1):this.contains(i)?(this.remove(i),!1):(this.add(i),!0)}replace(i,e){this.remove(i),this.add(e)}};q=new WeakMap,Y=new WeakMap,C=new WeakMap;var v={enter:"requestFullscreen",exit:"exitFullscreen",event:"fullscreenchange",element:"fullscreenElement",error:"fullscreenerror",enabled:"fullscreenEnabled"};m.fullscreenElement===void 0&&(v.enter="webkitRequestFullScreen",v.exit=m.webkitExitFullscreen!=null?"webkitExitFullscreen":"webkitCancelFullScreen",v.event="webkitfullscreenchange",v.element="webkitFullscreenElement",v.error="webkitfullscreenerror",v.enabled="webkitFullscreenEnabled");var wt=(s="")=>s.split(/\s+/),ci=(s="")=>{let[i,e]=s.split(":"),t=e?decodeURIComponent(e):void 0;return{language:i,label:t}},Gs=(s="",i={})=>wt(s).map(e=>{let t=ci(e);return{...i,...t}}),Ks=s=>Array.isArray(s)?s.map(i=>typeof i=="string"?ci(i):i):typeof s=="string"?Gs(s):[s],qs=({label:s,language:i}={})=>s?`${i}:${encodeURIComponent(s)}`:i,P=(s=[])=>Array.prototype.map.call(s,qs).join(" "),Ys=(s,i)=>e=>e[s]===i,ui=s=>{let i=Object.entries(s).map(([e,t])=>Ys(e,t));return e=>i.every(t=>t(e))},me=(s,i=[],e=[])=>{let t=Ks(e).map(ui),a=r=>t.some(d=>d(r));Array.from(i).filter(a).forEach(r=>{r.mode=s})},te=(s,i=()=>!0)=>{if(!(s!=null&&s.textTracks))return[];let e=typeof i=="function"?i:ui(i);return Array.from(s.textTracks).filter(e)},Ut=s=>{let i=!!s.getAttribute(n.MEDIA_CAPTIONS_SHOWING),e=!s.hasAttribute("no-subtitles-fallback")&&!!s.getAttribute(n.MEDIA_SUBTITLES_SHOWING);return i||e},he=s=>{var e,t,a,r;if(Ut(s)){let d=s.getAttribute(n.MEDIA_CAPTIONS_SHOWING);if(d){let u=new window.CustomEvent(h.MEDIA_DISABLE_CAPTIONS_REQUEST,{composed:!0,bubbles:!0,detail:d});s.dispatchEvent(u)}let l=s.getAttribute(n.MEDIA_SUBTITLES_SHOWING);if(l&&!s.hasAttribute("no-subtitles-fallback")){let u=new window.CustomEvent(h.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:l});s.dispatchEvent(u)}}else{let[d]=(t=wt((e=s.getAttribute(n.MEDIA_CAPTIONS_LIST))!=null?e:""))!=null?t:[];if(d){let l=new window.CustomEvent(h.MEDIA_SHOW_CAPTIONS_REQUEST,{composed:!0,bubbles:!0,detail:d});s.dispatchEvent(l)}else if(s.hasAttribute("no-subtitles-fallback"))console.error("Attempting to enable closed captions but none are available! Please verify your media content if this is unexpected.");else{let[l]=(r=wt((a=s.getAttribute(n.MEDIA_SUBTITLES_LIST))!=null?a:""))!=null?r:[];if(l){let u=new window.CustomEvent(h.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:l});s.dispatchEvent(u)}}}};var Zs=Object.values(U),mi=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],js=10,hi=0,H,ie,j,pe,ge,xt,ze=class extends li{constructor(){super();b(this,j);b(this,ge);b(this,H,new Ye(this,"hotkeys"));b(this,ie,void 0);na||(this._airplayUnavailable=w.UNSUPPORTED),pi||(this._fullscreenUnavailable=w.UNAVAILABLE),oa||(this._castUnavailable=w.UNSUPPORTED),aa||(this._pipUnavailable=w.UNSUPPORTED),fe!==void 0?fe||(this._volumeUnavailable=w.UNSUPPORTED):ra.then(()=>{fe||(this._volumeUnavailable=w.UNSUPPORTED,this.propagateMediaState(n.MEDIA_VOLUME_UNAVAILABLE,this._volumeUnavailable))}),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,this.associateElement(this);let e={MEDIA_PLAY_REQUEST:(t,a)=>{let r=Ee[n.MEDIA_STREAM_TYPE](this),d=this.getAttribute("noautoseektolive")===null;r==U.LIVE&&d&&e.MEDIA_SEEK_TO_LIVE_REQUEST(t,a),this.media.play().catch(()=>{})},MEDIA_PAUSE_REQUEST:()=>this.media.pause(),MEDIA_MUTE_REQUEST:()=>this.media.muted=!0,MEDIA_UNMUTE_REQUEST:()=>{let t=this.media;t.muted=!1,t.volume===0&&(t.volume=.25)},MEDIA_VOLUME_REQUEST:t=>{let a=this.media,r=t.detail;a.volume=r,r>0&&a.muted&&(a.muted=!1);try{o.localStorage.setItem("media-chrome-pref-volume",r.toString())}catch{}},MEDIA_ENTER_FULLSCREEN_REQUEST:()=>{if(!pi){console.warn("Fullscreen support is unavailable; not entering fullscreen");return}let t=this.media;m.pictureInPictureElement&&m.exitPictureInPicture(),super[v.enter]?this.fullscreenElement[v.enter]():t.webkitEnterFullscreen?t.webkitEnterFullscreen():t.requestFullscreen?t.requestFullscreen():console.warn("MediaChrome: Fullscreen not supported")},MEDIA_EXIT_FULLSCREEN_REQUEST:()=>{m[v.exit]()},MEDIA_ENTER_PIP_REQUEST:()=>{let t=this.media;if(!m.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!t.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}m[v.element]&&m[v.exit]();let a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};t.requestPictureInPicture().catch(r=>{if(r.code===11)if(t.readyState===0&&t.preload==="none"){let d=()=>{t.removeEventListener("loadedmetadata",l),t.preload="none"},l=()=>{t.requestPictureInPicture().catch(a),d()};t.addEventListener("loadedmetadata",l),t.preload="metadata",setTimeout(()=>{t.readyState===0&&a(),d()},1e3)}else throw r;else throw r})},MEDIA_EXIT_PIP_REQUEST:()=>{m.pictureInPictureElement&&m.exitPictureInPicture()},MEDIA_ENTER_CAST_REQUEST:()=>{var a;let t=this.media;!((a=globalThis.CastableVideoElement)!=null&&a.castEnabled)||(m[v.element]&&m[v.exit](),t.requestCast())},MEDIA_EXIT_CAST_REQUEST:async()=>{var t;(t=globalThis.CastableVideoElement)!=null&&t.castElement&&globalThis.CastableVideoElement.exitCast()},MEDIA_SEEK_REQUEST:t=>{let a=this.media,r=t.detail;(a.readyState>0||a.readyState===void 0)&&(a.currentTime=r)},MEDIA_PLAYBACK_RATE_REQUEST:t=>{this.media.playbackRate=t.detail},MEDIA_PREVIEW_REQUEST:t=>{var g;let a=this.media;if(!a)return;let r=t.detail;r===null&&this.propagateMediaState(n.MEDIA_PREVIEW_TIME,void 0),this.propagateMediaState(n.MEDIA_PREVIEW_TIME,r);let[d]=te(a,{kind:G.METADATA,label:"thumbnails"});if(!(d&&d.cues))return;if(r===null){this.propagateMediaState(n.MEDIA_PREVIEW_IMAGE,void 0),this.propagateMediaState(n.MEDIA_PREVIEW_COORDS,void 0);return}let l=Array.prototype.find.call(d.cues,M=>M.startTime>=r);if(!l)return;let u=/'^(?:[a-z]+:)?\/\//i.test(l.text)||(g=a.querySelector('track[label="thumbnails"]'))==null?void 0:g.src,E=new URL(l.text,u),A=new URLSearchParams(E.hash).get("#xywh");this.propagateMediaState(n.MEDIA_PREVIEW_IMAGE,E.href),this.propagateMediaState(n.MEDIA_PREVIEW_COORDS,A.split(",").join(" "))},MEDIA_SHOW_CAPTIONS_REQUEST:t=>{let a=je(this),{detail:r=[]}=t;me(F.SHOWING,a,r)},MEDIA_DISABLE_CAPTIONS_REQUEST:t=>{let a=je(this),{detail:r=[]}=t;me(F.DISABLED,a,r)},MEDIA_SHOW_SUBTITLES_REQUEST:t=>{let a=Ae(this),{detail:r=[]}=t;me(F.SHOWING,a,r)},MEDIA_DISABLE_SUBTITLES_REQUEST:t=>{let a=Ae(this),{detail:r=[]}=t;me(F.DISABLED,a,r)},MEDIA_AIRPLAY_REQUEST:()=>{let{media:t}=this;if(!!t){if(!(t.webkitShowPlaybackTargetPicker&&o.WebKitPlaybackTargetAvailabilityEvent)){console.warn("received a request to select AirPlay but AirPlay is not supported in this environment");return}t.webkitShowPlaybackTargetPicker()}},MEDIA_SEEK_TO_LIVE_REQUEST:(t,a)=>{let r=a.seekable;if(!r){console.warn("MediaController: Media element does not support seeking to live.");return}if(!r.length){console.warn("MediaController: Media is unable to seek to live.");return}a.currentTime=r.end(r.length-1)}};if(Object.keys(e).forEach(t=>{let a=`_handle${Oe(t,!0)}`;this[a]=r=>{if(r.stopPropagation(),!this.media){console.warn("MediaController: No media available.");return}e[t](r,this.media)},this.addEventListener(h[t],this[a])}),this._mediaStatePropagators={"play,pause,emptied":()=>{this.propagateMediaState(n.MEDIA_PAUSED,bi(this))},"playing,emptied":()=>{var t;this.propagateMediaState(n.MEDIA_HAS_PLAYED,!((t=this.media)!=null&&t.paused))},volumechange:()=>{this.propagateMediaState(n.MEDIA_MUTED,Ai(this)),this.propagateMediaState(n.MEDIA_VOLUME,fi(this)),this.propagateMediaState(n.MEDIA_VOLUME_LEVEL,gi(this))},[v.event]:t=>{let r=!!m[v.element]&&(t==null?void 0:t.target),d=le(this.fullscreenElement,r);this.propagateMediaState(n.MEDIA_IS_FULLSCREEN,d)},"enterpictureinpicture,leavepictureinpicture":t=>{var r;let a;if(t)a=t.type=="enterpictureinpicture";else{let d=(r=this.getRootNode().pictureInPictureElement)!=null?r:m.pictureInPictureElement;a=this.media&&le(this.media,d)}this.propagateMediaState(n.MEDIA_IS_PIP,a)},"entercast,leavecast,castchange":t=>{var d;let a=(d=globalThis.CastableVideoElement)==null?void 0:d.castElement,r=this.media&&le(this.media,a);(t==null?void 0:t.type)==="castchange"&&(t==null?void 0:t.detail)==="CONNECTING"&&(r="connecting"),this.propagateMediaState(n.MEDIA_IS_CASTING,r)},"timeupdate,loadedmetadata":()=>{this.propagateMediaState(n.MEDIA_CURRENT_TIME,Ii(this))},"durationchange,loadedmetadata,emptied":()=>{this.propagateMediaState(n.MEDIA_DURATION,_i(this))},"emptied,durationchange,loadedmetadata,streamtypechange":()=>{this.propagateMediaState(n.MEDIA_STREAM_TYPE)},"emptied,durationchange,loadedmetadata,streamtypechange,targetlivewindowchange":()=>{this.propagateMediaState(n.MEDIA_TARGET_LIVE_WINDOW)},"loadedmetadata,emptied,progress":()=>{var t;this.propagateMediaState(n.MEDIA_SEEKABLE,(t=vi(this))==null?void 0:t.join(":"))},"progress,emptied":()=>{var t;this.propagateMediaState(n.MEDIA_BUFFERED,ca((t=this.media)==null?void 0:t.buffered))},"ratechange,loadstart":()=>{this.propagateMediaState(n.MEDIA_PLAYBACK_RATE,Mi(this))},"waiting,playing,emptied":()=>{var a;let t=((a=this.media)==null?void 0:a.readyState)<3;this.propagateMediaState(n.MEDIA_LOADING,t)},"playing,timeupdate,progress,waiting,emptied":()=>{this.propagateMediaState(n.MEDIA_TIME_IS_LIVE)}},this._airplayUnavailable!==w.UNSUPPORTED){let t=a=>{(a==null?void 0:a.availability)==="available"?this._airplayUnavailable=void 0:(a==null?void 0:a.availability)==="not-available"&&(this._airplayUnavailable=w.UNAVAILABLE),this.propagateMediaState(n.MEDIA_AIRPLAY_UNAVAILABLE,this._airplayUnavailable)};this._mediaStatePropagators.webkitplaybacktargetavailabilitychanged=t}if(this._castUnavailable!==w.UNSUPPORTED){let t=()=>{var r;let a=(r=globalThis.CastableVideoElement)==null?void 0:r.castState;a!=null&&a.includes("CONNECT")?this._castUnavailable=void 0:this._castUnavailable=w.UNAVAILABLE,this.propagateMediaState(n.MEDIA_CAST_UNAVAILABLE,this._castUnavailable)};this._mediaStatePropagators.castchange=t}this._textTrackMediaStatePropagators={"addtrack,removetrack,loadstart":()=>{this.propagateMediaState(n.MEDIA_CAPTIONS_LIST,P(je(this))||void 0),this.propagateMediaState(n.MEDIA_SUBTITLES_LIST,P(Ae(this))||void 0),this.propagateMediaState(n.MEDIA_CAPTIONS_SHOWING,P(Pt(this))||void 0),this.propagateMediaState(n.MEDIA_SUBTITLES_SHOWING,P(Ei(this))||void 0)},change:()=>{this.propagateMediaState(n.MEDIA_CAPTIONS_SHOWING,P(Pt(this))||void 0),this.propagateMediaState(n.MEDIA_SUBTITLES_SHOWING,P(Ei(this))||void 0)}},this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat("nohotkeys","hotkeys","default-stream-type")}get fullscreenElement(){var e;return(e=c(this,ie))!=null?e:this}set fullscreenElement(e){this.hasAttribute("fullscreen-element")&&this.removeAttribute("fullscreen-element"),p(this,ie,e)}attributeChangedCallback(e,t,a){var r;if(e==="nohotkeys")a!==t&&a===""?(this.hasAttribute("hotkeys")&&console.warn("Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==t&&a===null&&this.enableHotkeys();else if(e==="hotkeys")c(this,H).value=a;else if(e==="default-stream-type")this.propagateMediaState(n.MEDIA_STREAM_TYPE);else if(e==="fullscreen-element"){let d=a?(r=this.getRootNode())==null?void 0:r.getElementById(a):void 0;p(this,ie,d)}super.attributeChangedCallback(e,t,a)}mediaSetCallback(e){super.mediaSetCallback(e),e.hasAttribute("tabindex")||e.setAttribute("tabindex",-1),Object.keys(this._mediaStatePropagators).forEach(t=>{let a=t.split(","),r=this._mediaStatePropagators[t];a.forEach(d=>{(d==v.event?this.getRootNode():e).addEventListener(d,r)}),r()}),Object.entries(this._textTrackMediaStatePropagators).forEach(([t,a])=>{t.split(",").forEach(d=>{e.textTracks&&e.textTracks.addEventListener(d,a)}),a()});try{let t=o.localStorage.getItem("media-chrome-pref-volume");t!==null&&(e.volume=t)}catch(t){console.debug("Error getting volume pref",t)}}mediaUnsetCallback(e){super.mediaUnsetCallback(e),Object.keys(this._mediaStatePropagators).forEach(t=>{let a=t.split(","),r=this._mediaStatePropagators[t];a.forEach(d=>{(d==v.event?this.getRootNode():e).removeEventListener(d,r)})}),Object.entries(this._textTrackMediaStatePropagators).forEach(([t,a])=>{t.split(",").forEach(d=>{e.textTracks&&e.textTracks.removeEventListener(d,a)}),a()}),this.propagateMediaState(n.MEDIA_PAUSED,!0)}propagateMediaState(e,t){arguments.length===1&&(t=Ee[e](this)),Z(this.mediaStateReceivers,e,t);let a=new o.CustomEvent(Rt[e],{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(a)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let a=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),d=ta(e,a,r);Object.keys(h).forEach(l=>{e.addEventListener(h[l],this[`_handle${Oe(l,!0)}`])}),t.set(e,d)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(!t.has(e))return;t.get(e)(),t.delete(e),Object.keys(h).forEach(r=>{e.removeEventListener(h[r],this[`_handle${Oe(r,!0)}`])})}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;t.indexOf(e)>-1||(t.push(e),Z([e],n.MEDIA_VOLUME_UNAVAILABLE,this._volumeUnavailable),Z([e],n.MEDIA_AIRPLAY_UNAVAILABLE,this._airplayUnavailable),Z([e],n.MEDIA_FULLSCREEN_UNAVAILABLE,this._fullscreenUnavailable),Z([e],n.MEDIA_CAST_UNAVAILABLE,this._castUnavailable),Z([e],n.MEDIA_PIP_UNAVAILABLE,this._pipUnavailable),this.media&&Object.keys(n).forEach(r=>{r.includes("UNAVAILABLE")||Z([e],n[r],Ee[n[r]]?Ee[n[r]](this):Ee.default(this,n[r]))}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,a=t.indexOf(e);a<0||t.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",y(this,ge,xt))}disableHotkeys(){this.removeEventListener("keydown",y(this,ge,xt)),this.removeEventListener("keyup",y(this,j,pe))}get hotkeys(){return c(this,H)}keyboardShortcutHandler(e){var A,g,M,D;if(((D=(M=(A=e.target.getAttribute("keysused"))==null?void 0:A.split(" "))!=null?M:(g=e.target)==null?void 0:g.keysUsed)!=null?D:[]).map(k=>k==="Space"?" ":k).filter(Boolean).includes(e.key))return;let a,r,d,l,u,E=js;if(!c(this,H).contains(`no${e.key.toLowerCase()}`)&&!(e.key===" "&&c(this,H).contains("nospace")))switch(e.key){case" ":case"k":a=this.getAttribute(n.MEDIA_PAUSED)!=null?h.MEDIA_PLAY_REQUEST:h.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new o.CustomEvent(a,{composed:!0,bubbles:!0}));break;case"m":a=this.getAttribute(n.MEDIA_VOLUME_LEVEL)==="off"?h.MEDIA_UNMUTE_REQUEST:h.MEDIA_MUTE_REQUEST,this.dispatchEvent(new o.CustomEvent(a,{composed:!0,bubbles:!0}));break;case"f":a=this.getAttribute(n.MEDIA_IS_FULLSCREEN)!=null?h.MEDIA_EXIT_FULLSCREEN_REQUEST:h.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new o.CustomEvent(a,{composed:!0,bubbles:!0}));break;case"c":he(this);break;case"ArrowLeft":r=this.getAttribute(n.MEDIA_CURRENT_TIME),d=r&&!Number.isNaN(+r)?+r:hi,l=Math.max(d-E,0),u=new o.CustomEvent(h.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(u);break;case"ArrowRight":r=this.getAttribute(n.MEDIA_CURRENT_TIME),d=r&&!Number.isNaN(+r)?+r:hi,l=Math.max(d+E,0),u=new o.CustomEvent(h.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(u);break;default:break}}};H=new WeakMap,ie=new WeakMap,j=new WeakSet,pe=function(e){let{key:t}=e;if(!mi.includes(t)){this.removeEventListener("keyup",y(this,j,pe));return}this.keyboardShortcutHandler(e)},ge=new WeakSet,xt=function(e){let{metaKey:t,altKey:a,key:r}=e;if(t||a||!mi.includes(r)){this.removeEventListener("keyup",y(this,j,pe));return}[" ","ArrowLeft","ArrowRight"].includes(r)&&!(c(this,H).contains(`no${r.toLowerCase()}`)||r===" "&&c(this,H).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",y(this,j,pe),{once:!0})};var Ee={default(s,i){return s.getAttribute(i)},[n.MEDIA_CAPTIONS_LIST](s){return P(je(s))||void 0},[n.MEDIA_SUBTITLES_LIST](s){return P(Ae(s))||void 0},[n.MEDIA_SUBTITLES_LIST](s){return P(Ae(s))||void 0},[n.MEDIA_CAPTIONS_SHOWING](s){return P(Pt(s))||void 0},[n.MEDIA_PAUSED](s){return bi(s)},[n.MEDIA_MUTED](s){return Ai(s)},[n.MEDIA_VOLUME](s){return fi(s)},[n.MEDIA_VOLUME_LEVEL](s){return gi(s)},[n.MEDIA_CURRENT_TIME](s){return Ii(s)},[n.MEDIA_DURATION](s){return _i(s)},[n.MEDIA_SEEKABLE](s){var i;return(i=vi(s))==null?void 0:i.join(":")},[n.MEDIA_PLAYBACK_RATE](s){return Mi(s)},[n.MEDIA_STREAM_TYPE](s){return Nt(s)},[n.MEDIA_TARGET_LIVE_WINDOW](s){return zs(s)},[n.MEDIA_TIME_IS_LIVE](s){let i=s.media;if(!i)return!1;if(typeof i.liveEdgeStart=="number")return Number.isNaN(i.liveEdgeStart)?!1:i.currentTime>=i.liveEdgeStart;if(!(Nt(s)==="live"))return!1;let t=i.seekable;if(!t)return!0;if(!t.length)return!1;let a=s.hasAttribute("liveedgeoffset")?Number(s.getAttribute("liveedgeoffset")):10,r=t.end(t.length-1)-a;return i.currentTime>=r}},bi=s=>s.media?s.media.paused:!0,Ai=s=>!!(s.media&&s.media.muted),fi=s=>{let i=s.media;return i?i.volume:1},gi=s=>{let i="high";if(!s.media)return i;let{muted:e,volume:t}=s.media;return t===0||e?i="off":t<.5?i="low":t<.75&&(i="medium"),i},Ii=s=>{let i=s.media;return i?i.currentTime:0},_i=s=>{let i=s==null?void 0:s.media;return Number.isFinite(i==null?void 0:i.duration)?i.duration:NaN},vi=s=>{var a;let i=s==null?void 0:s.media;if(!((a=i==null?void 0:i.seekable)!=null&&a.length))return;let e=i.seekable.start(0),t=i.seekable.end(i.seekable.length-1);if(!(!e&&!t))return[Number(e.toFixed(3)),Number(t.toFixed(3))]},Mi=s=>{let i=s.media;return i?i.playbackRate:1},Ae=s=>te(s.media,{kind:G.SUBTITLES}),je=s=>te(s.media,{kind:G.CAPTIONS}),Ei=s=>te(s.media,{kind:G.SUBTITLES,mode:F.SHOWING}),Pt=s=>te(s.media,{kind:G.CAPTIONS,mode:F.SHOWING}),Nt=s=>{let{media:i}=s;if(!i)return;let{streamType:e}=i;if(Zs.includes(e)){if(e===U.UNKNOWN){let a=s.getAttribute("default-stream-type");return[U.LIVE,U.ON_DEMAND].includes(a)?a:void 0}return e}let t=i.duration;if(t===1/0)return U.LIVE;if(Number.isFinite(t))return U.ON_DEMAND;{let a=s.getAttribute("default-stream-type");if([U.LIVE,U.ON_DEMAND].includes(a))return a}},zs=s=>{let{media:i}=s;if(!i)return Number.NaN;let{targetLiveWindow:e}=i;return(e==null||Number.isNaN(e))&&Nt(s)===U.LIVE?0:e},Xs=Object.values(n),Ti=s=>{var t,a,r,d;let{observedAttributes:i}=s.constructor;!i&&((t=s.nodeName)==null?void 0:t.includes("-"))&&(o.customElements.upgrade(s),{observedAttributes:i}=s.constructor);let e=(d=(r=(a=s==null?void 0:s.getAttribute)==null?void 0:a.call(s,f.MEDIA_CHROME_ATTRIBUTES))==null?void 0:r.split)==null?void 0:d.call(r,/\s+/);return Array.isArray(i||e)?(i||e).filter(l=>Xs.includes(l)):[]},Ot=s=>!!Ti(s).length,Js=async(s,i,e)=>(s.isConnected||await Si(0),e==null?s.removeAttribute(i):typeof e=="boolean"?e?s.setAttribute(i,""):s.removeAttribute(i):Number.isNaN(e)?s.removeAttribute(i):s.setAttribute(i,e)),ea=s=>{var i;return!!((i=s.closest)!=null&&i.call(s,'*[slot="media"]'))},be=(s,i)=>{if(ea(s))return;let e=(a,r)=>{var E,A;Ot(a)&&r(a);let{children:d=[]}=a!=null?a:{},l=(A=(E=a==null?void 0:a.shadowRoot)==null?void 0:E.children)!=null?A:[];[...d,...l].forEach(g=>be(g,r))},t=s==null?void 0:s.nodeName.toLowerCase();if(t.includes("-")&&!Ot(s)){o.customElements.whenDefined(t).then(()=>{e(s,i)});return}e(s,i)},Z=(s,i,e)=>{s.forEach(t=>{!Ti(t).includes(i)||Js(t,i,e)})},ta=(s,i,e)=>{be(s,i);let t=u=>{var A;let E=(A=u==null?void 0:u.composedPath()[0])!=null?A:u.target;i(E)},a=u=>{var A;let E=(A=u==null?void 0:u.composedPath()[0])!=null?A:u.target;e(E)};s.addEventListener(h.REGISTER_MEDIA_STATE_RECEIVER,t),s.addEventListener(h.UNREGISTER_MEDIA_STATE_RECEIVER,a);let r=u=>{u.forEach(E=>{let{addedNodes:A=[],removedNodes:g=[],type:M,target:D,attributeName:k}=E;M==="childList"?(Array.prototype.forEach.call(A,X=>be(X,i)),Array.prototype.forEach.call(g,X=>be(X,e))):M==="attributes"&&k===f.MEDIA_CHROME_ATTRIBUTES&&(Ot(D)?i(D):e(D))})},d=new MutationObserver(r);return d.observe(s,{childList:!0,attributes:!0,subtree:!0}),()=>{be(s,e),d.disconnect(),s.removeEventListener(h.REGISTER_MEDIA_STATE_RECEIVER,t),s.removeEventListener(h.UNREGISTER_MEDIA_STATE_RECEIVER,a)}},Ze,Bt=()=>{var s,i;return Ze||(Ze=(i=(s=m)==null?void 0:s.createElement)==null?void 0:i.call(s,"video"),Ze)},ia=async(s=Bt())=>{if(!s)return!1;let i=s.volume;return s.volume=i/2+.1,await Si(0),s.volume!==i},Si=s=>new Promise(i=>setTimeout(i,s)),sa=(s=Bt())=>typeof(s==null?void 0:s.requestPictureInPicture)=="function",aa=sa(),fe,ra=ia().then(s=>(fe=s,fe)),na=!!o.WebKitPlaybackTargetAvailabilityEvent,oa=!!o.chrome,da=(s=Bt())=>{let i=m[v.enabled];return!i&&s&&(i="webkitSupportsFullscreen"in s),i},pi=da(),la=Object.freeze({length:0,start(s){let i=s>>>0;if(i>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${i}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(s){let i=s>>>0;if(i>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${i}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});function ca(s=la){return Array.from(s).map((i,e)=>[Number(s.start(e).toFixed(3)),Number(s.end(e).toFixed(3))].join(":")).join(" ")}o.customElements.get("media-controller")||o.customElements.define("media-controller",ze);var Xe=ze;var Di=m.createElement("template"),Li=`
  height: var(--thumb-height);
  width: var(--media-range-thumb-width, 10px);
  border: var(--media-range-thumb-border, none);
  border-radius: var(--media-range-thumb-border-radius, 10px);
  background: var(--media-range-thumb-background, #fff);
  box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
  cursor: pointer;
  transition: var(--media-range-thumb-transition, none);
  transform: var(--media-range-thumb-transform, none);
  opacity: var(--media-range-thumb-opacity, 1);
`,$t=`
  min-width: 40px;
  height: var(--track-height);
  border: var(--media-range-track-border, none);
  outline: var(--media-range-track-outline);
  outline-offset: var(--media-range-track-outline-offset);
  border-radius: var(--media-range-track-border-radius, 0);
  background: var(--media-range-track-progress-internal, var(--media-range-track-background, #eee));
  box-shadow: var(--media-range-track-box-shadow, none);
  transition: var(--media-range-track-transition, none);
  transform: translate(var(--media-range-track-translate-x, 0), var(--media-range-track-translate-y, 0));
  cursor: pointer;
`;Di.innerHTML=`
  <style>
    :host {
      --thumb-height: var(--media-range-thumb-height, 10px);
      --track-height: var(--media-range-track-height, 4px);
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgba(27, 127, 204, 0.9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      vertical-align: middle;
      box-sizing: border-box;
      display: inline-block;
      position: relative;
      background: var(--media-control-background, rgba(20,20,30, 0.7));
      transition: background 0.15s linear;
      width: 100px;
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      pointer-events: auto;
      
      font-size: 0;
      box-shadow: var(--_focus-visible-box-shadow, none);
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgba(50,50,60, 0.7));
    }

    #container {
      position: relative;
      height: 100%;
    }

    input[type=range] {
      
      -webkit-appearance: none; 
      background: transparent; 

      
      min-height: 100%;
      width: var(--media-range-track-width, 100%); 

      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      ${Li}
      
      margin-top: calc(calc(0px - var(--thumb-height) + var(--track-height)) / 2);
    }

    
    input[type=range]::-moz-range-thumb {
      ${Li}
      translate: var(--media-range-track-translate-x, 0) var(--media-range-track-translate-y, 0);
    }

    input[type=range]::-webkit-slider-runnable-track { ${$t} }
    input[type=range]::-moz-range-track { ${$t} }
    input[type=range]::-ms-track {
      
      width: 100%;
      cursor: pointer;
      
      background: transparent;
      border-color: transparent;
      color: transparent;

      ${$t}
    }

    #background,
    #pointer {
      min-width: 40px;
      width: var(--media-range-track-width, 100%);
      height: var(--track-height);
      border-radius: var(--media-range-track-border-radius, 0);
      position: absolute;
      top: 50%;
      transform: translate(var(--media-range-track-translate-x, 0px), calc(var(--media-range-track-translate-y, 0px) - 50%));
      background: var(--media-range-track-background, #333);
    }

    #pointer {
      min-width: auto;
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    :host(:hover) #pointer {
      transition: visibility .5s, opacity .5s;
      visibility: visible;
      opacity: 1;
    }

    #hoverzone {
      
      z-index: 1;
      display: var(--media-time-range-hover-display, none);
      position: absolute;
      width: 100%;
      bottom: var(--media-time-range-hover-bottom, -5px);
      height: var(--media-time-range-hover-height, max(calc(100% + 5px), 20px));
    }

    #range {
      z-index: 2;
      position: relative;
      height: var(--media-range-track-height, 4px);
    }

    input[type=range]:disabled::-webkit-slider-thumb {
      background-color: #777;
    }

    input[type=range]:disabled::-webkit-slider-runnable-track {
      background-color: #777;
    }
  </style>
  <div id="container">
    <div id="background"></div>
    <div id="pointer"></div>
    <div id="hoverzone"></div>
    <input id="range" type="range" min="0" max="1000" step="any" value="0">
  </div>
`;var Ie,N,_e,ve,Je=class extends o.HTMLElement{constructor(){super();b(this,Ie,void 0);b(this,N,void 0);b(this,_e,()=>{if(this.range.matches(":focus-visible")){let{style:e}=S(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}});b(this,ve,()=>{let{style:e}=S(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")});this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Di.content.cloneNode(!0));let{style:e}=S(this.shadowRoot,":host");e.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-block))`),this.container=this.shadowRoot.querySelector("#container"),this.range=this.shadowRoot.querySelector("#range"),this.range.addEventListener("input",this.updateBar.bind(this)),p(this,Ie,parseInt(getComputedStyle(this).getPropertyValue("--media-range-thumb-width")||"10",10))}static get observedAttributes(){return["disabled","aria-disabled",f.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,a){var r,d,l,u,E;e===f.MEDIA_CONTROLLER?(t&&((d=(r=c(this,N))==null?void 0:r.unassociateElement)==null||d.call(r,this),p(this,N,null)),a&&(p(this,N,(l=this.getRootNode())==null?void 0:l.getElementById(a)),(E=(u=c(this,N))==null?void 0:u.associateElement)==null||E.call(u,this))):(e==="disabled"||e==="aria-disabled"&&t!==a)&&(a==null?this.range.removeAttribute(e):this.range.setAttribute(e,a))}connectedCallback(){var t,a,r;let e=this.getAttribute(f.MEDIA_CONTROLLER);e&&(p(this,N,(t=this.getRootNode())==null?void 0:t.getElementById(e)),(r=(a=c(this,N))==null?void 0:a.associateElement)==null||r.call(a,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",c(this,_e)),this.shadowRoot.addEventListener("focusout",c(this,ve))}disconnectedCallback(){var e,t;(t=(e=c(this,N))==null?void 0:e.unassociateElement)==null||t.call(e,this),p(this,N,null),this.shadowRoot.removeEventListener("focusin",c(this,_e)),this.shadowRoot.removeEventListener("focusout",c(this,ve))}updatePointerBar(e){let t=this.range.getBoundingClientRect(),a=(e.clientX-t.left)/t.width;a=Math.max(0,Math.min(1,a));let{style:r}=S(this.shadowRoot,"#pointer");r.setProperty("width",`${a*t.width}px`)}updateBar(){let e=this.getBarColors(),t="linear-gradient(to right, ",a=0;e.forEach(d=>{d[1]<a||(t=t+`${d[0]} ${a}%, ${d[0]} ${d[1]}%,`,a=d[1])}),t=t.slice(0,t.length-1)+")";let{style:r}=S(this.shadowRoot,"#range");r.setProperty("--media-range-track-progress-internal",t)}getBarColors(){let e=this.range,t=e.value-e.min,a=e.max-e.min,r=t/a*100,d=0;return e.value>e.min&&e.value<e.max&&(d=c(this,Ie)*(.5-r/100)/e.offsetWidth*100),[["var(--media-range-bar-color, #fff)",r+d],["var(--media-range-track-color, transparent)",100]]}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}};Ie=new WeakMap,N=new WeakMap,_e=new WeakMap,ve=new WeakMap;o.customElements.get("media-chrome-range")||o.customElements.define("media-chrome-range",Je);var se=Je;var Ci=m.createElement("template");Ci.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-icon-color, #eee);
      --media-loading-icon-width: 44px;
    }

    media-time-range,
    ::slotted(media-time-range),
    ::slotted(media-progress-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }
  </style>

  <slot></slot>
`;var O,et=class extends o.HTMLElement{constructor(){super();b(this,O,void 0);this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ci.content.cloneNode(!0))}static get observedAttributes(){return[f.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,a){var r,d,l,u,E;e===f.MEDIA_CONTROLLER&&(t&&((d=(r=c(this,O))==null?void 0:r.unassociateElement)==null||d.call(r,this),p(this,O,null)),a&&(p(this,O,(l=this.getRootNode())==null?void 0:l.getElementById(a)),(E=(u=c(this,O))==null?void 0:u.associateElement)==null||E.call(u,this)))}connectedCallback(){var t,a,r;let e=this.getAttribute(f.MEDIA_CONTROLLER);e&&(p(this,O,(t=this.getRootNode())==null?void 0:t.getElementById(e)),(r=(a=c(this,O))==null?void 0:a.associateElement)==null||r.call(a,this))}disconnectedCallback(){var e,t;(t=(e=c(this,O))==null?void 0:e.unassociateElement)==null||t.call(e,this),p(this,O,null)}};O=new WeakMap;o.customElements.get("media-control-bar")||o.customElements.define("media-control-bar",et);var yi=et;var Ri=m.createElement("template");Ri.innerHTML=`
  <style>
    :host {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      background: var(--media-control-background, rgba(20,20,30, 0.7));
  
      padding: var(--media-control-padding, 10px);

      font-size: 14px;
      line-height: var(--media-text-content-height, var(--media-control-height, 24px));
      font-family: Arial, sans-serif;
      text-align: center;
      color: #ffffff;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgba(27, 127, 204, 0.9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <span id="container">
  <slot></slot>
  </span>
`;var B,tt=class extends o.HTMLElement{constructor(){super();b(this,B,void 0);this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ri.content.cloneNode(!0)),this.container=this.shadowRoot.querySelector("#container");let{style:e}=S(this.shadowRoot,":host");e.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`)}static get observedAttributes(){return[f.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,a){var r,d,l,u,E;e===f.MEDIA_CONTROLLER&&(t&&((d=(r=c(this,B))==null?void 0:r.unassociateElement)==null||d.call(r,this),p(this,B,null)),a&&(p(this,B,(l=this.getRootNode())==null?void 0:l.getElementById(a)),(E=(u=c(this,B))==null?void 0:u.associateElement)==null||E.call(u,this)))}connectedCallback(){var t,a,r;let e=this.getAttribute(f.MEDIA_CONTROLLER);e&&(p(this,B,(t=this.getRootNode())==null?void 0:t.getElementById(e)),(r=(a=c(this,B))==null?void 0:a.associateElement)==null||r.call(a,this))}disconnectedCallback(){var e,t;(t=(e=c(this,B))==null?void 0:e.unassociateElement)==null||t.call(e,this),p(this,B,null)}};B=new WeakMap;o.customElements.get("media-text-display")||o.customElements.define("media-text-display",tt);var Q=tt;var it=class extends Q{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_CURRENT_TIME]}constructor(){super(),this.container.innerHTML=R(0)}attributeChangedCallback(i,e,t){i===n.MEDIA_CURRENT_TIME&&(this.container.innerHTML=R(t)),super.attributeChangedCallback(i,e,t)}};o.customElements.get("media-current-time-display")||o.customElements.define("media-current-time-display",it);var ki=it;var st=class extends Q{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_DURATION]}constructor(){super(),this.container.innerHTML=R(0)}attributeChangedCallback(i,e,t){i===n.MEDIA_DURATION&&(this.container.innerHTML=R(t)),super.attributeChangedCallback(i,e,t)}};o.customElements.get("media-duration-display")||o.customElements.define("media-duration-display",st);var wi=st;var ua="&nbsp;/&nbsp;",Ui=(s,{timesSep:i=ua}={})=>{var l,u,E;let e=s.getAttribute("remaining")!=null,t=s.getAttribute("show-duration")!=null,a=(l=s.mediaCurrentTime)!=null?l:0,r=(E=(u=s.mediaDuration)!=null?u:s.mediaSeekableEnd)!=null?E:0,d=e?R(0-(r-a)):R(a);return t?`${d}${i}${R(r)}`:d},ma="video not loaded, unknown time.",ha=s=>{let i=s.mediaCurrentTime,e=s.mediaDuration||s.mediaSeekableEnd;if(i==null||e==null){s.setAttribute("aria-valuetext",ma);return}let t=s.hasAttribute("remaining"),a=s.hasAttribute("show-duration"),r=t?W(0-(e-i)):W(i);if(!a){s.setAttribute("aria-valuetext",r);return}let d=W(e),l=`${r} of ${d}`;s.setAttribute("aria-valuetext",l)},at=class extends Q{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_CURRENT_TIME,n.MEDIA_DURATION,n.MEDIA_SEEKABLE,"remaining","show-duration","disabled"]}constructor(){super(),this.container.innerHTML=Ui(this)}connectedCallback(){this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",T.PLAYBACK_TIME()),super.connectedCallback()}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(i,e,t){if([n.MEDIA_CURRENT_TIME,n.MEDIA_DURATION,n.MEDIA_SEEKABLE,"remaining","show-duration"].includes(i)){let a=Ui(this);ha(this),this.container.innerHTML=a}else i==="disabled"&&t!==e&&(t==null?this.enable():this.disable());super.attributeChangedCallback(i,e,t)}enable(){this.setAttribute("tabindex",0)}disable(){this.removeAttribute("tabindex")}get mediaDuration(){let i=this.getAttribute(n.MEDIA_DURATION);return i!=null?+i:void 0}get mediaCurrentTime(){let i=this.getAttribute(n.MEDIA_CURRENT_TIME);return i!=null?+i:void 0}get mediaSeekable(){let i=this.getAttribute(n.MEDIA_SEEKABLE);if(!!i)return i.split(":").map(e=>+e)}get mediaSeekableEnd(){var e;let[,i]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;let[i]=(e=this.mediaSeekable)!=null?e:[];return i}};o.customElements.get("media-time-display")||o.customElements.define("media-time-display",at);var xi=at;var Ea=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,pa=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,Ni=m.createElement("template");Ni.innerHTML=`
  <style>
  :host([aria-checked="true"]) slot:not([name=on]) > *,
  :host([aria-checked="true"]) ::slotted(:not([slot=on])) {
    display: none !important;
  }

  
  :host(:not([aria-checked="true"])) slot:not([name=off]) > *, 
  :host(:not([aria-checked="true"])) ::slotted(:not([slot=off])) {
    display: none !important;
  }
  </style>

  <slot name="on">${Ea}</slot>
  <slot name="off">${pa}</slot>
`;var Pi=s=>{s.setAttribute("aria-checked",Ut(s))},rt=class extends I{static get observedAttributes(){return[...super.observedAttributes,"no-subtitles-fallback","default-showing",n.MEDIA_CAPTIONS_LIST,n.MEDIA_CAPTIONS_SHOWING,n.MEDIA_SUBTITLES_LIST,n.MEDIA_SUBTITLES_SHOWING]}constructor(i={}){super({slotTemplate:Ni,...i}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",T.CLOSED_CAPTIONS()),Pi(this)}attributeChangedCallback(i,e,t){if([n.MEDIA_CAPTIONS_SHOWING,n.MEDIA_SUBTITLES_SHOWING].includes(i)&&Pi(this),this.hasAttribute("default-showing")&&this.getAttribute("aria-checked")!=="true"){let a=!this.hasAttribute("no-subtitles-fallback");if((a?[n.MEDIA_CAPTIONS_LIST,n.MEDIA_SUBTITLES_LIST]:[n.MEDIA_CAPTIONS_LIST]).includes(i)){let d=!!this.getAttribute(n.MEDIA_CAPTIONS_LIST)||!!(a&&this.getAttribute(n.MEDIA_SUBTITLES_LIST));this._captionsReady!==d&&(this._captionsReady=d,this._captionsReady&&he(this))}}super.attributeChangedCallback(i,e,t)}handleClick(){he(this)}};o.customElements.get("media-captions-button")||o.customElements.define("media-captions-button",rt);var Oi=rt;var Vt="30",ba=`<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">${Vt}</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg>`,Vi=m.createElement("template");Vi.innerHTML=`  
  <slot name="forward">${ba}</slot>
`;var Aa=0,Bi=s=>{let i=Math.abs(+s.getAttribute("seek-offset")),e=_.SEEK_FORWARD_N_SECS({seekOffset:i});s.setAttribute("aria-label",e)},$i=s=>{let i=Ve(s,"forward"),e=s.getAttribute("seek-offset");$e(i,e)},nt=class extends I{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_CURRENT_TIME,"seek-offset"]}constructor(i={}){super({slotTemplate:Vi,...i})}connectedCallback(){this.hasAttribute("seek-offset")||this.setAttribute("seek-offset",Vt),Bi(this),$i(this),super.connectedCallback()}attributeChangedCallback(i,e,t){i==="seek-offset"&&(t==null&&this.setAttribute("seek-offset",Vt),$i(this),Bi(this)),super.attributeChangedCallback(i,e,t)}handleClick(){let i=this.getAttribute(n.MEDIA_CURRENT_TIME),e=+this.getAttribute("seek-offset"),a=(i&&!Number.isNaN(+i)?+i:Aa)+e,r=new o.CustomEvent(h.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}};o.customElements.get("media-seek-forward-button")||o.customElements.define("media-seek-forward-button",nt);var Hi=nt;var fa=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,ga=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,Wi=m.createElement("template");Wi.innerHTML=`
  <style>
  :host([${n.MEDIA_IS_FULLSCREEN}]) slot:not([name=exit]) > *,
  :host([${n.MEDIA_IS_FULLSCREEN}]) ::slotted(:not([slot=exit])) {
    display: none !important;
  }

  
  :host(:not([${n.MEDIA_IS_FULLSCREEN}])) slot:not([name=enter]) > *,
  :host(:not([${n.MEDIA_IS_FULLSCREEN}])) ::slotted(:not([slot=enter])) {
    display: none !important;
  }
  </style>

  <slot name="enter">${fa}</slot>
  <slot name="exit">${ga}</slot>
`;var Fi=s=>{let e=s.getAttribute(n.MEDIA_IS_FULLSCREEN)!=null?_.EXIT_FULLSCREEN():_.ENTER_FULLSCREEN();s.setAttribute("aria-label",e)},ot=class extends I{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_IS_FULLSCREEN,n.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(i={}){super({slotTemplate:Wi,...i})}connectedCallback(){Fi(this),super.connectedCallback()}attributeChangedCallback(i,e,t){i===n.MEDIA_IS_FULLSCREEN&&Fi(this),super.attributeChangedCallback(i,e,t)}handleClick(){let i=this.getAttribute(n.MEDIA_IS_FULLSCREEN)!=null?h.MEDIA_EXIT_FULLSCREEN_REQUEST:h.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new o.CustomEvent(i,{composed:!0,bubbles:!0}))}};o.customElements.get("media-fullscreen-button")||o.customElements.define("media-fullscreen-button",ot);var Qi=ot;var{MEDIA_TIME_IS_LIVE:Me,MEDIA_PAUSED:ae}=n,{MEDIA_SEEK_TO_LIVE_REQUEST:Ia,MEDIA_PLAY_REQUEST:_a}=h,va='<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>',Gi=m.createElement("template");Gi.innerHTML=`
  <style>

  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${Me}]:not([${ae}])) slot[name=indicator] > *,
  :host([${Me}]:not([${ae}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-indicator-color, rgb(255, 0, 0));
  }

  :host([${Me}]:not([${ae}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator">${va}</slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;var dt=class extends I{static get observedAttributes(){return[...super.observedAttributes,ae,Me]}constructor(i={}){super({slotTemplate:Gi,...i}),this.setAttribute("aria-label","Seek to Live")}attributeChangedCallback(i,e,t){super.attributeChangedCallback(i,e,t)}handleClick(){!this.hasAttribute(ae)&&this.hasAttribute(Me)||(this.dispatchEvent(new o.CustomEvent(Ia,{composed:!0,bubbles:!0})),this.hasAttribute(ae)&&this.dispatchEvent(new o.CustomEvent(_a,{composed:!0,bubbles:!0})))}};o.customElements.get("media-live-button")||o.customElements.define("media-live-button",dt);var Ki=dt;var Ma=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,qi=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,Ta=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,Zi=m.createElement("template");Zi.innerHTML=`
  <style>
  
  :host(:not([${n.MEDIA_VOLUME_LEVEL}])) slot:not([name=high]) > *, 
  :host(:not([${n.MEDIA_VOLUME_LEVEL}])) ::slotted(:not([slot=high])),
  :host([${n.MEDIA_VOLUME_LEVEL}=high]) slot:not([name=high]) > *, 
  :host([${n.MEDIA_VOLUME_LEVEL}=high]) ::slotted(:not([slot=high])) {
    display: none !important;
  }

  :host([${n.MEDIA_VOLUME_LEVEL}=off]) slot:not([name=off]) > *, 
  :host([${n.MEDIA_VOLUME_LEVEL}=off]) ::slotted(:not([slot=off])) {
    display: none !important;
  }

  :host([${n.MEDIA_VOLUME_LEVEL}=low]) slot:not([name=low]) > *, 
  :host([${n.MEDIA_VOLUME_LEVEL}=low]) ::slotted(:not([slot=low])) {
    display: none !important;
  }

  :host([${n.MEDIA_VOLUME_LEVEL}=medium]) slot:not([name=medium]) > *, 
  :host([${n.MEDIA_VOLUME_LEVEL}=medium]) ::slotted(:not([slot=medium])) {
    display: none !important;
  }
  </style>

  <slot name="off">${Ma}</slot>
  <slot name="low">${qi}</slot>
  <slot name="medium">${qi}</slot>
  <slot name="high">${Ta}</slot>
`;var Yi=s=>{let e=s.getAttribute(n.MEDIA_VOLUME_LEVEL)==="off"?_.UNMUTE():_.MUTE();s.setAttribute("aria-label",e)},lt=class extends I{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_VOLUME_LEVEL]}constructor(i={}){super({slotTemplate:Zi,...i})}connectedCallback(){Yi(this),super.connectedCallback()}attributeChangedCallback(i,e,t){i===n.MEDIA_VOLUME_LEVEL&&Yi(this),super.attributeChangedCallback(i,e,t)}handleClick(){let i=this.getAttribute(n.MEDIA_VOLUME_LEVEL)==="off"?h.MEDIA_UNMUTE_REQUEST:h.MEDIA_MUTE_REQUEST;this.dispatchEvent(new o.CustomEvent(i,{composed:!0,bubbles:!0}))}};o.customElements.get("media-mute-button")||o.customElements.define("media-mute-button",lt);var ji=lt;var zi=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,Ji=m.createElement("template");Ji.innerHTML=`
  <style>
  :host([${n.MEDIA_IS_PIP}]) slot:not([name=exit]) > *, 
  :host([${n.MEDIA_IS_PIP}]) ::slotted(:not([slot=exit])) {
    display: none !important;
  }

  
  :host(:not([${n.MEDIA_IS_PIP}])) slot:not([name=enter]) > *, 
  :host(:not([${n.MEDIA_IS_PIP}])) ::slotted(:not([slot=enter])) {
    display: none !important;
  }
  </style>

  <slot name="enter">${zi}</slot>
  <slot name="exit">${zi}</slot>
`;var Xi=s=>{let e=s.getAttribute(n.MEDIA_IS_PIP)!=null?_.EXIT_PIP():_.ENTER_PIP();s.setAttribute("aria-label",e)},ct=class extends I{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_IS_PIP,n.MEDIA_PIP_UNAVAILABLE]}constructor(i={}){super({slotTemplate:Ji,...i})}connectedCallback(){Xi(this),super.connectedCallback()}attributeChangedCallback(i,e,t){i===n.MEDIA_IS_PIP&&Xi(this),super.attributeChangedCallback(i,e,t)}handleClick(){let i=this.getAttribute(n.MEDIA_IS_PIP)!=null?h.MEDIA_EXIT_PIP_REQUEST:h.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new o.CustomEvent(i,{composed:!0,bubbles:!0}))}};o.customElements.get("media-pip-button")||o.customElements.define("media-pip-button",ct);var es=ct;var Sa=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,La=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,is=m.createElement("template");is.innerHTML=`
  <style>
  :host([${n.MEDIA_PAUSED}]) slot[name=pause] > *, 
  :host([${n.MEDIA_PAUSED}]) ::slotted([slot=pause]) {
    display: none !important;
  }

  :host(:not([${n.MEDIA_PAUSED}])) slot[name=play] > *, 
  :host(:not([${n.MEDIA_PAUSED}])) ::slotted([slot=play]) {
    display: none !important;
  }
  </style>

  <slot name="play">${Sa}</slot>
  <slot name="pause">${La}</slot>
`;var ts=s=>{let e=s.getAttribute(n.MEDIA_PAUSED)!=null?_.PLAY():_.PAUSE();s.setAttribute("aria-label",e)},ut=class extends I{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_PAUSED]}constructor(i={}){super({slotTemplate:is,...i})}connectedCallback(){ts(this),super.connectedCallback()}attributeChangedCallback(i,e,t){i===n.MEDIA_PAUSED&&ts(this),super.attributeChangedCallback(i,e,t)}handleClick(){let i=this.getAttribute(n.MEDIA_PAUSED)!=null?h.MEDIA_PLAY_REQUEST:h.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new o.CustomEvent(i,{composed:!0,bubbles:!0}))}};o.customElements.get("media-play-button")||o.customElements.define("media-play-button",ut);var ss=ut;var as=[1,1.25,1.5,1.75,2],mt=1,rs=m.createElement("template");rs.innerHTML=`
  <span id="container"></span>
`;var ht=class extends I{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_PLAYBACK_RATE,"rates"]}constructor(i={}){super({slotTemplate:rs,...i}),this._rates=as,this.container=this.shadowRoot.querySelector("#container"),this.container.innerHTML=`${mt}x`}attributeChangedCallback(i,e,t){if(i==="rates"){let a=(t!=null?t:"").trim().split(/\s*,?\s+/).map(r=>Number(r)).filter(r=>!Number.isNaN(r)).sort((r,d)=>r-d);this._rates=a.length?a:as;return}if(i===n.MEDIA_PLAYBACK_RATE){let a=t?+t:Number.NaN,r=Number.isNaN(a)?mt:a;this.container.innerHTML=`${r}x`,this.setAttribute("aria-label",T.PLAYBACK_RATE({playbackRate:r}));return}super.attributeChangedCallback(i,e,t)}handleClick(){var a,r;let i=+this.getAttribute(n.MEDIA_PLAYBACK_RATE)||mt,e=(r=(a=this._rates.find(d=>d>i))!=null?a:this._rates[0])!=null?r:mt,t=new o.CustomEvent(h.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}};o.customElements.get("media-playback-rate-button")||o.customElements.define("media-playback-rate-button",ht);var ns=ht;var os=m.createElement("template");os.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-background-position, var(--media-object-position, center));
      background-size: var(--media-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img aria-hidden="true" id="image"/>
`;var Da=s=>{s.style.removeProperty("background-image")},Ca=(s,i)=>{s.style["background-image"]=`url('${i}')`},Et=class extends o.HTMLElement{static get observedAttributes(){return["placeholder-src","src"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(os.content.cloneNode(!0)),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(i,e,t){i==="src"&&(t==null?this.image.removeAttribute("src"):this.image.setAttribute("src",t)),i==="placeholder-src"&&(t==null?Da(this.image):Ca(this.image,t))}};o.customElements.get("media-poster-image")||o.customElements.define("media-poster-image",Et);var ds=Et;var ya="video not loaded, unknown time.",Ht=s=>{let i=s.range,e=W(+i.value),t=W(+i.max),a=e&&t?`${e} of ${t}`:ya;i.setAttribute("aria-valuetext",a)},ls=m.createElement("template");ls.innerHTML=`
  <style>
    :host {
      --media-preview-background-color: rgba(20,20,30, .5);
      --media-preview-background: var(--media-control-background,
        var(--media-preview-background-color));
      --media-preview-border-radius: 3px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      color: #fff;
    }

    #preview-rail,
    #current-rail {
      
      width: 1%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
    }

    [part~="box"] {
      
      position: absolute;
      bottom: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="preview-box"] {
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host([${n.MEDIA_PREVIEW_IMAGE}]:hover) [part~="preview-box"],
    :host([${n.MEDIA_PREVIEW_TIME}]:hover) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--media-preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgba(0,0,0, .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${n.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
    :host([${n.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display) {
      color: unset;
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--media-preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 1px 10px 0);
      margin: var(--media-preview-time-margin, 0 0 10px);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgba(0,0,0, .75));
    }

    :host([${n.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${n.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      min-width: 100%;
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
    }

    :host([${n.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-time-display></media-preview-time-display>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;var re,Te,ne,Se,Le,De,Ft,Ce,z,oe,bt,ye,Re,ke,Wt,At,cs,pt=class extends se{constructor(){super();b(this,De);b(this,ke);b(this,At);b(this,re,void 0);b(this,Te,void 0);b(this,ne,void 0);b(this,Se,void 0);b(this,Le,void 0);b(this,Ce,e=>{if([...c(this,re)].some(A=>e.composedPath().includes(A)))return;this.updatePointerBar(e);let t=+this.getAttribute(n.MEDIA_DURATION);if(!t)return;let a=this.range.getBoundingClientRect(),r=(e.clientX-a.left)/a.width;r=Math.max(0,Math.min(1,r));let d=y(this,De,Ft).call(this,c(this,Te),r),{style:l}=S(this.shadowRoot,"#preview-rail");l.transform=`translateX(${d})`;let u=r*t,E=new o.CustomEvent(h.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:u});this.dispatchEvent(E)});b(this,z,!1);b(this,oe,e=>{(!e.composedPath().includes(this)||[...c(this,re)].some(t=>e.composedPath().includes(t)))&&(o.removeEventListener("pointermove",c(this,oe)),p(this,z,!1),c(this,ye).call(this))});b(this,bt,()=>{o.addEventListener("pointermove",c(this,Ce),!1)});b(this,ye,()=>{o.removeEventListener("pointermove",c(this,Ce));let e=new o.CustomEvent(h.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:null});this.dispatchEvent(e)});b(this,Re,()=>{let e=this.getAttribute(n.MEDIA_DURATION);!c(this,z)&&e&&(p(this,z,!0),c(this,bt).call(this),o.addEventListener("pointermove",c(this,oe),!1))});this.container.appendChild(ls.content.cloneNode(!0)),this.range.addEventListener("input",()=>{cancelAnimationFrame(this._refreshId);let a=this.range.value,r=new o.CustomEvent(h.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}),this._refreshBar=()=>{let t=(performance.now()-this._updateTimestamp)/1e3;this.range.value=this.mediaCurrentTime+t*this.mediaPlaybackRate,this.updateBar(),this.updateCurrentBox(),this._refreshId=requestAnimationFrame(this._refreshBar)},p(this,re,this.shadowRoot.querySelectorAll('[part~="box"]')),p(this,Te,this.shadowRoot.querySelector('[part~="preview-box"]')),p(this,ne,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);p(this,Se,parseInt(e.getPropertyValue("--media-box-padding-left"))),p(this,Le,parseInt(e.getPropertyValue("--media-box-padding-right"))),y(this,ke,Wt).call(this)}static get observedAttributes(){return[...super.observedAttributes,"thumbnails","disabled",n.MEDIA_PAUSED,n.MEDIA_DURATION,n.MEDIA_SEEKABLE,n.MEDIA_CURRENT_TIME,n.MEDIA_PREVIEW_IMAGE,n.MEDIA_PREVIEW_TIME,n.MEDIA_BUFFERED,n.MEDIA_PLAYBACK_RATE,n.MEDIA_LOADING]}connectedCallback(){this.range.setAttribute("aria-label",T.SEEK()),super.connectedCallback()}disconnectedCallback(){cancelAnimationFrame(this._refreshId),super.disconnectedCallback()}attributeChangedCallback(e,t,a){var r,d,l,u,E;(e===n.MEDIA_CURRENT_TIME||e===n.MEDIA_PAUSED||e===n.MEDIA_LOADING)&&(this._updateTimestamp=performance.now(),this.range.value=this.mediaCurrentTime,Ht(this),this.updateBar(),this.updateCurrentBox(),cancelAnimationFrame(this._refreshId),!this.mediaPaused&&!this.mediaLoading&&(this._refreshId=requestAnimationFrame(this._refreshBar))),e===n.MEDIA_DURATION&&(this.range.max=(d=(r=this.mediaSeekableEnd)!=null?r:this.mediaDuration)!=null?d:1e3,Ht(this),this.updateBar(),this.updateCurrentBox()),e===n.MEDIA_SEEKABLE&&(this.range.min=(l=this.mediaSeekableStart)!=null?l:0,this.range.max=(E=(u=this.mediaSeekableEnd)!=null?u:this.mediaDuration)!=null?E:1e3,Ht(this),this.updateBar()),e===n.MEDIA_BUFFERED&&this.updateBar(),e==="disabled"&&(a==null?y(this,ke,Wt).call(this):y(this,At,cs).call(this)),super.attributeChangedCallback(e,t,a)}get mediaPaused(){return this.hasAttribute(n.MEDIA_PAUSED)}get mediaLoading(){return this.hasAttribute(n.MEDIA_LOADING)}get mediaDuration(){let e=this.getAttribute(n.MEDIA_DURATION);return e!=null?+e:void 0}get mediaCurrentTime(){let e=this.getAttribute(n.MEDIA_CURRENT_TIME);return e!=null?+e:void 0}get mediaPlaybackRate(){let e=this.getAttribute(n.MEDIA_PLAYBACK_RATE);return e!=null?+e:1}get mediaBuffered(){let e=this.getAttribute(n.MEDIA_BUFFERED);return e?e.split(" ").map(t=>t.split(":").map(a=>+a)):[]}get mediaSeekable(){let e=this.getAttribute(n.MEDIA_SEEKABLE);if(!!e)return e.split(":").map(t=>+t)}get mediaSeekableEnd(){var t;let[,e]=(t=this.mediaSeekable)!=null?t:[];return e}get mediaSeekableStart(){var t;let[e]=(t=this.mediaSeekable)!=null?t:[];return e}getBarColors(){var A;let e=super.getBarColors(),{range:t}=this,a=t.max-t.min,r=this.mediaBuffered;if(!r.length||!Number.isFinite(a)||a<=0)return e;let d=this.mediaCurrentTime,[,l=t.min]=(A=r.find(([g,M])=>g<=d&&d<=M))!=null?A:[],E=(l-t.min)/a*100;return e.splice(1,0,["var(--media-time-buffered-color, rgba(255,255,255, .4))",E]),e}updateCurrentBox(){if(!c(this,ne).assignedElements().length)return;let e=this.range.value/(this.range.max-this.range.min),t=y(this,De,Ft).call(this,c(this,ne),e),{style:a}=S(this.shadowRoot,"#current-rail");a.transform=`translateX(${t})`}};re=new WeakMap,Te=new WeakMap,ne=new WeakMap,Se=new WeakMap,Le=new WeakMap,De=new WeakSet,Ft=function(e,t){var g;let a=`${t*100*100}%`,r=e.offsetWidth;if(!r)return a;let d=(g=this.getAttribute("bounds")?ce(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?g:this,l=this.range.getBoundingClientRect(),u=d.getBoundingClientRect(),E=(c(this,Se)-(l.left-u.left-r/2))/l.width*100,A=(u.right-l.left-r/2-c(this,Le))/l.width*100;return Number.isNaN(E)||(a=`max(${E*100}%, ${a})`),Number.isNaN(A)||(a=`min(${a}, ${A*100}%)`),a},Ce=new WeakMap,z=new WeakMap,oe=new WeakMap,bt=new WeakMap,ye=new WeakMap,Re=new WeakMap,ke=new WeakSet,Wt=function(){this.addEventListener("pointermove",c(this,Re),!1)},At=new WeakSet,cs=function(){o.removeEventListener("pointermove",c(this,oe)),this.removeEventListener("pointermove",c(this,Re)),p(this,z,!1),c(this,ye).call(this)};o.customElements.get("media-time-range")||o.customElements.define("media-time-range",pt);var ft=pt;var gt=class extends ft{constructor(){super(),console.warn("MediaChrome: <media-progress-range> is deprecated. Use <media-time-range> instead.")}};o.customElements.get("media-progress-range")||o.customElements.define("media-progress-range",gt);var us=gt;var Qt="30",Ra=`<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">${Qt}</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg>`,Es=m.createElement("template");Es.innerHTML=`  
  <slot name="backward">${Ra}</slot>
`;var ka=0,ms=s=>{let i=Math.abs(+s.getAttribute("seek-offset")),e=_.SEEK_BACK_N_SECS({seekOffset:i});s.setAttribute("aria-label",e)},hs=s=>{let i=Ve(s,"backward"),e=s.getAttribute("seek-offset");$e(i,e)},It=class extends I{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_CURRENT_TIME]}constructor(i={}){super({slotTemplate:Es,...i})}connectedCallback(){this.hasAttribute("seek-offset")||this.setAttribute("seek-offset",Qt),ms(this),hs(this),super.connectedCallback()}attributeChangedCallback(i,e,t){i==="seek-offset"&&(t==null&&this.setAttribute("seek-offset",Qt),hs(this),ms(this)),super.attributeChangedCallback(i,e,t)}handleClick(){let i=this.getAttribute(n.MEDIA_CURRENT_TIME),e=+this.getAttribute("seek-offset"),t=i&&!Number.isNaN(+i)?+i:ka,a=Math.max(t-e,0),r=new o.CustomEvent(h.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}};o.customElements.get("media-seek-backward-button")||o.customElements.define("media-seek-backward-button",It);var ps=It;var _t=class extends Q{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_PREVIEW_TIME]}attributeChangedCallback(i,e,t){i===n.MEDIA_PREVIEW_TIME&&t!=null&&(this.container.textContent=R(t)),super.attributeChangedCallback(i,e,t)}};o.customElements.get("media-preview-time-display")||o.customElements.define("media-preview-time-display",_t);var bs=_t;var As=m.createElement("template");As.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async" />
`;var $,vt=class extends o.HTMLElement{constructor(){super();b(this,$,void 0);this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(As.content.cloneNode(!0))}static get observedAttributes(){return[f.MEDIA_CONTROLLER,"time",n.MEDIA_PREVIEW_IMAGE,n.MEDIA_PREVIEW_COORDS]}connectedCallback(){var t,a,r;let e=this.getAttribute(f.MEDIA_CONTROLLER);e&&(p(this,$,(t=this.getRootNode())==null?void 0:t.getElementById(e)),(r=(a=c(this,$))==null?void 0:a.associateElement)==null||r.call(a,this))}disconnectedCallback(){var e,t;(t=(e=c(this,$))==null?void 0:e.unassociateElement)==null||t.call(e,this),p(this,$,null)}attributeChangedCallback(e,t,a){var r,d,l,u,E;["time",n.MEDIA_PREVIEW_IMAGE,n.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===f.MEDIA_CONTROLLER&&(t&&((d=(r=c(this,$))==null?void 0:r.unassociateElement)==null||d.call(r,this),p(this,$,null)),a&&(p(this,$,(l=this.getRootNode())==null?void 0:l.getElementById(a)),(E=(u=c(this,$))==null?void 0:u.associateElement)==null||E.call(u,this)))}update(){let e=this.getAttribute(n.MEDIA_PREVIEW_COORDS),t=this.getAttribute(n.MEDIA_PREVIEW_IMAGE);if(!(e&&t))return;let[a,r,d,l]=e.split(/\s+/).map(Ts=>+Ts),u=t.split("#")[0],E=getComputedStyle(this),{maxWidth:A,maxHeight:g,minWidth:M,minHeight:D}=E,k=Math.min(parseInt(A)/d,parseInt(g)/l),X=Math.max(parseInt(M)/d,parseInt(D)/l),Kt=k<1,J=Kt?k:X>1?X:1,{style:we}=S(this.shadowRoot,":host"),Ue=S(this.shadowRoot,"img").style,de=this.shadowRoot.querySelector("img"),qt=Kt?"min":"max";we.setProperty(`${qt}-width`,"initial","important"),we.setProperty(`${qt}-height`,"initial","important"),we.width=`${d*J}px`,we.height=`${l*J}px`;let Dt=()=>{Ue.width=`${this.imgWidth*J}px`,Ue.height=`${this.imgHeight*J}px`,Ue.display="block"};de.src!==u&&(de.onload=()=>{this.imgWidth=de.naturalWidth,this.imgHeight=de.naturalHeight,Dt()},de.src=u,Dt()),Dt(),Ue.transform=`translate(-${a*J}px, -${r*J}px)`}};$=new WeakMap;o.customElements.get("media-preview-thumbnail")||o.customElements.define("media-preview-thumbnail",vt);var fs=vt;var gs=m.createElement("template"),wa=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;gs.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=loading] > *,
:host ::slotted([slot=loading]) {
  opacity: 1;
  transition: opacity 0.15s;
}

:host(:not([is-loading])) slot[name=loading] > *, 
:host(:not([is-loading])) ::slotted([slot=loading]) {
  opacity: 0;
}

:host(:not([is-loading])) #status {
  display: none;
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-icon-width, 100px);
  height: var(--media-loading-icon-height);
  fill: var(--media-icon-color, #fff);
  vertical-align: middle;
}
</style>

<slot name="loading">${wa}</slot>
<div id="status" role="status" aria-live="polite">${T.MEDIA_LOADING()}</div>
`;var Ua=500,V,Mt=class extends o.HTMLElement{constructor(){super();b(this,V,void 0);let e=this.attachShadow({mode:"open"}),t=gs.content.cloneNode(!0);e.appendChild(t)}static get observedAttributes(){return[f.MEDIA_CONTROLLER,n.MEDIA_PAUSED,n.MEDIA_LOADING,"loading-delay"]}attributeChangedCallback(e,t,a){var r,d,l,u,E,A;if(e===n.MEDIA_LOADING||e===n.MEDIA_PAUSED){let g=this.getAttribute(n.MEDIA_PAUSED)!=null,M=this.getAttribute(n.MEDIA_LOADING)!=null,D=!g&&M;if(!D)this.loadingDelayHandle&&(clearTimeout(this.loadingDelayHandle),this.loadingDelayHandle=void 0),this.removeAttribute("is-loading");else if(!this.loadingDelayHandle&&D){let k=+((r=this.getAttribute("loading-delay"))!=null?r:Ua);this.loadingDelayHandle=setTimeout(()=>{this.setAttribute("is-loading",""),this.loadingDelayHandle=void 0},k)}}else e===f.MEDIA_CONTROLLER&&(t&&((l=(d=c(this,V))==null?void 0:d.unassociateElement)==null||l.call(d,this),p(this,V,null)),a&&(p(this,V,(u=this.getRootNode())==null?void 0:u.getElementById(a)),(A=(E=c(this,V))==null?void 0:E.associateElement)==null||A.call(E,this)))}connectedCallback(){var t,a,r;let e=this.getAttribute(f.MEDIA_CONTROLLER);e&&(p(this,V,(t=this.getRootNode())==null?void 0:t.getElementById(e)),(r=(a=c(this,V))==null?void 0:a.associateElement)==null||r.call(a,this))}disconnectedCallback(){var e,t;this.loadingDelayHandle&&(clearTimeout(this.loadingDelayHandle),this.loadingDelayHandle=void 0),(t=(e=c(this,V))==null?void 0:e.unassociateElement)==null||t.call(e,this),p(this,V,null)}};V=new WeakMap;o.customElements.get("media-loading-indicator")||o.customElements.define("media-loading-indicator",Mt);var Is=Mt;var _s=m.createElement("template");_s.innerHTML=`
  <style>
    :host {
    }
  </style>
  <slot></slot>
`;var Tt=class extends o.HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(_s.content.cloneNode(!0))}};o.customElements.get("media-title-bar")||o.customElements.define("media-title-bar",Tt);var vs=Tt;var xa=100,Pa=s=>{var t;if(s.getAttribute(n.MEDIA_MUTED)!=null)return 0;let e=+((t=s.getAttribute(n.MEDIA_VOLUME))!=null?t:1);return Math.round(e*s.range.max)},Na=({value:s,max:i})=>`${Math.round(s/i*100)}%`,St=class extends se{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_VOLUME,n.MEDIA_MUTED,n.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.max=xa,this.range.addEventListener("input",()=>{let e=this.range.value/this.range.max,t=new o.CustomEvent(h.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){this.range.setAttribute("aria-label",T.VOLUME()),super.connectedCallback()}attributeChangedCallback(i,e,t){if(i===n.MEDIA_VOLUME||i===n.MEDIA_MUTED){let a=Pa(this);this.range.value=a,this.range.setAttribute("aria-valuetext",Na(this.range)),this.updateBar()}super.attributeChangedCallback(i,e,t)}};o.customElements.get("media-volume-range")||o.customElements.define("media-volume-range",St);var Ms=St;var Gt=class extends Xe{};o.customElements.get("media-chrome")||o.customElements.define("media-chrome",Gt);var Lt=class extends Xe{constructor(){super(),console.warn("MediaChrome: <media-container> is deprecated. Use <media-controller>.")}};o.customElements.get("media-container")||o.customElements.define("media-container",Lt);return Rs(Oa);})();
//# sourceMappingURL=media-chrome.js.map
