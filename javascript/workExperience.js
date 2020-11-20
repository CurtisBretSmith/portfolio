let activeJob;

function showDefault() {
    activeJob = 1;
    let button = document.getElementById('job' + activeJob);
    button.style.backgroundColor = "var(--lightBlue)";
    button.style.color = "white";
    let detail = document.getElementById('job' +  activeJob + 'Details');
    detail.style.display = "block";
}

function showJob1(){
    let activeButton = document.getElementById('job' + activeJob);
    activeButton.style.backgroundColor = "transparent";
    activeButton.style.color = "black";
    let activeDetail = document.getElementById('job' + activeJob + 'Details');
    activeDetail.style.display = "none";
    activeJob = 1;
    let newActiveButton = document.getElementById('job' + activeJob);
    newActiveButton.style.backgroundColor = "var(--lightBlue)";
    newActiveButton.style.color = "white";
    let newActiveDetail = document.getElementById('job' + activeJob + 'Details');
    newActiveDetail.style.display = "block";
}

function showJob2(){
    let activeButton = document.getElementById('job' + activeJob);
    activeButton.style.backgroundColor = "transparent";
    activeButton.style.color = "black";
    let activeDetail = document.getElementById('job' + activeJob + 'Details');
    activeDetail.style.display = "none";
    activeJob = 2;
    let newActiveButton = document.getElementById('job' + activeJob);
    newActiveButton.style.backgroundColor = "var(--orange)";
    newActiveButton.style.color = "white";
    let newActiveDetail = document.getElementById('job' + activeJob + 'Details');
    newActiveDetail.style.display = "block";
}

function showJob3(){
    let activeButton = document.getElementById('job' + activeJob);
    activeButton.style.backgroundColor = "transparent";
    activeButton.style.color = "black";
    let activeDetail = document.getElementById('job' + activeJob + 'Details');
    activeDetail.style.display = "none";
    activeJob = 3;
    let newActiveButton = document.getElementById('job' + activeJob);
    newActiveButton.style.backgroundColor = "var(--red)";
    newActiveButton.style.color = "white";
    let newActiveDetail = document.getElementById('job' + activeJob + 'Details');
    newActiveDetail.style.display = "block";
}