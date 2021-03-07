(window.webpackJsonp=window.webpackJsonp||[]).push([[175,35],{248:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),c=(n(0),n(260)),b=n(66),o={id:"image",title:"Image"},i={unversionedId:"image",id:"image",isDocsHomePage:!1,title:"Image",description:"Drop-in replacement for the standard React Native Image component that displays",source:"@site/docs/image.md",slug:"/image",permalink:"/docs/next/image",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/image.md",version:"current",sidebar:"docs",previous:{title:"Icon",permalink:"/docs/next/icon"},next:{title:"Input",permalink:"/docs/next/input"}},l=[{value:"Usage",id:"usage",children:[]}],p={rightToc:l};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Drop-in replacement for the standard React Native Image component that displays\nimages with a placeholder and smooth image load transitioning."),Object(c.b)("div",{class:"component-preview component-preview--single margin-none"},Object(c.b)("img",{src:"https://user-images.githubusercontent.com/5962998/48658581-f4170a00-ea1a-11e8-866c-df4f42f21947.gif",alt:"Image Component"})),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { ActivityIndicator } from 'react-native';\nimport { Image } from 'react-native-elements';\n\n// Standard Image\n<Image\n  source={{ uri: image }}\n  style={{ width: 200, height: 200 }}\n/>\n\n\n// Image with custom placeholder content\n<Image\n  source={{ uri: image }}\n  style={{ width: 200, height: 200 }}\n  PlaceholderContent={<ActivityIndicator />}\n/>\n")),Object(c.b)("hr",null),Object(c.b)(b.default,{mdxType:"Props"}),Object(c.b)("hr",null))}m.isMDXComponent=!0},260:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),O=a,j=m["".concat(b,".").concat(O)]||m[O]||d[O]||c;return n?r.a.createElement(j,o(o({ref:t},l),{},{components:n})):r.a.createElement(j,o({ref:t},l))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=O;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,b[1]=o;for(var l=2;l<c;l++)b[l]=n[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(260)),b={},o={unversionedId:"props/image",id:"props/image",isDocsHomePage:!1,title:"image",description:"Props",source:"@site/docs/props/image.md",slug:"/props/image",permalink:"/docs/next/props/image",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/props/image.md",version:"current"},i=[{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>ImageComponent</code>",id:"imagecomponent",children:[]},{value:"<code>onLongPress</code>",id:"onlongpress",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>PlaceholderContent</code>",id:"placeholdercontent",children:[]},{value:"<code>placeholderStyle</code>",id:"placeholderstyle",children:[]},{value:"<code>transition</code>",id:"transition",children:[]},{value:"<code>transitionDuration</code>",id:"transitionduration",children:[]}]}],l={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Also receives all\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/image#props"}),"React Native Image")," props"),Object(c.b)("p",{parentName:"blockquote"},"Contains all\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/image#methods"}),"React Native Image")," methods.")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#containerstyle"}),Object(c.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#imagecomponent"}),Object(c.b)("inlineCode",{parentName:"a"},"ImageComponent"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#onlongpress"}),Object(c.b)("inlineCode",{parentName:"a"},"onLongPress"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#onpress"}),Object(c.b)("inlineCode",{parentName:"a"},"onPress"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#placeholdercontent"}),Object(c.b)("inlineCode",{parentName:"a"},"PlaceholderContent"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#placeholderstyle"}),Object(c.b)("inlineCode",{parentName:"a"},"placeholderStyle"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#transition"}),Object(c.b)("inlineCode",{parentName:"a"},"transition")))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"reference"},"Reference"),Object(c.b)("h3",{id:"containerstyle"},Object(c.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(c.b)("p",null,"Additional styling for the container (optional)"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"imagecomponent"},Object(c.b)("inlineCode",{parentName:"h3"},"ImageComponent")),Object(c.b)("p",null,"Specify a different component as the Image component."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native Component"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Image")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"onlongpress"},Object(c.b)("inlineCode",{parentName:"h3"},"onLongPress")),Object(c.b)("p",null,"Callback function when long pressing component"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"onpress"},Object(c.b)("inlineCode",{parentName:"h3"},"onPress")),Object(c.b)("p",null,"Callback function when pressing component"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"placeholdercontent"},Object(c.b)("inlineCode",{parentName:"h3"},"PlaceholderContent")),Object(c.b)("p",null,"Content to render when image is loading."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"component"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"placeholderstyle"},Object(c.b)("inlineCode",{parentName:"h3"},"placeholderStyle")),Object(c.b)("p",null,"Additional styling for the placeholder container (optional)"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"transition"},Object(c.b)("inlineCode",{parentName:"h3"},"transition")),Object(c.b)("p",null,"Perform fade transition on image load"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"true")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"transitionduration"},Object(c.b)("inlineCode",{parentName:"h3"},"transitionDuration")),Object(c.b)("p",null,"Perform fade transition on image load"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"number"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"360")))))}p.isMDXComponent=!0}}]);