/*
* @Author: Gavin
* @Date:   2020-12-30 22:11:40
* @Last Modified by:   Gavin
* @Last Modified time: 2020-12-30 22:21:47
*/


document.querySelector('.btn').addEventListener('click', function(){
	document.querySelector('.speech-bubble-container').classList.toggle('hidden');
	document.querySelector('.icon-share').classList.toggle('btn-focused-img');
	document.querySelector('.btn').classList.toggle('btn-focused');
});