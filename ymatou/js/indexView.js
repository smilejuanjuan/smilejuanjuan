window.$=HTMLElement.prototype.$=function(selector){
      var r=(this==window?document:this).querySelectorAll(selector);
	  return r.length==0?null:r.length==1?r[0]:r;
}
var cateBoxList=document.getElementById("cateBoxList");
var lis=cateBoxList.getElementsByTagName("li");
for (var i=0;i<lis.length;i++) {
	lis[i].addEventListener("mouseover",showCate);
	lis[i].addEventListener("mouseout",hideCate);
}
function showCate(){
	var cateBoxPanels=document.getElementsByClassName("cateBox_Panel");
	this.$(".cateBox_Panel").style.display="block";
}
function hideCate(){
	var cateBoxPanels=document.getElementsByClassName("cateBox_Panel");
		for (var i=0;i<cateBoxPanels.length;i++) {
			cateBoxPanels[i].style.display="none";
		}
}
//注册下拉菜单
var register=document.getElementsByClassName("register")[0];
var registerBox=document.getElementsByClassName("registerBox")[0];
var myPage=document.getElementsByClassName("myPage")[0];
var myPageBox=document.getElementsByClassName("myPageBox")[0];
selects(register,registerBox);
selects(myPage,myPageBox);
function selects(a,b){
	a.addEventListener("mouseover",function(){
	a.setAttribute("class","hover");
	b.style.display="block";
})
a.addEventListener("mouseout",function(){
	a.setAttribute("class","register");
	b.style.display="none";
})
b.addEventListener("mouseover",function(){
	a.setAttribute("class","hover");
	b.style.display="block";
})
b.addEventListener("mouseout",function(){
	a.setAttribute("class","register");
	b.style.display="none";
})
}
var btns=$(".bannerBtn li");
for (var i=0;i<btns.length;i++) {
		btns[i].addEventListener("mouseover",function(event){
			clearInterval(timer);
		});
		btns[i].addEventListener("mouseout",function(event){
			timer=setInterval(show,2000);
		});
}
var j=1;
var i=0;
//var n=0;
var timer=setInterval(show,2000);
function show(){
	 var imgs=$(".imgBanner img");	 
	 //imgs[i].setAttribute('class','hide')
		imgs[i].style.zIndex=j;
//		var ulis=$(".bannerBtn li");
//		console.log(ulis);
//		ulis[n].setAttribute("class","lihover");
//		console.log(ulis[n]);
//		if(n>0){
//			ulis[n].previousElementSibling.setAttribute("class","");
//			if(n>=2){
//				n=0;
//				console.log(n);
//			  ulis[n].setAttribute("class","lihover");
//			  ulis[2].setAttribute("class","");	
//			}
//		}
//		n++;
		i++;
		if(i>=3){
			i=0;
			for(var k=0;k<imgs.length;k++){
			imgs[k].style.zIndex=0;
			}
		}
}
