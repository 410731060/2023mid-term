var vm = new Vue({
    el: "#app",
    data: {
      keyword: "",
      cards: [
        {
          title: "馮禹豪",
          subtitle:"Self introduction",
          context1: "學號:410731060",
          context2: "就讀科系:教科2B",
          school:"淡江大學 Tamkang University",
        },
        {
            title: "興趣",
            subtitle:"habit",
            context1: "玩遊戲",
            context2: "有空閒的時候就陪朋友玩遊戲",
            school:"淡江大學 Tamkang University",
          },
          {
            title: "興趣",
            subtitle:"habit",
            context1: "聽音樂",
            context2: "甚麼音樂都聽，最近喜歡輕音樂",
            school:"淡江大學 Tamkang University",
          },
          {
            title: "興趣",
            subtitle:"habit",
            context1: "打桌球",
            context2: "不是非常強，略知一二",
            school:"淡江大學 Tamkang University",
          },
          {
            title: "喜歡科目",
            subtitle:"like subject",
            context1: "2D/3D動畫",
            context2: "很累，但是做起來很有成就感",
            school:"淡江大學 Tamkang University",
          },
          {
            title: "喜歡科目",
            subtitle:"like subject",
            context1: "學程式",
            context2: "學過程式c/c++/python/js/html 接下來想學C#",
            school:"淡江大學 Tamkang University",
          },
          {
            title: "",
            subtitle:"",
            context1: "",
            context2: "",
            school:"",
          },
		],
    },
    
    mounted:function(){        
        swiper = new Swiper('.carousel', {
            effect: 'cards',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            }
        })     

        }
  });