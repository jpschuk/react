const data = [
    {
        id: 1,
        title: "inodoro de loza",
        price: 10000,
        stock: 2,
        category: "loza",
        detail: "inodoro enlozado de la linea capea  andina",
        img: "/assets/img/inodoro.png",
    },

    {
        id: 2,
        title: "griferia monocomando",
        price: 115000,
        stock: 3,
        category: "griferia",
        detail: "griferia monocomando para cocina FV",
        img: "/assets/img/griferiamonocomando.png",
    },

    {
        id: 3,
        title: "tanque agua",
        price: 13000,
        stock: 5,
        category: "tanque",
        detail: "tanque de agua de 500 litros tricapa",
        img: "/assets/img/tanque.png",
    },

    {
        id: 4,
        title: "mesada acero",
        price: 18000,
        stock: 6,
        category: "mesada",
        detail: "mesada de acero inoxidable de 1,60x62cm",
        img: "/assets/img/mesada.png",
    },

    {
        id: 5,
        title: "bomba de agua",
        price: 110000,
        stock: 9,
        category: "bomba",
        detail: "bomba de agua periferica de 1/2HP,con proteccion termica",
        img: "/assets/img/bombagua.png",
    },

    {
        id: 6,
        title: "caño ppm",
        price: 1600,
        stock: 7,
        category: "caño",
        detail: "caño de ppm 1/2 tubileno",
        img: "/assets/img/tubileno.png",
    },

    {
        id: 7,
        title: "caño awaduct",
        price: 2300,
        stock: 50,
        category: "cañoCloaca",
        detail: "caño para cloaca de polipropileno de 110",
        img: "/assets/img/awaduct110.png",
    },
    {
        id: 8,
        title: "accesorios para  baño",
        price: 2100,
        stock: 12,
        category: "baño",
        detail: "juego de 5 piezas de accesorios de loza para baño",
        img: "/assets/img/accloza.png",
    },
];

function getItems() {
    return new Promise((resolve, reject) => {
            resolve(data);
    });
}

export default function getSingleItem(id) {
    return new Promise((resolve, reject) => {
            for (let i = 0; i <= data.length; i++) {
                if (data[i].id === parseInt(id)) {
                    resolve(data[i]);
                }
            }
    });
}
export { getItems };
