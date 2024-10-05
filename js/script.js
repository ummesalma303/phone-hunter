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

/*
{
    "brand": "Apple ",
    "phone_name": "iPhone 13 mini",
    "slug": "apple_iphone_13_mini-11104",
    "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg"

*/
const displayPhones = (phones) => {
    const phonesContainer = document.getElementById("phones-container");
   phones.forEach(phone => {
       const div = document.createElement('div')
       div.className ="my-4"
       div.innerHTML = `
       <div class="card bg-base-100 w-96 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
       `;
console.log(phone);
       phonesContainer.appendChild(div)
   });
}
loadAllPhones();
