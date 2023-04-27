// get data from an external JSON file and render bar chart using it

// read data.json file
d3.json("data/data.json").then(data => {
  // const jsonData = data.map(item => Number(item.height));
  console.log(data);
  
  const svg = d3.select("#chart-area").append("svg")
  .attr("width", 500)
  .attr("height", 500);

  const rects = svg.selectAll("rect")
    .data(data);

  const y = d3.scaleLinear()
    .domain([0, 1000])
    .range([0, 400]);
  
  const x = d3.scaleBand()
    .domain(["burj khalifa",
    "sanghai tower",
    "twin tower",
    "qutub minar",
    "empire state",
    "lallan ghar"])
    .range([0,400])
    .paddingInner(0.1)
    .paddingOuter(0.1)


  rects.enter().append("rect")
    .attr("x", (d) => x(d.name))
    .attr("y", () => 50)
    .attr("width", 50)
    .attr("height", (d) => y(Number(d.height)))
    .attr("fill", "#ebebeb");
}).catch(e => {
  console.log("Error in reading file");
});