function sexKeys(e) {
  let pd = function (e) {
    if (!e.defaultPrevented)
      e.preventDefault();
    if (e.cancelable)
      e.stopPropagation();
    return e;
  };

  if (" " === e.key) {
    if (!e.shiftKey) {
      if (e.altKey && (document.activeElement.localName === "a")) {
        vd.wins.push(window.open(decodeURI(document.activeElement.href), `V${vd.wins.length}`, (e.metaKey || e.shiftKey ? p.p(4, 600, 400) : 'popup=0')))
        document.activeElement.classList.add('seen');
      } else {
        document.activeElement.click();
      }
    } else {
      if (!localStorage.l)
        List.menu();
      else if (document.querySelector("a") && !document.querySelector("input")) {
        document.querySelector("div").insertAdjacentHTML("afterend", [Page.MenuBtn(localStorage.f), ...Data.get(localStorage.f).map(e => Page.ListBtn(e))].join(""));
        document.querySelector(`input[value='${localStorage.l}']`).focus();
      } else
        List.close();
    }
    return pd(e);
  }
  if (["ControlLeft", "ControlRight", "AltLeft", "AltRight", "ShiftLeft", "ShiftRight"].includes(e.code))
    return pd(e);
  if (("Backspace" === e.key) && (document.activeElement.localName === "a")) {
    document.activeElement.remove();
    return pd(e);
  }

  if ("\\" === e.key)
    return Page.doTop();
  if ("|" === e.key && !e.altKey)
    return Page.doMargin();
  if ("|" === e.key && e.altKey)
    return Page.nowlink();
  if ("]" === e.key)
    return window.resizeTo([[250, 300, 350].find(w => w > window.outerWidth) || 250], window.outerHeight);
  if ("}" === e.key)
    return window.resizeTo(window.outerWidth, [[125, 250, 400, 550].find(w => w > window.outerHeight) || 125]);;
  if ("[" === e.key)
    return Page.doLeft();
  if ("{" === e.key)
    return Page.doTop();
  if ("=" === e.key)
    return Page.doCenter(3);
  if ("-" === e.key)
    return Page.doCenter(4);
  if ("+" === e.key)
    return Page.doCenter(2);
  if ("_" === e.key)
    return window.moveTo(window.screenLeft, 0);
  if ("c" === e.key)
    Data.S(document.activeElement.href).then(() => document.activeElement.classList.add("seen"));
  if ("C" === e.key)
    Data.S(document.activeElement.href).then((v) => List.watch(v));
  if ("s" === e.key)
    return List.shuffle();
  if ("S" === e.key)
    return List.sort();
  if (e.key === "s" && e.ctrlKey)
    pd(e),
    location.assign('Dir.html');
  if (e.key === "a")
    !e.ctrlKey ? (document.activeElement.tagName === "A") ? List.readall() : false : vd.listen();
  if ("A" === e.key)
    !e.ctrlKey ? List.watch(vd.vf(document.activeElement.href)) : List.readall("toggle");
  if ("x" === e.key)
    return document.activeElement.classList.toggle("seen");
  if ("X" === e.key && e.ctrlKey)
    return Page.isListBtn() ? Data.V().then((v) => Data.eraseVid(v)) : !!document.activeElement.href ? Data.V().then(av => vd.Title(av) === vd.Title(decodeURI(document.activeElement.href)) && List.replace(av, vd.vf(document.activeElement.href))) : window.alert('Nothing');
  if ("X" === e.key && !e.ctrlKey) {
    !Page.isListBtn() && !!localStorage.l && document.querySelector(`input[value='${localStorage.l}']`).focus();
    Data.V().then(av => window.confirm('Delete?\n' + av) && List.remove(av));
  }
  if ("e" === e.key && document.querySelector("a"))
    Page.vidTabs(),
    Page.pgHead(document.links.item(parseInt(document.links.length / 2)).target);
  if ("E" === e.key && document.querySelector("a"))
    List.showList();
  if ("w" === e.key)
    return Page.setPop();
  if ("W" === e.key)
    return onShow();
  if ("z" === e.key)
    Data.V().then(av => window.confirm('Clear?\n' + av) && List.unwatch());
  if ("Z" === e.key)
    return Page.style();
  if ("v" === e.key)
    return Page.isListBtn() ? Data.V().then((v) => List.watch(v)) : Data.S(document.activeElement.href).then((v) => List.watch(v));
  if ("V" === e.key)
    return Page.isListBtn() ? Data.V().then((v) => List.insert(v)) : Data.V().then((v) => List.watch(v));
  if ("t" === e.key)
    document.querySelector("a") ? document.querySelector(`input[value='${localStorage.l}']`).focus() : document.querySelector("input").focus();
  if ("T" === e.key)
    document.querySelector("a") ? List.menu() : List.close();
  if ("f" === e.key)
    return List.first().focus();
  if ("F" === e.key)
    return List.last().focus();
  if ("g" === e.key)
    return List.found().focus();
  if ("r" === e.key)
    return List.random().focus();
  if ("0" === e.key)
    List.show(10);
  if ("1" === e.key)
    return Page.isListBtn() ? List.showList() : List.show(1);
  if ("2" === e.key)
    List.show(2);
  if ("3" === e.key)
    List.show(3, true);
  if ("4" === e.key)
    List.show(4);
  if ("5" === e.key)
    List.show(5);
  if ("o" === e.key)
    !Page.pgLinks() || [...document.links].forEach(e => e.classList.toggle('seen'))
  if ("P" === e.key) {
    return save.next();
  }
  // document.body.innerHTML = `<input type="button" value="Str8" onclick="save.open('S')"><input type="button" value="Gay" onclick="save.open('G')">`;
  if ("~" === e.key)
    cssJS.next();
  if ("`" === e.key)
    cssJS.x();
  if ("a" === e.key && e.ctrlKey && !e.shiftKey)
    localStorage.xr = JSON.stringify([...document.links].map(e => decodeURI(e.href).slice(85))),
    location.assign('Dir.html#a');
  if ("d" === e.key && e.ctrlKey)
    e.metaKey ? !document.querySelector("a") || Page.vidTabs() && Page.pgHead(document.links.item(parseInt(document.links.length / 2)).target) : localStorage.xr = JSON.stringify([...document.links].map(e => decodeURI(e.href).slice(85))) && location.assign('Dir.html');
  if ("D" === e.key)
    e.metaKey ? !Page.pgLinks() || List.showList() : !vd.rx || [...document.links].forEach(link => vd.rx.test(link.href) && link.classList.add('seen'))
  if ("&" === e.key)
    Data.saveVidFile();
  //    if ("$" === e.key)((!xr.dir) || (e.ctrlKey)) ? xr.getdir() : xr.listdir();
  // if ("@" === e.key)
  // Data.addNew();
  if ("#" === e.key)
    List.edit();
  if ("!" === e.key)
    (e.ctrlKey) ? Filter.start(false) : Filter.start();
  if ("Escape" === e.key)
    (!e.shiftKey || vd.fin()) && (!e.ctrlKey || Page.justvids()) && (!document.querySelector('.seen') || document.querySelectorAll('.seen').forEach(e => e.remove()));

  // : e.ctrlKey ? window.watchwin = window.open(document.activeElement.href, 'aPop', p.x)

}
window.onload = function () {
  // /S\/\/Sex/.test(document.URL) && location.replace(document.URL.replace(/S\/\/Sex/, 'S/Sex'));
  document.body.addEventListener("keydown", sexKeys, vd.c);
  window.onmessage = vd.tell;
  window.addEventListener('beforeunload', vd.fin);
  cssJS.theme = sessionStorage.css;
  if (!cssJS.theme)
    cssJS.x();
  window.setTimeout(Page.style, 100);
  if ((window.screenTop > 0) || (window.outerWidth < 375))
    Page.doMargin("x");
  else
    Page.doMargin('margin-left: 0px; margin-right: 0px; margin-top: 0px;');
  p.x();
  if ((!localStorage.vl) || (!localStorage.vf)) {
    document.body.innerHTML = `<input type="button" value="Str8" onclick="save.open('S')"><input type="button" value="Gay" onclick="save.open('G')">`;
  } else {
    Data.lists = Data.get('vl');
    Data.folders = Data.get('vf').filter(f => f != '+Aud');
    if (Data.folders.includes('+MyFiles')) {
        let a = ['+MyFiles', '+nonsex'].flatMap(e => Data.get(e));
        Data.set('+nonsex', a);
        a = Data.folders.filter(f => f !== '+MyFiles');
        Data.folders = a;
        Data.set('vf', a);
        localStorage.removeItem('+MyFiles');
    }
    if (location.search) {
      let x = new URLSearchParams(location.search);
      if (x.has('f'))
        List.folder(x.get('f'));
      else if (x.has('l'))
        List.open(x.get('l'));
      else
        List.menu();
      if (x.has('v'))
        List.watch(x.get('v'));
    } else if (sessionStorage.arr || localStorage.arr) { // let vids = sessionStorage.arr || localStorage.arr
      //   , arrn = sessionStorage.arrn || localStorage.arrn || 'aList'// , link = (arr)=>document.body.innerHTML = [Page.MenuBtn(arrn), arr.map((e)=>Page.vidLink(e)).join('')].join('')
      //   , list = JSON.parse(vids).map(l=>vd.vf(l));
      // document.title = arrn;
      // !sessionStorage.arr || sessionStorage.removeItem('arr');
      // !sessionStorage.arrn || sessionStorage.removeItem('arrn');
      // localStorage.removeItem('l');
      // localStorage.removeItem('f');
      // link(list);
      // Data.lists.unshift(arrn);
      // Data.folders.unshift(`+${arrn}`);
      // Data.set(arrn, list);
      // Data.set(`+${arrn}`, [arrn]);
      // List.menu;
      // !p.pop || Page.setPop();
      // List.folder(`+${arrn}`);
      // return List.open(arrn);
      // List.open(arrn);
      // Page.style();
      // Page.linkNow();
    } else if (sessionStorage.xr) {
      xr.dir = JSON.parse(sessionStorage.xr);
      sessionStorage.removeItem('xr');
      xr.listdir();
    } else
      List.menu();
  }
};