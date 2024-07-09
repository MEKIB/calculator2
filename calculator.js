const element=document.querySelectorAll("button");
const display1=document.querySelector("#display");
const display_date=document.querySelector("#dateplace");
for(let i=0;i<element.length;i++)
{
       element[i].addEventListener("click",function(){
		const x=element[i].textContent;
		if(x=="AC")
		{
			clearresult();
		}
		else if(x=="DEL")
		{
			deleteresult();
		}
		else if(x=="OFF")
	  {
			offf();
		}
		else if(x=="ON")
	  {
			onn();
		}
		else if(x=="Date")
		{
			date();
		}
		else if(x=="log")
		{
			display1.value=Math.log10(display1.value);
		}
		
		else if(x=="sin")
		{
			display1.value=Math.sin(display1.value);
		}
		else if(x=="cos")
		{
			display1.value=Math.cos(display1.value);
		}
		else if(x=="tan")
		{
			display1.value=Math.tan(display1.value);
		}
		else if(x=="x^2")
		{
			display1.value=Math.pow(display1.value,2);
		}
		else if(x=="x^3")
		{
			display1.value=Math.pow(display1.value,3);
		}
		else if(x=="sqrt")
		{
			display1.value=Math.sqrt(display1.value);
		}
		else if(x=="=")
		{
			calculateresult();
		}
		else{
			addvalue(x);
		}
	});
}

function clearresult()
{
 display1.value="";
}
function deleteresult(){
	display1.value=display1.value.toString().slice(0,-1);
}
function calculateresult()
{
	display1.value=eval(display1.value);
}
function addvalue(x){
	display1.value+=x;
}
function onn()
{
  window.document.location.reload();
}
function offf()
{
 display1.style.background="#ccc";
 display1.style.color="#ccc";
 element.disabled = true;
 const y = document.querySelector('#button');
 y.disabled = true;
}
function date(){
 display1.value = new Date();
}
