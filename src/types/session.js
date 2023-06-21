import { Model, List } from "@/types/base";
import { SessionElements } from "@/types/sessionelement";
export class Session extends Model {
    get defaults() {
        return {
            id: 0,
            title: "",
            subtitle: "",
            description: "",
            image: "",
            progress: 0,
            max_progress: 0,
            duration: "",
            course_type: 0,
            elements: new SessionElements,
            requirements: new SessionElements,
            completed: new SessionElements,
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
export class Sessions extends List {
    get model() {
        return Session;
    }
}
