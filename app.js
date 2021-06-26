var userArr = [];

function getData() {
    var userInput = document.getElementById("userInput").value;
    userArr.push(userInput);
    var userInput = document.getElementById("userInput").value = "";

    showData();
    return false;
}

function showData() {
    document.getElementById('showData').innerHTML = null;
    userArr.forEach((value, index) => {
        var html = `
        <div class="show col-md-8">
        <div class="innerDiv">
            <div>
                <p class="pra">${value}</p>
            </div>
            <div>
            <div>
            <button onclick="edit(${index})"><i class="fas fa-pen-square fa-2x"></i></button>
            </div>
            <div>
            <button onclick="dlt(${index})"><i class="fas fa-trash-alt fa-2x"></i></button>
            </div>
            </div>
            </div>
        </div>
        `
        document.getElementById('showData').innerHTML += html
        // console.log(value)
    })
}

function dlt(i) {
    userArr.splice(i, 1);
    showData();
}

function edit(i) {
    var promt = prompt("Enter new task..", userArr[i]);

    if (promt === "" || promt === null) {
        alert("Please Enter Task")
    } else {
        userArr[i]
        userArr.splice(i, 1, promt);
    }
    showData()
}