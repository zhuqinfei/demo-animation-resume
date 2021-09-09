var result = `/* 
 * 面试官你好，我是XXX
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */

*{transition:all 1s}
html{
  background: rgb(222,222,222);
  font-size:16px;
}
#code{
  border:1px solid red;
  padding:16px;
}

/*我需要一点代码高亮*/

.token.property{
    color:#905;
}
.token.selector{
    color:#690;
}
.token.function{
    color:#DD4A68;
}

/*加点3D效果*/
#code{
    transform:rotate(360deg);
}

/*不玩了，我来介绍一下我自己吧*/
/*我需要一张白纸*/


`
var n = 0
var id = setInterval(() => {
    n = n + 1
    code.innerHTML = result.substring(0, n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css);
    styleTag.innerHTML = result.substring(0, n)
    console.log('1')
    if (n >= result.length) {
        window.clearInterval(id)
        fn2()
        fn3(result)  //将result结果传进来
    }
}, 0)

function fn2() {
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
}

function fn3(preResult) { //将result结果将变成之前的结果传入函数
    var result = `
#paper{
   width:100px;height:100px;
   background:red;
}
  `
    var n = 0
    var id = setInterval(() => {
        n = n + 1
        code.innerHTML =preResult + result.substring(0, n)
        code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css);
        styleTag.innerHTML = preResult+result.substring(0, n)
        if (n >= result.length) {
            window.clearInterval(id)
        }
    }, 0)
}