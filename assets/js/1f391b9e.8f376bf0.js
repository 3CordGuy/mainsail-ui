(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3085],{7979:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var a=t(7294),r=t(6010),c=t(8115),l=t(3905),s=t(4159),o=t(571),i=t(9306),u="mdxPageWrapper_3qD3";var d=function(e){var n=e.content,t=n.frontMatter,d=n.metadata,m=t.title,f=t.description,h=t.wrapperClassName,p=t.hide_table_of_contents,v=d.permalink;return a.createElement(c.Z,{title:m,description:f,permalink:v,wrapperClassName:null!=h?h:i.kM.wrapper.mdxPages,pageClassName:i.kM.page.mdxPage},a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,r.Z)("row",u)},a.createElement("div",{className:(0,r.Z)("col",!p&&"col--8")},a.createElement(l.Zo,{components:s.Z},a.createElement(n,null))),!p&&n.toc&&a.createElement("div",{className:"col col--2"},a.createElement(o.Z,{toc:n.toc})))))}},571:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var a=t(7294),r=t(6010);var c=function(e,n,t){var r=(0,a.useState)(void 0),c=r[0],l=r[1];(0,a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),n=e.find((function(e){return e.getBoundingClientRect().top>=t}));if(n){if(n.getBoundingClientRect().top>=t){var a=e[e.indexOf(n)-1];return null!=a?a:n}return n}return e[e.length-1]}();if(a)for(var r=0,s=!1,o=document.getElementsByClassName(e);r<o.length&&!s;){var i=o[r],u=i.href,d=decodeURIComponent(u.substring(u.indexOf("#")+1));a.id===d&&(c&&c.classList.remove(n),i.classList.add(n),l(i),s=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},l="tableOfContents_35-E",s="table-of-contents__link";function o(e){var n=e.toc,t=e.isChild;return n.length?a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},n.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(o,{isChild:!0,toc:e.children}))}))):null}var i=function(e){var n=e.toc;return c(s,"table-of-contents__link--active",100),a.createElement("div",{className:(0,r.Z)(l,"thin-scrollbar")},a.createElement(o,{toc:n}))}},6979:function(e,n,t){"use strict";var a=t(7294),r=t(4184),c=t.n(r),l=t(5977),s=t(2263),o=t(8084);n.Z=function(e){var n=(0,a.useRef)(!1),r=(0,a.useRef)(null),i=(0,l.k6)(),u=(0,s.Z)().siteConfig,d=(void 0===u?{}:u).baseUrl,m=(0,o.usePluginData)("docusaurus-lunr-search"),f=function(){n.current||(Promise.all([fetch(""+d+m.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+d+m.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([t.e(9878),t.e(4452)]).then(t.bind(t,7780)),Promise.all([t.e(532),t.e(3343)]).then(t.bind(t,3343))]).then((function(e){var n=e[0],t=e[1],a=e[2].default;0!==n.length&&function(e,n,t){new t({searchDocs:e,searchIndex:n,inputSelector:"#search_input_react",handleSelected:function(e,n,t){var a=d+t.url;document.createElement("a").href=a,i.push(a)}})}(n,t,a)})),n.current=!0)},h=(0,a.useCallback)((function(n){r.current.contains(n.target)||r.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return a.createElement("div",{className:"navbar__search",key:"search-box"},a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:f,onMouseOver:f,onFocus:h,onBlur:h,ref:r}))}}}]);