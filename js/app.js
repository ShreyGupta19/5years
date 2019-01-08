$(document).ready(function(){

  // Controls the hopping arrow animation
  $('.arrow').mouseenter(function(){
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

  makeSVGPieChart("#identity-male-pie", [
    {"label": "Leader", "value": 50, "color": "#0702d1", "lcolor": "#ffffff"},
    {"label": "Listener", "value": 22, "color": "#3b38ff", "lcolor": "#ffffff",
      "xMargin": 1.25, "yMargin": 1.1},
    {"label": "Mediator", "value": 28, "color": "#0c08fd", "lcolor": "#ffffff",
      "xMargin": 1.1},
  ].reverse());

  makeSVGPieChart("#identity-female-pie", [
    {"label": "Leader", "value": 36, "color": "#0702d1", "lcolor": "#ffffff"},
    {"label": "Listener", "value": 46, "color": "#3b38ff", "lcolor": "#ffffff"},
    {"label": "Mediator", "value": 18, "color": "#0c08fd", "lcolor": "#ffffff",
      "fontSize": 0.9, "xMargin": 1.4, "yMargin": 1.1},
  ].reverse());

  makeSVGPieChart("#future-male-pie", [
    {"label": "Founder", "value": 50, "color": "#0702d1", "lcolor": "#ffffff"},
    {"label": "VC", "value": 35, "color": "#3b38ff", "lcolor": "#ffffff"},
    {"label": "Other", "value": 15, "color": "#0c08fd", "lcolor": "#ffffff",
      "xMargin": 1.25, "yMargin": 1.2},
  ].reverse());

  makeSVGPieChart("#future-female-pie", [
    {"label": "Founder", "value": 27, "color": "#0702d1", "lcolor": "#ffffff",
      "xMargin": 1.1},
    {"label": "VC", "value": 45, "color": "#3b38ff", "lcolor": "#ffffff"},
    {"label": "Other", "value": 28, "color": "#0c08fd", "lcolor": "#ffffff"},
  ].reverse());

  makeSVGPieChart("#capable-male-pie", [
    {"label": "As Capable", "value": 65, "color": "#1dd79d",
      "lcolor": "#000000"},
    {"label": "Somewhat More Capable", "value": 35, "color": "#17ab7c",
      "lcolor": "#000000", "fontSize": 0.9},
  ].reverse());

  makeSVGPieChart("#capable-female-pie", [
    {"label": "As Capable", "value": 83, "color": "#1dd79d",
      "lcolor": "#000000"},
    {"label": "Somewhat More Capable", "value": 17, "color": "#17ab7c",
      "lcolor": "#000000", "fontSize": 0.75, "xMargin": 1.35, "yMargin": 1.1},
  ].reverse());

  makeSVGPieChart("#sexhar-scope-drf", [
    {"label": "Accurate", "value": 33, "color": "#da1301", "lcolor": "#ffffff"},
    {"label": "Less", "value": 9, "color": "#fe3c2a", "lcolor": "#ffffff",
      "xMargin": 1.4, "yMargin": 1.8, "fontSize": 0.9},
    {"label": "More", "value": 58, "color": "#8c0c01", "lcolor": "#ffffff"},
  ].reverse())

  makeSVGPieChart("#sexhar-work-drf", [
    {"label": "No", "value": 27, "color": "#da1301", "lcolor": "#ffffff"},
    {"label": "Yes", "value": 73, "color": "#8c0c01", "lcolor": "#ffffff"},
  ].reverse())

  makeSVGPieChart("#sexhar-scope-founders", [
    {"label": "Accurate", "value": 37, "color": "#da1301", "lcolor": "#ffffff"},
    {"label": "Less", "value": 34, "color": "#fe3c2a", "lcolor": "#ffffff"},
    {"label": "More", "value": 29, "color": "#8c0c01", "lcolor": "#ffffff"},
  ].reverse())

  makeSVGPieChart("#sexhar-work-founders", [
    {"label": "No", "value": 40, "color": "#da1301", "lcolor": "#ffffff"},
    {"label": "Yes", "value": 60, "color": "#8c0c01", "lcolor": "#ffffff"},
  ].reverse())
});

// Controls arrow hopping animation when mouse hovers over
let lastCall = 0;
function arrowHop() {
  let now = Date.now();
  if (lastCall + 1000 < now) {
    lastCall = now;
    $('.arrow').finish().show()
    .animate({'margin-bottom': '15px'}, 200, function(){
      $(this).animate({'margin-bottom': '0px'}, 350);
    });
  }
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
  texts.attr("text-anchor", "middle").attr("dy", "0").attr("font-size", "17");

  texts.each(function(d) {
    let fontSize = d.data.fontSize || 1.0
    for (var [idx, word] of d.data.label.split(" ").entries()) {
      d3.select(this).append('tspan')
        .text(word).style("fill", d.data.lcolor)
        .attr("x", "0").attr("class", "pie-label")
        .attr("dy", fontSize * 1.1 + "em")
        .attr("font-size", fontSize + "em");
    }
    d3.select(this).append('tspan')
      .text(d.data.value + "%").style("fill", d.data.lcolor)
      .attr("x", "0").attr("class", "pie-percent")
      .attr("dy", fontSize * 1.3 + "em")
      .attr("font-size", fontSize * 0.8 + "em");
  });

  texts.attr("transform", function(d) {
    let [x, y] = arc.centroid(d);
    y -= this.getBBox().height / 2
    if (d.data.xMargin){
      x *= d.data.xMargin
    }
    if (d.data.yMargin){
      y *= d.data.yMargin
    }
    return `translate(${x},${y})`;
  });
}
