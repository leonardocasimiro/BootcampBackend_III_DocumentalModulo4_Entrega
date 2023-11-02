/*
import { House } from "./dals/house/index.js";

export interface DB_house {
  houses: House[];
}
*/

let mockHouseList = [
  {
    id: 1,
    name: "Ribeira Charming Duplex",
    description: "Fantastic duplex apartment with three bedrooms",
    address: {
      street: "Porto, Porto, Portugal",
      country: "Portugal",
      country_code: "PT",
    },
    bedrooms: 3,
    beds: 5,
    reviews: [
      {
        _id: "58663741",
        comments: "A casa da Ana e do Gonçalo foram o local escolhido.",
      },
      {
        _id: "62413197",
        comments: "We are french's students, we traveled some days in Porto.",
      }
    ]
  },
  {
    id: 2,
    name: "3 chambres au coeur du Plateau",
    description: "Notre appartement comporte 3 chambres avec chacune un lit queen",
    address: {
      street: "Montréal, Québec, Canada",
      country: "Montreal",
      country_code: "CA",
    },
    bedrooms: 3,
    beds: 3,
    reviews: [
      {
        _id: "58685576",
        comments: "房東姐姐人不僅漂亮還非常nice!東西都準備得很齊全,牙刷牙膏,甚至是喝水的杯子和潤膚乳都準備好了!住得非常開心!房子的地段也很好,離太子地鐵站和深水埗地鐵站都不遠,交通方便!下次去香港還想住在這裡!.",
      },
      {
        _id: "58082044",
        comments: "Vikki (the host) so considerate, transparent and generous. She was very professional yet it felt like I was travelling with home to HongKong. Her home is fully equipped and at the heart of HK.",
      }
    ]
  },
  {
    id: 3,
    name: "Casa Rural 3R Completa",
    description: "Fantastic duplex apartment with three bedrooms",
    address: {
      street: "Don Álvaro, Badajoz, España",
      country: "España",
      country_code: "ES",
    },
    bedrooms: 5,
    beds: 8,
    reviews: [
      {
        _id: "34563741",
        comments: "Muy amables, se nos pasó decirles cuantos eramos y lo solucionaron.",
      },
      {
        _id: "62411237",
        comments: "Nos encantó la piscina y billar.",
      }
    ]
  }
];

export const getHouseList = async () => {
  return mockHouseList;
};

export const getHouse = async (id) => {
  return mockHouseList.find((house) => house.id === id);
};

export const insertHouse = async (house) => {
  const id = mockHouseList.length + 1;
  const newHouse = {
    ...house,
    id,
  };

  mockHouseList = [...mockHouseList, newHouse];
  return newHouse;
};

export const updateHouse = async (id, updatedHouse) => {
  mockHouseList = mockHouseList.map((house) =>
    house.id === id
      ? {
          ...house,
          ...updatedHouse,
          id,
        }
      : house
  );
};

export const deleteHouse = async (id) => {
  mockHouseList = mockHouseList.filter((house) => house.id !== id);
  return true;
};
