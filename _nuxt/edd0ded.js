(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{234:function(t,n,e){"use strict";var o={data:function(){return{}},props:{name:String,type:String}},r=e(51),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("nuxt-link",{attrs:{to:{name:"locations-type-locationname",params:{locationname:t.name,type:t.type}}}},[t._v("\n  "+t._s(t.name)+" "+t._s(t._f("capitalize")(t._f("location")(t.type)))+"\n")])}),[],!1,null,null,null);n.a=component.exports},235:function(t,n,e){"use strict";e(164);var o=e(234),r={data:function(){return{}},props:{name:String,type:String,org_count:{type:Number,default:-1},activity_count:{type:Number,default:-1}},components:{LocationLink:o.a}},c=e(51),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"item"},[e("LocationLink",{attrs:{name:t.name,type:t.type}}),t._v(" "),t.org_count>-1?e("span",{staticClass:"info"},[t._v("\n    "+t._s(t._f("plural")(t.org_count,"organisation","organisations"))+"\n  ")]):t._e(),t._v(" "),t.activity_count>-1?e("span",{staticClass:"info"},[t._v("\n    "+t._s(t._f("plural")(t.activity_count,"activity","activities"))+"\n  ")]):t._e()],1)}),[],!1,null,null,null);n.a=component.exports},236:function(t,n,e){"use strict";e(164);var o={data:function(){return{}},props:{org:Object,activity_count:Number}},r=e(51),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"item"},[e("nuxt-link",{attrs:{title:t.org.info.name,to:{name:"orgs-orgname",params:{orgname:t.org.info.shortname}}}},[t._v(t._s(t._f("truncate")(t.org.info.shortname)))]),t._v(" "),e("span",{staticClass:"info"},[e("b",[t._v("Source:")]),t._v(" "+t._s(t._f("join")(t.org.sources)))]),t._v(" "),e("span",{staticClass:"info"},[t._v(t._s(t._f("plural")(t.activity_count,"activity","activities")))])],1)}),[],!1,null,null,null);n.a=component.exports},237:function(t,n,e){"use strict";e(164);var o={data:function(){return{}},props:{name:String,type:String,org_count:{type:Number,default:-1},activity_count:{type:Number,default:-1}}},r=e(51),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"item"},[e("nuxt-link",{attrs:{to:{name:"sectors-type-sectorname",params:{type:t.type,sectorname:t.name}}}},[t._v(t._s(t.name))]),t._v(" "),t.org_count>-1?[e("span",{staticClass:"info"},[t._v(t._s(t._f("plural")(t.org_count,"organisation","organisations")))])]:t._e(),t._v(" "),t.activity_count>-1?[e("span",{staticClass:"info"},[t._v(t._s(t._f("plural")(t.activity_count,"activity","activities")))])]:t._e()],2)}),[],!1,null,null,null);n.a=component.exports},238:function(t,n,e){"use strict";var o={data:function(){return{}},props:{activity:Object}},r=e(51),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"item"},[e("nuxt-link",{attrs:{title:t.activity.title,to:{name:"activities-identifier",params:{identifier:t.activity.identifier}}}},[t._v("\n    "+t._s(t._f("truncate")(t.activity.title))+"\n  ")]),t._v(" "),e("span",{staticClass:"info"},[e("b",[t._v("Who:")]),t._v(" "+t._s(t._f("truncate")(t._f("join")(t.activity.orgs))))]),t._v(" "),e("span",{staticClass:"info"},[e("b",[t._v("Where:")]),t._v(" "+t._s(t._f("truncate")(t._f("join")(t.activity.locations))))]),t._v(" "),e("span",{staticClass:"info"},[e("b",[t._v("Source:")]),t._v(" "+t._s(t.activity.source))])],1)}),[],!1,null,null,null);n.a=component.exports},247:function(t,n,e){"use strict";e.r(n);e(2),e(1),e(4),e(5);var o=e(11),r=e(0),c=(e(52),e(3),e(59)),l=e(236),_=e(237),v=e(234),f=e(235),m=e(238);function y(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var d={data:function(){return{busy:!0,info:{}}},components:{Org:l.a,Sector:_.a,LocationLink:v.a,Location:f.a,Activity:m.a},methods:{flatten:function(t){return this.$options.filters.flatten(t)}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({sector_count:function(){return this.$options.filters.flatten(this.org.sectors).length},partner_count:function(){return this.$options.filters.flatten(this.org.partners).length},region_count:function(){return Object.keys(this.org.locations.admin1).length},activity_count:function(){return this.$options.filters.flatten(this.org.activities).length},location_type:function(){return this.$route.params.type},location_name:function(){return this.$route.params.locationname}},Object(c.b)(["orgs","activities","locations"])),mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("loadOrgs");case 2:return t.org=t.orgs[t.$route.params.orgname],t.$store.dispatch("loadLocations"),n.next=6,t.$store.dispatch("loadActivities");case 6:t.info=t.locations[t.$route.params.type][t.$route.params.locationname],t.busy=!1;case 8:case"end":return n.stop()}}),n)})))()}},h=e(51),component=Object(h.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[0==t.busy?e("main",[e("section",{attrs:{id:"content"}},[e("nav",{staticClass:"secondary"},["admin1"==t.location_type?[e("nuxt-link",{attrs:{to:{name:"locations-type-locationname",params:{locationname:t.location_name,type:t.location_type},hash:"#districts"}}},[t._v("Districts")])]:t._e(),t._v(" "),e("nuxt-link",{attrs:{to:{name:"locations-type-locationname",params:{locationname:t.location_name,type:t.location_type},hash:"#orgs"}}},[t._v("Organisations")]),t._v(" "),e("nuxt-link",{attrs:{to:{name:"locations-type-locationname",params:{locationname:t.location_name,type:t.location_type},hash:"#sectors"}}},[t._v("Sectors")]),t._v(" "),e("nuxt-link",{attrs:{to:{name:"locations-type-locationname",params:{locationname:t.location_name,type:t.location_type},hash:"#activities"}}},[t._v("Activities")])],2),t._v(" "),e("h2",[t._v(t._s(t.location_name)+" "+t._s(t._f("capitalize")(t._f("location")(t.location_type))))]),t._v(" "),t._l(["admin1","admin2"],(function(n){return t.info.info[n]?e("div",{key:n},[e("p",[e("b",[t._v(t._s(t._f("location")(n))+": ")]),t._v(" "),e("nuxt-link",{attrs:{to:{name:"locations-type-locationname",params:{locationname:t.info.info[n],type:n}}}},[t._v("\n            "+t._s(t.info.info[n])+"\n          ")])],1)]):t._e()})),t._v(" "),"admin1"==t.location_type?e("section",{attrs:{id:"districts"}},[e("h3",[t._v("Districts of "+t._s(t.location_name))]),t._v(" "),e("div",{staticClass:"inline-list"},t._l(Object.keys(t.locations.admin2).sort(),(function(n){return t.locations.admin2[n].info.admin1==t.location_name?e("Location",{key:n,attrs:{name:n,type:"admin2",org_count:t.flatten(t.locations.admin2[n].orgs).length,activity_count:t.locations.admin2[n].activities.length}}):t._e()})),1)]):t._e(),t._v(" "),e("section",{attrs:{id:"orgs"}},[e("h3",[t._v("Organisations working in "+t._s(t.location_name))]),t._v(" "),t._l(["local","regional","international","unknown"],(function(n){return Object.keys(t.info.orgs[n]).length>0?e("section",{attrs:{id:"orgs."+n}},[e("h4",[t._v(t._s(t._f("scope")(n))+"s")]),t._v(" "),e("div",{staticClass:"inline-list"},t._l(Object.keys(t.info.orgs[n]).sort(),(function(o){return e("Org",{key:o,attrs:{org:t.orgs[o],activity_count:t.info.orgs[n][o]}})})),1)]):t._e()}))],2),t._v(" "),e("section",{attrs:{id:"sectors"}},[e("h3",[t._v("Sectors active in "+t._s(t.location_name))]),t._v(" "),t._l(Object.keys(t.info.sectors),(function(n){return e("div",{key:n},[Object.keys(t.info.sectors[n]).length>0?e("section",{attrs:{id:"sectors."+n}},[e("h4",[t._v(t._s(t._f("sector")(n))+"s")]),t._v(" "),e("div",{staticClass:"inline-list"},t._l(Object.keys(t.info.sectors[n]).sort(),(function(o){return e("Sector",{key:o,attrs:{name:o,type:n,activity_count:t.info.sectors[n][o]}})})),1)]):t._e()])}))],2),t._v(" "),e("section",{attrs:{id:"activities"}},[e("h3",[t._v("Aid activities in "+t._s(t.location_name))]),t._v(" "),e("div",{staticClass:"inline-list wide"},t._l(t.info.activities,(function(n){return e("Activity",{key:n,attrs:{activity:t.activities[n]}})})),1)])],2)]):t._e()])}),[],!1,null,null,null);n.default=component.exports}}]);