(this["webpackJsonpjkfruy.run"]=this["webpackJsonpjkfruy.run"]||[]).push([[0],{166:function(e,t,a){e.exports=a(167)},167:function(e,t,a){"use strict";a.r(t);for(var o=a(158),n=a(117),l=a(118),r=a(125),c=a(119),s=a(126),i=a(0),d=a.n(i),m=a(6),u=a.n(m),h=(a(172),a(173),a(11)),p=a.n(h),b=a(94),f=a.n(b),g=a(29),v=a(96),_=a(324),w=a(162),E=a(18),D=a(31),q=a(163),S=a(127),y=a(325),C=a(322),j=a(10),I=a(50),x=a(323),k=a(67),O=a.n(k),Y=a(120),M=a.n(Y),T=(g.a.Group,v.a.TextArea),A=function(e){var t=e.comments;return d.a.createElement(_.a,{dataSource:t,header:"".concat(t.length," ").concat(t.length>1?"replies":"reply"),itemLayout:"horizontal",renderItem:function(e){return d.a.createElement(w.a,e)}})},Q=function(e){var t=e.onChange,a=e.onSubmit,o=e.submitting,n=e.value;return d.a.createElement("div",null,d.a.createElement(E.a.Item,null,d.a.createElement(T,{rows:4,onChange:t,value:n})),d.a.createElement(E.a.Item,null,d.a.createElement(g.a,{htmlType:"submit",loading:o,onClick:a},"\u6dfb\u52a0")))},B=D.a.Option,F=[],N=10;N<36;N++)F.push(d.a.createElement(B,{key:N.toString(36)+N},N.toString(36)+N));var z=E.a.create({name:"form_in_modal"})(function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.visible,a=e.onCancel,o=e.onCreate,n=e.form.getFieldDecorator;return d.a.createElement(q.a,{visible:t,title:"\u521b\u5efa\u4e00\u4e2a\u65b0\u6807\u7b7e",okText:"Create",onCancel:a,onOk:o},d.a.createElement(E.a,{layout:"vertical"},d.a.createElement(E.a.Item,{label:"\u6807\u7b7e"},n("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u7b7e\uff01"}]})(d.a.createElement(v.a,null)))))}}]),t}(d.a.Component)),P=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={data:[],user_data:[{id:"",name:""}],Options:[],label_data:[{id:"",name:""}],Options_label:[],nowDoc:"reqDoc",reqDoc:{doc:"",qa:[]},colDoc:{doc:"",qa:[]},labDoc:{doc:"",qa:[]},editor:[],comments:[],submitting:!1,value:"",qastatus:"Q",bacDoc:"",visible:!1,editor_2:[],reqId:"",colId:"",labId:""},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){var o=window.location.pathname.split("/")[window.location.pathname.split("/").length-2];if(!e){if("newproject"!=o){var n={project_name:t.project_name,status:t.status,end_time:t.end_time._d,background:a.state.bacDoc,total_demand:t.total_demand,total_describe:t.total_describe,deadline:t.deadline._d,labels:t.labels?t.labels.toString():null,users_found:t.users_found?t.users_found.toString():null,users_manager:t.users_manager?t.users_manager.toString():null,users_attend:t.users_attend?t.users_attend.toString():null,requirement_documents:a.state.reqDoc.doc,collection_documents:a.state.colDoc.doc,labeling_documents:a.state.labDoc.doc};fetch(window.location.protocol+"//"+window.location.host+"/aidsp/api/project/"+o+"/",{method:"PUT",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:f.a.stringify(n)})}else{var l={project_name:t.project_name,status:t.status,end_time:t.end_time._d,background:a.state.bacDoc,total_demand:t.total_demand,total_describe:t.total_describe,deadline:t.deadline._d,labels:t.labels?t.labels.toString():null,users_found:t.users_found?t.users_found.toString():null,users_manager:t.users_manager?t.users_manager.toString():null,users_attend:t.users_attend?t.users_attend.toString():null,requirement_documents:a.state.reqDoc.doc,collection_documents:a.state.colDoc.doc,labeling_documents:a.state.labDoc.doc};fetch(window.location.protocol+"//"+window.location.host+"/aidsp/api/project/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:f.a.stringify(l)})}!function(){var e=5,t=q.a.success({title:"\u63d0\u4ea4\u5b8c\u6210",content:"\u7a97\u53e3\u4f1a\u5728 ".concat(e," \u79d2\u540e\u5173\u95ed.")}),a=setInterval((function(){e-=1,t.update({content:"\u7a97\u53e3\u4f1a\u5728 ".concat(e," \u79d2\u540e\u5173\u95ed.")})}),1e3);setTimeout((function(){clearInterval(a),t.destroy()}),1e3*e)}()}}))},a.normFile=function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList},a.project_fetch=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=window.location.pathname.split("/")[window.location.pathname.split("/").length-2];O()({url:window.location.protocol+"//"+window.location.host+"/aidsp/api/project/"+e+"/?format=json",method:"get"}).then((function(e){console.log({doc:"col_doc"in e?e.col_doc:null}),e.create_time&&(e.create_time=p()(e.create_time,"YYYY-MM-DD")),e.end_time&&(e.end_time=p()(e.end_time,"YYYY-MM-DD")),e.deadline&&(e.deadline=p()(e.deadline,"YYYY-MM-DD")),a.setState({data:e}),a.props.form.setFieldsValue(a.state.data),a.setState({bacDoc:e.background,reqDoc:{doc:e.req_doc?e.req_doc:"",qa:e.req_qa?e.req_qa:[]},colDoc:{doc:e.col_doc?e.col_doc:"",qa:e.col_qa?e.col_qa:[]},labDoc:{doc:e.lab_doc?e.lab_doc:"",qa:e.lab_qa?e.lab_qa:[]},reqId:e.requirement_documents,colId:e.collection_documents,labId:e.labeling_documents}),a.state.editor_2.txt.html(e.background),a.state.editor.txt.html(a.state.reqDoc.doc),a.setState({comments:a.state.reqDoc.qa})})),O()({url:window.location.protocol+"//"+window.location.host+"/aidsp/api/user/?format=json",method:"get"}).then((function(e){a.setState({user_data:e});var t=e.map((function(e){return d.a.createElement(B,{value:e.id},e.name)}));a.setState({Options:t}),console.log(t)})),O()({url:window.location.protocol+"//"+window.location.host+"/aidsp/api/label/?format=json",method:"get"}).then((function(e){a.setState({label_data:e});var t=e.map((function(e){return d.a.createElement(B,{value:e.id},e.name)}));a.setState({Options_label:t})}))},a.handleSizeChange=function(e){a.setState({nowDoc:e.target.value}),a.state.nowDoc=e.target.value,"reqDoc"==a.state.nowDoc&&(a.state.editor.txt.html(a.state.reqDoc.doc),a.setState({comments:a.state.reqDoc.qa})),"colDoc"==a.state.nowDoc&&(a.state.editor.txt.html(a.state.colDoc.doc),a.setState({comments:a.state.colDoc.qa})),"labDoc"==a.state.nowDoc&&(a.state.editor.txt.html(a.state.labDoc.doc),a.setState({comments:a.state.labDoc.qa}))},a.edonchange=function(e){"reqDoc"==a.state.nowDoc&&(a.state.reqDoc.doc=a.state.editor.txt.html()),"colDoc"==a.state.nowDoc&&(a.state.colDoc.doc=a.state.editor.txt.html()),"labDoc"==a.state.nowDoc&&(a.state.labDoc.doc=a.state.editor.txt.html())},a.handleQASubmit=function(){a.state.value&&(a.setState({submitting:!0}),setTimeout((function(){var e=0;"reqDoc"==a.state.nowDoc&&(e=a.state.reqId),"colDoc"==a.state.nowDoc&&(e=a.state.colId),"labDoc"==a.state.nowDoc&&(e=a.state.labId),fetch(window.location.protocol+"//"+window.location.host+"/aidsp/api/qa/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"author="+("Q"==a.state.qastatus?"Q":"A")+"&avatar="+("Q"==a.state.qastatus?"https://goss.veer.com/creative/vcg/veer/800water/veer-128081877.jpg":"https://goss.veer.com/creative/vcg/veer/800water/veer-129496482.jpg")+"&content="+a.state.value+"&datetime="+p()().format("YYYY-MM-DD HH:mm:ss")+"&documents="+e}),a.setState({submitting:!1,value:"",comments:[].concat(Object(o.a)(a.state.comments),[{author:"Q"==a.state.qastatus?"Q":"A",avatar:"Q"==a.state.qastatus?"https://goss.veer.com/creative/vcg/veer/800water/veer-128081877.jpg":"https://goss.veer.com/creative/vcg/veer/800water/veer-129496482.jpg",content:d.a.createElement("p",null,a.state.value),datetime:p()().format("YYYY-MM-DD HH:mm:ss")}])},(function(){"reqDoc"==this.state.nowDoc&&(this.state.reqDoc.qa=this.state.comments),"colDoc"==this.state.nowDoc&&(this.state.colDoc.qa=this.state.comments),"labDoc"==this.state.nowDoc&&(this.state.labDoc.qa=this.state.comments)}))}),100))},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleQAChange=function(e){a.setState({qastatus:e.target.value}),console.log(a.state.comments)},a.tag_fetch=function(e){O()({url:window.location.protocol+"//"+window.location.host+"/aidsp/api/label/?format=json",method:"get"}).then((function(e){a.setState({label_data:e});var t=e.map((function(e){return d.a.createElement(B,{value:e.id},e.name)}));a.setState({Options_label:t})}))},a.showModal=function(){a.setState({visible:!0})},a.handleCancel=function(){a.setState({visible:!1})},a.handleCreate=function(){var e=a.formRef.props.form;e.validateFields((function(t,o){t||(console.log("Received values of form: ",o),fetch(window.location.protocol+"//"+window.location.host+"/aidsp/api/label/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:f.a.stringify(o)}),e.resetFields(),a.setState({visible:!1}))}))},a.saveFormRef=function(e){a.formRef=e},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.refs.editorElemMenu,a=this.refs.editorElemBody,o=new M.a(t,a);o.customConfig.onchange=function(t){e.edonchange()},o.customConfig.menus=["head","bold","fontSize","fontName","italic","underline","strikeThrough","foreColor","backColor","link","list","justify","quote","emoticon","image","table","video","code","undo","redo"],o.customConfig.uploadImgShowBase64=!0,o.customConfig.zIndex=100,o.create(),this.setState({editor:o}),o.txt.html(this.state.reqDoc.doc);var n=this.refs.editorElemMenu_2,l=this.refs.editorElemBody_2,r=new M.a(n,l);r.customConfig.onchange=function(t){e.setState({bacDoc:r.txt.html()})},r.customConfig.menus=["head","bold","fontSize","fontName","italic","underline","strikeThrough","foreColor","backColor","link","list","justify","quote","emoticon","image","table","video","code","undo","redo"],r.customConfig.uploadImgShowBase64=!0,r.customConfig.zIndex=100,r.create(),this.setState({editor_2:r}),this.project_fetch()}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,a={labelCol:{span:6},wrapperCol:{span:14},data:this.state.data},o=this.state,n=o.comments,l=o.submitting,r=o.value;return d.a.createElement(E.a,Object.assign({},a,{onSubmit:this.handleSubmit}),d.a.createElement(E.a.Item,{label:"\u9879\u76ee\u540d\u79f0"},t("project_name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9879\u76ee\u540d\u79f0!"}]})(d.a.createElement(v.a,{placeholder:"\u8bf7\u8f93\u5165\u9879\u76ee\u540d\u79f0",key:"sddsd"}))),d.a.createElement(E.a.Item,{label:"\u72b6\u6001"},t("status",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u72b6\u6001!"}]})(d.a.createElement(D.a,{placeholder:"\u8bf7\u9009\u62e9\u72b6\u6001"},d.a.createElement(B,{value:"\u672a\u5f00\u59cb"},"\u672a\u5f00\u59cb"),d.a.createElement(B,{value:"\u51c6\u5907\u4e2d"},"\u51c6\u5907\u4e2d"),d.a.createElement(B,{value:"\u6570\u636e\u91c7\u96c6"},"\u6570\u636e\u91c7\u96c6"),d.a.createElement(B,{value:"\u6570\u636e\u6807\u6ce8"},"\u6570\u636e\u6807\u6ce8"),d.a.createElement(B,{value:"\u6682\u505c"},"\u6682\u505c"),d.a.createElement(B,{value:"\u5b8c\u7ed3"},"\u5b8c\u7ed3")))),d.a.createElement(E.a.Item,{label:"\u521b\u5efa\u65f6\u95f4"},t("create_time",{})(d.a.createElement(S.a,{disabled:!0}))),d.a.createElement(E.a.Item,{label:"\u7ed3\u675f\u65f6\u95f4"},t("end_time",{rules:[{type:"object",required:!0,message:"Please select time!"}]})(d.a.createElement(S.a,null))),d.a.createElement(E.a.Item,{label:"\u9700\u6c42\u603b\u91cf"},t("total_demand",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9700\u6c42\u603b\u91cf!"}]})(d.a.createElement(y.a,null))),d.a.createElement(E.a.Item,{label:"\u9700\u6c42\u6570\u91cf\u63cf\u8ff0"},t("total_describe",{})(d.a.createElement(v.a,{placeholder:"\u8bf7\u8f93\u5165\u9700\u6c42\u6570\u91cf\u63cf\u8ff0"}))),d.a.createElement(E.a.Item,{label:"\u622a\u6b62\u65f6\u95f4"},t("deadline",{rules:[{type:"object",required:!0,message:"Please select time!"}]})(d.a.createElement(S.a,null))),d.a.createElement(E.a.Item,{label:"\u6807\u7b7e",onClick:this.tag_fetch},t("labels",{})(d.a.createElement(D.a,{placeholder:"\u8bf7\u8f93\u5165\u6807\u7b7e",mode:"multiple",dropdownRender:function(t){return d.a.createElement("div",null,t,d.a.createElement(C.a,{style:{margin:"4px 0"}}),d.a.createElement("div",{style:{padding:"4px 8px",cursor:"pointer"},onMouseDown:function(e){return e.preventDefault()},onClick:e.showModal},d.a.createElement(j.a,{type:"plus"})," Add item"))}},this.state.Options_label))),d.a.createElement(E.a.Item,{label:"\u521b\u5efa\u4eba"},t("users_found",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u521b\u5efa\u4eba!"}]})(d.a.createElement(D.a,{placeholder:"\u8bf7\u8f93\u5165\u521b\u5efa\u4eba",mode:"multiple"},this.state.Options))),d.a.createElement(E.a.Item,{label:"\u7ba1\u7406\u4eba"},t("users_manager",{})(d.a.createElement(D.a,{placeholder:"\u8bf7\u8f93\u5165\u7ba1\u7406\u4eba",mode:"multiple"},this.state.Options))),d.a.createElement(E.a.Item,{label:"\u53c2\u4e0e\u4eba"},t("users_attend",{})(d.a.createElement(D.a,{placeholder:"\u8bf7\u8f93\u5165\u53c2\u4e0e\u4eba",mode:"multiple"},this.state.Options))),d.a.createElement(E.a.Item,{label:"\u9879\u76ee\u80cc\u666f"},t("background",{valuePropName:"fileList",getValueFromEvent:this.normFile})(d.a.createElement("div",{className:"shop"},d.a.createElement("div",{className:"text-area"},d.a.createElement("div",{ref:"editorElemMenu_2",style:{backgroundColor:"#f1f1f1",border:"1px solid #ccc"},className:"editorElem-menu"}),d.a.createElement("div",{style:{padding:"0 10px",height:300,border:"1px solid #ccc",borderTop:"none"},ref:"editorElemBody_2",className:"editorElem-body"}))))),d.a.createElement(E.a.Item,{label:"\u6587\u6863"},d.a.createElement(I.a.Group,{value:this.state.nowDoc,onChange:this.handleSizeChange},d.a.createElement(I.a.Button,{value:"reqDoc"},"\u9700\u6c42\u6587\u6863"),d.a.createElement(I.a.Button,{value:"colDoc"},"\u91c7\u96c6\u6587\u6863"),d.a.createElement(I.a.Button,{value:"labDoc"},"\u6807\u6ce8\u6587\u6863")),d.a.createElement("div",{ref:"editorElemMenu",style:{backgroundColor:"#f1f1f1",border:"1px solid #ccc"},className:"editorElem-menu"}),d.a.createElement("div",{style:{padding:"0 10px",height:300,border:"1px solid #ccc",borderTop:"none"},ref:"editorElemBody",className:"editorElem-body"}),d.a.createElement("div",null,n.length>0&&d.a.createElement(A,{comments:n}),d.a.createElement(I.a.Group,{onChange:this.handleQAChange,value:this.state.qastatus},d.a.createElement(I.a.Button,{value:"Q"},"Q"),d.a.createElement(I.a.Button,{value:"A"},"A")),d.a.createElement(w.a,{avatar:d.a.createElement(x.a,{src:"Q"==this.state.qastatus?"https://goss.veer.com/creative/vcg/veer/800water/veer-128081877.jpg":"https://goss.veer.com/creative/vcg/veer/800water/veer-129496482.jpg",alt:"A"==this.state.qastatus?"Q":"A"}),content:d.a.createElement(Q,{onChange:this.handleChange,onSubmit:this.handleQASubmit,submitting:l,value:r})}))),d.a.createElement(E.a.Item,{wrapperCol:{span:12,offset:6}},d.a.createElement(g.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4")),d.a.createElement(z,{wrappedComponentRef:this.saveFormRef,visible:this.state.visible,onCancel:this.handleCancel,onCreate:this.handleCreate}))}}]),t}(d.a.Component),R=E.a.create({project_name:"validate_other"})(P);u.a.render(d.a.createElement(R,null),document.getElementById("container"))},173:function(e,t,a){},177:function(e,t){}},[[166,1,2]]]);
//# sourceMappingURL=main.89f5864c.chunk.js.map