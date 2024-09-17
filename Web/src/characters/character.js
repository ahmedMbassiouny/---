const images = [
  "../../assets/images/شخصيات تاريخية/intro/sadat.png", // First character image
  "../../assets/images/شخصيات تاريخية/intro/mo-a.png", // Second character image
  "../../assets/images/شخصيات تاريخية/intro/tut-photo.png", // Third character image
];

let currentImageIndex = 0;
const characterImage = document.getElementById("character-image");

// Function to change the image with a transition effect
function changeImage() {
  characterImage.style.opacity = 0; // Start by fading out

  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    characterImage.src = images[currentImageIndex];
    characterImage.style.opacity = 1; // Fade back in
  }, 1000); // 1000 ms matches the transition duration in CSS
}

// Change image every 5 seconds (5000 ms)
setInterval(changeImage, 3300);

const charactersData = [
  {
    name: "توت عنخ امون",
    title: "الملك الطفل",
    imageSrc: "../../assets/images/شخصيات تاريخية/tut.png",
    dateOfBirth: "١٣٣٢-١٣٢٢",
    brief:
      "ولد توت عنخ آمون، ومن المرجح أنه كان ابنًا لأخناتون، ويُعتقد أنه مومياء المقبرة رقم ٥٥",
    showAge: true,
    apiName: "tut",
  },
  {
    name: "محمد علي باشا",
    title: "مؤسس مصر الحديثة",
    imageSrc: "../../assets/images/شخصيات تاريخية/mohamed_ali.jpg",
    dateOfBirth: "۱۷٦۹-۱۸٤۹",
    brief:
      "مؤسس الأسرة العلوية، وحاكم مصر بين عامي ۱۸۰٥ إلى ۱۸٤۸، قضى على المماليك وأسس دولة قوية",
    showAge: false,
    apiName: "mohammedAli",
  },
  {
    name: "صلاح الدين الأيوبي",
    title: "الملك الناصر",
    imageSrc: "../../assets/images/شخصيات تاريخية/saladin.webp",
    dateOfBirth: "١١٣٨-١١٩٣",
    brief:
      "كان صلاح الدين الأيوبي من أعظم القادة العسكريين، واشتهر باستعادة القدس من الصليبيين وتأسيس الدولة الأيوبية.",
    showAge: false,
    apiName: "saladin",
  },
  {
    name: "حتشبسوت",
    title: "درة الأميرات",
    imageSrc: "../../assets/images/شخصيات تاريخية/hatshepsut.jpg",
    dateOfBirth: "١٤٧٩-١٤٥٨",
    brief:
      "كانت حتشبسوت من أشهر الملكات في مصر القديمة، وحكمت كفرعون خلال الأسرة الثامنة عشر.",
    showAge: true,
    apiName: "hatshepsut",
  },
  {
    name: "رمسيس الثاني",
    title: "رمسيس الأكبر",
    imageSrc: "../../assets/images/شخصيات تاريخية/ramses.jpg",
    dateOfBirth: "١٢٧٩-١٢١٣",
    brief:
      "رمسيس الثاني كان من أشهر فراعنة الأسرة التاسعة عشر، وقاد العديد من الحملات العسكرية لتوسيع نفوذ مصر.",
    showAge: true,
    apiName: "ramses",
  },
  {
    name: "المعز لدين الله الفاطمي",
    title: "مؤسس الدولة الفاطمية في مصر",
    imageSrc: "../../assets/images/شخصيات تاريخية/almuizz.jpg",
    dateOfBirth: "٩٣٢-٩٧٥",
    brief:
      "كان المعز لدين الله الفاطمي أول خليفة فاطمي يحكم مصر، وقد أسس القاهرة وجعلها عاصمة الدولة الفاطمية.",
    showAge: false,
    apiName: "almuizz",
  },
  {
    name: "أنور السادات",
    title: "رئيس مصر الثالث",
    imageSrc: "../../assets/images/شخصيات تاريخية/sadat.jpg",
    dateOfBirth: "١٩١٨-١٩٨١",
    brief:
      "أنور السادات كان رئيس مصر من ١٩٧٠ حتى اغتياله في ١٩٨١، وهو بطل حرب أكتوبر ١٩٧٣ وصاحب مبادرة السلام مع إسرائيل.",
    showAge: false,
    apiName: "sadat",
  },
  {
    name: "جمال عبد الناصر",
    title: "رئيس مصر الثاني",
    imageSrc: "../../assets/images/شخصيات تاريخية/gamal.jpg",
    dateOfBirth: "١٩١٨-١٩٧٠",
    brief:
      "جمال عبد الناصر قاد ثورة ١٩٥٢، وكان رئيسًا لجمهورية مصر العربية من عام ١٩٥٦ حتى وفاته في عام ١٩٧٠.",
    showAge: false,
    apiName: "gamal",
  },
  {
    name: "نجيب محفوظ",
    title: "أديب نوبل",
    imageSrc: "../../assets/images/شخصيات تاريخية/naguib.jpg",
    dateOfBirth: "١٩١١-٢٠٠٦",
    brief:
      "نجيب محفوظ هو كاتب مصري شهير حصل على جائزة نوبل في الأدب عام ١٩٨٨، واشتهر برواياته الواقعية التي تناولت الحياة الاجتماعية والسياسية في مصر.",
    showAge: false,
    apiName: "naguib",
  },
];

const container = document.querySelector(".characters-container");

charactersData.forEach((character) => {
  const characterElement = `    
    <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
      <div class="profile">
        <div class="ch-img">
          <img src="${character.imageSrc}" class="img-fluid" alt="${character.name}" />
        </div>
        <div class="caption">
          <div class="info d-flex flex-column justify-content-center">
            <h3 title="${character.name}">${character.name}</h3>
            <h5 title="${character.title}">${character.title}</h5>
          </div>
          <div class="talkTo">
            <a href="../chat/chat.html" onclick="setCharacterData({
              name: '${character.name}',
              title: '${character.title}',
              imageSrc: '${character.imageSrc}',
              dateOfBirth: '${character.dateOfBirth}',
              brief: '${character.brief}',
              showAge: ${character.showAge},
              apiName: '${character.apiName}'
            })">
              تحدث معه
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML += characterElement;
});

function setCharacterData(character) {
  sessionStorage.setItem("characterName", character.name);
  sessionStorage.setItem("characterTitle", character.title);
  sessionStorage.setItem("characterImage", character.imageSrc);
  sessionStorage.setItem("characterDate", character.dateOfBirth);
  sessionStorage.setItem("characterBrief", character.brief);
  sessionStorage.setItem("showAge", character.showAge);
  sessionStorage.setItem("ApiCharacterName", character.apiName);
}
