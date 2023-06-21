import { Model, List } from "./base.js";

export class NoteEntry extends Model {
    get defaults() {
        return {
            id: 0,
            question: "",
            hasList: false,
            list_items: [],
            hasSubtext: false,
            subtext: "",
            audiofile: "",
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
export class NoteEntrys extends List {
    get model() {
        return NoteEntry;
    }
}