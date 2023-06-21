import { Model, List } from "@/types/base";
export class SessionQuestion extends Model {
    get defaults() {
        return {
            id: 0,
            question: "",
            hasList: false,
            list_items: [],
            hasSubtext: false,
            subtext: "",
            userRating: 0,
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
export class SessionQuestions extends List {
    get model() {
        return SessionQuestion;
    }
}
