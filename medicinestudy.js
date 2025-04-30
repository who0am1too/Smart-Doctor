function filterMedicines(query) {
    const lowerQuery = query.toLowerCase();
    medicineItems.forEach(item => {
        const brand = item.dataset.brand.toLowerCase();
        const generic = item.dataset.generic.toLowerCase();
        const fullName = item.dataset.name.toLowerCase();
        if (lowerQuery && (brand === lowerQuery || generic === lowerQuery || fullName === lowerQuery)) {
            item.classList.remove('hidden');
        } else if (lowerQuery) {
            item.classList.add('hidden');
        } else {
            item.classList.remove('hidden');
        }
    });
}