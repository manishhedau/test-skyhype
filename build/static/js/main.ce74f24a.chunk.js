(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{144:function(e,t,i){},175:function(e,t,i){},176:function(e,t,i){},177:function(e,t,i){},180:function(e,t,i){},301:function(e,t,i){},311:function(e,t,i){},390:function(e,t,i){},391:function(e,t,i){},392:function(e,t,i){},393:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i.n(n),c=i(9),a=i.n(c),l=(i(175),i(176),i(177),i(1)),r=function(){return Object(l.jsxs)("div",{className:"error-page",children:[Object(l.jsx)("img",{src:"https://skyhype.in/htdocs_error/something-lost.png",alt:"Error"}),Object(l.jsx)("h1",{children:"Oops, looks like the page is lost."}),Object(l.jsx)("p",{children:"This is not a fault, just an accident that was not intentional."})]})},j=i(92),o=i.n(j),d=i(145),h=i(14),b=(i(180),i(19)),u=i(431),O=i(42),m=i(154),x=i.n(m).a.create({baseURL:"http://localhost:8080"}),p=i(21),f=i(60),A=i(435),v=["name","mt","isClick"],g=function(e){var t=e.name,i=e.mt,n=e.isClick,s=Object(f.a)(e,v),c=Object(b.e)(t),a=Object(h.a)(c,2),r=a[0],j=a[1],o=(Object(b.f)(),Object(p.a)(Object(p.a)(Object(p.a)({},r),s),{},{fullWidth:!0,variant:"outlined"}));return(j&&j.touched&&j.error&&j.value||n&&!j.value)&&(o.error=!0,o.helperText=j.error),Object(l.jsx)(A.a,Object(p.a)(Object(p.a)({},o),{},{style:{marginBottom:j&&j.touched&&j.error&&j.value||n&&!j.value?"0px":"1rem",marginTop:{mt:i}},name:t}))},y=i(159),N=i.n(y);i(300),i(87);var w=function(e){var t=e.name,i=e.isClick,n=Object(b.f)().setFieldValue,s=Object(b.e)(t),c=Object(h.a)(s,2),a=(c[0],c[1]);return Object(l.jsxs)("div",{className:"phone__input ".concat(a.touched&&a.error&&i?"focus":""),children:[Object(l.jsx)(N.a,{country:"in",name:"phone",value:"",onChange:function(e,i,s,c){var a=e.replace(i.dialCode,"");n(t,a)},placeholder:"Mobile Number",required:!0,inputProps:{name:t,required:!0,minLength:13,autoFocus:!1}}),a.touched&&a.error?Object(l.jsx)("p",{className:"error",children:a.error}):null]})},k=i(434),I=i(433),F=i(430),M=i(432),L=(i(301),["errorString","label","children","value","name","onChange","onBlur","isClick"]),H=["name","items","label","isClick","required"],z=function(e){e.errorString;var t=e.label,i=e.children,n=e.value,s=e.name,c=e.onChange,a=e.onBlur,r=e.isClick,j=Object(f.a)(e,L),o=Object(b.e)(s),d=Object(h.a)(o,2),u=d[0],O=d[1],m=Object(p.a)(Object(p.a)(Object(p.a)({},u),j),{},{fullWidth:!0,variant:"outlined"});return(O&&O.touched&&O.error&&O.value||r&&!O.value)&&(m.error=!0,m.helperText=O.error),Object(l.jsxs)(F.a,Object(p.a)(Object(p.a)({fullWidth:!0,variant:"outlined",name:s},m),{},{children:[Object(l.jsx)(k.a,{children:t}),Object(l.jsx)(M.a,{name:s,onChange:c,onBlur:a,value:n,children:i}),Object(l.jsxs)("p",{style:{color:"#f44336",fontSize:"15px",textAlign:"start",marginLeft:"10px"},children:[" ",r&&!O.value&&Object(l.jsx)(b.a,{name:s})]})]}))},B=function(e){var t=e.name,i=e.items,n=e.label,s=e.isClick,c=(e.required,Object(f.a)(e,H));return Object(l.jsx)("div",{className:"FormikSelect",children:Object(l.jsx)(b.b,Object(p.a)(Object(p.a)({name:t,as:z,label:n,isClick:s},c),{},{children:i.map((function(e){return Object(l.jsx)(I.a,{value:e.value,children:e.label},e.value)}))}))})},D=i(11),T=i(91),C=i.n(T),P=i(16),Y=O.a().shape({fullname:O.b().required().min(1).max(50).label("Full Name"),email:O.b().required().min(10).max(50).email().label("Email"),phone:O.b().required().label("Phone Number"),instagram:O.b().required().nullable().label("Instagram"),user_type:O.b().min(1,"Please select at least one value.").required().label("User Type")}),S=(Object(u.a)((function(e){return{formWrapper:{marginTop:e.spacing(5),marginBottom:e.spacing(8)}}})),[{label:"Creator",value:"creator"},{label:"Brand",value:"brand"},{label:"Agency Manager",value:"agency_manager"}]),E=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),i=t[0],s=t[1],c=Object(n.useState)(!1),a=Object(h.a)(c,2),r=a[0],j=a[1],u=Object(D.f)(),O=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i=t,x.post("/audit/user",i);case 3:e.sent,u.push("/waiting-page"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&s(e.t0.response.data);case 10:case"end":return e.stop()}var i}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("h1",{children:"Skyhype"})}),Object(l.jsxs)("div",{className:"sign-page",children:[Object(l.jsx)("div",{className:"sign-form",children:Object(l.jsxs)("div",{className:"sign-form-content",children:[Object(l.jsx)("div",{className:"header__text",children:Object(l.jsx)("h1",{children:"The new begining to share, Starts Here"})}),i&&Object(l.jsx)("div",{className:"error",children:Object(l.jsx)("p",{children:i})}),Object(l.jsx)(b.d,{initialValues:{fullname:"",email:"",phone:"",instagram:"",user_type:""},onSubmit:function(e){s(""),O(e)},validationSchema:Y,children:function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(b.c,{className:"signup__form",children:[Object(l.jsx)(g,{name:"fullname",variant:"outlined",label:"First Name",className:"form__field",inputProps:{maxLength:50},isClick:r}),Object(l.jsx)(g,{name:"email",variant:"outlined",label:"Email",type:"email",className:"form__field",inputProps:{maxLength:50},isClick:r}),Object(l.jsx)(w,{name:"phone",isClick:r}),Object(l.jsx)(g,{name:"instagram",variant:"outlined",label:"Instagram Username",className:"form__field",placeholder:"Username",inputProps:{maxLength:50},mt:"1rem",isClick:r}),Object(l.jsx)(B,{name:"user_type",items:S,label:"User Type",required:!0,isClick:r}),Object(l.jsx)("button",{className:"btn btn-block btn-dark",style:{width:"50%"},type:"submit",onClick:function(){return j(!0)},children:"Submit"})]})})}}),Object(l.jsxs)("div",{className:"bottom__text",children:[Object(l.jsx)("h5",{children:"Already Have an Account?"}),Object(l.jsx)(P.b,{to:"/login",children:Object(l.jsx)("h5",{children:"Login"})})]})]})}),Object(l.jsx)("div",{className:"signup-image",children:Object(l.jsx)("div",{className:"wallpaper-image1"})})]})]})},G=(i(311),i(161)),U=i.n(G),R=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),i=t[0],s=t[1];return Object(l.jsxs)("div",{className:"login-page",children:[Object(l.jsx)("div",{className:"login-form",children:Object(l.jsxs)("div",{className:"form-content",children:[Object(l.jsx)("h1",{children:"Welcome Back"}),Object(l.jsx)("h4",{children:"Login using Mobile Number"}),Object(l.jsxs)("form",{style:{height:"60%",width:"70%"},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)(C.a,{preferredCountries:["in"],format:!0,onlyCountries:["in"],placeholder:"Mobile Number",fieldId:"number-input",className:"form-control"}),Object(l.jsx)("br",{}),Object(l.jsx)("small",{className:"form-text text-muted",children:"You will receive and OTP on your number"})]}),Object(l.jsxs)("p",{children:["New to SkyHype?",Object(l.jsx)(P.b,{to:"/signup",children:" Create an account "})]}),Object(l.jsx)("div",{id:"error-message",children:i}),Object(l.jsx)("button",{className:"btn btn-block btn-dark",onClick:function(e){e.preventDefault();var t=document.getElementById("number-input"),i=t.value;i=i.split("").filter((function(e){return" "!==e})).slice(1,i.length-1).join(""),console.log(i),""===t.value?s("Please Enter a Valid Number"):!U.a.isMobilePhone(i)||i.length<10?s("Invalid Mobile Number"):s("User Does not Exist")},style:{width:"auto",display:"flex"},children:"Get OTP"})]})]})}),Object(l.jsx)("div",{className:"wallpaper-image",children:Object(l.jsx)("h1",{children:"SkyHype"})})]})},Q=(i(390),i(391),function(){return Object(l.jsxs)("div",{className:"parallax-section",id:"parallax-section",style:{position:"absolute"},children:[Object(l.jsx)("div",{id:"parallax-part-1"}),Object(l.jsx)("div",{id:"parallax-part-2"}),Object(l.jsx)("div",{id:"parallax-part-3"})]})}),V=(i(144),function(e){var t=e.isOpen,i=e.handleToggle;return t?Object(l.jsx)("div",{className:"hamburger-menu",children:Object(l.jsxs)("div",{className:"nav-links",children:[Object(l.jsx)("i",{className:"fas fa-times",id:"close-menu",onClick:i}),Object(l.jsx)("a",{href:"https://skyhype.in/wordpress/index.php/blog/",target:"_blank",children:Object(l.jsx)("div",{children:"Blog"})}),Object(l.jsx)(P.b,{to:"/login",children:Object(l.jsx)("div",{children:"Login"})}),Object(l.jsx)(P.b,{to:"/signup",children:Object(l.jsx)("div",{children:"Signup"})})]})}):Object(l.jsx)("div",{onClick:i,className:"hamburger-menu",id:"open-menu",children:Object(l.jsx)("i",{className:"fas fa-bars"})})}),q=function(e){var t=Object(n.useState)(!1),i=Object(h.a)(t,2),s=i[0],c=i[1];return Object(l.jsxs)("div",{className:"landing-navbar",id:"landing-navbar",children:[Object(l.jsx)("h1",{children:"SkyHype"}),Object(l.jsxs)("div",{className:"links",children:[Object(l.jsx)("div",{id:"blog-link",children:Object(l.jsx)("a",{href:"https://skyhype.in/wordpress/index.php/blog/",target:"_blank",children:"Blog"})}),Object(l.jsx)(P.b,{to:"/login",children:Object(l.jsx)("div",{children:"Login"})}),Object(l.jsx)(P.b,{to:"/signup",children:Object(l.jsx)("div",{id:"signup-button",children:"Signup"})})]}),Object(l.jsx)(V,{isOpen:s,handleToggle:function(){c(!s)}})]})},W=function(){return Object(l.jsxs)("div",{className:"landing-page",children:[Object(l.jsx)(q,{}),Object(l.jsxs)("div",{id:"section-1",children:[Object(l.jsxs)("div",{className:"description",children:[Object(l.jsx)("h1",{children:"All You Need Is One Link"}),Object(l.jsx)("p",{children:"The one link that captures all. Your one link to infinite possibilities. A free and safe way to market your content for all to see. "}),Object(l.jsx)(P.b,{to:"signup",children:Object(l.jsx)("button",{className:"btn btn-dark",children:"Join the Waitlist"})})]}),Object(l.jsx)("div",{className:"media-section"})]}),Object(l.jsxs)("div",{id:"section-2",children:[Object(l.jsxs)("div",{className:"description",children:[Object(l.jsx)("h1",{children:"YOUR PERSONAL BILLBOARD SPOTLIGHT"}),Object(l.jsx)("p",{children:"Let people see your work that goes viral, your top posts in the spotlight section. Publish your brand, in an easy way to reach your audience."})]}),Object(l.jsx)("div",{className:"media-section"})]}),Object(l.jsxs)("div",{id:"section-3",children:[Object(l.jsxs)("div",{className:"description",children:[Object(l.jsx)("h1",{children:"CUSTOMIZE YOUR BACKGROUND"}),Object(l.jsx)("p",{children:" You are in control of your profile. Add background images of your choice so it looks more like you. Personalize your profile and choose what you want to be "})]}),Object(l.jsx)("div",{className:"media-section"})]}),Object(l.jsx)("div",{className:"cool-section",style:{height:"100vh",width:"100vw",overflowY:"scroll",marginBottom:"200vh"},children:Object(l.jsx)(Q,{})}),Object(l.jsx)("br",{}),Object(l.jsxs)("section",{id:"section-4",children:[Object(l.jsxs)("div",{className:"description",children:[Object(l.jsx)("h1",{children:"THUMBNAILS THAT MAKE YOU LOOK GRAND"}),Object(l.jsx)("p",{children:"Forget one bar that just has a title. Create impactful updates, with your content on the forefront. Showcase content from all your social media platforms "})]}),Object(l.jsx)("div",{className:"media-section"})]}),Object(l.jsxs)("section",{id:"section-5",children:[Object(l.jsxs)("div",{className:"description",children:[Object(l.jsx)("h1",{children:"SHOW OFF YOUR SQUAD"}),Object(l.jsx)("p",{children:"Join and connect with creators you like. Share the space, collaborate, amplify and diversify your content. Invite your friends and grow together."})]}),Object(l.jsx)("div",{className:"media-section"})]}),Object(l.jsxs)("section",{id:"section-6",children:[Object(l.jsxs)("div",{className:"description",style:{zIndex:"5"},children:[Object(l.jsx)("h1",{children:"And Much More...."}),Object(l.jsx)(P.b,{to:"signup",children:Object(l.jsx)("button",{className:"btn btn-dark",children:"Get Started"})})]}),Object(l.jsx)("div",{className:"media-section"})]}),Object(l.jsxs)("footer",{children:[Object(l.jsxs)("div",{id:"main-footer",children:[Object(l.jsx)("h1",{style:{fontWeight:"700",cursor:"pointer"},children:"SkyHype"}),Object(l.jsx)("h3",{children:"Contact Us"}),Object(l.jsxs)("div",{id:"legal-section",children:[Object(l.jsx)("h5",{style:{width:"100%",textAlign:"center"},children:"LEGAL"}),Object(l.jsx)("div",{children:"Privacy"}),Object(l.jsx)("div",{children:"Terms"}),Object(l.jsx)("div",{children:"Cookie Policy"})]}),Object(l.jsxs)("div",{id:"company-info",children:[Object(l.jsx)("div",{children:"About Us"}),Object(l.jsx)("div",{children:"Blog"}),Object(l.jsx)("div",{children:"Price"})]}),Object(l.jsxs)("div",{id:"social-section",children:[Object(l.jsx)("h3",{children:"Social"}),Object(l.jsxs)("div",{className:"social-media-links",children:[Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://twitter.com/Skyhypesocial_?s=09",children:Object(l.jsx)("i",{className:"fa-brands fa-twitter"})})}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://www.facebook.com/thetracesocial/?ti=as",children:Object(l.jsx)("i",{className:"fa-brands fa-facebook-f"})})}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://skyhype.in/skyhype/home.php#",children:Object(l.jsx)("i",{className:"fa-brands fa-youtube"})})}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://instagram.com/skyhypesocial?utm_medium=copy_link",children:Object(l.jsx)("i",{className:"fa-brands fa-instagram"})})}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://www.linkedin.com/company/skyhype/",children:Object(l.jsx)("i",{className:"fa-brands fa-linkedin-in"})})})]})]})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{id:"download-section",children:[Object(l.jsx)("h1",{children:"Launching soon on"}),Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"Play Store"})}),Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAA7CAYAAACzM4J9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAxNToxMjowMSAxNDo0NDo0NpFF5j8AAA4MSURBVHhe7ZwJsI7VH8ePpZQUJUupLC032aPSylgiS3QjpmiQqaRodFM0DWUrDWXLOhRTjBrlmkFoIUSpKNpoIeneSki3EnX+v8/vPuf9P+/7PniXq3Tv8535eZ/nPOc5z1l+57ce14QIESJEiBAhQoQIEaKIoZj361DCoxCFF395pHAMUFaor1CmUCUKQhRa5AotEJoktI+CMkLZQjakIkWseRnEfZZQH6EQRQsZQnmogByhUOwXTeTCAIiDEEUUxb3fEEUUx5QBSpYsaVq3bm1q1arllRyfOOWUU0zlypW9u9Rw4oknmhIljo0HfdJJJ5lzzz3Xuyt4xFqHBUI33HCDfe+99+yff/5p77nnnsA6idDAgQPtvHnz7PPPP2+feuopW7NmzcB66VC/fv3syy+/HPgsUVqwYIG9++67A5+lQieccIIVhtLrW2+91b7++utxdQqCjokEuOmmm4wsmmnUqJHeb9y4UX9TwY033mi++uorM2HCBFO+fHkjCxW1Wy+88EJz9tlne3fGlC5dWn+LFy+uEgiwM9lFxYoV05165plnmiuvvDKyY0uVKmXKlMEbzgd1hNEi7wPeR5JVqFDBK8kHdfnmaaedFvl2LC6++GL9pgPt8u0GDRpo/2NBmy+99JLp1auX1nXfKFeuXNRYAc9i+5QsAjkjVZJO2s8//9w6vPnmmxFOToXeeOONqJ31wQcfqFSgzRdffNG+++67dsOGDVpHFt2+9tprVhbXduvWTb9NGdLjueeeszJZdtOmTXb16tV2586dWkabDzzwgF28eLFeX3311fadd96xb731lr5/wQUXaPnIkSPtsmXL7CeffGI7d+6sZcLo2p+lS5fab7/91t57771a7qhs2bIqGd5++2370Ucf2dtuu03LBw8erH2mL7t27bItW7aMeu/OO++0+/bt029df/31tlOnTto+Y6PffJd69JU5mD9/vn366ad1rP52EqEClwBdu3Y1F110kV7v2bPHDBs2zPz1VyTymBLYzQ4yASoB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",alt:"Apple Store"})})]})]})]})};i(392);var K=function(){return Object(l.jsxs)("div",{className:"waiting",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("h1",{children:"Skyhype"})}),Object(l.jsxs)("div",{className:"waiting__page",children:[Object(l.jsx)("div",{className:"waiting__list",children:Object(l.jsxs)("div",{className:"waiting__list__text",children:[Object(l.jsx)("img",{src:"data:image/png;base64,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"}),Object(l.jsx)("h4",{children:"Application Submitted"}),Object(l.jsxs)("h5",{children:["follow us on Instagram ",Object(l.jsx)("a",{href:"https://instagram.com/skyhypesocial?utm_medium=copy_link",children:"@skyhype"})," to verify your account"]})]})}),Object(l.jsx)("div",{className:"waiting__image",children:Object(l.jsx)("div",{className:"waiting__list__image"})})]})]})};var X=function(){return Object(l.jsx)(P.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(D.c,{children:[Object(l.jsx)(D.a,{exact:!0,path:"/",children:Object(l.jsx)(W,{})}),Object(l.jsx)(D.a,{exact:!0,path:"/login",children:Object(l.jsx)(R,{})}),Object(l.jsx)(D.a,{exact:!0,path:"/signup",children:Object(l.jsx)(E,{})}),Object(l.jsx)(D.a,{exact:!0,path:"/waiting-page",children:Object(l.jsx)(K,{})}),Object(l.jsx)(D.a,{path:"*",component:r})]})})})},J=function(e){e&&e instanceof Function&&i.e(4).then(i.bind(null,437)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;i(e),n(e),s(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(P.a,{children:Object(l.jsx)(X,{})})}),document.getElementById("root")),J()}},[[393,1,2]]]);
//# sourceMappingURL=main.ce74f24a.chunk.js.map