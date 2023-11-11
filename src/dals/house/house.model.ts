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
          comments: string,
        }
    >
}
