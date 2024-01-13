    function filtruj() {
        const filtr = document.getElementById("szukajka").value.toUpperCase();
        const trs = document.getElementById("dane").getElementsByTagName("tr");

        console.log(trs);
        for (let i = 0; i < trs.length; i++) {
            td = trs[i].getElementsByTagName("td")[1];
            if (td) {
                let txtValue = td.innerHTML;
                if (txtValue.toUpperCase().indexOf(filtr) > -1) {
                    trs[i].style.display = "";
                } else {
                    trs[i].style.display = "none";
                }
            }
        }
    }
    // if (window.history.replaceState) {
    //     window.history.replaceState(null, null, window.location.href);
    // }
    // $(window).scroll(function() {
    //     sessionStorage.scrollTop = $(this).scrollTop();
    // });
    // $(document).ready(function() {
    //     if (sessionStorage.scrollTop != "undefined") {
    //         $(window).scrollTop(sessionStorage.scrollTop);
    //     }
    // });
    // Zgadza się. Ukradłem. Ale tylko frajer by nie skorzystał, trzeba było pilnować.