const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

 // Function to check Whether both passwords
            // is same or not.
            function checkPassword(form) {
                password1 = form.password1.value;
                password2 = form.password2.value;
  
                // If password not entered
                if (password1 == '')
                    alert ("رمز عبور را وارد کنید");
                      
                // If confirm password not entered
                else if (password2 == '')
                    alert ("تکرار رمز عبور را وارد کنید");
                      
                // If Not same return False.    
                else if (password1 != password2) {
                    alert ("\nرمز عبور یکسان نیست.دوباره تلاش کنید")
                    return false;
                }
  
                // If same return True.
                else{
                    alert("خوش آمدید")
                    return true;
                }
                
            }
            function vorod(){
                location.href="index.html"
            }

