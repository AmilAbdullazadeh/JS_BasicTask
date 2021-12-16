function Task(height, width, symbol) {
    let body = document.getElementsByTagName('body')[0];
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    let tr, td;

    for (let i = 0; i < height; i++) {
        tr = document.createElement('tr');
        tbody.appendChild(tr);

        for (let j = 0; j < width; j++) {
            td = document.createElement('td');
            if (j === 0 || j === width - 1 || i === 0 || i === height - 1) {
                td.innerHTML = `${symbol}`;
            } else {
                td.innerHTML = "";
            }
            tr.appendChild(td);
        }

    }
    table.appendChild(tbody);
    body.appendChild(table);
}

Task(10, 15, "*");
