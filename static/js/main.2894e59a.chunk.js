(this["webpackJsonpsearch-videos"]=this["webpackJsonpsearch-videos"]||[]).push([[0],{21:function(e,a,t){e.exports=t(49)},29:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),l=t.n(c),o=(t(8),t(26),t(27),t(29),t(6)),s=t.n(o),i=t(19),m=t(2),d=t(3),u=t(5),v=t(4),p=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"YouSearch"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))))))},b=function(e){Object(u.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={term:""},e.onFormSubmit=function(a){a.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-bar"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"offset-md-3 col-md-6"},r.a.createElement("form",{onSubmit:function(a){return e.onFormSubmit(a)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search Videos",onChange:function(a){return e.setState({term:a.target.value})}}))))))}}]),t}(r.a.Component),E=t(20),f=t.n(E).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyCQpoeG-q0AmucdUaRxqBZmThY_VRbgplM"}}),h=(t(48),function(e){var a=e.video,t=e.onVideoSelect;return r.a.createElement("div",{className:"video-item",onClick:function(){t(a)}},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 col-md-3"},r.a.createElement("img",{src:a.snippet.thumbnails.medium.url,alt:a.snippet.title})),r.a.createElement("div",{className:"col-lg-8 col-md-9"},r.a.createElement("p",null,a.snippet.title)))))}),N=function(e){var a=e.videos,t=e.onVideoSelect,n=a.map((function(e){return r.a.createElement(h,{key:e.id.videoId,video:e,onVideoSelect:t})}));return r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group"},n))},g=function(e){var a=e.video;if(!a)return r.a.createElement("div",null,"Loading...");var t="https://www.youtube.com/embed/".concat(a.id.videoId);return r.a.createElement("div",null,r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{title:"videoplayer",className:"embed-responsive-item",src:t,allowFullScreen:!0})),r.a.createElement("div",{className:"card mt-3 mb-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,a.snippet.title),r.a.createElement("p",null,a.snippet.description))))},S=function(e){Object(u.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={videos:[],selectedVideo:null},e.onSearchSubmit=function(){var a=Object(i.a)(s.a.mark((function a(t){var n;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.get("/search",{params:{q:t}});case 2:n=a.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.onVideoSelect=function(a){e.setState({selectedVideo:a})},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.onSearchSubmit("spiderman")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement(b,{onSubmit:this.onSearchSubmit}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-md-1"},r.a.createElement(g,{video:this.state.selectedVideo})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(N,{videos:this.state.videos,onVideoSelect:this.onVideoSelect})),r.a.createElement("div",{className:"col-md-1"}))))}}]),t}(r.a.Component);l.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.2894e59a.chunk.js.map