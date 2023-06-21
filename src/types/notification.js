import { Model, List } from "@/types/base";
export class Notification extends Model {
    get defaults() {
        return {
            id: 0,
            title: "",
            message: "",
            hasAction: "",
            link: "",
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
export class Notifications extends List {
    get model() {
        return Notification;
    }
}
