(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{245:function(t,n,e){"use strict";var r={data:function(){return{}},props:{name:String,stub:String,type:String}},o=e(53),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("nuxt-link",{attrs:{to:{name:"locations-type-stub",params:{stub:t.stub,type:t.type}}}},[t._v("\n  "+t._s(t.name)+" "+t._s(t._f("capitalize")(t._f("location")(t.type)))+"\n")])}),[],!1,null,null,null);n.a=component.exports},246:function(t,n,e){var content=e(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("75ec41fb",content,!0,{sourceMap:!1})},247:function(t,n,e){var r=e(26);t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},248:function(t,n,e){"use strict";e(166);var r=e(245),o={data:function(){return{}},props:{stub:String,name:String,type:String,org_count:{type:Number,default:-1},activity_count:{type:Number,default:-1}},components:{LocationLink:r.a}},c=e(53),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"item"},[e("LocationLink",{attrs:{stub:t.stub,name:t.name,type:t.type}}),t._v(" "),t.org_count>-1?e("span",{staticClass:"info"},[t._v("\n    "+t._s(t._f("plural")(t.org_count,"organisation","organisations"))+"\n  ")]):t._e(),t._v(" "),t.activity_count>-1?e("span",{staticClass:"info"},[t._v("\n    "+t._s(t._f("plural")(t.activity_count,"activity","activities"))+"\n  ")]):t._e()],1)}),[],!1,null,null,null);n.a=component.exports},249:function(t,n,e){"use strict";e(166);var r={data:function(){return{}},props:{org:Object,activity_count:Number}},o=e(53),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card",[e("nuxt-link",{attrs:{title:t.org.info.stub,to:{name:"orgs-stub",params:{stub:t.org.info.stub}}}},[t._v(t._s(t.org.info.name)),t.org.info.shortname!=t.org.info.name?[t._v(" ("+t._s(t.org.info.shortname)+")")]:t._e()],2),t._v(" "),e("span",{staticClass:"info"},[e("b",[t._v("Source:")]),t._v(" "+t._s(t._f("join")(t.org.sources)))]),t._v(" "),e("span",{staticClass:"info"},[t._v(t._s(t._f("plural")(t.activity_count,"activity","activities")))])],1)}),[],!1,null,null,null);n.a=component.exports},250:function(t,n,e){"use strict";e(246)},251:function(t,n,e){var r=e(54)(!1);r.push([t.i,".region-map{height:350px!important;width:100%;background:none}",""]),t.exports=r},252:function(t,n,e){"use strict";var strong=e(253),r=e(247);t.exports=e(254)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return strong.def(r(this,"Set"),t=0===t?0:t,t)}},strong)},253:function(t,n,e){"use strict";var r=e(29).f,o=e(75),c=e(170),l=e(48),f=e(168),v=e(169),_=e(117),m=e(171),h=e(118),d=e(27),y=e(115).fastKey,O=e(247),j=d?"_s":"size",k=function(t,n){var e,r=y(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,_){var m=t((function(t,r){f(t,m,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[j]=0,null!=r&&v(r,e,t[_],t)}));return c(m.prototype,{clear:function(){for(var t=O(this,n),data=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete data[e.i];t._f=t._l=void 0,t[j]=0},delete:function(t){var e=O(this,n),r=k(e,t);if(r){var o=r.n,c=r.p;delete e._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),e._f==r&&(e._f=o),e._l==r&&(e._l=c),e[j]--}return!!r},forEach:function(t){O(this,n);for(var e,r=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!k(O(this,n),t)}}),d&&r(m.prototype,"size",{get:function(){return O(this,n)[j]}}),m},def:function(t,n,e){var r,o,c=k(t,n);return c?c.v=e:(t._l=c={i:o=y(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[j]++,"F"!==o&&(t._i[o]=c)),t},getEntry:k,setStrong:function(t,n,e){_(t,n,(function(t,e){this._t=O(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this,n=t._k,e=t._l;e&&e.r;)e=e.p;return t._t&&(t._l=e=e?e.n:t._t._f)?m(0,"keys"==n?e.k:"values"==n?e.v:[e.k,e.v]):(t._t=void 0,m(1))}),e?"entries":"values",!e,!0),h(n)}}},254:function(t,n,e){"use strict";var r=e(19),o=e(15),c=e(30),l=e(170),meta=e(115),f=e(169),v=e(168),_=e(26),m=e(23),h=e(116),d=e(74),y=e(119);t.exports=function(t,n,e,O,j,k){var w=r[t],S=w,x=j?"set":"add",C=S&&S.prototype,L={},P=function(t){var n=C[t];c(C,t,"delete"==t||"has"==t?function(a){return!(k&&!_(a))&&n.call(this,0===a?0:a)}:"get"==t?function(a){return k&&!_(a)?void 0:n.call(this,0===a?0:a)}:"add"==t?function(a){return n.call(this,0===a?0:a),this}:function(a,b){return n.call(this,0===a?0:a,b),this})};if("function"==typeof S&&(k||C.forEach&&!m((function(){(new S).entries().next()})))){var N=new S,A=N[x](k?{}:-0,1)!=N,E=m((function(){N.has(1)})),$=h((function(t){new S(t)})),D=!k&&m((function(){for(var t=new S,n=5;n--;)t[x](n,n);return!t.has(-0)}));$||((S=n((function(n,e){v(n,S,t);var r=y(new w,n,S);return null!=e&&f(e,j,r[x],r),r}))).prototype=C,C.constructor=S),(E||D)&&(P("delete"),P("has"),j&&P("get")),(D||A)&&P(x),k&&C.clear&&delete C.clear}else S=O.getConstructor(n,t,j,x),l(S.prototype,e),meta.NEED=!0;return d(S,t),L[t]=S,o(o.G+o.W+o.F*(S!=w),L),k||O.setStrong(S,t,j),S}},255:function(t,n,e){"use strict";e(2),e(1),e(4),e(5);var r=e(11),o=e(0),c=(e(47),e(167),e(13),e(3),e(9),e(62)),l={components:{},props:["activities","region","regionName","geojson","type","totalActivities"],computed:{options:function(){return{onEachFeature:this.onEachFeatureFunction}},onEachFeatureFunction:function(){var t=this;return function(n,e){e.on("mouseover",(function(t){t.target.setStyle({fillOpacity:1})})),e.on("mouseout",(function(n){n.target.setStyle({fillOpacity:t.fillOpacity})})),e.on("click",(function(){t.clickRegion()}));var r=t.numActivities;e.bindTooltip("".concat(t.regionName,": ").concat(r," activities"),{permanent:!1,sticky:!0})}},numActivities:function(){return this.regionName in this.activities?this.activities[this.regionName]:0},fillOpacity:function(){return this.numActivities/this.totalActivities*10||0},optionsStyle:function(){return{fillColor:"#585fd2",weight:1,opacity:.5,color:"#bbbbbb",fillOpacity:this.fillOpacity}}},methods:{clickRegion:function(){this.$router.push({name:"locations-type-stub",params:{type:this.type,stub:this.geojson.stub}})}}},f=e(53),v=Object(f.a)(l,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("l-geo-json",{ref:"geoJson",attrs:{geojson:t.geojson,options:t.options,"options-style":t.optionsStyle}})}),[],!1,null,null,null).exports;e(172);function _(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var m={components:{RegionMapFeature:v},props:["locations","locationsList"],data:function(){return{busy:!0,zoom:5,center:[5,45],mapControls:{zoomControl:!1,attributionControl:!1,scrollWheelZoom:!1,dragging:!1,keyboard:!1,doubleClickZoom:!1,boxZoom:!1,tap:!1,touchZoom:!1}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({locationsNamesStubs:function(){return Object.entries(this.locations.admin1).reduce((function(summary,t){return summary[t[1].info.name]={stub:t[0],data:t[1]},summary}),{})},locationsStubsNames:function(){return Object.entries(this.locations.admin1).reduce((function(summary,t){return summary[t[0]]=t[1].info.name,summary}),{})},regions:function(){var t=this;return 0===Object.keys(this.geoJSONData).length?[]:this.geoJSONData.features.map((function(n){return{region:n.properties.admin1Name,regionName:n.properties.admin1Name,features:[n],stub:t.locationsNamesStubs[n.properties.admin1Name]?t.locationsNamesStubs[n.properties.admin1Name].stub:"",data:t.locationsNamesStubs[n.properties.admin1Name]?t.locationsNamesStubs[n.properties.admin1Name].data:{}}}))},activities:function(){return this.locationsList?this.activitiesLocationsList:this.activitiesLocations},totalActivities:function(){return this.locationsList?this.totalActivitiesLocationsList:this.totalActivitiesLocations},totalActivitiesLocationsList:function(){return Object.entries(this.locationsList.admin1).reduce((function(summary,t){return summary+t[1]}),0)},totalActivitiesLocations:function(){return Object.entries(this.locations.admin1).reduce((function(summary,t){return summary+t[1].activities.length}),0)},activitiesLocationsList:function(){var t=this;return Object.entries(this.locationsList.admin1).reduce((function(summary,n){return summary[t.locationsStubsNames[n[0]]]=n[1],summary}),{})},activitiesLocations:function(){return Object.entries(this.locations.admin1).reduce((function(summary,t){return summary[t[1].info.name]=t[1].activities.length,summary}),{})}},Object(c.b)(["geoJSONData"])),mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("loadMapData");case 2:t.busy=!1;case 3:case"end":return n.stop()}}),n)})))()}},h=(e(250),Object(f.a)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.busy?[e("div",{staticClass:"d-flex justify-content-center mb-3"},[e("b-spinner",{attrs:{variant:"secondary",label:"Loading..."}})],1)]:[e("l-map",{staticClass:"region-map",attrs:{zoom:t.zoom,center:t.center,options:t.mapControls}},t._l(t.regions,(function(n){return e("RegionMapFeature",{key:n.region,attrs:{geojson:n,activities:t.activities,"total-activities":t.totalActivities,region:n.region,"region-name":n.regionName,type:"admin1"}})})),1)]],2)}),[],!1,null,null,null));n.a=h.exports},256:function(t,n,e){"use strict";e(10),e(4),e(5);var r=e(11),o=e(0),c=(e(47),e(3),e(167),e(9),e(13),e(2),e(49),e(41),e(14),e(40),e(252),e(1),e(62));function l(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var f={data:function(){return{busy:!0}},props:{activity:Object},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({orgNames:function(){var t=this;return 0==Object.keys(this.orgs).length?"":this.unique(Object.entries(this.activity.orgs).reduce((function(summary,n){n[0];return n[1].map((function(n){n in t.orgs&&summary.push(t.orgs[n].info.name)})),summary}),[]))},locationNames:function(){var t=this;return 0==Object.keys(this.locations).length?"":this.unique(Object.entries(this.activity.locations).reduce((function(summary,n){var e=n[0];return n[1].map((function(n){if("countries"==e)return summary.push(n),summary;null!=t.locations[e][n]?summary.push(t.locations[e][n].info.name):summary.push(n)})),summary}),[]))}},Object(c.b)(["orgs","locations"])),methods:{unique:function(t){return Array.from(new Set(t.filter((function(t){return""!=t}))))}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("loadOrgs");case 2:return n.next=4,t.$store.dispatch("loadLocations");case 4:t.busy=!1;case 5:case"end":return n.stop()}}),n)})))()}},v=e(53),_={data:function(){return{perPage:50,page:1}},components:{Activity:Object(v.a)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return 0==this.busy?e("div",{staticClass:"item"},[e("nuxt-link",{attrs:{title:t.activity.title,to:{name:"activities-identifier",params:{identifier:t.activity.identifier}}}},[t._v("\n    "+t._s(t._f("truncate")(t.activity.title))+"\n  ")]),t._v(" "),e("span",{staticClass:"info"},[e("b",[t._v("Who:")]),t._v(" "+t._s(t._f("truncate")(t._f("join")(t.orgNames))))]),t._v(" "),e("span",{staticClass:"info"},[e("b",[t._v("Where:")]),t._v(" "+t._s(t._f("truncate")(t._f("join")(t.locationNames))))]),t._v(" "),e("span",{staticClass:"info"},[e("b",[t._v("Source:")]),t._v(" "+t._s(t.activity.source))])],1):t._e()}),[],!1,null,null,null).exports},props:{activities:Object,activitiesList:Array},computed:{totalRows:function(){return this.activitiesList.length},filteredActivities:function(){return this.activitiesList.slice((this.page-1)*this.perPage,this.perPage*this.page)}},watch:{perPage:function(){this.page=1}}},m=Object(v.a)(_,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.totalRows>t.perPage?e("b-row",{staticClass:"mb-2"},[e("b-col",{staticClass:"my-1",attrs:{md:"6"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"Activities per page","label-for":"per-page","label-class":"mb-0","label-size":"sm"}},[e("b-form-select",{staticClass:"my-0",attrs:{id:"per-page",size:"sm",options:[50,100,200,500,1e3]},model:{value:t.perPage,callback:function(n){t.perPage=n},expression:"perPage"}})],1)],1),t._v(" "),e("b-col",{staticClass:"my-1",attrs:{md:"6"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"Page","label-size":"sm","label-class":"mb-1"}},[e("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.page,callback:function(n){t.page=n},expression:"page"}})],1)],1)],1):t._e(),t._v(" "),e("hr"),t._v(" "),e("section",{attrs:{id:"content"}},[e("div",{staticClass:"inline-list wide"},t._l(t.filteredActivities,(function(n){return e("Activity",{key:n,attrs:{activity:t.activities[n]}})})),1)])],1)}),[],!1,null,null,null);n.a=m.exports},257:function(t,n,e){"use strict";e(166);var r={data:function(){return{}},props:{name:String,type:String,stub:String,org_count:{type:Number,default:-1},activity_count:{type:Number,default:-1}}},o=e(53),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"item"},[e("nuxt-link",{attrs:{to:{name:"sectors-type-stub",params:{type:t.type,stub:t.stub}}}},[t._v(t._s(t.name))]),t._v(" "),t.org_count>-1?[e("span",{staticClass:"info"},[t._v(t._s(t._f("plural")(t.org_count,"organisation","organisations")))])]:t._e(),t._v(" "),t.activity_count>-1?[e("span",{staticClass:"info"},[t._v(t._s(t._f("plural")(t.activity_count,"activity","activities")))])]:t._e()],2)}),[],!1,null,null,null);n.a=component.exports},408:function(t,n,e){"use strict";e.r(n);e(2),e(1),e(4),e(5);var r=e(11),o=e(0),c=(e(47),e(3),e(62)),l=e(249),f=e(257),v=e(245),_=e(248),m=e(256),h=e(255);function d(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var y={data:function(){return{org:{sectors:[],partners:{local:{},regional:{},international:{},unknown:{}},locations:{admin1:[]},activities:[]},busy:!0}},components:{Org:l.a,Sector:f.a,LocationLink:v.a,Location:_.a,ActivitiesList:m.a,RegionMap:h.a},methods:{urlenc:function(t){return this.$options.filters.urlenc(t)}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({sector_count:function(){return this.$options.filters.flatten(this.org.sectors).length},partner_count:function(){return this.$options.filters.flatten(this.org.partners).length},region_count:function(){return Object.keys(this.org.locations.admin1).length},activity_count:function(){return this.$options.filters.flatten(this.org.activities).length}},Object(c.b)(["orgs","activities","locations","sectors"])),mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("loadOrgs");case 2:return t.org=t.orgs[t.$route.params.stub],t.$store.dispatch("loadLocations"),n.next=6,t.$store.dispatch("loadActivities");case 6:return n.next=8,t.$store.dispatch("loadSectors");case 8:t.busy=!1;case 9:case"end":return n.stop()}}),n)})))()}},O=e(53),component=Object(O.a)(y,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[t.busy?e("main",[e("div",{staticClass:"d-flex justify-content-center mb-3"},[e("b-spinner",{attrs:{variant:"secondary",label:"Loading..."}})],1)]):e("main",[e("section",{attrs:{id:"content"}},[e("h2",[t._v("\n      "+t._s(t.org.info.name)+"\n      "),t.org.info.name!=t.org.info.shortname?[t._v("\n      ("+t._s(t.org.info.shortname)+")\n      ")]:t._e()],2),t._v(" "),e("p",[t._v("\n      According to the "+t._s(t._f("join")(t.org.sources," and "))+" data,\n      "+t._s(t._f("scope")(t.org.info.scope))+" "),e("b",[t._v(t._s(t.org.info.name))]),t._v("\n      works\n      "),t.region_count>0?[t._v("\n      in "),e("nuxt-link",{attrs:{to:{name:"orgs-stub",params:{stub:t.org.info.stub},hash:"#locations"}}},[t._v(t._s(t._f("plural")(t.region_count,"region","regions")))]),t._v(" of Somalia,\n      ")]:t._e(),t._v(" "),t.sector_count>0?[t._v("\n      through "),e("nuxt-link",{attrs:{to:{name:"orgs-stub",params:{stub:t.org.info.stub},hash:"#sectors"}}},[t._v(t._s(t._f("plural")(t.sector_count,"sector","sectors")))]),t._v(",\n      ")]:t._e(),t._v(" "),t.partner_count>0?[t._v("\n      collaborating with "),e("nuxt-link",{attrs:{to:{name:"orgs-stub",params:{stub:t.org.info.stub},hash:"#partners"}}},[t._v(t._s(t._f("plural")(t.partner_count,"partner organisation","partner organisations")))]),t._v(",\n      ")]:t._e(),t._v("\n      on a total of "),e("nuxt-link",{attrs:{to:{name:"orgs-stub",params:{stub:t.org.info.stub},hash:"#activities"}}},[t._v(t._s(t._f("plural")(t.activity_count,"aid activity","aid activities")))]),t._v(" "),t.org.humanitarian?[t._v("\n      (including humanitarian activities).\n      ")]:[t._v("\n      (none flagged as humanitarian).\n      ")]],2),t._v(" "),t.org.info.synonyms.length>0?[e("p",[t._v("\n      Alternative names: "),e("i",[t._v(t._s(t._f("truncate")(t._f("join")(t.org.info.synonyms))))])])]:t._e(),t._v(" "),t.org.info.iati_id?[e("p",[t._v("\n      IATI organisation identifier: "),e("a",{attrs:{href:"https://d-portal.org/ctrack.html?reporting_ref="+t.urlenc(t.org.info.iati_id),target:"_blank"}},[t._v(t._s(t.org.info.iati_id))]),t._v(" (link opens in D-Portal).\n    ")])]:t._e(),t._v(" "),t.org.info.url?[e("p",[t._v("\n      You can learn more about "+t._s(t.org.info.shortname)+" at "),e("a",{attrs:{href:t.org.info.url,target:"_blank",rel:"nofollow"}},[t._v(t._s(t.org.info.url))])])]:t._e(),t._v(" "),e("hr"),t._v(" "),e("section",{attrs:{id:"partners"}},[e("h3",[t._v("Organisations who partner with "+t._s(t.org.info.shortname))]),t._v(" "),t.partner_count>0?t._l(["local","regional","international","unknown"],(function(n){return e("div",{key:n},[Object.keys(t.org.partners[n]).length>0?e("section",{attrs:{id:"partners."+n}},[e("h4",[t._v(t._s(t._f("capitalize")(t._f("scope")(n)))+"s")]),t._v(" "),e("b-card-group",{attrs:{columns:""}},t._l(Object.keys(t.org.partners[n]).sort(),(function(r){return e("Org",{key:r,attrs:{org:t.orgs[r],activity_count:t.org.partners[n][r]}})})),1)],1):t._e()])})):[e("p",{staticClass:"notice"},[t._v("(No partner organisations found for "+t._s(t.org.info.name)+".)")])],t._v(" "),e("hr")],2),t._v(" "),e("section",{attrs:{id:"sectors"}},[e("h3",[t._v("Sectors where "+t._s(t.org.info.shortname)+" works")]),t._v(" "),t.sector_count>0?t._l(Object.keys(t.org.sectors),(function(n){return Object.keys(t.org.sectors[n]).length>0?e("div",{key:n},[e("section",{attrs:{id:"sectors."+n}},[e("h4",[t._v(t._s(t._f("sector")(n))+"s")]),t._v(" "),e("div",{staticClass:"inline-list"},t._l(Object.keys(t.org.sectors[n]).sort(),(function(r){return e("Sector",{key:r,attrs:{stub:r,name:t.sectors[n][r].name,type:n,activity_count:t.org.sectors[n][r]}})})),1)])]):t._e()})):[e("p",{staticClass:"notice"},[t._v("(No sectors found for "+t._s(t.org.info.name)+".)")])],t._v(" "),e("hr")],2),t._v(" "),t.region_count>0?e("section",{attrs:{id:"locations"}},[e("h3",[t._v("Regions where "+t._s(t.org.info.shortname)+" works")]),t._v(" "),e("b-row",[e("b-col",{attrs:{lg:"4"}},[e("client-only",[e("RegionMap",{staticClass:"mb-4",attrs:{locations:t.locations,"locations-list":t.org.locations}})],1)],1),t._v(" "),e("b-col",{attrs:{lg:"8"}},[e("b-card-group",{attrs:{columns:""}},t._l(Object.keys(t.org.locations.admin1).sort(),(function(n){return e("b-card",{key:n},[e("h4",[e("LocationLink",{attrs:{stub:n,name:t.locations.admin1[n].info.name,type:"admin1"}}),t._v("\n                ("+t._s(t._f("plural")(t.org.locations.admin1[n],"activity","activities"))+")\n              ")],1),t._v(" "),e("div",{staticClass:"inline-list"},t._l(Object.keys(t.org.locations.admin2).sort(),(function(r){return t.locations.admin2[r].info.admin1==n?e("Location",{key:r,attrs:{name:t.locations.admin2[r].info.name,stub:r,type:"admin2",activity_count:t.org.locations.admin2[r]}}):t._e()})),1)])})),1)],1)],1),t._v(" "),e("hr")],1):t._e(),t._v(" "),e("section",{attrs:{id:"activities"}},[e("h3",[t._v("Activities involving "+t._s(t.org.info.shortname))]),t._v(" "),t._l(Object.keys(t.org.activities),(function(n){return t.org.activities[n].length>0?e("section",{key:n,attrs:{id:"activities."+n}},[e("h4",[t._v(t._s(t.org.info.shortname)+" as "+t._s(t._f("role")(n))+" ("+t._s(t.org.activities[n].length)+")")]),t._v(" "),e("ActivitiesList",{attrs:{activities:t.activities,activitiesList:t.org.activities[n]}})],1):t._e()}))],2)],2)])])}),[],!1,null,null,null);n.default=component.exports}}]);