import { Chapter, Difficulty } from './types';

export const INTERNET_DEV_BASE_CHAPTERS: Chapter[] = [
  {
    id: "html-basics",
    number: 1,
    title: "第一章 HTML5基础",
    difficulty: Difficulty.Easy,
    summary: "掌握HTML5的基本结构、常用标签、表单元素及属性，理解语义化标签的重要性。",
    keyPoints: [
      {
        title: "HTML5文档结构",
        sections: [
          {
            subtitle: "基本结构",
            text: "HTML5文档以<!DOCTYPE html>声明开始，包含<html>根元素，内部有<head>和<body>两部分。"
          },
          {
            subtitle: "语义化标签",
            text: "HTML5引入了<header>、<nav>、<section>、<article>、<footer>等语义化标签，提高代码可读性和SEO优化。"
          }
        ]
      },
      {
        title: "常用标签与属性",
        important: true,
        sections: [
          {
            text: "核心标签包括：",
            list: [
              "文本标签：<h1>-<h6>、<p>、<span>、<strong>、<em>",
              "列表标签：<ul>、<ol>、<li>、<dl>、<dt>、<dd>",
              "表格标签：<table>、<tr>、<td>、<th>、<caption>",
              "多媒体标签：<img>、<audio>、<video>、<canvas>"
            ]
          }
        ]
      },
      {
        title: "表单元素",
        sections: [
          {
            subtitle: "表单结构",
            text: "使用<form>标签创建表单，包含<input>、<textarea>、<select>、<button>等元素。"
          },
          {
            subtitle: "输入类型",
            text: "HTML5新增了email、url、number、date、color等输入类型，提供更好的用户体验和验证功能。"
          }
        ]
      }
    ],
    examTips: [
      "选择题：HTML5的DOCTYPE声明是<!DOCTYPE html>。",
      "编程题：能够使用语义化标签构建标准的HTML5页面结构。"
    ]
  },
  {
    id: "css-basics",
    number: 2,
    title: "第二章 CSS基础",
    difficulty: Difficulty.Medium,
    summary: "掌握CSS样式表、选择器、取值与单位、常用样式及定位布局技术。",
    keyPoints: [
      {
        title: "CSS样式表",
        sections: [
          {
            subtitle: "引入方式",
            text: "内联样式、内部样式表、外部样式表三种引入方式，推荐使用外部样式表实现样式与结构分离。"
          },
          {
            subtitle: "选择器优先级",
            text: "!important > 内联样式 > ID选择器 > 类选择器 > 标签选择器 > 通配符选择器。"
          }
        ]
      },
      {
        title: "选择器与取值",
        important: true,
        sections: [
          {
            text: "常用选择器类型：",
            list: [
              "基本选择器：标签、类、ID、通配符",
              "组合选择器：后代、子代、相邻兄弟、通用兄弟",
              "伪类选择器：:hover、:active、:focus、:nth-child()",
              "伪元素选择器：::before、::after、::first-line"
            ]
          }
        ]
      },
      {
        title: "布局与定位",
        sections: [
          {
            subtitle: "盒模型",
            text: "标准盒模型：content + padding + border + margin。box-sizing属性可切换盒模型计算方式。"
          },
          {
            subtitle: "定位方式",
            text: "static（默认）、relative（相对定位）、absolute（绝对定位）、fixed（固定定位）、sticky（粘性定位）。"
          }
        ]
      }
    ],
    examTips: [
      "选择题：CSS选择器优先级计算。",
      "编程题：使用浮动或Flexbox实现页面布局。"
    ]
  },
  {
    id: "javascript-basics",
    number: 3,
    title: "第三章 JavaScript基础",
    difficulty: Difficulty.Medium,
    summary: "掌握JavaScript基本语法规则、常用数据类型、函数与控制流语句，理解DOM文档对象模型。",
    keyPoints: [
      {
        title: "基本语法与数据类型",
        sections: [
          {
            subtitle: "变量声明",
            text: "var（函数作用域）、let（块级作用域）、const（常量声明）三种变量声明方式。"
          },
          {
            subtitle: "数据类型",
            text: "基本类型：number、string、boolean、null、undefined、symbol、bigint。引用类型：object。"
          }
        ]
      },
      {
        title: "函数与控制流",
        important: true,
        sections: [
          {
            text: "核心概念：",
            list: [
              "函数定义：函数声明、函数表达式、箭头函数",
              "控制流：if/else、switch、for、while、do/while循环",
              "数组方法：push/pop、shift/unshift、slice/splice、map/filter/reduce"
            ]
          }
        ]
      },
      {
        title: "DOM操作",
        sections: [
          {
            subtitle: "节点操作",
            text: "document.getElementById()、document.querySelector()、element.innerHTML、element.textContent等。"
          },
          {
            subtitle: "事件处理",
            text: "addEventListener()方法注册事件，常见事件：click、mouseover、keydown、submit等。"
          }
        ]
      }
    ],
    examTips: [
      "选择题：JavaScript数据类型和类型转换。",
      "编程题：DOM操作实现动态页面效果。"
    ]
  },
  {
    id: "ajax-json",
    number: 4,
    title: "第四章 AJAX与JSON",
    difficulty: Difficulty.Hard,
    summary: "理解AJAX异步通信机制，掌握JSON数据格式，能够使用XMLHttpRequest和Fetch API进行数据交互。",
    keyPoints: [
      {
        title: "AJAX原理",
        sections: [
          {
            subtitle: "异步通信",
            text: "AJAX（Asynchronous JavaScript and XML）允许网页在不重新加载的情况下与服务器交换数据。"
          },
          {
            subtitle: "XMLHttpRequest",
            text: "创建XHR对象，设置请求方法、URL，监听readystatechange事件，处理服务器响应。"
          }
        ]
      },
      {
        title: "JSON数据格式",
        important: true,
        sections: [
          {
            text: "JSON（JavaScript Object Notation）轻量级数据交换格式：",
            list: [
              "基本结构：对象{}和数组[]",
              "数据类型：字符串、数字、布尔值、null、对象、数组",
              "方法：JSON.stringify()将对象转换为JSON字符串，JSON.parse()将JSON字符串解析为对象"
            ]
          }
        ]
      },
      {
        title: "Fetch API",
        sections: [
          {
            subtitle: "现代替代方案",
            text: "Fetch API提供了更简洁的接口，基于Promise，支持async/await语法。"
          },
          {
            subtitle: "基本用法",
            text: "fetch(url).then(response => response.json()).then(data => console.log(data))。"
          }
        ]
      }
    ],
    examTips: [
      "选择题：AJAX的工作原理和同源策略。",
      "编程题：使用Fetch API获取并显示服务器数据。"
    ]
  },
  {
    id: "jquery",
    number: 5,
    title: "第五章 jQuery",
    difficulty: Difficulty.Medium,
    summary: "掌握jQuery选择器、常用方法、事件处理及Ajax功能，理解链式调用和插件机制。",
    keyPoints: [
      {
        title: "jQuery基础",
        sections: [
          {
            subtitle: "选择器",
            text: "$()函数接受CSS选择器，返回jQuery对象，支持链式调用。常用选择器：ID(#)、类(.)、标签等。"
          },
          {
            subtitle: "DOM操作",
            text: "html()、text()、val()获取/设置内容，addClass()、removeClass()操作类名，css()设置样式。"
          }
        ]
      },
      {
        title: "事件与动画",
        important: true,
        sections: [
          {
            text: "核心功能：",
            list: [
              "事件绑定：click()、hover()、on()方法",
              "动画效果：show()/hide()、fadeIn()/fadeOut()、slideUp()/slideDown()",
              "Ajax：$.ajax()、$.get()、$.post()方法"
            ]
          }
        ]
      },
      {
        title: "实用技巧",
        sections: [
          {
            subtitle: "链式调用",
            text: "jQuery方法返回jQuery对象，支持连续调用多个方法：$('#elem').addClass('active').show().fadeIn()。"
          },
          {
            subtitle: "插件扩展",
            text: "通过$.fn.extend()扩展jQuery功能，或使用现有插件如jQuery UI、Validation等。"
          }
        ]
      }
    ],
    examTips: [
      "选择题：jQuery选择器和常用方法。",
      "编程题：使用jQuery实现动态页面效果和Ajax数据交互。"
    ]
  },
  {
    id: "springboot",
    number: 6,
    title: "第六章 SpringBoot",
    difficulty: Difficulty.Hard,
    summary: "理解前后端分离开发方式，掌握SpringBoot注解、RESTful API设计及数据库访问技术。",
    keyPoints: [
      {
        title: "前后端分离",
        sections: [
          {
            subtitle: "开发模式",
            text: "后端负责业务逻辑和数据持久化，前端负责数据展示和交互，通过RESTful API进行数据通信。"
          },
          {
            subtitle: "RESTful API",
            text: "基于HTTP方法（GET/POST/PUT/DELETE）和URI设计接口，返回JSON/XML格式数据。"
          }
        ]
      },
      {
        title: "SpringBoot注解",
        important: true,
        sections: [
          {
            text: "核心注解：",
            list: [
              "@RestController：复合注解，包含@Controller和@ResponseBody",
              "@GetMapping/@PostMapping/@PutMapping/@DeleteMapping：HTTP方法映射",
              "@RequestMapping：通用请求映射，可指定method、path等参数"
            ]
          }
        ]
      },
      {
        title: "数据库访问",
        sections: [
          {
            subtitle: "JPA与Hibernate",
            text: "使用Spring Data JPA简化数据库操作，通过@Entity、@Repository等注解实现ORM映射。"
          },
          {
            subtitle: "静态资源",
            text: "静态资源存放在resources/static目录下，Spring Boot自动配置静态资源访问路径。"
          }
        ]
      }
    ],
    examTips: [
      "选择题：SpringBoot注解的作用和RESTful API设计原则。",
      "编程题：使用SpringBoot创建RESTful API接口。"
    ]
  }
];