const searchBox = document.getElementById('searchBox');
const filterLocation = document.getElementById('filterLocation');
const filterPrice = document.getElementById('filterPrice');
const properties = document.querySelectorAll('.property');

function filterProperties() {
    const searchText = searchBox.value.toLowerCase();
    const locationValue = filterLocation.value;
    const priceValue = filterPrice.value;

    properties.forEach(property => {
        const matchesSearch = property.querySelector('h3').textContent.toLowerCase().includes(searchText);
        const matchesLocation = locationValue === '' || property.dataset.location === locationValue;
        const matchesPrice = priceValue === '' || property.dataset.price === priceValue;

        if (matchesSearch && matchesLocation && matchesPrice) {
            property.style.display = 'block';
        } else {
            property.style.display = 'none';
        }
    });
}

searchBox.addEventListener('input', filterProperties);
filterLocation.addEventListener('change', filterProperties);
filterPrice.addEventListener('change', filterProperties);
