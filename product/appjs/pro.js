let h1Elem=document.querySelector('h1')
let paragraph=document.querySelector('p')
let title=document.querySelector('title')
let imageElem=document.querySelector('.image')
let backBtn=document.querySelector('#back')
let moreBtn=document.querySelector('#more')


let objectArry=[
    {id:1 , title:'سیستم کابینت آشپزخانه' , img:'../home page/images/cobinet.jpg'},
    {id:2 , title:'میز کار' , img:'../home page/images/work chair.jpg'},
    {id:3 , title:'کمد و کمد دیواری' , img:'../home page/images/image 2.jpg'},
    {id:4 , title:'کابینت فانتزی' , img:'../home page/images/mini cubin.jpg'},
    {id:5 , title:'میز بار' , img:'../home page/images/bar chair.jpg'},
    {id:6 , title:'پارتیشن' , img:'../home page/images/partition.jpg'},
]

let locationSerchesParams=new  URLSearchParams(location.search)
let user=locationSerchesParams.get('id')


let objectMain = objectArry.find(function(product){
    return product.id === Number(user)
})


if(objectMain){
    h1Elem.innerHTML=objectMain.title
    title.innerHTML=objectMain.title
    imageElem.src=objectMain.img
}else{
    h1Elem.innerHTML='product undefinde'
    title.innerHTML='undifinde'
    imageElem.src=''
}

////////////////////////////////////////////////////////////////////////////////////


backBtn.addEventListener('click' , function () {
    history.back()
})


moreBtn.addEventListener('click' , function () {
    
})
