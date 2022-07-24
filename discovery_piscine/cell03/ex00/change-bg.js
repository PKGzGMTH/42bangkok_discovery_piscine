function	random_color()
{
	let	base16;
	var	color;

	base16 = '0123456789ABCDEF';
	color = '#';
	for (let i = 0; i < 6; i++)
	{
		color += base16[Math.floor(Math.random() * 16)];
		i++;
	}
	return (color);
}

function	changeBackground()
{
	document.body.style.backgroundColor = random_color();
}
