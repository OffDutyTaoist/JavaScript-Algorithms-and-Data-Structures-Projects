const inventory = [];

function findProductIndex(productName) {
    const nameLower = productName.toLowerCase();
    return inventory.findIndex(item => item.name === nameLower);
}

function addProduct(product) {
    const nameLower = product.name.toLowerCase();
    const index = findProductIndex(nameLower);

    if (index !== -1) {
        inventory[index].quantity += product.quantity;
        console.log(`${nameLower} quantity updated`);
    } else {
        inventory.push({ name: nameLower, quantity: product.quantity });
        console.log(`${nameLower} added to inventory`);
    }
}

function removeProduct(productName, quantity) {
    const nameLower = productName.toLowerCase();
    const index = findProductIndex(nameLower);

    if (index === -1) {
        console.log(`${nameLower} not found`);
        return;
    }

    if (inventory[index].quantity < quantity) {
        console.log(`Not enough ${nameLower} available, remaining pieces: ${inventory[index].quantity}`);
        return;
    }

    inventory[index].quantity -= quantity;

    if (inventory[index].quantity === 0) {
        inventory.splice(index, 1);
    } else {
        console.log(`Remaining ${nameLower} pieces: ${inventory[index].quantity}`);
    }
}
