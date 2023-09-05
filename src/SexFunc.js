Object.setPrototypeOf(save, {
    async next() {
        let ok = await window.confirm('reset...');
        if (ok) {
            localStorage.clear();
            document.body.innerHTML = '<button onclick="save.next();">Next</button><button onclick="save.prev()" onblur="save.button.focus();">Previous</button>';
            this.map = ["file:///media/removable/nonsex/Aud/", "file:///media/removable/STR8/", "file:///media/removable/nonsex/", "file:///media/removable/Sex 1/", "file:///media/removable/S1/", 'file:///home/chronos/u-c9272a171b9e9b3b34a5b286e189361ada5d30c6/MyFiles/Downloads/'];
            this.button = document.querySelector("button");
            this.button.innerText = "next";
            this.next = function() {
                let {map} = this;
                if (!map.length) {
                    return location.reload();
                }
                save.top = window.open(map.shift(), "top", "popup=false")
                save.map = map;
            }
            ;
            this.prev = function() {
                save.open = window.open(save.last, "top", "popup=false");
            }
            ;
            return this.button.focus();
        }
    },
    changed: (d=Data.vidtext())=>d.startsWith('[["1"') ? save.g !== d : d.startsWith('[["14"') ? save.s !== d : false,
    open(d) {
        d = ["Gay", "gay", "G", "g"].includes(d) ? save.g : ["Straight", "straight", "Str8", "str8", "Vids", "vids", "S", "s", ].includes(d) ? save.s : false;
        if (!d)
            Page.pgHead("Load Error.");
        else if (!save.changed())
            Data.setVidData(JSON.parse(d));
        else if (window.confirm("Open Data has been changed. Overwrite?"))
            Data.setVidData(JSON.parse(d));
        else
            Page.pgHead("Load Error.");
    },
    filetext() {
        let d, s, g;
        d = Data.vidtext();
        s = d.startsWith('[["1"') ? save.s : d.startsWith('[["14"') ? d : void 0;
        g = d.startsWith('[["1"') ? d : d.startsWith('[["14"') ? save.g : void 0;
        if (!save.changed() || !s || !g)
            return false;
        return "const save = {};\nsave.s = `" + s + "`;\nsave.g = `" + g + "`;";
    },
});

const vd = {
    target: "justVid",
    vf(vf) {
        // old /mp3$|m4a$|mp4$|mkv $/
        if (!/\.(avi|mp4|mpeg|ogg|webm|mov)/.test(vf))
            return false;
        if (vf.includes("html#"))
            vf = vf.split("html#").find((e)=>/\.(avi|mp4|mpeg|ogg|webm|mov)/.test(e));
        if (vf.includes("html?v="))
            vf = vf.split("html?v=").find((e)=>/\.(avi|mp4|mpeg|ogg|webm|mov)/.test(e));
        if (vf.includes("%"))
            try {
                vf = decodeURI(vf);
            } catch (e) {
                vf = vf;
            }
        return vf;
    },
    shuf: (a,b)=>0.5 - Math.random(),
    Time: (v,t=v.split("&t=").pop(),m=parseInt(t / 60),s=t - m * 60,a=m < 1 ? "" : m,b=s < 10 ? "0" + s : s)=>{
        return v.includes("&") ? a + ":" + b : undefined;
    }
    ,
    Title: (t)=>t.substring(t.lastIndexOf("/") + 1, t.lastIndexOf(".")),
    Srt: (a,b)=>a.split("/").pop().toUpperCase() === b.split("/").pop().toUpperCase() ? 0 : a.split("/").pop().toUpperCase() > b.split("/").pop().toUpperCase() ? 1 : -1,
    c: {
        capture: true,
    },
    o: {
        once: true,
    },
    p: {
        passive: true,
    },
    wins: [],
    watch: ()=>{
        let aClick = window.event
          , aVid = decodeURI(aClick.target.href)
          , pop = p.pop ? p.x : "";
        if (!aClick || !aClick.target || !aClick.target.href)
            return false;
        else
            aClick.preventDefault();
        if (!aClick.target || aClick.target.target === "_blank")
            return vd.wins.push(window.open(aVid, parseInt(document.timeline.currentTime), pop));
        if (vd.watchwin && !vd.watchwin.closed) {
            vd.watchwin.postMessage(vd.vf(aVid), "*");
            vd.watchwin.focus();
            self.blur();
        }//       vd.watchwin.location = aVid;
        else
            return (vd.watchwin = window.open(aVid, "justVid", pop));
    }
    ,
    listen: ()=>{
        if (!!vd.audwin && !vd.audwin.closed)
            vd.audwin.close();
        vd.audwin = window.open("Xr.html#a", "listen", "width=200,height=200,left=700,right=500,menubar=0,scrollbars=0,status=0,titlebar=0,locationbar=0,toolbar=0,personalbar=0,locationbar=0");
    }
    ,
    tell: ()=>{
        let ok = (awin)=>awin && awin.opener && awin.opener === window
          , msg = window.event;
        if (msg.data.hasOwnProperty("src")) {
            window.alert(vd.Title(vd.vf(msg.data.src)));
        }
        if (msg.data === "audchk")
            !!vd.watchwin && vd.watchwin.postMessage(vd.q, "*");
        if (msg.data === "listen")
            vd.listen();
        if (msg.data === "pop")
            msg.target.focus();
        else if (ok(vd.audwin) && msg.data.constructor === Boolean) {
            vd.q = msg.data;
            if (ok(vd.watchwin))
                vd.watchwin.postMessage(vd.q, "*");
        }
    }
    ,
    fin: ()=>[...vd.wins, vd.watchwin, vd.audwin].forEach((e)=>!e || !e.close || e.closed || e.close()),
};
const p = {
    pop: window.menubar.visible,
    x() {
        let x, c;
        c = this.center();
        p.__proto__.center = c;
        p.__proto__.t = Array.from(Array(7).keys(), (e)=>e === 0 ? 0 : parseInt(e * 0.15 * (screen.availHeight - (location.pathname.endsWith("Vid.html") ? 200 : window.outerHeight))));
        p.__proto__.topper = (i)=>i.constructor.isInteger(i) && i < 8 ? i === 0 || i === 0 ? p.t[p.t.length - 1] : p.t[i - 1] : !p.t.find((e)=>e <= i) ? p.t[6] : p.t.find((e)=>e <= i);
        p.__proto__.ter = ()=>(p.__proto__.t = Array.from(Array(7).keys(), (e)=>e === 0 ? 5 : parseInt(e * 0.15 * (screen.availHeight - (location.pathname.endsWith("Vid.html") ? 200 : window.outerHeight)))));
        window.onresize = ()=>p.ter();
        x = this.p(1, 2, 2);
        this.xer(x);
    },
    p(a, b, c) {
        let t = this.topper(a)
          , w = this.wider(b)
          , h = this.higher(c);
        return ("popup=1,width=" + w + ",height=" + h + ",left=" + (this.center - 0.5 * w) + ",top=" + t);
    },
};
Object.setPrototypeOf(p, {
    wider: (i)=>{
        if (i < 10)
            i = i * 100;
        if (!i | !Number(i) | (i < 250) || i > screen.availWidth)
            return 300;
        return i;
    }
    ,
    higher: (i)=>{
        if (i < 10)
            i = i * 100;
        if (!i | !Number(i) | (i < 150) || i > 0.7 * screen.availHeight)
            return 150;
        return i;
    }
    ,
    center: ()=>0.5 * screen.availWidth,
    xer: (x)=>(p.x = x),
});
const Page = {
    add: (e)=>(document.body.innerHTML += e),
    del: (e)=>e.remove(),
    doLeft: (sl=screen.availWidth - window.outerWidth,nl=window.screenLeft === 0 ? 0.5 * sl : window.screenLeft === sl ? 0 : sl)=>window.moveTo(nl, 0),
    doMargin: (cm=document.body.style.cssText,m1="margin-left: 0px; margin-right: 0px; margin-top: 0px;",m2="margin-left: 20%; margin-right: 20%; margin-top: 10%;",m3="margin-left: 30%; margin-right: 30%; margin-top: 10%")=>(document.body.style.cssText = cm == m1 ? m2 : cm == m2 ? m3 : m1),
    doTop: (sl=window.screenLeft,nt=p.t.find((e)=>e > window.screenTop))=>window.moveTo(sl, !nt ? 5 : nt),
    doCenter: (i=3,sw=screen.availWidth,sh=screen.availHeight,w=sw / i,h=sh / i,l=sw / 2 - w / 2,t=sh / 2 - h / 2)=>{
        window.resizeTo(w, h);
        window.moveTo(l, t);
    }
    ,
    FolderBtn: (aFolder)=>`<input type="button" value="${aFolder}" onfocus="" onclick="List.folder(this.value);">`,
    isListBtn: ()=>document.activeElement.localName == "input" && !document.activeElement.onfocus,
    justvids: ()=>[...document.body.children].filter((e)=>!Page.pgLinks().includes(e)).slice(1).forEach((e)=>Page.del(e)),
    ListBtn: (aList)=>`<input type="button" value="${aList}" onclick="List.open(this.value);">`,
    MenuBtn: (aFolder="Folders")=>`<div id="vhd"></div><div id="m"><input type="button" value="${aFolder}" onfocus="this.value='<<<';" onblur="this.value='${aFolder}';" onclick="List.menu();" style="text-transform: uppercase;"></div>`,
    noHead: (h)=>document.body.insertAdjacentHTML("afterbegin", '<div id="vhd">' + h + "</div>"),
    isHead: (h="")=>(document.getElementById("vhd").innerHTML = h),
    pgHead: (h="")=>!document.getElementById("vhd") ? Page.noHead(h) : Page.isHead(h),
    pgLinks: ()=>[...document.links].filter((e)=>!e.classList.contains("seen")).length > 0 ? [...document.links].filter((e)=>!e.classList.contains("seen")) : null,
    nowLink: ()=>Array.from(document.links).forEach((e)=>e.classList.toggle("now")),
    linkNow: ()=>Page.nowLink(),
    style: ()=>Array.from(document.getElementsByTagName("style")).filter((e)=>e.id != "x").forEach((e)=>(e.disabled = true)),
    unfind: ()=>[...document.getElementsByClassName("found")].forEach((e)=>e.classList.remove("found")),
    dotitle: (title=Data.lists.includes("1") ? "Gay" : "Straight")=>(document.title = localStorage.l ? [title, localStorage.f, localStorage.l].join(" - ") : localStorage.f ? [title, localStorage.f].join(" - ") : title),
    vidLink: (aVid)=>`<a href="${"Vid.html?v=" + aVid}" target="${vd.target}" onclick="vd.watch(); this.classList.add('seen');" ${vd.Time(aVid) ? `onfocus="this.text='${vd.Title(aVid)}(${vd.Time(aVid)})'" onblur="this.text='${vd.Title(aVid)}'"` : ""}target="${vd.target}">${vd.Title(aVid)}</a>`,
    vidTabs: ()=>{
        vd.target = vd.target === "justVid" ? "_blank" : "justVid";
        if (vd.target === "justVid") {
            vd.fin();
            vd.wins = [];
        }
        [...document.links].forEach((e)=>e.setAttribute("target", vd.target));
        return Page.pgHead(vd.target);
    }
    ,
    // aud1: ()=>[...document.links].forEach(e=>e.href = (e.href.includes("Vid.html")) ? e.href.replace("Vid.html#", "Aud.html#") : e.href.replace("Aud.html#", "Vid.html#")),
    // aud2: ()=>Page.pgHead(document.querySelector('a').href.includes('Aud') ? "V => Auds" : "A => Vids"),
    setPop: ()=>{
        p.pop = !p.pop;
        Page.pgHead(p.pop ? "Pop!" : "Tab!");
    }
    ,
};
const List = {
    menu: ()=>{
        localStorage.removeItem("f");
        localStorage.removeItem("l");
        [...document.body.children].forEach((e)=>document.body.removeChild(e));
        Page.dotitle();
        Page.add('<div id="vhd"></div>');
        [...Data.folders].forEach((e)=>Page.add(Page.FolderBtn(e)));
        Page.style();
        List.watch();
    }
    ,
    folder: (aFolder)=>{
        localStorage.setItem("f", aFolder);
        [...document.body.children].forEach((e)=>document.body.removeChild(e));
        Page.dotitle();
        Page.add(Page.MenuBtn(aFolder));
        Data.get(aFolder).reverse().forEach((e)=>Page.add(Page.ListBtn(e)));
        Page.style();
        List.watch();
    }
    ,
    open: (aList)=>{
        if (localStorage.l) {
            if (localStorage.l === aList)
                aList = undefined;
            List.close();
        }
        localStorage.setItem("l", aList);
        Page.dotitle();
        Data.get(aList).forEach((e)=>Page.add(Page.vidLink(e)));
        Page.style();
        Page.linkNow();
        List.watch();
        // document.querySelector(`input[value='${aList}']`).focus();
    }
    ,
    close: ()=>{
        localStorage.removeItem("l");
        Page.dotitle();
        [...document.links].forEach((e)=>document.body.removeChild(e));
    }
    ,
    first: ()=>!Page.pgLinks() ? [...document.getElementsByTagName("input")].filter((e)=>!e.onblur).shift() : Page.pgLinks().shift(),
    last: ()=>!Page.pgLinks() ? [...document.getElementsByTagName("input")].filter((e)=>!e.onblur).pop() : Page.pgLinks().pop(),
    next: (i=Page.pgLinks().indexOf(document.activeElement))=>Page.pgLinks()[i + 1] || Page.pgLinks()[i - 1] || document.querySelector(`input[value='${localStorage.l}']`) || document.querySelector('input'),
    random: ()=>!Page.pgLinks() ? [...document.getElementsByTagName("input")].filter((e)=>!e.onblur).sort(vd.shuf).shift() : Page.pgLinks().sort(vd.shuf).shift(),
    shuffle: ()=>{
        let i = document.querySelector("a") ? [...document.links] : [...document.querySelectorAll("input")].filter((e)=>!e.onblur)
          , o = i.map((e)=>e.outerHTML).sort(vd.shuf).join("");
        i.forEach((e)=>Page.del(e));
        Page.add(o);
    }
    ,
    get sorted() {
        if (Page.pgLinks()) {
            let a = [...document.links].map((e)=>e.text);
            b = [...a].sort();
            return b.every((t)=>a.indexOf(t) == b.indexOf(t));
        }
    },
    sort: ()=>{
        // if (List.sorted) {}
        let i = document.querySelector("a") ? [...document.links] : [...document.querySelectorAll("input")].filter((e)=>!e.onblur)
          , o = document.querySelector("a") ? i.map((e)=>[e.textContent.toUpperCase(), e]).sort().map((e)=>e[1].outerHTML).join("") : i.map((e)=>[e.value, e]).sort().map((e)=>e[1].outerHTML).join("");
        i.forEach((e)=>Page.del(e));
        Page.add(o);
    }
    ,
    readall: (c=document.activeElement.classList.contains("seen"),f=(tag)=>[...document.links].forEach((link)=>link.classList[tag]("seen")))=>f(typeof c == "string" ? "toggle" : c ? "add" : "remove"),
    // readall: (c = document.activeElement.classList.contains("seen") ? false : true) => [...document.links].forEach((e) => c ? e.classList.add("seen") : e.classList.remove("seen")),
    look: str=>{
        const fn = Object(null);
        fn.vid = vd.vf(str);
        Object.setPrototypeOf(fn, {
            exp: new RegExp(fn.vid),
            test: uri=>fn.exp.test(uri),
            list: list=>Data.get(list).some(fn.test),
            fold: list=>Data.folders.find(fld=>Data.get(fld).includes(list)),
        })
        Data.set('w', {
            vid: fn.vid,
            list: [...Data.lists.filter(fn.list), ...Data.lists.filter(fn.list).map(fn.fold)]
        });
    }
    ,
    unwatch: ()=>{
        localStorage.removeItem("w");
        Page.pgHead();
        Page.unfind();
    }
    ,
    watch: (aVid)=>{
        Page.unfind();
        if (aVid)
            List.look(aVid);
        if (localStorage.w) {
            if (document.querySelector("a"))
                [...document.links].filter((e)=>e.text === vd.Title(Data.get("w").vid)).forEach((e)=>e.classList.add("found"));
            [...document.getElementsByTagName("input")].filter((e)=>!e.onblur).filter((e)=>Data.get("w").list.includes(e.value)).forEach((e)=>e.classList.add("found"));
            Page.pgHead(vd.Title(Data.get("w").vid) + "(" + (vd.Time(Data.get("w").vid) ? vd.Time(Data.get("w").vid) + ")-(" : "") + Data.get("w").list.length + "lists)");
        }
    }
    ,
    found: (l=[...document.getElementsByClassName("found")])=>{
        if (l.length === 0)
            return List.first();
        if (!document.activeElement.classList.contains("found"))
            return document.querySelector(".found");
        return !l[l.indexOf(document.activeElement) + 1] ? l[l.indexOf(document.activeElement) - 1] : l[l.indexOf(document.activeElement) + 1];
    }
    ,
    insert: (aVid)=>{
        let aList = (Page.isListBtn() && Data.lists.includes(document.activeElement.value) && document.activeElement.value) || (!!localStorage.l && localStorage.l) || false
          , nList = [aVid, ...Data.get(aList)].sort(vd.Srt);
        if (!aList)
            return false;
        if (aList && Data.get(aList).constructor.name === "Array") {
            Data.set(aList, nList);
            if (Page.pgLinks())
                List.first().insertAdjacentHTML("beforeBegin", Page.vidLink(aVid));
            List.watch(aVid);
        }
    }
    ,
    replace: (aVid,aLink)=>{
        let ts = (f)=>f.split("t=").pop(), fn = (f)=>f.split(".mp4").shift(), elem, aList = (Page.isListBtn() && Data.lists.includes(document.activeElement.value) && document.activeElement.value) || (!!localStorage.l && localStorage.l) || false, dList;
        if (fn(aVid) !== fn(aLink) || ts(aVid) == ts(aLink)) {
            console.log([fn(aVid), fn(aLink), ts(aVid), ts(aLink)]);
            return false;
        }
        if (!aList || !aLink.includes(".mp4") || !aLink.startsWith("file"))
            return false;
        dList = Data.get(aList).map((e)=>e.replace(aLink, aVid));
        console.log("Old " + aList, Data.get(aList));
        Data.set(aList, dList);
        elem = [...document.links].find((e)=>e.href.includes(encodeURI(aLink)));
        elem.href = "Vid.html?v=" + encodeURI(aVid);
        elem.text += " Updated!";
        List.watch(aVid);
        // Page.pgHead("Changed " + fn(aLink) + " timestamp: " + ts(aLink) + " to " + ts(aVid) + ".");
    }
    ,
    remove: (aVid)=>{
        let tVid = vd.Title(aVid)
          , aList = (Page.isListBtn() && Data.lists.includes(document.activeElement.value) && document.activeElement.value) || (!!localStorage.l && localStorage.l) || false
          , dList = Data.get(aList)
          , oList = [];
        if (!aList)
            return false;
        dList.forEach((li)=>li !== aVid && vd.Title(li) !== tVid && oList.push(li));
        if (document.querySelector("a"))
            [...document.links].forEach((e)=>e.text === vd.Title(aVid) && Page.del(e));
        Data.set(aList, oList);
        List.watch(aVid);
        console.log("Old " + aList, dList);
        Page.pgHead("Removed" + tVid + "from" + aList + ".");
    }
    ,
    // edit: ()=>window.confirm('Album') ? List.album.head() : window.confirm('Filter') ? Filter.start() : window.confirm('Focus?') ? Filter.start(false) : window.confirm('Rename') ? Data.renameList() : window.confirm('Delete') ? Data.deleteList() : window.confirm('Keep Album Links?') ? Page.pgLinks().forEach(l=>l.removeAttribute('onblur')) : Page.pgHead('unlisted'),
    edit: ()=>window.confirm("Album") ? List.album.head() : window.confirm("Keep Album Links?") ? Page.pgLinks().forEach(e=>(e.setAttribute('onclick', `${e.getAttribute('onclick').split(' ').shift()} ${e.getAttribute('onblur')}`),
    e.removeAttribute('onblur'))) : window.confirm("Filter") ? Filter.start() : (Page.pgLinks().forEach(a=>a.addEventListener('keydown', function(e) {
        if (e && e.metaKey) {
            !e.defaultPrevented && e.preventDefault();
            document.body.insertAdjacentElement('beforeend', this.cloneNode(true));
            this.blur();
        }
    }, true)),
    Page.pgHead('')),
    album: {
        menu: (x="")=>{
            let a, b, c;
            a = (l)=>`<input type="button" value="${l}" onclick="List.album.add('${l}');">`;
            (b = (f)=>`<input type="button" value="${f}" alt="${encodeURIComponent("Album View - Add List:<br>" + Data.get(f).map((e)=>a(e)).join(""))}" onclick="Page.pgHead(decodeURIComponent(document.activeElement.getAttribute('alt')));">`),
            (c = (arr)=>arr.filter((e)=>e !== x));
            Page.pgHead("Album View:<br>" + c(Data.folders).map((e)=>b(e)).join(""));
            !x || !document.querySelector(`[value="${x}"]`) || Page.del(document.querySelector(`[value="${x}"]`));
            // [[...document.links][0], [...document.links][[...document.links].length - 1]].forEach(e=>e.setAttribute('onfocus', 'List.album.head();'));
        }
        ,
        vids: (sort,vanish)=>{
            [...document.links].filter((e)=>!e.onblur).forEach((e)=>e.setAttribute("onblur", "Page.del(this);"));
            //       let l = localStorage.l || Data.lists.sort(vd.shuf).shift();
            //       document.body.innerHTML = Data.get(l).map(e => Page.vidLink(e)).sort(vd.shuf).join('');
            // [...document.getElementsByTagName('input')].forEach(b=>Page.del(b));
            [...document.links].forEach((e)=>e.setAttribute("onblur", "Page.del(this);"));
            //       List.shuffle();
            // List.album.head();
        }
        ,
        add: (aList)=>{
            let x, l;
            x = new Set([...document.links].map((e)=>e.text));
            l = Data.get(aList).filter((e)=>!x.has(vd.Title(e))).map((e)=>Page.vidLink(e));
            l.forEach((e)=>Page.add(e));
            [...document.links].filter((e)=>!e.onblur).forEach((e)=>e.setAttribute("onblur", "Page.del(this);"));
            List.sort();
            let b = document.querySelector(`[value="${aList}"]`);
            b.setAttribute("onclick", `List.album.menu('${aList}');`);
            b.setAttribute("value", "Top");
            b.setAttribute("onblur", "Page.del(this);");
            return b.focus();
            // document.querySelector('vhf>input') || List.album.head();
        }
        ,
        head: ()=>{
            !document.querySelector("body > input") || document.querySelectorAll("body > input").forEach((e)=>Page.del(e));
            Page.pgHead(`<input type="button" value="Album View" onclick="List.album.menu();">`);
            return document.querySelector("input").focus();
        }
        ,
    },
    show: (ct=1)=>{
        let pop = p.pop ? p.p(3, 600, 400) : "";
        if (!Page.pgLinks()) {
            if (Page.isListBtn())
                Data.get(document.activeElement.value).sort(vd.shuf).slice(0, ct).forEach((e)=>vd.wins.push(window.open(e, "_blank", pop)));
            return false;
        }
        Page.pgLinks().sort(vd.shuf).slice(0, ct).forEach((e)=>{
            vd.wins.push(window.open(e.href, "_blank", pop));
            e.classList.add("seen");
        }
        );
        if (!Page.pgLinks())
            document.querySelector(`input[value='${localStorage.l}']`).focus,
            List.close();
    }
    ,
    showList: ()=>{
        let al = document.activeElement.value
          , l = Data.get(al);
        if (localStorage.f === "Day Players" || Data.get("Day Players").includes(document.activeElement.value)) {
            l.sort(vd.shuf).forEach((e)=>vd.wins.push(window.open("Vid.html?v=" + e, "_blank")));
            !document.activeElement.nextSibling ? List.menu() : document.activeElement.nextSibling.focus();
            if (document.querySelector("a"))
                document.activeElement.click();
        } else {
            List.open(al);
            List.show(5);
        }
    }
    ,
};
const Filter = {
    do: void 0,
    start(type="filter") {
        if (this.do) {
            let t = "Filter.start(*);".replace("*", this.do.focus ? "false" : "true");
            this.do = void Page.pgHead('Filter cleared!<br><input type="button" class="fc" onblur="Page.pgHead();" value="Try Again?">');
            this.see();
            document.querySelector(".fc").setAttribute("onclick", t);
            document.querySelector(".fc").focus();
            return void 0;
        }
        this.do = Object.create(this.blank);
        type = ["focus", "Focus", false, 0].includes(type) ? false : true;
        (this.do.filter = type),
        (this.do.focus = !type);
        this.hide();
        this.menu();
    },
    menu() {
        let a, b;
        a = (l)=>`<input type="button" value="${l}" onclick="Filter.list('${l}');">`;
        b = (f)=>`<input type="button" value="${f}" alt="${encodeURIComponent((this.do.focus ? "Focus" : "Filter") + ":<br>" + Data.get(f).map((e)=>a(e)).join(""))}" onclick="Page.pgHead(decodeURIComponent(document.activeElement.getAttribute('alt')));">`;
        Page.pgHead((this.do.focus ? "Focus" : "Filter") + ":<br>" + Data.folders.map((e)=>b(e)).join(""));
    },
    list(aList) {
        let o;
        if (!Data.lists.includes(aList)) {
            this.do = void 0;
            Page.pgHead("Filter error.");
        }
        this.do.list = aList;
        o = (this.do.focus ? "Focus" : "Filter") + " " + aList + ".";
        Page.pgHead(o);
        return window.setTimeout(this.use(), 500);
    },
    use() {
        let lin = (lis)=>{
            let x, o = {};
            x = new Set(Data.get(lis).map((e)=>vd.Title(e)));
            o.in = [...document.links].filter((e)=>x.has(e.text));
            o.out = [...document.links].filter((e)=>!x.has(e.text));
            return o;
        }
        , l, o;
        if (!this.do.list) {
            this.do = void 0;
            Page.pgHead("Filter error.");
        }
        l = lin(this.do.list);
        o = this.do.list + "" + (this.do.focus ? " focused." : " removed.");
        if (this.do.filter)
            l.in.forEach((e)=>Page.del(e));
        if (this.do.focus)
            l.out.forEach((e)=>Page.del(e));
        Page.pgHead(o);
        this.do = void 0;
        this.see();
    },
    blank: {
        focus: void 0,
        filter: void 0,
        list: void 0,
    },
    hide: ()=>[...document.querySelectorAll("input"), ...document.links].forEach((e)=>(e.style.display = "none")),
    see: ()=>[...document.body.children].forEach((e)=>e.style.removeProperty("display")),
};
const Data = {
    lists: [],
    folders: [],
};
Object.setPrototypeOf(Data, {
    set: (n,o)=>{
        localStorage.setItem(n, JSON.stringify(o));
    }
    ,
    get: (n)=>!localStorage.hasOwnProperty(n) ? [] : JSON.parse(localStorage.getItem(n)),
    check(n) {
        let d, s, a;
        if (!localStorage.hasOwnProperty(n))
            return false;
        d = Data.get(n);
        s = Data.folders.includes(n) ? d.sort() : d.map((l)=>vd.vf(l)).sort(vd.Srt);
        a = [...new Set(s)];
        Data.set(n, a);
        return a;
    },
    vidtext: ()=>JSON.stringify([...Data.lists, ...Data.folders].sort().map((n)=>[n, ...Data.check(n)])),
    eraseVid: (aVid)=>{
        if (window.confirm("Remove " + vd.Title(aVid) + " from all lists?")) {
            let ll = (l,v)=>Data.get(l).map((e)=>vd.Title(e)).includes(vd.Title(v)) ? l : null
              , l = [...Data.lists].map((list)=>ll(list, aVid)).filter((e)=>e)
              , n = l.map((e)=>[e, [...Data.get(e)].filter((e)=>!(vd.Title(e) === vd.Title(aVid))), ]);
            n.forEach((e)=>{
                Data.set(e[0], e[1]);
            }
            );
            if (document.querySelector("a"))
                [...document.links].filter((e)=>e.text === vd.Title(aVid)).forEach((e)=>Page.del(e));
            Page.pgHead("Removed " + vd.Title(aVid) + " from " + l.length + " lists.<br>" + l.join(" - "));
        }
    }
    ,
    addList: ()=>{
        let afunc;
        afunc = function(name, folder, vid) {
            let newfolder, list;
            if (Data.lists.includes(name) || !name) {
                Page.pgHead("List exists/not found.");
                return false;
            }
            list = [vid];
            newfolder = [...Data.get(folder), name].sort();
            Data.set(folder, newfolder);
            Data.set(name, list);
            Data.lists = [...Data.lists, name].sort();
            return List.menu(name);
        }
        ;
        if (!localStorage.f || !localStorage.v) {
            Page.pgHead(`Unable to add list--no ${!localStorage.f ? "folder open" : !localStorage.v ? "vid lookup" : "known error"}.`);
            return false;
        }
        afunc(window.prompt(`Add new list to ${localStorage.f}?`, "New List"), localStorage.f, localStorage.v);
    }
    ,
    addFolder: ()=>{
        let aFolder, aName, aList, afunc;
        afunc = function(n, f, l) {
            if (Data.folders.includes(n) || !n)
                return false;
            let fn, fl;
            fn = [l];
            fl = [...Data.get(f)].filter((e)=>e !== l);
            Data.set(f, fl);
            Data.set(n, fn);
            Data.folders = [...Data.folders, n].sort();
            List.folder(n);
        }
        ;
        aList = localStorage.l || (Page.isListBtn() && document.activeElement.value) || window.confirm("Randome List: " + Data.lists[parseInt(Data.lists.length * Math.random())]);
        aFolder = Data.folders.find((e)=>Data.get(e).includes(aList));
        afunc(window.prompt(`Add new folder by moving ${aList} from ${aFolder}?`, "New Folder"), aFolder, aList);
    }
    ,
    renameList: ()=>{
        let aList, aFolder, rnfunc;
        rnfunc = function(l, n, f) {
            let fn, li;
            if (n === l || !n)
                return false;
            fn = [...Data.get(f).filter((e)=>e !== l), n].sort();
            li = Data.get(l);
            Data.set(f, fn);
            Data.set(n, li);
            Data.lists = [...Data.lists.filter((e)=>e !== l), n].sort();
            localStorage.removeItem(l);
            List.open(n);
        }
        ;
        aList = localStorage.l;
        aFolder = Data.folders.find((e)=>Data.get(e).includes(aList));
        if (aList)
            rnfunc(aList, window.prompt("Rename " + aList + " to?", aList), aFolder);
    }
    ,
    splitList: {
        c: function splitList3(s) {
            console.log(Data.get(s.folder));
            console.log(Data.get(s.list));
            Data.set(s.folder, s[s.folder]);
            Data.set(s.list, s[s.list]);
            Data.set(s.name, s[s.name]);
            Data.lists = [...Data.lists, s.name].sort();
            List.folder(s.folder);
        },
        b: function splitList2(s) {
            let c, n, l;
            s.folder = Data.folders.find((e)=>Data.get(e).includes(s.list));
            c = new Set(Data.get(s.filter));
            n = Data.get(s.list).filter((e)=>c.has(e));
            l = Data.get(s.list).filter((e)=>!c.has(e));
            (s[s.folder] = [...Data.get(s.folder), s.name]),
            (s[s.name] = n),
            (s[s.list] = l);
            if (window.confirm("Split " + n.length + " items from " + s.list + " to " + s.name + "?"))
                Data.splitList.c(s);
        },
        a: function splitList1(aFilter) {
            let s = {};
            s.list = localStorage.l;
            s.filter = aFilter;
            s.name = window.prompt("Name Filtered List", s.list + " of " + s.filter);
            Page.pgHead();
            Data.splitList.b(s);
        },
        head: ()=>{
            let a, b, c;
            a = (l)=>`<input type="button" value="${l}" class="found" onclick="Data.splitList.a('${l}');">`;
            b = (f)=>`<input type="button" value="${f}" class="found" alt="${encodeURIComponent(Data.get(f).map((e)=>a(e)).join(""))}" onclick="Page.pgHead(decodeURIComponent(document.activeElement.getAttribute('alt')));">`;
            c = !localStorage.l ? "No List Open. Unable to Split" : Data.folders.map((e)=>b(e)).join("");
            Page.pgHead(c);
        }
        ,
    },
    addNew: ()=>window.confirm("List") ? Data.addList() : window.confirm("Folder") ? Data.addFolder() : window.confirm("Split") ? Data.splitList.head() : Page.pgHead("unadded."),
    deleteList: ()=>{
        let aList, aFolder, xfunc;
        xfunc = function(x, l, f) {
            let fn;
            if (!x)
                return false;
            fn = Data.get(f).filter((e)=>e !== l);
            Data.set(f, fn);
            Data.lists = Data.lists.filter((e)=>e !== l);
            console.log(Data.get(l));
            localStorage.removeItem(l);
            List.folder(f);
        }
        ;
        aList = localStorage.l;
        aFolder = Data.folders.find((e)=>Data.get(e).includes(aList));
        if (aList)
            xfunc(window.confirm("Delete " + aList + "? Are you sure?"), aList, aFolder);
    }
    ,
    setVidData: (vidData)=>{
        localStorage.clear();
        Data.lists = [];
        Data.folders = [];
        vidData.forEach((e)=>{
            Data.set(e[0], e.slice(1));
            !e[1].search(/\.(avi|mp4|mpeg|ogg|webm|mov)$/) ? Data.folders.push(e[0]) : Data.lists.push(e[0]);
        }
        );
        [...Data.lists, ...Data.folders].forEach((e)=>Data.set(e, [...new Set(Data.get(e))]));
        [Data.lists, Data.folders].forEach((e)=>(e = [...new Set(e)]));
        localStorage.setItem("vl", JSON.stringify([...Data.lists]));
        localStorage.setItem("vf", JSON.stringify([...Data.folders]));
        List.menu();
    }
    ,
    saveVidFile: ()=>{
        Data.lists = [...new Set(Data.lists)];
        let savefile = save.filetext();
        if (!savefile)
            return false;
        let a = document.createElement("a");
        let blob = new Blob([savefile],{
            type: "text / plain",
        });
        let url = URL.createObjectURL(blob);
        a.setAttribute("href", url);
        a.setAttribute("download", "Vids.js");
        a.click();
        setTimeout(function() {
            URL.revokeObjectURL(a.href);
        }, 0);
    }
    ,
    V: async()=>{
        let v, s = new URLSearchParams(location.search);
        v = s.has("v") ? s.has("t") ? s.get("v") + "&t=" + s.get("t") : s.get("v") : !localStorage.v ? await navigator.clipboard.readText() : localStorage.v;
        if (!v.search(/\.(avi|mp4|mpeg|ogg|webm|mov)$/))
            return false;
        if (v.includes("html#"))
            v = v.split("html#").find((e)=>/\.(avi|mp4|mpeg|ogg|webm|mov)/.test(e));
        if (v.includes("html?v="))
            v = v.split("html?v=").find((e)=>/\.(avi|mp4|mpeg|ogg|webm|mov)/.test(e));
        return v;
    }
    ,
    S: async(aVid)=>{
        let v;
        v = decodeURI(aVid);
        if (!v.search(/\.(avi|mp4|mpeg|ogg|webm|mov)$/))
            return false;
        if (v.includes("html#"))
            v = v.split("html#").find((e)=>/\.(avi|mp4|mpeg|ogg|webm|mov)/.test(e));
        localStorage.v = v;
        await navigator.clipboard.writeText(v);
        return v;
    }
    ,
});

function onShow() {
    const aShow = {
        dir: new Set(),
        p: 0,
        q: false,
        tab: undefined,
        win: null,
        arr: ()=>{
            o = Array.from({
                length: 10,
            }, ()=>parseInt(Math.random() * aShow.dir.length));
            n = parseInt(Math.random() * 10);
            return [...aShow.dir][n];
        }
        ,
        abc: ()=>{
            let b = p.pop ? "vPlayer" : "_blank"
              , c = p.pop ? p.p(3, 600, 400) : "";
            return [b, c];
        }
        ,
        step: ()=>{
            let p = document.getElementById("p")
              , c = document.getElementById("c");
            aShow.p++;
            p.textContent = "Played " + aShow.p;
            c.textContent = aShow.dir.size + " unplayed.";
        }
        ,
        next: function(c=aShow.dir.size) {
            let aPlayer, aVid, aWin, pInt;
            (aPlayer = aShow.player && !aShow.player.closed),
            (aVid = c > 10 ? (aVid = aShow.arr()) : c > 3 ? [...aShow.dir][parseInt(Math.random() * aShow.dir.size)] : (aVid = [...aShow.dir][0]));
            aWin = aShow.abc();
            if (!aPlayer)
                aShow.player = window.open(`Vid.html?v=${aVid}`, aWin[0], aWin[1]);
            else
                aShow.player.location.href = `Vid.html?v=${aVid}`;
            aPlayer = aShow.player;
            aShow.dir.delete(aVid);
            document.querySelector('[href$="' + aVid + '"').classList.add("seen");
            aShow.step();
            aPlayer.focus();
            pInt = window.setInterval(()=>{
                if (aShow.q || aShow.player.closed) {
                    aShow.q = false;
                    window.clearInterval(pInt);
                    if (aShow.dir.size > 0) {
                        return aShow.next();
                    } else {
                        aShow.p = 0;
                        aShow.dir = new Set();
                        aShow.player = aShow.player.close();
                        return Page.pgHead();
                    }
                }
            }
            , 500);
        },
        btn: {
            go() {
                this.player.focus();
                this.q = true;
            },
            end() {
                this.dir.clear(),
                (this.q = true);
            },
        },
    }
      , nb = aShow.btn.go.bind(aShow)
      , eb = aShow.btn.end.bind(aShow);
    if (!document.getElementById("vhd"))
        document.body.insertAdjacentHTML("afterbegin", '<div id="vhd"></div>');
    Page.pgLinks().forEach((e)=>aShow.dir.add(vd.vf(e.href)));
    Page.pgHead(`<div id="aShow" style="text-align: center;"><span id="p"></span><input type="button" class="found" id="next" value="Next"><input type="button" class="found" id="end" value="End Show!"><span id="c"></span> </div>`);
    document.getElementById("next").onclick = nb;
    document.getElementById("end").onclick = eb;

    aShow.next();
}
