// Import stylesheets
import './style.css';

//Gráfico de columnas. Mi 1o gráfico

var visualization1 = d3plus
  .viz()
  .container('#viz1')
  .data([
    { year: 1991, name: 'alpha', value: 30 },
    { year: 1992, name: 'alpha', value: 20 },
  ])
  .type('bar')
  .id('name')
  .x('year')
  .y('value')
  .draw();

var visualization2 = d3plus
  .viz()
  .container('#viz2')
  .data([
    { year: 1991, name: 'alpha', value: 30 },
    { year: 1992, name: 'alpha', value: 20 },
  ])
  .type('bar')
  .id('name')
  .x('year')
  .y('value')
  .draw();

var visualization3 = d3plus
  .viz()
  .container('#viz3')
  .data([
    { year: 1991, name: 'alpha', value: 30 },
    { year: 1992, name: 'alpha', value: 20 },
  ])
  .type('bar')
  .id('name')
  .x('year')
  .y('value')
  .draw();


  var visualization4 = d3plus
  .viz()
  .container('#viz4')
  .data([
    { year: 1991, name: 'alpha', value: 30 },
    { year: 1992, name: 'alpha', value: 20 },
  ])
  .type('bar')
  .id('name')
  .x('year')
  .y('value')
  .draw();