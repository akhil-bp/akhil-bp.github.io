(this["webpackJsonpmicrosoft-teams-ext"]=this["webpackJsonpmicrosoft-teams-ext"]||[]).push([[5],{726:function(e,t,a){e.exports=a.p+"static/media/mteams-logo.svg.36bd4a8e.svg"},730:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var n=a(2),o=a.n(n),s=a(5),i=a(6),r=a(7),l=a(9),c=a(8),d=a(0),m=a.n(d),u=a(25),p=a(18),g=a(12),f=a(16),y=a(368),v=a(367),h=a(16),_=a(13),b=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).checkAnyOneLoggedIn=function(){if(null!==h.userData()){var e=h.userData();console.log(e);var t={};t.name=e.user_data.us_name,t.organization="Mykademy Production",t.image=e.user_data.us_image,n.setState({is_mykademy_logged_in:!0,mykademy_user:t,mykademy_no_user_signed_in:!1})}if(null!==_.userData()){var a,o,s,i,r,l=_.userData();console.log(l);var c={};c.name=null===l||void 0===l||null===(a=l.data)||void 0===a||null===(o=a.member_details)||void 0===o?void 0:o.first_name,c.organization=null===l||void 0===l||null===(s=l.data)||void 0===s||null===(i=s.member_details)||void 0===i||null===(r=i.organisation_details)||void 0===r?void 0:r.name,c.image=l.data.member_details.image_url,n.setState({is_myportfolio_logged_in:!0,myportfolio_user:c,myportfolio_no_user_signed_in:!1})}console.log(n.state.mykademy_user),console.log(n.state.myportfolio_user)},n.updateStateFromChild=function(e){n.checkAnyOneLoggedIn(),n.setState(e)},n.letsGoLogic=function(){return!(!n.state.is_mykademy_logged_in&&!n.state.mykademy_no_user_signed_in||!n.state.is_myportfolio_logged_in&&!n.state.myportfolio_no_user_signed_in)&&(!(!n.state.is_mykademy_logged_in||!n.state.is_myportfolio_logged_in)||(!1!==n.state.mykademy_no_user_signed_in||!1!==n.state.myportfolio_no_user_signed_in)&&(!0===n.state.mykademy_no_user_signed_in&&!1===n.state.myportfolio_no_user_signed_in||(!1===n.state.mykademy_no_user_signed_in&&!0===n.state.myportfolio_no_user_signed_in||void 0)))},n.state={mykademy_user:{},myportfolio_user:{},choose_mykademy:!1,choose_myportfolio:!1,is_mykademy_logged_in:!1,is_myportfolio_logged_in:!1,mykademy_no_user_signed_in:!1,myportfolio_no_user_signed_in:!1},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){null!==localStorage.getItem("platfrom")&&localStorage.removeItem("platfrom"),this.checkAnyOneLoggedIn()}},{key:"closeModal",value:function(){u.initialize(),u.authentication.notifySuccess({success:!0})}},{key:"render",value:function(){var e=this,t=this.state,a=t.mykademy_user,n=t.myportfolio_user;return this.state.choose_mykademy||this.state.choose_myportfolio?this.state.choose_mykademy?m.a.createElement(y.a,{updateStateFromChild:this.updateStateFromChild}):this.state.choose_myportfolio?m.a.createElement(v.a,{updateStateFromChild:this.updateStateFromChild}):void 0:m.a.createElement("div",{class:"modal fade organization-modal show",id:"orgModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-modal":"true",role:"dialog",style:{display:"block"}},m.a.createElement("div",{class:""},m.a.createElement("div",{class:"modal-content",style:{height:"100vh"}},m.a.createElement("div",{class:"modal-body"},m.a.createElement("form",null,m.a.createElement("div",{id:"multi-step",class:"step active"},m.a.createElement("h4",null,"Sign in to your OLIVE accounts"),m.a.createElement("p",{class:"mb-20"},"Please sign into each of your accounts below."),m.a.createElement("div",{class:"multi-account-wrap"},m.a.createElement("img",{class:"olive-logo-rounded",src:(null===a||void 0===a?void 0:a.image)?a.image:"assets/images/landing/my-kademy-logo.png",alt:"my Kademy"}),this.state.is_mykademy_logged_in?m.a.createElement("div",{class:"account-info"},m.a.createElement("h5",null,"myKademy ",m.a.createElement("img",{src:"assets/images/landing/sign-tick.svg",alt:"sign in"})),m.a.createElement("span",{class:"sign-in-text"},"Signed in as ",null===a||void 0===a?void 0:a.name),m.a.createElement("span",{class:"sign-in-text"},null===a||void 0===a?void 0:a.organization)):m.a.createElement("div",{class:"account-info"},m.a.createElement("h5",null,"myKademy",this.state.mykademy_no_user_signed_in&&m.a.createElement("img",{src:"assets/images/landing/error-icon.svg",alt:"sign in error"})),this.state.mykademy_no_user_signed_in&&m.a.createElement("span",{class:"sign-in-text"},"No account signed in"),m.a.createElement("a",{onClick:function(){return e.setState({choose_mykademy:!0})},href:"javascript:void(0);","data-tab":"mykademy-step-1"},"Sign in"),!this.state.mykademy_no_user_signed_in&&m.a.createElement("a",{onClick:function(){return e.setState({mykademy_no_user_signed_in:!0})},href:"javascript:void(0);"},"I don\u2019t have a myKademy account"))),m.a.createElement("div",{class:"multi-account-wrap"},m.a.createElement("img",{class:"olive-logo-rounded",src:(null===n||void 0===n?void 0:n.image)?n.image:"assets/images/landing/my-portfolio-logo.png",alt:"my portfolio"}),this.state.is_myportfolio_logged_in?m.a.createElement("div",{class:"account-info"},m.a.createElement("h5",null,"myPortfolio ",m.a.createElement("img",{src:"assets/images/landing/sign-tick.svg",alt:"sign in"})),m.a.createElement("span",{class:"sign-in-text"},"Signed in as ",null===n||void 0===n?void 0:n.name),m.a.createElement("span",{class:"sign-in-text"},null===n||void 0===n?void 0:n.organization)):m.a.createElement("div",{class:"account-info"},m.a.createElement("h5",null,"myPortfolio",this.state.myportfolio_no_user_signed_in&&m.a.createElement("img",{src:"assets/images/landing/error-icon.svg",alt:"sign in error"})),this.state.myportfolio_no_user_signed_in&&m.a.createElement("span",{class:"sign-in-text"},"No account signed in"),m.a.createElement("a",{onClick:function(){return e.setState({choose_myportfolio:!0})},href:"javascript:void(0);","data-tab":"myportfolio-step-1"},"Sign in"),!this.state.myportfolio_no_user_signed_in&&m.a.createElement("a",{onClick:function(){return e.setState({myportfolio_no_user_signed_in:!0})},href:"javascript:void(0);"},"I don\u2019t have a myPortfolio account"))),m.a.createElement("div",{class:"need-help"},m.a.createElement("p",null,"Need help signing in? Visit our support page ",m.a.createElement("a",{href:"javascript:void(0);"},"here."))),m.a.createElement("div",{class:"btn-wrap"},m.a.createElement("a",{onClick:function(){return e.props.updateStateFromChild({single_auth:!1})},href:"javascript:void(0);",class:"btn btn-secondary","data-tab":"olive-step-1"},"Back"),this.letsGoLogic()?m.a.createElement("a",{onClick:function(){return e.closeModal()},className:"btn btn-primary"},"Let\u2019s go "):m.a.createElement("button",{disabled:!0,className:"btn btn-primary"},"Let\u2019s go "))))))))}}]),a}(d.Component),E=(a(726),a(10)),k=(a(183),a(34)),S=a(44),w=(a(13),a(72)),C=a(452),x=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={user:{},errors:{},isInvalidCredentials:!1,sent_data:{},formValied:"false",btnLoading:!1,show_login:!1,choose_login_type:!0,single_auth:!1,loader:!1},e.inputhandle=function(t,a){e.state.user[t]=a.target.value,!1===e.validateFields(!1)?e.setState({formValied:"false"}):e.setState({formValied:"true",isInvalidCredentials:!1})},e.validateFields=function(t){var a=e.state.user,n={},o=!0;if(a.password&&a.password.match(/^\S*$/)||(o=!1,n.password="Password cannot be empty"),a.email||(o=!1,n.email="Email cannot be empty"),"undefined"!==typeof a.email){var s=a.email.lastIndexOf("@"),i=a.email.lastIndexOf(".");s<i&&s>0&&-1===a.email.indexOf("@@")&&i>2&&a.email.length-i>2||(o=!1,n.email="Enter a valid Email")}return t&&e.setState({errors:n}),o},e.loginSubmit=function(){var t=Object(s.a)(o.a.mark((function t(a){var n,s,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),console.log("hereeeeeeeeeeeeeeee"),n=e.validateFields(!0),s=!1,i=!1,!n){t.next=17;break}return e.setState({btnLoading:!0}),t.next=9,e.myPrortfolio_Login();case 9:return s=t.sent,t.next=12,e.mykademyLogin(e.state.user);case 12:i=t.sent,console.log(s,i,"status"),s&&i?(e.setState({btnLoading:!1}),u.initialize(),u.authentication.notifySuccess({success:!0})):s?(e.setState({btnLoading:!1,isInvalidCredentials:!1}),setTimeout((function(){u.initialize(),u.authentication.notifySuccess({success:!0})}),3e3),Object(E.Notification)(" Mykademy login failed!","info","Info")):i?(e.setState({btnLoading:!1,isInvalidCredentials:!1}),setTimeout((function(){u.initialize(),u.authentication.notifySuccess({success:!0})}),3e3),Object(E.Notification)("Myportfolio login failed!","info","Info")):e.setState({isInvalidCredentials:!0}),t.next=18;break;case 17:e.setState({isInvalidCredentials:!0});case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.check_vle_db=function(){var t=Object(s.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),e.setState({loader:!0,isInvalidCredentials:!1}),n={domain:e.state.user.subdomain},t.next=5,w.getOrg(n).then((function(t){if(console.log(t),"success"===t.data.status)e.subdomainValidation(a);else{var n=e.state.errors;n.subdomain="Oops! We can\u2019t find that organisation in OLIVE VLE.please try with mykademy/myportfolio",e.setState({errors:n,loader:!1})}console.log(t,"get responseeeeeeeee")})).catch((function(t){var a=e.state.errors;a.subdomain="Oops! We can\u2019t find that organisation in OLIVE VLE.please try with mykademy/myportfolio",e.setState({errors:a,loader:!1}),console.log(t)}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.subdomainValidation=function(){var t=Object(s.a)(o.a.mark((function t(a){var n,s,i,r,l,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),e.setState({loader:!0,isInvalidCredentials:!1}),console.log(e.state.user.subdomain,"hereeeeeeeeeee"),n=p(new Date),s=n.format("DD-MM-YYYY"),i=g.config.mykademy.REACT_APP_MYKADEMY_SUBDOMAIN_VALIDATION_SECRET,r={signature:"mykademy microsoft-teams-app:"+g.config.mykademy.APP_TOKEN_CREATE,app_name:"microsoft teams",account_domain:"".concat(e.state.user.subdomain,".mykademy.com"),date:s},l=C(r,i),c={Authorization:"mykademy microsoft-teams-app:".concat(l)},t.next=11,k.domainValidation(c).then((function(t){200===t.data.status&&(localStorage.setItem("platfrom","olivevle"),localStorage.setItem("mykademy_app_token",t.data.data.app_signature)),e.setState({show_login:!0,loader:!1})})).catch((function(t){console.log(t);var a=e.state.errors;a.subdomain="Oops! We can\u2019t find that organisation. Remember to avoid using spaces.",e.setState({errors:a,loader:!1})}));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.updateStateFromChild=function(t){e.setState(t)},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.generateToken()}},{key:"generateToken",value:function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.generatePortfolioStaticToken();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"encodeBase64",value:function(e){var t=e.email,a=e.password;e.subdomain;return{learner_email:btoa(t),learner_password:btoa(a)}}},{key:"myPrortfolio_Login",value:function(){var e=Object(s.a)(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(s.a)(o.a.mark((function e(a,n){var i,r,l,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={"Content-Type":"multipart/form-data"},null!==(r=localStorage.getItem("portfolio_authtoken"))&&(i.Authorization="Bearer "+JSON.parse(r)),l=new FormData,c=t.state.user.email.toLowerCase(),l.append("username",c),l.append("password",t.state.user.password),l.append("sub_domain",t.state.user.subdomain),t.setState({btnLoading:!0}),e.next=11,S.authenticateUser(i,l).then((function(e){200===e.status?"error"===e.data.status?(t.setState({isInvalidCredentials:!0,btnLoading:!1}),localStorage.removeItem("mykademy_user"),n(!1)):(localStorage.setItem("portfolio_user",JSON.stringify(e)),a(!0)):(setTimeout((function(){t.setState({condition:""})}),5e3),t.setState({condition:m.a.createElement("div",{className:"alert alert-danger alert-dismissible "},m.a.createElement("strong",null,e.message))}),n(!1))})).catch(function(){var e=Object(s.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(a),t.setState({isInvalidCredentials:!0,btnLoading:!1}),n(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"closeModal",value:function(){u.initialize(),u.authentication.notifyFailure({success:!1})}},{key:"mykademyLogin",value:function(){var e=Object(s.a)(o.a.mark((function e(t){var a=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(s.a)(o.a.mark((function e(n,s){var i,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.encodeBase64(t),r={"Content-Type":"application/json",Authorization:Object(f.appToken)()},e.next=4,k.authenticateUser(r,i,t.subdomain).then((function(e){200===e.data.status?(localStorage.setItem("mykademy_subdomain",t.subdomain),localStorage.setItem("mykademy_user",JSON.stringify(e.data.data)),n(!0)):n(!1)})).catch((function(e){a.setState({isInvalidCredentials:!0,btnLoading:!1}),n(!1)}));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateDomain",value:function(e){var t=this.state.user;t.subdomain=e.target.value,localStorage.setItem("subdomain",t.subdomain);var a=this.state.errors;a.subdomain=null,this.setState({user:t,error:a})}},{key:"render",value:function(){var e,t,a=this;return this.state.single_auth?m.a.createElement(b,{updateStateFromChild:this.updateStateFromChild}," "):m.a.createElement(m.a.Fragment,null,m.a.createElement("div",null,this.state.show_login?m.a.createElement("div",{class:"modal fade organization-modal show",id:"orgModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-modal":"true",role:"dialog",style:{display:"block"}},m.a.createElement("div",{class:""},m.a.createElement("div",{class:"modal-content",style:{height:"100vh"}},m.a.createElement("div",{class:"modal-body"},m.a.createElement("form",{onSubmit:this.loginSubmit},this.state.btnLoading?m.a.createElement("div",{class:"step step-3 active"},m.a.createElement("div",{class:"d-flex justify-content-center align-items-center spinner-content h-380"},m.a.createElement("div",{class:"spinner-border",role:"status"},m.a.createElement("span",{class:"visually-hidden"},"Loading...")))):m.a.createElement("div",{class:"step step-2 active"},m.a.createElement("img",{class:"olive-logo-rounded",src:"assets/images/landing/olive-logo-rounded.jpg",alt:"olive logo rounded"}),m.a.createElement("h4",null,"Sign in to your organisation"),m.a.createElement("p",{class:"mb-20"},"Please enter your credentials below:"),m.a.createElement("div",{class:"input-wrap"},m.a.createElement("div",{class:"form-group"},m.a.createElement("label",{for:""},"Email Address or Username"),m.a.createElement("input",{autoFocus:!0,type:"email",className:this.state.isInvalidCredentials?"form-control input-error":"form-control",placeholder:"name@email-address.com",onChange:this.inputhandle.bind(this,"email")})),m.a.createElement("div",{class:"form-group"},m.a.createElement("label",{for:""},"Password"),m.a.createElement("input",{type:"password",className:this.state.isInvalidCredentials?"form-control input-error":"form-control",placeholder:"Your password",onChange:this.inputhandle.bind(this,"password")})),this.state.isInvalidCredentials&&m.a.createElement("div",{class:"error-msg"},"Sorry you entered incorrect email / password combination for Olive VLE.")),m.a.createElement("div",{class:"btn-wrap"},m.a.createElement("button",{onClick:function(e){return a.setState({show_login:!1})},type:"button",class:"btn btn-secondary previous-btn"},"Back"),m.a.createElement("button",{type:"submit",class:"btn btn-primary next-btn",disabled:"false"===this.state.formValied&&this.state.subdomain,style:{backgroundColor:"true"===this.state.formValied?"#585a96":"#6c757d",width:"75px"}},"Sign in")))))))):m.a.createElement("div",{onLoad:localStorage.removeItem("legacy"),class:"modal fade organization-modal show",id:"orgModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-modal":"true",role:"dialog",style:{display:"block"}},m.a.createElement("div",{class:""},m.a.createElement("div",{class:"modal-content",style:{height:"100vh"}},m.a.createElement("div",{class:"modal-body"},m.a.createElement("form",{onSubmit:this.check_vle_db},this.state.loader?m.a.createElement("div",{class:"step step-3 active"},m.a.createElement("div",{class:"d-flex justify-content-center align-items-center spinner-content h-380"},m.a.createElement("div",{class:"spinner-border",role:"status"},m.a.createElement("span",{class:"visually-hidden"},"Loading...")))):m.a.createElement("div",{className:"step step-1 active"},m.a.createElement("img",{class:"olive-logo-rounded",src:"assets/images/landing/olive-logo-rounded.jpg",alt:"olive logo rounded"}),m.a.createElement("h4",null,"Sign in to your organisation"),m.a.createElement("p",null,"Please enter your organisation\u2019s URL:"),m.a.createElement("div",{class:"input-wrap"},m.a.createElement("input",{autoFocus:!0,type:"text",className:this.state.errors.subdomain?"form-control input-error":"form-control",placeholder:"your-organisation",value:this.state.user.subdomain||"",onChange:function(e){return a.updateDomain(e)},onKeyDown:function(e){return" "===e.key?e.preventDefault():""}}),this.state.errors.subdomain&&m.a.createElement("div",{class:"error-msg"},this.state.errors.subdomain)),m.a.createElement("p",null,"This will give you access to OLIVE\u2019s product suite."),m.a.createElement("div",{class:"btn-wrap"},m.a.createElement("button",{type:"button",onClick:function(){return a.closeModal()},class:"btn btn-secondary","data-bs-dismiss":"modal"},"Cancel"),m.a.createElement("button",{type:"submit",class:"btn btn-primary next-btn",disabled:!(null===(e=this.state.user)||void 0===e?void 0:e.subdomain),style:{backgroundColor:(null===(t=this.state.user)||void 0===t?void 0:t.subdomain)?"#585a96":"#6c757d"}},"Continue")),m.a.createElement("a",{onClick:function(){return a.setState({single_auth:!0})},style:{color:"#6264A7"},class:"sign-in-option",href:"javascript:void(0);"},"Legacy sign in options")))))))))}}]),a}(m.a.Component)}}]);
//# sourceMappingURL=5.e995ee4a.chunk.js.map