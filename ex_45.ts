interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow any other optional properties
}

function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
    const car: Car = {
        manufacturer: manufacturer,
        model: model
    };

    // Add additional properties from options
    options.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Call the function with required information and additional properties
const myCar = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2022]);

// Print the Object to verify all information was stored correctly
console.log(myCar);