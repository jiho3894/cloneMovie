(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{29:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/no-poster.31ee8645.jpg"},77:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,s,l=n(1),d=n.n(l),u=n(38),p=n.n(u),j=n(19),b=n(5),g=n(10),h=n.n(g),x=n(13),m=n(14),O=n(15),v=n(17),f=n(16),_=n(3),y=n(2),w=n(12),k=n(0),S=y.c.div(r||(r=Object(_.a)(["\n  :not(:last-child) {\n  margin-bottom: 80px;\n  }\n  margin-top:20px;\n"]))),T=y.c.div(a||(a=Object(_.a)(["\n  font-size: 20px;\n  font-weight: 600;\n"]))),R=y.c.div(i||(i=Object(_.a)(["\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 150px);\n  gap: 25px;\n"]))),z=function(e){var t=e.title,n=e.children;return Object(k.jsxs)(S,{children:[Object(k.jsx)(T,{children:t}),Object(k.jsx)(R,{children:n})]})},U=y.c.div(c||(c=Object(_.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  font-size: 50px;\n  margin-top: 30px;\n"]))),M=function(){return Object(k.jsx)(U,{children:Object(k.jsx)("span",{role:"img","aria-label":"Loading",children:"\u23f0"})})},N=n(4),C=n.n(N),I=y.c.div(o||(o=Object(_.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),P=y.c.span(s||(s=Object(_.a)(["\n  color: white;\n  font-weight: 600;\n"]))),F=function(e){var t=e.text;return Object(k.jsx)(I,{children:Object(k.jsx)(P,{children:t})})};F.proptype={text:C.a.string.isRequired};var A,D,V,q,B,L,J,E,G,H,K,Q,W,X,Y,Z,$,ee,te,ne,re,ae,ie,ce,oe,se,le=F,de=y.c.div(A||(A=Object(_.a)(["\n  font-size: 12px;\n"]))),ue=y.c.div(D||(D=Object(_.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"])),(function(e){return e.bgUrl})),pe=y.c.span(V||(V=Object(_.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]))),je=y.c.div(q||(q=Object(_.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"])),ue,pe),be=y.c.span(B||(B=Object(_.a)(["\n  display: block;\n  margin-bottom: 3px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),ge=y.c.span(L||(L=Object(_.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]))),he=function(e){var t=e.id,r=e.imageUrl,a=e.title,i=e.rating,c=e.year,o=e.isMovie,s=void 0!==o&&o;return Object(k.jsx)(j.b,{to:s?"/movie/".concat(t):"/show/".concat(t),children:Object(k.jsxs)(de,{children:[Object(k.jsxs)(je,{children:[Object(k.jsx)(ue,{bgUrl:r?"https://image.tmdb.org/t/p/w300".concat(r):n(29).default}),Object(k.jsxs)(pe,{children:[Object(k.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50\ufe0f"})," ",i,"/10"]})]}),Object(k.jsx)(be,{children:a.length>20?"".concat(a.substring(0,20)," . . ."):a}),Object(k.jsx)(ge,{children:c})]})})},xe=y.c.div(J||(J=Object(_.a)(["\n  padding: 0 10px;\n"]))),me=function(e){var t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error;return e.loading?Object(k.jsx)(M,{}):Object(k.jsxs)(xe,{children:[Object(k.jsx)(w.a,{title:"Movies | Nomflix"}),t&&t.length>0&&Object(k.jsx)(z,{title:"TV \ud504\ub85c\uadf8\ub7a8",children:t.map((function(e){return Object(k.jsx)(he,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0},e.id)}))}),n&&n.length>0&&Object(k.jsx)(z,{title:"\uc601\ud654 \ud504\ub85c\uadf8\ub7a8",children:n.map((function(e){return Object(k.jsx)(he,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0},e.id)}))}),r&&r.length>0&&Object(k.jsx)(z,{title:"\uc778\uae30 \uc601\ud654",children:r.map((function(e){return Object(k.jsx)(he,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date,isMovie:!0},e.id)}))}),a&&Object(k.jsx)(le,{text:a})]})},Oe=n(44),ve=n.n(Oe).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"9594c9ccbbcc42235a2072ad7d3699ae",language:"en-US"}}),fe=function(){return ve.get("movie/now_playing")},_e=function(){return ve.get("movie/upcoming")},ye=function(){return ve.get("movie/popular")},we=function(e){return ve.get("movie/".concat(e),{params:{append_to_response:"videos"}})},ke=function(e){return ve.get("search/movie",{params:{query:encodeURIComponent(e)}})},Se=function(){return ve.get("tv/top_rated")},Te=function(){return ve.get("tv/popular")},Re=function(){return ve.get("tv/airing_today")},ze=function(e){return ve.get("tv/".concat(e),{params:{append_to_response:"videos"}})},Ue=function(e){return ve.get("search/tv",{params:{query:encodeURIComponent(e)}})},Me=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e.componentDidMount=Object(x.a)(h.a.mark((function t(){var n,r,a,i,c,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fe();case 3:return n=t.sent,r=n.data.results,t.next=7,_e();case 7:return a=t.sent,i=a.data.results,t.next=11,ye();case 11:c=t.sent,o=c.data.results,e.setState({nowPlaying:r,upcoming:i,popular:o}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),e.setState({error:"\uc601\ud654\ub97c \ucc3e\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4."});case 19:return t.prev=19,e.setState({loading:!1}),t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[0,16,19,22]])}))),e}return Object(O.a)(n,[{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return console.log(this.state),Object(k.jsx)(me,{nowPlaying:t,upcoming:n,popular:r,error:a,loading:i})}}]),n}(d.a.Component),Ne=y.c.div(E||(E=Object(_.a)(["\n  padding: 0 10px;\n"]))),Ce=function(e){var t=e.topRated,n=e.popular,r=e.airingToday,a=e.error;return e.loading?Object(k.jsx)(M,{}):Object(k.jsxs)(Ne,{children:[Object(k.jsx)(w.a,{title:"TV | Nomflix"}),t&&t.length>0&&Object(k.jsx)(z,{title:"Top Rated Shows",children:t.map((function(e){return Object(k.jsx)(he,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(k.jsx)(z,{title:"Popular Shows",children:n.map((function(e){return Object(k.jsx)(he,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)},e.id)}))}),r&&r.length>0&&Object(k.jsx)(z,{title:"Airing Today",children:r.map((function(e){return Object(k.jsx)(he,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date},e.id)}))}),a&&Object(k.jsx)(le,{text:a})]})},Ie=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},e.componentDidMount=Object(x.a)(h.a.mark((function t(){var n,r,a,i,c,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Se();case 3:return n=t.sent,r=n.data.results,t.next=7,Te();case 7:return a=t.sent,i=a.data.results,t.next=11,Re();case 11:c=t.sent,o=c.data.results,e.setState({topRated:r,popular:i,airingToday:o}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),e.setState({error:"\ud504\ub85c\uadf8\ub7a8\uc744 \ucc3e\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4."});case 19:return t.prev=19,e.setState({loading:!1}),t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[0,16,19,22]])}))),e}return Object(O.a)(n,[{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,r=e.airingToday,a=e.error,i=e.loading;return Object(k.jsx)(Ce,{topRated:t,popular:n,airingToday:r,error:a,loading:i})}}]),n}(d.a.Component),Pe=y.c.div(G||(G=Object(_.a)(["\n  padding: 0 10px;\n"]))),Fe=y.c.form(H||(H=Object(_.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]))),Ae=y.c.input(K||(K=Object(_.a)(["\n  all:unset;\n  font-size: 30px;\n  width: 300px;\n  margin: 30px 0 0 30px;\n"]))),De=function(e){var t=e.movieResults,n=e.tvResults,r=e.error,a=e.loading,i=e.searchTerm,c=e.updateTerm,o=e.handleSubmit;return Object(k.jsxs)(Pe,{children:[Object(k.jsx)(w.a,{children:Object(k.jsx)("title",{children:"Search | Nomflix"})}),Object(k.jsx)(Fe,{onSubmit:o,children:Object(k.jsx)(Ae,{placeholder:"\uac80\uc0c9",value:i,onChange:c})}),a?Object(k.jsx)(M,{}):Object(k.jsxs)(k.Fragment,{children:[t&&t.length>0&&Object(k.jsx)(z,{title:"Movie Results",children:t.map((function(e){return Object(k.jsx)(he,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date?e.release_date.substring(0,4):"",isMovie:!0},e.id)}))}),n&&n.length>0&&Object(k.jsx)(z,{title:"TV Show Results",children:n.map((function(e){return Object(k.jsx)(he,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date?e.first_air_date.substring(0,4):""},e.id)}))}),r&&Object(k.jsx)(le,{text:r}),t&&n&&0===t.length&&0===n.length&&Object(k.jsx)(le,{text:"Nothing Found"})]})]})},Ve=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(x.a)(h.a.mark((function t(){var n,r,a,i,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,e.setState({loading:!0}),t.prev=2,t.next=5,ke(n);case 5:return r=t.sent,a=r.data.results,t.next=9,Ue(n);case 9:i=t.sent,c=i.data.results,e.setState({movieResults:a,tvResults:c}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({error:"\uacb0\uacfc\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),e}return Object(O.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.loading,i=e.error;return Object(k.jsx)(De,{movieResults:t,tvResults:n,loading:a,error:i,searchTerm:r,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(d.a.Component),qe=y.c.div(Q||(Q=Object(_.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]))),Be=y.c.div(W||(W=Object(_.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"])),(function(e){return e.bgImage})),Le=y.c.div(X||(X=Object(_.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]))),Je=y.c.div(Y||(Y=Object(_.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"])),(function(e){return e.bgImage})),Ee=y.c.div(Z||(Z=Object(_.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]))),Ge=y.c.h3($||($=Object(_.a)(["\n  font-size: 32px;\n"]))),He=y.c.div(ee||(ee=Object(_.a)(["\n  margin: 20px 0;\n"]))),Ke=y.c.span(te||(te=Object(_.a)([""]))),Qe=y.c.span(ne||(ne=Object(_.a)(["\n  margin: 0 10px;\n"]))),We=y.c.p(re||(re=Object(_.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n"]))),Xe=function(e){var t=e.result,r=e.loading;e.error;return r?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(w.a,{children:Object(k.jsx)("title",{children:" Loding | Nomflix "})}),Object(k.jsx)(M,{})]}):Object(k.jsxs)(qe,{children:[Object(k.jsx)(w.a,{children:Object(k.jsx)("title",{children:t.original_title?"".concat(t.original_title," | Nomfilx"):"".concat(t.original_name," | Nomfilx")})}),Object(k.jsx)(Be,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),Object(k.jsxs)(Le,{children:[Object(k.jsx)(Je,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(29)}),Object(k.jsxs)(Ee,{children:[Object(k.jsx)(Ge,{children:t.original_title?t.original_title:t.original_name}),Object(k.jsxs)(He,{children:[Object(k.jsx)(Ke,{children:t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)}),Object(k.jsx)(Qe,{children:"\u2022"}),Object(k.jsxs)(Ke,{children:[t.runtime?t.runtime:t.episode_run_time[0]," min"]}),Object(k.jsx)(Qe,{children:"\u2022"}),Object(k.jsx)(Ke,{children:t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))})]}),Object(k.jsx)(We,{children:t.overview})]})]})]})},Ye=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var r;Object(m.a)(this,n),(r=t.call(this,e)).componentDidMount=Object(x.a)(h.a.mark((function e(){var t,n,a,i,c,o,s,l,d;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.props,n=t.match.params.id,a=t.history.push,i=t.location.pathname,c=r.state.isMovie,r.isMovie=i.includes("/movie/"),o=Number(n),Number(o)){e.next=6;break}return e.abrupt("return",a("/"));case 6:if(s=null,e.prev=7,!c){e.next=15;break}return e.next=11,we(o);case 11:l=e.sent,s=l.data,e.next=19;break;case 15:return e.next=17,ze(o);case 17:d=e.sent,s=d.data;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(7),r.setState({error:"\uc601\ud654 \uc815\ubcf4\ub97c \ucc3e\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4."});case 24:return e.prev=24,r.setState({loading:!1,result:s}),e.finish(24);case 27:case"end":return e.stop()}}),e,null,[[7,21,24,27]])})));var a=e.location.pathname;return r.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},r}return Object(O.a)(n,[{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading;return Object(k.jsx)(Xe,{result:t,error:n,loading:r})}}]),n}(d.a.Component),Ze=y.c.header(ae||(ae=Object(_.a)(["\n  color: white;\n  position: fixed;\n  top:0;\n  left:0;\n  width:100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  background-color: rgba(20,20,20, 0.8);\n  box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);\n  z-index: 100;\n"]))),$e=y.c.ul(ie||(ie=Object(_.a)(["\n  display: flex;\n"]))),et=y.c.li(ce||(ce=Object(_.a)(["\n  width:100px;\n  height: 50px;\n  border-bottom: 5px solid \n  ",";\n  transition: border-bottom 0.2s ease-in-out;\n"])),(function(e){return e.current?"red":"transparent"})),tt=Object(y.c)(j.b)(oe||(oe=Object(_.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 600;\n  "]))),nt=Object(b.g)((function(e){var t=e.location.pathname;return Object(k.jsx)(Ze,{children:Object(k.jsxs)($e,{children:[Object(k.jsx)(et,{current:"/"===t,children:Object(k.jsx)(tt,{to:"/",children:"\ud648"})}),Object(k.jsx)(et,{current:"/tv"===t,children:Object(k.jsx)(tt,{to:"/tv",children:"TV \ud504\ub85c\uadf8\ub7a8"})}),Object(k.jsx)(et,{current:"/search"===t,children:Object(k.jsx)(tt,{to:"/search",children:"\uac80\uc0c9\ucc3d \uad6c\ud604"})})]})})})),rt=function(){return Object(k.jsx)(j.a,{children:Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(nt,{}),Object(k.jsxs)(b.d,{children:[Object(k.jsx)(b.b,{path:"/",exact:!0,component:Me}),Object(k.jsx)(b.b,{path:"/tv",exact:!0,component:Ie}),Object(k.jsx)(b.b,{path:"/search",exact:!0,component:Ve}),Object(k.jsx)(b.b,{path:"/movie/:id",exact:!0,component:Ye}),Object(k.jsx)(b.b,{path:"/show/:id",exact:!0,component:Ye}),Object(k.jsx)(b.a,{from:"*",to:"/"})]})]})})},at=n(45),it=Object(y.a)(se||(se=Object(_.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-size:12px;\n        background-color:rgba(20, 20, 20, 1);\n        color:white;\n        padding-top:50px;\n    }\n"])),at.a),ct=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(rt,{}),Object(k.jsx)(it,{})]})};p.a.render(Object(k.jsx)(d.a.StrictMode,{children:Object(k.jsx)(ct,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.8087f7a4.chunk.js.map