
  var app = new function() {
    this.el = document.getElementById('countries');
    this.countries = ['France', 'Germany', 'England', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Ireland', 'Canada'];
    this.el2 = document.getElementById('capitals');
    this.capitals = ['Paris', 'Barlin', 'London', 'Madrid', 'Brussels', 'Rome', 'Lisbon', 'Dublin', 'Ottawa'];
    this.el3 = document.getElementById('codes');
    this.codes = ['+33', '+49', '+44', '+34', '+32', '+39', '+351', '+353', '+1'];

    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'Country';
      if (data) {
        if (data > 1) {
          name = 'Countries';
        }
        el.innerHTML = data + ' ' + name ;
      } else {
        el.innerHTML = 'No ' + name;
      }
    };

    this.FetchAll = function() {
      var data = '';
      if (this.countries.length > 0) {
        for (i = 0; i < this.countries.length; i++){ 
          for (i = 0; i < this.capitals.length; i++) {
            for (i = 0; i < this.codes.length; i++) {
                data += '<tr>';
                data += '<td>' + this.countries[i] + '</td>';
                data += '<td>' + this.capitals[i] + '</td>';
                data += '<td>' + this.codes[i] + '</td>';
                data += '<td><button onclick="app.Edit(' + i + ')" class="button">Edit</button></td>';
                data += '<td><button onclick="app.Delete(' + i + ')" class="button">Delete</button></td>';
                data += '</tr>';
              }
            }
          }
        }

      this.Count(this.countries.length);
      return this.el.innerHTML = data;
      this.Count(this.capitals.length);
      return this.el2.innerHTML = data;
      this.Count(this.codes.length);
      return this.el3.innerHTML = data;
    };
    this.Add = function () {
          el = document.getElementById('add-name');
          el2 = document.getElementById('add-capital');
          el3 = document.getElementById('add-code');
            // Get the value
          var country = el.value;
          var capital = el2.value;
          var code = el3.value;
      if (country) {
          if(capital){
            if(code){
              // Add the new value
              this.countries.push(country.trim());
              // Reset input value
              this.capitals.push(capital.trim());
              this.codes.push(code.trim());
              el.value = '';
              el2.value='';
              el3.value='';
              // Dislay the new list
              this.FetchAll();
              swal("Successfully Added!");
          }
        }
      }
    };
    this.Edit = function (item) {

      var el = document.getElementById('add-name');
      var el2 = document.getElementById('add-capital');
      var el3 = document.getElementById('add-code');
      // Display value in the field
      // Display value in the field
      el.value = this.countries[item];
      el2.value = this.capitals[item];
      el3.value = this.codes[item];
      document.getElementById("adds").value='Update';
      // Display fields
      document.getElementById('spoiler').style.display = 'block';
      self = this;
      document.getElementById('saveEdit').onsubmit = function() {
        // Get value
        var country = el.value;
        var capital = el2.value;
        var code = el3.value;
        if (country) {
            if(capital){
              if(capital){
                // Edit value
                self.countries.splice(item, 1, country.trim());
                self.capitals.splice(item, 1, capital.trim());
                self.codes.splice(item, 1, code.trim());
                // Display the new list
                self.FetchAll();
                // Hide fields
               
                swal("Successfully Updated!");
              }
            }
          }
        }
      };

    this.Delete = function (item) {
        var x = confirm("Are you sure you want to delete?");
          if (x){
             // Delete the current row
            this.countries.splice(item, 1);
            this.capitals.splice(item, 1);
            this.codes.splice(item, 1);
          // Display the new list
            this.FetchAll();
            swal("Successfully Deleted!");
          }
       else
          return false;
    };


  }
  app.FetchAll();
  function CloseInput() {
    location.reload();
    document.getElementById("saveEdit").reset();
  }
  // searchFunction(){
  //     var input, filter, table, tr, td, i;
  //       input = document.getElementById("myInput");
  //       filter = input.value.toUpperCase();
  //       table = document.getElementById("table2");
  //       tr = table.getElementsByTagName("countries");
  //       for (i = 0; i < tr.length; i++) {
  //         td = tr[i].getElementsByTagName("countries")[0];
  //         if (td) {
  //           if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
  //             tr[i].style.display = " ";
  //     } else {
  //       tr[i].style.display = "none";
  //     }
  //   }       
  // }
  //   }
