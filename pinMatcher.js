
    	 
    	    //first condition is Hiding notify-section 
    	    // why i use querySelector?
    	    // i need to use specific class.

            document.querySelector(".notify-section").style.display = "none";

            //second condition is generating random number
            //Math.floor send a integer
    
            document.querySelector(".generate-btn").addEventListener("click",inputPin)
            function inputPin(){
                const pinButton = document.querySelector(".generatedValue")
    
                pinButton.value = Math.floor(Math.random()*(9999-1000 + 1 ) + 1000);
                pinButton.style.fontSize ="22px"
                pinButton.style.textAlign ="center"
                pinButton.style.color ="white"
                
                
            }
    
            //condition three taking input from button
    
            function inputValueTaker(x){
                const inputButton = document.querySelector(".inputValueShower")
                inputButton.value = inputButton.value + x;
                inputButton.style.textAlign ="right"
                inputButton.style.fontSize ="22px"
                inputButton.style.color ="white"
                
    
            }
            
             // condition 4 input number and get the matching message or error message
            // for simplicity we say in if area if 2 const is same show me right notification
            // else show me wrong notification
    
            function submitAction(){
                    const assignValue = document.querySelector(".inputValueShower").value
    
                    const generateValue = document.querySelector(".generatedValue").value
    
                    if(assignValue == generateValue){
                       document.querySelector(".notify-section").style.display="block"
                       document.querySelector(".right").style.display= "block"
                       document.querySelector(".wrong").style.display= "none"
    
                       document.querySelector(".action-left").innerText = 0 + ' try left'
    
                    }
    
                    else{
                        document.querySelector(".notify-section").style.display="block"
                        document.querySelector(".wrong").style.display ="block";
                        document.querySelector(".right").style.display ="none";
    
                        document.querySelector(".action-left").innerText = 2 + ' try left'
                    }
    
                    document.querySelector(".inputValueShower").value = "" 
                
                    
                    
            }
    
           
            //Last condition for extra marks
    
            function removeFromLast(){
                
               const previousValue =  document.querySelector(".inputValueShower").value
    
              const updateValue = previousValue.substring(0, previousValue.length - 1)
    
              document.querySelector(".inputValueShower").value = updateValue   
            }
    
    
            function clearAll(){
                document.querySelector(".inputValueShower").value = null;
                
            }
       