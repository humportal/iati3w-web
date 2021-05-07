(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{234:function(t,n,e){"use strict";var r={data:function(){return{}},props:{name:String,stub:String,type:String}},o=e(51),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("nuxt-link",{attrs:{to:{name:"locations-type-stub",params:{stub:t.stub,type:t.type}}}},[t._v("\n  "+t._s(t.name)+" "+t._s(t._f("capitalize")(t._f("location")(t.type)))+"\n")])}),[],!1,null,null,null);n.a=component.exports},249:function(t,n,e){"use strict";e.r(n);e(3),e(2),e(1),e(4),e(5);var r=e(11),o=e(0),c=(e(52),e(59));function v(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var _={data:function(){return{activity:{},busy:!0}},components:{LocationLink:e(234).a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},Object(c.b)(["activities","orgs","locations","sectors"])),mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("loadActivities");case 2:return n.next=4,t.$store.dispatch("loadOrgs");case 4:return n.next=6,t.$store.dispatch("loadLocations");case 6:return n.next=8,t.$store.dispatch("loadSectors");case 8:t.activity=t.activities[t.$route.params.identifier],t.busy=!1;case 10:case"end":return n.stop()}}),n)})))()}},l=e(51),component=Object(l.a)(_,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[1!=t.busy?e("main",[e("section",{attrs:{id:"content"}},[e("h2",[t._v("Activity: "+t._s(t.activity.title))]),t._v(" "),e("table",[e("tbody",[e("tr",[e("th",[t._v("Identifier ("+t._s(t.activity.source)+")")]),t._v(" "),e("td",[t._v(t._s(t.activity.identifier))])]),t._v(" "),e("tr",[e("th",[t._v("Reported by")]),t._v(" "),e("td",[t._v(t._s(t.orgs[t.activity.reported_by].info.name)+" ("+t._s(t.activity.source)+")")])]),t._v(" "),t.activity.dates.start?[e("tr",[e("th",[t._v("Start")]),t._v(" "),e("td",[t._v(t._s(t.activity.dates.start))])])]:t._e(),t._v(" "),t.activity.dates.end?[e("tr",[e("th",[t._v("End")]),t._v(" "),e("td",[t._v(t._s(t.activity.dates.end))])])]:t._e()],2)]),t._v(" "),e("p",{staticClass:"pre"},[t._v(t._s(t.activity.description))]),t._v(" "),e("section",{attrs:{id:"orgs"}},[e("h3",[t._v("Who is working on this activity?")]),t._v(" "),t.activity.orgs.implementing?e("p",[e("b",[t._v("Implementing:")]),t._v(" "),t._l(t.activity.orgs.implementing,(function(n,r){return e("span",{key:n},[r>0?e("span",[t._v(";")]):t._e(),t._v(" "),e("nuxt-link",{attrs:{to:{name:"orgs-stub",params:{stub:t.orgs[n].info.stub}}}},[t._v("\n              "+t._s(t.orgs[n].info.name))])],1)}))],2):t._e(),t._v(" "),t.activity.orgs.programming?e("p",[e("b",[t._v("Programming:")]),t._v(" "),t._l(t.activity.orgs.programming,(function(n,r){return e("span",{key:n},[r>0?e("span",[t._v(";")]):t._e(),t._v(" "),e("nuxt-link",{attrs:{to:{name:"orgs-stub",params:{stub:t.orgs[n].info.stub}}}},[t._v("\n              "+t._s(t.orgs[n].info.name))])],1)}))],2):t._e(),t._v(" "),t.activity.orgs.funding?e("p",[e("b",[t._v("Funding:")]),t._v(" "),t._l(t.activity.orgs.funding,(function(n,r){return e("span",{key:n},[r>0?e("span",[t._v(";")]):t._e(),t._v(" "),e("nuxt-link",{attrs:{to:{name:"orgs-stub",params:{stub:t.orgs[n].info.stub}}}},[t._v("\n              "+t._s(t.orgs[n].info.name))])],1)}))],2):t._e()]),t._v(" "),e("section",{attrs:{id:"sectors"}},[e("h3",[t._v("What sectors does the activity target?")]),t._v(" "),t.activity.sectors.humanitarian?e("p",[e("b",[t._v("Humanitarian clusters:")]),t._v(" "),t._l(t.activity.sectors.humanitarian,(function(n){return e("nuxt-link",{key:n,attrs:{to:{name:"sectors-type-stub",params:{type:"humanitarian",stub:n}},name:n}},[t._v(t._s(t.sectors.humanitarian[n].name)+"\n          ")])}))],2):t._e(),t._v(" "),t.activity.sectors.dac?e("p",[e("b",[t._v("OECD sectors:")]),t._v(" "),t._l(t.activity.sectors.dac,(function(n){return e("nuxt-link",{key:n,attrs:{to:{name:"sectors-type-stub",params:{type:"dac",stub:n}},name:n}},[t._v(t._s(t.sectors.dac[n].name)+"\n          ")])}))],2):t._e()]),t._v(" "),e("section",{attrs:{id:"locations"}},[e("h3",[t._v("Where is the activity happening?")]),t._v(" "),e("p",[e("b",[t._v("Admin 1:")]),t._v(" "),t._l(t.activity.locations.admin1,(function(n){return e("nuxt-link",{key:n,attrs:{to:{name:"locations-type-stub",params:{type:"admin1",stub:n,name:n}}}},[t._v("\n            "+t._s(t.locations.admin1[n].info.name)+"\n          ")])}))],2),t._v(" "),e("p",[e("b",[t._v("Admin 2:")]),t._v(" "),t._l(t.activity.locations.admin2,(function(n){return e("nuxt-link",{key:n,attrs:{to:{name:"locations-type-stub",params:{type:"admin2",stub:n,name:n}}}},[t._v("\n            "+t._s(t.locations.admin2[n].info.name)+"\n          ")])}))],2),t._v(" "),e("p",[e("b",[t._v("Unclassified:")]),t._v(" "),t._l(t.activity.locations.unclassified,(function(n){return e("nuxt-link",{key:n,attrs:{to:{name:"locations-type-stub",params:{type:"unclassified",stub:n,name:n}}}},[t._v("\n            "+t._s(t.locations.unclassified[n].info.name)+"\n          ")])}))],2)])])]):t._e()])}),[],!1,null,null,null);n.default=component.exports}}]);