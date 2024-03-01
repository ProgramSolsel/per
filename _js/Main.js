// function openCv(opsion, element,color) {
//     var i, tabcontent, tablink
//     tabcontent = document.getElementsByClassName("content")
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none"
//     }
//     tablink = document.getElementsByClassName("tablink")
//     for (i = 0; i < tablink.length; i++) {
//         tablink[i].style.backgroundColor = ""
//     }
//     document.getElementById(opsion).style.display = "block"
//     element.style.backgroundColor = color
// }

// document.getElementById("defaultOpen").click()

// function myOpenFunction() {
//     // Declare variables
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');
  
//     // Loop through all list items, and hide or show them based on the search query
//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }

function openCv(opsion, element, color) {
    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].style.backgroundColor = "";
    }
    document.getElementById(opsion).style.display = "block";
    element.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();

function myOpenFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Hide all list items initially
    for (i = 0; i < li.length; i++) {
        li[i].style.display = "none";
    }

    // Loop through all list items, and show them based on the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }
    }
}
