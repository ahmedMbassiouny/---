const sections = [
  {
    title: "الحضارة الفرعونية",
    places: [
      {
        href: "../related-places/GraveTut.html",
        image: "../../assets/images/places/TutGrave.png",
        alt: "مقبرة توت عنخ امون",
        title: "مقبرة توت عنخ امون",
      },
      {
        href: "../related-places/GraveTut.html",
        image: "../../assets/images/places/HatshipsutTemplate.png",
        alt: "مقبرة توت عنخ امون",
        title: "معبد حتشبسوت",
      },
      {
        href: "../related-places/GraveTut.html",
        image: "../../assets/images/places/AboSimple.png",
        alt: "مقبرة توت عنخ امون",
        title: "معبد ابو سمبل",
      },
    ],
  },
  {
    title: "الحضارة الاسلامية العثمانية",
    places: [
      {
        href: "../related-places/SalahElden.html",
        image: "../../assets/images/places/qanater.png",
        alt: "",
        title: "القناطر الخيرية",
      },
      {
        href: "../related-places/SalahElden.html",
        image: "../../assets/images/places/cairo.jpg",
        alt: "",
        title: "قلعة صلاح الدين",
      },
    ],
  },
];

function generateContent() {
  const contentContainer = document.getElementById("PlacesContainer");

  sections.forEach((section) => {
    const headerHTML = `
        <div class="row text-center align-items-center mt-5 mb-5">
          <div class="col-4 leftline">
            <span class="lineHead-line"></span>
            <span class="lineHead"></span>
          </div>
          <div class="col-4">
            <h3>${section.title}</h3>
          </div>
          <div class="col-4 rightline">
            <span class="lineHead-line"></span>
            <span class="lineHead"></span>
          </div>
        </div>
      `;

    const placesHTML = section.places
      .map(
        (place) => `
        <div class="col-md-6 col-lg-4 ancient-place" style="padding: 15px;">
          <a href="${place.href}">
            <div class="place-image">
              <img src="${place.image}" class="img-fluid" alt="${place.alt}">
              <span class="place-title">${place.title}</span>
            </div>
          </a>
        </div>
      `
      )
      .join("");

    contentContainer.innerHTML += `
        ${headerHTML}
        <div class="places-container">
          <div class="places row justify-content-end">
            ${placesHTML}
          </div>
        </div>
      `;
  });
}

generateContent();
