const pages = {
    "home": "index.html",
    "variable inductor": "var_inductor.html",
    "variable condenser": "var_condenser.html",
    "thomson wattmeter": "wattmeter.html",
    "precision condenser": "precision_condenser.html",
    "otto wolff stereo decade resistance box": "otto_small.html",
    "otto wolff KFTW4": "otto_big.html",
    "weston analyzer": "weston_analyzer.html",
    "japanese anemometer showa": "anonemeter.html",
    "weston wavemeter type 174B": "wavemeter.html"

  
  };

  const searchInput = document.getElementById("searchInput");
  const suggestionList = document.getElementById("suggestionList");

  // Show suggestions as user types
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    suggestionList.innerHTML = "";

    if (query === "") {
      suggestionList.style.display = "none";
      return;
    }

    const matches = Object.keys(pages).filter(page => page.includes(query));

    if (matches.length > 0) {
      matches.forEach(match => {
        const li = document.createElement("li");
        li.classList.add("list-group-item", "list-group-item-action");
        li.textContent = match;
        li.style.cursor = "pointer";
        li.onclick = () => {
          window.location.href = pages[match];
        };
        suggestionList.appendChild(li);
      });
      suggestionList.style.display = "block";
    } else {
      suggestionList.style.display = "none";
    }
  });

  
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !suggestionList.contains(e.target)) {
      suggestionList.style.display = "none";
    }
  });

  // Handle form submission (manual entry)
  function handleSearch(event) {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    const match = Object.keys(pages).find(page => page.includes(query));
    if (match) {
      window.location.href = pages[match];
    } else {
      alert("No match found.");
    }
    return false;
  }
 
  document.querySelectorAll('.img-clickable').forEach(img => {
    img.addEventListener('click', function () {
      const imgSrc = this.getAttribute('data-bs-image');
      document.getElementById('modalImage').setAttribute('src', imgSrc);
    });
  });


  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
    });

    document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.querySelector(".ecommerce-gallery-main-img");
  const thumbnails = document.querySelectorAll(".row .col-3 img");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", function () {
      const newSrc = this.getAttribute("data-mdb-img");

      // Update the main image
      mainImage.src = newSrc;
      mainImage.alt = this.alt;

      // Remove 'active' class from all thumbnails
      thumbnails.forEach((img) => img.classList.remove("active"));

      // Add 'active' class to the clicked thumbnail
      this.classList.add("active");
    });
  });

  // Optional: zoom/lightbox effect when clicking the main image
  mainImage.addEventListener("click", function () {
    const zoomWindow = window.open("", "_blank");
    zoomWindow.document.write(`
      <html>
        <head>
          <title>${mainImage.alt}</title>
          <style>
            body { margin: 0; background: #000; display: flex; justify-content: center; align-items: center; height: 100vh; }
            img { max-width: 90%; max-height: 90%; }
          </style>
        </head>
        <body>
          <img src="${mainImage.src}" alt="${mainImage.alt}" />
        </body>
      </html>
    `);
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".fullscreen-img");

    images.forEach(img => {
      img.addEventListener("click", () => {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          img.requestFullscreen().catch(err => {
            console.error(`Error trying to enable full-screen mode: ${err.message}`);
          });
        }
      });
    });
  });

  var swiper = new Swiper(`[unique-script-id="w-w-dm-id"] .mySwiper`, {
  pagination: {
    el: `[unique-script-id="w-w-dm-id"] .swiper-pagination`,
    clickable: true,
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 50,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    890: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});

  const lightboxModal = document.getElementById('lightboxModal');
  lightboxModal.addEventListener('show.bs.modal', function (event) {
    const img = event.relatedTarget;
    const src = img.getAttribute('src');
    const caption = img.getAttribute('data-caption');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const modalTitle = document.getElementById('lightboxModalLabel');

    modalImage.src = src;
    modalCaption.textContent = caption;
    modalTitle.textContent = caption;
  });