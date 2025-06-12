


  /*const items = document.querySelectorAll(".progress-item");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const item = entry.target;
        const circle = item.querySelector(".circle");
        const valueText = item.querySelector(".value");
        const percent = parseInt(item.getAttribute("data-percentage"));
        let current = 0;

        // Évite de réanimer plusieurs fois
        if (item.dataset.animated === "true") return;

        const interval = setInterval(() => {
          if (current <= percent) {
            circle.style.background = `conic-gradient(deepskyblue 0% ${current}%, #eee ${current}% 100%)`;
            valueText.textContent = current + "%";
            current++;
          } else {
            clearInterval(interval);
            item.dataset.animated = "true";
          }
        }, 20);
      }
    });
  }, {
    threshold: 0.5 // Lancer quand 50 % de l'élément est visible
  });

  items.forEach(item => observer.observe(item));
*/