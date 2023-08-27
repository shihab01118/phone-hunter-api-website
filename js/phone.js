const loadPhones = async (searchText) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await response.json();
    const phones = data.data;
    displayPhones(phones);
}

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phones-container');
    phoneContainer.textContent = '';

    const showAllContainer = document.getElementById('show-all-container');
    if (phones.length > 12) {
        showAllContainer.classList.remove('hidden');
    }
    else {
        showAllContainer.classList.add('hidden');
    }

    phones = phones.slice(0, 12);

    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = `bg-gray-100 shadow-xl p-5 rounded-xl`;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="${phone.phone_name}" class="block mx-auto mb-2"/></figure>
        <div class="text-center space-y-3">
            <h2 class="text-2xl font-semibold">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    })
    toggleLoadingSpinner(false);
}

const handleSearch = () => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText)
}

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading === true) {
        loadingSpinner.classList.remove('hidden');
    }
    else {
        loadingSpinner.classList.add('hidden');
    }
}
