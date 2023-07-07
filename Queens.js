
            function Queens(){
            var htmlData = "";
            /* Algorithm */
            var n = parseInt(document.getElementById('noOf').value); //Data Fetch Kar rhe hai..String ko integer me convert kr rhe hai
            var a = [...Array(n)].map(e => Array(n).fill(0)); //Creates an array of n*n and initially fill 0 in all cells
            if(n%2 == 0 && n>2){
                var i= 0, j=1;
                while(i<n && j<n){
                    a[i][j] = 1;
                    i=i+1;
                    j=j+2;
                }
            
                j=0;
                while(i<n && j<n){
                    a[i][j]=1;
                    i=i+1;
                    j=j+2;
                }    
            }else if(n!=3 && n!=2){
                var i=0, j=0;
                while(i<n && j<n){
                    a[i][j] = 1;
                    i=i+1;
                    j=j+2;
                }
            
                j=1;
                while(i<n && j<n){
                    a[i][j]=1;
                    i=i+1;
                    j=j+2;
                }   
            }
            for(i=0; i<a.length; i++){
                htmlData += "<div>";     //attribute gives us the ability to embed custom data attributes on all HTML elements.
                for(j=0; j<a[i].length; j++){
                    if((i+j)%2==0 ){
                        htmlData += '<div class="box ">'+ (a[i][j] == 1 ? "<img src='logo.png'>":"X" ) +'</div>';    
                    }
                    else{
                        htmlData += '<div class="box black">'+ (a[i][j] == 1 ? "<img src='logo.png' height>":"X" ) +'</div>'; 
                    }
                }
                htmlData += "</div>";
            }
            var parentDiv = document.getElementById("parentdiv");
            parentDiv.innerHTML = htmlData;
            }
