



const contact_me = document.querySelector(".contact_me");
const contact_info = document.querySelector(".contact_info");
const close_contact = document.querySelector(".close_contact"); 
const contact_info_profile = document.querySelector(".contact_info_profile");
        
        // Ensure the elements exist before accessing them
         // Skip iteration if any element is missing
close_contact.addEventListener("click", function(){
      contact_info.style.display = "none";
})       
        // Toggle visibility based on the current state of the dots
contact_me.addEventListener("click", function(){
    if (contact_info.style.display === "none"){
            contact_info.style.display = "inline";                   
    }else{
            contact_info.style.display = "none";
    }

    if (contact_info_profile.style.display === "none"){
            contact_info_profile.style.display = "inline";                   
    }else{
            contact_info_profile.style.display = "none";
    }
    })
    // contact me info
//testing

function emailsend(){
    var name = document.querySelector(".name").value;
    var phone = document.querySelector(".phone").value;
    var email = document.querySelector(".email").value;

    var messsageBody = "Name " + name +
    "<br/> Phone " + phone +
    "<br/> Email " + email;
    Email.send({
    Host : "s1.maildns.net",
    Username : "ju5tbe32w@gmail.com",
    Password : "48C2EF7842E78A3C07C880C3B6B687F317E0",
    To : 'uwdursstw32w@gmail.com',
    From : "ju5tbe32w@gmail.com",
    Subject : "This is the subject",
    Body : messsageBody 
}).then(
  message => {
        if(message=='OK'){
                swal("Sucessful", "You clicked the button!", "success");
        }
        else{
                swal("unsucesssful", "You clicked the button!", "error");
        }
  }
);
}
