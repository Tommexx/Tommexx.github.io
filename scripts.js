function greeting()
{
    var text;  
    var datum = new Date();
    var hodiny = datum.getHours();
    if(hodiny<10)
    {
        text = "Dobré ráno";
    }
    console.log(datum);

}
 const items = document.querySelectorAll('.item');

  function updateOpacity() {
    const centerY = window.innerHeight / 2;

    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      const itemCenterY = rect.top + rect.height / 2;

      // Distance from center of viewport
      const distance = Math.abs(centerY - itemCenterY);

      // Max distance after which opacity is minimum
      const maxDistance = window.innerHeight / 2;

      // Calculate opacity: closer to center = 1, farther = 0.2
      let opacity = 1 - (distance / maxDistance);
      if (opacity < 0.2) opacity = 0.2;

      item.style.opacity = opacity;
    });
  }

  window.addEventListener('scroll', updateOpacity);
  window.addEventListener('resize', updateOpacity);

  // Initial call
  updateOpacity();
