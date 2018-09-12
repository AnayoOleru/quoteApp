
let store= Array();
function save_to_array(){
  if(document.getElementById("text1").value){
    store.push(document.getElementById("text1").value)
   document.getElementById("text1").value = "";
  // } 
  // else if(typeof === 'number'){
  //   return(showToast("you have to type in letters only"))
  }else{
    return(showToast("Please type in your quote"));
  }
}

function showToast(text) {
    let label = document.getElementById("toast")
    label.textContent = text;
    label.className = "show";
    setTimeout(function(){
//After 3 seconds, remove the show class from DIV
      label.className = label.className.replace("show", ""); }, 3000);
}

function display_array(){
  if(store.length > 0){
    let randomValue = store[Math.floor(Math.random() * store.length)];
     document.getElementById("Results").innerHTML = ( '" ' + randomValue + ' "');
  }
}