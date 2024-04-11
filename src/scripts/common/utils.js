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
    },
    
}

export default utils;
    
export function parseDate(timecode) {
    return new Date(timecode).toLocaleDateString("de-DE", {
        // you can use undefined as first argument
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        //second: "2-digit",
    });
    
    //.toLocaleString();
}
export function calculateLineHeadPosition (ev, element) {
    const progressWidth = element.getBoundingClientRect().width
    const leftPosition = ev.target.getBoundingClientRect().left
    let pos = (ev.clientX - leftPosition) / progressWidth
  
    try {
      if (!ev.target.className.match(/^ar-line-control/)) {
        return
      }
    } catch (err) {
      return
    }
  
    pos = pos < 0 ? 0 : pos
    pos = pos > 1 ? 1 : pos
  
    return pos
  }
  
  export function convertTimeMMSS (seconds) {
    return new Date(seconds * 1000).toISOString().substr(14, 5)
  }
  
  export function getDescriptionText(item) {
    switch(item) {
      case "system-usability-scale":
        return "Scoring SUS Questionare<br><br>SUS yields a single number representing a composite measure of the overall usability of the system being studied. Note that scores for individual items are not meaningful on their own. To calculate the SUS score, first sum the score contributions from each item. Each item's score contribution will range from 0 to 4. For items 1,3,5,7,and 9 the score contribution is the scale position minus 1. For items 2,4,6,8 and 10, the contribution is 5 minus the scale position. Multiply the sum of the scores by 2.5 to obtain the overall value of SU. SUS scores have a range of 0 to 100."
      case "BDI-II":
        return "Dieser Fragebogen enthält 21 Gruppen von Aussagen.<br/><br/>Bitte lesen Sie jede dieser Gruppen von Aussagen sorgfältig durch und suchen Sie sich dann in jeder Gruppe eine Aussage heraus, die am besten beschreibt, wie Sie sich in den letzten zwei Wochen, einschließlich heute, gefühlt haben. Klicken Sie die Zahl zu der Aussage an, die Sie sich herausgesucht haben. Falls in einer Gruppe mehrere Aussagen gleichermaßen auf Sie zutreffen, wählen Sie die Aussage mit der höheren Zahl."
      case "GAD-7":
        return "Gesundheitsfragebogen für Patienten (GAD-7)"
      case "TMS":
        return "Infotext Toronto Mindfulness Scale (TMS)"
      case "demographic":
        return "Lesen Sie bitte zunächst aufmerksam die folgenden Hinweise:<br/><br/>Dieser Fragebogen dient der Erfassung einiger Merkmale zu Ihrer Person, Ihres Sprechverhaltens sowie gesundheitsbezogener Daten, die für die Untersuchung von Relevanz sind. Schreiben Sie Ihren Namen bitte nicht auf diesen Fragebogen.<br/><br/>Alle Daten werden vertraulich behandelt. Auch die Auswertung und Darstellung der erfassten Daten wird anonym erfolgen und zu keiner Zeit die Identifizierung Ihrer Person ermöglichen. Die in diesem Fragebogen abgefragten Informationen helfen uns bei der Interpretation der erhobenen Daten. Es ist daher wichtig, dass Sie die Fragen wahrheitsgemäß beantworten.<br/><br/>Bitte füllen Sie die nachstehenden freien Felder aus bzw. kreuzen Sie die jeweils auf Sie zutreffenden<br/><br/>Antwortalternativen an. Wenn Sie bereits an einer Sitzung teilgenommen und diesen Fragebogen ausgefüllt haben, überspringen Sie bitte die Abschnitte „Angaben zur Person“ und „Sprache und Region“ und füllen Sie den Fragebogen erst ab Seite 2 „Rauch- und Trinkverhalten“ aus.<br/><br/>Bei Fragen können Sie sich jederzeit an die Versuchsleitung wenden."
      case "SAM":
        return "Aktuelle Empfindung und Stimmung<br><br>Bitte kreuzen Sie für jede Reihe die Nummer unter der Figur an, die zu Ihrem aktuellen Empfinden und Ihrer aktuellen Stimmung passt."
      
      case "vr_meditation":
        return "Beschreibungstext für die {{vr_meditation}}."
    }
    return
  }

  export function getTextByLanguage(translations, i18n){
    if (!translations || translations.length == 0) return "NO TRANSLATION!"
    let lan="en";
    if(i18n.locale === "Deutsch"){
      lan= "de"
    }
    const translation = translations.find((trans)=>trans.locale ===lan);
    if(translation){
      return translation.text == null ? translation.title : translation.text
    }
  }
  
  export function getDescriptionByLanguage(translations, i18n){
    if (!translations || translations.length == 0) return "NO TRANSLATION!"
    let lan="en";
    if(i18n.locale === "Deutsch"){
      lan= "de"
    }
    const translation = translations.find((trans)=>trans.locale ===lan);
    if(translation){
      return translation.text == null ? translation.description : translation.text
    }
  }
