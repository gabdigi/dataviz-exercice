let opendataparisAPI    = "https://opendata.paris.fr/api/records/";
let version             = "1.0/";
let question            = "search/?";
let dataset             = "dataset="+"les-1000-titres-les-plus-reserves-dans-les-bibliotheques-de-pret";
let rows                = "&rows="+1000;
let sort                = "&sort=reservations";
let facetrequest        = "&facet=";
let facets              = facetrequest+"type_de_document"+facetrequest+"auteur";

let request             = opendataparisAPI + version + question + dataset + rows + sort + facets;

let topTenLabels        = [];
let topTenCount         = [];

let topTenDocumentLabels        = [];
let topTenDocumentCount         = [];

LoadData(request)
    .then(function(response){
        console.log(response);

        let records = response.records; 
        console.log(records);
        for( let i=0; i<20; i++) {
            let titre   = records[i].fields.titre;
            let auteur  = records[i].fields.titre;

            let label   = titre+" de "+auteur;
            let count   = records[i].fields.reservations; 
            
            topTenLabels.push(label);
            topTenCount.push(count);
        }
       
        let facetsDoc = response.facet_groups[1].facets;
    for(let i=0; i<20; i++){
        let type        = facetsDoc[i].name;
        let count       = facetsDoc[i].count;

        topTenDocumentLabels.push(type);
        topTenDocumentCount.push(count);
    }
    })

    barGraph("topTenTitleChart", 
             topTenLabels, 
             "Top vingt des titres les plus réservés dans les bibliothèques de prêt", 
             topTenCount);
    
    barGraph2(   "topTenDocumentChart",
                topTenDocumentLabels,
                "Top vingt de type de document réserver",
                topTenDocumentCount);

    /*.catch(function(error){
        console.error(error)
    });*/