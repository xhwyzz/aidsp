(this["webpackJsonpjkfruy.run"]=this["webpackJsonpjkfruy.run"]||[]).push([[0],{165:function(e,t,a){e.exports=a(166)},166:function(e,t,a){"use strict";a.r(t);for(var n=a(158),o=a(117),l=a(118),i=a(125),r=a(119),c=a(126),s=a(0),m=a.n(s),d=a(6),u=a.n(d),p=(a(171),a(172),a(11)),h=a.n(p),f=a(94),b=a.n(f),g=a(29),E=a(96),v=a(323),_=a(162),w=a(18),y=a(31),D=a(324),C=a(127),S=a(325),F=a(321),j=a(10),q=a(50),k=a(322),x=a(67),O=a.n(x),A=a(120),I=a.n(A),M=(g.a.Group,E.a.TextArea),T=function(e){var t=e.comments;return m.a.createElement(v.a,{dataSource:t,header:"".concat(t.length," ").concat(t.length>1?"replies":"reply"),itemLayout:"horizontal",renderItem:function(e){return m.a.createElement(_.a,e)}})},B=function(e){var t=e.onChange,a=e.onSubmit,n=e.submitting,o=e.value;return m.a.createElement("div",null,m.a.createElement(w.a.Item,null,m.a.createElement(M,{rows:4,onChange:t,value:o})),m.a.createElement(w.a.Item,null,m.a.createElement(g.a,{htmlType:"submit",loading:n,onClick:a,type:"primary"},"Add Comment")))},N=y.a.Option,Y=[],Q=10;Q<36;Q++)Y.push(m.a.createElement(N,{key:Q.toString(36)+Q},Q.toString(36)+Q));var z=w.a.create({name:"form_in_modal"})(function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.visible,a=e.onCancel,n=e.onCreate,o=e.form.getFieldDecorator;return m.a.createElement(D.a,{visible:t,title:"\u521b\u5efa\u4e00\u4e2a\u65b0\u6807\u7b7e",okText:"Create",onCancel:a,onOk:n},m.a.createElement(w.a,{layout:"vertical"},m.a.createElement(w.a.Item,{label:"\u6807\u7b7e"},o("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u7b7e\uff01"}]})(m.a.createElement(E.a,null)))))}}]),t}(m.a.Component)),R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(c)))).state={data:[],user_data:[{id:"",name:""}],Options:[],label_data:[{id:"",name:""}],Options_label:[],nowDoc:"reqDoc",reqDoc:"",colDoc:"",labDoc:"",editor:[],comments:[],submitting:!1,value:"",qastatus:"Q",bacDoc:"",visible:!1},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){var n=window.location.pathname.split("/")[window.location.pathname.split("/").length-2];if(!e){var o={project_id:n,project_name:t.project_name,status:t.status,create_time:t.create_time._d,end_time:t.end_time._d,background:a.state.bacDoc,total_demand:t.total_demand,total_describe:t.total_describe,deadline:t.deadline._d,documents:t.documents,labels:"["+t.labels.toString()+"]",users_found:"["+t.users_found.toString()+"]",users_manager:"["+t.users_manager.toString()+"]",users_attend:"["+t.users_attend.toString()+"]"};console.log(b.a.stringify(o)),fetch(window.location.protocol+"//"+window.location.host+"/aidsp/api/project/"+n+"/",{method:"PUT",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:b.a.stringify(o)})}}))},a.normFile=function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList},a.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("params:",e);window.location.pathname.split("/")[window.location.pathname.split("/").length-2];O()({url:window.location.protocol+"//"+window.location.host+"/aidsp/api/project/1/?format=json",method:"get"}).then((function(e){e.create_time&&(e.create_time=h()(e.create_time,"YYYY-MM-DD")),e.end_time&&(e.end_time=h()(e.end_time,"YYYY-MM-DD")),e.deadline&&(e.deadline=h()(e.deadline,"YYYY-MM-DD")),a.setState({data:e}),a.props.form.setFieldsValue(a.state.data)})),O()({url:window.location.protocol+"//"+window.location.host+"/aidsp/api/user/?format=json",method:"get"}).then((function(e){a.setState({user_data:e});var t=e.map((function(e){return m.a.createElement(N,{value:e.id},e.name)}));a.setState({Options:t}),console.log(t)})),O()({url:window.location.protocol+"//"+window.location.host+"/aidsp/api/label/?format=json",method:"get"}).then((function(e){a.setState({label_data:e});var t=e.map((function(e){return m.a.createElement(N,{value:e.id},e.name)}));a.setState({Options_label:t})}))},a.handleSizeChange=function(e){a.setState({nowDoc:e.target.value}),a.state.nowDoc=e.target.value,"reqDoc"==a.state.nowDoc&&a.state.editor.txt.html(a.state.reqDoc),"colDoc"==a.state.nowDoc&&a.state.editor.txt.html(a.state.colDoc),"labDoc"==a.state.nowDoc&&a.state.editor.txt.html(a.state.labDoc)},a.edonchange=function(e){"reqDoc"==a.state.nowDoc&&a.setState({reqDoc:a.state.editor.txt.html()}),"colDoc"==a.state.nowDoc&&a.setState({colDoc:a.state.editor.txt.html()}),"labDoc"==a.state.nowDoc&&a.setState({labDoc:a.state.editor.txt.html()})},a.handleQASubmit=function(){a.state.value&&(a.setState({submitting:!0}),setTimeout((function(){a.setState({submitting:!1,value:"",comments:[].concat(Object(n.a)(a.state.comments),[{author:"Q"==a.state.qastatus?"Q":"A",avatar:"A"==a.state.qastatus?"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582719213619&di=dd745418dc019fef64d8d3977f20cf5b&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F18%2F01%2F15%2F6cba6f970e25cbcd93ea8b2e16caebc3.jpg":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582719238902&di=0c0c144c0fbd6046605a84ccf3c8f4a4&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F18%2F01%2F15%2F6555e09a050e6b13a9bd4fc79106f1bc.jpg",content:m.a.createElement("p",null,a.state.value),datetime:h()().fromNow()}])})}),100))},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleQAChange=function(e){a.setState({qastatus:e.target.value}),console.log(a.state.comments)},a.tag_fetch=function(e){O()({url:window.location.protocol+"//"+window.location.host+"/aidsp/api/label/?format=json",method:"get"}).then((function(e){a.setState({label_data:e});var t=e.map((function(e){return m.a.createElement(N,{value:e.id},e.name)}));a.setState({Options_label:t})}))},a.showModal=function(){a.setState({visible:!0})},a.handleCancel=function(){a.setState({visible:!1})},a.handleCreate=function(){var e=a.formRef.props.form;e.validateFields((function(t,n){t||(console.log("Received values of form: ",n),fetch(window.location.protocol+"//"+window.location.host+"/aidsp/api/label/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:b.a.stringify(n)}),e.resetFields(),a.setState({visible:!1}))}))},a.saveFormRef=function(e){a.formRef=e},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetch();var t=this.refs.editorElemMenu,a=this.refs.editorElemBody,n=new I.a(t,a);n.customConfig.onchange=function(t){e.edonchange()},n.customConfig.menus=["head","bold","fontSize","fontName","italic","underline","strikeThrough","foreColor","backColor","link","list","justify","quote","emoticon","image","table","video","code","undo","redo"],n.customConfig.uploadImgShowBase64=!0,n.create(),this.setState({editor:n}),n.txt.html(this.state.reqDoc);var o=this.refs.editorElemMenu_2,l=this.refs.editorElemBody_2,i=new I.a(o,l);i.customConfig.onchange=function(t){e.setState({bacDoc:e.state.editor.txt.html()})},i.customConfig.menus=["head","bold","fontSize","fontName","italic","underline","strikeThrough","foreColor","backColor","link","list","justify","quote","emoticon","image","table","video","code","undo","redo"],i.customConfig.uploadImgShowBase64=!0,i.create(),i.txt.html(this.state.bacDoc)}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,a={labelCol:{span:6},wrapperCol:{span:14},data:this.state.data},n=this.state,o=n.comments,l=n.submitting,i=n.value;return m.a.createElement(w.a,Object.assign({},a,{onSubmit:this.handleSubmit}),m.a.createElement(w.a.Item,{label:"\u9879\u76ee\u540d\u79f0"},t("project_name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9879\u76ee\u540d\u79f0!"}]})(m.a.createElement(E.a,{placeholder:"\u8bf7\u8f93\u5165\u9879\u76ee\u540d\u79f0",key:"sddsd"}))),m.a.createElement(w.a.Item,{label:"\u72b6\u6001"},t("status",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u72b6\u6001!"}]})(m.a.createElement(y.a,{placeholder:"\u8bf7\u9009\u62e9\u72b6\u6001"},m.a.createElement(N,{value:"\u672a\u5f00\u59cb"},"\u672a\u5f00\u59cb"),m.a.createElement(N,{value:"\u51c6\u5907\u4e2d"},"\u51c6\u5907\u4e2d"),m.a.createElement(N,{value:"\u6570\u636e\u91c7\u96c6"},"\u6570\u636e\u91c7\u96c6"),m.a.createElement(N,{value:"\u6570\u636e\u6807\u6ce8"},"\u6570\u636e\u6807\u6ce8"),m.a.createElement(N,{value:"\u6682\u505c"},"\u6682\u505c"),m.a.createElement(N,{value:"\u5b8c\u7ed3"},"\u5b8c\u7ed3")))),m.a.createElement(w.a.Item,{label:"\u521b\u5efa\u65f6\u95f4"},t("create_time",{rules:[{type:"object",required:!0,message:"Please select time!"}]})(m.a.createElement(C.a,null))),m.a.createElement(w.a.Item,{label:"\u7ed3\u675f\u65f6\u95f4"},t("end_time",{rules:[{type:"object",required:!0,message:"Please select time!"}]})(m.a.createElement(C.a,null))),m.a.createElement(w.a.Item,{label:"\u9879\u76ee\u80cc\u666f"},t("background",{valuePropName:"fileList",getValueFromEvent:this.normFile})(m.a.createElement("div",{className:"shop"},m.a.createElement("div",{className:"text-area"},m.a.createElement("div",{ref:"editorElemMenu_2",style:{backgroundColor:"#f1f1f1",border:"1px solid #ccc"},className:"editorElem-menu"}),m.a.createElement("div",{style:{padding:"0 10px",height:300,border:"1px solid #ccc",borderTop:"none"},ref:"editorElemBody_2",className:"editorElem-body"}))))),m.a.createElement(w.a.Item,{label:"\u9700\u6c42\u603b\u91cf"},t("total_demand",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9700\u6c42\u603b\u91cf!"}]})(m.a.createElement(S.a,null))),m.a.createElement(w.a.Item,{label:"\u9700\u6c42\u6570\u91cf\u63cf\u8ff0"},t("total_describe",{})(m.a.createElement(E.a,{placeholder:"\u8bf7\u8f93\u5165\u9700\u6c42\u6570\u91cf\u63cf\u8ff0"}))),m.a.createElement(w.a.Item,{label:"\u622a\u6b62\u65f6\u95f4"},t("deadline",{rules:[{type:"object",required:!0,message:"Please select time!"}]})(m.a.createElement(C.a,null))),m.a.createElement(w.a.Item,{label:"\u6807\u7b7e",onClick:this.tag_fetch},t("labels",{})(m.a.createElement(y.a,{placeholder:"\u8bf7\u8f93\u5165\u6807\u7b7e",mode:"multiple",dropdownRender:function(t){return m.a.createElement("div",null,t,m.a.createElement(F.a,{style:{margin:"4px 0"}}),m.a.createElement("div",{style:{padding:"4px 8px",cursor:"pointer"},onMouseDown:function(e){return e.preventDefault()},onClick:e.showModal},m.a.createElement(j.a,{type:"plus"})," Add item"))}},this.state.Options_label))),m.a.createElement(w.a.Item,{label:"\u521b\u5efa\u4eba"},t("users_found",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u521b\u5efa\u4eba!"}]})(m.a.createElement(y.a,{placeholder:"\u8bf7\u8f93\u5165\u521b\u5efa\u4eba",mode:"multiple"},this.state.Options))),m.a.createElement(w.a.Item,{label:"\u7ba1\u7406\u4eba"},t("users_manager",{})(m.a.createElement(y.a,{placeholder:"\u8bf7\u8f93\u5165\u7ba1\u7406\u4eba",mode:"multiple"},this.state.Options))),m.a.createElement(w.a.Item,{label:"\u53c2\u4e0e\u4eba"},t("users_attend",{})(m.a.createElement(y.a,{placeholder:"\u8bf7\u8f93\u5165\u53c2\u4e0e\u4eba",mode:"multiple"},this.state.Options))),m.a.createElement(w.a.Item,{label:"\u6587\u6863"},m.a.createElement(q.a.Group,{value:this.state.nowDoc,onChange:this.handleSizeChange},m.a.createElement(q.a.Button,{value:"reqDoc"},"\u9700\u6c42\u6587\u6863"),m.a.createElement(q.a.Button,{value:"colDoc"},"\u91c7\u96c6\u6587\u6863"),m.a.createElement(q.a.Button,{value:"labDoc"},"\u6807\u6ce8\u6587\u6863")),m.a.createElement("div",{className:"shop"},m.a.createElement("div",{className:"text-area"},m.a.createElement("div",{ref:"editorElemMenu",style:{backgroundColor:"#f1f1f1",border:"1px solid #ccc"},className:"editorElem-menu"}),m.a.createElement("div",{style:{padding:"0 10px",height:300,border:"1px solid #ccc",borderTop:"none"},ref:"editorElemBody",className:"editorElem-body"}))),m.a.createElement("div",null,o.length>0&&m.a.createElement(T,{comments:o}),m.a.createElement(q.a.Group,{onChange:this.handleQAChange,value:this.state.qastatus},m.a.createElement(q.a.Button,{value:"Q"},"Q"),m.a.createElement(q.a.Button,{value:"A"},"A")),m.a.createElement(_.a,{avatar:m.a.createElement(k.a,{src:"A"==this.state.qastatus?"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582719213619&di=dd745418dc019fef64d8d3977f20cf5b&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F18%2F01%2F15%2F6cba6f970e25cbcd93ea8b2e16caebc3.jpg":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582719238902&di=0c0c144c0fbd6046605a84ccf3c8f4a4&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F18%2F01%2F15%2F6555e09a050e6b13a9bd4fc79106f1bc.jpg",alt:"A"==this.state.qastatus?"Q":"A"}),content:m.a.createElement(B,{onChange:this.handleChange,onSubmit:this.handleQASubmit,submitting:l,value:i})}))),m.a.createElement(w.a.Item,{wrapperCol:{span:12,offset:6}},m.a.createElement(g.a,{type:"primary",htmlType:"submit"},"Submit")),m.a.createElement(z,{wrappedComponentRef:this.saveFormRef,visible:this.state.visible,onCancel:this.handleCancel,onCreate:this.handleCreate}))}}]),t}(m.a.Component),P=w.a.create({project_name:"validate_other"})(R);u.a.render(m.a.createElement(P,null),document.getElementById("container"))},172:function(e,t,a){},176:function(e,t){}},[[165,1,2]]]);
//# sourceMappingURL=main.3891dc26.chunk.js.map