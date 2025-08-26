//id=btnを定数に代入
const textBtn=document.getElementById('btn');
let textUnclicked='ボタンをクリックしてください';
let textClicked='ボタンをクリックしました'
//id=btnをクリックしたらイベント開始
textBtn.addEventListener('click',()=>{
    //id=textの要素を代入
    const hText=document.getElementById('text');
    //const hText=document.querySelector('h2');

    if(hText.textContent==textUnclicked){
        hText.textContent=textClicked;
    }else{
        hText.textContent=textUnclicked;
    }
});
//id=textの内容を変更する
