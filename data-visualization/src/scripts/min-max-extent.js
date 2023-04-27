const gradesData = [{
  grade: 'S',
  value: 10
}, {
  grade: 'A',
  value: 9
}, {
  grade: 'B',
  value: 8
}, {
  grade: 'C',
  value: 7
}, {
  grade: 'D',
  value: 6
}, {
  grade: 'E',
  value: 5
}, {
  grade: 'F',
  value: 4
}];

const min = d3.min(gradesData, d => d.value);
const max = d3.max(gradesData, d => d.value);
const extent = d3.extent(gradesData, d => d.value);
const grades = gradesData.map(d => d.grade);

const yAxis = d3.scaleLinear()
  .domain([
    min,// ideally 0 should be used
    max
  ])
  .range([0, 400]);

const xAxis = d3.scaleBand()
  .domain(grades)
  .range([0,400])

const svg = d3.select('#chart-area').append('svg')
  .attr('width', 500)
  .attr('height', 500)

const rects = svg.selectAll('rect').data(gradesData);

rects.enter().append('rect')
  .attr('x', d => xAxis(d.grade))
  .attr('y', 50)
  .attr('height', d => yAxis(d.value))
  .attr('width', 50)
  .attr("fill", "#ebebeb");