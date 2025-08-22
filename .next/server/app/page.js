(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9488:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>r.a,__next_app__:()=>m,originalPathname:()=>x,pages:()=>p,routeModule:()=>h,tree:()=>d});var i=s(3137),a=s(4647),n=s(4183),r=s.n(n),o=s(1775),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=i.AppPageRouteModule,d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,7219)),"/home/project/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,9958)),"/home/project/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,1918,23)),"next/dist/client/components/not-found-error"]}],p=["/home/project/app/page.tsx"],x="/page",m={require:s,loadChunk:()=>Promise.resolve()},h=new c({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5469:(e,t,s)=>{Promise.resolve().then(s.bind(s,7992))},7992:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var i=s(80),a=s(8874),n=s.n(a),r=s(1014),o=s.n(r),l=s(6932),c=s.n(l),d=s(9885),p=s(8320),x=s.n(p);let m=()=>(0,i.jsxs)("div",{className:"w-[370px] h-[500px] md:w-[740px]",children:[i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700&display=swap');

          .page {
            border-radius: 8px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          }

          .page-content {
            width: 100%;
            height: 100%;
          }

          .cover {
            background: linear-gradient(135deg, #3399FF 0%, #66b2ff 50%, #99ccff 100%);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 40px 30px;
            text-align: center;
          }

          .cover::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
              linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%);
            pointer-events: none;
          }

          .cover::after {
            content: '';
            position: absolute;
            top: 8px;
            left: 8px;
            right: 8px;
            bottom: 8px;
            border: 2px solid rgba(255,255,255,0.2);
            border-radius: 6px;
            pointer-events: none;
          }

          .notebook-page {
            background: linear-gradient(to bottom, #ffffff 0%, #fafafa 100%);
            position: relative;
            padding: 40px 20px 40px 60px;
          }

          .notebook-page::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
              repeating-linear-gradient(
                to bottom,
                transparent 0px,
                transparent 28px,
                #e5e7eb 28px,
                #e5e7eb 29px
              );
            pointer-events: none;
            z-index: 0;
          }

          .notebook-content {
            position: relative;
            z-index: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding-top: 30px;
          }

          .page-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 1rem;
            line-height: 29px;
          }

          .page-description {
            font-size: 1rem;
            color: #374151;
            line-height: 29px;
            font-weight: 400;
          }
        `}}),(0,i.jsxs)(x(),{width:370,height:500,size:"fixed",minWidth:0,maxWidth:0,minHeight:0,maxHeight:0,drawShadow:!0,flippingTime:1e3,usePortrait:!0,startZIndex:0,autoSize:!0,maxShadowOpacity:.5,showCover:!0,mobileScrollSupport:!0,clickEventForward:!0,useMouseEvents:!0,swipeDistance:30,showPageCorners:!0,disableFlipByClick:!1,className:"",style:{},startPage:0,children:[i.jsx("div",{className:"page",children:i.jsx("div",{className:"page-content cover",children:(0,i.jsxs)("div",{className:"cover-content",children:[(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[i.jsx("img",{src:"https://assets.vercel.com/image/upload/v1662130559/front/bolt/bolt-new-logo.svg",alt:"bolt.new Logo",className:"w-32 h-auto mb-6 filter brightness-0 invert"}),i.jsx("h1",{className:"text-4xl font-bold mb-2",style:{fontFamily:"Bricolage Grotesque, sans-serif"},children:"bolt.tips"}),i.jsx("p",{className:`text-lg ${c().className}`,style:{fontStyle:"italic",opacity:.9},children:"Code instantly. Powered by AI."})]}),i.jsx("div",{className:"text-center",children:i.jsx("p",{className:"text-sm opacity-70",children:"Made with ❤️ and AI"})})]})})}),[{id:"001",title:"001",description:"Type bolt.new in your browser to instantly open a coding workspace. No installation required."},{id:"002",title:"002",description:"Describe what you want clearly. The more context you provide, the better the AI can generate accurate code."},{id:"003",title:"003",description:"bolt.new is perfect for prototyping. Test ideas quickly without worrying about setup overhead."},{id:"004",title:"004",description:"Ask the AI to explain snippets of code. bolt.new isn’t just a tool for building—it’s also a great way to learn."},{id:"005",title:"005",description:"Share your workspace link with teammates. You can brainstorm and fix issues together in real time."},{id:"006",title:"006",description:"Since it’s made by Vercel, bolt.new integrates seamlessly with deployment workflows. Take projects from idea to live app quickly."}].map(e=>i.jsx("div",{className:"page",children:i.jsx("div",{className:"page-content notebook-page",children:(0,i.jsxs)("div",{className:`notebook-content ${o().className}`,children:[i.jsx("h2",{className:"page-title",children:e.title}),i.jsx("p",{className:"page-description",children:e.description})]})})},e.id)),i.jsx("div",{className:"page",children:i.jsx("div",{className:"page-content cover",children:(0,i.jsxs)("div",{className:"cover-content",children:[(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center flex-1",children:[i.jsx("h1",{className:"text-3xl font-bold mb-4",style:{fontFamily:"Bricolage Grotesque, sans-serif"},children:"Thanks for Reading"}),(0,i.jsxs)("p",{className:`text-lg ${c().className}`,style:{fontStyle:"italic",opacity:.9},children:["Start building at ",i.jsx("strong",{children:"bolt.new"})]})]}),i.jsx("div",{className:"text-center",children:i.jsx("p",{className:"text-sm opacity-70",children:"Happy coding! \uD83D\uDE80"})})]})})})]})]});var h=s(509);function g({children:e}){let t=(0,d.useRef)(null);return(0,i.jsxs)("div",{ref:t,className:"min-h-screen bg-[#0066FF] relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 w-full h-full",children:i.jsx(h.bL,{className:"w-full h-full",colors:["#0066FF","#3399FF","#6699FF","#99BFFF","#CCE0FF"],speed:.055})}),e]})}function u(){return i.jsx(g,{children:(0,i.jsxs)("div",{className:"relative w-full h-screen",children:[i.jsx("main",{className:"absolute bottom-8 left-8 z-20 max-w-lg",children:(0,i.jsxs)("div",{className:"text-left",style:{textShadow:"0 2px 4px rgba(0, 0, 0, 0.2)"},children:[(0,i.jsxs)("div",{className:"inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative",style:{filter:"url(#glass-effect)"},children:[i.jsx("div",{className:"absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"}),i.jsx("span",{className:"text-white/90 text-xs font-light relative z-10",children:"✨ follow @iva2xn on X"})]}),(0,i.jsxs)("h1",{className:"text-5xl md:text-6xl tracking-tight font-light text-white mb-4 flex flex-wrap items-baseline",children:[i.jsx("span",{className:`${n().className} font-medium italic`,style:{fontSize:"1.5em",lineHeight:"1"},children:"@ivann"}),i.jsx("span",{className:"ml-2",children:"Built"}),i.jsx("br",{}),i.jsx("span",{className:"font-light tracking-tight text-white mt-1 block",children:"These designs"})]})]})}),i.jsx("div",{className:"absolute inset-0 flex items-center justify-center pb-60",children:i.jsx(m,{})})]})})}},7219:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var i=s(8144),a=s(7536);let n=(0,a.createProxy)(String.raw`/home/project/components/hero-sky.tsx`),{__esModule:r,$$typeof:o}=n,l=n.default;function c(){return i.jsx("main",{className:"w-full min-h-screen",children:i.jsx(l,{})})}}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),i=t.X(0,[814,989,277],()=>s(9488));module.exports=i})();