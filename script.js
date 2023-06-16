const btn1 = document.querySelector('#btn1');


const initialPosition = {
	x: btn1.offsetLeft,
	y: btn1.offsetTop
};

btn1.addEventListener('click', () => {
	
	let newX = Math.floor(Math.random() * (window.innerWidth - btn1.offsetWidth));
	let newY = Math.floor(Math.random() * (window.innerHeight - btn1.offsetHeight));

	
	const btn2 = document.querySelector('#btn2');
	while (newX + btn1.offsetWidth > btn2.offsetLeft && newX < btn2.offsetLeft + btn2.offsetWidth &&
		newY + btn1.offsetHeight > btn2.offsetTop && newY < btn2.offsetTop + btn2.offsetHeight) {
		newX = Math.floor(Math.random() * (window.innerWidth - btn1.offsetWidth));
		newY = Math.floor(Math.random() * (window.innerHeight - btn1.offsetHeight));
	}

	
	btn1.style.left = newX + 'px';
	btn1.style.top = newY + 'px';
});


window.addEventListener('load', () => {
	btn1.style.left = initialPosition.x + 'px';
	btn1.style.top = initialPosition.y + 'px';
});

const btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', () => {
	window.location.href = 'https://www.google.com.br/maps/place/Centro+Cultural+São+Paulo/@-23.5711086,-46.6427098,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59984baaaaab:0x8e470a76a1aef0d7!8m2!3d-23.5711135!4d-46.6401295!16s%2Fg%2F122wtrks?entry=ttu';
});
