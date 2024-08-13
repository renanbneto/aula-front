

jQuery(document).ready(function () {

    jQuery("h1").css("color", "red");

    jQuery(".bt-add").click(function () {

        var cidade = $("#cidade").val();

        var lista = $("#lista").html();

        if (cidade != "") {
            if (lista.search(cidade) == -1) {

                jQuery("#lista").append("<li>" + cidade);

                $("#cidade").val("");

            }

            else (lista == lista)
            {
                alert("Esta cidade já foi cadastrada!");
            }

                
            

        }
    });

});


