 /* MENU*/
const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
	hamburger_icon.innerText = hamburger_icon.innerText === 'menu' 
		? 'close'
		: 'menu';
	
	mobile_menu.classList.toggle('is-open');
})
 /*DESAPARECIMENTO DO MENU-MOBILE*/
$(".hamburger").click(function() {
	$(".mobile-menu").show();
  });
  $(".OpcoesMenu").click(function() {
	$(".mobile-menu").hide();
  });