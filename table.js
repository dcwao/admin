function successFunction(data) {
  var allRows = data.split(/\r?\n|\r/);
  var table = '<table>';
  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    if (singleRow === 0) {
      table += '<thead>';
      table += '<tr>';
    } else {
      table += '<tr>';
    }
    var rowCells = allRows[singleRow].split(',');
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (singleRow === 0) {
        table += '<th>';
        table += rowCells[rowCell];
        table += '</th>';
      } else {
        table += '<td>';
        table += rowCells[rowCell];
        table += '</td>';
      }
    }
    if (singleRow === 0) {
      table += '</tr>';
      table += '</thead>';
      table += '<tbody>';
    } else {
      table += '</tr>';
    }
  } 
  table += '</tbody>';
  table += '</table>';
  $('body').append(table);
}
$.ajax({
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQoFDk4HZ8maYQDzvTD-34MjnxxFm-LzVVjR1uzI_ykHhjvNuioksekrtxROS0-D5ARwu8VtBBq7xH7/pub?gid=0&single=true&output=csv',
    dataType: 'text',
  }).done(successFunction);
