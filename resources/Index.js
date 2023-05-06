const navHeight = document.querySelector("nav").offsetHeight;
      const docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      const docWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#"]');
    
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(e) {
        e.preventDefault();
  
        var target = this.getAttribute('href');
        var $target = document.querySelector(target);
  
        window.scrollTo({
          top: $target.offsetTop,
          behavior: 'smooth'
        });
      });
    }
  });
  const learnMoreBtn = document.getElementById('learn-more-btn');
  const educationSection = document.querySelector('.education-section');
  
  learnMoreBtn.addEventListener('click', function() {
    educationSection.classList.toggle('active');
  });

  const skillsBtn = document.getElementById('Skills-btn');
  const skillsSection = document.querySelector('.skills-section');
  
  skillsBtn.addEventListener('click', function() {
    skillsSection.classList.toggle('active');
  });

  document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission
    submitForm();
  });

  function submitForm() {
    var form = document.getElementById("contact-form");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.action, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        form.reset(); // Clear the form
        alert("Thank you for your message!"); // Show a success message
      }
    };
    xhr.send(new FormData(form)); // Send the form data
  }
  




  


  





  