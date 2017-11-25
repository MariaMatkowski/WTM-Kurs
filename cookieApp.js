
        document.cookie = "username=John Doe; expires=Thu, 18 Dec 2017 12:00:00 UTC; path=/"; 
        var a = new Date();
        a = new Date(a.getTime() +1000*60*60*24*365);
        document.cookie = 'meincookie=meinwert; expires='+ 
                  a.toGMTString()+';' + 'path=/'+ ';';  
        
   