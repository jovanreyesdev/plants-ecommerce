type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  group: string;
  discountedPrice: number;
  isDiscounted: boolean;
  isSale: boolean;
}

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getProducts(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getProducts = async (req, res) => {
  try {
    const results: Product[] = [
      {
        id: 1,
        name: 'Standard Gerberra, using Standard Gerberra',
        price: 95,
        discountedPrice: 75,
        image: 'plant_1.png',
        group: 'Tree Garden',
        isDiscounted: true,
        isSale: false,
      },
      {
        id: 2,
        name: 'Standard Gerberra, using Standard Gerberra',
        price: 95,
        discountedPrice: 75,
        image: 'plant_2.png',
        group: 'Tree Garden',
        isDiscounted: true,
        isSale: true,
      },
      {
        id: 3,
        name: 'Standard Gerberra, using Standard Gerberra',
        price: 95,
        discountedPrice: 75,
        image: 'plant_3.png',
        group: 'Tree Garden',
        isDiscounted: true,
        isSale: false,
      },
      {
        id: 4,
        name: 'Standard Gerberra, using Standard Gerberra',
        price: 95,
        discountedPrice: 75,
        image: 'plant_4.png',
        group: 'Tree Garden',
        isDiscounted: true,
        isSale: false,
      },
      {
        id: 5,
        name: 'Standard Gerberra, using Standard Gerberra',
        price: 95,
        discountedPrice: 75,
        image: 'plant_5.png',
        group: 'Tree Garden',
        isDiscounted: true,
        isSale: false,
      },
      {
        id: 6,
        name: 'Standard Gerberra, using Standard Gerberra',
        price: 95,
        discountedPrice: 75,
        image: 'plant_6.png',
        group: 'Tree Garden',
        isDiscounted: true,
        isSale: true,
      },
      {
        id: 7,
        name: 'Standard Gerberra, using Standard Gerberra',
        price: 95,
        discountedPrice: 75,
        image: 'plant_7.png',
        group: 'Tree Garden',
        isDiscounted: true,
        isSale: false,
      },
      {
        id: 8,
        name: 'Standard Gerberra, using Standard Gerberra',
        price: 95,
        discountedPrice: 75,
        image: 'plant_8.png',
        group: 'Tree Garden',
        isDiscounted: true,
        isSale: false,
      },
      {
        id: 9,
        name: 'Standard Gerberra, using Standard Gerberra',
        price: 95,
        discountedPrice: 75,
        image: 'plant_9.png',
        group: 'Tree Garden',
        isDiscounted: true,
        isSale: false,
      },
    ];
    console.log(results);
    return res.status(200).json(results);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};