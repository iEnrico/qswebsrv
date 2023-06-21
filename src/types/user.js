/*
{
    "id":"e1bdbe37-8af9-4859-8bbb-a0b5765237cd",
    "firstName":"Benjamin",
    "lastName":"Oster",
    "fullName":"Benjamin Oster",
    "email":"benjamin.oster@nuromedia.com",
    "fhirResourceId":null,
    "roles":["ADMIN"],
    "patients":[]
}
*/

import { Model, List } from "@/types/base";
export class User extends Model {
    get defaults() {
        return { };
    }
    set defaults(id/*, title, message*/) {
        this.id = id;
        //this.title = title;
        //this.message = message;
    }
}
export class Users extends List {
    get model() {
        return User;
    }
}
