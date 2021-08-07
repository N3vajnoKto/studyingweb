let oBtn=document.querySelector("#btn");
let sidebar=document.querySelector(".sidebar");
let search=document.querySelector(".bx-search");


oBtn.onclick = function()
{
	sidebar.classList.toggle("open");
}

search.onclick = function()
{
	sidebar.classList.add("open");
}

