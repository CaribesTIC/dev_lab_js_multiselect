var list        = document.getElementById("list"),
    multiAdd    = document.getElementById("multiAdd"),
    multiRemove = document.getElementById("multiRemove"),
    selected    = document.getElementById("selected"),
    strArr      = document.getElementById('strArr'), 
    arr         = [ 
      [ 1, 'Option-1' ],
      [ 2, 'Option-2' ],
      [ 3, 'Option-3' ],
      [ 4, 'Option-4' ],
      [ 5, 'Option-5' ],
      [ 6, 'Option-6' ],
      [ 7, 'Option-7' ]
    ];

    list.addEventListener("dblclick", function () {
      MultiSelect.move('right', list, selected);
      MultiSelect.getValues(selected, strArr);
    });
    multiAdd.addEventListener("click", function () {
      MultiSelect.move('right', list, selected); 
      MultiSelect.getValues(selected, strArr);
    });
    multiRemove.addEventListener("click", function () {
      MultiSelect.move('left', list, selected); 
      MultiSelect.getValues(selected, strArr);
    });
    selected.addEventListener("dblclick", function () {
      MultiSelect.move('left', list, selected); 
      MultiSelect.getValues(selected, strArr);   
    });

 document.getElementById('strArr').value = '';
 MultiSelect.fillSelect(document.getElementById('list'), arr);

