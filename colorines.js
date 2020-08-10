  var crearEvento = (function() {
      function w3c_crearEvento(elemento, evento, mifuncion) {
          elemento.addEventListener(evento, mifuncion, false);
      }

      function ie_crearEvento(elemento, evento, mifuncion) {
          var fx = function() {
              mifuncion.call(elemento);
          };
          elemento.attachEvent("on" + evento, fx);
      }
      if (typeof window.addEventListener !== "undefined") {
          return w3c_crearEvento;
      } else if (typeof window.attachEvent !== "undefined") {
          return ie_crearEvento;
      }
  })();

  function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
  crearEvento(window, "load", function(){
      var els = document.getElementsByTagName("*");
      for (let i = 0; i < els.length; i++) {
          const element = els[i];
          element.style = "border: 1px solid "+getRandomColor();
      }
  });
