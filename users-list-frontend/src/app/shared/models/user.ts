export interface User {
    id: Number;
    name: String;
    email: String;
    address: {
        street: String;
        suite: String;
        city: String;
        zipcode: String;
        geo: {
            lat: String
            lang: String;
        }
    };
    phone: String;
    website: String;
    company: {
        type: Object,
        name: String;
        catchPhrase: String;
        bs: String
    };
}