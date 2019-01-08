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
    {"label": "Leader", "value": 50, "color": "#0d1ccd"},
    {"label": "Listener", "value": 22, "color": "#3d43fb", "x_margin": 1.3, "y_margin": 1.1},
    {"label": "Mediator", "value": 28, "color": "#1426f9", "x_margin": 1.2},
  ].reverse());

  makeSVGPieChart("#identity-female-pie", [
    {"label": "Leader", "value": 36, "color": "#0d1ccd"},
    {"label": "Listener", "value": 46, "color": "#3d43fb"},
    {"label": "Mediator", "value": 18, "color": "#1426f9", "x_margin": 1.5, "y_margin": 1.1},
  ].reverse());

  makeSVGPieChart("#future-male-pie", [
    {"label": "Founder", "value": 50, "color": "#0d1ccd"},
    {"label": "VC", "value": 35, "color": "#3d43fb"},
    {"label": "Other", "value": 15, "color": "#1426f9", "x_margin": 1.3, "y_margin": 1.3},
  ].reverse());

  makeSVGPieChart("#future-female-pie", [
    {"label": "Founder", "value": 27, "color": "#0d1ccd", "x_margin": 1.2},
    {"label": "VC", "value": 45, "color": "#3d43fb"},
    {"label": "Other", "value": 28, "color": "#1426f9", "x_margin": 1.15, "y_margin": 1.15},
  ].reverse());
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
      .data([data]).attr("viewBox", `-${RADIUS} -${RADIUS} ${2*RADIUS} ${2*RADIUS}`)
      .attr("preserveAspectRatio", "xMidYMid slice")

  let arc = d3.arc().outerRadius(RADIUS).innerRadius(0);

  let pie = d3.pie().sort(null).value(function(d) { return d.value; });

  let arcs = vis.selectAll("g.slice").data(pie).enter()
    .append("svg:g")
      .attr("class", "slice")
    .on("mouseover", function(d) {
      d3.select(this).select("path").transition().style("fill", d3.rgb(d.data.color).brighter(2).hex())
        .duration(400).ease(d3.easeCubicOut)
    }).on("mouseout", function(d) {
      d3.select(this).select("path").transition().style("fill", d.data.color)
        .duration(400).ease(d3.easeCubicOut)
    });

  arcs.append("svg:path")
    .style("fill", d => d.data.color)
    .attr("d", arc);

  let texts = arcs.append("svg:text")
  texts.attr("text-anchor", "middle").attr("dy", "0").attr("font-size", "18");

  texts.append('tspan')
    .text(d => d.data.label)
    .attr("dy", "0em").attr("x", "0").attr("class", "pie-label");
  texts.append('tspan')
    .text(d => d.data.value + "%")
    .attr("dy", "1.1em").attr("x", "0").attr("class", "pie-percent")
    .attr("font-size", "0.8em");

  texts.attr("transform", function(d) {
    let [x, y] = arc.centroid(d);
    if (d.data.x_margin){
      x *= d.data.x_margin
    }
    if (d.data.y_margin){
      y *= d.data.y_margin
    }
    return `translate(${x},${y})`;
  });
}
