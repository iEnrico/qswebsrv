import { Model, List } from "@/types/base";
import { SessionQuestions } from "@/types/sessionquestion";
export class SessionElement extends Model {
    get defaults() {
        return {
            id: 0,
            date: "",
            title: "",
            type: 0,
            questions: SessionQuestions,
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
export class SessionElements extends List {
    get model() {
        return SessionElement;
    }
}
