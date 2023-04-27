const svg = d3.select("#chart-area").append("svg")
  .attr("width", 500)
  .attr("height", 500);

// Data Joins
const data = [50, 40, 30, 20, 10, 5];

const circles = svg.selectAll("circle")
  .data(data);

circles.enter().append("circle")
  .attr("cx", (d, i) => (i * 100) + 100)
  .attr("cy", () => 250)
  .attr("r", (d) => d)
  .attr("fill", "red");