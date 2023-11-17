export interface House {
    id: string;
    name: string;
    description: string;
    address: {
        street: string,
        country: string,
        country_code: string,
    },
    bedrooms: number,
    beds: number,
    reviews: Array<
        {
          _id: string,
          comments: string,
          date: Date,
        }
    >
}

export interface Review {
    comment: string;
    //reviewer: string;
  }
