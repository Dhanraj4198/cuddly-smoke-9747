function navbar(){
    return `<div id="logo">
    <img
      src="https://mma.prnewswire.com/media/1095273/GREENHOUSE_WORDMARK_GREEN_Logo.jpg?p=facebook"
      alt=""
    />
  </div>
  <div id="tabs">
    <div class="dropdown_menu" data-dropdown_menu>
      <button class="link" data-dropdown_menu-button>Products and solutions</button>
      <div class="dropdown">
        <div class="dropdown-content">
          <ul>
            Products
            <li><a href="#">Recruiting</a></li>
            <li><a href="#">Onboarding</a></li>
          </ul>
          <ul>
            Segments
            <li><a href="#">Enterprise</a></li>
            <li><a href="#">Small to midsize</a></li>
          </ul>
        </div>
        <div class="dropdown-content">
          <ul>
            Solutions
            <li><a href="./integrations.html">Integrations</a></li>
            <li><a href="#">Structured hiring</a></li>
            <li><a href="#">Talent sourcing</a></li>
            <li><a href="#">Candidate experience</a></li>
            <li><a href="#">Diversity,equity & inclusion</a></li>
            <li><a href="@">More solutions</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="dropdown_menu" data-dropdown_menu>
      <button class="link" data-dropdown_menu-button>Resources</button>
      <div class="dropdown">
       <div class="dropdown-content">
       <h2><a href="./blog.html">Blog</a></h2>
       <h2><a href="./guidance.html">Guidance</a></h2>
       <h2><a href="#">Customer stories</a></h2>
       <h2><a href="#">Hiring glossary</a></h2>
    </div>
    <div class="dropdown-content seperate" >
        <div>
            <img src="https://sharp.services.greenhouse.io/production/Talent-Makers-book-cover-n.png?auto=format&fit=max&lossless=true&q=90&w=426&s=39652d73de16c7719a700214bce70d443705da7a6050c920b1c5a9cdbad2d60a" alt="">
        </div>
        <div>
            <p>Now available</p>
            <p>Talent Makers — The definitive book on great <br> hiring</p>
            <p>We’ve packed all our insights, strategies and tips into a book that will help you make hiring your superpower.</p>
            <button class="dropBtn">See the reviews</button>
        </div>
    </div>
      </div>
    </div>
    <div class="dropdown_menu" data-dropdown_menu>
      <button class="link" data-dropdown_menu-button>About us</button>
      <div class="dropdown">
        <div class="dropdown-content">
         <h2><a href="./mission.html">Mission</a></h2>
         <h2><a href="#">Belonging</a></h2>
         <h2><a href="#">Company</a></h2>
         <h2><a href="#">Careers</a></h2>
         <h2><a href="#">Press & awards</a></h2>
         <h2><a href="#">Contact</a></h2>
        </div>
        <div class="dropdown-content seperate" >
            <div>
                <img src="https://sharp.services.greenhouse.io/production/Greenhouse-Pride-tshirt-n.jpg?auto=format&fit=max&lossless=true&q=90&w=426&s=de44e24806b388901684135be6acb800917d827f4b3424eade2f1300c44d2177" alt="">
            </div>
            <div>
                <p>Greenhouse celebrates Pride</p>
                <p>Buy a shirt, help an LGBTQ+ teen</p>
                <p>We’re shining a spotlight on the LGBTQ+ community with our new  Pride t-shirt. 100% of the proceeds are going to support The Trevor Project and the Ali Forney Center.</p>
                <button class="dropBtn">Get your Pride shirt</button>
            </div>
        </div>
      </div>
    </div>
    <div class="dropdown_menu" data-dropdown_menu>
      <button class="link" data-dropdown_menu-button>Community</button>
      <div class="dropdown">
        <div class="dropdown-content">
            <h2><a href="#">Events</a></h2>
            <h2><a href="#">Open</a></h2>
            <h2><a href="#">Talent Makers</a></h2>
            <h2><a href="#">Newsletter</a></h2>
        </div>
        <div class="dropdown-content seperate" >
            <div>
                <img src="https://sharp.services.greenhouse.io/production/Photo-of-a-woman-wearing-a-headdress-n.png?auto=format&fit=max&lossless=true&q=90&w=426&s=efbf30b0032415c27114661976fb1308ac70708cc11d1f5ceca5c4f67344fbef" alt="">
            </div>
            <div>
                <p>Open Conference 2022</p>
                <p>Hire for what’s next</p>
                <p>Join us in person or virtually at the new Jacob Javits Center for a  two-day conference designed to elevate your hiring in real time, from  May 24–25, 2022.</p>
                <button class="dropBtn">Learn more</button>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div id="btns">
    <button id="signInBtn">Sign in</button>
    <button id="demoBtn">Request a demo</button>
    <div id="searchBtn">
      <img
        src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
        alt=""
      />
    </div>
  </div>
  
  
  `
}

export default navbar