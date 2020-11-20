let activeProject;

function showDefault() {
    activeProject = 1;
    let button = document.getElementById('project' + activeProject);
    button.style.backgroundColor = "var(--lightBlue)";
    button.style.color = "white";
    let detail = document.getElementById('project' +  activeProject + 'Details');
    detail.style.display = "block";
}

function showProject1(){
    let activeButton = document.getElementById('project' + activeProject);
    activeButton.style.backgroundColor = "transparent";
    activeButton.style.color = "black";
    let activeDetail = document.getElementById('project' + activeProject + 'Details');
    activeDetail.style.display = "none";
    activeProject = 1;
    let newActiveButton = document.getElementById('project' + activeProject);
    newActiveButton.style.backgroundColor = "var(--lightBlue)";
    newActiveButton.style.color = "white";
    let newActiveDetail = document.getElementById('project' + activeProject + 'Details');
    newActiveDetail.style.display = "block";
}

function showProject2(){
    let activeButton = document.getElementById('project' + activeProject);
    activeButton.style.backgroundColor = "transparent";
    activeButton.style.color = "black";
    let activeDetail = document.getElementById('project' + activeProject + 'Details');
    activeDetail.style.display = "none";
    activeProject = 2;
    let newActiveButton = document.getElementById('project' + activeProject);
    newActiveButton.style.backgroundColor = "var(--orange)";
    newActiveButton.style.color = "white";
    let newActiveDetail = document.getElementById('project' + activeProject + 'Details');
    newActiveDetail.style.display = "block";
}
