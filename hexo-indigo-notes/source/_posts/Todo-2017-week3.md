title: Todo-2017.10-week3
date: 2020-01-02 00:00:00
tags: [plan, todo, 2017, 2017.10 week3]
categories: [plan, todo, 2017, 2017.10]
---
+ a-tag-collection
    +   编写一个简单的firefox demo,实现一下功能：
        -   当在任意a标签上右击鼠标时，弹出菜单中有一个我加入的"添加链接信息到数据库"；
        -   为该a标签绑定一个click事件
        -   弹出一个表单，有如下元件：
    
            >　text-input: innerText, href, hostPageUri(宿主页面);
        
            >　button-like: drop, reset, submit;
    +   将该多个a标签的以上text-input中的value存入数据库。
    +   将上一条中存入数据库的a标签信息，简洁的渲染到页面上，简单的样式还是要有的。

+   为我的blog以优雅的形式添加一个 "Getting Things Done" 单页;
+   **DONE** 部署在github,码云，码市的我的博客镜像;
　　    +   **DONE** 部署本地的三镜像同步;
　　    +   用nginx反向代理，原因:
　　        -   不用git仓库提供的CNAME　api是因为gitee没有提供该api接口；
　　        -   CNAME会被更新时会被覆盖，不便于同时使用同一版本master一键同步。
　　        到这三个镜像,配置好的可访问域名为:
　　        -   tee.doc2git.com tee.icccc.cc,
　　        -   co.doc2git.com co.icccc.cc,
　　        -   hub.doc2git.com hub.icccc.cc;
+   **　用vue开发firefox插件，这是一种尝试.**
        +   jquery操作dom那么方便，为什么还用vue?
            +   jquery作为操作dom的最佳实践，我并不排斥;
            +   我同时兼有:
                -   自己开发插件的诉求;
                -   加强vue工程能力的诉求;
        +   尝试最简单demo预计流程：
            -   尝试用vue按类名或者标签名获取dom元素
            -   如果上一步在实践中不好用,就用原生js获取dom元素,并为该元素添加唯一的不容易重名的id;
            -   编写vue实例，将vue实例挂载到上述有id的元素上;
        +   尝试让这种依赖搭配的开发更加优雅，更具通用性；
    