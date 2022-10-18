const menuPop=document.getElementById('MenuPop');
const closeBtn =document.getElementById('closeBtn');
const openMenu =document.getElementById('openMenu');
const menuPop_link =document.getElementsByClassName('menuPop_link');
openMenu.addEventListener('click',function() 
{
open();
})
closeBtn.addEventListener('click',function() 
{
   
close();
})
function open()
{
    menuPop.style.display='block';
    document.body.style.position='fixed'
 
    openMenu.style.display='none';
   

}
function close()
{
   
    menuPop.style.display='none';
    document.body.style.position='relative';


}
menuPop_link.forEach((element) => {
element.onclick =() =>{
    menuPop.style.display='none';
    document.body.style.position='relative';
    
}    
});
    