// Book

let currentPage = 1;
let myBook = document.getElementById("myBook");

function toggleClass(e, toggleClassName) {
  if (e.className.includes(toggleClassName)) {
    e.className = e.className.replace(" " + toggleClassName, "");
  } else {
    e.className += " " + toggleClassName;
  }
}

function movePage(e, page) {
  if (page == currentPage) {
    currentPage += 2;
    toggleClass(e, "left-side");
    toggleClass(e.nextElementSibling, "left-side");
    if (currentPage == 3) {
      myBook.style.width = "447px";
    }
  } else if ((page = currentPage - 1)) {
    currentPage -= 2;
    toggleClass(e, "left-side");
    toggleClass(e.previousElementSibling, "left-side");
  }
  if (currentPage == 1) {
    myBook.style.width = "223.5px";
  }
}

// Introduction
const IntroductionData = [
  {
    title: "فكرة الموقع",
    description:
      "يهدف الموقع إلى تقديم تجربة تفاعلية فريدة تجمع بين التكنولوجيا الحديثة والتاريخ العريق لتسليط الضوء على الشخصيات المصرية البارزة.",
  },
  {
    title: "التحدث مع الشخصيات",
    description:
      "يمكنك الآن التفاعل والتحدث مع شخصيات تاريخية عظيمة مثل توت عنخ آمون وصلاح الدين وغيرهم في تجربة رقمية شيقة.",
  },
  {
    title: "التفاعل مع الأماكن",
    description:
      "اكتشف تاريخ مصر العريق من خلال التجول الافتراضي في أشهر الأماكن التاريخية والمعالم الأثرية في العصور المختلفة.",
  },
];

const introTextBoxContainer = document.querySelector(".intro-text-boxs");

IntroductionData.forEach((section) => {
  const sectionElement = `
    <div class="intro-text-box mt-1 mb-3 d-flex align-items-center">
      <div class="text-info">
        <h3 class="fw-bold">${section.title}</h3>
        <p>${section.description}</p>
      </div>
    </div>
  `;
  introTextBoxContainer.innerHTML += sectionElement;
});

// Ages Characters

const agesData = [
  {
    age: "العصر الفرعوني",
    description:
      "أبرز الشخصيات من مصر القديمة، مثل توت عنخ آمون ورمسيس الثاني.",
  },
  {
    age: "العصر الإسلامي",
    description:
      "أبرز الشخصيات الإسلامية مثل صلاح الدين الأيوبي وأحمد بن طولون.",
  },
  {
    age: "العصر الحديث",
    description: "شخصيات من العصر الحديث مثل محمد علي باشا وجمال عبد الناصر.",
  },
];

const Agescontainer = document.querySelector("#AgeContent");
agesData.forEach((box) => {
  const boxElement = `
    <div class="col-md-4 mb-4">
      <div class="box p-3" style="background: var(--primary-bg); border-radius: 10px;">
        <h3 class="fw-bold text-uppercase" style="color: var(--accent-color); border-bottom: 3px solid var(--primary-color); padding-bottom: 10px;">
          ${box.age}
        </h3>
        <p>${box.description}</p>
      </div>
    </div>
  `;
  Agescontainer.innerHTML += boxElement;
});

// PlacesData

const placesContentData = [
  {
    title: "العصر الفرعوني",
    description: "أبرز الأماكن مثل الأهرامات، معبد الكرنك، ووادي الملوك.",
  },
  {
    title: "العصر الإسلامي",
    description:
      "أبرز الأماكن مثل مسجد ابن طولون، قلعة صلاح الدين، ومسجد السلطان حسن.",
  },
  {
    title: "العصر الحديث",
    description: "أبرز الأماكن مثل قصر عابدين، قصر المنتزه، وبرج القاهرة.",
  },
];

const PlacesDataContainer = document.getElementById("placesContent");

placesContentData.forEach((item) => {
  const contentElement = `
    <div class="col-md-4 mb-4">
      <div class="box p-3" style="background: var(--secondary-bg); border-radius: 10px;">
        <h3 class="fw-bold text-uppercase" style="color: var(--accent-color); border-bottom: 3px solid var(--primary-color); padding-bottom: 10px;">
          ${item.title}
        </h3>
        <p>${item.description}</p>
      </div>
    </div>
  `;

  PlacesDataContainer.innerHTML += contentElement;
});

const goalsData = [
  {
    title: "تعزيز الفهم",
    description:
      "تعزيز الفهم الثقافي والتاريخي عبر تقديم معلومات دقيقة ومحادثات تفاعلية.",
  },
  {
    title: "تجربة تعليمية",
    description:
      "تقديم تجربة تعليمية ممتعة من خلال تفاعل مباشر مع شخصيات من الماضي.",
  },
  {
    title: "تكنولوجيا مبتكرة",
    description:
      "استخدام الذكاء الاصطناعي لإنشاء حوارات فريدة مع شخصيات تاريخية.",
  },
];

const gaolsContainer = document.getElementById("goals");

goalsData.forEach((goal) => {
  const goalElement = `
    <div class="col-md-4 mb-4">
      <div class="box p-3" style="background: var(--primary-bg); border-radius: 10px;">
        <h3 class="fw-bold text-uppercase" style="color: var(--accent-color); border-bottom: 3px solid var(--primary-color); padding-bottom: 10px;">
          ${goal.title}
        </h3>
        <p>${goal.description}</p>
      </div>
    </div>
  `;

  gaolsContainer.innerHTML += goalElement;
});

AOS.init();
