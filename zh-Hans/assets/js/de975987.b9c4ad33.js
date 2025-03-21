"use strict";(self.webpackChunkaxing_desk=self.webpackChunkaxing_desk||[]).push([[979],{6019:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>k,frontMatter:()=>a,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"Installation/docker","title":"Docker","description":"\u4f7f\u7528 Docker \u90e8\u7f72","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/Installation/docker.md","sourceDirName":"Installation","slug":"/Installation/docker","permalink":"/zh-Hans/Installation/docker","draft":false,"unlisted":false,"editUrl":"https://github.com/aingdesk/docs/tree/main/docs/Installation/docker.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"description":"\u4f7f\u7528 Docker \u90e8\u7f72"},"sidebar":"tutorialSidebar","previous":{"title":"macOS","permalink":"/zh-Hans/Installation/macos"},"next":{"title":"\u5b9d\u5854\u9762\u677f","permalink":"/zh-Hans/Installation/btpanel"}}');var r=o(4848),d=o(8453);const a={sidebar_position:3,description:"\u4f7f\u7528 Docker \u90e8\u7f72"},c="Docker",t={},i=[{value:"Docker Compose",id:"docker-compose",level:2},{value:"Docker Run",id:"docker-run",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"docker",children:"Docker"})}),"\n",(0,r.jsx)(n.h2,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u590d\u5236\u4e0b\u65b9\u7684\u547d\u4ee4\uff0c\u4f7f\u7528docker-compose\u90e8\u7f72docker\u955c\u50cf"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p aingdesk\ncd aingdesk\nwget https://cnb.cool/aingdesk/AingDesk/-/git/raw/server/docker-compose.yml\n# \u65b0\u7248docker\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\ndocker compose up -d\n# \u65e7\u7248docker\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\ndocker-compose up -d\n"})}),"\n",(0,r.jsx)(n.h2,{id:"docker-run",children:"Docker Run"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u590d\u5236\u4e0b\u65b9\u7684\u547d\u4ee4\uff0c\u6620\u5c04\u6307\u5b9a\u7aef\u53e3\u90e8\u7f72docker\u955c\u50cf"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -d \\\n  --name node \\\n  -v $(pwd)/data:/aingdesk/data \\\n  -v $(pwd)/uploads:/aingdesk/uploads \\\n  -v $(pwd)/logs:/aingdesk/logs \\\n  -p 7071:7071 \\\n  -w /aingdesk \\\n  aingdesk/aingdesk\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u56fd\u5185\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u817e\u8baf\u4e91\u539f\u751f\u6784\u5efa\u955c\u50cf\uff0c\u90e8\u7f72docker\u955c\u50cf"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -d \\\n  --name node \\\n  -v $(pwd)/data:/aingdesk/data \\\n  -v $(pwd)/uploads:/aingdesk/uploads \\\n  -v $(pwd)/logs:/aingdesk/logs \\\n  -p 7071:7071 \\\n  -w /aingdesk \\\n  docker.cnb.cool/aingdesk/aingdesk\n"})})]})}function k(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>c});var s=o(6540);const r={},d=s.createContext(r);function a(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);