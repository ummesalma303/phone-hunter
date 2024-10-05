const loadAllPhones = async (status,brandName) => {
  const spinner = document.getElementById("spinner");
    spinner.style.display = "none";

    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName?brandName:'iphone'}`);
    const data = await response.json();
console.log(data);
    if (status) {
         displayPhones(data.data);
    } else {
        displayPhones(data.data.slice(0, 6)); 
    }
};

const handleSearch = () => {
  const spinner = document.getElementById("spinner");
    spinner.style.display = "block";

    const searchBox = document.getElementById("search-box").value;
    
  setTimeout(() => {
    loadAllPhones(false,searchBox);
  }, 3000);
};

const handleShowAll = () => {
   loadAllPhones(true)
}

const displayPhones = (phones) => {
    const phonesContainer = document.getElementById("phones-container");
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
      <button class="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>
       `;
console.log(phone);
       phonesContainer.appendChild(div)
   });
}
loadAllPhones(false,'iphone');
