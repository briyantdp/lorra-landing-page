// Hamburger button ketika diklik, akan memunculkan nav list ke bawah

const navBtnToggle = document.querySelector(".navigation-button-toggle input");
const navItem = document.querySelector(".navbar-nav");

navBtnToggle.addEventListener("click", function () {
  navItem.classList.toggle("collapse");
});

// Mengubah background pada navbar sticky ketika discroll
const nav = document.querySelector("nav");

document.addEventListener("scroll", function () {
  if (window.scrollY >= 70) {
    nav.style.marginInline = 0;
    nav.style.backgroundColor = "#539592";
    nav.style.paddingInline = "10px";
    nav.style.transition = "all .3s ease-in";
  } else {
    nav.style.marginInline = "30px";
    nav.style.backgroundColor = "rgba(64,116,114,0)";
    nav.style.transition = "all .3s ease-in";
  }
});

// Menampilkan dan memilih value dari dropdown Location
const btnDropdown = document.querySelector(".btn-dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

btnDropdown.addEventListener("click", function () {
  dropdownMenu.classList.toggle("collapse");
});

const dropdownItemList = document.querySelectorAll(".dropdown-item");
for (const dropdownItem of dropdownItemList) {
  dropdownItem.addEventListener("click", function (e) {
    e.preventDefault();
    btnDropdown.textContent = e.target.textContent;
    dropdownMenu.classList.toggle("collapse");
  });
}

// Looping data package ke dalam section package
const packagesListData = [
  {
    namePackage: "Pastelina Hurra",
    cityPackage: "Jakarta",
    countryPackage: "Indonesia",
    imgUrl: "package-1.png",
  },
  {
    namePackage: "Kame Kinno",
    cityPackage: "Bogor",
    countryPackage: "Indonesia",
    imgUrl: "package-2.png",
  },
  {
    namePackage: "Honey Bay",
    cityPackage: "Bali",
    countryPackage: "Indonesia",
    imgUrl: "package-3.png",
  },
  {
    namePackage: "Takk Tawu",
    cityPackage: "Bandung",
    countryPackage: "Indonesia",
    imgUrl: "package-4.png",
  },
];

const packagesList = document.querySelector(".packages-list");

for (let i = 0; i < packagesListData.length; i++) {
  packagesList.innerHTML += `
    <div class="package-item">
      <h3>${packagesListData[i].namePackage}</h3>
      <p>${packagesListData[i].cityPackage}, ${packagesListData[i].countryPackage}</p>
    </div>
  `;

  const packageItem = document.querySelectorAll(".package-item");
  packageItem[i].style.backgroundImage = `linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(0, 0, 0, .4)
  ), url('./assets/images/${packagesListData[i].imgUrl}')`;
}
