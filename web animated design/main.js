let stars = document.getElementById('stars1');
let test = document.getElementById('test');
let moon2 = document.getElementById('moon2');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let mountains7 = document.getElementById('mountains7');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon2.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';
    test.style.fontSize = value + 'px';
    if(value >= 67){
        test.style.fontSize = 67 + 'px';
        test.style.position = 'fixed';
        if(value >= 478){
            test.style.display = 'none';
        }
        else{
            test.style.display = 'block';
        }
        if(value >= 127){
            document.querySelector('.mai').style.background = 'linear-gradient(#376281,#10001f)';
        }
        else{
            document.querySelector('.mai').style.background = 'linear-gradient(#250122,#18033c)';
        }
    }
    if(value == 0){
        moon2.style.top = -20 + 'px';
    }
}