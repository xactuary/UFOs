// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// we imported the data with the name "data" so that goes in function parens as the argument
function buildTable(data) {
// need to clear table first before loading new stuff
    tbody.html("");

// tbody references the table, the parens with empty quotes is an empty string so it loads that in
// use forEach function to perform something on elements in array
    data.forEach((dataRow) => {
    // find the tbody EventTarget, and add a table row which is tr
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td"); 
            cell.text(val);
        }
      );
    });
}
//
// Start new function to click a button for user input
function handleClick(data) {
    let date = d3.select("#datetime").property("value"); 
    let filteredData = tableData; 
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    buildTable(filteredData);
};
//
// attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
// build the table when the page loads
buildTable(tableData);
