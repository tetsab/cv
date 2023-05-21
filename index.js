
var on = 1;

document.getElementById("night-theme").onclick = () => {
  if(on){
    document.querySelectorAll('.w3-text-white').forEach(e => e.classList.replace('w3-text-white', 'w3-text-grey'))
    document.querySelectorAll('.w3-grey').forEach(e => e.classList.replace('w3-grey', 'w3-white'))
    document.body.style.backgroundColor = "white";
    document.querySelectorAll('.btn-secondary').forEach(e => e.classList.replace('btn-secondary', 'btn-light'))
  }else{
    document.querySelectorAll('.w3-text-grey').forEach(e => e.classList.replace('w3-text-grey', 'w3-text-white'))
    document.querySelectorAll('.w3-white').forEach(e => e.classList.replace('w3-white', 'w3-grey'))
    document.body.style.backgroundColor = "gray";
    document.querySelectorAll('.btn-light').forEach(e => e.classList.replace('btn-light', 'btn-secondary'))
  }
  on = on ? 0 : 1
}