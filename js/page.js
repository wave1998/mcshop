function Page(classname,options={}){
    this.box = document.querySelector("."+classname);
    this.options = options;
    this.default={
    language:{
        first:"首页",
        prev:"上一页",
        list:"list",
        next:"下一页",
        last:"尾页",
    },
    pageData:{
        total:200,
        size:5,
    }
  }
  this.show = this.options.show
  this.list=null;
  var _this = this;
  this.currentPage = 1;
  this.setDefault()
  this.totalPage=Math.ceil(this.default.pageData.total/this.default.pageData.size)
  this.setStyle(this.box,{
      width:"800px",
      height:"40px",
      margin:"auto",
      border:"1px solid #000",
      display:"flex",
      "justify-content":"center",
      "align-items":"center",
      borderRadius:"10px",
  })
  this.createTag();
  this.createList();
  this.dong()
  this.box.addEventListener("click",function(){
    _this.dong()
  })
  this.setDisabled();
  this.go()  //创建输入框和按钮
  this.init()
}


Page.prototype.go = function(){
  var _this = this;
  var input = document.createElement('input')
  input.type="number"
  this.box.appendChild(input)
  this.setStyle(input,{
    width:"50px",
    height:"18px",
    marginRight:"5px"
  })
  var btn = document.createElement('button')
  this.box.appendChild(btn)
  btn.innerText = "go"
  this.setStyle(btn,{
    width:"30px",
    height:"24px",
  })
}


Page.prototype.setDisabled = function(){
  if(this.currentPage==1){
    this.box.children[0].style.background = "#ccc"
    this.box.children[1].style.background = "#ccc"
    this.box.children[0].setAttribute("name","disabled")
    this.box.children[1].setAttribute("name","disabled")
  }
  if(this.currentPage==this.totalPage){
    this.box.children[3].style.background = "#ccc"
    this.box.children[4].style.background = "#ccc"
    this.box.children[3].setAttribute("name","disabled")
    this.box.children[4].setAttribute("name","disabled")
  }
}


Page.prototype.dong = function(){
        var e = e || window.event;
        var target= e.target || e.srcElement;
        if(target.className == "first" && target.getAttribute("name")!="disabled"){
            this.currentPage = 1;
            this.afterClick()

        }else if(target.className=="prev" && target.getAttribute("name")!="disabled"){
            this.currentPage --;
            this.afterClick()

        }else if(target.className=="next" && target.getAttribute("name")!="disabled"){
            this.currentPage ++;
            this.afterClick()

        }else if(target.className=="last" && target.getAttribute("name")!="disabled"){
            this.currentPage = this.totalPage
            this.afterClick()

        }else if(target.nodeName=="P" && this.currentPage != target.innerText-0){
            this.currentPage = target.innerText-0
            this.afterClick()

        }else if(target.nodeName=="BUTTON"){
          this.currentPage = target.previousElementSibling.value-0
          this.afterClick()
        }
}


Page.prototype.afterClick = function(){
      this.createTag();
      this.createList();
      this.setDisabled()
      this.go()
      this.show(this.currentPage)
}


Page.prototype.createList=function(){
    if(this.totalPage<=5){
        for(var i=1;i<=this.totalPage;i++){
            var p = document.createElement('p')
            p.innerText=i;
            this.setStyle(p,{
              "border":"1px solid #000",
              "margin":"0 5px",
              padding:"0 5px"
            })
            if(i==this.currentPage){
              p.style.background="orange"
            }
            this.list.appendChild(p)
        }
    }else{
        if(this.currentPage<=3){
          for(var i=1;i<=5;i++){
            var p = document.createElement('p')
            p.innerText = i;
            this.setStyle(p,{
              "border":"1px solid #000",
              "margin":"0 5px",
              padding:"0 5px"
            })
            if(i==this.currentPage){
              p.style.background="orange"
            }
            this.list.appendChild(p)
        }
    }else if(this.currentPage>=this.totalPage-2){
          for(var i=this.totalPage-4;i<=this.totalPage;i++){
            var p = document.createElement('p')
            p.innerText = i;
            this.setStyle(p,{
              "border":"1px solid #000",
              "margin":"0 5px",
              padding:"0 5px"
            })
            if(i==this.currentPage){
              p.style.background="orange"
            }
            this.list.appendChild(p)
        }
      }else{
          for(var i=this.currentPage-2;i<=this.currentPage+2;i++){
            var p = document.createElement('p')
            p.innerText = i;
            this.setStyle(p,{
              "border":"1px solid #000",
              "margin":"0 5px",
              padding:"0 5px"
            })
            if(i==this.currentPage){
              p.style.background="orange"
            }
            this.list.appendChild(p)
        }
      }
  }
}


Page.prototype.createTag = function(){
    this.box.innerHTML = ""
    for(var attr in this.default.language){
        var div = document.createElement('div')
        div.className = attr;
          if(attr!="list"){
          this.setStyle(div,{
              "border":"1px solid #000",
              "margin":"0 5px",
              padding:"0 5px"
          })
          div.innerText = this.default.language[attr]
      }else{
          this.list = div
          this.setStyle(this.list,{
              display:"flex",
              "justify-content":"center",
              "align-items":"center",

          })
      }
        this.box.appendChild(div)
    }
}


Page.prototype.setStyle = function(ele,styleObj){
    for(var attr in styleObj){
        ele.style[attr] = styleObj[attr]
    }
}


Page.prototype.setDefault = function(){
    for(var attr in this.options.language){
        this.default.language[attr] = this.options.language[attr];
    }
    for(var attr in this.options.pageData){
        this.default.pageData[attr] = this.options.pageData[attr]
    }
}

Page.prototype.init = function(){
  this.currentPage = 1;
  this.afterClick();
}


/*
分析：
需要由哪些元素组成
什么规律
用户传些什么


1、构造函数new一下穿一个大盒子进去
2、构造函数：
    1、获取元素--大盒子，需要操作的元素--作为对象的属性
    2、操作元素--元素的事件
    3、处理用户参数--作为对象的属性
    4、定义默认值-作为对象属性
    5、总页数
3、设置默认值 setDefault：将用户传进来的参数作为默认值
4、方法-创建标签  createTag
5、方法-创建页码  createList
    总页数不大于5；
    总页数大于5：
        当前页小于等于3；
        当前页大于等于总页数-2；
        当前页是其他的中间页；
6、方法--点击动起来

*/




