// Create a canvas
const svg = d3.select("#chart-area").append("svg")
  .attr("width", 500)
  .attr("height", 400);

// add a rectangle shape to canvas created
svg.append("rect")
  .attr("x", 100)
  .attr("y", 100)
  .attr("width", 200)
  .attr("height", 200)
  .attr("fill", "#e5e5e5")

// append a circle to the canvas
svg.append("circle")
  .attr("cx", 200)
  .attr("cy", 200)
  .attr("r", 100)
  .attr("fill", "blue");

// append a line to the canvas
svg.append("line")
  .attr("x1", "350")
  .attr("y1", "100")
  .attr("x2", "500")
  .attr("y2", "100")
  .attr("stroke", "red")
  .attr("stroke-width", 1)





