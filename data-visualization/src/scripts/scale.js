// linear

const slinear = d3.scaleLinear()
    .domain([0, 1000])
    .range([0, 400]);

// logarithmic

const sLog = d3.scaleLog()
    .domain([0, 1000])
    .range([0, 400]);

// ordinal - It works with discrete domains. 
const sOrd = d3.scaleOrdinal()
  .domin(['asia', 'africa', 'europe', 'aus'])
  .range(['red', 'pink', 'green', 'blue'])

// band Scales - scale in x axis similar to what we did in linear scale for y axis
const sband = d3.scaleBand()
  .domain(['asia', 'africa', 'europe', 'aus'])
  .range([0, 400])
  .paddingOuter(0.3)
  .paddingInner(0.2)
