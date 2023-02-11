

for (let y = 1; y <= 10 ; y++) {
    for ( let x = 1; x <= 10; x++) {
        if ( y >= x) {
            document.write(" * ");
                       
        } else   {
            document.write(" _ ");
            
        }
    }
    document.write("<br>");
};


document.write("<br>")


document.write("<br>")

for (let y = 0; y <= 10 ; y++) {
    for ( let x = 0; x <= 10; x++) {
        if ( y <= x -1 || y + x <= 9 ) {
            document.write(" _ ");
                       
        } else   {
            document.write(" * ");
            
        }
    }
    document.write("<br>");
};


document.write("<br>")

for (let y = 0; y <= 10 ; y++) {
    for ( let x = 0; x <= 10; x++) {
        if ( y <= x -1 || y + x <= 9) {
            document.write(" _ ");
                       
        } else   {
            document.write(" * ");
            
        }
    }
    document.write("<br>");
};













