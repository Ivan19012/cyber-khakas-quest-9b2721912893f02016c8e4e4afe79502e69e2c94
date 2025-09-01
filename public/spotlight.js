/* A small script to update CSS vars for spotlight effect based on cursor position */
(function(){
  const root = document.documentElement;
  document.addEventListener('pointermove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    root.style.setProperty('--x', x + '%');
    root.style.setProperty('--y', y + '%');
  }, { passive: true });
})();
