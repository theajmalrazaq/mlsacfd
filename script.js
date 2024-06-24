document.addEventListener("DOMContentLoaded", function () {
  const post1Container = document.getElementById("post1");
  const post2Container = document.getElementById("post2");
  const post3Container = document.getElementById("post3");

  fetch("post.json")
    .then((response) => response.json())
    .then((data) => {
      if (data.length >= 1) {
        const post1 = data[0];
        populatePost(post1, post1Container);
      }

      if (data.length >= 2) {
        const post2 = data[1];
        populatePost(post2, post2Container);
      }

      if (data.length >= 3) {
        const post3 = data[2];
        populatePost(post3, post3Container);
      }
    })
    .catch((error) => console.error("Error fetching JSON data:", error));

  function populatePost(post, container) {
    // Create elements for the post
    const divWrapper = document.createElement("div");
    divWrapper.classList.add("is-flex-direction-column");

    const img = document.createElement("img");
    img.src = post.image_url;
    img.alt = post.title;
    img.width = 100;
    img.style.borderRadius = "18px";

    const dateElem = document.createElement("h6");
    dateElem.textContent = post.date;

    const titleElem = document.createElement("h5");
    titleElem.textContent = post.title;

    const descElem = document.createElement("p");
    descElem.textContent = post.description;

    const linkPrimary = document.createElement("a");
    linkPrimary.href = post.link_primary;
    linkPrimary.textContent = "Link Primary";

    const linkSecondary = document.createElement("a");
    linkSecondary.href = post.link_secondary;
    linkSecondary.textContent = "Link Secondary";

    // Append elements to the container
    divWrapper.appendChild(img);
    divWrapper.appendChild(dateElem);
    divWrapper.appendChild(titleElem);
    divWrapper.appendChild(descElem);
    divWrapper.appendChild(linkPrimary);
    divWrapper.appendChild(linkSecondary);

    container.appendChild(divWrapper);
  }
});
