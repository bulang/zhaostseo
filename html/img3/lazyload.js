var lazyload = {
 
     cfg:{loadfunc:null},
          
     load:function(){
		 		//alert(this.cfg.loadfunc);
              if(typeof eval(this.cfg.loadfunc) == 'function'){
                       this.destroy();//ע���������¼�
                       eval(this.cfg.loadfunc+'();');//���ô�����
                       return;
              }
              //alert('��ȷ�ϼ��غ����Ƿ��Ѿ�����?');
     },
 
     setcfg:function(a){//a Ϊarray
           if(typeof a == 'object'){//�ж�a �Ƿ�Ϊ����
               for(var key in a){
                    this.cfg[key] = a[key];//�����õ�ֵ����lazyload��������ò���
               }
               return;
      }
          alert('��ȷ�����ò�����ʽ�Ƿ���ȷ?');
     },
 
     register:function(){//��ʼ�� ��������󶨹����¼�
          if(window.attachEvent){//IE
                   window.attachEvent("onscroll",this.scroll,false);
          }else{//FF
                   window.addEventListener("scroll",this.scroll,false);
          }
     }
     ,
     scroll:function(){//������ ��ʼ���� �������Ƿ񵽴�ײ�
           //�жϹ�������������ҳ��ײ�
           //var a = document.documentElement.scrollTop==0? document.body.clientHeight :             document.documentElement.clientHeight;
           //var b = document.documentElement.scrollTop==0? document.body.scrollTop :             document.documentElement.scrollTop;
           //var c = document.documentElement.scrollTop==0? document.body.scrollHeight :             document.documentElement.scrollHeight;
  			//c = c - 200;
           //if(a+b == c){
		   //if(a+b >= c - 7800){
		   var clientHeight = $(window).height(),
		   scrollTop = $(window).scrollTop(),
		   scrollHeight = $(document).height();	//��Ļ�߶�
		   if(clientHeight + scrollTop >=  scrollHeight-2800 ){
                lazyload.load();//��ʼ����
           }
     }
     ,
     destroy:function(){//ע��onscroll�¼� ��ֹ�������ݵ�ʱ���������
              if(window.attachEvent){//ff
                   window.detachEvent("onscroll",this.scroll,false);  
              }else{//ie
                       window.removeEventListener("scroll",this.scroll,false);
              }
     }
 
};

var lazyloadpage = 1;

function loadcomment(){
	//alert("ok");
	this.lazyloadpage++;
  	 //�����������
     //������Ϻ� ���ݸ���  ����ע���¼�
     $.ajax({
          type: "POST",
		  url: 'index.php?tp=index',
		  data: 'method=getTodayList&page='+this.lazyloadpage,
          success:function(content){
              $('.tab01').append(content);
              lazyload.register();
			  initclock();
      	  }
	 });
}

/*window.onload = function(){
     lazyload.setcfg({
              loadfunc : "loadcomment",//�������ݵķ�����
     });
     lazyload.register();//ע��������¼�
}*/

function pageOnLoad(){
	lazyload.setcfg({
              loadfunc : "loadcomment",//�������ݵķ�����
     });
     lazyload.register();//ע��������¼�
}