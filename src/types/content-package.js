/*
{
	"id":2,
	"available":true,
	"name":"web_questionnaire",
	"version":"0.0.1",
	"author":"cp_Author",
	"therapistInvolved":false,
	"synchronousFinish":false,
	"timeout":0,
	"type":"WEBSITE",
	"translations":[],
	"resultTemplates":[
		{
		"fieldName":"result_2",
		"mandatory":true,
		"type":"STRING"
		},
		{
		"fieldName":"result_3",
		"mandatory":true,
		"type":"STRING"
		}
		,
		{
		"fieldName":"result_4",
		"mandatory":true,
		"type":"NUMBER"
		},
		{
		"fieldName":"result_5",
		"mandatory":true,
		"type":"STRING"
		},
		{
		"fieldName":"result_6",
		"mandatory":true,
		"type":"STRING"
		}
	],
	"parameters":[],
	"resources":[
		{
		"name":"default",
		"resourceId":"1849f601431-9cad4548-2ea7-443a-80c6-623703f4ef96",
		"translations":[],
		"parameters":[]
		}
	]
},
*/

import { Model, List } from "@/types/base";
export class ContentPackage extends Model {
    get defaults() {
        return { };
    }
    set defaults(id/*, title, message*/) {
        this.id = id;
        //this.title = title;
        //this.message = message;
    }
}
export class ContentPackages extends List {
    get model() {
        return ContentPackage;
    }
}
