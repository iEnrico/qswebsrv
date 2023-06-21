import { Model, List } from "@/types/base";
import { NoteEntrys } from "@/types/noteentry";
export class Note extends Model {
    get defaults() {
        return {
            id: 0,
            title: "",
            date: "",
            icon: "",
            entries: NoteEntrys,
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
export class Notes extends List {
    get model() {
        return Note;
    }
}
