(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"H1",function(){return u}),n.d(t,"H2",function(){return m}),n.d(t,"H3",function(){return p}),n.d(t,"H4",function(){return f}),n.d(t,"H5",function(){return d}),n.d(t,"Paragraph",function(){return h}),n.d(t,"SubHeader",function(){return g});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(151),s=n(154),c=n(155),u=l.a.h1.withConfig({displayName:"typography__H1",componentId:"r0opy9-0"})(['font-size:4.4rem;font-family:"Roboto",sans-serif;font-weight:300;']),m=l.a.h2.withConfig({displayName:"typography__H2",componentId:"r0opy9-1"})(['font-size:3.2rem;font-weight:300;font-family:"Roboto",sans-serif;']),p=l.a.h3.withConfig({displayName:"typography__H3",componentId:"r0opy9-2"})(['font-size:2.1rem;font-weight:300;font-family:"Roboto",sans-serif;']),f=l.a.h4.withConfig({displayName:"typography__H4",componentId:"r0opy9-3"})(['font-size:1.7rem;font-weight:300;font-family:"Roboto",sans-serif;']),d=l.a.h5.withConfig({displayName:"typography__H5",componentId:"r0opy9-4"})(['font-size:1.4rem;font-weight:300;font-family:"Roboto",sans-serif;']),h=l.a.p.withConfig({displayName:"typography__Paragraph",componentId:"r0opy9-5"})(['font-size:1.6rem;font-family:"PT Serif",serif;']),g=l.a.p.withConfig({displayName:"typography__SubHeader",componentId:"r0opy9-6"})(['margin:0.75rem 0 0;font-size:1.6rem;max-width:85.2rem;font-family:"Roboto",sans-serif;color:#000;']),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(s.b,{title:"Typography"},i.a.createElement(s.a.Consumer,null,function(e){var t=e.baseFont;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,null,"Heading level 1"),i.a.createElement(c.a,null,"font-size: "+44/t+"rem; font-family: 'Roboto',\n                  sans-serif; font-weight: 300;"),i.a.createElement("hr",null),i.a.createElement(m,null,"Heading level 2"),i.a.createElement(c.a,null,"font-size: {32 / baseFont}rem; font-family: 'Roboto',\n                  sans-serif; font-weight: 300;"),i.a.createElement("hr",null),i.a.createElement(p,null,"Heading level 3"),i.a.createElement(c.a,null,"font-size: "+32/t+"rem;\n                  font-family: 'Roboto', sans-serif;\n                 \n                  font-weight: 300;"),i.a.createElement("hr",null),i.a.createElement(f,null,"Heading level 4"),i.a.createElement(c.a,null,"font-size: "+32/t+"rem;\n                  font-family: 'Roboto', sans-serif;\n              \n                  font-weight: 300;"),i.a.createElement("hr",null),i.a.createElement(d,null,"Heading level 5"),i.a.createElement(c.a,null,"font-size: "+32/t+"rem;\n                  font-family: 'Roboto', sans-serif;\n          \n                  font-weight: 300;"),i.a.createElement("hr",null),i.a.createElement(h,null,"Paragraph text"),i.a.createElement(h,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo sapien id felis porttitor, vitae suscipit mi malesuada. In ut ex quis est vehicula condimentum ut id sem. Fusce et felis ex. Nullam suscipit lorem ut mi suscipit, ac pellentesque est convallis. Ut vel gravida justo, sit amet fermentum erat. Donec ultricies blandit nunc. Sed fringilla, dolor et fringilla auctor, ex turpis porta dui, et auctor quam metus aliquet mauris. Duis eu justo scelerisque, vulputate elit at, maximus turpis. Ut sollicitudin erat enim, eu convallis nibh posuere ultricies."),i.a.createElement(c.a,null,"font-family: 'PT Serif', serif;\n                  font-size: "+16/t+"rem;"))}))},t}(o.Component);t.default=y},152:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(32),s=n.n(l);n.d(t,"a",function(){return s.a});n(153);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,t,n){var a;e.exports=(a=n(157))&&a.default||a},154:function(e,t,n){"use strict";n(159);var a=n(7),r=n.n(a),o=n(156),i=n(0),l=n.n(i),s=n(4),c=n.n(s),u=n(158),m=n.n(u),p=n(151),f=n(152),d=n(141),h=p.a.header.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-31ozxh-0"})([".header__inner{padding:3.75rem 4.1875rem;width:100%;max-width:128rem;margin:0 auto;}"]),g=function(e){var t=e.siteTitle,n=e.title;return l.a.createElement(h,{style:{background:"#f4f4f4"}},l.a.createElement("div",{className:"header__inner"},l.a.createElement(d.H1,null,n||t)))};g.propTypes={siteTitle:c.a.string},g.defaultProps={siteTitle:""};var y=g,b=p.a.aside.withConfig({displayName:"Navigation__Wrapper",componentId:"sc-113dz3n-0"})(['width:100%;border-right:solid 1px #ccc;flex:1;padding:0 1.5rem 0;ol{list-style:none;padding-left:0;}li{font-size:1.6rem;color:#000000;padding-bottom:1.5rem;}a{color:#000;text-decoration:none;font-family:"Roboto",sans-serif;}']),E=function(){return l.a.createElement(b,null,l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement(f.a,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(f.a,{to:"/typography"},"Typography")),l.a.createElement("li",null,l.a.createElement(f.a,{to:"/grid"},"Grid")),l.a.createElement("li",null,l.a.createElement(f.a,{to:"/buttons"},"Buttons")),l.a.createElement("li",null,l.a.createElement(f.a,{to:"/cards"},"Cards")),l.a.createElement("li",null,l.a.createElement(f.a,{to:"/icons"},"Icons")),l.a.createElement("li",null,l.a.createElement(f.a,{to:"/navigation"},"Navigation")),l.a.createElement("li",null,l.a.createElement(f.a,{to:"/footer"},"Footer"))))};n(161);n.d(t,"a",function(){return v});var v=Object(i.createContext)(),w=p.a.div.withConfig({displayName:"layout__Wrapper",componentId:"ii2kc2-0"})(["display:flex;width:100%;margin:0 auto;main{flex:8;padding:1.5rem;font-size:1.4rem;}label{font-size:1.4rem;}input{margin-left:5px;margin-right:5px;}"]),x=p.a.footer.withConfig({displayName:"layout__Footer",componentId:"ii2kc2-1"})(['padding:3.75rem 1.5rem;background-color:#000;.footer-inner{width:100%;max-width:128rem;margin:0 auto;text-align:center;}a,p{color:#fff;text-decoration:none;font-family:"Roboto",sans-serif;font-size:1.4rem;}']),C=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={baseFont:16},t.handleChange=function(e){var n,a=e.target,r=a.name,o=a.value;return localStorage.setItem(r,o),t.setState(((n={})[r]=o,n))},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=localStorage.getItem("baseFont");e&&this.setState({baseFont:e})},n.render=function(){var e=this,t=this.props,n=t.children,a=t.title,r=this.state.baseFont;return l.a.createElement(f.b,{query:"1044757290",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,{title:a,siteTitle:t.site.siteMetadata.title}),l.a.createElement(m.a,null,l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=PT+Serif|Roboto:300,400,700",rel:"stylesheet"})),l.a.createElement(w,null,l.a.createElement(E,null),l.a.createElement(v.Provider,{value:{baseFont:r}},l.a.createElement("main",null,l.a.createElement("label",{htmlFor:"baseFont"},"Base font "),l.a.createElement("input",{id:"baseFont",name:"baseFont",value:r,onChange:e.handleChange,placeholder:"Base font"}),"px",l.a.createElement("br",null),l.a.createElement("hr",null),n))),l.a.createElement(x,null,l.a.createElement("div",{className:"footer-inner"},l.a.createElement("p",{className:"roboto"},"© ",(new Date).getFullYear()+" - ",l.a.createElement("a",{href:"https://www.procurementleaders.com/my-pl"},"Procurement Leaders")))))},data:o})},t}(i.Component);C.propTypes={children:c.a.node.isRequired};t.b=C},155:function(e,t,n){"use strict";(function(e){n(34),n(73);var a=n(0),r=n.n(a),o=n(151),i=o.a.pre.withConfig({displayName:"CSS__Wrapper",componentId:"sc-1fc14cl-0"})(['background-color:#333;padding:10px;position:relative;-webkit-border-radius:3px;-moz-border-radius:3px;-o-border-radius:3px;border-radius:3px;min-height:80px;:before{content:"CSS";display:block;position:absolute;right:10px;top:10px;color:rgba(256,256,256,0.8);}']),l=o.a.span.withConfig({displayName:"CSS__LineWrapper",componentId:"sc-1fc14cl-1"})([""]),s=o.a.span.withConfig({displayName:"CSS__Line",componentId:"sc-1fc14cl-2"})(["color:#ff6188;"]),c=o.a.span.withConfig({displayName:"CSS__Value",componentId:"sc-1fc14cl-3"})(["color:#a9dc76;"]),u=o.a.span.withConfig({displayName:"CSS__Divider",componentId:"sc-1fc14cl-4"})(["color:#fff;"]),m=o.a.button.withConfig({displayName:"CSS__CopyButton",componentId:"sc-1fc14cl-5"})(["position:absolute;right:10px;bottom:10px;background-color:transparent;border:solid 1px rgba(256,256,256,0.8);color:rgba(256,256,256,0.8);padding:10px 15px;border-radius:3px;cursor:pointer;transition:all .3s ease;:hover{background-color:rgba(256,256,256,0.8);color:rgba(0,0,0,0.8);}"]);t.a=function(t){var n=t.children;return r.a.createElement(i,null,r.a.createElement(m,{onClick:function(){return function(t){if(e.browser){var n=document.createElement("textarea");n.value=t,n.setAttribute("readonly",""),n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)}}(n)}},"COPY"),function(e){if("string"!=typeof e)return r.a.createElement("span",{style:{color:"#fff"}},"The CSS syntax highluter needs a string but received "+typeof e+".");try{return e.replace(/\s\s+/g," ").split(";").map(function(e){var t=e.split(":");return!(!t[0]||!t[1])&&r.a.createElement(l,{key:e},r.a.createElement(s,{className:!0},t[0].trim()),r.a.createElement(u,null,": "),r.a.createElement(c,null,t[1].trim()),r.a.createElement(u,null,";"),r.a.createElement("br",null))})}catch(t){return console.log({error:t}),r.a.createElement("p",null,"Error!")}}(n))}}).call(this,n(160))},156:function(e){e.exports={data:{site:{siteMetadata:{title:"PL Style Guide"}}}}},157:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(54),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=component---src-pages-typography-js-cebf55556685dc1ea2fb.js.map