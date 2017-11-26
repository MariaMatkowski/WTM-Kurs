<body onload="init()">

<form name="myform" method="post" action="/actionpage.php" onsubmit="return storeValues(this);">
    <fieldset>
        <label for="name">Name:</label>
        <span><input type="text" size="32" name="name" id="name" value></span>
        <label for="email">E-Mail:</label>
        <span><input type="text" size="32" name="email" id="email" value></span>

        <input type="button" value="save Local Storage" onclick="saveValues()" />
        <input type="button" value="load Local Storage" onclick="loadValues()" /><br>

        <label for="female">Female</label>        
        <input type="radio" name="gender" id="female" value="female" checked>
        <label for="male">Male</label>
        <input type="radio" name="gender" id="male" value="male">
        <label for="other">Other</label>        
        <input type="radio" name="gender" id="other" value="other"><br>

    <h3>Which topics are you interested in?</h3>    
        <label for="onlineM"><input type="checkbox" name="interests" value="onlineM">Online Marketing</label><br>
        <!--<label for="busDev"><input type="checkbox" name="interests" value="busDev">Business Development</label><br>-->
        <label for="kpi"><input type="checkbox" name="interests" value="kpi">Company KPIs</label><br>
        <label for="custData"><input type="checkbox" name="interests" value="custData">Customer Data</label><br>
        <label for="webdesign"><input type="checkbox" name="interests" value="webdesign">Webdesign</label><br>
        <label for="abtesting"><input type="checkbox" name="interests" value="abtesting">AB-Testing and Website Optimization</label><br>

        <!-- Start Background Preference Selection -->

        <h3>Which is your favorite Background</h3>
        <select id="myTheme" onchange="setColorCookie()">
                <option value="Select Color">Select your color</option>
                <option value="blue">mountains</option>
                <option value="green">green</option>
                <option value="black">lake</option>
        </select>
        <script type="text/javascript">
                window.onload = function () {
                   if (document.cookie.length != 0) {
                       var nameValueArray = document.cookie.split("=");
                       document.getElementById("myTheme").value = nameValueArray[1];
                       document.bgColor = nameValueArray[1];
                   }
                }
                function setColorCookie() {
                    var selectedColor = document.getElementById("myTheme").value;
                    if(selectedColor != "Select Color") 
                    {
                        document.bgColor = selectedColor;
                        document.cookie = "color=" + selectedColor + ";expires=Fri, 8 Dec 2017 1:00:00 UTC;";
                    }
                }
        </script><br>

            <input type="button" value="save Cookie" onclick="setColorCookie()" />
            <input type="button" value="get Cookie" onclick="getCookie()" />

        <!-- End Background Preference Selection -->

    <h3>What is your actual problem or roadblocker?</h3>
        <input type="text" size="32" rows="6"  name="messsage" value><br>

    </fieldset>
        <input type="submit" value="Submit"> 
    </form>

    <table id="regtable">
        <thead>
            <tr>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Roll Number</th>
                <th>Subject</th>
            </tr>
        </thead>
         <tbody>
        
        </tbody>
     </table>



        <!-- Start Local Storage Name and Mail -->
    <script>
    function saveValues() {
        localStorage.name = document.getElementById("name").value;
        localStorage.email = document.getElementById("email").value;
    }

    function loadValues() {
        document.getElementById("name").value = localStorage.name;
        document.getElementById("email").value = localStorage.email;
    }

  
    
    </script>
        <!-- End Local Storage Name and Mail -->


        <!-- Start Cookie Buttons Code -->
    <script>
            function setCookie() {
                    //document.cookie = "Key=Value" + "; max-age= " + (60*60*24*30)+ ";";
                    /*var e = document.getElementById("myTheme");
                    var text = e.options[e.selectedIndex].text;
                    var cookieString = "E-Mail= " + document.getElementById("email").value + "; Lieblingsbild= " + text + "; max-age= " + (60*60*24*30)+ ";";*/
                } 
            
            function getCookie() {
                    if (document.cookie.length != 0)
                      {
                          var valueArray = document.cookie.split("=");
                          alert("Key= " + valueArray[0] + ", Value= " + valueArray[1])+";";
                      }  
                    else {
                        alert("Cookie not found");
                    } 
                }
                    
    </script>
        <!-- End Cookie Buttons Code -->

    <script src="main.js"></script>