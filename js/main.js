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
var result2 = `
#paper{
   width:100px;height:100px;
   background:red;
}
  `
//这里用prefix是作为一个前缀，第一次传空字符串，第二调用起到承接之前结果的作用（小技巧）
function writeCode(prefix,code,fn) {
    let n = 0
    let id = setInterval(() => {
        n = n + 1
        domCode=document.querySelector("#code")
        domCode.innerHTML = code.substring(0, n)
        domCode.innerHTML = Prism.highlight(prefix+domCode.innerHTML, Prism.languages.css);
        styleTag.innerHTML = prefix+code.substring(0, n)
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 30)
}

writeCode('',result,()=>{
    //writeCode是异步操作，所以要callback拿到结果
    console.log('提醒，writeCode结束了')
    creatPaper(()=>{
        //creatPaper是同步操作，也可以添加callback操作
       console.log('提醒，creatPape结束了')
         writeCode(result,result2,()=>{})
    })
})

function creatPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
    fn.call()
}

