var playing = true;

document.addEventListener("DOMContentLoaded", function(event) {
  
    var a = $('#audio')

    a.prop("volume", 0.2)

    $('#pausaraudio').click( function () { 
        
        //$('#audio').stop();  
       
       if(playing == true)
        {
                a.trigger("pause")
                playing=false
                $('#pausaraudio').html('Voltar a música')
        }        
       else
        {
            a.trigger("play")
            playing = true
            $('#pausaraudio').html('Pausar a música')
        }                
    });
});
    //var audio = document.getElementById('audio');

   


