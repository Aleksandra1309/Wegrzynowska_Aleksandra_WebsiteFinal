$( "a.button" )$(document)
                        .on( "mouseover", function() {
                          $( this ).css( "background-color","#772408" );
                        } )
                        .on( "mouseout", function() {
                            $( this ).css( "background-color","#fff" );
                        } );
                        var t_angle;
                        $( ".kasamalogo" )
                        .on( "mouseover", function() {                                                                                                       
                            $(this).stop().animate( {rotation: 360}, 
                                {
                                    duration: 500,
                                    step: function(now, fx) {
                                        $(this).css({"transform": "rotate("+now+"deg)"});
                                    }
                                }
                            );
                                                      
                        } )
                        .on( "mouseout", function() {                                                    
                            $(this).stop().animate( {rotation: 0},  
                                {
                                    duration: 500,
                                    step: function(now, fx) {
                                        $(this).css({"transform": "rotate("+now+"deg)"});
                                    }
                                }
                            );
                                                       
                        } );