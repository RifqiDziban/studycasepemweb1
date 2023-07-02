var zoomWeb = document.getElementById('zoom-web');
    var initialTop = zoomWeb.offsetTop;
    var initialLeft = zoomWeb.offsetLeft;
    
    function updateZoomPosition() {
      var scrollTop = window.offsetTop || document.documentElement.scrollTop;
      var scrollLeft = window.offsetLeft|| document.documentElement.scrollLeft;
      zoomWeb.style.top = initialTop - scrollTop + 'px';
      zoomWeb.style.left = initialLeft - scrollLeft + 'px';
    }
    
    window.addEventListener('scroll', updateZoomPosition);
 