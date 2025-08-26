//id=btnを定数に代入
const textBtn=document.getElementById('btn');
let textUnclicked='ボタンをクリックしてください';
let textClicked='ボタンをクリックしました';

 //id=textの要素を代入
 const hText=document.getElementById('text');
 //const hText=document.querySelector('h2');

//id=btnをクリックしたらイベント開始
textBtn.addEventListener('click',()=>{
    setTimeout(()=>{
    if(hText.textContent==textUnclicked){
        hText.textContent=textClicked;
    }else{
        hText.textContent=textUnclicked;
    }
    },2000);
});
//id=textの内容を変更する
