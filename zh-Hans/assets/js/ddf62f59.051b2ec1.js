"use strict";(self.webpackChunkaxing_desk=self.webpackChunkaxing_desk||[]).push([[877],{8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var i=s(6540);const t={},l=i.createContext(t);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:n},e.children)}},8579:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"Installation/btpanel","title":"\u5b9d\u5854\u9762\u677f","description":"\u4f7f\u7528\u5b9d\u5854\u9762\u677f\u90e8\u7f72","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/Installation/btpanel.md","sourceDirName":"Installation","slug":"/Installation/btpanel","permalink":"/zh-Hans/Installation/btpanel","draft":false,"unlisted":false,"editUrl":"https://github.com/aingdesk/docs/tree/main/docs/Installation/btpanel.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"description":"\u4f7f\u7528\u5b9d\u5854\u9762\u677f\u90e8\u7f72"},"sidebar":"tutorialSidebar","previous":{"title":"Docker","permalink":"/zh-Hans/Installation/docker"},"next":{"title":"Guide","permalink":"/zh-Hans/category/guide"}}');var t=s(4848),l=s(8453);const r={sidebar_position:4,description:"\u4f7f\u7528\u5b9d\u5854\u9762\u677f\u90e8\u7f72"},d="\u5b9d\u5854\u9762\u677f",c={},o=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"\u90e8\u7f72 AingDesk",id:"\u90e8\u7f72-aingdesk",level:3},{value:"\u8bbf\u95ee AingDesk",id:"\u8bbf\u95ee-aingdesk",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u5b9d\u5854\u9762\u677f",children:"\u5b9d\u5854\u9762\u677f"})}),"\n",(0,t.jsx)(n.h3,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5b89\u88c5 AingDesk \u4e4b\u524d, \u8bf7\u786e\u4fdd\u4f60\u7684\u673a\u5668\u5df2\u6ee1\u8db3\u6700\u4f4e\u5b89\u88c5\u8981\u6c42\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CPU >= 1 Core"}),"\n",(0,t.jsx)(n.li,{children:"RAM >= 2 GiB"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u64cd\u4f5c\u7cfb\u7edf"}),(0,t.jsx)(n.th,{children:"\u8f6f\u4ef6"}),(0,t.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Linux platforms"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("p",{children:"\u5b9d\u5854\u9762\u677f\u6b63\u5f0f\u7248 9.2.0 \u53ca\u4ee5\u4e0a\u7248\u672c"})}),(0,t.jsxs)(n.td,{children:["\u8bf7\u53c2\u9605",(0,t.jsx)(n.a,{href:"https://www.bt.cn/new/download.html",children:"\u5b89\u88c5\u5b9d\u5854\u9762\u677f"}),"  \u4ee5\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002"]})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"\u90e8\u7f72-aingdesk",children:"\u90e8\u7f72 AingDesk"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u767b\u5f55\u5b9d\u5854\u9762\u677f\uff0c\u5728\u83dc\u5355\u680f\u4e2d\u70b9\u51fb Docker\uff0c\u6839\u636e\u63d0\u793a\u5b89\u88c5 Docker \u548c Docker Compose \u670d\u52a1\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u5728",(0,t.jsx)(n.code,{children:"Docker-\u5e94\u7528\u5546\u5e97"}),"\u4e2d\u627e\u5230 ",(0,t.jsx)(n.code,{children:"AingDesk"}),"\uff0c\u70b9\u51fb",(0,t.jsx)(n.code,{children:"\u5b89\u88c5"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u8bbe\u7f6e\u57df\u540d\u7b49\u57fa\u672c\u4fe1\u606f\uff0c\u70b9\u51fb",(0,t.jsx)(n.code,{children:"\u786e\u5b9a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u540d\u79f0\uff1a\u5e94\u7528\u540d\u79f0\uff0c\u9ed8\u8ba4",(0,t.jsx)(n.code,{children:"AingDesk-\u968f\u673a\u5b57\u7b26"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u7248\u672c\u9009\u62e9\uff1a\u9ed8\u8ba4",(0,t.jsx)(n.code,{children:"latest"})]}),"\n",(0,t.jsx)(n.li,{children:"\u57df\u540d\uff1a\u5982\u9700\u901a\u8fc7\u57df\u540d\u76f4\u63a5\u8bbf\u95ee\uff0c\u8bf7\u5728\u6b64\u914d\u7f6e\u57df\u540d\u5e76\u5c06\u57df\u540d\u89e3\u6790\u5230\u670d\u52a1\u5668"}),"\n",(0,t.jsxs)(n.li,{children:["\u5141\u8bb8\u5916\u90e8\u8bbf\u95ee\uff1a\u5982\u4f60\u9700\u901a\u8fc7",(0,t.jsx)(n.code,{children:"IP+Port"}),"\u76f4\u63a5\u8bbf\u95ee\uff0c\u8bf7\u52fe\u9009\uff0c\u5982\u4f60\u5df2\u7ecf\u8bbe\u7f6e\u4e86\u57df\u540d\uff0c\u8bf7\u4e0d\u8981\u52fe\u9009\u6b64\u5904"]}),"\n",(0,t.jsxs)(n.li,{children:["\u7aef\u53e3\uff1a\u9ed8\u8ba4",(0,t.jsx)(n.code,{children:"7071"}),"\uff0c\u53ef\u81ea\u884c\u4fee\u6539"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u63d0\u4ea4\u540e\u9762\u677f\u4f1a\u81ea\u52a8\u8fdb\u884c\u5e94\u7528\u521d\u59cb\u5316\uff0c\u5927\u6982\u9700\u8981",(0,t.jsx)(n.code,{children:"1-3"}),"\u5206\u949f\uff0c\u521d\u59cb\u5316\u5b8c\u6210\u540e\u5373\u53ef\u8bbf\u95ee\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u8bbf\u95ee-aingdesk",children:"\u8bbf\u95ee AingDesk"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u4f7f\u7528\u57df\u540d\nhttp://yourdomain/\n\n# \u4f7f\u7528IP+\u7aef\u53e3\n\nhttp://your_server_ip:7071/\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}}}]);