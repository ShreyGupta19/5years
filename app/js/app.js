$(document).ready(function(){

  // Controls the hopping arrow animation
  $('#title-splash .arrow').mouseenter(function(){
    arrowHop();
  });

  // Controls the newsletter signup responses
  $('form#signup-form').submit(function(e){
    e.preventDefault();
    $('.mailing-list-feedback').remove();
    let jqxhr = $.ajax({
      url: "https://script.google.com/macros/s/AKfycbx4GUdH58BkYER1OmIi3zGBEpYghnEkVdkL1VxKIvrMzUQ725o/exec",
      method: "GET",
      dataType: "json",
      data: $("form#signup-form").serialize()
    }).done(function() {
      let res = document.createElement("p");
      let textnode = document.createTextNode("Thanks!");
      res.appendChild(textnode);
      res.classList.add("mailing-list-feedback");
      $("#mailing-list").append(res);
    }).fail(function() {
      let res = document.createElement("p");
      let textnode = document.createTextNode("An error occurred. Please try again later.");
      res.appendChild(textnode);
      res.classList.add("mailing-list-feedback");
      $("#mailing-list").append(res);
    });
  });

  // Handles button animation on hover
  $('#signup-button').mouseenter(function(){
    $(this).animate({'opacity': '0.75'}, 300);
  });
  $('#signup-button').mouseleave(function(){
    $(this).animate({'opacity': '1'}, 300);
  });

  makeSVGHorizStackedBarChart("#red-queens-founders-bar", [
    [
      {"label": "Male", "value": 89, "color": "#8c0c01", "lcolor": "#f7f7f8"},
      {"label": "Female", "value": 11, "color": "#da1301", "lcolor": "#000000"},
    ],
    [
      {"label": "Non-URM", "value": 94, "color": "#8c0c01", "lcolor": "#f7f7f8"},
      {"label": "URM", "value": 6, "color": "#da1301", "lcolor": "#000000"},
    ]
  ]);

  makeSVGHorizStackedBarChart("#red-queens-drf-bar", [
    [
      {"label": "Male", "value": 68, "color": "#8c0c01", "lcolor": "#f7f7f8"},
      {"label": "Female", "value": 32, "color": "#da1301", "lcolor": "#000000"},
    ],
    [
      {"label": "Non-URM", "value": 94, "color": "#8c0c01", "lcolor": "#f7f7f8"},
      {"label": "URM", "value": 6, "color": "#da1301", "lcolor": "#000000"},
    ]
  ]);

  makeSVGPieChart("#identity-male-pie", [
    {"label": "Leader", "value": 50, "color": "#0702d1", "lcolor": "#f7f7f8"},
    {"label": "Listener", "value": 22, "color": "#3b38ff", "lcolor": "#f7f7f8",
      "fontSize": 0.9, "xMargin": 1.3, "yMargin": 1.1},
    {"label": "Mediator", "value": 28, "color": "#0c08fd", "lcolor": "#f7f7f8",
      "fontSize": 0.85, "xMargin": 1.1, "yMargin": 0.9},
  ].reverse());

  makeSVGPieChart("#identity-female-pie", [
    {"label": "Leader", "value": 36, "color": "#0702d1", "lcolor": "#f7f7f8"},
    {"label": "Listener", "value": 46, "color": "#3b38ff", "lcolor": "#f7f7f8"},
    {"label": "Mediator", "value": 18, "color": "#0c08fd", "lcolor": "#f7f7f8",
      "fontSize": 0.75, "xMargin": 1.4, "yMargin": 1.1},
  ].reverse());

  makeSVGPieChart("#future-male-pie", [
    {"label": "Founder", "value": 50, "color": "#0702d1", "lcolor": "#f7f7f8"},
    {"label": "VC", "value": 35, "color": "#3b38ff", "lcolor": "#f7f7f8"},
    {"label": "Other", "value": 15, "color": "#0c08fd", "lcolor": "#f7f7f8",
      "fontSize": 0.95, "xMargin": 1.4, "yMargin": 1.2},
  ].reverse());

  makeSVGPieChart("#future-female-pie", [
    {"label": "Founder", "value": 27, "color": "#0702d1", "lcolor": "#f7f7f8",
      "fontSize": 0.9, "xMargin": 1.2, "yMargin": 0.9},
    {"label": "VC", "value": 45, "color": "#3b38ff", "lcolor": "#f7f7f8"},
    {"label": "Other", "value": 28, "color": "#0c08fd", "lcolor": "#f7f7f8",
      "xMargin": 1.1, "yMargin": 1.1},
  ].reverse());

  makeSVGPieChart("#capable-male-pie", [
    {"label": "As Capable", "value": 65, "color": "#1dd79d",
      "lcolor": "#000000", "xMargin": 0.6, "yMargin": 0.9},
    {"label": "Somewhat More Capable", "value": 35, "color": "#17ab7c",
      "lcolor": "#000000", "fontSize": 0.7, "yMargin": 1.1, "lineSpacing": 1.3},
  ].reverse());

  makeSVGPieChart("#capable-female-pie", [
    {"label": "As Capable", "value": 83, "color": "#1dd79d",
      "lcolor": "#000000", "xMargin": 0.6, "yMargin": -1.5},
    {"label": "Somewhat More Capable", "value": 17, "color": "#17ab7c",
      "lcolor": "#000000", "fontSize": 0.6, "xMargin": 1.4, "yMargin": 1.1,
      "lineSpacing": 1.6},
  ].reverse());

  makeSVGPieChart("#sexhar-scope-drf", [
    {"label": "Accurate", "value": 33, "color": "#da1301", "lcolor": "#f7f7f8",
      "fontSize": 0.9, "xMargin": 1.1},
    {"label": "Less", "value": 9, "color": "#fe3c2a", "lcolor": "#f7f7f8",
      "xMargin": 1.3, "yMargin": 1.9, "fontSize": 0.85},
    {"label": "More", "value": 58, "color": "#8c0c01", "lcolor": "#f7f7f8"},
  ].reverse())

  makeSVGPieChart("#sexhar-work-drf", [
    {"label": "No", "value": 27, "color": "#da1301", "lcolor": "#f7f7f8",
      "xMargin": 1.1, "yMargin": 1.1},
    {"label": "Yes", "value": 73, "color": "#8c0c01", "lcolor": "#f7f7f8"},
  ].reverse())

  makeSVGPieChart("#sexhar-scope-founders", [
    {"label": "Accurate", "value": 37, "color": "#da1301", "lcolor": "#f7f7f8",
      "fontSize": 0.9, "xMargin": 1.05},
    {"label": "Less", "value": 34, "color": "#fe3c2a", "lcolor": "#f7f7f8"},
    {"label": "More", "value": 29, "color": "#8c0c01", "lcolor": "#f7f7f8",
      "xMargin": 1.1, "yMargin": 1.1},
  ].reverse())

  makeSVGPieChart("#sexhar-work-founders", [
    {"label": "No", "value": 40, "color": "#da1301", "lcolor": "#f7f7f8"},
    {"label": "Yes", "value": 60, "color": "#8c0c01", "lcolor": "#f7f7f8",
      "yMargin": 2.5},
  ].reverse())
});

// Controls arrow hopping animation when mouse hovers over
let lastCall = 0;
function arrowHop() {
  let now = Date.now();
  if (lastCall + 1000 < now) {
    lastCall = now;
    $('.arrow').finish().show()
    .animate({'bottom': '-15px'}, 200, function(){
      $(this).animate({'bottom': '0px'}, 350);
    });
  }
}

function makeSVGHorizStackedBarChart(element, data) {
  WIDTH = 300;
  HEIGHT_PER_BAR = 20;
  X_SPACING = 3;
  Y_SPACING = 10;
  FONT_SIZE = 16;
  let vis = d3.select(element).append("svg:svg").data([data])
  let bars = vis.selectAll("g").data(data).enter()
    .append("svg:g")
    .selectAll("rect")
      .attr("y", (d, i) => i * 20)
    .data(function (d, i) {
        left = 0;
        d.forEach(function(dt) {
          dt.height = i;
          dt.left = left;
          left += dt.value + X_SPACING;
        });
        return d;
    }).enter()
  
  let denom = 100 + (data.length - 1) * X_SPACING
  bars.append("svg:rect")
    .style("fill", d => d.color)
    .attr("x", (d, i) => d.left * WIDTH / denom)
    .attr("y", d => d.height * (HEIGHT_PER_BAR + Y_SPACING))
    .attr("width", d => d.value * WIDTH / denom)
    .attr("height", HEIGHT_PER_BAR)
  
  let overhang = 0;
  bars.append("svg:text")
    .text(d => `${d.label} : ${d.value}%`)
    .attr("font-size", FONT_SIZE)
    .attr("x", function(d, i) {
      if (i == data.length - 1) {
        let spacing = X_SPACING * WIDTH / denom
        overhang = Math.max(overhang, this.getComputedTextLength() + spacing);
        return WIDTH + spacing;
      } else {
        let midpoint = (d.left + X_SPACING * i + d.value) * WIDTH / denom / 2;
        return midpoint - this.getComputedTextLength() / 2;
      }
    }).attr("y", d => (d.height + 1) * (HEIGHT_PER_BAR + Y_SPACING) - Y_SPACING 
      - (HEIGHT_PER_BAR - FONT_SIZE))
    .style("fill", d => d.lcolor)

  vis.attr("viewBox", `0 0 ${WIDTH + overhang} ${(HEIGHT_PER_BAR + Y_SPACING) 
    * data.length - Y_SPACING}`)
}

function makeSVGPieChart(element, data) {
  RADIUS = 100;

  let vis = d3.select(element)
    .append("svg:svg")
      .data([data])
      .attr("viewBox", `-${RADIUS} -${RADIUS} ${2*RADIUS} ${2*RADIUS}`)
      .attr("preserveAspectRatio", "xMidYMid slice")

  let arc = d3.arc().outerRadius(RADIUS).innerRadius(0);

  let pie = d3.pie().sort(null).value(function(d) { return d.value; });

  let arcs = vis.selectAll("g.slice").data(pie).enter()
    .append("svg:g")
      .attr("class", "slice")
    .on("mouseover", function(d) {
      d3.select(this).select("path").transition().style("fill",
        d3.rgb(d.data.color).brighter(2).hex())
        .duration(400).ease(d3.easeCubicOut)
    }).on("mouseout", function(d) {
      d3.select(this).select("path").transition().style("fill", d.data.color)
        .duration(400).ease(d3.easeCubicOut)
    });

  arcs.append("svg:path")
    .style("fill", d => d.data.color)
    .attr("d", arc);

  let texts = arcs.append("svg:text")
  texts.attr("text-anchor", "start").attr("dy", "0").attr("font-size", "22");

  texts.each(function(d) {
    let fontSize = d.data.fontSize || 1.0
    let lineSpacing = d.data.lineSpacing || 1.1
    let percentSpacing = lineSpacing + 0.2
    for (var [idx, word] of d.data.label.split(" ").entries()) {
      d3.select(this).append('tspan')
        .text(word).style("fill", d.data.lcolor)
        .attr("x", "0").attr("class", "pie-label")
        .attr("dy", fontSize * lineSpacing + "em")
        .attr("font-size", fontSize + "em");
    }
    d3.select(this).append('tspan')
      .text(d.data.value + "%").style("fill", d.data.lcolor)
      .attr("x", "0").attr("class", "pie-percent")
      .attr("dy", fontSize * percentSpacing + "em")
      .attr("font-size", fontSize * 0.8 + "em");
  });

  texts.attr("transform", function(d) {
    let [x, y] = arc.centroid(d);
    y -= this.getBBox().height / 2;
    if (d.data.xMargin){
      x *= d.data.xMargin
    }
    if (d.data.yMargin){
      y *= d.data.yMargin
    }
    x -= this.getBBox().width / 2;
    return `translate(${x},${y})`;
  });
}
