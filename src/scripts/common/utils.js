import Papa from 'papaparse'

var utils = {
    csvToJSON: async function (input) {
        console.log("Input CSV: " + input);
        const result = Papa.parse(input);
        console.log("Output JSON: " + result);
        return result;
        /*
        Papa.parse(input, {
            error: function(error) {
                console.error("Output JSON error: " + error);
            },
            complete: function(results) {
                console.log("Output JSON: " + results.data);
            }
        });*/
    },
    jsonToCSV: async function (input) {
        //var vm = this;
        console.log("Input JSON: " + input);
        const result = Papa.unparse(input)
        console.log("Output CSV: " + result);
        return result;
        /*
        Papa.unparse(input, {
            error: function(error) {
                console.error("Output CSV error: " + error);
            },
            complete: function(results) {
                console.log("Output CSV: " + JSON.stringify(results.data));

                vm.csvToJSON(results.data)
            }
        });*/
    }
}

export default utils;
    