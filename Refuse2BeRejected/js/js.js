function btn_move(el, mouseLeft, mouseTop){
    var leftRnd = (Math.random()-0.5)*20+5;
    var topRnd = (Math.random()-0.5)*20+5
    var btnLeft = mouseLeft+(leftRnd>0?100:-100)+leftRnd;
    var btnTop = mouseTop+(topRnd>0?30:-30)+topRnd;
    btnLeft = btnLeft<100?(btnLeft+window.innerWidth-200):(btnLeft>window.innerWidth-100?btnLeft-window.innerWidth+200:btnLeft);
    btnTop =  btnTop<100?( btnTop+window.innerHeight-200):(btnTop>window.innerHeight-100?btnTop-window.innerHeight+200:btnTop);
    el.style.position = 'fixed';
    el.style.left = btnLeft+'px';
    el.style.top = btnTop+'px';
}

function over_btn(e){
    if(!e){
        e = window.event;
    }
    btn_move(this, e.clientX, e.clientY);
}

function printstr(e){
    alert("谢谢领导，在下告辞");
    window.opener=null;window.open('','_self');
    window.close();
}
document.getElementById('yes').onclick = printstr;
document.getElementById('no').onmouseover = over_btn;
document.getElementById('no').onclick = over_btn;
