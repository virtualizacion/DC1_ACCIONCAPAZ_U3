var SEC2A = false;
var SEC2B = false;
var SEC2C = false;

var SEC4A = false;
var SEC4B = false;
var SEC4C = false;
var SEC4D = false;

var SEC6A = false;
var SEC6B = false;
var SEC6C = false;

$("document").ready(function(){
    $("#SEC02, #SEC03, #SEC04, #SEC05").hide();

    $("#BT-START").click(function(){
        $("#START").fadeOut();
    });
    
    $("#PDF-ACT1, #PDF-ACT3, #T2B01, #T2B02, #T2B03, #T2B04, #VIDACT2, #PDF1-T03, #PDF2-T03, #VIDTEM2").click(function(){
        $(this).css("opacity", ".5");
        $(this).removeClass("animated");
    });
    
    ///Tema 1 (Sección 2)
    
	$("#T1-CH01, #T1-CH02, #T1-CH03, #T1-CH04, #T1-TAB").hide();
	
    $("#PDF-ACT1").click(function(){
        $("#SEC02").fadeIn(3000, function(){
			$("#T1-CH01").fadeIn(function(){
				$("#T1-CH02").delay(2500).fadeIn(function(){
					$("#T1-CH03").delay(2500).fadeIn(function(){
						$("#T1-CH04").delay(2500).fadeIn(function(){
							$("#T1-TAB").delay(1500).fadeIn();
						});
					});
				});
			});
		});
    });

    $("#T1B1").click(function(){
        SEC2A = true;
        pasarSEC3(SEC2A,SEC2B,SEC2C);
    });
    $("#T1B2").click(function(){
        SEC2B = true;
        pasarSEC3(SEC2A,SEC2B,SEC2C);
    });
    $("#T1B3").click(function(){
        SEC2C = true;
        pasarSEC3(SEC2A,SEC2B,SEC2C);
    });
	$("#T1B1").click();
    
    /// FIN Tema 1 (Sección 2)
    
    //// Tema 2 (Sección 3)

    $("#VIDACT2").click(function(){
		$("#SEC04").fadeIn(3000, function(){
			$("#")
		});
	});
    			   
    /// FIN Tema 2 (Sección 3)
    
    ///Tema 3 (Sección 4)
    
	$("#T2-CH02, #P01, #P02, #P03, #T2-CH03, #T2-CH04, #T2-POP, #MENU-POP").hide();
	
	$("#VIDTEM2").click(function(){
//		$("#T2-CH02").delay(600000).fadeIn();
		$("#T2-CH02").fadeIn(3000, function(){
			$("#P01").fadeIn(1500, function(){
				$("#P02").fadeIn(1500, function(){
					$("#P03").fadeIn(1500, function(){
						$("#T2-CH03").delay(800).fadeIn(1500);
					});
				});
			});
		});
	});
	
	$("#PDF1-T03").click(function(){
		$("#T2-CH04").delay(800).fadeIn(1500);
	});
	$("#PDF2-T03").click(function(){
		$("#T2-POP").delay(1000).fadeIn(1500, function(){
			$("#MENU-POP").delay(1000).fadeIn();
		});
	});
	
    $("#T2B01").click(function(){
        SEC4A = true;
        pasarSEC5(SEC4A,SEC4B,SEC4C,SEC4D);
    });
    $("#T2B02").click(function(){
        SEC4B = true;
        pasarSEC5(SEC4A,SEC4B,SEC4C,SEC4D);
    });
    $("#T2B03").click(function(){
        SEC4C = true;
        pasarSEC5(SEC4A,SEC4B,SEC4C,SEC4D);
    });
    $("#T2B04").click(function(){
        SEC4D = true;
        pasarSEC5(SEC4A,SEC4B,SEC4C,SEC4D);
    });
    
    /// FIN Tema 3 (Sección 2)
    
    
    
});


function pasarSEC3(SEC2A,SEC2B,SEC2C){
    if(SEC2A && SEC2B && SEC2C){
        $("#SEC03").fadeIn(3000);
    }      
}

function pasarSEC5(SEC4A,SEC4B,SEC4C,SEC4D){
    if(SEC4A && SEC4B && SEC4C && SEC4D){
        $("#SEC05").fadeIn(3000);
    }      
}









