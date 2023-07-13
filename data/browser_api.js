const w = window,
        d = document,
        s = sessionStorage,
        wideIt = function wideIt() {
                let ww = w.outerWidth,
                        nw = ww === 250 ? 300 : ww === 300 ? 350 : 250;
                w.resizeTo(nw, w.outerHeight);
                if(0 != w.screenLeft)
                        w.moveTo(screen.availWidth - w.outerWidth, 0);
                return w.outerWidth;
        },
        switchIt = (n = screen.availWidth - w.outerWidth) => !w.screenLeft ? w.moveTo(n, 0) : w.moveBy(-n, 0),
        moveIt = (sl = screen.availWidth - w.outerWidth, nl = w.screenLeft === 0 ? 0.5 * sl : w.screenLeft === sl ? 0 : sl) => w.moveTo(nl, 0),
        marginIt = (cm = d.body.style.cssText, m1 = 'margin-left: 0px; margin-right: 0px; margin-top: 0px;', m2 = 'margin-left: 20%; margin-right: 20%; margin-top: 10%;', m3 = 'margin-left: 30%; margin-right: 30%; margin-top: 10%') => (d.body.style.cssText = cm == m1 ? m2 : cm == m2 ? m3 : m1),
        centerIt = function doCenter(i = 3, sw = screen.availWidth, sh = screen.availHeight, w = sw / i, h = sh / i, l = sw / 2 - w / 2, t = sh / 2 - h / 2) {
                window.resizeTo(w, h);
                window.moveTo(l, t);
        },
        randIt = function rand() {
                let arr = [...document.links],
                        n = arr.length,
                        r = 0;
                while(n > 0) {
                        r = parseInt(Math.random() * arr.length);
                        arr = arr.sort((a, b) => 0.5 - Math.random());
                        n--;
                }
                return arr[r];
        },
        n1 = function n1(e) {
                let t = d.createElement('dt');
                if(e.includes('script'))
                        return !1;
                e.includes('~') ? (t.innerHTML = a4(e.split('|').splice(1), e.split('|').shift(1).split('~').shift(), e.split('|').shift(1).split('~').pop())) : e.includes('|') && e.includes('(1 of') ? (t.innerHTML = a3(e)) : e.includes('|') && !e.includes('(1 of') ? (t.innerHTML = a2(e)) : (t.innerHTML = a1(e)),
                        d.querySelector('ul').appendChild(t);
        },
        a1 = function a1(e) {
                return `<a href="../../Stories/MC/${e}.mhtml" target="_self">${e}</a>`;
        },
        a2 = function a2(e) {
                return [...e.split('|').map(e => (e = `<a href="../../Stories/MC/${e}.mhtml" target="_self">${e}</a><br>`))].join('').slice(0, -4);
        },
        a3 = function a3(e) {
                return ['<span style="font-family:sans-serif;">', e.substring(0, e.indexOf('(1 of')), '</span><br>', ...e.split('|').map(e => (e = `<a style="font-size:small;" href="../../Stories/MC/${e}.mhtml" target="_self">${e.substring(e.lastIndexOf('('))}</a> \n `))].join('').slice(0, -4);
        },
        a4 = function a4(e, t, i) {
                return [t, '<br>', ...e.map(e => (e = e.startsWith(i) && e !== i ? `<a href="../../Stories/MC/${e}.mhtml" target="_self">${e.substring(i.length)}</a> ` : `<a href="../../Stories/MC/${e}.mhtml" target="_self">${e}</a> `))].join('');
        },
        ficRef = link => decodeURI(link.href).split('/').pop(),
        clearFic = function clearFic() {
                let readFics = JSON.parse(s.allRead),
                        aLink = d.activeElement,
                        aFic = ficRef(aLink);
                if('line-through' === aLink.style.textDecorationLine) {
                        s.setItem('allRead', JSON.stringify(readFics.filter(e => e !== aFic)));
                        aLink.style.textDecorationLine = '';
                }
                else {
                        s.setItem('allRead', JSON.stringify([...readFics, aFic]));
                        d.activeElement.style.textDecorationLine = 'line-through';
                }
                return aFic;
        },
        shuffle = function shuffle() {
                for(let e = d.querySelector('ul'), t = e.children.length; t >= 0; t--)
                        e.appendChild(e.children[(Math.random() * t) | 0]);
                formatAR(),
                        focusLR();
                return true;
        },
        formatAR = function formatAR() {
                if(!s.allRead)
                        s.setItem('allRead', JSON.stringify([]));
                JSON.parse(s.allRead).forEach(function(aFic) {
                        if(d.querySelector(`a[href$='${aFic}']`)) {
                                d.querySelector(`a[href$='${aFic}']`).style.textDecorationLine = 'line-through';
                        }
                });
                return JSON.parse(s.allRead).length;
        },
        focusLR = function focusLR() {
                let lastFic = d.querySelector(`a[href$='${s.lastRead}']`);
                if(!lastFic)
                        lastFic = d.querySelector('a');
                lastFic.focus();
                d.activeElement.scrollIntoViewIfNeeded(true);
                return lastFic;
        },
        readFic = function readFic() {
                let readFic = JSON.parse(s.allRead),
                        aLink = d.activeElement,
                        aFic = ficRef(aLink);
                s.setItem('lastRead', aFic);
                s.setItem('allRead', JSON.stringify([...readFic, aFic]));
                return w.location.assign(aLink.href);
        },
        loadFic = function loadFic() {
                s.setItem('tmp', d.body.innerHTML);
                document.title = location.pathname.split('/').pop();
                if(s.pn && s.pn !== document.title)
                        ['allRead', 'lastRead'].forEach(e => s.removeItem(e));
                //{ s.removeItem('allRead');
                // s.setItem('lastRead', 'null');}
                s.setItem('pn', document.title);
                d.head.insertAdjacentHTML('beforeend', "<style>:any-link{color: blue;} a { white-space: pre; text-decoration: none; } body { background: black; font-family: sans-serif; } ul { list-style: none; padding-inline-start: 3%;} dt { padding: 2; border-bottom: thin solid blue; }</style>");
                d.body.innerHTML = '<ul></ul>';
                s.tmp.split('\n').forEach(e => n1(e));
                if(s.hasOwnProperty('lastRead'))
                        focusLR();
                formatAR();
                document.addEventListener('keydown', keydown);
                return true;
        };

function keydown(e) {
        if(e.altKey) {
                return;
        }
        if(' ' == e.key) {
                e.preventDefault();
                if('_self' === d.activeElement.target)
                        return readFic();
                else
                        d.activeElement.click();
        }
        if('[' == e.key) {
                window.resizeTo([[250, 300, 350].find(w => w > window.outerWidth) || 250], window.outerHeight);
        }
        if(']' == e.key) {
                window.resizeTo(window.outerWidth, [[125, 250, 400, 550].find(w => w > window.outerHeight) || 125]);
        }
        if('\\' == e.key) {
                wideIt();
        }
        if('|' == e.key) {
                marginIt();
        }
        if('=' == e.key) {
                centerIt(3);
        }
        if('-' == e.key) {
                centerIt(4);
        }
        if('+' == e.key) {
                centerIt(2);
        }
        if('_' == e.key) {
                w.moveTo(w.screenLeft, 0);
        }
        if('r' == e.key) {
                randIt().focus();
        }
        if('s' == e.key) {
                shuffle();
        }
        if('x' == e.key) {
                clearFic();
        }
        if('f' == e.key)
                ((t = document.activeElement.closest('dt'), n = t.nextElementSibling) => (n ? n : document).querySelector('a').focus())();
        if('F' == e.key) {
                d.querySelector('a').focus();
        }
        if('R' == e.key) {
                s.clear(),
                        w.location.reload();
        }
        if(e.key.startsWith('Arrow') || (+e.key < 3)) {
                switchIt();
                return history.forward();
        }
}
loadFic();
marginIt();
