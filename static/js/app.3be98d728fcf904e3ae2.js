webpackJsonp([1],{"/Yaw":function(t,e){},"53Vo":function(t,e){},"5n1C":function(t,e){},"67La":function(t,e){},"7Rjt":function(t,e){},"8Lcw":function(t,e){t.exports={name:"hydrogen-js-sdk",version:"1.7.0",description:"Bmob SDK",main:"./src/lib/app.js",scripts:{test:'echo "Error: no test specified" && exit 1',build:"webpack --config config/prod.env.js",watch:"webpack --watch --config config/prod.env.js",dev:"webpack-dev-server --config config/dev.env.js"},repository:{type:"git",url:"git+https://github.com/bmob/hydrogen-js-sdk.git"},author:"Bmob",license:"ISC",bugs:{url:"https://github.com/bmob/hydrogen-js-sdk/issues"},homepage:"https://github.com/bmob/hydrogen-js-sdk#readme",dependencies:{"node.extend":"^2.0.0",webpack:"^3.12.0"},devDependencies:{"clean-webpack-plugin":"^0.1.19",eslint:"^4.19.1","eslint-config-standard":"^11.0.0","eslint-friendly-formatter":"^4.0.1","eslint-loader":"^2.0.0","eslint-plugin-import":"^2.12.0","eslint-plugin-node":"^6.0.1","eslint-plugin-promise":"^3.7.0","eslint-plugin-standard":"^3.1.0","html-webpack-plugin":"^2.30.1","uglifyjs-webpack-plugin":"^1.2.5","webpack-dev-server":"^2.11.2"},directories:{doc:"docs"},keywords:["Bmob"],__npminstall_done:"Mon Oct 14 2019 16:31:29 GMT+0800 (GMT+08:00)",_from:"hydrogen-js-sdk@1.7.0",_resolved:"https://registry.npm.taobao.org/hydrogen-js-sdk/download/hydrogen-js-sdk-1.7.0.tgz"}},"93P3":function(t,e){},"9nEG":function(t,e){},AlTN:function(t,e){},DD1T:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("xd7I"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fillcontain",attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=a("C7Lr")({name:"App",mounted:function(){}},i,!1,function(t){a("swDs")},null,null).exports,o=a("7LQH"),r=(a("NWJq"),{name:"DataCard",props:{showNumber:Number,objs:Array,ot:Number},data:function(){return{item_span:24/this.showNumber,swiperOption:{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:{el:".swiper-pagination"},clientHeight:350}}},mounted:function(){var t=this;console.log("this is current swiper instance object",this.swiper),this.screenWidth=document.body.clientWidth;this.$nextTick(function(){t.timer||(t.timer=!0,setTimeout(function(){for(var e=t.$refs.div_show,a=e[0].getBoundingClientRect().width,s=0;s<e.length;s++)e[s].style.height=a+"px";t.timer=!1},500))}),window.onresize=function(){t.$nextTick(function(){t.timer||(t.timer=!0,setTimeout(function(){for(var e=t.$refs.div_show,a=e[0].getBoundingClientRect().width,s=0;s<e.length;s++)e[s].style.height=a+"px";t.timer=!1,console.log("base_w "+a)},500))})}},components:{}}),l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{attrs:{gutter:10}},t._l(t.objs,function(e,s){return a("div",{key:s},[a("el-col",{attrs:{span:t.item_span}},[a("el-card",[a("div",{ref:"div_show",refInFor:!0,staticClass:"aaa"},[a("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"image_main1"},[e.urls.length<=1?a("div",{staticClass:"image_main"},[a("img",{staticClass:"image",attrs:{src:e.url0}})]):a("swiper",{staticClass:"image_swiper",attrs:{options:t.swiperOption}},[t._l(e.urls,function(t,e){return a("swiper-slide",{key:e,staticClass:"image_main"},[a("img",{staticClass:"image",attrs:{src:t}})])}),t._v(" "),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),a("div",{staticClass:"content"},[a("span",[t._v(t._s(e.description))])])])])],1)],1)}),0)},staticRenderFns:[]};var c=a("C7Lr")(r,l,!1,function(t){a("ic1a")},"data-v-ad57541a",null).exports,d={name:"Tab1",components:{DataCard:c},data:function(){return{temp_obj:[],sql_pic:this.Common_Base.SQL_Pic,tag_filter:this.Common_Base.tags[1]}},activated:function(){console.log("---------activated  TAB1-----"),0===this.temp_obj.length&&(this.temp_obj=this.Common_Base.getFilterDatas(this.tag_filter,this.Common_Base.data_alls))},created:function(){console.log("---------created  TAB1-----"),this.temp_obj=this.Common_Base.getFilterDatas(this.tag_filter,this.Common_Base.data_alls)},mounted:function(){console.log("---------mounted  TAB1-----")},methods:{}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("DataCard",{attrs:{showNumber:3,objs:this.temp_obj}})],1)},staticRenderFns:[]};var m=a("C7Lr")(d,u,!1,function(t){a("67La")},"data-v-2e9816ae",null).exports,h={name:"Tab2",components:{DataCard:c},data:function(){return{temp_obj:[],sql_pic:this.Common_Base.SQL_Pic,tag_filter:this.Common_Base.tags[2]}},activated:function(){console.log("---------activated  TAB2-----"),0===this.temp_obj.length&&(this.temp_obj=this.Common_Base.getFilterDatas(this.tag_filter,this.Common_Base.data_alls))},created:function(){console.log("---------created  TAB2-----"),this.temp_obj=this.Common_Base.getFilterDatas(this.tag_filter,this.Common_Base.data_alls)},mounted:function(){console.log("---------mounted  TAB2-----")},methods:{}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("DataCard",{attrs:{showNumber:3,objs:this.temp_obj}})],1)},staticRenderFns:[]};var _=a("C7Lr")(h,p,!1,function(t){a("tcju")},"data-v-90daf4c2",null).exports,f=a("HzJ8"),v=a.n(f),g=a("aA9S"),b=a.n(g),C={name:"Tab0",components:{DataCard:c},data:function(){return{temp_obj:[],sql_pic:this.Common_Base.SQL_Pic,tag_filter:this.Common_Base.tags[0]}},mounted:function(){this.getShowDatas()},methods:{getShowDatas:function(){var t=this;Bmob.Query(this.sql_pic).find().then(function(e){e=e.reverse();var a=[],s=!0,i=!1,n=void 0;try{for(var o,r=v()(e);!(s=(o=r.next()).done);s=!0){var l=o.value,c=l.url.split(",");a.push({urls:c,description:l.description,url0:c[0],tags:l.tags})}}catch(t){i=!0,n=t}finally{try{!s&&r.return&&r.return()}finally{if(i)throw n}}t.temp_obj=b()([],t.temp_obj,a),t.Common_Base.data_alls=t.temp_obj}).catch(function(t){console.log(t)})}}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("DataCard",{attrs:{showNumber:3,objs:this.temp_obj}})],1)},staticRenderFns:[]};var x=a("C7Lr")(C,w,!1,function(t){a("7Rjt")},"data-v-ea33c8a6",null).exports,y={haha:function(t){console.log(t)}},k={name:"Home",components:{Tab0:x,Tab2:_,Tab1:m},data:function(){return{activeName:"type0",input:"",tags_router:this.Common_Base.tags_router}},methods:{handleClick:function(t,e){console.log(t.paneName),this.activeName=t.name,this.$router.push(this.activeName)},go2Home:function(){console.log("----gohome")},action_search:function(){console.log(this.input)}},comments:{Tab1:m},mounted:function(){console.log(this.tags_router),this.$router.push(this.activeName),console.log(y),y.haha("hahahahaha")}},j={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticStyle:{height:"100%"}},[a("el-header",[a("div",{staticClass:"head_main"},[a("el-tabs",{staticClass:"tabs",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.tags_router,function(t,e){return a("el-tab-pane",{key:e,attrs:{label:t.name,name:t.url}})}),1),t._v(" "),a("div",{staticClass:"top_center"},[a("img",{attrs:{src:"https://pic.superbed.cn/item/5da50d93451253d178976543.png",width:"200px",height:"100%"},on:{click:t.go2Home}})]),t._v(" "),a("div",{staticClass:"top_right_main"},[a("el-tabs",{staticClass:"tabs",staticStyle:{"margin-left":"10px"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"CONTACT US",name:"five"}})],1)],1)],1)]),t._v(" "),a("el-main",[a("keep-alive",[a("router-view")],1)],1)],1)},staticRenderFns:[]};var B=a("C7Lr")(k,j,!1,function(t){a("f5cZ")},"data-v-6d5de97a",null).exports,S={name:"Tab3",components:{DataCard:c},data:function(){return{temp_obj:[],sql_pic:this.Common_Base.SQL_Pic,tag_filter:this.Common_Base.tags[3]}},activated:function(){console.log("---------activated  TAB3-----"),0===this.temp_obj.length&&(this.temp_obj=this.Common_Base.getFilterDatas(this.tag_filter,this.Common_Base.data_alls))},created:function(){console.log("---------created  TAB3-----"),this.temp_obj=this.Common_Base.getFilterDatas(this.tag_filter,this.Common_Base.data_alls)},mounted:function(){console.log("---------mounted  TAB1-----")},methods:{}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("DataCard",{attrs:{showNumber:3,objs:this.temp_obj}})],1)},staticRenderFns:[]};var L=a("C7Lr")(S,T,!1,function(t){a("9nEG")},"data-v-10aeaaa0",null).exports,$={name:"Tab4",components:{DataCard:c},data:function(){return{temp_obj:[],sql_pic:this.Common_Base.SQL_Pic,tag_filter:this.Common_Base.tags[4]}},activated:function(){console.log("---------activated  TAB4-----"),0===this.temp_obj.length&&(this.temp_obj=this.Common_Base.getFilterDatas(this.tag_filter,this.Common_Base.data_alls))},created:function(){console.log("---------created  TAB4-----"),this.temp_obj=this.Common_Base.getFilterDatas(this.tag_filter,this.Common_Base.data_alls)},mounted:function(){console.log("---------mounted  TAB1-----")},methods:{}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("DataCard",{attrs:{showNumber:3,objs:this.temp_obj}})],1)},staticRenderFns:[]};var A=a("C7Lr")($,D,!1,function(t){a("/Yaw")},"data-v-5c30f4b1",null).exports,N={name:"Login",data:function(){return{username:"",pwd:""}},methods:{login:function(){var t=this;this.username&&this.pwd?Bmob.User.login(this.username,this.pwd).then(function(e){console.log(e),t.$router.push({name:"manager",params:{userId:"123"}})}).catch(function(e){console.log(e),t.$message(e.error)}):this.$message("请输入用户名和密码")}}},E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("H1",[t._v("Login")]),t._v(" "),a("div",{staticClass:"main_input_div"},[a("span",[t._v("用户名")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),a("div",{staticClass:"main_input_div"},[a("span",[t._v("密码")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入密码","show-password":"",clearable:""},model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}})],1),t._v(" "),a("el-button",{staticStyle:{width:"10rem","margin-left":"10rem"},on:{click:t.login}},[t._v("登录")])],1)},staticRenderFns:[]};var F=a("C7Lr")(N,E,!1,function(t){a("53Vo")},"data-v-461f88b4",null).exports,R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("div",{staticClass:"left"}),this._v(" "),e("div",{staticClass:"center"}),this._v(" "),e("div",{staticClass:"right"})])}]};a("C7Lr")({name:"Tab6"},R,!1,function(t){a("kQyZ")},"data-v-7cd11dde",null).exports;var P={name:"Manager",data:function(){return{}},methods:{handleSelect:function(t,e){console.log(t,e)}},mounted:function(){this.$router.push({name:"manager_add"})},computed:{defaultActive:function(){return console.log("defaultActive"),this.$route.path.replace("/","")}}},O={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-aside",{attrs:{width:"200px"}},[a("h5",[t._v("后台管理")]),t._v(" "),a("router-link",{attrs:{to:{name:"home"},target:"_blank"}},[t._v("首页")]),t._v(" "),a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.defaultActive,router:""},on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"manager_add"}},[a("i",{staticClass:"el-icon-circle-plus-outline"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("添加商品")])]),t._v(" "),a("el-menu-item",{attrs:{index:"manager_motify"}},[a("i",{staticClass:"el-icon-setting"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("修改商品")])])],1)],1),t._v(" "),a("el-main",[a("keep-alive",[a("router-view")],1)],1)],1)},staticRenderFns:[]};var Q=a("C7Lr")(P,O,!1,function(t){a("v5h6")},"data-v-31c01329",null).exports,q={name:"PicDataMotify",props:{obj:Object},data:function(){return{tags:this.Common_Base.tags,type:"danger"}},mounted:function(){},methods:{deletePic:function(){console.log("deletePic"),this.$emit("click_base",this.obj)},handleCommand:function(t){this.$emit("click_tag_add",this.obj,t)},handleClose:function(t){this.$emit("click_tag_remove",this.obj,t)}}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"close"},[a("i",{staticClass:"el-icon-close",on:{click:t.deletePic}})]),t._v(" "),a("el-dropdown",{on:{command:t.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[t._v("\n  添加标签"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.tags,function(e,s){return a("el-dropdown-item",{key:s,attrs:{command:e}},[t._v(t._s(e))])}),1)],1),t._v(" "),a("div",{staticClass:"tag_main"},t._l(t.obj.tags0,function(e){return a("el-tag",{key:e,attrs:{closable:"","disable-transitions":!1,type:t.type},on:{close:function(a){return t.handleClose(e)}}},[t._v("\n      "+t._s(e)+"\n    ")])}),1),t._v(" "),a("el-row",{attrs:{gutter:10}},t._l(t.obj.urls,function(t,e){return a("div",{key:e},[a("el-col",{attrs:{span:4}},[a("el-card",{attrs:{"body-style":{padding:"5px"}}},[a("div",{staticClass:"image_main"},[a("img",{staticClass:"image",attrs:{src:t}})])])],1)],1)}),0),t._v(" "),a("el-input",{staticStyle:{"margin-left":"1rem"},model:{value:t.obj.description,callback:function(e){t.$set(t.obj,"description",e)},expression:"obj.description"}})],1)},staticRenderFns:[]};var z={name:"ManageMotify",components:{PicDataMotify:a("C7Lr")(q,M,!1,function(t){a("DD1T")},"data-v-2384bf26",null).exports},data:function(){return{list_datas:[],sql_pic:this.Common_Base.SQL_Pic}},mounted:function(){var t=this;Bmob.Query(this.sql_pic).find().then(function(e){e=e.reverse();var a=!0,s=!1,i=void 0;try{for(var n,o=v()(e);!(a=(n=o.next()).done);a=!0){var r=n.value,l=r.url.split(","),c=[];void 0!==r.tags&&""!=r.tags&&(c=r.tags.split(",")),t.list_datas.push({urls:l,description:r.description,url0:l[0],tags0:c})}}catch(t){s=!0,i=t}finally{try{!a&&o.return&&o.return()}finally{if(s)throw i}}}).catch(function(t){console.log(t)})},methods:{updateAction:function(){var t=this;Bmob.Query(this.sql_pic).find().then(function(e){e.destroyAll().then(function(e){console.log(e,"ok"),t.addResultDatas()}).catch(function(t){console.log(t)})})},addResultDatas:function(){for(var t=this,e=new Array,a=0;a<this.list_datas.length;a++){var s=Bmob.Query(this.sql_pic);s.set("url",this.list_datas[a].urls.join(",")),s.set("tags",this.list_datas[a].tags0.join(",")),s.set("description",this.list_datas[a].description),e.push(s)}Bmob.Query(this.sql_pic).saveAll(e).then(function(e){console.log(e),t.loading=!1,t.$message("修改成功,去首页看看最新商品吧")}).catch(function(e){t.$message(e),t.loading=!1})},pic_update:function(t){console.log(t),this.list_datas.remove(t)},tag_add:function(t,e){var a=this.list_datas.indexOf(t);if(a<=-1)console.log("tag_add index error");else{var s=this.list_datas[a];s.tags0.indexOf(e)>-1?console.log("已存在"+e):s.tags0.push(e)}},tag_remove:function(t,e){var a=this.list_datas.indexOf(t);a<=-1?console.log("tag_remove index error"):this.list_datas[a].tags0.remove(e)}}},H={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("el-button",{on:{click:t.updateAction}},[t._v("保存更新")]),t._v(" "),t._l(t.list_datas,function(e,s){return a("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"main_list"},[a("PicDataMotify",{attrs:{obj:e},on:{click_base:t.pic_update,click_tag_add:t.tag_add,click_tag_remove:t.tag_remove}})],1)})],2)},staticRenderFns:[]};var I=a("C7Lr")(z,H,!1,function(t){a("ZY2Z")},"data-v-79d26c6c",null).exports,U={name:"PicData",props:{obj:Object},data:function(){return{tags:this.Common_Base.tags_add,type:"danger"}},mounted:function(){console.log(this.obj)},methods:{deletePic:function(){console.log("deletePic"),this.$emit("click_base",this.obj)},handleCommand:function(t){this.$emit("add_tag",this.obj,t)},handleClose:function(t){this.$emit("remove_tag",this.obj,t)}}},G={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"close"},[a("i",{staticClass:"el-icon-close",on:{click:t.deletePic}})]),t._v(" "),a("el-dropdown",{on:{command:t.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[t._v("\n  添加标签"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.tags,function(e,s){return a("el-dropdown-item",{key:s,attrs:{command:e}},[t._v(t._s(e))])}),1)],1),t._v(" "),a("div",{staticClass:"tag_main"},t._l(t.obj.tags,function(e){return a("el-tag",{key:e,attrs:{closable:"","disable-transitions":!1,type:t.type},on:{close:function(a){return t.handleClose(e)}}},[t._v("\n      "+t._s(e)+"\n    ")])}),1),t._v(" "),a("el-row",{attrs:{gutter:10}},t._l(t.obj.urls,function(t,e){return a("div",{key:e},[a("el-col",{attrs:{span:4}},[a("el-card",{attrs:{"body-style":{padding:"5px"}}},[a("div",{staticClass:"image_main"},[a("img",{staticClass:"image",attrs:{src:t}})])])],1)],1)}),0),t._v(" "),a("div",{staticClass:"content"},[a("span",[t._v(t._s(t.obj.text))])])],1)},staticRenderFns:[]};var W=a("C7Lr")(U,G,!1,function(t){a("kj7W")},"data-v-0a319a42",null).exports,Z={name:"PicS_Render",props:{objs:Array},watch:{objs:function(t,e){console.log(t[0])}},mounted:function(){},data:function(){return{item_span:4}},methods:{deletePic:function(t){this.$emit("click_base",t)}}},V={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"base_main",attrs:{gutter:10}},t._l(t.objs,function(e,s){return a("div",{key:s},[a("el-col",{attrs:{span:t.item_span}},[a("el-card",{attrs:{"body-style":{padding:"5px"}}},[a("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"main"},[a("img",{ref:"img",refInFor:!0,staticClass:"image",attrs:{src:e.src_url}}),t._v(" "),a("div",{staticClass:"close"},[a("i",{staticClass:"el-icon-close",on:{click:function(a){return t.deletePic(e)}}})])])])],1)],1)}),0)},staticRenderFns:[]};var Y=a("C7Lr")(Z,V,!1,function(t){a("AlTN")},"data-v-06e9794c",null).exports,J=a("84iU"),X={name:"ManagerAdd",components:{PicS_Render:Y,PicData:W},data:function(){return{pic_datas:[],temp_pic_files:[],url:"http://hdpublic.getlove.cn/5c8fce90641ec410596f3988.",text:"测试文本",text1:"本地文件描述(不同产品不要写相同的)",local_progress:0,loading:!1,sql_pic:this.Common_Base.SQL_Pic}},mounted:function(){var t=Bmob.User.current();if(console.log(t),!t)return this.$message("未登录"),void this.$router.push("login")},methods:{save_pic:function(){0!=this.url.trim().length&&0!=this.text.trim().length?(console.log(" save_pic "+this.url+this.text),this.pic_datas.push({urls:[this.url],text:this.text,tags:[]})):this.$message("请输入完整的数据")},pic_update:function(t){console.log(t),this.pic_datas.remove(t)},add_tag:function(t,e){var a=this.pic_datas.indexOf(t);if(a<=-1)console.log("tag_add index error");else{var s=this.pic_datas[a];s.tags.indexOf(e)>-1?this.$message("已存在"+e):s.tags.push(e)}},remove_tag:function(t,e){var a=this.pic_datas.indexOf(t);a<=-1?console.log("tag_remove index error"):this.pic_datas[a].tags.remove(e)},temp_pic_update:function(t){console.log(t),this.temp_pic_files.remove(t),this.$refs.file.value="",console.log(this.temp_pic_files)},readAsDataURL:function(){if(this.temp_pic_files.length>=20)this.$message("最多只能添加20张图片");else{console.log("--readAsDataURL--");var t=this.$refs.file.files[0],e=new FileReader;e.readAsDataURL(t);var a=this;e.onload=function(e){var s=this.result;a.temp_pic_files.push({src_url:s,file:t}),console.log("size "+a.temp_pic_files.length)}}},saveLocalFile2QiNiu:function(){var t=this;this.loading=!0;var e=new FormData;e.append("token","f88e1dced3494be0999ec111542e6064"),e.append("sync","0"),e.append("categories","pasha"),e.append("v","2");for(var a=0;a<this.temp_pic_files.length;a++)e.append("file"+a,this.temp_pic_files[a].file);J.post("https://api.superbed.cn/upload",e).then(function(e){0==e.data.err?(t.pic_datas.push({urls:e.data.urls,text:t.text1,tags:[]}),t.localoverGG()):t.$message(e.data)}).catch(function(e){t.$message(e)})},localoverGG:function(){console.log("local upload over "),this.loading=!1,this.temp_pic_files=[],this.$refs.file.value=""},doSendServer:function(){var t=this;this.loading=!0;for(var e=new Array,a=0;a<this.pic_datas.length;a++){var s=Bmob.Query("Pic_Data");s.set("url",this.pic_datas[a].urls.join(",")),s.set("description",this.pic_datas[a].text),s.set("tags",this.pic_datas[a].tags.join(",")),e.push(s)}Bmob.Query(this.sql_pic).saveAll(e).then(function(e){console.log(e),t.loading=!1,t.$message("数据保存完毕"),t.pic_datas.length=0}).catch(function(e){t.$message(e),t.loading=!1})}}},K={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"main"},[a("H1",[t._v("添加商品")]),t._v(" "),a("div",{staticClass:"input_main"},[a("el-input",{attrs:{placeholder:"请输入图片地址"},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),t._v(" "),a("el-input",{staticClass:"d_text",attrs:{placeholder:"请输入图片描述"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),t._v(" "),a("el-button",{staticStyle:{"margin-top":"1rem"},on:{click:t.save_pic}},[t._v("网络文件保存")]),t._v(" "),a("div",{staticClass:"input_main"},[a("input",{ref:"file",attrs:{type:"file",id:"file",multiple:"multiple"},on:{change:t.readAsDataURL}}),t._v(" "),a("el-input",{staticClass:"d_text",attrs:{placeholder:"请输入图片描述"},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}})],1),t._v(" "),a("PicS_Render",{attrs:{objs:t.temp_pic_files},on:{click_base:t.temp_pic_update}}),t._v(" "),a("el-button",{staticStyle:{"margin-top":"1rem"},on:{click:t.saveLocalFile2QiNiu}},[t._v("本地文件保存")]),t._v(" "),t.pic_datas.length>0?a("el-button",{staticStyle:{"margin-left":"70%"},attrs:{round:"",type:"success"},on:{click:t.doSendServer}},[t._v("已绑定数据上传\n  ")]):t._e(),t._v(" "),t._l(t.pic_datas,function(e,s,i){return a("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"list_main"},[a("PicData",{attrs:{obj:e},on:{click_base:t.pic_update,add_tag:t.add_tag,remove_tag:t.remove_tag}})],1)})],2)},staticRenderFns:[]};var tt=a("C7Lr")(X,K,!1,function(t){a("zOn0")},"data-v-85730ddc",null).exports,et={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("ul",{staticClass:"socialmedia"},[a("li",{staticClass:"socialmedia__item"},[a("a",{staticClass:"socialmedia__link",attrs:{href:"https://www.instagram.com/pashalee2",target:"_blank",rel:"noopener"}},[a("svg",{staticClass:"socialmedia__icon socialmedia__icon--instagram",attrs:{"aria-label":"Instagram"}},[a("use",{attrs:{"xlink:href":"#svg-icon-instagram"}}),t._v(" "),a("svg",{attrs:{id:"svg-icon-instagram",viewBox:"0 0 128 128",width:"100%",height:"100%"}},[a("title",[t._v("Instagram")]),t._v(" "),a("path",{attrs:{d:"M64 127c34.794 0 63-28.206 63-63S98.794 1 64 1 1 29.206 1 64s28.206 63 63 63zm0-102.767c-10.8 0-12.154.046-16.396.24-4.233.192-7.124.864-9.653 1.848-2.614 1.017-4.832 2.376-7.043 4.587-2.21 2.21-3.57 4.43-4.586 7.044-.983 2.53-1.655 5.42-1.848 9.654-.193 4.242-.24 5.596-.24 16.396s.047 12.154.24 16.396c.193 4.233.865 7.124 1.85 9.653 1.015 2.614 2.374 4.832 4.585 7.043 2.21 2.21 4.43 3.57 7.044 4.587 2.53.983 5.42 1.655 9.654 1.848 4.242.193 5.596.24 16.396.24s12.154-.047 16.396-.24c4.233-.193 7.124-.865 9.653-1.848 2.614-1.017 4.832-2.376 7.043-4.587 2.21-2.21 3.57-4.43 4.587-7.044.983-2.53 1.655-5.42 1.848-9.654.193-4.242.24-5.596.24-16.396s-.047-12.154-.24-16.396c-.193-4.233-.865-7.124-1.848-9.653-1.017-2.614-2.376-4.832-4.587-7.043-2.21-2.21-4.43-3.57-7.044-4.586-2.53-.983-5.42-1.655-9.654-1.848-4.242-.193-5.596-.24-16.396-.24zm0 19.346c-11.278 0-20.42 9.142-20.42 20.42 0 11.278 9.142 20.42 20.42 20.42 11.278 0 20.42-9.142 20.42-20.42 0-11.278-9.142-20.42-20.42-20.42zm0 33.676c-7.32 0-13.256-5.935-13.256-13.256 0-7.32 5.935-13.256 13.256-13.256 7.32 0 13.256 5.935 13.256 13.256 0 7.32-5.935 13.256-13.256 13.256zm26-34.484c0 2.636-2.137 4.772-4.772 4.772-2.636 0-4.772-2.136-4.772-4.772 0-2.635 2.136-4.772 4.772-4.772C87.863 38 90 40.137 90 42.772z","fill-rule":"evenodd"}})])])])]),t._v(" "),a("li",{staticClass:"socialmedia__item"},[a("a",{staticClass:"socialmedia__link",attrs:{href:"https://www.facebook.com/profile.php?id=100028511177252",target:"_blank",rel:"noopener"}},[a("svg",{staticClass:"socialmedia__icon socialmedia__icon--facebook",attrs:{"aria-label":"Facebook"}},[a("use",{attrs:{"xlink:href":"#svg-icon-facebook"}}),t._v(" "),a("svg",{attrs:{id:"svg-icon-facebook",viewBox:"0 0 128 128",width:"100%",height:"100%"}},[a("title",[t._v("Facebook")]),a("path",{attrs:{d:"M64 1C29.206 1 1 29.206 1 64s28.206 63 63 63c34.793 0 63-28.206 63-63S98.793 1 64 1zm19.377 37.98l-7.58.005c-5.99 0-7.088 2.846-7.088 7.023v9.1h14.21l-1.86 14.668H68.71v36.802H53.774V69.776H41.24V55.11h12.535V44.58c0-12.347 7.498-19.07 18.512-19.07 5.276 0 9.756.393 11.09.57v12.9z","fill-rule":"evenodd"}})])])])]),t._v(" "),a("li",{staticClass:"socialmedia__item"},[a("a",{staticClass:"socialmedia__link",attrs:{href:"https://twitter.com/HappySofficial",target:"_blank",rel:"noopener"}},[a("svg",{staticClass:"socialmedia__icon socialmedia__icon--twitter",attrs:{"aria-label":"Twitter"}},[a("use",{attrs:{"xlink:href":"#svg-icon-twitter"}})])])])]),t._v(" "),a("div",[t._v("\n    email\n  ")])])},staticRenderFns:[]};var at=a("C7Lr")({name:"ContactTab"},et,!1,function(t){a("fOOO")},"data-v-66c4ae3c",null).exports;s.default.use(o.a);var st=[{path:"/",name:"home",component:B,children:[{path:"/type1",name:"type1",component:m},{path:"/type2",name:"type2",component:_},{path:"/type3",name:"type3",component:L},{path:"/type0",name:"type0",component:x},{path:"/type4",name:"type4",component:A},{path:"/five",name:"five",component:at}]},{path:"/login",name:"login",component:F},{path:"/manager",name:"manager",component:Q,children:[{path:"/manager_add",name:"manager_add",component:tt},{path:"/manager_motify",name:"manager_motify",component:I}]}],it=new o.a({routes:st}),nt=a("NxjZ"),ot=a.n(nt),rt=(a("93P3"),[]);rt.push("ALL"),rt.push("NEW RELEASES"),rt.push("YOGA"),rt.push("SEAMLESS"),rt.push("ACCESSORIES");var lt=[];lt.push("NEW RELEASES"),lt.push("YOGA"),lt.push("SEAMLESS"),lt.push("ACCESSORIES");var ct=[],dt=0,ut=!0,mt=!1,ht=void 0;try{for(var pt,_t=v()(rt);!(ut=(pt=_t.next()).done);ut=!0){var ft=pt.value;ct.push({name:ft,url:"type"+dt}),dt++}}catch(t){mt=!0,ht=t}finally{try{!ut&&_t.return&&_t.return()}finally{if(mt)throw ht}}var vt={name:"Common",tags:rt,tags_add:lt,SQL_Pic:"Pic_Data",tags_router:ct,data_alls:[],getFilterDatas:function(t,e){var a=[],s=!0,i=!1,n=void 0;try{for(var o,r=v()(e);!(s=(o=r.next()).done);s=!0){var l=o.value;if(void 0!==l.tags&&""!=l.tags){var c=l.tags.split(","),d=!1;if("ALL"==t.toUpperCase())d=!0;else{var u=!0,m=!1,h=void 0;try{for(var p,_=v()(c);!(u=(p=_.next()).done);u=!0)if(p.value.toUpperCase()==t){d=!0;break}}catch(t){m=!0,h=t}finally{try{!u&&_.return&&_.return()}finally{if(m)throw h}}}d&&a.push({urls:l.urls,description:l.description,url0:l.url0,tags:l.tags})}}}catch(t){i=!0,n=t}finally{try{!s&&r.return&&r.return()}finally{if(i)throw n}}return a}},gt={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var bt=a("C7Lr")(vt,gt,!1,function(t){a("dD4b")},"data-v-3bf0c020",null).exports,Ct=a("Poa6"),wt=a.n(Ct),xt=a("84iU"),yt=a.n(xt),kt=a("Iufj"),jt=a.n(kt),Bt=(a("lWB4"),a("0L5c")),St=a.n(Bt),Tt=a("hxrE"),Lt=a.n(Tt),$t=a("DMPO"),Dt=a.n($t);a("t7ww");s.default.prototype.Common_Base=bt,Lt.a.initialize("1da64762c765038e0d8e2053731f9217","4f57e5be23ce295e196341c2ff43f3eb"),s.default.prototype.Bmob=Lt.a,Array.prototype.indexOf=function(t){for(var e=0;e<this.length;e++)if(this[e]==t)return e;return-1},Array.prototype.remove=function(t){var e=this.indexOf(t);e>-1&&this.splice(e,1)},s.default.use(Dt.a),s.default.use(St.a),s.default.use(jt.a,yt.a),s.default.use(wt.a),s.default.use(ot.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:it,template:"<App/>",components:{App:n}})},SojS:function(t,e,a){"use strict";var s={data:function(){return{slidesLength:1,_width:0,auto:!0,slideing:!0,timer1:"",className:"",dom:{},t:{sx:0,s:0,m:0,e:0},index:1}},props:{autoPlay:{default:!0},duration:{default:500},interval:{default:2500},showIndicator:{default:!0}},mounted:function(){var t=this;this.className="wh_swiper_"+1e3*Math.random().toFixed(3),setTimeout(function(){t.starDom(),t.dom.transform="translate3d("+-1*t._width+"px, 0px, 0px)",t.dom["-webkit-transform"]="translate3d("+-1*t._width+"px, 0px, 0px)",t.dom["-ms-transform"]="translate3d("+-1*t._width+"px, 0px, 0px)",t.autoPlay&&t.setTime()},50)},methods:{s:function(t){this.slideing&&(this.clearTimeOut(),this.t.sx=this.getTransform(),this.t.s=t.touches[t.touches.length-1].clientX)},m:function(t){this.slideing&&-1!=this.t.s&&(this.clearTimeOut(),this.t.m=t.touches[t.touches.length-1].clientX-this.t.s,this.setTransform(this.t.m+this.t.sx))},e:function(t){if(this.slideing&&-1!=this.t.s){this.clearTimeOut(),this.setTransform(this.t.m+this.t.sx);t=this.getTransform();t+=this.t.m>0?.3*this._width:-.3*this._width,this.index=-1*Math.round(t/this._width),this.wh("touch")}},setTransform:function(t){this.dom.transform="translate3d("+t+"px, 0px, 0px)",this.dom["-webkit-transform"]="translate3d("+t+"px, 0px, 0px)",this.dom["-ms-transform"]="translate3d("+t+"px, 0px, 0px)"},getTransform:function(){var t=this.dom.transform||this.dom["-webkit-transform"]||this.dom["-ms-transform"];return t=(t=t.substring(12)).match(/(\S*)px/)[1],Number(t)},fn:function(t){t.preventDefault()},prevSlide:function(){this.clearTimeOut(),this.index--,this.wh()},nextSlide:function(){this.clearTimeOut(),this.index++,this.wh()},slideTo:function(t){this.clearTimeOut(),this.index=t+1,this.wh()},wh:function(t){var e=this;this.slideing=!1,this.dom.transition="touch"==t?"250ms":this.duration+"ms",this.setTransform(-1*this.index*this._width),this.t.m=0,this.t.s=-1,this.autoPlay&&this.setTime();var a="touch"==t?"250":this.duration;setTimeout(function(){e.dom.transition="0s",e.index>=e.slidesLength+1&&(e.index=1,e.setTransform(-1*e.index*e._width)),e.index<=0&&(e.index=e.slidesLength,e.setTransform(-1*e.index*e._width)),e.$emit("transtionend",e.index-1),e.auto=!0,e.slideing=!0},a)},setTime:function(){var t=this;this.timer1=window.setTimeout(function(){t.auto?(t.index++,t.wh()):window.clearTimeout(t.timer1)},this.interval)},starDom:function(){var t=document.querySelector("."+this.className).getElementsByClassName("wh_slide");if(this.slidesLength=t.length,this.slidesLength>1){var e=t[0].cloneNode(!0),a=t[this.slidesLength-1].cloneNode(!0);document.querySelector("."+this.className).insertBefore(a,t[0]),document.querySelector("."+this.className).appendChild(e),this._width=document.querySelector("."+this.className).offsetWidth,this.dom=document.querySelector("."+this.className).style}},clearTimeOut:function(){this.auto=!1,window.clearTimeout(this.timer1)}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wh_content",on:{touchmove:t.fn}},[a("div",{staticClass:"wh_swiper",class:t.className,on:{touchstart:t.s,touchmove:t.m,touchend:t.e}},[t._t("default")],2),t._v(" "),t.showIndicator?a("div",{staticClass:"wh_indicator"},t._l(t.slidesLength,function(e,s){return a("div",{staticClass:"wh_indicator_item",class:{wh_show_bgcolor:t.index-1==s}})}),0):t._e()])},staticRenderFns:[]};a("C7Lr")(s,i,!1,function(t){a("vdtz")},null,null).exports},ZY2Z:function(t,e){},dD4b:function(t,e){},f5cZ:function(t,e){},fOOO:function(t,e){},ic1a:function(t,e){},kQyZ:function(t,e){},kZfy:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"wh_slide",on:{click:this.clickSlide}},[this._t("default")],2)},staticRenderFns:[]};a("C7Lr")({methods:{clickSlide:function(){this.$emit("click")}}},s,!1,function(t){a("5n1C")},null,null).exports},kj7W:function(t,e){},lWB4:function(t,e){},swDs:function(t,e){},t7ww:function(t,e){},tcju:function(t,e){},v5h6:function(t,e){},vdtz:function(t,e){},zOn0:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3be98d728fcf904e3ae2.js.map