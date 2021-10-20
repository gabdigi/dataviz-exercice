
let colors1 = ["red", "blue", "green", "cyan", "orange", "yellow", "green","#3399ff", "#cc99ff", 
                "#99ff99", "#ffffcc", "#ff6600","#993399", "#00cc00", "#66ffcc","#ff6600","#ff99ff","#9999ff"
                , "#cc6600","#ff6666"];

function barGraph(canvasID, labels, title, values){
    const ctx = document.getElementById(canvasID).getContext('2d');
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: labels,
            datasets: [{
                label: title,
                backgroundColor: colors1,
                borderColor: colors1,
                data: values
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}

function barGraph2(canvasID, labels, title, values){
    const ctx = document.getElementById(canvasID).getContext('2d');
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',
    
        // The data for our dataset
        data: {
            labels: labels,
            datasets: [{
                label: title,
                backgroundColor: colors1,
                borderColor: colors1,
                data: values
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}