function encrypt_decrypt(){

     $('body').off('click', '#clear_out') 
               .on('click', "#clear_out", function(){ 
                      $('#outputtextdecode').val('');
               });
    
   $('body').off('click', '#action_start') 
               .on('click', "#action_start", function(){
    var  val = $('#selectdecode').val();
    //console.log(val)
        switch (val){
            case  '1':
                        // convert  ASCII to Binary
                        event.preventDefault();      
                               var  input= document.getElementById("inputtextdecode").value,
                                    _length = input.length,
                                    output_new=document.getElementById("outputtextdecode"),
                                    output = [];
                                      for (var i = 0;i < _length; i++) {
                                        var bin = input[i].charCodeAt().toString(2);
                                        //console.log(bin)
                                        output.push(Array(8-bin.length+1).join("0") + bin);
                                       // console.log(output)
                                      } 
                                        output_new.value = " ";
                                        output_new.value += output.join(" ");
                                        return  output_new.value
                       
            break
            case '2':
                        // BASE 64 Encode
                        event.preventDefault()
                        var input = $('#inputtextdecode').val(),
                               output = $('#outputtextdecode').val();
                               var encodedString = btoa(input);
                               $('#outputtextdecode').val('');
                               $('#outputtextdecode').val(encodedString);
            break
            case '3':
                        //Base 64 Decode
                        event.preventDefault()
                        var input = $('#inputtextdecode').val(),
                               output = $('#outputtextdecode').val();
                               var encodedString = atob(input);
                               $('#outputtextdecode').val('');
                               $('#outputtextdecode').val(encodedString);
            break
             case  '4':
                        // convert  ASCII to Binary
                        event.preventDefault();      
                               var  input= document.getElementById("inputtextdecode").value,
                                       output_new=document.getElementById("outputtextdecode"),
                                        binString = '';
                                    input.split(' ').map(function(bin) {
                                        binString += String.fromCharCode(parseInt(bin, 2));
                                      });
                                        output_new.value = " ";
                                        output_new.value = binString
                                        return  output_new.value
                       
            break
            
        
        }
    });
}