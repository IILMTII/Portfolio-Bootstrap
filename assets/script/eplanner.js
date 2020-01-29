
const time = moment().format('dddd, MMMM Do YYYY');

var table_body;
var timer;


$(document).ready(function(){
        for(var i=0;i<9;i++){
        
            table_body+='<tr class="d-flex">';
        
            table_body +='<td class="col-sm-1">';
            if (i<3){
                table_body +=i+9+' AM';
            }else if (i===3){
                table_body +='12 PM';
            }else{
                table_body +=i-3+' PM';
            }
            
            table_body +='</td>';
        
            table_body +='<td class="col-sm-10">';
            table_body +='<textarea class="form-control green" rows="2" id="comment'+i+'"></textarea>';
            table_body +='</td>';
        
            table_body +='<td class="col-sm-1">';
            table_body +='<button class="fa fa-save btn btn-info" id="save'+i+'" style="font-size:36px;"></button>';
            table_body +='</td>';

            table_body+='</tr>';

        }
        
        $('tbody').append(table_body);

        for(var i=0;i<9;i++){
            $('body').on('keyup','#comment'+i+'', function(){
                console.log(this.value); //feedback test 
            });
        }
        
        for(var i=0;i<9;i++){
            if (i<3){
                timer = i+9+' am';
                if(moment().format('h a') == timer){
                    console.log(timer);
                    $('#comment'+i+'').removeClass('green');
                    $('#comment'+i+'').addClass('red');
                }
                if(moment().format('H') > i+9){
                    $('#comment'+i+'').removeClass('green');
                    $('#comment'+i+'').addClass('gray');
                }
            }else if (i===3){
                timer = 12+' pm';
                if(moment().format('h a') == timer){
                    console.log(timer);
                    $('#comment'+i+'').removeClass('green');
                    $('#comment'+i+'').addClass('red');
                }
                if(moment().format('H') > i+9){
                    $('#comment'+i+'').removeClass('green');
                    $('#comment'+i+'').addClass('gray');
                }
            }else if (i>3){
                timer = i-3+' pm';
                if(moment().format('h a') == timer){
                    console.log(timer);
                    $('#comment'+i+'').removeClass('green');
                    $('#comment'+i+'').addClass('red');
                }
                if(moment().format('H') > i+9){
                    $('#comment'+i+'').removeClass('green');
                    $('#comment'+i+'').addClass('gray');
                }
            }
        }

        // Solves storage issue but poor time complexity, any save button saves all entries due to the 2-D matrix
        // for(var i=0;i<9;i++){
        //     $('body').on('click','#save'+i+'', function(){
        //         for(var i=0;i<9;i++){
        //         localStorage.setItem("time"+i, $('#comment'+i+'').val());
        //         }
        //     });
        // }

        // for(var i=0;i<9;i++){   
        //     $('#comment'+i+'').val(localStorage.getItem("time"+i));
        // }

        // Delete all entries
        $('body').on('click','#deleteall', function(){
            window.location.reload();
            localStorage.clear();
        });

        //Better time complexity, tedious. Individually save and display events.
        $('body').on('click','#save0', function(){
            localStorage.setItem("time0", $('#comment0').val());
        });
        $('body').on('click','#save1', function(){
            localStorage.setItem("time1", $('#comment1').val());
        });
        $('body').on('click','#save2', function(){
            localStorage.setItem("time2", $('#comment2').val());
        });
        $('body').on('click','#save3', function(){
            localStorage.setItem("time3", $('#comment3').val());
        });
        $('body').on('click','#save4', function(){
            localStorage.setItem("time4", $('#comment4').val());
        });
        $('body').on('click','#save5', function(){
            localStorage.setItem("time5", $('#comment5').val());
        });
        $('body').on('click','#save6', function(){
            localStorage.setItem("time6", $('#comment6').val());
        });
        $('body').on('click','#save7', function(){
            localStorage.setItem("time7", $('#comment7').val());
        });
        $('body').on('click','#save8', function(){
            localStorage.setItem("time8", $('#comment8').val());
        });

        $('#comment0').val(localStorage.getItem("time0"));
        $('#comment1').val(localStorage.getItem("time1"));
        $('#comment2').val(localStorage.getItem("time2"));
        $('#comment3').val(localStorage.getItem("time3"));
        $('#comment4').val(localStorage.getItem("time4"));
        $('#comment5').val(localStorage.getItem("time5"));
        $('#comment6').val(localStorage.getItem("time6"));
        $('#comment7').val(localStorage.getItem("time7"));
        $('#comment8').val(localStorage.getItem("time8"));
});

$('#time').text(time);

