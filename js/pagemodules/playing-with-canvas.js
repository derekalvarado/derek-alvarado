(function playingWithCanvas() {
  var _toggles = {
    dev: false
  };
  MODULE = {};
  MODULE = {
    logit: function() {
      console.log("it was logged");
    },
    addCanvas: function() {
      if (_toggles.canvas)
        return;
      var canvas = document.createElement('canvas');
      canvas.id = "mycanvas";
      canvas.setAttribute('class', 'figure');
      canvas.innerHTML = "Here is a new canvas!";
      document.getElementById('canvasHolder').appendChild(canvas);
      _toggles.canvas = 1;
    },
    addImage: function() {
      if (_toggles.addImage)
        return;
      var img = new Image();
      img.style.position = "absolute";
      img.style.left = "-99999px";
      document.getElementsByTagName('body')[0].appendChild(img);
      var canvas = document.getElementById('mycanvas2');
      var context = document.getElementById('mycanvas2').getContext('2d');
      img.addEventListener("load", function(e) {
        canvas.width = this.offsetWidth;
        canvas.height = this.offsetHeight;
        context.drawImage(img, 0, 0, this.offsetWidth, this.offsetHeight);
      })
      img.src = "https://upload.wikimedia.org/wikipedia/commons/a/ae/Cauliflower_Fractal_AVM.JPG"
      _toggles.addImage = 1;
    },
    listing5: function() {
      if (_toggles.listing5)
        return;
      var img = new Image();
      img.crossOrigin = "Anonymous"
      img.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Cauliflower_Fractal_AVM.JPG';
      img.style.position = "absolute";
      img.style.left = "-999px";
      document.getElementsByTagName('body')[0].appendChild(img);
      var canvas = document.getElementById('mycanvas3');
      var ctx = canvas.getContext('2d');
      img.addEventListener("load", function(e) {
        console.group();
        console.log("img height: ", this.height);
        console.log("img width: ", this.width);
        console.log("Canvas old width: ", canvas.width)
        console.log("Canvas old height: ", canvas.height)
        canvas.width = this.width;
        canvas.height = this.height;
        console.log("Canvas new width: ", canvas.width)
        console.log("Canvas new height: ", canvas.height)
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        console.groupEnd();
      });
      if (_toggles.dev) {
        canvas.addEventListener('click', function(e) {
          alert(e.clientX);
        });
      }

      canvas.addEventListener('mousemove', pick);

      function pick(e) {

        var el = e.currentTarget;        
        var rect = el.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top; 
        var pixel = ctx.getImageData(x, y, 1, 1);
        var data = pixel.data;
        var rgba = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + data[3] + ')';
        var viewer = document.getElementById("pixel-viewer-colorbox");
        viewer.style.background = rgba;
        var pixelText = document.getElementById("pixel-viewer-text");
        pixelText.textContent = rgba;        
      }
    }
  }
  if (_toggles.dev) {
    console.log('loading dev');
    var keys = Object.getOwnPropertyNames(MODULE);
    keys.forEach(function(curr, index, arr) {
      if (typeof MODULE[curr] == 'function') {
        MODULE[curr]()
      }
    })
  }
})()
