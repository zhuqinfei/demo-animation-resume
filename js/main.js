var result = `/* 
 * Inspired by http://strml.net/
 * 大家好，我是猪猪
 * 9月了，好多公司都开始招聘了
 * 大家是不是都在准备简历
 * 来，让我们也开始写一份简历！
 */

/* 首先给所有元素加上过渡效果 */
*{
    transition:all 1s
}
/* 白色背景太单调了，让我们来点背景 */
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
#code{
    position:fixed;
    left:0;
    width:50%;
    height:100%
}
#paper{
    position:fixed;
    right:0;
    width:50%;
    height:100%;
    background:blue;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:16px;
}
#paper> .content{
    background:white;
    width:100%;
    height:100%;
}
`
var result2 = `
#paper{
     
}
  `

var md=`
飞天小猪
初级前端工程师，在努力学习前端中，目标资深前端工程师

技能介绍
1.熟悉CSS、JavaScript等
2.熟悉webpack等打包工具
3.熟练使用Vue.js等主流框架


#项目介绍

1. XXX轮播
2. XXX简历
3. XXX画板

链接
github
我的文章

#联系方式
QQ：1235564544
手机：1367849372

如果你喜欢这个效果，Fork我的项目，打造属于你自己的简历
`

  writeCode('',result,()=>{
    //writeCode是异步操作，所以要callback拿到结果
    console.log('提醒，writeCode结束了')
    creatPaper(()=>{
        //creatPaper是同步操作，也可以添加callback操作
       console.log('提醒，creatPape结束了')
         writeCode(result,result2,()=>{
             writeMarkdown(md, ()=>{
             })
         })
    })
})



//这里用prefix是作为一个前缀，第一次传空字符串，第二调用起到承接之前结果的作用（小技巧）
function writeCode(prefix,code,fn) {
    let domCode=document.querySelector("#code")
    let n = 0
    let id = setInterval(() => {
        n = n + 1
        domCode.innerHTML = code.substring(0, n)
        domCode.innerHTML = Prism.highlight(prefix+domCode.innerHTML, Prism.languages.css);
        styleTag.innerHTML = prefix+code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight //让滚动条自动滚到他最大的高度
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 0)
}

function creatPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content=document.createElement('pre')
    content.className='content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}

function writeMarkdown(markdown,fn){
    let domPaper=document.querySelector("#paper> .content")
    let n=0
    let id = setInterval(() => {
        n = n + 1
        domPaper.innerHTML =markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight //让滚动条自动滚到他最大的高度
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 0)
}

