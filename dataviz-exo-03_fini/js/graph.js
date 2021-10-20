let dataURL = "../../Dataset/Meteorite_Landings.csv";
const years = [];
const singleYear = [];
const yearCount = [];

LoadData(dataURL)
    .then(response =>{
        console.log("All data have been loaded");
        // console.log(years)
        SortDataByOccurence(years, singleYear, yearCount);
        console.log(singleYear, yearCount)
        BarGraph();
    })
    .catch(error => {
        console.error(error);
    })

async function LoadData(dataURL){
    const response  = await fetch(dataURL);
    const rawData   = await response.text();
    // console.log(rawData);
    /**
     * rawData is store as a simple text. We need to parse the CSV
     * and store each data into a readable array
     * We use the split() for that purpose https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split
     * We also remove the first rows, the header, from the data set
     */
    const data = rawData.split("\n").slice(1);
    // console.log(rows);
    /**
     * Now we can retreive each data into their own cols
     */
    data.forEach(row => {
        const columns   = row.split(',');
        const name      = columns[0];
        const recclass  = columns[1];
        const mass      = columns[2];
        const fall      = columns[3];
        const date      = columns[4];
        const year      = columns[5];
        const reclat    = columns[6];
        const reclong   = columns[7];

        years.push(year);
        // console.log(mass, year);

        //sort data and count the number of occurence
        // const singleYear    = [];
        // const yearCount     = [];
        
        // console.log(singleYear, yearCount)
    })
}

function SortDataByOccurence(data, keys, values){
    let prev;
    let array = Object.values(data);
    array.sort();

    for(let i=0; i<array.length; i++){
        if(array[i] !== prev){
            keys.push(array[i]);
            values.push(1);
        }else{
            values[values.length-1] ++;
        }
        prev = array[i];
    }
}


/**
 * Draw the data
 */
function BarGraph(){
    const ctx = document.getElementById('barGraph').getContext('2d');

    //draw a bar chart
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
        // The data for our dataset
        data: {
            labels: singleYear,
            datasets: [{
                label: 'Number of Meteorite each year',
                backgroundColor: 'rgb(92, 57, 126)',
                hoverBackgroundColor : '#ba73ff',
                borderWidth: 0,
                barThickness: 8,
                minBarLength : 3,
                data: yearCount
            },

        ]
        },

        // Configuration options go here
        options: {
            responsive: true
        }
    });
}

/************************************************************************************************************ */
let dataURL2 = "../../Dataset/Meteorite_Landings2.csv";
const years2 = [];
const singleYear2 = [];
const yearCount2 = [];

LoadData2(dataURL2)
    .then(response =>{
        console.log("All data have been loaded");
        // console.log(years)
        SortDataByOccurence2(years2, singleYear2, yearCount2);
        console.log(singleYear, yearCount)
        myGraph();
    })
    .catch(error => {
        console.error(error);
    })

async function LoadData2(dataURL2){
    const response2  = await fetch(dataURL2);
    const rawData   = await response2.text();
    // console.log(rawData);
    /**
     * rawData is store as a simple text. We need to parse the CSV
     * and store each data into a readable array
     * We use the split() for that purpose https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split
     * We also remove the first rows, the header, from the data set
     */
    const data2 = rawData.split("\n").slice(1);
    // console.log(rows);
    /**
     * Now we can retreive each data into their own cols
     */
    data2.forEach(row => {
        const columns   = row.split(',');
        const name      = columns[0];
        const recclass  = columns[1];
        const mass      = columns[2];
        const fall      = columns[3];
        const date      = columns[4];
        const year      = columns[5];
        const reclat    = columns[6];
        const reclong   = columns[7];

        years2.push(fall);
        // console.log(mass, year);

        //sort data and count the number of occurence
        // const singleYear    = [];
        // const yearCount     = [];
        
        // console.log(singleYear, yearCount)
    })
}

function SortDataByOccurence2(data, keys, values){
    let prev;
    let array = Object.values(data);
    array.sort();

    for(let i=0; i<array.length; i++){
        if(array[i] !== prev){
            keys.push(array[i]);
            values.push(1);
        }else{
            values[values.length-1] ++;
        }
        prev = array[i];
    }
}


/**
 * Draw the data
 */
function myGraph(){
    const ctx2 = document.getElementById('myGraph').getContext('2d');

    //draw a bar chart
    const chart2 = new Chart(ctx2, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: singleYear2,
            datasets: [{
                label: 'Number of Meteorite found/fall',
                backgroundColor: 'rgb(92, 57, 126)',
                hoverBackgroundColor : '#ba73ff',
                borderWidth: 0,
                barThickness: 4,
                minBarLength : 16,
                data: yearCount2
            }]
        },

        // Configuration options go here
        options: {
            responsive: true
        }
    });
};

/************************************************************************************************************ */
let dataURL3 = "../../Dataset/Meteorite_Landings3.csv";
const years3 = [];
const singleYear3 = [];
const yearCount3 = [];

LoadData3(dataURL3)
    .then(response =>{  
        console.log("All data have been loaded");
        // console.log(years)
        SortDataByOccurence3(years3, singleYear3, yearCount3);
        console.log(singleYear, yearCount)
        pieGraph();
    })
    .catch(error => {
        console.error(error);
    })

async function LoadData3(dataURL3){
    const response3  = await fetch(dataURL3);
    const rawData   = await response3.text();
    // console.log(rawData);
    /**
     * rawData is store as a simple text. We need to parse the CSV
     * and store each data into a readable array
     * We use the split() for that purpose https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split
     * We also remove the first rows, the header, from the data set
     */
    const data3 = rawData.split("\n").slice(1);
    // console.log(rows);
    /**
     * Now we can retreive each data into their own cols
     */
    data3.forEach(row => {
        const columns   = row.split(',');
        const name      = columns[0];
        const recclass  = columns[1];
        const mass      = columns[2];
        const fall      = columns[3];
        const date      = columns[4];
        const year      = columns[5];
        const reclat    = columns[6];
        const reclong   = columns[7];

        years3.push(mass);
        // console.log(mass, year);

        //sort data and count the number of occurence
        // const singleYear    = [];
        // const yearCount     = [];
        
        // console.log(singleYear, yearCount)
    })
}

function SortDataByOccurence3(data, keys, values){
    let prev;
    let array = Object.values(data);
    array.sort();

    for(let i=0; i<array.length; i++){
        if(array[i] !== prev){
            keys.push(array[i]);
            values.push(1);
        }else{
            values[values.length-1] ++;
        }
        prev = array[i];
    }
}


/**
 * Draw the data
 */
function pieGraph(){
    const ctx3 = document.getElementById('pieGraph').getContext('2d');

    //draw a bar chart
    const chart3 = new Chart(ctx3, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: singleYear3,
            datasets: [{
                label: 'Number of Meteorite and mass',
                backgroundColor: 'rgb(19, 17, 92)',
                hoverBackgroundColor : '#2e28ed',
                borderWidth: 0,
                barThickness: 4,
                minBarLength : 6,
                data: yearCount3
            }]
        },

        // Configuration options go here
        options: {
            responsive: true
        }
    });
}

/************************************************************************************************************ */
let dataURL4 = "../../Dataset/Meteorite_Landings4.csv";
const years4 = [];
const singleYear4 = [];
const yearCount4 = [];

LoadData3(dataURL4)
    .then(response =>{  
        console.log("All data have been loaded");
        // console.log(years)
        SortDataByOccurence4(years4, singleYear4, yearCount4);
        console.log(singleYear, yearCount)
        pieGraph();
    })
    .catch(error => {
        console.error(error);
    })

async function LoadData4(dataURL4){
    const response4  = await fetch(dataURL4);
    const rawData   = await response4.text();
    // console.log(rawData);
    /**
     * rawData is store as a simple text. We need to parse the CSV
     * and store each data into a readable array
     * We use the split() for that purpose https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split
     * We also remove the first rows, the header, from the data set
     */
    const data4 = rawData.split("\n").slice(1);
    // console.log(rows);
    /**
     * Now we can retreive each data into their own cols
     */
    data4.forEach(row => {
        const columns   = row.split(',');
        const name      = columns[0];
        const recclass  = columns[1];
        const mass      = columns[2];
        const fall      = columns[3];
        const date      = columns[4];
        const year      = columns[5];
        const reclat    = columns[6];
        const reclong   = columns[7];

        years4.push(mass);
        // console.log(mass, year);

        //sort data and count the number of occurence
        // const singleYear    = [];
        // const yearCount     = [];
        
        // console.log(singleYear, yearCount)
    })
}

function SortDataByOccurence4(data, keys, values){
    let prev;
    let array = Object.values(data);
    array.sort();

    for(let i=0; i<array.length; i++){
        if(array[i] !== prev){
            keys.push(array[i]);
            values.push(1);
        }else{
            values[values.length-1] ++;
        }
        prev = array[i];
    }
}


/**
 * Draw the data
 */
function pieGraph2(){
    const ctx4 = document.getElementById('pieGraph2').getContext('2d');

    //draw a bar chart
    const chart4 = new Chart(ctx4, {
        // The type of chart we want to create
        type: 'doughnut',
        // The data for our dataset
        data: {
            labels: singleYear4,
            datasets: [{
                label: 'Number of Meteorite found/fell2',
                backgroundColor: 'rgb(19, 17, 92)',
                hoverBackgroundColor : '#2e28ed',
                borderWidth: 0,
                barThickness: 4,
                minBarLength : 6,
                data: yearCount4
            }]
        },

        // Configuration options go here
        options: {
            responsive: true
        }
    });
}
