let oBtn=document.querySelector("#btn");
let sidebar=document.querySelector(".sidebar");
let search=document.querySelector(".bx-search");
let mBtn=[];
let navC=document.querySelector(".nav-content");

 mBtn[0]=document.querySelector("#btn1");
 mBtn[1]=document.querySelector("#btn2");
 mBtn[2]=document.querySelector("#btn3");
 mBtn[3]=document.querySelector("#btn4");
 mBtn[4]=document.querySelector("#btn5");

oBtn.onclick = function()
{
	sidebar.classList.toggle("open");
}

search.onclick = function()
{
	sidebar.classList.add("open");
}

console.log(mBtn);

let field=250;

for (let i=0; i<5; ++i)
{
	mBtn[i].style.left =  i*40+8*(i+1) + 'px';
}

mBtn[0].onclick = function()
{
	mBtn[0].classList.add("active");


	let a=[];

	let t=0;
	for (let i=0; i<5; ++i)
	{
		mBtn[i].style.pointerEvents = 'none';

			if (i==0) continue;
			a[t]=mBtn[i];
			t++;
	}

	for (let i=0; i<4; ++i)
	{
		a[i].style.left =  i*40+18*(i+1) + 'px';
	}

	setTimeout(() => {
		 mBtn[0].classList.remove("active"); 

	for (let i=0; i<5; ++i)
	{
		mBtn[i].style.pointerEvents = 'auto';
		mBtn[i].style.left =  i*40+8*(i+1) + 'px';
	}

					} , 500 );

	setTimeout(() => {
		for (let i=0; i<5; ++i)
					{
						mBtn[i].style.pointerEvents = 'auto';
					}
				}, 600 );

}


mBtn[1].onclick = function()
{
	mBtn[1].classList.add("active");

	let a=[];

	let t=0;
	for (let i=0; i<5; ++i)
	{
		mBtn[i].style.pointerEvents = 'none';
			if (i==1) continue;
			a[t]=mBtn[i];
			t++;
	}

	for (let i=0; i<4; ++i)
	{
		a[i].style.left =  i*40+18*(i+1) + 'px';
	}

	setTimeout(() => {
		 mBtn[1].classList.remove("active"); 

	for (let i=0; i<5; ++i)
	{
		mBtn[i].style.pointerEvents = 'auto';
		mBtn[i].style.left =  i*40+8*(i+1) + 'px';
	}

					} , 500 );

	setTimeout(() => {
		for (let i=0; i<5; ++i)
					{
						mBtn[i].style.pointerEvents = 'auto';
					}
				}, 600 );

}

mBtn[2].onclick = function()
{
	mBtn[2].classList.add("active");

	let a=[];

	let t=0;
	for (let i=0; i<5; ++i)
	{
		mBtn[i].style.pointerEvents = 'none';
			if (i==2) continue;
			a[t]=mBtn[i];
			t++;
	}

	for (let i=0; i<4; ++i)
	{
		a[i].style.left =  i*40+18*(i+1) + 'px';
	}

	setTimeout(() => {
		 mBtn[2].classList.remove("active"); 

	for (let i=0; i<5; ++i)
	{
		mBtn[i].style.pointerEvents = 'auto';
		mBtn[i].style.left =  i*40+8*(i+1) + 'px';
	}

					} , 500 );

	setTimeout(() => {
		for (let i=0; i<5; ++i)
					{
						mBtn[i].style.pointerEvents = 'auto';
					}
				}, 600 );

}

mBtn[3].onclick = function()
{
	mBtn[3].classList.add("active");

	let a=[];

	let t=0;
	for (let i=0; i<5; ++i)
	{
		mBtn[i].style.pointerEvents = 'none';
			if (i==3) continue;
			a[t]=mBtn[i];
			t++;
	}

	for (let i=0; i<4; ++i)
	{
		a[i].style.left =  i*40+18*(i+1) + 'px';
	}

	setTimeout(() => {
		 mBtn[3].classList.remove("active"); 

	for (let i=0; i<5; ++i)
	{
		mBtn[i].style.left =  i*40+8*(i+1) + 'px';
	}

					} , 500 );

	setTimeout(() => {
		for (let i=0; i<5; ++i)
					{
						mBtn[i].style.pointerEvents = 'auto';
					}
				}, 600 );

}

mBtn[4].onclick = function()
{
	mBtn[4].classList.add("active");

	let a=[];

	let t=0;
	for (let i=0; i<5; ++i)
	{
		mBtn[i].style.pointerEvents = 'none';
			if (i==4) continue;
			a[t]=mBtn[i];
			t++;
	}

	for (let i=0; i<4; ++i)
	{
		a[i].style.left =  i*40+18*(i+1) + 'px';
	}

	setTimeout(() => {
		 mBtn[4].classList.remove("active"); 

	for (let i=0; i<5; ++i)
	{
		mBtn[i].style.left =  i*40+8*(i+1) + 'px';
	}

					} , 500 );

	setTimeout(() => {
		for (let i=0; i<5; ++i)
					{
						mBtn[i].style.pointerEvents = 'auto';
					}
				}, 600 );

}
