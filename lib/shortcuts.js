'use strict';

const videoAttribute = 'chromeBetterHtml5VideoType',
     timeoutAttribute = 'chromeBetterHtml5VideoClickTimeout';

let toggleChecked,
     toggleEnabled,
     dirVideo = getVideo(),
     settings = {
          firstClick: 'focus',
          dblFullScreen: true,
          clickDelay: 0.3,
          skipNormal: 5,
          skipShift: 10,
          skipCtrl: 1,
          allowWOControls: false
     };

const shortcutFuncs = {

     togglePlay: function (v) {
          if(v.paused) v.play();
          else v.pause();
     },

     toStart: function (v) {
          v.currentTime = 0;
     },

     toEnd: function (v) {
          v.currentTime = (v.duration - 5);
     },

     skipLeft: function (v, key, shift, ctrl) {
          if(shift) v.currentTime -= settings.skipShift;
          else if(ctrl) v.currentTime -= settings.skipCtrl;
          else v.currentTime -= settings.skipNormal;
     },

     skipRight: function (v, key, shift, ctrl) {
          if(shift) v.currentTime += settings.skipShift;
          else if(ctrl) v.currentTime += settings.skipCtrl;
          else v.currentTime += settings.skipNormal;
     },

     increaseVol: function (v) {
          if(v.volume <= 0.9) v.volume += 0.1;
          else v.volume = 1;
     },

     decreaseVol: function (v) {
          if(v.volume >= 0.1) v.volume -= 0.1;
          else v.volume = 0;
     },

     toggleMute: function (v) {
          v.muted = !v.muted;
     },

     toggleFS: function (v) {
          if(document.webkitFullscreenElement) document.webkitExitFullscreen();
          else v.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
     },

     reloadVideo: function (v) {
          const currTime = v.currentTime;
          v.load();
          v.currentTime = currTime;
     },

     slowOrPrevFrame: function (v, key, shift) {
          if(shift /* Less-Than */ )
               v.playbackRate -= 0.25; /* Comma */
          else v.currentTime -= 1 / 60;
     },

     fastOrNextFrame: function (v, key, shift) {
          if(shift /* Greater-Than */ )
               v.playbackRate += 0.25; /* Period */
          else v.currentTime += 1 / 60;
     },

     normalSpeed: function (v, key, shift) {
          if(shift /* ? */ )
               v.playbackRate = v.defaultPlaybackRate;
     },

     toPercentage: function (v, key) {
          v.currentTime = v.duration * (+key / 10);
     }
};

const keyFuncs = {
     /* 32 */
     ' ': shortcutFuncs.togglePlay,
     /* 75 */
     K: shortcutFuncs.togglePlay,
     /* 35 */
     End: shortcutFuncs.toEnd,
     /* 48 */
     '0': shortcutFuncs.toStart,
     /* 36 */
     Home: shortcutFuncs.toStart,
     /* 37 */
     'Left arrow': shortcutFuncs.skipLeft,
     /* 74 */
     J: shortcutFuncs.skipLeft,
     /* 39 */
     'Right arrow': shortcutFuncs.skipRight,
     /* 76 */
     L: shortcutFuncs.skipRight,
     /* 38 */
     'Up arrow': shortcutFuncs.increaseVol,
     /* 40 */
     'Down arrow': shortcutFuncs.decreaseVol,
     /* 77 */
     M: shortcutFuncs.toggleMute,
     /* 70 */
     F: shortcutFuncs.toggleFS,
     /* 67 */
     C: shortcutFuncs.toggleCaptions,
     /* 82 */
     R: shortcutFuncs.reloadVideo,
     /* 188 */
     'Comma or Less-Than': shortcutFuncs.slowOrPrevFrame,
     /* 190 */
     'Period or Greater-Than': shortcutFuncs.fastOrNextFrame,
     /* 191 */
     'Forward slash or ?': shortcutFuncs.normalSpeed,
     /* 49 */
     '1': shortcutFuncs.toPercentage,
     /* 50 */
     '2': shortcutFuncs.toPercentage,
     /* 51 */
     '3': shortcutFuncs.toPercentage,
     /* 52 */
     '4': shortcutFuncs.toPercentage,
     /* 53 */
     '5': shortcutFuncs.toPercentage,
     /* 54 */
     '6': shortcutFuncs.toPercentage,
     /* 55 */
     '7': shortcutFuncs.toPercentage,
     /* 56 */
     '8': shortcutFuncs.toPercentage,
     /* 57 */
     '9': shortcutFuncs.toPercentage
};

function getVideo() {
     if(document.querySelectorAll('video').length === 1) {
          return document.querySelector('video');
     } else {
          if(self.MediaChrome !== undefined) {
               if(document.querySelector('media-controller') !== null) {
                    return document.querySelector('media-controller').media
               }
          }
     }
}

if(dirVideo) {
     self.addEventListener('keydown', handleKeyDown);
}

function isValidTarget(el) {
     return((dirVideo && (el === dirVideo || el === document.body || el === document.documentElement)) || (el.dataset && el.dataset[videoAttribute]));
}

function handleKeyDown(e) {
     if(!isValidTarget(e.target) || e.altKey || e.metaKey) {
          return true; // Do not activate
     }
     const func = keyFuncs[e.key];
     if(func) {
          if((func.length < 3 && e.shiftKey) ||
               (func.length < 4 && e.ctrlKey)) {
               return true; // Do not activate
          }
          func(dirVideo || e.target, e.keyCode, e.shiftKey, e.ctrlKey);
          e.preventDefault();
          e.stopPropagation();
          return false;
     }
     return true; // Do not prevent default if no UI activated
}