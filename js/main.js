
var result=`/* 
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

`
var n=0
var id=setInterval(()=>{
  n=n+1
  code.innerHTML=result.substring(0,n)
  code.innerHTML=code.innerHTML.replace('html','<span style="color:red">html</span>')
  styleTag.innerHTML=result.substring(0,n)
  console.log('1')
  if(n>=result.length){
    window.clearInterval(id)
  }
},10)