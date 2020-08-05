const MultiSelect = (function () {
  const clearSelect = function (select) {
    select.length = 0;
  }
  const createGroupOption = function (arr) {
    const aOptions = [];
    const oOptGroup = document.createElement('optgroup');
    for ( i = 0; i < (arr.length); i++ ){
      aOptions[i] = document.createElement("option");	
      aOptions[i].value = arr[i][0];
      aOptions[i].text = arr[i][1];        
      oOptGroup.appendChild(aOptions[i]);
    }	
    return oOptGroup.innerHTML;
  }
  const bubbleSort = function bubbleSort(arr, arr1, start, rest){
    for (let i = rest - 1; i >= start;  i--){
      for (let j = start; j <= i; j++){
        if (arr1[j+1] < arr1[j]){
          let tempValue = arr[j];
          let tempValue1 = arr1[j];
          arr[j] = arr[j+1];
          arr1[j] = arr1[j+1];
          arr[j+1] = tempValue;
          arr1[j+1] = tempValue1;
        }
      }
    }
    return arr;
  }
  return {
    fillSelect: function (select, arr) {
      clearSelect(select);
      select.innerHTML = createGroupOption(arr); 
    },
    move: function (side, list, selected, bSort = true) {   
      let tmp1 = [], tmp2 = [], tmpA = [], tmpB = [],
          current1 = 0, current2 = 0, y=0, attribute;
      if (side == "right") {  
        attribute1 = list; 
        attribute2 = selected;
      } else {  
        attribute1 = selected;
        attribute2 = list; 
      }
      for (let i = 0; i < attribute2.length; i++) {  
        y = current1++
        tmp1[y] = attribute2.options[i].value;
        tmpA[y] = attribute2.options[i].text;
      }
      for (let i = 0; i < attribute1.length; i++) {   
        if ( attribute1.options[i].selected ) {  
          y = current1++
          tmp1[y] = attribute1.options[i].value;
          tmpA[y] = attribute1.options[i].text;
        } else {  
          y = current2++
          tmp2[y] = attribute1.options[i].value; 
          tmpB[y] = attribute1.options[i].text;
        }
      }
      if (bSort)
        tmp1=bubbleSort(tmp1,tmpA, 0, tmp1.length - 1);
      if (bSort)
        tmp2=bubbleSort(tmp2,tmpB, 0, tmp1.length - 1);
      clearSelect(attribute2);
      for (let i = 0; i < tmp1.length; i++) {  
        attribute2.options[i] = new Option();
        attribute2.options[i].value = tmp1[i];
        attribute2.options[i].text =  tmpA[i];
      }
      clearSelect(attribute1);
      if (tmp2.length>0) {	
        for (let i = 0; i < tmp2.length; i++) {   
          attribute1.options[i] = new Option();
          attribute1.options[i].value = tmp2[i];
          attribute1.options[i].text =  tmpB[i];
        }
      }
      return true;
    },
    getValues: function (selected, strArr){
      if (selected.length!=0)
        for (i=0;i<selected.length;i++)
          strArr.value=(i==0)?selected.options[i].value:strArr.value+", "+selected.options[i].value;   
      else
        strArr.value='';
      return strArr.value;
    }
  }
})();


