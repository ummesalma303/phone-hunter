const loadAllPhones = async (status,brandName) => {
  const spinner = document.getElementById("spinner");
    spinner.style.display = "none";

    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName?brandName:'iphone'}`);
    const data = await response.json();
    if (status) {
         displayPhones(data.data);
    } else {
        displayPhones(data.data.slice(0, 6)); 
    }
};

const handleSearch = () => {
    const searchBox = document.getElementById("search-box").value;

  const spinner = document.getElementById("spinner");
    spinner.style.display = "block";
  setTimeout(() => {
    loadAllPhones(false,searchBox);
  }, 3000);
};

const handleShowAll = () => {
   loadAllPhones(true)
}

const displayPhones = (phones) => {
    const phonesContainer = document.getElementById("phones-container");
    document.getElementById("phones-container").innerHTML = "";

    phones.forEach(phone => {
        const { brand, phone_name,slug, image } = phone;
       const div = document.createElement('div')
       div.className ="my-4"
       div.innerHTML = `
       <div class="card bg-base-100 w-96 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src=${image}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${brand}</h2>
    <p>${phone_name}</p>
    <div class="card-actions">
      <button onclick="phoneDetails('${slug}')" class="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>
       `;
        
       phonesContainer.appendChild(div)
   });
}

const phoneDetails = async (slug) => {
     const response = await fetch(
       ` https://openapi.programming-hero.com/api/phone/${slug}`
     );
    const data = await response.json();
    showDetails(data.data)
}
const showDetails = (phone) => {



console.log(phone);
const { releaseDate, name, brand, image } = phone;
const modalContainer = document.getElementById("modal-container");

modalContainer.innerHTML = `
    <dialog id="my_modal_1" class="modal">
  <div class="modal-box flex flex-col justify-center items-center">
  <img src=${image}>
    <h3 class="text-lg font-bold">${brand}</h3>
    <p class="py-4">${name}</p>
    <p>${releaseDate}</p>
    <div class="modal-action">
      <form method="dialog">
        
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    `;

my_modal_1.showModal();
}
loadAllPhones(false,'iphone');
