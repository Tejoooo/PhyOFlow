document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "Learn.", "Practise.", "Excel.", "Physics Made Easy"];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector(".typewrite").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true" class="txt"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 1200);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });



  
  // ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("ele"));
  let element = document.getElementById("ele");

  window.addEventListener("scroll", function() {
    if (this.scrollY > 870) {
      element.hidden = true;
    } else {
      element.hidden = false;
      element.style.opacity = 1; // Set the opacity to 1 in case it was previously hidden
    }
  });

  const logo = document.querySelector('.logo');

  let prevScrollPos = window.pageYOffset;
  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      logo.style.opacity = 1;
    } else {
      logo.style.opacity = 0.5;
    }
    prevScrollPos = currentScrollPos;
  }



  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    const button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }

  // scroll to the top of the page when the user clicks the button
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


// Script for incrementing after pressing the cart button
// const addToCartButton = document.getElementById("cart-btn");
// let cartCnt = 0;
// addToCartButton.addEventListener("click", function() {
//   const cartCountElement = document.getElementById("cart-count");
//   let cartCount = parseInt(cartCountElement.textContent);
  
//   cartCnt += 1;
  
//   cartCountElement.textContent = cartCnt.toString();
