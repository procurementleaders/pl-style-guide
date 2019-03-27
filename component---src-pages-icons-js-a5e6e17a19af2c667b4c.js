(window.webpackJsonp=window.webpackJsonp||[]).push([[12,15],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"H1",function(){return m}),a.d(t,"H2",function(){return d}),a.d(t,"H3",function(){return u}),a.d(t,"H4",function(){return p}),a.d(t,"H5",function(){return f}),a.d(t,"Paragraph",function(){return g}),a.d(t,"SubHeader",function(){return b});var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=a(155),c=a(158),s=a(159),m=l.a.h1.withConfig({displayName:"typography__H1",componentId:"r0opy9-0"})(['font-size:4.4rem;font-family:"Roboto",sans-serif;font-weight:300;']),d=l.a.h2.withConfig({displayName:"typography__H2",componentId:"r0opy9-1"})(['font-size:3.2rem;font-weight:300;font-family:"Roboto",sans-serif;']),u=l.a.h3.withConfig({displayName:"typography__H3",componentId:"r0opy9-2"})(['font-size:2.1rem;font-weight:300;font-family:"Roboto",sans-serif;']),p=l.a.h4.withConfig({displayName:"typography__H4",componentId:"r0opy9-3"})(['font-size:1.7rem;font-weight:300;font-family:"Roboto",sans-serif;']),f=l.a.h5.withConfig({displayName:"typography__H5",componentId:"r0opy9-4"})(['font-size:1.4rem;font-weight:300;font-family:"Roboto",sans-serif;']),g=l.a.p.withConfig({displayName:"typography__Paragraph",componentId:"r0opy9-5"})(['font-size:1.6rem;font-family:"PT Serif",serif;']),b=l.a.p.withConfig({displayName:"typography__SubHeader",componentId:"r0opy9-6"})(['margin:0.75rem 0 0;font-size:1.6rem;max-width:85.2rem;font-family:"Roboto",sans-serif;color:#000;']),h=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement(c.b,{title:"Typography"},o.a.createElement(c.a.Consumer,null,function(e){var t=e.baseFont;return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,null,"Heading level 1"),o.a.createElement(s.a,null,"font-size: "+44/t+"rem;\n                    font-family: 'Roboto',\n                    sans-serif; font-weight: 300;"),o.a.createElement(d,null,"Heading level 2"),o.a.createElement(s.a,null,"font-size: "+32/t+"rem;\n                    font-family: 'Roboto',\n                    sans-serif; font-weight: 300;"),o.a.createElement(u,null,"Heading level 3"),o.a.createElement(s.a,null,"font-size: "+21/t+"rem;\n                    font-family: 'Roboto', sans-serif;\n                    font-weight: 300;"),o.a.createElement(p,null,"Heading level 4"),o.a.createElement(s.a,null,"font-size: "+17/t+"rem;\n                    font-family: 'Roboto', sans-serif;\n                    font-weight: 300;"),o.a.createElement(f,null,"Heading level 5"),o.a.createElement(s.a,null,"font-size: "+14/t+"rem;\n                    font-family: 'Roboto', sans-serif;\n                    font-weight: 300;"),o.a.createElement(f,null,"Heading level 5"),o.a.createElement(s.a,null,"font-size: "+12/t+"rem;\n                    font-family: 'Roboto', sans-serif;\n                    font-weight: 300;"),o.a.createElement(g,null,"Paragraph text"),o.a.createElement(g,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo sapien id felis porttitor, vitae suscipit mi malesuada. In ut ex quis est vehicula condimentum ut id sem. Fusce et felis ex. Nullam suscipit lorem ut mi suscipit, ac pellentesque est convallis. Ut vel gravida justo, sit amet fermentum erat. Donec ultricies blandit nunc. Sed fringilla, dolor et fringilla auctor, ex turpis porta dui, et auctor quam metus aliquet mauris. Duis eu justo scelerisque, vulputate elit at, maximus turpis. Ut sollicitudin erat enim, eu convallis nibh posuere ultricies."),o.a.createElement(s.a,null,"font-family: 'PT Serif', serif;\n                  font-size: "+16/t+"rem;"))}))},t}(r.Component);t.default=h},151:function(e,t,a){"use strict";a.r(t);a(73),a(164);var n=a(7),i=a.n(n),r=a(185),o=a(0),l=a.n(o),c=a(155),s=a(156),m=a(158),d=a(141),u=c.a.section.withConfig({displayName:"icons__GroupWrapper",componentId:"sc-1l5fdhd-0"})(["display:flex;flex-wrap:wrap;"]),p=c.a.div.withConfig({displayName:"icons__IconWrapper",componentId:"sc-1l5fdhd-1"})(["width:10%;float:left;border:solid 1px #ccc;padding:1.5rem;h3{margin-top:0;text-transform:Capitalize;font-size:1.6rem;}img{width:100%;max-width:40px;height:auto;margin:1rem 0;}"]),f=c.a.p.withConfig({displayName:"icons__SectionTitle",componentId:"sc-1l5fdhd-2"})(['color:#ef7d25;font-size:1.2rem;text-transform:uppercase;font-family:"Roboto",sans-serif;font-weight:600;margin:0;letter-spacing:2px;']),g=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return l.a.createElement(m.b,{title:"Icons"},l.a.createElement(m.a.Consumer,null,function(e){e.baseFont;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null,l.a.createElement(s.b,{query:"1932576114",render:function(e){return e.allFile.edges.map(function(e){return l.a.createElement(p,{key:e.node.name},l.a.createElement(f,null,"pe-"===String(e.node.name).substr(0,3)?"Procurement Excellence":"Category Intelligence"),l.a.createElement("img",{src:e.node.publicURL,alt:e.node.name}),l.a.createElement(d.H3,null,e.node.name.substr(3).split("-").map(function(t,a){return a!==e.node.name.split("-").length?l.a.createElement("span",{key:t},t+" "):l.a.createElement("span",{key:t},t)})))})},data:r})))}))},t}(o.Component);t.default=g},156:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(32),c=a.n(l);a.d(t,"a",function(){return c.a});a(157);var s=i.a.createContext({}),m=function(e){return i.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},157:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},158:function(e,t,a){"use strict";a(164);var n=a(7),i=a.n(n),r=a(160),o=a(0),l=a.n(o),c=a(4),s=a.n(c),m=a(162),d=a.n(m),u=a(155),p=a(156),f=a(141),g=u.a.header.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-31ozxh-0"})(["width:100%;overflow-x:hidden;.header__inner{padding:3.75rem 1.5rem;width:100%;border-bottom:1px solid #ccc;}"]),b=Object(u.a)(f.H1).withConfig({displayName:"header__PageTitle",componentId:"sc-31ozxh-1"})(["margin:0;"]),h=function(e){var t=e.siteTitle,a=e.title;return l.a.createElement(g,{style:{background:"#f4f4f4"}},l.a.createElement("div",{className:"header__inner"},l.a.createElement(b,null,a||t)))};h.propTypes={siteTitle:s.a.string},h.defaultProps={siteTitle:""};var y=h,v=u.a.aside.withConfig({displayName:"Navigation__Wrapper",componentId:"sc-113dz3n-0"})(['border-right:solid 1px #ccc;padding:0 1.5rem 0;width:23.04%;max-width:20rem;ol{list-style:none;position:sticky;top:1.5rem;left:0;padding-left:1.5rem;margin-top:1.5rem;}li{font-size:1.6rem;color:#000000;padding-bottom:1.5rem;}a{color:#000;text-decoration:none;font-family:"Roboto",sans-serif;}']),E=function(){return l.a.createElement(v,null,l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement(p.a,{to:"/",activeClassName:"active"},"PL Style Guide")),l.a.createElement("li",null,l.a.createElement(p.a,{to:"/typography",activeClassName:"active"},"Typography")),l.a.createElement("li",null,l.a.createElement(p.a,{to:"/grid",activeClassName:"active"},"Grid"),l.a.createElement("br",null),l.a.createElement(p.a,{to:"/grid-2-column",activeClassName:"active",className:"subNav"},"2 Column Grid"),l.a.createElement("br",null),l.a.createElement(p.a,{to:"/grid-3-column",activeClassName:"active",className:"subNav"},"3 Column Grid"),l.a.createElement("br",null),l.a.createElement(p.a,{to:"/grid-4-column",activeClassName:"active",className:"subNav"},"4 Column Grid")),l.a.createElement("li",null,l.a.createElement(p.a,{to:"/buttons",activeClassName:"active"},"Buttons")),l.a.createElement("li",null,l.a.createElement(p.a,{to:"/cards",activeClassName:"active"},"Cards")),l.a.createElement("li",null,l.a.createElement(p.a,{to:"/icons",activeClassName:"active"},"Icons")),l.a.createElement("li",null,l.a.createElement(p.a,{to:"/primary-navigation",activeClassName:"active"},"Primary navigation")),l.a.createElement("li",null,l.a.createElement(p.a,{to:"/footer",activeClassName:"active"},"Footer"))))};a(165);a.d(t,"a",function(){return C});var C=Object(o.createContext)(),w=u.a.div.withConfig({displayName:"layout__Wrapper",componentId:"ii2kc2-0"})(["display:flex;width:100%;margin:0 auto;"]),x=u.a.div.withConfig({displayName:"layout__Main",componentId:"ii2kc2-1"})(["flex:1;main{padding:1.5rem;font-size:1.4rem;}div.container-base-font{padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #ccc;}label{font-size:1.4rem;}input.base-font{margin-left:5px;margin-right:5px;width:26px;height:20px;text-align:center;padding-right:2px;}"]),R=u.a.footer.withConfig({displayName:"layout__Footer",componentId:"ii2kc2-2"})(['padding:3.75rem 1.5rem;background-color:#000;.footer-inner{width:100%;max-width:128rem;margin:0 auto;text-align:center;}a,p{color:#fff;text-decoration:none;font-family:"Roboto",sans-serif;font-size:1.4rem;}']),N=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={baseFont:16},t.handleChange=function(e){var a,n=e.target,i=n.name,r=n.value;return localStorage.setItem(i,r),t.setState(((a={})[i]=r,a))},t}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=localStorage.getItem("baseFont");e&&this.setState({baseFont:e})},a.render=function(){var e=this,t=this.props,a=t.children,n=t.title,i=this.state.baseFont;return l.a.createElement(p.b,{query:"1044757290",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null,l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=PT+Serif|Roboto:300,400,700",rel:"stylesheet"})),l.a.createElement(w,null,l.a.createElement(E,null),l.a.createElement(x,null,l.a.createElement(y,{title:n,siteTitle:t.site.siteMetadata.title}),l.a.createElement(C.Provider,{value:{baseFont:i}},l.a.createElement("main",null,l.a.createElement("div",{className:"container-base-font"},l.a.createElement("label",{className:"roboto",htmlFor:"baseFont"},"Base font"," "),l.a.createElement("input",{id:"baseFont",name:"baseFont",value:i,onChange:e.handleChange,placeholder:"Base font",className:"base-font"}),l.a.createElement("span",{className:"roboto"},"px")),a)))),l.a.createElement(R,null,l.a.createElement("div",{className:"footer-inner"},l.a.createElement("p",{className:"roboto"},"© ",(new Date).getFullYear()+" - ",l.a.createElement("a",{href:"https://www.procurementleaders.com/my-pl"},"Procurement Leaders")))))},data:r})},t}(o.Component);N.propTypes={children:s.a.node.isRequired};t.b=N},159:function(e,t,a){"use strict";(function(e){a(34),a(73);var n=a(0),i=a.n(n),r=a(155),o=r.a.pre.withConfig({displayName:"CSS__Wrapper",componentId:"sc-1fc14cl-0"})(['background-color:#333;padding:10px;position:relative;-webkit-border-radius:3px;-moz-border-radius:3px;-o-border-radius:3px;border-radius:3px;min-height:80px;:before{content:"CSS";display:block;position:absolute;right:10px;top:10px;color:rgba(256,256,256,0.8);}']),l=r.a.span.withConfig({displayName:"CSS__LineWrapper",componentId:"sc-1fc14cl-1"})([""]),c=r.a.span.withConfig({displayName:"CSS__Line",componentId:"sc-1fc14cl-2"})(["color:#ff6188;"]),s=r.a.span.withConfig({displayName:"CSS__Value",componentId:"sc-1fc14cl-3"})(["color:#a9dc76;"]),m=r.a.span.withConfig({displayName:"CSS__Divider",componentId:"sc-1fc14cl-4"})(["color:#fff;"]),d=r.a.button.withConfig({displayName:"CSS__CopyButton",componentId:"sc-1fc14cl-5"})(["position:absolute;right:10px;bottom:10px;background-color:transparent;border:solid 1px rgba(256,256,256,0.8);color:rgba(256,256,256,0.8);padding:10px 15px;border-radius:3px;cursor:pointer;transition:all .3s ease;:hover{background-color:rgba(256,256,256,0.8);color:rgba(0,0,0,0.8);}"]);t.a=function(t){var a=t.children;return i.a.createElement(o,null,i.a.createElement(d,{onClick:function(){return function(t){if(e.browser){var a=document.createElement("textarea");a.value=t,a.setAttribute("readonly",""),a.style.position="absolute",a.style.left="-9999px",document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)}}(a)}},"COPY"),function(e){if("string"!=typeof e)return i.a.createElement("span",{style:{color:"#fff"}},"The CSS syntax highluter needs a string but received "+typeof e+".");try{return e.replace(/\s\s+/g," ").split(";").map(function(e){var t=e.split(":");return!(!t[0]||!t[1])&&i.a.createElement(l,{key:e},i.a.createElement(c,{className:!0},t[0].trim()),i.a.createElement(m,null,": "),i.a.createElement(s,null,t[1].trim()),i.a.createElement(m,null,";"),i.a.createElement("br",null))})}catch(t){return console.log({error:t}),i.a.createElement("p",null,"Error!")}}(a))}}).call(this,a(163))},160:function(e){e.exports={data:{site:{siteMetadata:{title:"PL Style Guide"}}}}},161:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(54),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},185:function(e){e.exports={data:{allFile:{edges:[{node:{name:"ci-Energy",publicURL:"/static/ci-Energy-c2196f577c4bdd11967dc97b26b0bbc6.svg"}},{node:{name:"ci-Facilities-management",publicURL:"/static/ci-Facilities-management-8fd711b7468431e13d767ce1090b4f34.svg"}},{node:{name:"ci-Financial-services",publicURL:"/static/ci-Financial-services-5e8fbaadc667d697f07daabb1c20f0aa.svg"}},{node:{name:"ci-HR",publicURL:"/static/ci-HR-548a951cdcc915b8bee76f58a640743f.svg"}},{node:{name:"ci-IT",publicURL:"/static/ci-IT-6c8c263aa652a9cfca0d41a2d0c3aaae.svg"}},{node:{name:"ci-Logistic",publicURL:"/static/ci-Logistic-9840234b3094c2f8287e57d77005a1f4.svg"}},{node:{name:"ci-Marketing",publicURL:"/static/ci-Marketing-29db9a22f9320df0ee3355dbba9cd7cf.svg"}},{node:{name:"ci-MRO",publicURL:"/static/ci-MRO-1bd17ff02f28638c8899e8f4cac5a52f.svg"}},{node:{name:"ci-Pharmaceuticals",publicURL:"/static/ci-Pharmaceuticals-be2066be9dd98f620c64e9a9f0898651.svg"}},{node:{name:"ci-Print-packaging",publicURL:"/static/ci-Print-packaging-b36fd61b93b8582d548c8d217e024311.svg"}},{node:{name:"ci-Professional-services",publicURL:"/static/ci-Professional-services-b9ce9906af78f981c4324eb7080fe2e4.svg"}},{node:{name:"ci-Telecom",publicURL:"/static/ci-Telecom-c0b8ec32bcd913e445d33ec0985f5ffb.svg"}},{node:{name:"ci-Raw-materials",publicURL:"/static/ci-Raw-materials-2a9ec63ad02b17fdd9ec89708f518fe6.svg"}},{node:{name:"ci-Travel",publicURL:"/static/ci-Travel-97b2f1eb8dcdb1586e74c139249e8fc5.svg"}},{node:{name:"pe-Category-management",publicURL:"/static/pe-Category-management-309a9abe450e88fc689b45923de36a42.svg"}},{node:{name:"pe-Business-partnering",publicURL:"/static/pe-Business-partnering-09b4948310f99211e78cf7d62e7e734b.svg"}},{node:{name:"pe-Procurement-technology",publicURL:"/static/pe-Procurement-technology-21d5d3567fa1b3d179df331796af1eb1.svg"}},{node:{name:"pe-Risk-governance-compliance",publicURL:"/static/pe-Risk-governance-compliance-0f8e0a440632184e3b70f738dbdbb15c.svg"}},{node:{name:"pe-Supplier",publicURL:"/static/pe-Supplier-ceb6c67b56b226d7f0fffa0891c10f66.svg"}},{node:{name:"pe-Talent",publicURL:"/static/pe-Talent-57181415d932423d5723aa18dba79bad.svg"}},{node:{name:"pe-Strategy-org-design",publicURL:"/static/pe-Strategy-org-design-f02bedfa95d2db28bef6de3983293432.svg"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-icons-js-a5e6e17a19af2c667b4c.js.map