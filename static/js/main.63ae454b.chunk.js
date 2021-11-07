(this["webpackJsonpdrink-base"]=this["webpackJsonpdrink-base"]||[]).push([[0],{100:function(e,t,i){},101:function(e,t,i){},102:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i(3),r=i(36),l=i.n(r),c=i(11),s=i(4),o=i(6),u=i.n(o),d=i(13),j=i(2),h=i(16),p=i.n(h),b=(i(61),i.p+"static/media/logo.06fb4724.svg"),m=i(0),f=function(){var e=Object(s.f)();return Object(m.jsx)("div",{className:"Logo",children:Object(m.jsx)("div",{className:"img-wrapper",children:Object(m.jsx)(a.b,{to:e.location.pathname.includes("/drinks-base/ingredients")?"/drinks-base/ingredients":"/drinks-base",children:Object(m.jsx)("img",{src:b,alt:"logo"})})})})},O=(i(71),i(14)),g=function(e){return e.split("/").join("")},v=function(e,t){var i=[];void 0!==e&&(i=Object(O.a)(e));var n=[];return i.forEach((function(e){var i=[];i.push(g(e.strAlcoholic)),i.push(g(e.strCategory)),i.push(g(e.strGlass)),i.push(g(e.makeDifficulty)),!0===t.filter((function(e){return!1===!isNaN(e)})).every((function(e){return i.includes(e)}))&&n.push(e)})),n},k=function(e,t){for(var i=[],n=1;n<=15;n++){var a=e[t]["strIngredient"+n];null!==a&&""!==a&&i.push(a.toLowerCase())}return i},x=function(e,t){for(var i=[],n=Object.values(t).map((function(e){return e.toLowerCase()})),a=function(t){n.every((function(i){return k(e,t).includes(i)}))&&i.push(e[t])},r=0;r<e.length;r++)a(r);return i},C=function(e){var t=[];void 0!==e&&(t=e),Object.keys(t).forEach((function(e){var i=k(t,e).length;t[e].ingredientCount="items-".concat(i);var n=null;n=i<=3?"1-easy":i<=6?"2-medium":"3-hard",t[e].makeDifficulty=n;var a=t[e].strGlass.split(" ")[1];if(void 0!==a){var r=a.toLowerCase(),l=t[e].strGlass.split(" ");l[1]=r;var c=l.join(" ");t[e].strGlass=c}}))},y=function(e,t,i){var n=e.split("");return n.splice(t,i),n=n.join("")},S=function(e,t,i){if("&"===t[1])e.push(y(t,1,1));else if("&"===t[t.length-1])e.push(y(t,t.length-1,1));else{var n=t.replace("&&","&");e.push("".concat(i).concat(n))}},D=function(e){for(var t=[],i=0;i<e;i++)t.push(Object(m.jsx)("i",{style:{color:"#F9E990",textShadow:"0 0 0.06em #000"},className:"fas fa-star"},i));return Object(m.jsx)("span",{children:t.map((function(e){return e}))})},N=function(e){for(var t=[],i=0;i<e;i++)t.push(Object(m.jsx)("i",{style:{color:"#F9E990",textShadow:"-0.06em 0 #000, 0 0.06em #000, 0.06em 0 #000, 0 -0.06em #000"},className:"fas fa-star"},"first".concat(i)));for(var n=0;n<3-e;n++)t.push(Object(m.jsx)("i",{style:{color:"#fff",textShadow:"-0.06em 0 #000, 0 0.06em #000, 0.06em 0 #000, 0 -0.06em #000"},className:"fas fa-star"},"second".concat(n)));return Object(m.jsx)("span",{children:t.map((function(e){return e}))})},w=function(){var e=Object(s.h)().drinkId,t=Object(n.useState)({}),i=Object(j.a)(t,2),a=i[0],r=i[1];Object(n.useEffect)((function(){(function(){var t=Object(d.a)(u.a.mark((function t(){var i,n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php",{params:{i:e}});case 2:i=t.sent,n=i.data,a=n.drinks,C(a),r(a[0]);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var l=function(e){for(var t=[],i=1;i<=15;i++){var n=e["strIngredient"+i],a=e["strMeasure"+i];if(null!==n&&void 0!==n&&""!==n){var r=[];r.push(n),null===a?r.push("as per preference"):r.push(a),t.push(r)}}return t}(a).map((function(e){return Object(m.jsx)("li",{className:"ingr-item",children:Object(m.jsxs)("span",{className:"ingr-text",children:[e[0]," - ",e[1]]})},e)}));return Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{}),0!==Object.entries(a).length?Object(m.jsxs)("div",{className:"DrinkDetails",children:[Object(m.jsxs)("div",{className:"tags-list",children:[Object(m.jsx)("span",{className:"tag",title:"Category",children:a.strCategory}),Object(m.jsx)("span",{className:"tag",title:"Type",children:a.strAlcoholic}),Object(m.jsx)("span",{className:"tag",title:"Glass",children:a.strGlass}),Object(m.jsx)("span",{className:"tag",title:"Difficulty",children:N(void 0===a.makeDifficulty?[]:a.makeDifficulty[0])})]}),Object(m.jsx)("div",{className:"title",children:a.strDrink}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("div",{className:"main-image",children:Object(m.jsx)("img",{alt:"drink",src:a.strDrinkThumb})}),Object(m.jsxs)("div",{className:"main-text",children:[Object(m.jsx)("div",{className:"ingredients-title",children:"Ingredients:"}),Object(m.jsx)("ul",{className:"ingr-list",children:l}),Object(m.jsx)("div",{className:"ingredients-title extra-space",children:"Steps to Make It:"}),Object(m.jsx)("ul",{className:"step-list",children:function(){if(void 0!==a.strInstructions)return a.strInstructions.replace(/([.?!])\s*(?=[A-Z])/g,"$1|").split("|").map((function(e){return Object(m.jsx)("li",{className:"step-item",children:Object(m.jsx)("span",{className:"step-text",children:e})},e)}))}()})]})]})]}):null]})},P=i(10),B=i.n(P),L=function(){var e=Object(d.a)(u.a.mark((function e(t,i){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(t,{params:{s:i}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),T=function(){var e=Object(d.a)(u.a.mark((function e(t,i){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(t,{params:{i:i}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),A=(i(85),i(86),function(){return Object(m.jsxs)("span",{children:[Object(m.jsx)("i",{className:"fas fa-info-circle info-tooltip"}),Object(m.jsx)("div",{className:"tooltip-text up-arrow",children:"You can select up to three different ingredients for your search."})]})}),M=function(){var e=Object(s.f)().location.pathname.includes("/drinks-base/ingredients");return Object(m.jsxs)("div",{className:"NavigationBar",children:[Object(m.jsx)(a.b,{to:"/drinks-base",className:"navbutton ".concat(!1===e?"disabled-link nav-active":"nav-inactive"),children:"By name"}),Object(m.jsx)(a.b,{to:"/drinks-base/ingredients",className:"navbutton ".concat(e?"disabled-link nav-active":"nav-inactive"),children:"By ingredients"}),e?Object(m.jsx)(A,{}):null]})},R=(i(87),function(e){var t=e.filterData,i=e.filterCategory,a=e.unlockCheckbox,r=e.prefilteredData,l=Object(n.useState)(!0),c=Object(j.a)(l,2),o=c[0],u=c[1],d=Object(s.g)(),h=Object(s.f)(),p=d.pathname,b=d.search,f=B.a.parse(d.search);Object(n.useEffect)((function(){var e=Object.values(f).flat(1).includes(g(t[0]));u(!e)}),[f]);var O;return Object(m.jsxs)("div",{className:"CheckBox",children:[Object(m.jsx)("input",{type:"checkbox",checked:!o,value:t[0],onChange:function(){u(!o);var e=b.substring(0,7),n=b.replace(e,""),a="".concat(p,"?page=1&").concat(i,"=").concat(g(t[0])),r="?page=1".concat(n,"&").concat(i,"=").concat(g(t[0]));if(!0===o)""===b?h.push(a):h.push(r);else{var l=b.replaceAll("%20"," ").replace("".concat(i,"=").concat(g(t[0])),"");S(h,l,p)}},disabled:a,id:t[0]}),Object(m.jsxs)("label",{htmlFor:t[0],children:[(O=t[0],"1-easy"===O?D(1):"2-medium"===O?D(2):"3-hard"===O?D(3):t[0])," ".concat(function(){var e="";return r.forEach((function(i){t[0]===i[0]&&(e=i[1])})),""===e?"":"(".concat(e,")")}())]})]})}),G=(i(88),function(e){var t=e.type,i=e.drinksData,a=e.unfilteredDrinksData,r=Object(n.useState)(!0),l=Object(j.a)(r,2),s=l[0],o=l[1],u=function(e,i){for(var n=[],a={},r=0;r<e.length;r++)n.push(e[r][i]);for(var l=0;l<n.length;l++)a[n[l]]=1+(a[n[l]]||0);var s=Object.entries(a).sort((function(e,t){return t[1]-e[1]}));if("makeDifficulty"===t){var o=Object(c.a)({},a);return Object.entries(o).sort((function(e,t){return t[0][0]-e[0][0]}))}return s},d=u(i,t),h=u(a,t).map((function(e,i){var n=!d.flat().includes(e[0]);return Object(m.jsx)(R,{filterData:e,filterCategory:t,unlockCheckbox:n,prefilteredData:d},i)})),p=null;return Object(m.jsxs)("div",{className:"FilterBlock",children:[Object(m.jsx)("div",{className:"block",children:!1===s?(p="show less -",h):(p="view all +",h.slice(0,3))}),Object(m.jsx)("div",{className:"button",children:h.length>3?Object(m.jsx)("span",{onClick:function(){return o(!s)},children:p}):null})]})}),E=(i(89),["makeDifficulty","strAlcoholic","strCategory","strGlass"]),F=function(e){var t=e.drinksData,i=e.unfilteredDrinksData,n=Object(s.f)(),a=E.map((function(e,n){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"header",children:(a=e,"makeDifficulty"===a?"Difficulty":"strAlcoholic"===a?"Drink Type":"strCategory"===a?"Category":"strGlass"===a?"Glass Type":void 0)}),Object(m.jsx)(G,{type:e,drinksData:t,unfilteredDrinksData:i})]},n);var a}));return Object(m.jsxs)("div",{className:"SideBar",children:[Object(m.jsxs)("div",{className:"frontText",children:["Refine your search:",function(){var e=n.location.search,t=e.substring(0,7);return""!==e.replace(t,"")}()?Object(m.jsx)("span",{onClick:function(){n.push("".concat(n.location.pathname,"?page=1"))},className:"clearAllButton",children:"clear all"}):null]}),Object(m.jsx)("div",{className:"sections",children:a})]})},W=(i(90),function(e){var t,i=e.drink,n=e.imageLoaded;return Object(m.jsx)(a.b,{to:{pathname:"/drinks-base/details/".concat(i.idDrink),state:{drink:i}},children:Object(m.jsxs)("div",{className:"DrinkThumbnail",children:[Object(m.jsx)("div",{className:"image-wrapper",children:Object(m.jsx)("img",{onLoad:n,src:"".concat(i.strDrinkThumb,"/preview"),alt:"Drink"})}),Object(m.jsxs)("div",{className:"info-wrapper",children:[Object(m.jsx)("div",{className:"title",children:i.strDrink}),Object(m.jsxs)("div",{className:"info",children:[Object(m.jsxs)("div",{className:"ingredients-tab",children:[Object(m.jsx)("i",{className:"fas fa-cocktail"})," ".concat((t=i.ingredientCount,t.replace("items-",""))),Object(m.jsx)("div",{className:"ing-text",children:"ingredients"})]}),Object(m.jsxs)("div",{className:"stars-tab",children:[Object(m.jsx)("div",{className:"stars",children:N(i.makeDifficulty[0])}),Object(m.jsx)("div",{className:"stars-text",children:"difficulty"})]})]})]})]})})}),q=(i(91),i(92),function(e){for(var t=e.resetSpinnerPag,i=e.drinksPerPage,n=e.totalDrinks,a=e.paginate,r=[],l=Object(s.g)(),c=B.a.parse(l.search),o=l.pathname,u=l.search,d=Object(s.f)(),j="?page=",h=u.substring(0,7),p=u.replace(h,""),b=u[6],f=parseInt(b,10),O=Math.ceil(n.length/i),g=1;g<=O;g++)r.push(g);var v=function(e){return void 0===c.page&&1===e||parseInt(c.page,10)===e?"active-page":void 0},k=function(e){return void 0===c.page&&1===e||parseInt(c.page,10)===e?"disabled":void 0};return Object(m.jsx)(m.Fragment,{children:O>1?Object(m.jsx)("div",{className:"Pagination-wrap",children:Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(m.jsx)("li",{onClick:function(){d.push("".concat(j).concat(f-1).concat(p)),t(),window.scrollTo(0,0)},className:"page-item",children:Object(m.jsx)("a",{className:"page-link page-nav-buttons ".concat(function(){if(void 0===c.page||1===parseInt(c.page,10))return"pagination-btn-hidden"}()),href:void 0,children:"Prev"})}),r.map((function(e){return Object(m.jsx)("li",{className:"page-item page-nr ".concat(k(e)),children:Object(m.jsx)("a",{onClick:function(i){return function(e,i){e.preventDefault(),a(i);var n=u.replace("?page=".concat(c.page),"");d.push("".concat(o,"?page=").concat(i).concat(n)),t(),window.scrollTo(0,0)}(i,e)},href:void 0,className:"page-link ".concat(v(e)),children:Object(m.jsx)("span",{children:e})})},e)})),Object(m.jsx)("li",{onClick:function(){void 0===b?d.push("".concat(j,"2").concat(p)):d.push("".concat(j).concat(f+1).concat(p)),t(),window.scrollTo(0,0)},className:"page-item",children:Object(m.jsx)("a",{className:"page-link page-nav-buttons ".concat(function(){var e=O;if(parseInt(c.page,10)===e)return"pagination-btn-hidden"}()),href:void 0,children:"Next"})})]})})}):Object(m.jsx)("div",{className:"pag-placeholder"})})}),I=function(e){var t=e.resetSpinnerPag,i=e.drinksData,n=e.imageLoaded,a=e.paginate,r=e.drinksPerPage,l=e.totalDrinksData,c=i.map((function(e){return Object(m.jsx)(W,{drink:e,imageLoaded:n},e.idDrink)}));return Object(m.jsxs)("div",{className:"DrinksList",children:[c,Object(m.jsx)(q,{resetSpinnerPag:t,paginate:a,drinksPerPage:r,totalDrinks:l})]})},J=(i(93),function(){return Object(m.jsx)("div",{className:"spinner-border main-spinner",role:"status",children:Object(m.jsx)("span",{className:"sr-only",children:"Loading..."})})}),V=(i(94),i(34),function(e){var t=e.searchTerm,i=Object.values(t).length,n=function(e,t,i){if(1===i)return Object(m.jsx)("span",{children:Object(m.jsx)("span",{className:"termBold",children:e})},t);if(2===i){if(0===t)return Object(m.jsx)("span",{children:Object(m.jsx)("span",{className:"termBold",children:e})},t);if(1===t)return Object(m.jsxs)("span",{children:[Object(m.jsx)("span",{children:" and "})," ",Object(m.jsx)("span",{className:"termBold",children:e})]},t)}else if(3===i){if(0===t)return Object(m.jsx)("span",{children:Object(m.jsx)("span",{className:"termBold",children:e})},t);if(1===t)return Object(m.jsxs)("span",{children:[Object(m.jsx)("span",{children:", "})," ",Object(m.jsx)("span",{className:"termBold",children:e})]},t);if(2===t)return Object(m.jsxs)("span",{children:[Object(m.jsx)("span",{children:" and "}),Object(m.jsx)("span",{className:"termBold",children:e})]},t)}},a=Object.values(t).map((function(e,t){return Object(m.jsx)("span",{children:n(e,t,i)},e)}));return Object(m.jsx)("div",{className:"SearchTermBlock",children:a})}),H=(i(95),function(e){var t=e.drinksData,i=e.drinksQuantity,n=Object(s.h)(),a=function(){return 1===i?"drink":"drinks"};return Object(m.jsx)("div",{className:0===t.length?"InformationTab-zero":"InformationTab",children:0!==t.length?Object(m.jsxs)(m.Fragment,{children:[i," ",a()," found that match ",Object(m.jsx)(V,{searchTerm:n})]}):Object(m.jsxs)(m.Fragment,{children:["0 ",a()," found that match ",Object(m.jsx)(V,{searchTerm:n})]})})}),K=(i(96),i(97),function(){var e=Object(s.f)(),t=Object(s.g)(),i=t.pathname,n=t.search,a=B.a.parse(t.search),r=Object.entries(a),l=function(e){for(var t=e,i=0;i<e.length;i++)"page"===t[i][0]&&t.splice(i,1);return t},c=function(e){var t=e;return!0===t.includes("  ")?t.replaceAll("  "," / "):t.includes("OtherUnknown")?"Other/Unknown":t.includes("MargaritaCoupette glass")?"Margarita/Coupette glass":e},o=l(r).map((function(t,a){return Object(m.jsx)("span",{className:"Tag",onClick:function(){return function(t){var a="".concat(t[0],"=").concat(t[1]),r=n.replaceAll("%20"," ").replace(a,"");S(e,r,i)}(t)},children:"makeDifficulty"===t[0]?D(t[1][0]):"".concat(c(t[1]))},a)}));return Object(m.jsxs)("div",{className:"QueryTermBlock",children:[Object(m.jsx)("span",{className:"title",children:0!==l(r).length?"Sorted By:":""}),Object(m.jsx)("span",{children:o})]})}),z=function(e){var t=e.resetSpinnerPag,i=e.paginate,n=e.drinksPerPage,a=e.totalDrinksData,r=e.imageLoaded,l=e.loading,c=e.drinksData,s=e.unfilteredDrinksData;return Object(m.jsxs)("div",{className:"DrinksDisplay",children:[Object(m.jsx)("div",{style:{display:l?"block":"none"},children:Object(m.jsx)(J,{})}),Object(m.jsxs)("div",{style:{display:l?"none":"block"},children:[0!==c.length?Object(m.jsx)(K,{}):null,Object(m.jsx)(H,{drinksData:c,drinksQuantity:a.length}),Object(m.jsxs)("div",{style:{display:"flex"},children:[0!==c.length?Object(m.jsx)(F,{drinksData:a,unfilteredDrinksData:s}):null,Object(m.jsx)(I,{resetSpinnerPag:t,paginate:i,drinksPerPage:n,totalDrinksData:a,drinksData:c,imageLoaded:r})]})]})]})},Y=(i(35),function(e){var t=e.resetDrinkList,i=e.resetSpinner,r=Object(n.useState)(""),l=Object(j.a)(r,2),c=l[0],o=l[1],u=Object(s.f)(),d=u.location.pathname,h=Object(n.useState)(""),p=Object(j.a)(h,2),b=p[0],f=p[1],O=function(){return""===c||c.includes("%")?"/drinks-base":"/drinks-base/".concat(c)};Object(n.useEffect)((function(){""===c&&f("Enter a name of a drink..."),(c.includes("/")||c.includes("?")||c.includes("#")||c.includes("%")||c.includes("details"))&&o("")}),[c]),Object(n.useEffect)((function(){var e=d.replace("/drinks-base","");if("/drinks-base"!==d){var t=e.split("/")[1];o(t)}}),[]);var g=function(){o("")};return Object(m.jsxs)("div",{className:"SearchBar",children:[Object(m.jsx)("input",{onKeyPress:function(e){13===e.charCode&&(t(),i(),u.push(O()))},value:c,onChange:function(e){o(e.target.value)},type:"text",placeholder:b}),Object(m.jsxs)(a.b,{to:O,onClick:function(){t(),i()},className:"button",children:[Object(m.jsx)("span",{className:"default-btn-txt",children:"SEARCH"}),Object(m.jsx)("span",{className:"mobile-btn-txt",children:Object(m.jsx)("i",{className:"fas fa-search"})}),"            "]}),""===c||void 0===c?null:Object(m.jsx)("i",{onClick:g,className:"fas fa-times clear-icon"})]})}),Q=function(){return[{title:"151 proof rum"},{title:"7-up"},{title:"Absinthe"},{title:"Absolut citron"},{title:"Absolut Kurant"},{title:"Absolut Peppar"},{title:"Absolut Vodka"},{title:"Advocaat"},{title:"Aejo rum"},{title:"Aftershock"},{title:"Agave syrup"},{title:"Ale"},{title:"Allspice"},{title:"Almond Extract"},{title:"Almond flavoring"},{title:"Almond"},{title:"Amaretto"},{title:"Angelica Root"},{title:"Angostura Bitters"},{title:"Anis"},{title:"Anise"},{title:"Anisette"},{title:"Aperol"},{title:"Apfelkorn"},{title:"Apple Brandy"},{title:"Apple Cider"},{title:"Apple Juice"},{title:"Apple schnapps"},{title:"Apple"},{title:"Applejack"},{title:"Apricot Brandy"},{title:"Apricot nectar"},{title:"Apricot"},{title:"Aquavit"},{title:"Asafoetida"},{title:"Anejo rum"},{title:"Baby Plum Tomatoes"},{title:"Bacardi Limon"},{title:"Bacardi"},{title:"Bacon"},{title:"Bailey's irish cream"},{title:"Baileys irish cream"},{title:"Banana liqueur"},{title:"Banana rum"},{title:"Banana syrup"},{title:"Banana"},{title:"Barenjager"},{title:"Basil"},{title:"Beef bouillon"},{title:"Beef Stock"},{title:"Beer"},{title:"Benedictine"},{title:"Berries"},{title:"Bitter lemon"},{title:"Bitters"},{title:"Black Pepper"},{title:"Black rum"},{title:"Black Sambuca"},{title:"Blackberries"},{title:"Blackberry Brandy"},{title:"Blackberry schnapps"},{title:"Blackcurrant cordial"},{title:"Blackcurrant schnapps"},{title:"Blackcurrant squash"},{title:"Blended Whiskey"},{title:"Blue Curacao"},{title:"Blue Maui"},{title:"Blueberries"},{title:"Blueberry schnapps"},{title:"Bourbon"},{title:"Bow Tie Pasta"},{title:"Bramley Apples"},{title:"Brandy"},{title:"Bread"},{title:"Brown Rice"},{title:"Brown Sugar"},{title:"Butter"},{title:"Butterscotch schnapps"},{title:"Cachaca"},{title:"Calvados"},{title:"Campari"},{title:"Canadian whisky"},{title:"Candy"},{title:"Cantaloupe"},{title:"Caramel coloring"},{title:"Carbonated soft drink"},{title:"Carbonated water"},{title:"Cardamom"},{title:"Carrot"},{title:"Caster Sugar"},{title:"Cayenne pepper"},{title:"Celery salt"},{title:"Celery"},{title:"Chambord raspberry liqueur"},{title:"Champagne"},{title:"Cheese"},{title:"Cherries"},{title:"Cherry Brandy"},{title:"Cherry cola"},{title:"Cherry Grenadine"},{title:"Cherry Heering"},{title:"Cherry juice"},{title:"Cherry liqueur"},{title:"Cherry"},{title:"Chicken Breasts"},{title:"Chicken Stock"},{title:"Chicken"},{title:"Chilled Butter"},{title:"Chinese Broccoli"},{title:"Chocolate ice-cream"},{title:"Chocolate liqueur"},{title:"Chocolate milk"},{title:"Chocolate syrup"},{title:"Chocolate"},{title:"Chopped Garlic"},{title:"Chopped Onion"},{title:"Chopped Tomatoes"},{title:"Cider"},{title:"Cinnamon schnapps"},{title:"Cinnamon"},{title:"Citrus vodka"},{title:"Clamato juice"},{title:"Clove"},{title:"Cloves"},{title:"Club Soda"},{title:"Coca-Cola"},{title:"Cocktail Olive"},{title:"Cocktail onion"},{title:"Cocoa Powder"},{title:"Coconut cream"},{title:"Coconut liqueur"},{title:"Coconut Milk"},{title:"Coconut rum"},{title:"Coconut syrup"},{title:"Coffee brandy"},{title:"Coffee liqueur"},{title:"Coffee"},{title:"Coffeemate"},{title:"Cognac"},{title:"Cointreau"},{title:"Cola"},{title:"Cold Water"},{title:"Condensed milk"},{title:"Coriander Leaves"},{title:"Coriander"},{title:"Corn Starch"},{title:"Corn syrup"},{title:"Corn Tortillas"},{title:"Cornstarch"},{title:"Corona"},{title:"Courgette"},{title:"Cranberries"},{title:"Cranberry Juice"},{title:"Cranberry liqueur"},{title:"Cranberry vodka"},{title:"Cream of Coconut"},{title:"Cream Sherry"},{title:"Cream soda"},{title:"Cream"},{title:"Creme de Almond"},{title:"Creme De Banane"},{title:"Creme de Cacao"},{title:"Creme de Cassis"},{title:"Creme de Noyaux"},{title:"Creme Fraiche"},{title:"Crown Royal"},{title:"Crystal light"},{title:"Cubed Feta Cheese"},{title:"Cucumber"},{title:"Cumin powder"},{title:"Cumin seed"},{title:"Curacao"},{title:"Cynar"},{title:"Daiquiri mix"},{title:"Dark Chocolate"},{title:"Dark Creme de Cacao"},{title:"Dark Rum"},{title:"Dark Soy Sauce"},{title:"demerara sugar"},{title:"Digestive Biscuits"},{title:"Dijon Mustard"},{title:"Doner Meat"},{title:"Dr Pepper"},{title:"Dr. Pepper"},{title:"Drambuie"},{title:"Dried Oregano"},{title:"Dry Vermouth"},{title:"Dubonnet blanc"},{title:"Dubonnet Rouge"},{title:"Egg White"},{title:"Egg Yolk"},{title:"Egg"},{title:"Eggnog"},{title:"Eggs"},{title:"Enchilada Sauce"},{title:"English Mustard-Small .png"},{title:"Erin Cream"},{title:"Espresso"},{title:"Everclear"},{title:"Extra Virgin Olive Oil"},{title:"Fanta"},{title:"Farfalle"},{title:"Fennel Seeds"},{title:"Feta Cheese"},{title:"Firewater"},{title:"Flaked Almonds"},{title:"Flour"},{title:"Food coloring"},{title:"Forbidden Fruit"},{title:"Frangelico"},{title:"Free-range Egg"},{title:"Free-range Eggs"},{title:"Fresca"},{title:"Fresh Basil"},{title:"Fresh Lemon Juice"},{title:"Freshly Chopped Parsley"},{title:"Fries"},{title:"Fruit juice"},{title:"Fruit punch"},{title:"Fruit"},{title:"Galliano"},{title:"Garlic Sauce"},{title:"Garlic"},{title:"Gatorade"},{title:"Gin"},{title:"Ginger Ale"},{title:"Ginger beer"},{title:"Ginger"},{title:"Glycerine"},{title:"Godiva liqueur"},{title:"Gold rum"},{title:"Gold Tequila"},{title:"Goldschlager"},{title:"Gouda Cheese"},{title:"Grain Alcohol"},{title:"Grand Marnier"},{title:"Granulated Sugar"},{title:"Grape juice"},{title:"Grape soda"},{title:"Grapefruit Juice"},{title:"Grapes"},{title:"Grated Cheese"},{title:"Green Chartreuse"},{title:"Green Creme de Menthe"},{title:"Green Ginger Wine"},{title:"Green Olives"},{title:"Green Red Lentils"},{title:"Grenadine"},{title:"Ground Almonds"},{title:"Ground Ginger"},{title:"Guava juice"},{title:"Guinness stout"},{title:"Guinness"},{title:"Half-and-half"},{title:"Hawaiian punch"},{title:"Hazelnut liqueur"},{title:"Heavy cream"},{title:"Honey"},{title:"Hooch"},{title:"Hoopers Hooch"},{title:"Hot Beef Stock"},{title:"Hot Chocolate"},{title:"Hot Damn"},{title:"Hot Sauce"},{title:"Hotsauce"},{title:"Hpnotiq"},{title:"Ice-Cream"},{title:"Ice"},{title:"Iced tea"},{title:"Irish cream"},{title:"Irish Whiskey"},{title:"Italian Seasoning"},{title:"Jack Daniels"},{title:"Jello"},{title:"Jelly"},{title:"Jgermeister"},{title:"Jim Beam"},{title:"Johnnie Walker"},{title:"Jagermeister"},{title:"Kahlua"},{title:"Key Largo Schnapps"},{title:"Kirschwasser"},{title:"Kiwi liqueur"},{title:"Kiwi"},{title:"Kool-Aid"},{title:"Kummel"},{title:"Lager"},{title:"Lasagne Sheets"},{title:"Lasagne"},{title:"Lean Minced Beef"},{title:"Lemon Juice"},{title:"Lemon Peel"},{title:"Lemon soda"},{title:"Lemon vodka"},{title:"Lemon-lime soda"},{title:"lemon-lime"},{title:"lemon"},{title:"Lemonade"},{title:"Lentils"},{title:"Lettuce"},{title:"Licorice Root"},{title:"Light Cream"},{title:"Light Rum"},{title:"Lillet"},{title:"Lime juice cordial"},{title:"Lime Juice"},{title:"Lime liqueur"},{title:"Lime peel"},{title:"Lime vodka"},{title:"Lime"},{title:"Limeade"},{title:"Madeira"},{title:"Malibu Rum"},{title:"Malt Vinegar"},{title:"Mandarin"},{title:"Mandarine napoleon"},{title:"Mango"},{title:"Maple syrup"},{title:"Maraschino cherry juice"},{title:"Maraschino Cherry"},{title:"Maraschino Liqueur"},{title:"Margarita mix"},{title:"Marjoram leaves"},{title:"Marshmallows"},{title:"Maui"},{title:"Melon liqueur"},{title:"Melon vodka"},{title:"Mezcal"},{title:"Midori melon liqueur"},{title:"Midori-Small .png"},{title:"Milk"},{title:"Minced Beef"},{title:"Minced Garlic"},{title:"Mint syrup"},{title:"Mint"},{title:"Mountain Dew"},{title:"Mozzarella Balls"},{title:"Mozzarella"},{title:"Mushroom"},{title:"Mushrooms"},{title:"Mustard"},{title:"Nutmeg"},{title:"Nuts"},{title:"Olive Oil"},{title:"Olive"},{title:"Onion"},{title:"Onions"},{title:"Orange Bitters"},{title:"Orange Curacao"},{title:"Orange Juice"},{title:"Orange liqueur"},{title:"Orange Peel"},{title:"Orange rum"},{title:"Orange Soda"},{title:"Orange spiral"},{title:"Orange vodka"},{title:"Orange"},{title:"Oregano"},{title:"Oreo cookie"},{title:"Orgeat Syrup"},{title:"Ouzo"},{title:"Oyster Sauce"},{title:"Papaya juice"},{title:"Papaya"},{title:"Parfait d' amour"},{title:"Parmesan Cheese"},{title:"Parmesan"},{title:"Parmigiano-Reggiano"},{title:"Parsley"},{title:"Passion fruit juice"},{title:"Passion fruit syrup"},{title:"Passoa"},{title:"Peach brandy"},{title:"Peach juice"},{title:"Peach liqueur"},{title:"Peach Nectar"},{title:"Peach Schnapps"},{title:"Peach Vodka"},{title:"Peach"},{title:"Peachtree schnapps"},{title:"Peanut Oil"},{title:"Peas"},{title:"Penne Rigate"},{title:"Pepper"},{title:"Peppermint extract"},{title:"Peppermint Schnapps"},{title:"Pepsi Cola"},{title:"Pernod"},{title:"Peychaud bitters"},{title:"Pina colada mix"},{title:"Pineapple Juice"},{title:"Pineapple rum"},{title:"Pineapple vodka"},{title:"Pineapple-orange-banana juice"},{title:"Pineapple"},{title:"Pink lemonade"},{title:"Pisang Ambon"},{title:"Pisco"},{title:"Pina colada"},{title:"Plain Chocolate"},{title:"Plain Flour"},{title:"Plum Tomatoes"},{title:"Plums"},{title:"Port"},{title:"Potato"},{title:"Potatoes"},{title:"Powdered Sugar"},{title:"Prawns"},{title:"Purple passion"},{title:"Raisins"},{title:"Raspberry cordial"},{title:"Raspberry Jam"},{title:"Raspberry juice"},{title:"Raspberry liqueur"},{title:"Raspberry schnapps"},{title:"Raspberry syrup"},{title:"Raspberry Vodka"},{title:"Raw King Prawns"},{title:"Red Chile Flakes"},{title:"Red Chili Flakes"},{title:"Red Hot Chili Flakes"},{title:"Red Lentils"},{title:"Red Wine"},{title:"Rhubarb"},{title:"Ricard"},{title:"Rice Stick Noodles"},{title:"Rock Salt"},{title:"Root beer schnapps"},{title:"Root beer"},{title:"Roses sweetened lime juice"},{title:"Rosewater"},{title:"Rum"},{title:"Rumple Minze"},{title:"Rye whiskey"},{title:"Sake"},{title:"Salmon"},{title:"Salt"},{title:"Sambuca"},{title:"Sarsaparilla"},{title:"Schnapps"},{title:"Schweppes Lemon"},{title:"Schweppes Russchian"},{title:"Schweppes Russchiani"},{title:"Scotch"},{title:"Sesame Seed"},{title:"Sherbet"},{title:"Sherry"},{title:"Shredded Cheese"},{title:"Shredded Monterey Jack Cheese"},{title:"Sirup of roses"},{title:"Sloe Gin"},{title:"Small.png"},{title:"Soda Water"},{title:"Sour Apple Pucker"},{title:"Sour Mix"},{title:"Southern Comfort"},{title:"Soy Milk"},{title:"Soy Sauce"},{title:"Soya Milk"},{title:"Soya Sauce"},{title:"Spaghetti"},{title:"Spiced Rum"},{title:"Spinach"},{title:"Sprite"},{title:"Squeezed Orange"},{title:"Squirt"},{title:"Stir-fry Vegetables"},{title:"Strawberries"},{title:"Strawberry juice"},{title:"Strawberry liqueur"},{title:"Strawberry Schnapps"},{title:"Strawberry syrup"},{title:"Sugar Syrup"},{title:"Sugar"},{title:"Sunny delight"},{title:"Surge"},{title:"Swedish punsch"},{title:"Sweet and Sour"},{title:"Sweet Cream"},{title:"Sweet Vermouth"},{title:"Tabasco Sauce"},{title:"Tang"},{title:"Tawny port"},{title:"Tea"},{title:"Tennessee whiskey"},{title:"Tequila rose"},{title:"Tequila"},{title:"Tia Maria"},{title:"Tinned Tuna"},{title:"Tomato Juice"},{title:"Tomato Puree"},{title:"Tomato"},{title:"Tomatoe"},{title:"Tomatoes"},{title:"Tonic Water"},{title:"Triple Sec"},{title:"Tropicana"},{title:"Tuaca"},{title:"Tuna"},{title:"Vanilla extract"},{title:"Vanilla Ice-Cream"},{title:"Vanilla liqueur"},{title:"Vanilla schnapps"},{title:"Vanilla syrup"},{title:"Vanilla vodka"},{title:"Vanilla"},{title:"Vegan Butter"},{title:"Vermouth"},{title:"Vinegar"},{title:"Vodka"},{title:"Water"},{title:"Watermelon schnapps"},{title:"Whipped Cream"},{title:"Whipping Cream"},{title:"Whiskey"},{title:"Whisky"},{title:"White chocolate liqueur"},{title:"White Creme de Menthe"},{title:"White grape juice"},{title:"White port"},{title:"White Rum"},{title:"White Vinegar"},{title:"White Wine"},{title:"Wild Turkey"},{title:"Wildberry schnapps"},{title:"Wine"},{title:"Worcestershire Sauce"},{title:"Wormwood"},{title:"Yeast"},{title:"Yellow Chartreuse"},{title:"Yoghurt"},{title:"Yukon Jack"},{title:"Zima"},{title:"Zucchini"}]},Z=(i(98),function(e){var t=e.tagName,i=e.deleteTags;return Object(m.jsx)("span",{className:"InputTag",onClick:function(e){e.stopPropagation(),i(t)},children:t},t)}),U=function(e){var t=e.ingredientsList,i=e.spinnerLoading,a=e.resetDrinkList,r=e.resetSpinner,l=Object(n.useState)(""),c=Object(j.a)(l,2),o=c[0],u=c[1],d=Object(n.useState)([]),h=Object(j.a)(d,2),p=h[0],b=h[1],f=Object(n.useState)([]),g=Object(j.a)(f,2),v=g[0],k=g[1],x=Object(s.h)(),C=Object(s.f)(),y=Object.values(x),S=(C.location.pathname,Object(n.useState)(!1)),D=Object(j.a)(S,2),N=D[0],w=D[1],P=Object(n.useRef)(null),B=Object(n.useRef)(null),L=Object(n.useState)(""),T=Object(j.a)(L,2),A=T[0],M=T[1];Object(n.useEffect)((function(){q()}),[o,p]),Object(n.useEffect)((function(){var e=Object(O.a)(y);M(""),b(e),k(R())}),[x]);var R=function(){if(0===y.length)return t();var e=Object(O.a)(t());return y.forEach((function(t){var i=e.findIndex((function(e){return e.title===t}));e.splice(i,1)})),e},G=function(){B.current&&(B.current.innerText="")},E=function(e){var t=Object(O.a)(p),i=t.indexOf(e);t.splice(i,1),b(t);var n=Object(O.a)(v),a={title:e};n.unshift(a),k(n),B.current&&B.current.focus()},F=function(){if(0===p.length)C.push("/drinks-base/ingredients");else if(0!==y.length||0!==p.length){var e=p.join("/"),t="/drinks-base/ingredients/".concat(e);C.push(t)}},W=function(){b([]),u(""),k(t()),G()},q=function(){""===o&&0===p.length?M("Select an ingredient..."):M("")};Object(n.useEffect)((function(){return document.addEventListener("mousedown",I),function(){document.removeEventListener("mousedown",I)}}),[]);var I=function(e){var t=P.current;t&&!t.contains(e.target)&&(w(!1),G(),u(""))},J=function(e){w(!1),u("");var t=Object(O.a)(p);t.push(e.currentTarget.innerText),b(t);var i=Object(O.a)(v),n=i.findIndex((function(t){return t.title===e.currentTarget.innerText}));i.splice(n,1),k(i),G(),p.length<2&&B.current&&B.current.focus()},V=p.map((function(e){return Object(m.jsx)(Z,{tagName:e,deleteTags:E},e)}));return Object(m.jsxs)("div",{className:"SearchBar",onKeyDown:function(e){if(""===o&&8===e.keyCode&&p.length>0){var t=p[p.length-1];E(t)}},onKeyPress:function(e){13===e.charCode&&(!1!==i&&void 0!==i||(a(p),r(p),b([]),w(!1),C.push(F())))},children:[Object(m.jsxs)("div",{ref:P,className:"SearchBar-wrapper",children:[Object(m.jsx)("div",{className:"search-background",onClick:function(){w(!1===N),B.current&&B.current.focus()},children:Object(m.jsx)("div",{className:"search-wrapper",children:Object(m.jsxs)("div",{className:"search-tags",children:[V,Object(m.jsx)("span",{onKeyPress:function(e){return function(e){13===e.charCode&&e.preventDefault()}(e)},onInput:function(e){return function(e){w(!0),u(e.currentTarget.textContent)}(e)},ref:B,"data-placeholder":A,className:"search-input",contentEditable:"true"})]})})}),function(){if(!0===N){var e=o,t=(3===p.length?[]:v).filter((function(t){return t.title.toLowerCase().indexOf(e.toLowerCase())>-1}));return t.length?Object(m.jsx)("ul",{className:"dropdown",children:t.map((function(e){return Object(m.jsx)("li",{className:"item",onClick:J,children:e.title},e.title)}))}):Object(m.jsx)("div",{className:"no-autocomplete",children:p.length<3?Object(m.jsx)("span",{children:"No options"}):Object(m.jsx)("span",{children:"Too many selected"})})}}()]}),Object(m.jsxs)("span",{className:"button",onClick:function(){!1!==i&&void 0!==i||(a(p),r(p),b([]),F())},children:[Object(m.jsx)("span",{className:"default-btn-txt",children:"SEARCH"}),Object(m.jsx)("span",{className:"mobile-btn-txt",children:Object(m.jsx)("i",{className:"fas fa-search"})})]}),0!==p.length||""!==o?Object(m.jsx)("i",{onClick:W,className:"fas fa-times clear-icon"}):null]})},$=function(e){var t=e.spinnerLoading,i=e.resetDrinkList,n=e.resetSpinner;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(U,{ingredientsList:Q,spinnerLoading:t,resetDrinkList:i,resetSpinner:n})})},X=(i(99),["Martini","Punch","Margarita","Tea","Mojito","Daiquiri"]),_=["Cider","Coffee","Beer and 7-up","Rum, Vodka and Tequila","Mint"],ee=function(e){var t,i=e.resetDrinkList,n=Object(s.f)().location.pathname.includes("/drinks-base/ingredients"),r=function(e,t){if(!1===e)return"/drinks-base/".concat(t);var i=t.replaceAll(" ","").replaceAll("and","/").replaceAll(",","/");return"/drinks-base/ingredients/".concat(i)},l=(t=n,!1===t?X:_).map((function(e){return Object(m.jsx)(a.b,{onClick:i,to:r(n,e),className:"suggestion",children:e},e)}));return Object(m.jsxs)("div",{className:"SuggestionsList",children:[Object(m.jsx)("div",{className:"suggestions-title",children:"Suggestions"}),Object(m.jsx)("div",{children:l})]})},te=(i(100),function(e){var t=e.resetDrinkList,i=e.resetSpinner,n=Object(s.f)().location.pathname;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f,{}),Object(m.jsx)("div",{className:"WelcomePage-wrapper",children:Object(m.jsxs)("div",{className:"WelcomePage",children:[Object(m.jsx)("div",{className:"title",children:"What would you like to drink?"}),Object(m.jsx)("div",{className:"SearchBarWrapper",children:n.includes("/drinks-base/ingredients")?Object(m.jsx)($,{resetDrinkList:t,resetSpinner:i}):Object(m.jsx)(Y,{resetDrinkList:t,resetSpinner:i})}),Object(m.jsx)(M,{}),Object(m.jsx)(ee,{resetDrinkList:t})]})})]})}),ie=(i(101),function(e){var t=e.dataLoaded,i=e.resetDrinkList,a=e.drinksData,r=e.unfilteredDrinksData,l=e.urlTerm,c=e.initialData,o=e.currentTerm,u=Object(s.f)().location.pathname,d=Object(n.useState)(!0),h=Object(j.a)(d,2),p=h[0],b=h[1],O=Object(n.useRef)(0),g=Object(s.g)(),v=B.a.parse(g.search),k=Object(n.useState)(1),x=Object(j.a)(k,2),C=x[0],y=x[1],S=Object(n.useState)(12),D=Object(j.a)(S,1)[0],N=C*D,w=N-D,P=a.slice(w,N);Object(n.useEffect)((function(){void 0===v.page?y(1):y(v.page)}),[v.page]),Object(n.useEffect)((function(){(Object.keys(l).length<=1||o!==l.ing1)&&b(!0)}),[u]);var L=function(e){void 0===e||e.length<=1?b(!0):b(!1)};Object(n.useEffect)((function(){(!1===t||!0===t&&0===P.length)&&b(!1)}),[t]);return Object(m.jsx)("div",{className:"ApplicationPage",children:0!==Object.values(l).length?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f,{}),Object(m.jsx)("div",{className:"SearchBarWrapper",children:u.includes("/drinks-base/ingredients")?Object(m.jsx)($,{spinnerLoading:p,resetDrinkList:i,resetSpinner:L}):Object(m.jsx)(Y,{resetDrinkList:i,resetSpinner:L})}),Object(m.jsx)(M,{}),Object(m.jsx)("div",{className:"whitespace"}),Object(m.jsx)("div",{className:0!==P.length&&!1===p?"main-content":"",children:Object(m.jsx)(z,{drinksData:P,totalDrinksData:a,unfilteredDrinksData:r,initialData:c,currentTerm:o,loading:p,imageLoaded:function(){O.current+=1,O.current>=P.length&&b(!1)},paginate:function(e){y(e)},drinksPerPage:D,totalDrinks:a,resetSpinnerPag:function(){b(!0)}})})]}):Object(m.jsx)(te,{resetDrinkList:i,resetSpinner:L})})}),ne=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),i=t[0],a=t[1],r=Object(s.h)(),l=Object(s.g)(),o=B.a.parse(l.search),h=Object.values(o).flat(1),p=v(i,h),b=Object(n.useState)(null),f=Object(j.a)(b,2),O=f[0],g=f[1],k=Object(s.f)(),x=function(){a([]),g(null)};return Object(n.useEffect)((function(){"/drinks-base"!==k.location.pathname?(g(null),function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L("https://www.thecocktaildb.com/api/json/v1/1/search.php",r.urlTerm);case 2:null!==(t=e.sent).drinks?(C(t.drinks),a(t.drinks),g(!0)):(g(!1),a([]));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()):x()}),[r]),Object(m.jsx)(ie,{dataLoaded:O,resetDrinkList:x,drinksData:p,unfilteredDrinksData:i,urlTerm:void 0===r.urlTerm?{}:Object(c.a)({},r.urlTerm),initialData:i})},ae=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),i=t[0],a=t[1],r=Object(s.h)(),l=Object(s.g)(),c=B.a.parse(l.search),o=Object.values(c).flat(1),h=x(v(i,o),r),p=x(i,r),b=Object(n.useState)(null),f=Object(j.a)(b,2),O=f[0],g=f[1],k=Object(n.useState)(null),y=Object(j.a)(k,2),S=y[0],D=y[1];return Object(n.useEffect)((function(){0!==Object.keys(r).length?(g(Object.values(r)[0]),(0===i.length||Object.values(r)[0]!==O)&&(a([]),D(null),function(){var e=Object(d.a)(u.a.mark((function e(){var t,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.values(r)[0],e.next=3,T("https://www.thecocktaildb.com/api/json/v1/1/filter.php",t);case 3:void 0!==(i=e.sent).drinks?function(){for(var e=[],t=[],n=0;n<i.drinks.length;n++){var r=i.drinks[n].idDrink;t.push(T("https://www.thecocktaildb.com/api/json/v1/1/lookup.php",r).then((function(t){e.push(t.drinks[0])})))}Promise.all(t).then((function(){C(e),a(e),D(!0)}))}():D(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()())):a([])}),[r]),Object(m.jsx)(ie,{dataLoaded:S,resetDrinkList:function(e){e.length<=1&&a([]),D(null)},drinksData:h,unfilteredDrinksData:p,urlTerm:r,initialData:i,currentTerm:O})},re=function(e){return Object(n.useEffect)((function(){document.title=e.title||""}),[e.title]),e.children},le=function(){return console.warn=function(){},Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(s.c,{children:[Object(m.jsx)(s.a,{path:"/drinks-base/ingredients/:ing1/:ing2/:ing3",render:function(e){return Object(m.jsx)(re,{title:"[".concat(e.match.params.ing1,", ").concat(e.match.params.ing2,", ").concat(e.match.params.ing3,"] Results from Drinks Base"),children:Object(m.jsx)(ae,Object(c.a)({},e))})}}),Object(m.jsx)(s.a,{path:"/drinks-base/ingredients/:ing1/:ing2",render:function(e){return Object(m.jsx)(re,{title:"[".concat(e.match.params.ing1,", ").concat(e.match.params.ing2,"] Results from Drinks Base"),children:Object(m.jsx)(ae,Object(c.a)({},e))})}}),Object(m.jsx)(s.a,{path:"/drinks-base/ingredients/:ing1",render:function(e){return Object(m.jsx)(re,{title:"[".concat(e.match.params.ing1,"] Results from Drinks Base"),children:Object(m.jsx)(ae,Object(c.a)({},e))})}}),Object(m.jsx)(s.a,{path:"/drinks-base/ingredients",render:function(e){return Object(m.jsx)(re,{title:"Drinks Base - Search by Ingredients",children:Object(m.jsx)(ae,Object(c.a)({},e))})}}),Object(m.jsx)(s.a,{path:"/drinks-base/details/:drinkId",render:function(e){return Object(m.jsx)(re,{title:"Drinks ID [".concat(e.match.params.drinkId,"] Recipe"),children:Object(m.jsx)(w,Object(c.a)({},e))})}}),Object(m.jsx)(s.a,{path:"/drinks-base/:urlTerm",render:function(e){return Object(m.jsx)(re,{title:"[".concat(e.match.params.urlTerm,"] Results from Drinks Base"),children:Object(m.jsx)(ne,Object(c.a)({},e))})}}),Object(m.jsx)(s.a,{path:"/drinks-base",render:function(e){return Object(m.jsx)(re,{title:"Drinks Base - Search by Name",children:Object(m.jsx)(ne,Object(c.a)({},e))})}})]})})};l.a.render(Object(m.jsx)(a.a,{children:Object(m.jsx)(le,{})}),document.querySelector("#root"))},34:function(e,t,i){},35:function(e,t,i){},61:function(e,t,i){},71:function(e,t,i){},85:function(e,t,i){},86:function(e,t,i){},87:function(e,t,i){},88:function(e,t,i){},89:function(e,t,i){},90:function(e,t,i){},91:function(e,t,i){},92:function(e,t,i){},93:function(e,t,i){},94:function(e,t,i){},95:function(e,t,i){},96:function(e,t,i){},97:function(e,t,i){},98:function(e,t,i){},99:function(e,t,i){}},[[102,1,2]]]);
//# sourceMappingURL=main.63ae454b.chunk.js.map