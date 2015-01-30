/* ***** BEGIN LICENSE BLOCK *****
* Copyright (C) Martin Kudlej aka Mazarik
*
* This program is free software; you can redistribute it and/or
* modify it under the terms of the GNU General Public License
* as published by the Free Software Foundation; either version 2
* of the License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program; if not, write to the Free Software
* Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
* ***** END LICENSE BLOCK ***** */
  
const NONE = 0;
const FREE = 1;
const FILLED = 2;
const FROM_TYPE = ["none","free","filled"]

//const HEART = { 
//  numbers_cols: [[2],[5],[2,2],[2,2],[2,2],[3,3],[3,2],[2,2],[2,2],[3],], 
//  numbers_rows : [
//                   [0],
//                   [2,3],
//                   [9],
//                   [2,3,1],
//                   [2,1,2],
//                   [1,2],
//                   [2,2],
//                   [2,2],
//                   [3],
//                   [2],
//                 ],
//}

//const HEART = { 
//  numbers_cols: [[5],[3,3],[3,3],[3,3],[3,2,3],[3,4,1],[3,4,1],[3,2,1],[3,1],[4,2,1],[4,4,1],[4,4,1],[5,2,1],[5,1],[8,1],[5,2,1],[5,1,1],[5,3,1],[6,1,1],[4,1,1],[1,7,1],[8],[2,6],[2,7],[1,8],[9],[8],[7],[6],[4]], 
//  numbers_rows : [[1,2],
//                 [18,4],
//                 [19,2],
//                 [22],
//                 [1,14],
//                 [12],
//                 [1,8],
//                 [2,2,1,2,7],
//                 [4,4,2,1,8],
//                 [4,4,6,7],
//                 [2,2,7],
//                 [4,7],
//                 [20,6],
//                 [4,6],
//                 [4]],
//}

//const HEART = { 
//  numbers_cols : [[1,3],[5],[5],[1,3],[2,1],[2],[1,3],[5],[6],[1,1]], 
//  numbers_rows : [[2],
//                  [2],
//                  [0],
//                  [2,2],
//                  [2,2],
//                  [5,4],
//                  [2,2],
//                  [4,3],
//                  [1,1,1,2],
//                  [1,1,1]], 
//}

//const HEART = { 
// numbers_cols : [[7],[2,2],[1,1,1,1],[7,1],[1,1,1,1],[1,1,1,1],[1,7],[1,1,1,1],[2,2],[7]], 
// numbers_rows : [[7],
//                 [2,2],
//                 [1,1,1,1],
//                 [7,1],
//                 [1,1,1,1],
//                 [1,1,1,1],
//                 [1,7],
//                 [1,1,1,1],
//                 [2,2],
//                 [7]], 
//}

//const HEART = { 
// numbers_cols : [[1,2,1,2],[2,3],[2,2,1],[1,2,4],[1,2],[1,1,2],[2,1,2],[2,1,1],[3,2],[4,1,3]], 
// numbers_rows : [[2,3,2],
//                 [1,4],
//                 [1,2,4],
//                 [1,2,1],
//                 [0],
//                 [3,1],
//                 [1,2],
//                 [5,1],
//                 [2,4,2],
//                 [4,4]], 
//}

//const HEART = { 
// numbers_cols : [[5],[2,1],[4],[1,8],[10],[8],[7],[4],[6],[5]], 
// numbers_rows : [[4],
//                 [2,3],
//                 [7],
//                 [1,5],
//                 [1,6],
//                 [1,7],
//                 [2,7],
//                 [7],
//                 [2,2],
//                 [2,2]], 
//}

//const HEART = { 
// numbers_cols : [[15], [2,4,2], [2,5,5], [1,3,3,2,4], [2,5,2,4,4], [1,5,11], [2,7,3,8], [1,7,1,3,3], [1,2,5,2,3,2], [2,1,2,7,4], [1,9,11], [1,3,3,3,2], [1,2,4,2,4,6], [1,2,4,2,5,5], [1,2,4,2,6,4], [1,3,3,6,4], [1,10,5,5], [1,3,3,4,6], [1,2,4,2,3,2], [1,1,4,2,11], [2,1,4,1,7,4], [1,2,2,2,3,2], [1,7,1,3,3], [2,6,3,8], [1,5,11], [2,4,2,4], [1,2,4,5], [2,4,2,4], [2,4,4,2], [15]], 
// numbers_rows : [[12], [4,4], [3,8,3], [3,14,3], [2,3,2,3,3,2], [2,4,1,3,1,3,4,2], [1,6,1,3,1,3,5,1], [1,6,1,3,1,3,5,1], [1,6,1,3,1,3,4,1], [2,5,2,3,4,2], [3,17,3], [5,11,5], [7,7], [1,2,5,5,2,1], [1,1,3,14,2,1,2], [1,3,12,1,3], [1,4,14,2,3], [1,1,7,6,6,1,2], [1,2,6,4,6,2,1], [8,2,1,2,1,2,8], [6,1,2,2,1,6], [6,2,6,2,6], [7,6,7], [18], [12]],
//}

const HEART = { 
  numbers_cols : [[22,2,2,21,1], [22,2,2,8,21,1], [14,5,2,2,8,21,1], [13,3,2,2,8,21,1], [13,1,2,2,8,21,1], [12,2,2,8,21,1], [12,2,2,8,21,1], [11,2,2,21,1], [11,2,40,1], [8,44,1], [7,6,21,1], [7,22,1], [6,2,20,1], [6,4,3,20,1], [6,11,1,3,3,11,2,2], [7,4,2,1,1,1,5,2,9,2], [7,8,1,1,1,1,2,7,2,4,3,2], [8,9,3,15,12,3,3,1], [6,2,7,4,2,1,5,5,4,2,2], [4,2,3,8,2,1,4,4,4,2,1], [3,2,1,2,2,2,1,4,1,3,2,1], [2,2,1,2,17,4,5,1,1], [2,2,1,1,1,2,2,12,5,5,7,1], [1,2,1,1,7,2,15,4,3,1], [1,10,4,2,1,7,2,6,2,1], [1,4,1,3,2,1,3,2,8,1,1], [1,3,1,11,3,3,13,1,1], [1,1,1,6,1,3,19,2], [1,1,1,2,3,22], [2,1,1,22,1], [2,1,1,1,17,1,2,1], [2,1,1,1,15,1,2,2], [3,3,1,1,13,2,1,1], [3,2,1,5,12,2,1,1], [4,3,6,1,1,11,1,1,1], [6,1,1,2,5,3,6,1,1,1], [8,1,1,1,1,3,5,1,1], [11,1,1,1,2,3,5,1,1], [9,4,1,4,1,1,3,4,1,1], [8,2,2,1,1,3,2,3,4,1,1], [8,1,2,4,1,2,3,4,1,1], [7,1,2,1,1,1,4,7,1,1], [7,1,2,1,3,4,7,1,1], [8,1,1,2,1,6,6,1,1], [8,1,2,2,8,6,1,1], [9,1,2,5,13,5,1,1], [10,4,23,4,1,1], [11,2,23,1,1], [14,25,1,1], [42,1,1]],
  numbers_rows : [[50], [23,21], [21,18], [20,16], [19,15], [19,15], [12,3,14], [10,1,5,7], [9,2,5], [9,4,4], [9,2,2,3], [7,13,2,1,1,2], [5,12,3,1,2], [3,3,3,3,2,4], [2,11,1,9,1], [2,4,1,1,1,1], [2,4,1,1,1,5,2,2], [3,3,2,1,6,2,2], [3,3,3,2,2,3], [4,3,1,9,4], [4,2,2,1,1,5], [5,1,1,1,1,7], [5,20,6], [2,3,3,1,1,1,5], [11,1,3,3,1,1,4,5], [11,1,3,3,1,3,1,4], [2,1,5,9,3,4], [2,1,1,1,1,4], [11,1,1,1,1,1,4], [11,1,1,1,1,1,4], [2,4,1,5], [2,1,11,6], [2,13,7], [6,2,2,1,2,1,9], [6,2,1,1,2,1,12], [6,2,1,1,2,1,11], [6,2,5,2,1,9], [6,2,1,2,1,7], [6,2,1,2,1,6], [6,2,1,2,1,5], [6,2,1,2,1,5], [2,13,2,1], [2,2,3,2,1], [2,1,1,1,1], [2,34], [2,35], [2,36], [12,9,6,6], [19,24], [18,22], [15,2,1,2,17], [14,1,1,14], [14,2,2,11], [15,4,4,10], [15,4,4,9], [15,3,3,8], [15,2,2,7], [15,6], [16,7], [17,7], [19,9], [20,9], [30], [16,12,1,2], [14,3,4,5,1,2,1], [19,3,4,2], [21,3,2,2], [14,3,4,1,1,18], [5,1,3,1], [17,4,6,20]],
}


function create_array_of_arrays_of_zeros (len_inner, len_outer) {
  //http://jsperf.com/initialise-array-with-zeros
  var zeros = [];
  for (var i = len_inner; i--;) {
    zeros.push(0);
  }
  var ret = [];
  for (var i = len_outer; i--;) {
    ret.push(zeros.slice(0));
  }
  return (ret);
}


var MAL = {
  cols : null,
  rows : null,
  numbers_cols : null,
  numbers_rows: null,
  generate_cols_rows: function() {
    this.cols = create_array_of_arrays_of_zeros(this.numbers_rows.length, this.numbers_cols.length);
    this.rows = create_array_of_arrays_of_zeros(this.numbers_cols.length, this.numbers_rows.length);
  },
 

  solving : function() {
    var function_array = [];
    function_array.push("make_free_zeros");
    function_array.push("layered");
    function_array.push("filled_from_border");
    function_array.push("doesnt_fit");
    function_array.push("it_fits");
    function_array.push("make_ones");
    function_array.push("mark_free_full_filled");
    function_array.push("move_forward");
    function_array.push("it_fits");
    function_array.push("doesnt_fit");
    function_array.push("next_doesnt_fit");
    this.xxx(function_array); 
    if (this.draw_stack.length > 0) {
      this.draw_from_stack("solving");
    } else {
      this.draw_from_stack("solving2");
   }
  },

  solving2 : function() {
    var function_array = [];
    this.xxx(function_array);
    this.draw_from_stack();
  },

  xxx : function(function_array) {
    for ( var func = 0; func < function_array.length; func++) {
      //cols
      for (var x = 0; x < this.cols.length; x++) {
        //cols from L to R
        var cols_copy = this.cols[x].slice(0, this.cols[x].length);
        var cols_changes = this[function_array[func]](this.numbers_cols[x], cols_copy);
        for (var i = 0; i < cols_changes.length; i++) {
          if (this.cols[x][cols_changes[i].index] == NONE && this.rows[cols_changes[i].index][x] == NONE) {
            this.cols[x][cols_changes[i].index] = cols_changes[i].type;
            this.rows[cols_changes[i].index][x] = cols_changes[i].type;
            this.draw_stack.push([x, cols_changes[i].index]);
          }
        }
        //cols from R to L
        var rev_cols_copy = this.cols[x].slice(0, this.cols[x].length).reverse();
        var rev_numbers_cols_copy = this.numbers_cols[x].slice(0, this.numbers_cols[x].length).reverse();
        var cols_changes = this[function_array[func]](rev_numbers_cols_copy, rev_cols_copy);
        for (var i = 0; i < cols_changes.length; i++) {
          if (this.cols[x][this.cols[x].length -1 - cols_changes[i].index] == NONE && this.rows[this.cols[x].length -1 - cols_changes[i].index][x] == NONE) {
            this.cols[x][this.cols[x].length -1 - cols_changes[i].index] = cols_changes[i].type;
            this.rows[this.cols[x].length -1 - cols_changes[i].index][x] = cols_changes[i].type;
            this.draw_stack.push([x, this.cols[x].length -1 - cols_changes[i].index]);
          }
        }
    }
      //rows
      for (var y = 0; y < this.rows.length; y++) {
        //rows from L to R
        var rows_copy = this.rows[y].slice(0, this.rows[y].length);
        var rows_changes = this[function_array[func]](this.numbers_rows[y], rows_copy);
        for (var i = 0; i < rows_changes.length; i++) {
          if (this.rows[y][rows_changes[i].index] == NONE && this.cols[rows_changes[i].index][y] == NONE) {
            this.rows[y][rows_changes[i].index] = rows_changes[i].type;
            this.cols[rows_changes[i].index][y] = rows_changes[i].type;
            this.draw_stack.push([rows_changes[i].index, y]);
          }
        }
        //rows from R to L
        var rev_rows_copy = this.rows[y].slice(0, this.rows[y].length).reverse();
        var rev_numbers_rows_copy = this.numbers_rows[y].slice(0, this.numbers_rows[y].length).reverse();
        var rows_changes = this[function_array[func]](rev_numbers_rows_copy, rev_rows_copy);
        for (var i = 0; i < rows_changes.length; i++) {
          if (this.rows[y][this.rows[y].length -1 - rows_changes[i].index] == NONE && this.cols[this.rows[y].length -1 - rows_changes[i].index][y] == NONE) {
            this.rows[y][this.rows[y].length -1 - rows_changes[i].index] = rows_changes[i].type;
            this.cols[this.rows[y].length -1 - rows_changes[i].index][y] = rows_changes[i].type;
            this.draw_stack.push([this.rows[y].length -1 - rows_changes[i].index, y]);
          }
        }
      }
    }
  },
  

  make_free_zeros : function(number_arr, arr) {
    var ret = [];
    if (number_arr[0] == 0) {
      for (var y = 0; y < arr.length; y++) {
        ret.push({index: y, type: FREE});
      }
    }
    return (ret);
  },

  it_fits : function(number_arr, arr) {
    var ret = [];
    var index_none = 0;
    var index_next_none = 0;
    var y = 0;
    while (y < number_arr.length && index_next_none < arr.length && index_none < arr.length && index_next_none - index_none < number_arr[y]) {
      index_none = index_next_none;
      while (index_none < arr.length && arr[index_none] == FREE) {
        index_none++;
      }
      index_next_none = index_none;
      var filled = 0;
      while (index_next_none < arr.length && arr[index_next_none] != FREE) {
        index_next_none++;
        if (arr[index_next_none] == FILLED) {
          filled++;
        }
      }
      if (index_next_none < arr.length && index_none < arr.length && index_next_none - index_none == number_arr[y] && filled > 0) {
        for (var i = index_none; i < index_next_none; i++) {
          ret.push({index: i, type: FILLED});
        }
      }
      y++;
    }
    return (ret);
  },

  doesnt_fit : function(number_arr, arr) {
    var ret = [];
    var index_none = 0;
    var index_next_none = 0;
    var y = 0;
    while (y < number_arr.length && index_next_none < arr.length && index_none < arr.length && index_next_none - index_none < number_arr[y]) {
      index_none = index_next_none;
      while (index_none < arr.length && arr[index_none] == FREE) {
        index_none++;
      }
      index_next_none = index_none;
      while (index_next_none < arr.length && arr[index_next_none] != FREE) {
        index_next_none++;
      }
      if (index_next_none < arr.length && index_none < arr.length && index_next_none - index_none < number_arr[y]) {
        for (var i = index_none; i < index_next_none; i++) {
          ret.push({index: i, type: FREE});
        }
      }
      y++;
    }
    return (ret);
  },

  next_doesnt_fit : function(number_arr, arr) {
    var ret = [];
    var index_none = 0;
    var index_next_none = 0;
    var y = 0;
    while (index_next_none < arr.length && index_none < arr.length && index_next_none - index_none < number_arr[y]) {
      index_none = index_next_none;
      while (index_none < arr.length && arr[index_none] == FREE) {
        index_none++;
      }
      index_next_none = index_none;
      while (index_next_none < arr.length && arr[index_next_none] != FREE) {
        index_next_none++;
      }
      var filled = index_none;
      while (filled < arr.length && arr[filled] != FILLED) {
        filled++;
      }
      if (index_next_none < arr.length && index_none < arr.length && y + 1 < number_arr.length && index_next_none - index_none + 1 < number_arr[y] + number_arr[y+1] + 2) {
        for (var i = filled + number_arr[y]; i < index_next_none; i++) {
          ret.push({index: i, type: FREE});
        }
      }
      y++;
    }
    return (ret);
  },

  layered : function(number_arr, arr) {
    var ret = [];
    var mark = 10;
    var index_none = 0;
    var index_next_none = 0;
    
    for (var y = 0; y < number_arr.length; y++) {
      while (index_next_none < arr.length && index_none < arr.length && index_next_none - index_none < number_arr[y]) {
        index_none = index_next_none;
        while (index_none < arr.length && arr[index_none] == FREE) {
          index_none++;
        }
        index_next_none = index_none;
        while (index_next_none < arr.length && arr[index_next_none] != FREE) {
          index_next_none++;
        }
      }
      if (index_none > arr.length -1) {
        return (ret);
      }
      for (var num = 0; num < number_arr[y]; num++) {
        if (arr[index_none + num] == NONE && arr[index_none + num] != FILLED) {
          arr[index_none + num] = mark;
        }
      }
      mark++;
      index_none += num + 1;
      var index_next_none = index_none;
    }
    mark--;
    var index_none = arr.length - 1;
    var index_next_none = index_none;
    for (var y = number_arr.length - 1; y > -1; y--) {
      while (index_next_none > -1  && index_none > -1 && index_none - index_next_none < number_arr[y]) {
        index_none = index_next_none;
        while ( index_none > -1 && arr[index_none] == FREE) {
          index_none--;
        }
        index_next_none = index_none;
        while (index_next_none > - 1 && arr[index_next_none] != FREE) {
          index_next_none--;
        }
      }
      if (index_none < 0) {
        return (ret);
      }
      for (var num = 0; num < number_arr[y]; num++) {
        if (arr[index_none - num] == mark || arr[index_none - num] == FILLED) {
          ret.push({index: index_none - num, type: FILLED});
        }
      }
      mark--;
      index_none = index_none - num - 1;
      var index_next_none = index_none;
    }
    return (ret); 
  },

  move_forward : function(number_arr, arr) {
    var ret = [];
    var y = 0;
    var index_low = 0;
    var index_high = 0;
    var bottom = 0;
    while (bottom < arr.length && arr[bottom] == FREE) {
      bottom++;
    }
    for (var y = 0; y < 1 && y < number_arr.length && index_low < arr.length && index_high < arr.length; y++) {
      index_low = bottom;
      while (index_low < arr.length && arr[index_low] != FILLED) {
        index_low++;
      }
      if (index_low > arr.length -1 || index_low - bottom> number_arr[y]) {
        break;
      }
      var index_high = index_low;
      while (index_high < arr.length && arr[index_high] == FILLED) {
        index_high++;
      }
      if (index_high > arr.length) {
        return (ret);
      }
      //high index is right after last filled square
      if (index_high - index_low == number_arr[y]) {
        for(var i = bottom -1; i < index_low && i < arr.length; i++) {
          ret.push({index: i, type: FREE});
        }
        if (index_high < arr.length) {
          ret.push({index: index_high, type: FREE});
        }
      }
      if (index_high - index_low < number_arr[y]) {
        if (index_low - bottom == number_arr[y]) {
          for(var i = 0; i < index_high - index_low && i < arr.length; i++) {
            ret.push({index: i + bottom, type: FREE});
          }
        }
        if (index_low < number_arr[y] + bottom) {
          if (index_high < number_arr[y] + bottom) {
            for(var i = 0; i < number_arr[y] - index_low + bottom && i < arr.length; i++) {
              ret.push({index: i + index_low, type: FILLED});
            }
          }
          if (index_high > number_arr[y] + bottom) {
            for(var i = 0; i < index_high - number_arr[y]  - bottom && i < arr.length; i++) {
              ret.push({index: i + bottom, type: FREE});
            }
          }
        }
      }
      bottom = index_high;
      index_low = index_high;
    }
    return (ret);
  },

  make_ones : function(number_arr, arr) {
    var ret = [];
    var all=0;
    for (var y = 0; y < number_arr.length; y++) {
      if (number_arr[y] > 1) {
        all++;
      }
    }
    if (all == 0) {
      var index_filled = 0;
      while (index_filled < arr.length) {
        while (index_filled < arr.length && arr[index_filled] != FILLED) {
          index_filled++;
        }
        if (index_filled < arr.length) {
          if (index_filled > 0) {
            ret.push({index: index_filled - 1, type: FREE});
          }
          if (index_filled < arr.length - 1) {
            ret.push({index: index_filled + 1, type: FREE});
            index_filled++;
          }
        }
        index_filled++;
      }
    }
    return (ret);  
  }, 

  filled_from_border : function(number_arr, arr) {
    var ret = [];
    var index_free = 0;
    for (var y = 0; y < number_arr.length; y++) {
      while (index_free < arr.length && arr[index_free] == FREE) {
        index_free++;
      }
      if (arr[index_free] == FILLED) {
        for (var i = 0; i < number_arr[y] && index_free + i < arr.length; i++) {
          ret.push({index: index_free + i, type: FILLED});
        }
        if (index_free + i < arr.length) {
          ret.push({index: index_free + i, type: FREE});
        }
        index_free += i;
      }
    }
    return (ret);
  },

  mark_free_full_filled : function(number_arr, arr) {
    var ret = [];
    var index_filled = 0;
    var index_last_filled = 0;
    var bottom = 0;
    var all = 0;
    for (var y = 0; y < number_arr.length; y++) {
      index_filled = bottom;
      while (index_filled < arr.length && arr[index_filled] != FILLED) {
        index_filled++;
      }
      index_last_filled = index_filled;
      while (index_last_filled < arr.length && arr[index_last_filled] == FILLED) {
        index_last_filled++;
      }
      if (index_last_filled - index_filled != number_arr[y]) {
        all++;
      }
      bottom = index_last_filled;
    }
    if (all == 0 && y == number_arr.length) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == NONE) {
          ret.push({index: i, type: FREE});
        }
      }
    }
    return (ret);
  },
  

  fill : function(x,y, colour) {
    document.getElementById((x + 1) + "-" + (y+1)).classList.add(colour);
  },
  
  draw_stack : [],

  draw_from_stack : function(func) {
    document.getElementById("fifo_depth").innerHTML = "" + this.draw_stack.length;
    if (this.draw_stack.length > 0) {
      var tmp = this.draw_stack.shift();
      var colour = "red";
      if (this.cols[tmp[0]][tmp[1]] == FILLED && this.rows[tmp[1]][tmp[0]] == FILLED) {
        colour="black";
      } else if (this.cols[tmp[0]][tmp[1]] == FREE && this.rows[tmp[1]][tmp[0]] == FREE) {
        colour="green";
        if (func == null || func == "") {
          colour = "blue";
        }
      } else {
        document.getElementById("errors").innerHTML += "x = " + tmp[0] + ", y = " + tmp[1] + ", colour = " + colour + ", cols[x][y] = " + this.cols[tmp[0]][tmp[1]] + ", rows[y][x] = " + this.rows[tmp[1]][tmp[0]] + "<br/>";
      }
      this.fill(tmp[0], tmp[1], colour);
      document.getElementById("fifo_draw").innerHTML = "x = " + tmp[0] + ", y = " + tmp[1] + ", colour = " + colour + ", cols[x][y] = " + this.cols[tmp[0]][tmp[1]] + ", rows[y][x] = " + this.rows[tmp[1]][tmp[0]] + " " + func;
      var slow = 0;
      if (document.getElementById("slow").checked && func != "solving") {
        slow = 100 * parseInt(document.getElementById("slowingvalue").value, 10);
      }
      if (func == null || func == "") {
        func = "";
      }
      setTimeout("MAL.draw_from_stack(\"" + func + "\")", slow);
    } else {
      document.getElementById("fifo_draw").innerHTML = "";
      if (func != null && func != "") {
        window.MAL[func].call(MAL);
      }
    }
  },

  max_header_cols : 0,
  max_header_rows : 0,

  show_numbers : function() {
    var rows = document.getElementById("rows");
    var cols = document.getElementById("cols");
    var max_rows = 0;
    for (var x = 0; x < this.numbers_rows.length; x++) {
      if (this.numbers_rows[x].length > max_rows) {
        max_rows = this.numbers_rows[x].length;
      }
    }
    this.max_header_cols = max_rows;
    var cols_prefix = "";
    for (var x = 0; x < max_rows-1; x++) {
      cols_prefix += "<td></td>";
    }
    //last prefix td has stronger right border
    cols_prefix += "<td class='fifth_col'></td>";
    var inner = "";
    var arr_clone = [];
    var tmp_arr = [];
    for (var i = 0; i < this.numbers_cols.length; i++) {
       arr_clone[i] = this.numbers_cols[i].slice(0, this.numbers_cols[i].length);
       arr_clone[i] = arr_clone[i].reverse();
    }
    var max_cols = 0;
    for (var i = 0; i < arr_clone.length; i++) {
      if (arr_clone.length > max_cols) {
        max_cols = arr_clone.length;
      }
      for (var j = 0; j < arr_clone[i].length; j++) {
        if (tmp_arr[j] == null) {
          tmp_arr[j] = [];
        }
        tmp_arr[j][i] = arr_clone[i][j];
      }
    }
    this.max_header_rows = tmp_arr.length;
    tmp_arr.reverse();
    for (var x = 0; x < tmp_arr.length; x++) {
      inner += cols_prefix; 
      for (var y = 0; y < max_cols; y++) {
        inner += "<td id='col-" + x + "-" + y + "'";
        if ((y+1) % 5 == 0 && y > 0) {
          inner += "class='fifth_col'";        
        }
        if (tmp_arr[x][y] == null) {
          inner += "></td>";
        } else {
          inner += " onclick='fill(this)'>" + tmp_arr[x][y] + "</td>";
        }
      }
      inner += "</tr>";
    }
    cols.innerHTML = inner;

    inner = "";
    var arr_clone = [];
    for (var x = 0; x < this.numbers_rows.length; x++) {
      arr_clone[x] = this.numbers_rows[x].slice(0, this.numbers_rows[x].length);
      arr_clone[x] = arr_clone[x].reverse();
    }

    for (var x = 0; x < arr_clone.length; x++) {
      var row = "";
      for (var y = 0; y < max_rows; y++) {
        r = "<td id='row-" + x + "-" + y + "'";
        if ((x+1) % 5 == 0 && x > 0) {
          r += " class='fifth_row'";        
        }
        if (arr_clone[x][y] == null) {
          r += " ></td>";
        } else {
          r += " onclick='fill(this)'>" + arr_clone[x][y] + "</td>";
        }
        row = r + row;
      }
      inner += "<tr>" + row + "</tr>";
    }
    rows.innerHTML = inner;
  },

  set_column : function(evt) {
    id1 = evt.target.id.split("-")[0];
    id2 = evt.target.id.split("-")[1];
    for (var y = 1; y < this.rows.length + 1; y++) {
      document.getElementById(id1 + "-" + y).classList.add("colcl");
    }
    for (var y = 0; y < this.max_header_cols; y++) {
      document.getElementById("col-" + y + "-" + (id1-1)).classList.add("colcl");
    }
    for (var y = 0; y < this.max_header_rows - 1; y++) {
      document.getElementById("row-" + (id2 - 1) + "-" + y).classList.add("colcl");
    }
  },
  reset_column : function(evt) {
    id1 = evt.target.id.split("-")[0];
    id2 = evt.target.id.split("-")[1];
    for (var y = 1; y < this.rows.length + 1; y++) {
      document.getElementById(id1 + "-" + y).classList.remove("colcl");
    }
    for (var y = 0; y < this.max_header_cols; y++) {
      document.getElementById("col-" + y + "-" + (id1-1)).classList.remove("colcl");
    }
    for (var y = 0; y < this.max_header_rows - 1; y++) {
      document.getElementById("row-" + (id2 - 1) + "-" + y).classList.remove("colcl");
    }
  },

  show_grid : function() {
    var main = "";
    for (var y = 1; y < this.rows.length + 1; y++) {
      main += "<tr>";
      for (var x = 1; x < this.cols.length + 1; x++) {
        main += "<td onmouseover='MAL.set_column(event)' onmouseout='MAL.reset_column(event)' class='box ";
        if (y % 5 == 0) {
          main += " fifth_row";        
        }
        if (x % 5 == 0) {
          main += " fifth_col";        
        }
        main += "' id='" + x + "-" + y + "'></td>";
      }
      main += "</tr>";
    }
    main += "</tbody>";
    document.getElementById("main").innerHTML = main;
  },

  set_fill_function : function() {
    var tds = document.getElementsByClassName("box");
    for (var i = 0; i < tds.length; i++) {
      tds[i].addEventListener("click", fill_box, false);
    }
  },

  set_griddle : function(type) {
//    switch(type) {
//      case "heart": 
        this.numbers_cols = HEART.numbers_cols;
        this.numbers_rows = HEART.numbers_rows;
        MAL.generate_cols_rows();
        MAL.show_grid();
        MAL.set_fill_function();
        MAL.show_numbers();
        MAL.solving();
//        break;
//    }
    return(false);
  }
}

function fill_box(obj) {
  var id = obj.target.getAttribute("id").split("-");
  id[0] = parseInt(id[0], 10) - 1;
  id[1] = parseInt(id[1], 10) - 1;
  if (obj.shiftKey == false) {
    MAL.cols[id[0]][id[1]] = FILLED;
    MAL.rows[id[1]][id[0]] = FILLED;
  } else {
    MAL.cols[id[0]][id[1]] = FREE;
    MAL.rows[id[1]][id[0]] = FREE;
  }
  MAL.draw_stack.push(id);
  MAL.draw_from_stack("solving");
}

function fill(obj) {
  //obj.style.setProperty("background-color", "blue", "");
  obj.classList.add("blue");
}

function on_load() {
  MAL.set_griddle();
}

function change_speed() {
  if (document.getElementById("fast").checked == true) {
    document.getElementById("slowing").style.display = "none";
  } else {
    document.getElementById("slowing").style.display = "inline";
  }
}
