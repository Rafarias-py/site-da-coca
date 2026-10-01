// criação de uma timeline do GSAP com animações sincornizadas com o scroll
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start:'0% 95%',
        end: '70% 50%',
        scrub: true,
        //markers: true //DEPURAÇÃO
    }
});

tl.to(
    '#fanta',
    {
        top:'120%',
        left:'0%',
    },
    'orange'
);
tl.to(
    '#laranja-cortada',
    {
        top:'160%',
        left:'23%',
    },
    'orange'
);
tl.to(
    '#laranja',
    {
        width:'15%',
        top:'160%',
        right:'10%',
    },
    'orange'
);
tl.to(
    '#folha',
    {
        rotate: '530deg',
        top:'110%',
        left:'70%',
    },
    'orange'
);
tl.to(
    '#folha2',
    {
        rotate: '530deg',
        top:'110%',
        left:'0%',
    },
    'orange'
);
tl.to(
    '#folha3',
    {
        rotate: '360deg',
        top: '110%',
        
    },
    'orange'
)
// criando outra timeline
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start:'0% 95%',
        end: '20% 50%',
        scrub: true,
        //markers: true //DEPURAÇÃO
    }
});

tl2.from(
    '.lemon1',
    {
        rotate:'-90deg',
        left:'-100%',
        top:'110%'
    },
    'ca'

);
tl2.from(
    '.lemon2',
    {
        rotate:'90deg',
        left:'100%',
        top:'110%'
    },
    'ca'

);
tl2.from(
    '#cocacola',
    {
        rotate:'-90deg',
        left:'-100%',
        top:'110%'
    },
    'ca'

);
tl2.from(
    '#pepsi',
    {
        rotate:'90deg',
        left:'100%',
        top:'110%'
    },
    'ca'

);
tl2.to(
    '#laranja-cortada',
    {
        width:'18%',
        left:'42%',
        top:'204%'
    },
    'ca'

);
tl2.to(
    '#fanta',
    {
        width:'35%',
        left:'33%',
        top:'210%'
    },
    'ca'

);