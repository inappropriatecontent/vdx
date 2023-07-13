document.querySelectorAll('[href^="/data/tabgroups"][href$=".json"]').forEach(async function (a) { let address = await fetch(a, { method: "GET" }), data = await address.json(); Object.defineProperty(a, 'fetch', { value: Object({ address, data }) }) })
/* const isTG = a=>a.pathname.endsWith('json') && (a.origin === location.origin) && a.pathname.startsWith('/data/tabgroups');
const mapTG = a=>{
  const el = document.createElement('link');
  el.setAttribute('rel', 'preload');
  el.setAttribute('as', 'fetch');
  el.toggleAttribute('cors');
  el.setAttribute('type', 'application/json');
  el.setAttribute('href', a.pathname);

  const req = new Request(a.pathname,{
    method: "GET",
    headers: new Headers({
      "content-type": "application/json"
    }),
    mode: "cors",
    cache: "reload",
  });
  a
return{a, el, req}
}
[...document.links].filter(isTG).map(mapTG) */

// class TGroup { static sort(tset) { const arr = Array.from(tset) , intl = new Intl.Collator('en', { ignorePunctuation: true, caseFirst: "false" }) , srt = (a, b) => intl.compare(a.title, b.title); return arr.sort(srt); } #TMap = new Map(); #TAdd = tab => { const u = new URL(tab.url) , v = u.searchParams.get('v') , x = !v ? !u.href ? void 0 : decodeURI(u.href) : v; if (x) return this.#TMap.set(x, tab); } constructor(gData) { if (!gData.type) { return ['meta', gData]; } const { tabs, ...info } = gData; this.info = info; tabs.forEach(this.#TAdd); return [info.id, this.data]; } get id() { return this.info.id.slice('group-'.length); } get name() { return this.info.title; } get tabs() { const tset = this.#TMap.values(); return TGroup.sort(tset); } get data() { const { info } = this; info.tabs = this.tabs; return info; } }

self.test = await fetch(document.links.item(document.links.length - 1).pathname).then(resp => resp.json())
console.log(
  Object.fromEntries(Object.values(test).map(v => new TGroup(v)))
);
document.querySelectorAll('a[href$="json"]').forEach(async a => await fetch(a.pathname).then(resp => resp.json().then(item => a.data = Object.fromEntries(Object.values(item).map(v => new TGroup(v))))));

const isTG = a =>
  a.pathname.endsWith('json') &&
  a.origin === location.origin &&
  a.pathname.startsWith('/data/tabgroups');
const mapTG = a => {
  const el = document.createElement('link');
  el.setAttribute('rel', 'preload');
  el.setAttribute('as', 'fetch');
  el.toggleAttribute('cors');
  el.setAttribute('type', 'application/json');
  el.setAttribute('href', a.pathname);

  const req = new Request(a.pathname, {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    mode: 'cors',
    cache: 'reload'
  });

  const tData = Object.create(null);
  Object.setPrototypeOf(tData, {
    meta: void 0,
    tTabs: new Set()
  });
  a.addEventListener(
    'click',
    function (e) {
      if (!e) return false;
      if (typeof e.stopPropagation === 'function') e.stopPropagation();
      if (typeof e.cancelBubble !== 'undefined') e.cancelBubble = true;
      if (typeof e.preventDefault === 'function') e.preventDefault();
      return e;
    },
    { capture: true }
  );

  return { a, el, req };
};
[...document.links].filter(isTG).map(mapTG);



// for (const aGroup in TGG) {
//   if (aGroup !== 'meta') {
//     if (TGG[aGroup].tabs.map(e => new URL(e.url)).every(u => "file:" == u.protocol)) {
//       const {
//         tabs
//       } = TGG[aGroup]
//         , params = new Map();
//       tabs.sort((a, b) => new Intl.Collator('en', {
//         ignorePunctuation: true
//         , caseFirst: "false"
//       }).compare(a.title, b.title))
//       tabs.forEach(t => params.set(t.title, t));
//       console.log(`${aGroup} : ${TGG[aGroup].tabs.length}, ${params.size}`);
//       TGG[aGroup].tabs = [...params.values()]
//     }
//   }
// }
// console.dir(JSON.stringify(TGG));
// window.alert(JSON.stringify(TGG));
