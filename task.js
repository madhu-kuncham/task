


// function init() {
//         // Put your code here
        
        
//  window.onload = init;

 function run() {
  //create a span element 
  
    let span  = document.getElementsByClassName("rect");
  
      // let  = document.createElement('span');
      // span.innerHTML= 'lmao';
  //append the new span to the target element
      //  document.span.appendChild(span);
      // parent.appendChild(span);

      let task = document.createElement('span');
div.appendChild(span);

      
    }

  var small = document.getElementById("small-rect");
  small.addEventListener("onClick", run());
  function run1() {
    // document.getElementById("demo").innerHTML = "small-rect";
    document.getElementById("small-rect").addEventListener("onClick", run1());
  }

    
    