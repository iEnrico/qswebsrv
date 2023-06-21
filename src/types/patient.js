import { Model, List } from "@/types/base";
export class Patient extends Model {
    get defaults() {
        return {
            id: 0,
            text: "",
            date: 0,
            icon: "",
            sessions: [],
            notes: [],
        };
    }
    set defaults(id/*, title, message, hasAction, link*/) {
        this.id = id;
        //this.title = title;
        //this.message = message;
        //this.hasAction = hasAction;
        //this.link = link;
    }
}
export class Patients extends List {
    get model() {
        return Patient;
    }
}
