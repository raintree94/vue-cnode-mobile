webpackJsonp([4,8],{21:function(t,a,s){var e,n;e=s(82);var i=s(98);n=e=e||{},"object"!=typeof e.default&&"function"!=typeof e.default||(n=e=e.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=e},82:function(t,a,s){"use strict";var e=s(2),n=(s.n(e),s(11)),i=s.n(n),c=s(15),o=s.n(c),r=s(89),l=(s.n(r),s(6)),u=s(14),d=s(5),m=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&(t[e]=s[e])}return t};a.default={data:function(){return{activeItem:1,messagesData:{},currentData:[],noData:!1}},mounted:function(){var t=this;this.userInfo.loginname&&s.i(l.i)({accesstoken:this.userInfo.accesstoken}).then(function(a){a.success?(t.messagesData=a.data,a.data.hasnot_read_messages.length?(t.currentData=a.data.hasnot_read_messages,t.activeItem=2):t.currentData=a.data.has_read_messages,t.noData=0===t.currentData.length):t.noData=!0,d.a.close()}).catch(function(t){d.a.close()})},methods:{handleTabChange:function(t){this.activeItem=t,this.currentData=1===t?this.messagesData.has_read_messages:this.messagesData.hasnot_read_messages,this.noData=0===this.currentData.length}},filters:{getTimeInfo:function(t){return s.i(u.a)(t)}},computed:m({},s.i(e.mapGetters)(["userInfo"])),components:{nvHead:i.a,nvLoad:o.a}}},89:function(t,a){},98:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return a("div",[a("nv-head",{attrs:{title:"消息"}})," ",a("section",{staticClass:"message"},[a("ul",{staticClass:"tab"},[a("li",{staticClass:"tab-item",class:{active:1===this.activeItem},on:{click:function(a){t.handleTabChange(1)}}},["已读消息"])," ",a("li",{staticClass:"tab-item",class:{active:2===this.activeItem},on:{click:function(a){t.handleTabChange(2)}}},["未读消息"])])," ",t._l(t.currentData,function(s){return a("div",{staticClass:"message-content"},[a("section",{staticClass:"author-info"},[a("img",{staticClass:"head",attrs:{src:s.author.avatar_url}})," ",a("div",{staticClass:"info"},[a("span",{staticClass:"left"},[a("span",{staticClass:"name"},[t._s(s.author.loginname)])," ","at"===s.type?a("span",{staticClass:"name"},["在回复中@了您"]):t._e()," ","reply"===s.type?a("span",{staticClass:"name"},["回复了您的话题"]):t._e()])," ",a("span",{staticClass:"right"},[a("span",{staticClass:"name"},[t._s(t._f("getTimeInfo")(s.reply.create_at))])])])])," ",a("div",{staticClass:"reply-content markdown-body",domProps:{innerHTML:t._s(s.reply.content)}})," ",a("router-link",{attrs:{to:{name:"topic",params:{id:s.topic.id}}}},[a("div",{staticClass:"topic-title"},["\n                    话题："+t._s(s.topic.title)+"\n                "])])])})," ",a("div",{directives:[{name:"show",rawName:"v-show",value:t.noData,expression:"noData"}],staticClass:"no-data"},[a("i",{staticClass:"iconfont icon-empty"}),"\n            暂无数据!\n        "])])])},staticRenderFns:[]}}});