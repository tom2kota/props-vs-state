(this["webpackJsonpreact-15"]=this["webpackJsonpreact-15"]||[]).push([[0],{143:function(e,t,a){e.exports=a.p+"static/media/logo192.a8d326d4.png"},172:function(e,t,a){e.exports=a(299)},298:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(34),r=a.n(o),c=a(43),s=a(44),u=a(47),i=a(46),m=function(e){return l.a.createElement("h4",{style:{color:"blue"}},"\u0421\u0435\u0439\u0447\u0430\u0441: ",e.dateAsProps)},p=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={time:""},e.sendDataToApp=function(){e.props.parentCallback(e.state.time)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.countSecond()}},{key:"countSecond",value:function(){var e=this;setInterval((function(){return e.updateTime()}),1e3)}},{key:"updateTime",value:function(){this.setState({time:(new Date).toLocaleTimeString()})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,this.state.time),l.a.createElement(m,{dateAsProps:this.state.time}),l.a.createElement("button",{onClick:this.sendDataToApp},"parentCallback(this.state.time)"))}}]),a}(n.Component),d=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={username:"",password:""},e.handleChangeUsername=function(t){e.setState({username:t.target.value})},e.handleChangePassword=function(t){e.setState({password:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),console.log("%c 1) Login (State)","background: green; color: white; display: block;"),console.log("FORM SUBMITTED WITH: \n                     ".concat(e.state.username," \n                     ").concat(e.state.password))},e}return Object(s.a)(a,[{key:"render",value:function(){return console.log("%c 1) Login (State)","background: green; color: white; display: block;",this.state),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("h1",null,"Login (State)"),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{onChange:this.handleChangeUsername,value:this.state.username,name:"name",type:"text",placeholder:"username / email"})),l.a.createElement("div",null,l.a.createElement("input",{onChange:this.handleChangePassword,value:this.state.password,name:"password",type:"password",placeholder:"password"}))),l.a.createElement("button",{type:"submit"},"Login"))}}]),a}(n.Component),g=a(98),h=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(""),c=Object(g.a)(r,2),s=c[0],u=c[1];return l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("%c 2) Login (State + Hooks)","background: blue; color: white; display: block;"),console.log("FORM SUBMITTED WITH: \n                     ".concat(a," \n                     ").concat(s))}},l.a.createElement("h1",null,"Login (Hooks)"),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{onChange:function(e){console.log("%c 2) Login (State + Hooks)","background: blue; color: white; display: block;"),console.log("hooks username event.target.value:",e.target.value),o(e.target.value)},value:a,name:"name",type:"text",placeholder:"username / email",required:!0})),l.a.createElement("div",null,l.a.createElement("input",{onChange:function(e){console.log("%c 2) Login (State + Hooks)","background: blue; color: white; display: block;"),console.log("hooks password event.target.value:",e.target.value),u(e.target.value)},value:s,name:"password",type:"password",placeholder:"password",required:!0}))),l.a.createElement("button",{type:"submit"},"Login"))},b=function(e){return l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("h1",null,"Login (Props #1)"),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{onChange:function(t){return e.setUsername(t.target.value)},value:e.username,name:"name",type:"text",placeholder:"username / email",required:!0})),l.a.createElement("div",null,l.a.createElement("input",{onChange:function(t){return e.setPassword(t.target.value)},value:e.password,name:"password",type:"password",placeholder:"password",required:!0}))),l.a.createElement("button",{type:"submit"},"Login"))},E=function(e){var t=e.username,a=e.password,n=e.onSubmit,o=e.setUsername,r=e.setPassword;return console.log("%c 4) Login (Props)","background: orange; color: white; display: block;"),console.log("LoginPropsTwo PROPS: ",e),console.log("LoginPropsTwo PROPS (username): ",t),console.log("LoginPropsTwo PROPS (password): ",a),l.a.createElement("form",{onSubmit:n},l.a.createElement("h1",null,"Login (Props #2)"),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{onChange:function(e){return o(e.target.value)},value:t,name:"name",type:"text",placeholder:"username / email",required:!0})),l.a.createElement("div",null,l.a.createElement("input",{onChange:function(e){return r(e.target.value)},value:a,name:"password",type:"password",lu:!0,placeholder:"password",required:!0}))),l.a.createElement("button",{type:"submit"},"Login"))},v=a(312),f=a(313),w=a(160),y=a(308),k=a(314),S=a(311),O=a(310),P=a(143),C=a.n(P),L=function(){return l.a.createElement(v.a,{textAlign:"center",style:{height:"calc(100vh - 10em)"},verticalAlign:"middle"},l.a.createElement(v.a.Column,{style:{maxWidth:450}},l.a.createElement(f.a,{as:"h2",color:"blue",textAlign:"center"},l.a.createElement(w.a,{src:C.a})," Log-in to your account"),l.a.createElement(y.a,{size:"large"},l.a.createElement(k.a,{raised:!0},l.a.createElement(y.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"E-mail address"}),l.a.createElement(y.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password"}),l.a.createElement(S.a,{color:"blue",fluid:!0,size:"large"},"Login"))),l.a.createElement(O.a,null,"New to us? ",l.a.createElement("a",{href:"/"},"Sign Up"))))},j=(a(298),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).callbackFunction=function(t){alert("From parent App component, childData = ".concat(t)),e.setState({dataStore:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return console.log("%c 0) App (State)","background: gray; color: white; display: block;"),console.log("App (state):",this.state),console.log("App (props):",this.props),l.a.createElement("div",{className:"App"},l.a.createElement(p,{parentCallback:this.callbackFunction}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(h,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(E,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(L,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[172,1,2]]]);
//# sourceMappingURL=main.3ec8c92d.chunk.js.map