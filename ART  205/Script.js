const profilephoto=document.getElementById('Profile-Photo');
const PhotoModal=document.getElementById('ProfilePhoto');
const closebtn=document.querySelector('.close-btn');

profilephoto.onclick=function()
{
    PhotoModal.style.display='block';
}
closebtn.onclick=function()
{
    PhotoModal.style,display=n='none';
}
const contactForm=documentgetElementById('contactForm');
const confirmModal=documentgetElementById('confirmModal');
const confirm=documentgetElementById('confirmBtn');
const closeconfirmModal=('CloseConfirmModal');

contactForm.onsubmit=function(event) {
    event.preventDefault();
    confirmModal.style.display='block';
}
confirmBtn.onclick=function(){
    confirmModal.style.display='none';
}
window.onclick=function () {
    if(event.target=PhotoModal={eventargetconfirmModal}){
        PhotoModal.style.display='none';
        confirmModal.style.display='none';
    }
}