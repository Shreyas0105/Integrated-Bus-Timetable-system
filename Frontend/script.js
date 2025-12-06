document.addEventListener("DOMContentLoaded", loadSchedule);

document.getElementById("busForm").addEventListener("submit", function(e){
    e.preventDefault();

    let data = new FormData();
    data.append("bus_no", document.getElementById("bus_no").value);
    data.append("source", document.getElementById("source").value);
    data.append("destination", document.getElementById("destination").value);
    data.append("departure", document.getElementById("departure").value);
    data.append("arrival", document.getElementById("arrival").value);

    fetch("backend/save_schedule.php", {
        method: "POST",
        body: data
    })
    .then(res => res.text())
    .then(response => {
        alert(response);
        loadSchedule();
        document.getElementById("busForm").reset();
    });
});

function loadSchedule(){
    fetch("backend/fetch_schedule.php")
    .then(res => res.json())
    .then(data => {
        let table = document.getElementById("scheduleTable");
        table.innerHTML = "";

        data.forEach(row => {
            table.innerHTML += `
                <tr>
                    <td>${row.bus_no}</td>
                    <td>${row.source}</td>
                    <td>${row.destination}</td>
                    <td>${row.departure}</td>
                    <td>${row.arrival}</td>
                </tr>
            `;
        });
    });
}
