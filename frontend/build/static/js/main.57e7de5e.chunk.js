(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],Array(25).concat([function(e,t,c){var a={"./public/favicon.ico":89,"./public/images/airpods.jpg":90,"./public/images/alexa.jpg":91,"./public/images/background.jpg":92,"./public/images/camera.jpg":93,"./public/images/echodot.jpg":94,"./public/images/headphones.jpg":95,"./public/images/laptop.jpg":96,"./public/images/logo.jpg":97,"./public/images/logonobackground.jpg":98,"./public/images/mouse.jpg":99,"./public/images/pendrive.jpg":100,"./public/images/phone.jpg":101,"./public/images/playstation.jpg":102,"./public/images/printer.jpg":103,"./public/images/sample.jpg":104,"./public/images/smartwatch.jpg":105,"./public/images/soundbar.jpg":106,"./public/images/tv.jpg":107,"./public/index.html":108,"./public/logo-no-background.png":109,"./public/logo.png":110};function s(e){var t=n(e);return c(t)}function n(e){if(!c.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=n,e.exports=s,s.id=25},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/favicon.90213828.ico"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/airpods.8d4984e9.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/alexa.5a441a61.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/background.9204afc0.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/camera.31123404.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/echodot.99099d2a.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/headphones.30165033.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/laptop.fd1850bf.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/logo.fe900ea8.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/logonobackground.820fbfad.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/mouse.b8fed0b3.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/pendrive.c463331c.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/phone.592f637e.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/playstation.c2be05be.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/printer.2d33a2ef.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/sample.e8730b9a.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/smartwatch.e35844e4.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/soundbar.3a26dd06.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/tv.264f885b.jpg"},function(e,t){throw new Error('Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <!DOCTYPE html>\n| <html lang="en">\n| ')},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/logo-no-background.77ce1bbb.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/logo.9df799fd.png"},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(26),n=c.n(s),r=(c(52),c(53),c(8)),i=(c(54),c(9)),o=c(21),l=c(10),d=c(5),u=c(6),j=c.n(u),p=c(11),b=c(14),h=c.n(b),O="PRODUCT_LIST_REQUEST",m="PRODUCT_LIST_SUCCESS",f="PRODUCT_LIST_FAILED",x="GET_PRODUCT_REQUEST",g="GET_PRODUCT_SUCCESS",v="GET_PRODUCT_FAILED",_="GET_USER_REQUEST",y="GET_USER_SUCCESS",N="GET_USER_FAILED",S="GET_TOPTHREE_REQUEST",T="GET_TOPTHREE_SUCCESS",w="USER_LOGOUT",E="CREATE_USER_REQUEST",C="CREATE_USER_SUCCESS",k="CREATE_USER_FAILED",R="ADD_PRODUCT_TO_WISHLIST_SUCCESS",U="ADD_PRODUCT_TO_WISHLIST_REQUEST",I="ADD_PRODUCT_TO_WISHLIST_FAILED",D="ADD_PRODUCT_TO_CART_SUCCESS",P="ADD_PRODUCT_TO_CART_REQUEST",A="ADD_PRODUCT_TO_CART_FAILED",L="REMOVE_PRODUCT_FROM_CART_FAILED",F="REMOVE_PRODUCT_FROM_CART_SUCCESS",z="REMOVE_PRODUCT_FROM_CART_REQUEST",G=c(4),Q=function(){return function(){var e=Object(p.a)(j.a.mark((function e(t){var c,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:O}),e.next=4,h.a.get("/api/products");case 4:c=e.sent,a=c.data,s=a.products,t({type:m,payload:s}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:f,payload:e.t0.response&&e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},J=c(1),M=function(){var e=Object(d.c)((function(e){return e.authorizeUser})).user,t=Object(d.b)(),c=Object(G.f)(),s=Object(a.useState)(""),n=Object(r.a)(s,2),u=n[0],b=n[1],x=function(e){e.preventDefault(),t(""!==u?function(e){return function(){var t=Object(p.a)(j.a.mark((function t(c){var a,s,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:O}),t.next=4,h.a.get("/api/products/search/".concat(e));case 4:a=t.sent,s=a.data,n=s.products,c({type:m,payload:n}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),c({type:f,payload:t.t0.response&&t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(u):Q())};return Object(J.jsx)("div",{children:Object(J.jsxs)("header",{className:"header",children:[Object(J.jsx)("div",{children:Object(J.jsxs)(i.b,{to:"/",className:"header_logo",children:["Stash",Object(J.jsx)("span",{className:"color",children:"Cart"})]})}),Object(J.jsxs)("div",{className:"header_search",children:[Object(J.jsx)("input",{type:"text",name:"search",onChange:function(e){b(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&x(e)}}),Object(J.jsx)(i.b,{className:"header_search-icon",to:"/",onClick:x,children:Object(J.jsx)(o.b,{})})]}),Object(J.jsxs)("ul",{className:"header_navigation",children:[Object(J.jsx)("li",{className:"header_navigation_item item1",children:e?Object(J.jsx)(i.b,{className:"header_navigation_item-link",to:"/wishlist",children:Object(J.jsx)(o.a,{})}):null}),Object(J.jsx)("li",{className:"header_navigation_item item2",children:Object(J.jsx)(i.b,{className:"header_navigation_item-link",to:"/cart",children:Object(J.jsx)(l.d,{})})}),Object(J.jsx)("li",{className:"header_navigation_item item3",children:e&&e.name?Object(J.jsx)("span",{className:"username",children:e.name.split(" ")[0]}):Object(J.jsx)(i.b,{className:"header_navigation_item-link",to:"/login",children:"Login"})}),e&&null!=e?Object(J.jsx)("li",{children:Object(J.jsx)("button",{className:"btn",onClick:function(){localStorage.removeItem("userInfo"),c.push("/"),t(function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:w})}catch(c){console.log(c)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})}):null]})]})})},B=(c(87),c(88),function(e){var t=e.product;return t?Object(J.jsxs)("div",{className:"card",children:[Object(J.jsx)("div",{className:"card-img",children:Object(J.jsx)("img",{alt:t.name,src:c(25)("./public".concat(t.image)).default})}),Object(J.jsxs)("div",{className:"card-details",children:[Object(J.jsx)("h3",{children:t.name}),Object(J.jsxs)("div",{className:"card-details-rating",children:[Object(J.jsxs)("div",{children:[Object(J.jsx)(l.a,{}),Object(J.jsx)(l.a,{}),Object(J.jsx)(l.a,{}),Object(J.jsx)(l.a,{}),Object(J.jsx)(l.e,{})]}),Object(J.jsxs)("p",{children:[t.numReviews," Reviews"]})]}),Object(J.jsxs)("h2",{children:["\u20b9",t.price]}),Object(J.jsx)(i.b,{className:"btn",to:"/details/".concat(t._id),children:"Details"})]})]}):null}),H=(c(111),c(112),function(){return Object(J.jsx)("div",{className:"spinner",children:Object(J.jsx)("span",{className:"load"})})}),W=function(){var e=Object(a.useState)(1),t=Object(r.a)(e,2),s=t[0],n=t[1],o=function(e){n("right"===e?3===s?1:s+1:1===s?3:s-1)},u=Object(d.b)(),b=Object(d.c)((function(e){return e.productListTopThree})),O=b.products,m=b.loading;return Object(a.useEffect)((function(){u(function(){var e=Object(p.a)(j.a.mark((function e(t){var c,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:S}),e.next=4,h.a.get("/api/products/topthree");case 4:c=e.sent,a=c.data,s=a.products,t({type:T,payload:s}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"GET_TOPTHREE_FAILED",payload:e.t0.response&&e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[u]),m?Object(J.jsx)(H,{}):Object(J.jsx)("div",{className:"carousel",children:O.map((function(e,t){return Object(J.jsxs)("div",{className:s===t+1?"carousel_slide carousel_slide-visible":"carousel_slide",children:[Object(J.jsx)(l.c,{className:"carousel_slide-right",onClick:function(){o("right")}}),Object(J.jsx)("img",{alt:e.name,src:c(25)("./public".concat(e.image)).default}),Object(J.jsxs)("div",{style:{paddingLeft:"2vw"},children:[Object(J.jsx)(i.b,{className:"carousel_slide-title",to:"/details/".concat(e._id),children:e.name}),Object(J.jsxs)("h1",{style:{padding:"20px 0px 10px 0px"},children:["\u20b9 ",e.price]})]}),Object(J.jsx)(l.b,{className:"carousel_slide-left",onClick:function(){o("left")}})]},t)}))})},Y=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.productList})),c=t.products,s=t.loading;return Object(a.useEffect)((function(){e(Q())}),[e]),s?Object(J.jsx)(H,{}):c?Object(J.jsxs)("div",{className:"home",children:[Object(J.jsx)("div",{className:"home_carousel",children:Object(J.jsx)(W,{products:c})}),Object(J.jsx)("div",{className:"heading",children:"LATEST PRODUCTS"}),Object(J.jsxs)("div",{className:"home_products",children:[c.map((function(e,t){return Object(J.jsx)(B,{product:e},t)})),Object(J.jsx)(B,{})]})]}):null},q=(c(113),c(24)),V=c(23),Z=function(){return Object(J.jsxs)("div",{children:[Object(J.jsxs)("footer",{className:"footer-1",children:[Object(J.jsxs)("ul",{children:[Object(J.jsx)("li",{children:"About us"}),Object(J.jsx)("li",{children:"Contact"}),Object(J.jsx)("li",{children:"For Query"}),Object(J.jsx)("li",{children:"Career"})]}),Object(J.jsxs)("ul",{className:"icons",children:[Object(J.jsx)("li",{children:Object(J.jsx)(q.a,{icon:V.a,color:"white",className:"icon"})}),Object(J.jsx)("li",{children:Object(J.jsx)(q.a,{icon:V.b,color:"white",className:"icon"})}),Object(J.jsx)("li",{children:Object(J.jsx)(q.a,{icon:V.d,color:"white",className:"icon"})}),Object(J.jsx)("li",{children:Object(J.jsx)(q.a,{icon:V.c,color:"white",className:"icon"})})]})]}),Object(J.jsx)("footer",{className:"footer-2",children:Object(J.jsx)("p",{children:"Copyright \xa9 2022, StashCart.com"})})]})},K=(c(118),function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),o=Object(r.a)(n,2),l=o[0],u=o[1],b=Object(d.b)(),O=Object(G.f)(),m=Object(d.c)((function(e){return e.authorizeUser})),f=m.loading,x=m.user,g=m.error;Object(a.useEffect)((function(){x&&O.push("/")}),[O,x,m]);return Object(J.jsx)("div",{className:"login",children:f?Object(J.jsx)(H,{}):Object(J.jsxs)("form",{className:"login_box",children:[Object(J.jsx)("div",{className:"login_box-title",children:"Login to your account"}),Object(J.jsxs)("div",{className:"login_box-input",children:[g?Object(J.jsx)("p",{className:"message",children:g}):null,Object(J.jsx)("label",{htmlFor:"email",children:"Email"}),Object(J.jsx)("input",{type:"email",placeholder:"you@example.com",id:"email",onChange:function(e){s(e.target.value)}})]}),Object(J.jsxs)("div",{className:"login_box-input",children:[Object(J.jsx)("label",{htmlFor:"password",children:"Password"}),Object(J.jsx)("input",{type:"password",placeholder:"********",id:"password",onChange:function(e){u(e.target.value)}})]}),Object(J.jsx)("div",{children:Object(J.jsx)("button",{className:"btn",type:"submit",onClick:function(e){e.preventDefault(),b(function(e,t){return function(){var c=Object(p.a)(j.a.mark((function c(a){var s,n;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,a({type:_}),c.next=4,h.a.post("/api/users/login",{email:e,password:t});case 4:s=c.sent,n=s.data,a({type:y,payload:n}),localStorage.setItem("userInfo",JSON.stringify(n)),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(0),a({type:N,payload:c.t0.response&&c.t0.response.data.message});case 13:case"end":return c.stop()}}),c,null,[[0,10]])})));return function(e){return c.apply(this,arguments)}}()}(c,l))},children:"Login"})}),Object(J.jsx)("div",{className:"login_box-register",children:Object(J.jsxs)("p",{children:["New to the StashCart?"," ",Object(J.jsx)(i.b,{className:"login_box-register-link",to:"/register",children:"Register"})]})})]})})}),X=(c(119),function(){var e=Object(G.g)().pathname.split("/")[2],t=Object(d.b)(),s=Object(a.useState)(""),n=Object(r.a)(s,2),u=n[0],b=n[1],O=Object(d.c)((function(e){return e.productDetails})),m=Object(d.c)((function(e){return e.authorizeUser})).user,f=Object(d.c)((function(e){return e.addProductToWishList})).error,_=Object(d.c)((function(e){return e.addProductToCart})),N=_?_.error:null,S=O.product,T=O.loading;return Object(a.useEffect)((function(){t(function(e){return function(){var t=Object(p.a)(j.a.mark((function t(c){var a,s,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:x}),t.next=4,h.a.get("/api/products/".concat(e));case 4:a=t.sent,s=a.data,n=s.product,c({type:g,payload:n}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),c({type:v,payload:t.t0.response&&t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[t,e]),!T&&S&&0!==Object.keys(S).length?S?Object(J.jsxs)("div",{className:"details",children:[Object(J.jsx)("div",{children:Object(J.jsx)(i.b,{to:"/",className:"btn",children:"Back"})}),Object(J.jsxs)("div",{className:"details_main",children:[Object(J.jsx)("div",{className:"details_image",children:Object(J.jsx)("img",{src:c(25)("./public".concat(S.image)).default,alt:S.name})}),Object(J.jsx)("div",{className:"details_content",children:Object(J.jsxs)("div",{className:"details_content-info",children:[Object(J.jsx)("h1",{children:S.name}),Object(J.jsxs)("div",{className:"details_content-info-rating",children:[Object(J.jsxs)("div",{children:[Object(J.jsx)(l.a,{}),Object(J.jsx)(l.a,{}),Object(J.jsx)(l.a,{}),Object(J.jsx)(l.a,{}),Object(J.jsx)(l.e,{})]}),Object(J.jsxs)("p",{children:[S.numReviews," Reviews"]})]}),Object(J.jsx)("hr",{}),Object(J.jsxs)("p",{className:"details_content-info-price",children:[Object(J.jsx)("b",{children:"Price:"})," \u20b9",S.price]}),Object(J.jsx)("hr",{}),Object(J.jsxs)("p",{className:"details_content-info-description",children:[Object(J.jsx)("b",{children:"Description:"})," ",S.description,"."]}),Object(J.jsx)("hr",{}),Object(J.jsx)("br",{}),Object(J.jsx)("button",{className:"btn",onClick:function(c){if(c.preventDefault(),!m)return b("Login to add product in wishlist."),void setTimeout((function(){b("")}),3e3);var a,s;t((a=m._id,s=e,function(){var e=Object(p.a)(j.a.mark((function e(t,c){var n,r,i,o,l,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:U}),n=c(),r=n.authorizeUser,i=r.user,o={headers:{Authorization:"Bearer ".concat(i.token)}},e.next=7,h.a.patch("/api/users/addtowishlist",{userId:a,productId:s},o);case 7:l=e.sent,d=l.data,localStorage.setItem("userInfo",JSON.stringify(d)),t({type:y,payload:d}),t({type:R,payload:d}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),t({type:I,payload:e.t0.response&&e.t0.response.data.message});case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,c){return e.apply(this,arguments)}}())),f||(b("Product is added wishlist."),setTimeout((function(){b("")}),3e3))},children:Object(J.jsx)(o.a,{})}),f?Object(J.jsx)("div",{className:"details_content-info-added",children:f}):u?Object(J.jsx)("div",{className:"details_content-info-added",children:u}):"",N?Object(J.jsx)("div",{className:"details_content-info-added",children:N}):""]})}),Object(J.jsx)("div",{className:"details_content",children:Object(J.jsxs)("table",{children:[Object(J.jsxs)("tr",{children:[Object(J.jsx)("td",{children:Object(J.jsx)("b",{children:"Price: "})}),Object(J.jsx)("td",{children:S.price})]}),Object(J.jsxs)("tr",{children:[Object(J.jsx)("td",{children:Object(J.jsx)("b",{children:"Status:"})}),Object(J.jsx)("td",{children:"In Stock"})]}),Object(J.jsxs)("tr",{children:[Object(J.jsx)("td",{children:Object(J.jsx)("label",{htmlFor:"quantity",children:Object(J.jsx)("b",{children:"Quantity:"})})}),Object(J.jsx)("td",{children:Object(J.jsx)("input",{type:"number",id:"quantity",name:"quantity",min:"1",max:"5",defaultValue:1})})]}),Object(J.jsx)("tr",{children:Object(J.jsx)("td",{colSpan:2,children:Object(J.jsx)("button",{className:"btn",onClick:function(c){if(c.preventDefault(),!m)return b("Login to add product in cart."),void setTimeout((function(){b("")}),3e3);var a,s;b("Product added to cart."),t((a=m._id,s=e,function(){var e=Object(p.a)(j.a.mark((function e(t,c){var n,r,i,o,l,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:P}),n=c(),r=n.authorizeUser,i=r.user,o={headers:{Authorization:"Bearer ".concat(i.token)}},e.next=7,h.a.patch("/api/users/addproducttocart",{userId:a,productId:s},o);case 7:l=e.sent,d=l.data,localStorage.setItem("userInfo",JSON.stringify(d)),t({type:y,payload:d}),t({type:D,payload:d}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),t({type:A,payload:e.t0.response&&e.t0.response.data.message});case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,c){return e.apply(this,arguments)}}())),setTimeout((function(){b("")}),3e3)},style:{width:"100%"},children:"Add to cart"})})})]})})]})]}):null:Object(J.jsx)(H,{})}),$=(c(120),c(45)),ee=function(){var e=Object(d.c)((function(e){return e.authorizeUser})),t=Object(d.c)((function(e){return e.removeProductToCart})),a=e.loading,s=e.user,n=Object(d.b)(),r=function(e,t){t,n(function(e,t){return function(){var c=Object(p.a)(j.a.mark((function c(a,s){var n,r,i,o,l,d,u;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,a({type:z}),n=s(),r=n.authorizeUser,i=r.user,o=i.cartItems.filter((function(e){return e._id!==t})),localStorage.setItem("userInfo",JSON.stringify(o)),l={headers:{Authorization:"Bearer ".concat(i.token)}},c.next=9,h.a.patch("/api/users/removeproductfromcart",{userId:e,productId:t},l);case 9:d=c.sent,u=d.data,localStorage.setItem("userInfo",JSON.stringify(u)),a({type:y,payload:u}),a({type:F,payload:u}),c.next=19;break;case 16:c.prev=16,c.t0=c.catch(0),a({type:L,payload:c.t0.response&&c.t0.response.data.message});case 19:case"end":return c.stop()}}),c,null,[[0,16]])})));return function(e,t){return c.apply(this,arguments)}}()}(s._id,e))};return a?Object(J.jsx)(H,{}):s&&s.cartItems?Object(J.jsxs)("div",{className:"cart",children:[Object(J.jsx)("div",{className:"cart_items",children:s.cartItems.map((function(e,a){return t.loading?Object(J.jsx)(H,{}):Object(J.jsxs)("div",{className:"cart_item",children:[Object(J.jsx)("img",{src:c(25)("./public".concat(e.image)).default,alt:e.name}),Object(J.jsxs)("div",{className:"cart_item-details",children:[Object(J.jsx)("h3",{children:e.name}),Object(J.jsxs)("h3",{children:["\u20b9 ",e.price]})]}),Object(J.jsx)("button",{className:"btn",onClick:function(){r(e._id,e.price)},children:"Remove"})]},a)}))}),Object(J.jsxs)("div",{className:"cart_total",children:[Object(J.jsx)("h1",{className:"cart_total-title",children:"Total"}),Object(J.jsx)("hr",{}),s.cartItems.map((function(e,t){return Object(J.jsxs)("div",{className:"cart_total-item",children:[Object(J.jsx)("h3",{className:"cart_total-item-name",children:e.name}),Object(J.jsx)("h3",{className:"cart_total-item-price",children:e.price})]},t)})),Object(J.jsx)("hr",{}),Object(J.jsxs)("div",{className:"cart_total-item",children:[Object(J.jsx)("h3",{children:"Total Price"}),Object(J.jsxs)("h3",{children:["\u20b9",function(){var e=s.cartItems.map((function(e){return e.price}));return e.reduce((function(e,t){return e+t}),0).toFixed(2)}()]})]}),Object(J.jsx)("hr",{}),Object(J.jsx)("button",{id:"checkout",className:"btn checkout-btn",onClick:function(){document.getElementById("checkout").textContent="Processing...";var e=function(){var e=Object(p.a)(j.a.mark((function e(){var c,a,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={headers:{Authorization:"Bearer ".concat(s.token)}},e.next=3,h.a.get("/api/checkout/".concat(s._id),c);case 3:return a=e.sent,n=Object($.a)("pk_test_51JYS4lSI7Mw1fgd2NZwHQynRq2HT8hxor6ZB3MlQkEPLSmSgCWwhx0HeXVBXKnFFj9KhGGZ3G3LqTk6ukp7r2ZS0008sJAiejl"),e.next=7,n;case 7:return r=e.sent,e.next=10,r.redirectToCheckout({sessionId:a.data.session.id});case 10:t();case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.cartItems.forEach((function(e){r(e._id,e.price)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()},children:"Checkout"})]})]}):Object(J.jsx)("div",{className:"noproduct",children:Object(J.jsx)("p",{className:"message",children:"Your cart is empty."})})},te=(c(121),function(){var e=Object(d.c)((function(e){return e.authorizeUser})),t=e.loading,c=e.user;return c?t?Object(J.jsx)(H,{}):Object(J.jsxs)("div",{className:"wishlist",children:[Object(J.jsx)("h1",{className:"wishlist_title",children:"Wishlist"}),Object(J.jsxs)("div",{className:"wishlist_products",children:[c.wishList.map((function(e,t){return Object(J.jsx)(B,{product:e},t)})),Object(J.jsx)(B,{})]})]}):Object(J.jsx)("div",{className:"noproduct",children:Object(J.jsx)("p",{className:"message",children:"Login to add products in wishlist"})})}),ce=(c(122),function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),o=Object(r.a)(n,2),l=o[0],u=o[1],b=Object(a.useState)(""),O=Object(r.a)(b,2),m=O[0],f=O[1],x=Object(a.useState)(""),g=Object(r.a)(x,2),v=g[0],_=g[1],N=Object(a.useState)(""),S=Object(r.a)(N,2),T=S[0],w=S[1],R=Object(a.useState)(),U=Object(r.a)(R,2),I=U[0],D=U[1],P=Object(G.f)(),A=Object(d.b)(),L=Object(d.c)((function(e){return e.signupUser})).user;return Object(J.jsx)("div",{className:"register",children:Object(J.jsxs)("form",{className:"register_box",children:[Object(J.jsx)("div",{className:"register_box-title",children:"Create your account"}),L&&L.message?Object(J.jsx)("p",{className:"message",children:L.message}):null,I?Object(J.jsx)("p",{className:"message",children:"Passwords don't match."}):null,Object(J.jsxs)("div",{className:"register_box-input",children:[Object(J.jsx)("label",{htmlFor:"name",children:"Name"}),Object(J.jsx)("input",{type:"text",placeholder:"Your Name",id:"name",onChange:function(e){return s(e.target.value)}})]}),Object(J.jsxs)("div",{className:"register_box-input",children:[Object(J.jsx)("label",{htmlFor:"email",children:"Email"}),Object(J.jsx)("input",{type:"email",placeholder:"you@example.com",id:"email",onChange:function(e){return u(e.target.value)}})]}),Object(J.jsxs)("div",{className:"register_box-input",children:[Object(J.jsx)("label",{htmlFor:"Address",children:"Address"}),Object(J.jsx)("textarea",{row:"7",cols:"30",type:"textarea",placeholder:"Your address",id:"Address",onChange:function(e){return w(e.target.value)}})]}),Object(J.jsxs)("div",{className:"register_box-input",children:[Object(J.jsx)("label",{htmlFor:"password",children:"Password"}),Object(J.jsx)("input",{type:"password",placeholder:"********",id:"password",onChange:function(e){return f(e.target.value)}})]}),Object(J.jsxs)("div",{className:"register_box-input",children:[Object(J.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(J.jsx)("input",{type:"password",placeholder:"********",id:"confirmPassword",onChange:function(e){return _(e.target.value)}})]}),Object(J.jsx)("div",{children:Object(J.jsx)("button",{className:"btn",type:"submit",onClick:function(e){e.preventDefault(),m===v?(A(function(e,t,c,a){return function(){var s=Object(p.a)(j.a.mark((function s(n){var r,i;return j.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,n({type:E}),s.next=4,h.a.post("/api/users/signup",{name:e,email:t,password:c,address:a});case 4:r=s.sent,i=r.data,localStorage.setItem("userInfo",JSON.stringify(i)),n({type:C,payload:i}),n({type:y,payload:i}),s.next=14;break;case 11:s.prev=11,s.t0=s.catch(0),n({type:k,payload:s.t0.response&&s.t0.response.data.message});case 14:case"end":return s.stop()}}),s,null,[[0,11]])})));return function(e){return s.apply(this,arguments)}}()}(c,l,m,T)),P.push("/")):D("Passwords don't match")},children:"Signup"})}),Object(J.jsx)("div",{className:"register_box-login",children:Object(J.jsxs)("p",{children:["Already a customer?"," ",Object(J.jsx)(i.b,{className:"register_box-login-link",to:"/login",children:"Login"})]})})]})})});var ae=function(){return Object(J.jsx)("div",{className:"App",children:Object(J.jsxs)(i.a,{children:[Object(J.jsx)(M,{}),Object(J.jsxs)(G.c,{children:[Object(J.jsx)(G.a,{path:"/login",exact:!0,children:Object(J.jsx)(K,{})}),Object(J.jsx)(G.a,{path:"/details/:id",exact:!0,children:Object(J.jsx)(X,{})}),Object(J.jsx)(G.a,{path:"/cart",exact:!0,children:Object(J.jsx)(ee,{})}),Object(J.jsx)(G.a,{path:"/wishlist",exact:!0,children:Object(J.jsx)(te,{})}),Object(J.jsx)(G.a,{path:"/register",exact:!0,children:Object(J.jsx)(ce,{})}),Object(J.jsx)(G.a,{path:"/",children:Object(J.jsx)(Y,{})})]}),Object(J.jsx)(Z,{})]})})},se=c(22),ne=c(46),re=c(47),ie=Object(se.combineReducers)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{loading:!0};case m:return{products:t.payload,loading:!1};case f:return{error:t.payload,loading:!1};default:return e}},productListTopThree:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{loading:!0};case T:return{products:t.payload,loading:!1};case v:return{error:t.payload,loading:!1};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{product:{},loading:!0};case g:return{product:t.payload,loading:!1};case v:return{error:t.payload,loading:!1};default:return e}},authorizeUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return{loading:!0};case y:return{user:t.payload,loading:!1};case N:return{error:t.payload,loading:!1};case w:return{};default:return e}},signupUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return{loading:!0};case C:return{user:t.payload,loading:!1};case k:return{error:t.payload,loading:!1};default:return e}},addProductToWishList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return{loading:!0};case R:return{loading:!1,user:t.payload};case I:return{loading:!1,error:t.payload};default:return e}},addProductToCart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return{loading:!0};case D:return{loading:!1,payload:t.payload};case A:return{loading:!1,error:t.payload};default:return e}},removeProductToCart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return{loading:!0};case F:return{loading:!1,payload:t.payload};case L:return{loading:!1,error:t.payload};default:return e}}}),oe={authorizeUser:{user:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},le=Object(se.createStore)(ie,oe,Object(re.composeWithDevTools)(Object(se.applyMiddleware)(ne.a)));n.a.render(Object(J.jsx)(d.a,{store:le,children:Object(J.jsx)(ae,{})}),document.getElementById("root"))}]),[[123,1,2]]]);
//# sourceMappingURL=main.57e7de5e.chunk.js.map