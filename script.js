const pages = {
    "home": "index.html",
    "variable inductor": "var_inductor.html",
    "variable condenser": "var_condenser.html",
    "thomson wattmeter": "wattmeter.html",
    "precision condenser": "precision_condenser.html"
  
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