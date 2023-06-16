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
	window.location.href = 'https://www.tiktok.com/@good.joji/video/7152168590504987950?_r=1&_t=8dD9ZgkvmsQ&social_sharing=v3';
});
