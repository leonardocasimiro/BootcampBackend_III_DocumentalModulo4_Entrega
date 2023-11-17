import {ObjectId} from 'mongodb';


export interface House {
    _id: ObjectId;
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
          comment: string,
          reviewer: string;
          date: Date,
        }
    >
}

export interface Review  {
    _id: string;
    comment: string;
    reviewer: string;
    date: Date;
}
