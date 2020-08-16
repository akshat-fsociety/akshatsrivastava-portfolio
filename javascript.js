let pre = document.getElementById('loading');
  function myFunction(){
    pre.style.display = 'none';
  }
    AOS.init({
      duration: 1200,
    });
    window.addEventListener('load', AOS.refresh)

    ToxProgress.create();
    ToxProgress.animate();