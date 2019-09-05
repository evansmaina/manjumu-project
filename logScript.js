$(document).ready(function () {
    $('.slider-area').slideWiz(
        {
            auto: true,
            speed: 2000,
            type : 'pixel',
//            row: 9,
            file : [
                {
                    src: {
                        main: "carousel/1.png",
                        cover: "carousel/1.png"
                    },
                    title: 'Welcome to Manjumu.com ',
                    desc: 'This is our form area' +
                    '                    \'Were you sign Up and Register your details',
                    button: {
                        text: 'Learn More',
                        url: '#',
                        class: 'btn btn-medium btn-primary',
                        color: '#fff'
                    }
                },
                {
                    src: {
                        main: "carousel/2.png",
                        cover: "carousel/2.png"
                    },
                    title: 'BestWomen shoes',
                    desc: 'All available' +
                    '                    \'in all shoe sizes and different type of colors',
                    button: {
                        text: 'get started',
                        url: '#',
                        class: 'btn btn-medium btn-success',
                        color: '#fff'
                    }
                },
                
                {
                    src: {
                        main: "carousel/3.png",
                        cover: "carousel/3.png"
                    },
                    title: 'Kids Shoes available',
                    desc: 'Get one for your kid on affordable prices' +
                    '                    \'we also make  deliveries once one purchase',
                    button: {
                        text: 'get one',
                        url: false,
                        class: 'btn btn-medium btn-warning',
                        color: '#fff'
                    }
                },
                 {
                    src: {
                        main: "carousel/5.png",
                        cover: "carousel/5.png"
                    },
                    title: 'Get Offers',
                    desc: 'first time in our site' +
                    '                    \'buy your self a shoe or shoes to get unlimited offers',
                    button: {
                        text: 'get offer',
                        url: '#',
                        class: 'btn btn-medium btn-info',
                        color: '#fff'
                    }
                }
            ]

        }
    );
});






//java script

//products tabs
const loginDiv=document.querySelector('.navy-log');
loginDiv.addEventListener('click',function(e){
    var navTabs=document.querySelectorAll('.lively');
    navTabs.forEach(function(tab){
        tab.className=tab.className.replace('lively','');
        
    })
    
   e.target.className+=' lively';
     document.getElementById(e.target.href.split('#')[1]).className+=' lively';
})


