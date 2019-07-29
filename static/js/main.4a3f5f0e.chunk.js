(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e){e.exports=[{category:"Languages & Web Development",skills:[{title:"HTML5",image:"assets/logos/html5.png"},{title:"CSS",image:"assets/logos/css3.png"},{title:"JavaScript",image:"assets/logos/javascript.png"},{title:"ES6",image:"assets/logos/es6.png"},{title:"React",image:"assets/logos/react.png"},{title:"NodeJs",image:"assets/logos/nodejs.png"},{title:"Bootstrap",image:"assets/logos/bootstrap.png"},{title:"Python",image:"assets/logos/python.png"},{title:"Java",image:"assets/logos/java.png"},{title:"Express",image:"assets/logos/express.png"},{title:"Mocha, Chai",image:"assets/logos/mochachai.png"},{title:"Serverless Framework",image:"assets/logos/serverless.png"}]},{category:"Data Engineering & Data Warehouse",skills:[{title:"Databricks",image:"assets/logos/databricks.png"},{title:"PySpark",image:"assets/logos/pyspark.png"},{title:"Spark SQL",image:"assets/logos/spark.png"},{title:"Redshift",image:"assets/logos/redshift.png"}]},{category:"Databases",skills:[{title:"MySQL",image:"assets/logos/mysql.png"},{title:"DynamoDB",image:"assets/logos/dynamodb.png"}]},{category:"Cloud",skills:[{title:"Amazon Web Services",image:"assets/logos/aws.png"}]},{category:"DevOps",skills:[{title:"Jenkins",image:"assets/logos/jenkins.png"},{title:"Cloudformation",image:"assets/logos/cloudformation.png"},{title:"Docker",image:"assets/logos/docker.png"}]}]},128:function(e){e.exports=[{name:"Server Side Programming",description:"Familiar with complete workflow",confidence:"90"},{name:"Cloud Technologies",description:"Well versed in Applications using cloud",confidence:"80"},{name:"Data Engineering & Warehouses",description:"Familiar with almost all of core and data pipelines",confidence:"90"},{name:"Front End Programming",description:"Can build using javascript and css frameworks",confidence:"50"},{name:"Dev Ops",description:"Know concepts of core",confidence:"40"},{name:"Databases",description:"Familiar with design, concepts and applications",confidence:"60"},{name:"MicroServices Architecture",description:"Building independent services that communicate over APIs in AWS",confidence:"80"}]},130:function(e){e.exports=[{name:"M.S in Computer Science",date:"2015 - 2017",role:"University of Central Oklahoma"},{name:"B.S in Computer Science",date:"2011 - 2015",role:"Sastra University"}]},131:function(e){e.exports=[{name:"AWS Certified Developer",date:"Oct 2017",role:"License MK4294422BQ1199N"},{name:"Python Programming for Everybody",date:"Dec 2015",role:"Python"}]},139:function(e,t,a){e.exports=a(318)},144:function(e,t,a){},149:function(e,t,a){},168:function(e,t,a){},176:function(e,t,a){},184:function(e,t,a){},191:function(e,t,a){},293:function(e,t,a){},294:function(e,t,a){},295:function(e,t,a){},296:function(e,t,a){},310:function(e,t,a){},311:function(e,t,a){},318:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(15),l=a.n(o),s=(a(144),a(16)),r=a(133),c=a(32),m=a(8),d=a(9),u=a(11),p=a(10),h=a(13),g=a(12),f=(a(149),a(30)),v=a.n(f),b=a(37),E=a(38),w=a.n(E),y="FORM_SUBMIT_SUCCESS",S="RESET_FORM_STATUS",k="GET_DETAILS_SUCCESS",N=a(115),O=a.n(N),C="https://9ndt0haz0g.execute-api.us-east-1.amazonaws.com/production",j="fetch_data";a(168);var M=a(19),W=a(58),x=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement(W.a,this.props,this.props.children)}}]),t}(n.Component),D=Object(M.ScrollLink)(x),A=a(14),z=a(119),T=a(121),L=a(118),P=a(137),F=a(25),I=a(120),J=a(39),R=function(e,t){return Object(b.a)(v.a.mark(function a(){var n;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w.a.post("".concat(C,"/download-link"),{path:e,captchaToken:t});case 3:n=a.sent,window.location.assign(n.data.signedUrl),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.error(a.t0);case 10:case"end":return a.stop()}},a,null,[[0,7]])}))},U=a(322),B=a(319),q=a(320),K=a(42),G=(a(176),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleWindowSizeChange=function(){a.setState({isMobile:a.isMobile(window.innerWidth)})},a.state={isMobile:a.isMobile(window.innerWidth),isModalOpen:!1},a.verifyCallback=a.verifyCallback.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"isMobile",value:function(e){return e<=768}},{key:"verifyCallback",value:function(e){this.props.download(this.props.fileName,e)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(U.a,{isOpen:this.state.isModalOpen,toggle:this.props.modalToggle,centered:!0},i.a.createElement(B.a,{toggle:this.props.modalToggle},"Download"),i.a.createElement(q.a,{className:"modalBody"},i.a.createElement(K.a,{sitekey:"6LcItKoUAAAAAKcXgvpbW7SewIUAgLozLoseMogM",onChange:this.verifyCallback,size:"normal",className:this.state.isMobile?"mobileCaptcha":"desktopCaptcha"}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.isModalOpen!==t.isModalOpen?{isModalOpen:e.isModalOpen}:null}}]),t}(n.Component)),H=["about","skills","experience","education","certification","json","yaml","connect"],Q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleSetActive=function(e){a.setState({currentCategory:e})},a.handleScrollStart=function(e){a.setState({spy:!1,currentCategory:e})},a.handleScrollEnd=function(e){a.setState({spy:!0,currentCategory:e})},a.state={spy:!0,tooltipOpen:!1,isOpen:!1,isMobile:a.isMobile(window.innerWidth),isModalOpen:!1},a.toggle=a.toggle.bind(Object(h.a)(a)),a.toggleNavbar=a.toggleNavbar.bind(Object(h.a)(a)),a.modalToggle=a.modalToggle.bind(Object(h.a)(a)),a.download=a.download.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"isMobile",value:function(e){return e<=768}},{key:"componentDidMount",value:function(){M.Events.scrollEvent.register("begin",this.handleScrollStart),M.Events.scrollEvent.register("end",this.handleScrollEnd)}},{key:"componentWillUnmount",value:function(){M.Events.scrollEvent.remove("begin"),M.Events.scrollEvent.remove("end")}},{key:"toggle",value:function(){this.setState({tooltipOpen:!this.state.tooltipOpen})}},{key:"toggleNavbar",value:function(){this.state.isMobile&&this.setState({isOpen:!this.state.isOpen})}},{key:"download",value:function(e,t){var a=this;setTimeout(function(){a.setState({isModalOpen:!1,tooltipOpen:!1,isOpen:!1}),a.props.downloadResume(e,t)},500)}},{key:"modalToggle",value:function(e){this.setState(function(t){return{isModalOpen:!t.isModalOpen,tooltipOpen:!1,fileName:e}})}},{key:"render",value:function(){var e=this,t=this.state,a=t.spy,n=t.currentCategory;return i.a.createElement(A.a,{fluid:!0,className:"top-container"},i.a.createElement(A.a,null,i.a.createElement(L.a,{expand:"xl"},i.a.createElement(z.a,{href:"/"},i.a.createElement("h1",{className:"top-name",style:{}},"Sailesh Kotha"),i.a.createElement("h2",{className:"top-title",style:{}},"Software Engineer")),i.a.createElement(I.a,{onClick:this.toggleNavbar,className:"ripple navbar-toggle btn-outer"},"MENU"),i.a.createElement(J.a,{isOpen:this.state.isOpen,navbar:!0},i.a.createElement(T.a,{navbar:!0,className:"ml-auto",style:{fontSize:13,fontWeight:700,lineHeight:3,color:"#3d4451",cursor:"pointer"}},H.map(function(t){return i.a.createElement(D,{onClick:e.toggleNavbar,activeClass:" ",className:"mx-3 ".concat(n===t?"selected":""),spy:a,key:t,to:t,smooth:!0,offset:-65,duration:500,onSetActive:e.handleSetActive},t.toUpperCase())}),i.a.createElement(W.a,{className:"mx-3",id:"download"},"DOWNLOAD"),i.a.createElement(P.a,{placement:"bottom",hideArrow:!0,trigger:"hover",autohide:!1,isOpen:this.state.tooltipOpen,target:"download",toggle:this.toggle},i.a.createElement(F.a,{onClick:this.modalToggle.bind(this,"Resume.pdf"),color:"outer",className:"tooltip-button ripple"},"PDF"),i.a.createElement(F.a,{onClick:this.modalToggle.bind(this,"Resume.docx"),color:"outer",className:"tooltip-button ripple"},"DOC")))))),i.a.createElement(G,{download:this.download,fileName:this.state.fileName,isModalOpen:this.state.isModalOpen,modalToggle:this.modalToggle}))}}]),t}(n.Component);var V=Object(s.b)(function(e){return{default:e.default}},{downloadResume:R})(Q),_=a(34),Y=(a(184),a(21)),X=a(17),$=a(18),Z=a.n($),ee=a(40),te=a.n(ee),ae=a(59),ne=a(321),ie=function(){return i.a.createElement("span",null,Array(10).fill(null).map(function(e,t){return i.a.createElement(ne.a,{key:t,size:"sm",style:{},type:"grow"})}))},oe=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleWindowSizeChange=function(){a.setState({width:window.innerWidth})},a.state={width:window.innerWidth,isModalOpen:!1},a.download=a.download.bind(Object(h.a)(a)),a.modalToggle=a.modalToggle.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"download",value:function(e,t){var a=this;setTimeout(function(){a.setState({isModalOpen:!1}),a.props.downloadResume(e,t)},500)}},{key:"modalToggle",value:function(e){this.setState(function(t){return{isModalOpen:!t.isModalOpen,fileName:e}})}},{key:"getHref",value:function(e){switch(e.name){case"email":return this.props.details.email?"mailto:".concat(this.props.details.email):null;case"phone":return this.props.details.phone?"mailto:".concat(this.props.details.phone):null;default:return e.href}}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{paddingTop:100}},i.a.createElement(te.a,null,i.a.createElement("div",{className:"head-bg"})),i.a.createElement(A.a,{className:"about-container"},i.a.createElement("div",{className:"profile"},i.a.createElement(Y.a,null,i.a.createElement(X.a,{className:"align-self-center"},i.a.createElement("h1",{className:"align-text-centre"},i.a.createElement("span",{style:{fontWeight:300,textAlign:"center"}},"I'm")," Sailesh Kotha"),i.a.createElement("h2",{className:"profile-position align-text-centre"},"Software Engineer, Amazon Web Services Developer"),i.a.createElement("hr",null),i.a.createElement("div",{className:"profile-details-section"},i.a.createElement(Y.a,{className:"profile-item"},i.a.createElement(X.a,{xs:3,className:"profile-item-name"},"Address"),i.a.createElement(X.a,{xs:9,className:"content"},this.props.details.address?this.props.details.address:i.a.createElement(ie,null))),i.a.createElement(Y.a,{className:"profile-item"},i.a.createElement(X.a,{xs:3,className:"profile-item-name"},"Email"),i.a.createElement(X.a,{xs:9,className:"content"},this.props.details.email?this.props.details.email:i.a.createElement(ie,null))),i.a.createElement(Y.a,{className:"profile-item"},i.a.createElement(X.a,{xs:3,className:"profile-item-name"},"Phone"),i.a.createElement(X.a,{xs:9,className:"content"},this.props.details.phone?this.props.details.phone:i.a.createElement(ie,null))),i.a.createElement(Y.a,{className:"profile-item"},i.a.createElement(X.a,{xs:3,className:"profile-item-name"},"Focus"),i.a.createElement(X.a,{xs:9,className:"content"},"MicroServices Architecture")))))),i.a.createElement("div",{className:"profile-social"},i.a.createElement("ul",{className:"social-bar"},ae.map(function(t){return i.a.createElement("li",{key:t.name},i.a.createElement("a",{href:e.getHref(t),target:"phone"===t.name||"email"===t.name?"":"_blank","aria-label":t.name,rel:"noopener noreferrer"},i.a.createElement("i",{className:t.iconClass})))})))),i.a.createElement(A.a,{className:"summary-container"},i.a.createElement("p",null,i.a.createElement(F.a,{onClick:this.modalToggle.bind(this,"Resume.docx"),size:"lg",color:"border",className:"ripple"},"Download Resume")),i.a.createElement(Z.a,{top:!0,distance:"50px"},i.a.createElement("p",null,"Hello! I'm Sailesh Kotha. Software Engineer and Amazon Web Services Developer specializing in MicroServices Architecture. Experienced in all stages of development cycle. Well-versed in numerous programming languages including Node.js, Python, JavaScript, Scala, NoSQL and background in dev ops."))),i.a.createElement(G,{download:this.download,fileName:this.state.fileName,isModalOpen:this.state.isModalOpen,modalToggle:this.modalToggle}))}}]),t}(n.Component);var le=Object(s.b)(function(e){return{default:e.default,details:e.mask.details}},{downloadResume:R})(oe),se=(a(191),a(123)),re=a.n(se),ce=a(124),me=a.n(ce),de=a(125),ue=a.n(de),pe=a(129),he=a(126),ge=a.n(he),fe=a(127),ve=a(128),be=ue()(me()(fe,"skills")),Ee=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleWindowSizeChange=function(){a.setState({width:window.innerWidth})},a.barContainerVisibility=function(e){e&&a.setState({barContainerVisible:!0})},a.state={width:window.innerWidth,barContainerVisible:!1},a.barContainerVisibility=a.barContainerVisibility.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){var e=this,t=this.state.width<=768,a={infinite:!0,slidesToShow:t?2:4,slidesToScroll:t?2:4,autoplay:!0,autoplaySpeed:3e3,arrows:!1};return i.a.createElement("div",null,i.a.createElement(A.a,{className:"skills-container"},i.a.createElement("h2",{className:"title"},"Professional Skills"),i.a.createElement(Z.a,{top:!0,distance:"50px"},i.a.createElement(ge.a,{onChange:this.barContainerVisibility,active:!this.state.barContainerVisible,partialVisibility:!0},i.a.createElement(A.a,{className:"bars-container"},ve.map(function(t){return i.a.createElement("div",{key:t.name,className:"skill-name-bar"},i.a.createElement(Y.a,null,i.a.createElement(X.a,{xs:4},t.name),i.a.createElement(X.a,{xs:8,className:"text-right"},t.description)),i.a.createElement(pe.a,{className:"skill-progress-bar",value:e.state.barContainerVisible?t.confidence:0}))})))),i.a.createElement("h2",{className:"title"},"Technologies Used"),i.a.createElement(Z.a,{top:!0,distance:"50px"},i.a.createElement(A.a,{className:"technologies-container"},i.a.createElement(re.a,a,be.map(function(e){return i.a.createElement("div",{className:"skill-image",key:e.title},i.a.createElement(te.a,null,i.a.createElement("img",{src:e.image,title:e.title,alt:e.title})))}))))))}}]),t}(n.Component);var we=Object(s.b)(function(e){return{default:e.default}},{})(Ee),ye=(a(293),a(41)),Se=ye.Experience,ke=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleWindowSizeChange=function(){a.setState({isMobile:a.isMobile(window.innerWidth)})},a.state={isMobile:a.isMobile(window.innerWidth)},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"isMobile",value:function(e){return e<=768}},{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(A.a,{className:"experience-container"},i.a.createElement("h2",{className:"title"},"Work Experience"),i.a.createElement("ul",{className:"timeline"},Se.map(function(t,a){return i.a.createElement(Z.a,{key:t["Company Name"],left:!(a%2)&&!e.state.isMobile,right:Boolean(a%2)||e.state.isMobile,distance:"30px",duration:700},i.a.createElement("li",{className:a%2?"timeline-inverted":""},i.a.createElement("div",{className:"timeline-badge"},i.a.createElement("i",{className:"fa fa-circle"})),i.a.createElement("div",{className:"timeline-panel"},i.a.createElement("div",{className:"date"},t.FromTo),i.a.createElement("div",{className:"timeline-heading"},i.a.createElement("h4",null,t["Company Name"])),i.a.createElement("h4",{className:"role"},t.Title),i.a.createElement("div",{className:"timeline-body"},t.Description.map(function(e,t){return i.a.createElement("p",{key:t},i.a.createElement("span",null,e))})))))}),i.a.createElement("li",{className:"clearfix no-float"}))))}}]),t}(n.Component);var Ne=Object(s.b)(function(e){return{default:e.default}},{})(ke),Oe=(a(294),a(130)),Ce=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleWindowSizeChange=function(){a.setState({isMobile:a.isMobile(window.innerWidth)})},a.state={isMobile:a.isMobile(window.innerWidth)},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"isMobile",value:function(e){return e<=768}},{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(A.a,{className:"education-container"},i.a.createElement("h2",{className:"title"},"Education"),i.a.createElement("ul",{className:"timeline"},Oe.map(function(t,a){return i.a.createElement(Z.a,{key:t.name,left:!(a%2)&&!e.state.isMobile,right:Boolean(a%2)||e.state.isMobile,distance:"30px",duration:700},i.a.createElement("li",{className:a%2?"timeline-inverted":""},i.a.createElement("div",{className:"timeline-badge"},i.a.createElement("i",{className:"fa fa-circle"})),i.a.createElement("div",{className:"timeline-panel"},i.a.createElement("div",{className:"date"},t.date),i.a.createElement("div",{className:"timeline-heading"},i.a.createElement("h4",null,t.name)),i.a.createElement("h4",{className:"role"},t.role))))}),i.a.createElement("li",{className:"clearfix no-float"}))))}}]),t}(n.Component);var je=Object(s.b)(function(e){return{default:e.default}},{})(Ce),Me=(a(295),a(131)),We=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleWindowSizeChange=function(){a.setState({isMobile:a.isMobile(window.innerWidth)})},a.state={isMobile:a.isMobile(window.innerWidth)},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"isMobile",value:function(e){return e<=768}},{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(A.a,{className:"certification-container"},i.a.createElement("h2",{className:"title"},"Certification"),i.a.createElement("ul",{className:"timeline"},Me.map(function(t,a){return i.a.createElement(Z.a,{key:t.name,left:!(a%2)&&!e.state.isMobile,right:Boolean(a%2)||e.state.isMobile,distance:"30px",duration:700},i.a.createElement("li",{key:t.name,className:a%2?"timeline-inverted":""},i.a.createElement("div",{className:"timeline-badge"},i.a.createElement("i",{className:"fa fa-circle"})),i.a.createElement("div",{className:"timeline-panel"},i.a.createElement("div",{className:"date"},t.date),i.a.createElement("div",{className:"timeline-heading"},i.a.createElement("h4",null,t.name)),i.a.createElement("h4",{className:"role"},t.role))))}),i.a.createElement("li",{className:"clearfix no-float"}))))}}]),t}(n.Component);var xe=Object(s.b)(function(e){return{default:e.default}},{})(We),De=(a(296),a(297),a(78)),Ae={width:"100%",height:"362px"},ze=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement(De.Map,{google:this.props.google,zoom:14,style:Ae,initialCenter:{lat:35.765,lng:-78.674}})}}]),t}(n.Component),Te=Object(De.GoogleApiWrapper)({apiKey:"AIzaSyDsrmWjoccJQwpPtyUNJTb0KhEjn2rQT8c"})(ze),Le=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleWindowSizeChange=function(){a.setState({isMobile:a.isMobile(window.innerWidth)})},a.updateFormState=function(e){var t=e.target.name,n=Object.assign({},a.state.form);n[t]=e.target.value,a.setState({form:n})},a.state={isMobile:a.isMobile(window.innerWidth),inProgress:!1,done:!1,captchaToken:null},a.updateFormState=a.updateFormState.bind(Object(h.a)(a)),a.submitForm=a.submitForm.bind(Object(h.a)(a)),a.verifyCallback=a.verifyCallback.bind(Object(h.a)(a)),a.getHref=a.getHref.bind(Object(h.a)(a)),a.toastId=null,a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"isMobile",value:function(e){return e<=768}},{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"componentDidUpdate",value:function(e){this.props.form.inProgress===e.form.inProgress&&this.props.form.done===e.form.done||this.setState({inProgress:this.props.form.inProgress,done:this.props.form.done})}},{key:"submitForm",value:function(e){e.preventDefault(),this.state.captchaToken?(_.c.dismiss(),this.setState({inProgress:!0,done:!1}),this.props.submitForm(this.state.form,this.state.captchaToken)):_.c.isActive(this.toastId)||(this.toastId=_.c.error("Please Submit Captcha",{position:_.c.POSITION.BOTTOM_CENTER,autoClose:3e3,transition:_.a,delay:0,hideProgressBar:!0,bodyClassName:"toastBody"}))}},{key:"verifyCallback",value:function(e){this.setState({captchaToken:e})}},{key:"getHref",value:function(e){switch(e.name){case"email":return this.props.details.email?"mailto:".concat(this.props.details.email):null;case"phone":return this.props.details.phone?"mailto:".concat(this.props.details.phone):null;default:return e.href}}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(A.a,{className:"connect-container"},i.a.createElement("h2",{className:"title"},"Contact Me"),i.a.createElement(Y.a,null,i.a.createElement(X.a,{md:6},i.a.createElement(Z.a,{left:!this.state.isMobile,up:this.state.isMobile,distance:"50px",duration:700},i.a.createElement("div",{className:"contact-form-box card"},i.a.createElement("h3",null,"Feel free to contact me"),i.a.createElement("form",{onSubmit:this.submitForm},i.a.createElement("div",{className:"input-container"},i.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.updateFormState,id:"name",required:"required"}),i.a.createElement("label",{htmlFor:"name"},"Name"),i.a.createElement("div",{className:"bar"})),i.a.createElement("div",{className:"input-container"},i.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:this.updateFormState,id:"email",required:"required"}),i.a.createElement("label",{htmlFor:"email"},"Email"),i.a.createElement("div",{className:"bar"})),i.a.createElement("div",{className:"input-container"},i.a.createElement("input",{type:"text",name:"subject",value:this.state.subject,onChange:this.updateFormState,id:"subject",required:"required"}),i.a.createElement("label",{htmlFor:"subject"},"Subject"),i.a.createElement("div",{className:"bar"})),i.a.createElement("div",{className:"input-container"},i.a.createElement("textarea",{rows:4,name:"message",value:this.state.message,onChange:this.updateFormState,id:"description",required:"required"}),i.a.createElement("label",{htmlFor:"description"},"Message"),i.a.createElement("div",{className:"bar"})),i.a.createElement(K.a,{sitekey:"6LcItKoUAAAAAKcXgvpbW7SewIUAgLozLoseMogM",onChange:this.verifyCallback,size:"normal",className:this.state.isMobile?"mobile-captcha":""}),i.a.createElement(F.a,{color:"outer",className:"in-progress ripple send-button"},this.state.inProgress?i.a.createElement("i",{className:"notched circle loading icon"}):this.state.done?i.a.createElement("i",{className:"check icon"}):"SEND"))))),i.a.createElement(X.a,{md:6},i.a.createElement(Z.a,{right:!this.state.isMobile,up:this.state.isMobile,distance:"50px",duration:700},i.a.createElement("div",{className:"contact-info-box"},i.a.createElement("div",{className:"contact-info-list"},i.a.createElement(Y.a,{className:"contact-profile-item"},i.a.createElement(X.a,{xs:3,className:"contact-profile-item-name"},"Phone"),i.a.createElement(X.a,{xs:9,className:"content"},this.props.details.phone?this.props.details.phone:i.a.createElement(ie,null))),i.a.createElement(Y.a,{className:"contact-profile-item"},i.a.createElement(X.a,{xs:3,className:"contact-profile-item-name"},"Skype"),i.a.createElement(X.a,{xs:9,className:"content"},"saileshkotha")),i.a.createElement(Y.a,{className:"contact-profile-item"},i.a.createElement(X.a,{xs:3,className:"contact-profile-item-name"},"Address"),i.a.createElement(X.a,{xs:9,className:"content"},this.props.details.address?this.props.details.address:i.a.createElement(ie,null)))),i.a.createElement("div",{className:"contact-map"},i.a.createElement(te.a,null,i.a.createElement(Te,null)))))))),i.a.createElement("div",{className:"connect-social"},i.a.createElement(Z.a,{bottom:!0,duration:700,distance:"50px"},i.a.createElement("ul",{className:"social-bar"},ae.map(function(t){return i.a.createElement("li",{key:t.name},i.a.createElement("a",{href:e.getHref(t),target:"_blank","aria-label":t.name,rel:"noopener noreferrer"},i.a.createElement("i",{className:t.iconClass})))})))))}}]),t}(n.Component);var Pe={submitForm:function(e,t){return function(){var a=Object(b.a)(v.a.mark(function a(n){return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w.a.post("".concat(C,"/submit-form"),{form:e,captchaToken:t});case 3:n({type:y}),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),console.error(a.t0);case 9:return a.next=11,O()(1e3);case 11:n({type:S});case 12:case"end":return a.stop()}},a,null,[[0,6]])}));return function(e){return a.apply(this,arguments)}}()}},Fe=Object(s.b)(function(e){return{form:e.form,details:e.mask.details}},Pe)(Le),Ie=(a(310),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleWindowSizeChange=function(){a.setState({width:window.innerWidth})},a.state={width:window.innerWidth,collapse:!1},a.toggle=a.toggle.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(A.a,{className:"json-container"},i.a.createElement("h2",{className:"title"},"Json"),i.a.createElement(Z.a,{top:!0,distance:"50px"},i.a.createElement(A.a,{className:"data-container"},i.a.createElement(F.a,{color:"outer",className:"ripple ".concat(this.state.collapse?"is-hover":""),size:"lg",block:!0,onClick:this.toggle},"Click to view JSON"),i.a.createElement(J.a,{isOpen:this.state.collapse},i.a.createElement("div",{style:{backgroundColor:"rgba(0,0,0,.05)",padding:"10px 20px"}},i.a.createElement("pre",null,JSON.stringify(ye,null,2))))))))}}]),t}(n.Component));var Je=Object(s.b)(function(e){return{default:e.default}},{})(Ie),Re=(a(311),a(132)),Ue=a.n(Re),Be=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleWindowSizeChange=function(){a.setState({width:window.innerWidth})},a.state={width:window.innerWidth,collapse:!1},a.toggle=a.toggle.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(A.a,{className:"yaml-container"},i.a.createElement("h2",{className:"title"},"Yaml"),i.a.createElement(Z.a,{top:!0,distance:"50px"},i.a.createElement(A.a,{className:"data-container"},i.a.createElement(F.a,{color:"outer",className:"ripple ".concat(this.state.collapse?"is-hover":""),size:"lg",block:!0,onClick:this.toggle},"Click to view YAML"),i.a.createElement(J.a,{isOpen:this.state.collapse},i.a.createElement("div",{style:{backgroundColor:"rgba(0,0,0,.05)",padding:"10px 20px"}},i.a.createElement("pre",null,Ue.a.stringify(ye,null,2))))))))}}]),t}(n.Component);var qe=Object(s.b)(function(e){return{default:e.default}},{})(Be),Ke=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={width:window.innerWidth},a.recaptchaRef=i.a.createRef(),a.onInvisibleCaptchaChange=a.onInvisibleCaptchaChange.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.analytics.page(),setTimeout(function(){e.recaptchaRef.current.execute()},4e3)}},{key:"onInvisibleCaptchaChange",value:function(e){this.props.loadDetails(e)}},{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement(V,null),i.a.createElement(K.a,{ref:this.recaptchaRef,size:"invisible",sitekey:"6Ld99q8UAAAAAGLVu4_Or8Y0zn4S0RjYhBO8317M",onChange:this.onInvisibleCaptchaChange}),i.a.createElement("div",null,i.a.createElement(M.Element,{name:"about"},i.a.createElement(le,null)),i.a.createElement(M.Element,{name:"skills"},i.a.createElement(we,null)),i.a.createElement(M.Element,{name:"experience"},i.a.createElement(Ne,null)),i.a.createElement(M.Element,{name:"education"},i.a.createElement(je,null)),i.a.createElement(M.Element,{name:"certification"},i.a.createElement(xe,null)),i.a.createElement(M.Element,{name:"json"},i.a.createElement(Je,null)),i.a.createElement(M.Element,{name:"yaml"},i.a.createElement(qe,null)),i.a.createElement(M.Element,{name:"connect"},i.a.createElement(Fe,null))),i.a.createElement(_.b,null))}}]),t}(n.Component);var Ge=Object(s.b)(function(e){return{default:e.default}},{loadDetails:function(e){return function(){var t=Object(b.a)(v.a.mark(function t(a){var n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.a.post("".concat(C,"/get-details"),{captchaToken:e});case 3:n=t.sent,a({type:k,payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()}})(Ke),He=function(e){var t=e.store;return i.a.createElement(s.a,{store:t},i.a.createElement(r.a,null,i.a.createElement("div",null,i.a.createElement(c.a,{exact:!0,path:"/",component:Ge}))))},Qe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ve(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var _e=a(31),Ye=Object(_e.combineReducers)({default:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.payload;default:return e}},form:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;switch((arguments.length>1?arguments[1]:void 0).type){case y:return Object.assign({},e,{inProgress:!1,done:!0});case S:return Object.assign({},e,{inProgress:!1,done:!1});default:return e}},mask:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object.assign({},e,{details:t.payload});default:return e}}}),Xe=a(135),$e=(a(314),a(136)),Ze=[Xe.a],et=Object(_e.createStore)(Ye,{default:"Hello",form:{},mask:{details:{}}},Object($e.composeWithDevTools)(_e.applyMiddleware.apply(void 0,Ze)));l.a.render(i.a.createElement(He,{store:et}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("https://kotha.me",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("https://kotha.me","/service-worker.js");Qe?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ve(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker.")})):Ve(t,e)})}}()},41:function(e){e.exports={Summary:["4+ years of experience in Software Development, DevOps Engineer with configuration management tools.","3+ years of experience with JavaScript & node.js","1+ years of experience in Data Engineering using PySpark, RedShift","Experience in designing and developing RESTful Servers in JavaScript (ES6), Express, and DynamoDB.","Extensive experience in development & setting up from scratch front-end (Mobile, Web), and back-end testing framework in JavaScript (node.js)"],Skills:[{"Languages & Web Development":["HTML5","CSS","JavaScript","NodeJS","ES6","Angular","React","Bootstrap","Python","Java","Express","Mocha","Chai","Serverless Framework"]},{"Data Engineering & Data Warehouse":["Databricks","PySpark","Spark SQL","Redshift"]},{Databases:["MySQL","DynamoDB","AWS Neptune","Elasticsearch"]},{Cloud:["Amazon Web Services"]},{DevOps:["Jenkins","Puppet","Cloudformation","Docker"]}],Experience:[{"Company Name":"MobileSmith Inc",Title:"AWS Developer",Location:"North Caroline",FromTo:"Apr 2019 - Present",Description:[" "]},{"Company Name":"Meredith Corporation",Title:"Software Engineer",Location:"Des Moines",FromTo:"Dec 2017 - Mar 2019",Description:["Working on 50+ API's for 15 services in NodeJS using API Gateway, Lambda in AWS","Enabled IAM Authentication on API's and used AWS v4 signing method in JavaScript to sign the requests to API Gateway.","Created a CI/CD pipeline in Jenkins to deploy PySpark notebooks to databricks using databricks SDK and the required resources (S3, SQS, Dynamo, IAM Roles) in AWS using CloudFormation template.","Designed, developed and scheduled data pipeline in databricks to clean and process 1 terabyte of raw analytics data per day in S3 across 15 websites using Apache Spark and persist the data in S3 for MapReduce jobs and DynamoDB for random access.","Working with PySpark notebooks which includes complex queries, filtering, processing and reducing the dataframe and RDD.","Working on Spark Streaming/Kafka for interactive queries, processing of streaming data and integration with DynamoDB and S3 for huge volume of data.","Working with python testing framework(pytest) for unit testing PySpark user defined functions for complex data transformations on aggregated dataframe rows.","Working extensively with IAM, API Gateway, Lambda, CloudFront, CloudFormation, Route53, SQS, SNS, S3, RedShift, DynamoDB, EC2, Spot Instances, CloudWatch in AWS.","Working with ECMA Script 6 features. For build of JSX and ES2015(ES6) used Babel, webpack.","Worked with unit testing of JavaScript applications using Mocha, Chai, sinon.js."]},{"Company Name":"Lotus Interworks",Title:"Software Engineer",Location:"Los Angeles",FromTo:"Jun 2017 - Dec 2017",Description:["Responsible for planning, designing and developing web applications using a variety of other technologies including ES6, NodeJS, Electron.io, Nightmare JS.","Successful design and development of automation test scripts with the use of Node JS.","Works on a foundational workflow technology enabling real-time dispatch of work to agents integrated with all communication modes.","Developed an automated script which extracted and stored the incoming emails on the domain into the database.","Plan and create test automation from scratch with JavaScript, mocha, chai, Selenium WebDriver and request library.","Spearheaded the implementation of the login system for the application, using the Cognito as the identity provider, and enabled Single sign-on on various websites.","Played an integral role in developing a crawling system in NodeJS using Nightmare JS for complete crawling of apartments sites.","Developed a script to perform location-based, distance-based queries on elastic search domain.","Constructed a proof of concept Bot in AWS Lex (Service for implementing conversational interfaces).","Extensive experience with Continuous Integration Tools like Jenkins, and good working knowledge on source repository management tools like GIT, SVN.","Designed and Implemented an Email system for a domain using SES, Route53, S3, and NodeJS in Lambda."]},{"Company Name":"University of Central Oklahoma",Title:"Graduate Teaching Assistant",Location:"Edmond",FromTo:"Aug 2015 - Apr 2017",Description:["Assisted 40+ students with databases and grading their assignments as well as exams.","Educated 20+ students in solving and programming in Advanced Calculus,","Programming in C++ and Java, Mobile apps programming (Android), Applied Database Management in Oracle SQL, PHP","Collaborated with professors to develop study strategies for 50+ students"]}],Education:[{College:"University of Central Oklahoma",Location:"Edmond",Degree:"M.S in Computer Science",Graduated:2017,GPA:3.75},{College:"Sastra University",Location:"India",Degree:"B.S in Computer Science",Graduated:2015,GPA:3.7}],Certification:[{Name:"AWS Certified Developer",Year:"Oct 2017",Description:"License MK4294422BQ1199N"},{Name:"Programming for Everybody",Year:"Dec 2015",Description:"Python"}]}},59:function(e){e.exports=[{name:"linkedin",href:"https://www.linkedin.com/in/saileshkotha/",iconClass:"linkedin icon"},{name:"github",href:"https://github.com/saileshkotha",iconClass:"github icon"},{name:"stackoverflow",href:"https://stackoverflow.com/users/3889006/sailesh-kotha",iconClass:"stack overflow icon"},{name:"email",iconClass:"at icon"},{name:"phone",iconClass:"phone icon"}]}},[[139,1,2]]]);
//# sourceMappingURL=main.4a3f5f0e.chunk.js.map