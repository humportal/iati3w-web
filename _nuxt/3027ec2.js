(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{253:function(t,e,n){"use strict";n(166);var r={data:function(){return{}},props:{name:String,type:String,stub:String,org_count:{type:Number,default:-1},activity_count:{type:Number,default:-1}}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("nuxt-link",{attrs:{to:{name:"sectors-type-stub",params:{type:t.type,stub:t.stub}}}},[t._v(t._s(t.name))]),t._v(" "),t.org_count>-1?[n("span",{staticClass:"info"},[t._v(t._s(t._f("plural")(t.org_count,"organisation","organisations")))])]:t._e(),t._v(" "),t.activity_count>-1?[n("span",{staticClass:"info"},[t._v(t._s(t._f("plural")(t.activity_count,"activity","activities")))])]:t._e()],2)}),[],!1,null,null,null);e.a=component.exports},391:function(t,e,n){var content=n(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("1922c137",content,!0,{sourceMap:!1})},395:function(t,e,n){var map={"./af":256,"./af.js":256,"./ar":257,"./ar-dz":258,"./ar-dz.js":258,"./ar-kw":259,"./ar-kw.js":259,"./ar-ly":260,"./ar-ly.js":260,"./ar-ma":261,"./ar-ma.js":261,"./ar-sa":262,"./ar-sa.js":262,"./ar-tn":263,"./ar-tn.js":263,"./ar.js":257,"./az":264,"./az.js":264,"./be":265,"./be.js":265,"./bg":266,"./bg.js":266,"./bm":267,"./bm.js":267,"./bn":268,"./bn-bd":269,"./bn-bd.js":269,"./bn.js":268,"./bo":270,"./bo.js":270,"./br":271,"./br.js":271,"./bs":272,"./bs.js":272,"./ca":273,"./ca.js":273,"./cs":274,"./cs.js":274,"./cv":275,"./cv.js":275,"./cy":276,"./cy.js":276,"./da":277,"./da.js":277,"./de":278,"./de-at":279,"./de-at.js":279,"./de-ch":280,"./de-ch.js":280,"./de.js":278,"./dv":281,"./dv.js":281,"./el":282,"./el.js":282,"./en-au":283,"./en-au.js":283,"./en-ca":284,"./en-ca.js":284,"./en-gb":285,"./en-gb.js":285,"./en-ie":286,"./en-ie.js":286,"./en-il":287,"./en-il.js":287,"./en-in":288,"./en-in.js":288,"./en-nz":289,"./en-nz.js":289,"./en-sg":290,"./en-sg.js":290,"./eo":291,"./eo.js":291,"./es":292,"./es-do":293,"./es-do.js":293,"./es-mx":294,"./es-mx.js":294,"./es-us":295,"./es-us.js":295,"./es.js":292,"./et":296,"./et.js":296,"./eu":297,"./eu.js":297,"./fa":298,"./fa.js":298,"./fi":299,"./fi.js":299,"./fil":300,"./fil.js":300,"./fo":301,"./fo.js":301,"./fr":302,"./fr-ca":303,"./fr-ca.js":303,"./fr-ch":304,"./fr-ch.js":304,"./fr.js":302,"./fy":305,"./fy.js":305,"./ga":306,"./ga.js":306,"./gd":307,"./gd.js":307,"./gl":308,"./gl.js":308,"./gom-deva":309,"./gom-deva.js":309,"./gom-latn":310,"./gom-latn.js":310,"./gu":311,"./gu.js":311,"./he":312,"./he.js":312,"./hi":313,"./hi.js":313,"./hr":314,"./hr.js":314,"./hu":315,"./hu.js":315,"./hy-am":316,"./hy-am.js":316,"./id":317,"./id.js":317,"./is":318,"./is.js":318,"./it":319,"./it-ch":320,"./it-ch.js":320,"./it.js":319,"./ja":321,"./ja.js":321,"./jv":322,"./jv.js":322,"./ka":323,"./ka.js":323,"./kk":324,"./kk.js":324,"./km":325,"./km.js":325,"./kn":326,"./kn.js":326,"./ko":327,"./ko.js":327,"./ku":328,"./ku.js":328,"./ky":329,"./ky.js":329,"./lb":330,"./lb.js":330,"./lo":331,"./lo.js":331,"./lt":332,"./lt.js":332,"./lv":333,"./lv.js":333,"./me":334,"./me.js":334,"./mi":335,"./mi.js":335,"./mk":336,"./mk.js":336,"./ml":337,"./ml.js":337,"./mn":338,"./mn.js":338,"./mr":339,"./mr.js":339,"./ms":340,"./ms-my":341,"./ms-my.js":341,"./ms.js":340,"./mt":342,"./mt.js":342,"./my":343,"./my.js":343,"./nb":344,"./nb.js":344,"./ne":345,"./ne.js":345,"./nl":346,"./nl-be":347,"./nl-be.js":347,"./nl.js":346,"./nn":348,"./nn.js":348,"./oc-lnc":349,"./oc-lnc.js":349,"./pa-in":350,"./pa-in.js":350,"./pl":351,"./pl.js":351,"./pt":352,"./pt-br":353,"./pt-br.js":353,"./pt.js":352,"./ro":354,"./ro.js":354,"./ru":355,"./ru.js":355,"./sd":356,"./sd.js":356,"./se":357,"./se.js":357,"./si":358,"./si.js":358,"./sk":359,"./sk.js":359,"./sl":360,"./sl.js":360,"./sq":361,"./sq.js":361,"./sr":362,"./sr-cyrl":363,"./sr-cyrl.js":363,"./sr.js":362,"./ss":364,"./ss.js":364,"./sv":365,"./sv.js":365,"./sw":366,"./sw.js":366,"./ta":367,"./ta.js":367,"./te":368,"./te.js":368,"./tet":369,"./tet.js":369,"./tg":370,"./tg.js":370,"./th":371,"./th.js":371,"./tk":372,"./tk.js":372,"./tl-ph":373,"./tl-ph.js":373,"./tlh":374,"./tlh.js":374,"./tr":375,"./tr.js":375,"./tzl":376,"./tzl.js":376,"./tzm":377,"./tzm-latn":378,"./tzm-latn.js":378,"./tzm.js":377,"./ug-cn":379,"./ug-cn.js":379,"./uk":380,"./uk.js":380,"./ur":381,"./ur.js":381,"./uz":382,"./uz-latn":383,"./uz-latn.js":383,"./uz.js":382,"./vi":384,"./vi.js":384,"./x-pseudo":385,"./x-pseudo.js":385,"./yo":386,"./yo.js":386,"./zh-cn":387,"./zh-cn.js":387,"./zh-hk":388,"./zh-hk.js":388,"./zh-mo":389,"./zh-mo.js":389,"./zh-tw":390,"./zh-tw.js":390};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=395},397:function(t,e,n){"use strict";n(391)},398:function(t,e,n){var r=n(54)(!1);r.push([t.i,".treemap[data-v-18726290]{max-width:100%;min-height:40vh;margin:auto}",""]),t.exports=r},401:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(47),n(62)),c=n(253),j=(n(9),n(170),n(13),n(255)),l=n.n(j),d=(n(396),{name:"TreeMap",props:["data","type"],data:function(){return{}},computed:{treeMapData:function(){var t=this;return Object.entries(this.data).map((function(e){return{entry:e[1].name,stub:e[1].stub,activities:e[1].activities.length,organisations:t.$options.filters.flatten(e[1].orgs).length}}))}},methods:{drawChart:function(){var t=this,e=[{label:"Sectors",tree:this.treeMapData,key:"activities",groups:["entry"],borderWidth:1,fontColor:"white",borderColor:"rgba(255,255,255,1)",backgroundColor:["#CF3D1E","#F15623","#F68B1F","#FFC60B","#DFCE21","#BCD631","#95C93D","#48B85C","#00833D","#00B48D","#60C4B1","#27C4F4","#478DCB","#3E67B1","#4251A3","#59449B","#6E3F7C","#6A246D","#8A4873","#EB0080","#EF58A0","#C05A89"]}];new l.a(this.$refs.treemapCanvas,{type:"treemap",data:{datasets:e},options:{maintainAspectRatio:!1,title:{display:!1},legend:{display:!1},tooltips:{callbacks:{title:function(t,data){return t=t[0],data.datasets[t.datasetIndex].data[t.index].g},label:function(t,data){var e=data.datasets[t.datasetIndex].data[t.index]._data.children[0];return[" Activities: ".concat(e.activities)," Organisations: ".concat(e.organisations)]}}},onClick:function(n,i,r){var o=t.type,c=e[0].data[i[0]._index]._data.children[0].stub;t.$router.push({name:"sectors-type-stub",params:{type:o,stub:c}})}}})}},mounted:function(){this.drawChart()}}),m=(n(397),n(53)),h=Object(m.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{ref:"treemapCanvas",staticClass:"treemap"})])}),[],!1,null,"18726290",null).exports,v={data:function(){return{busy:!0}},components:{Sector:c.a,Treemap:h},methods:{flatten:function(t){return this.$options.filters.flatten(t)}},computed:Object(o.b)(["sectors"]),mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("loadSectors");case 2:t.busy=!1;case 3:case"end":return e.stop()}}),e)})))()}},f=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.busy?n("main",[n("div",{staticClass:"d-flex justify-content-center mb-3"},[n("b-spinner",{attrs:{variant:"secondary",label:"Loading..."}})],1)]):n("main",[n("nav",{staticClass:"secondary"},[n("nuxt-link",{attrs:{to:{name:"sectors",hash:"#humanitarian"}}},[t._v("Humanitarian")]),t._v(" "),n("nuxt-link",{attrs:{to:{name:"sectors",hash:"#dac"}}},[t._v("OECD")])],1),t._v(" "),n("h1",[t._v("Aid clusters and sectors in Somalia")]),t._v(" "),n("section",{attrs:{id:"content"}},[n("section",{attrs:{id:"humanitarian"}},[n("h3",[t._v("Humanitarian clusters and areas of concern")]),t._v(" "),n("client-only",[n("Treemap",{staticClass:"mb-4",attrs:{data:t.sectors.humanitarian,type:"humanitarian"}})],1),t._v(" "),n("div",{staticClass:"inline-list"},t._l(Object.keys(t.sectors.humanitarian).sort(),(function(e){return n("Sector",{key:e,attrs:{name:t.sectors.humanitarian[e].name,stub:e,type:"humanitarian",org_count:t.flatten(t.sectors.humanitarian[e].orgs).length,activity_count:t.sectors.humanitarian[e].activities.length}})})),1)],1),t._v(" "),n("hr"),t._v(" "),n("section",{attrs:{id:"dac"}},[n("h3",[t._v("OECD-DAC sectors")]),t._v(" "),n("client-only",[n("Treemap",{staticClass:"mb-4",attrs:{data:t.sectors.dac,type:"dac"}})],1),t._v(" "),n("div",{staticClass:"inline-list"},t._l(Object.keys(t.sectors.dac).sort(),(function(e){return n("Sector",{key:e,attrs:{name:t.sectors.dac[e].name,stub:e,type:"dac",org_count:t.flatten(t.sectors.dac[e].orgs).length,activity_count:t.sectors.dac[e].activities.length}})})),1)],1)])])])}),[],!1,null,null,null);e.default=f.exports}}]);