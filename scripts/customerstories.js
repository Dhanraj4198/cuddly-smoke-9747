let data= [{
    "hero__eyebrow": "Guidance",
    "heading": "Smart companies hire with Greenhouse",
    "button":"View all customer stories",
    "paragraph": "See what our customers are saying about how Greenhouse helped them achieve their business goals by becoming great at hiring.",
    "image": "https://sharp.services.greenhouse.io/production/woman-walking-down-stairs-in-open-office.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=d6ff158600cc991ebe392b6825ab64ba8c9c9773a938e97d9ed10552e505850a"},

    {"heading": "Read the definitive book on great hiring â€“ available now",
    "paragraph": "Our co-founders wrote the book on great hiring â€“ available everywhere books are sold. In , youâ€™ll get insights from top business leaders and strategies on how to turn hiring into a strategic advantage at your company.",
"textWithImage__subhead 2": "Talent Makers",
    "button": "See what experts are saying",
    "button href": "https://www.greenhouse.io/blog/drive-organizational-change-through-hiring-with-the-talent-makers-book-now-available-everywhere",
    "image": "https://sharp.services.greenhouse.io/production/batter-and-catcher-at-baseball-plate.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=bf8e5537033a2317219371ca06e4ece30f5472118144b6d5b4b45b3d6ef9c77e",
    "col-20": ""}

   
]



let container=document.getElementById("append");
data.forEach(function({heading,paragraph,image,button},i){
  
let div_king=document.createElement("div");
div_king.id="div_king";
let div_queen1=document.createElement("div")
let div_queen2=document.createElement("div");
let h1=document.createElement("h1");
h1.innerText=heading;
h1.style="text-align:start"
let p=document.createElement("p");
p.innerText=paragraph;
p.style="text-align:start;margin:15%"
let img=document.createElement("img");
img.src=image;
let btn=document.createElement("button");
btn.innerText=button;
div_queen1.append(h1,p,btn)
div_queen1.id="div_queen1"
div_queen2.append(img);

if(i%2===0){
let p4=document.createElement("p");
p4.innerText="Customer stories"
p4.style="color: #008561;margin-left:-5%;font-size:18px"
div_queen1.append(p4,h1,p,btn)
div_king.append(div_queen1,div_queen2);

container.append(div_king)}
else{
    let div_queen2_h1=document.createElement("h1");
    div_queen2_h1.id="div_queen2_h1"
    div_queen2_h1.innerText="MLB hits a hiring home run with Greenhouse"
    div_queen2_h1.style="color:white;width:100%;margin:0px;height:200px;padding-top:8%;font-size:50px"
    div_queen2.append(div_queen2_h1,img)
  div_king.append(div_queen2,div_queen1);
  container.append(div_king)
}
})




let data1=[
{
  "caption": "Article, Candidate sourcing, Recruiter tips",
  "listing__link": "How to research prospects for email outreach",
  "listing__link href": "https://www.greenhouse.io/blog/how-to-research-prospects-for-email-outreach",
  "paragraph_s": "The research and personalization process can be time-consuming when it comes to figuring out how to effectively personalize your email outreach to prospects. We've compiled some key prospecting and research tips in this blog to help you save time while creating thoughtful and personalized emails that engage prospects.",
  "image": "https://sharp.services.greenhouse.io/production/resources/Man-presenting-data-to-team-in-meeting-1.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=5772cff616319de08cad1349e70fd203253e0674030168fd48cef498ef395bc6"
},
{
  "caption": "Article, DE&I, Industry news",
  "listing__link": "Endgame: Building a people team for a new era of work",
  "listing__link href": "https://www.greenhouse.io/blog/building-a-people-team-for-a-new-era-of-work",
  "paragraph_s": "Every decision you make as a people team should start with the END in mind. The new era will be won by people-first companies who enhance experiences, nurture culture and develop people.",
  "image": "https://sharp.services.greenhouse.io/production/resources/Pregnant-woman-working-from-home.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=e8c866ac411e214461364123bd0de34dfac43afd246e59e488839093dae43e26"
},
{
  "caption": "Article, Recruiting metrics, Talent operations",
  "listing__link": "Owning your quality of hire to recruit and retain top talent",
  "listing__link href": "https://www.greenhouse.io/blog/owning-your-quality-of-hire-to-recruit-and-retain-top-talent",
  "paragraph_s": "Is quality of hire worth measuring? Thirty-nine percent of talent leaders believe itâ€™s the most valuable metric for building winning teams. But what exactly does it mean and how do you measure it? Those questions are much harder to answer. We asked our panel of talent leaders at Greenhouse Open to weigh in.",
  "image": "https://sharp.services.greenhouse.io/production/resources/Team-job-interview.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=70816314d2d9c024b35684378183de28c8805dc12f703fd0397174d8713d9574"
},
{
  "caption": "Article, DE&I, Industry news",
  "listing__link": "Being people-first: How Greenhouse is inspiring the evolution in workforce diversity",
  "listing__link href": "https://www.greenhouse.io/blog/being-people-first-an-update-on-greenhouses-workforce-diversity-goals",
  "paragraph_s": "Here at Greenhouse weâ€™ve always embraced the spirit of being a people-first company, which is why we're excited to share an update on our Greenhouse workforce diversity goals.",
  "image": "https://sharp.services.greenhouse.io/production/resources/Photo-of-four-people-in-an-oppen-office-space.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=a3d3a020fb1c6bd6de13183d26c25e5b4a84869d0dcfda741287b5b46779dccb"
},
{
  "caption": "Article, Candidate sourcing, Recruiter tips",
  "listing__link": "How to use email personalization to attract great candidates",
  "listing__link href": "https://www.greenhouse.io/blog/how-to-use-email-personalization-to-attract-great-candidates",
  "paragraph_s": "Have you ever sent (what you thought was) the perfect email to an awesome potential candidate, only to get left on read? Finding great prospects is only half the battle in sourcing â€“ and relatively easy compared to actually connecting with them. To convince prospects that they'd be great candidates for your open roles, youâ€™ll need to spend time personalizing your emails to demonstrate that you crafted them with the recipient in mind.",
  "image": "https://sharp.services.greenhouse.io/production/resources/Woman-on-video-meeting-at-coffee-shop.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=9e0619b4b6fc791f8702b14ce43cfaa328fdd39cb66c3a02532cab3c34aaf1cd"
},
{
  "caption": "Article, Recruiter tips",
  "listing__link": "How to be a successful recruiter in todayâ€™s challenging market",
  "listing__link href": "https://www.greenhouse.io/blog/how-to-be-a-successful-recruiter-challenging-market",
  "paragraph_s": "Itâ€™s no secret that we are seeing an unprecedented and challenging market to recruit in. Between the pandemic, the great resignation (also known as the great reshuffle) and rising inflation, the strategies that businesses have used for finding talent to fill critical roles are changing rapidly. What do top-class recruiting teams do in times like these? Read on to find out.",
  "image": "https://sharp.services.greenhouse.io/production/resources/Hiring-manager-on-phone-interview.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=ee52bb844e873e98a0b73072e97278457463a01b5e191fbeee8fcc6aa1aacbd6"
},
{
  "caption": "Article, DE&I",
  "listing__link": "5 ways to cultivate inclusion in your organization",
  "listing__link href": "https://www.greenhouse.io/blog/5-ways-to-cultivate-inclusion-in-your-organization",
  "paragraph_s": "â€œFriction is a lot like spinach. We donâ€™t like it, but itâ€™s good for us,â€ says Andrea Guendelman, the CEO of Speak_ and a specialist in expansive leadership. In the recent Greenhouse, Namely and Checkr webinar, The mark of inclusive leaders, Andrea explained that friction is inevitable when organizations welcome a diverse group of employees into their ranks. And while many diversity, equity and inclusion (DE&I) programs aim to reduce conflict, they should not aim to eliminate friction. Read on to learn more about why friction can actually be beneficial to your organization and how to introduce it thoughtfully.",
  "image": "https://sharp.services.greenhouse.io/production/resources/Two-executives-reviewing-resumes.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=668e133542a9354d8c7e5b2b0ea150fe8f33941ad4105f5c529eb94ccd832adc"
},
{
  "caption": "Article, Candidate sourcing, Recruiter tips",
  "listing__link": "How to write effective email subject lines to attract candidates",
  "listing__link href": "https://www.greenhouse.io/blog/how-to-write-effective-email-subject-lines-to-attract-candidates",
  "paragraph_s": "Email outreach is one of the most effective ways to find and attract top talent, but getting prospects interested in opening those emails is a constant challenge for recruiters. Thatâ€™s why crafting an email subject line that grabs peopleâ€™s attention and convinces them to read your email is a vital skill. A strong email subject line can help facilitate conversations with prospects and increase your email open rate.",
  "image": "https://sharp.services.greenhouse.io/production/resources/Two-women-working-together-in-office.jpeg?auto=format&fit=max&lossless=true&q=90&w=1440&s=a5aba13b90d60f19319014f0d49ee74fb58294ff9e1635b2d602d5c5e7795878"
},
// 2nd data

    {
      "caption": "Article, Candidate experience, Industry news",
      "listing__link": "How to attract talent in an extremely competitive market",
      "listing__link href": "https://www.greenhouse.io/blog/how-to-attract-talent-in-an-extremely-competitive-market",
      "paragraph_s": "In todayâ€™s talent climate, candidates have the upper hand. Companies that are slow to respond, donâ€™t provide a transparent look into their interview process and culture or donâ€™t engage candidates throughout the hiring process are losing out on talent. Hear how talent leaders from techâ€™s fastest growing startups are making candidate experience their key advantage to winning talent.",
      "image": "https://sharp.services.greenhouse.io/production/resources/Two-coworkers-looking-at-hiring-data.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=df0c7842791a1443f1829413d067bfc0f13468edeb3dd7a2e5cad646a7c7b01b"
    },
    {
      "caption": "Article, Company culture, Distributed hiring & work",
      "listing__link": "The future belongs to people-first companies",
      "listing__link href": "https://www.greenhouse.io/blog/the-future-belongs-to-people-first-companies",
      "paragraph_s": "People-first companies follow a philosophy of embracing people-first practices where they prioritize people in all their decision-making. They understand that people are their most valuable asset, so they regard all their people-practices â€“ especially hiringâ€“ as strategic rather than administrative functions. They distinguish themselves by attracting top-quality talent and working to create a diverse and inclusive environment in which talent can flourish.",
      "image": "https://sharp.services.greenhouse.io/production/resources/Happy-woman-drinking-coffee-at-work.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=40cded1c6135bfb9db56048b3d8ff1a22d3ddf72652763b09ba38a51a4a512d6"
    },
    {
      "caption": "Article, Candidate experience, Industry news",
      "listing__link": "Even with a potential recession, job seekers still have the upper hand",
      "listing__link href": "https://www.greenhouse.io/blog/candidate-economic-sentiment-report",
      "paragraph_s": "No matter what happens with the economy, the pressures to attract and retain talent arenâ€™t going away. We explore the highlights from the new Greenhouse Candidate Economic Sentiment report, which shares insights into candidate trends such as flexible work expectations, value alignment with the company and much more.",
      "image": "https://sharp.services.greenhouse.io/production/resources/Three-coworkers-standing-together-in-an-office.png?auto=format&fit=max&lossless=true&q=90&w=700&s=471a044ab495ac165dd7d2f76766be40dd54f94b691ebb7407256ee41cc82171"
    },
    {
      "caption": "Article, Company culture, Distributed hiring & work",
      "listing__link": "The forces shaping the future of work",
      "listing__link href": "https://www.greenhouse.io/blog/the-forces-shaping-the-future-of-work",
      "paragraph_s": "Putting people first is a powerful idea â€“ and certainly overdue. I became curious to understand how it came to be a current focus. I wanted to better understand the tectonic shifts that were occurring in the world of work, how the pandemic accelerated these existing trends and why top talent is seeking work at companies that put their people first.",
      "image": "https://sharp.services.greenhouse.io/production/resources/Woman-looking-at-data-on-conference-call.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=1e89323562e3c6d952d29104f8ecb00259794b2d0abe0c5bc508b2532158aec7"
    },
    {
      "caption": "Article, Company culture, DE&I",
      "listing__link": "3 keys to being a more inclusive leader: Learnings from the Cannes Lions International Festival of Creativity",
      "listing__link href": "https://www.greenhouse.io/blog/3-keys-to-being-a-more-inclusive-leader-learnings-from-the-cannes-lions-international-festival-of-creativity",
      "paragraph_s": "Whatâ€™s the secret recipe for being a great leader? As many of us know â€“ whether through research or personal experiences â€“ it usually includes excellent communication skills, self-awareness, integrity and empathy. But what advice do exceptional leaders know, live by and bring to life that makes the biggest difference to both their employeesâ€™ lives and the bottom line?\n\nThis is the question I was keen to answer while at the Cannes Lions International Festival of Creativity â€“ a place buzzing with incredible leaders and the brightest minds in advertising and business in Cannes, France, June 20â€“24, 2022.",
      "image": "https://sharp.services.greenhouse.io/production/resources/Cannes-team-breakfast.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=e1690f942f34bb0585c92310a5c1c6b4d21c1de31c7fc1936c10a98f2787659c"
    },
   
//    3rd data

    {
      "caption": "Article, Industry news",
      "listing__link": "Customers tell all: The Greenhouse Open experience",
      "listing__link href": "https://www.greenhouse.io/blog/customers-tell-all-the-greenhouse-open-experience",
      "paragraph_s": "Itâ€™s been three years since our last in-person Open Conference at the Javits Center in New York â€“ and this yearâ€™s Open Conference was better than ever. Whether you joined us in person or tuned in virtually, it was an eventful two days filled with important and helpful learnings, panel discussions, live workshops â€“ and puppies (yes, puppies!).",
      "image": "https://sharp.services.greenhouse.io/production/resources/Smiling-Open-conference-attendees.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=a5bc2ed6b1886136b485836eba6dafbe867bda7a9182f6a75901ec88c408db69"
    },
    {
      "caption": "Article, Company culture",
      "listing__link": "4 crucial factors for employee engagement and retention",
      "listing__link href": "https://www.greenhouse.io/blog/4-crucial-factors-for-employee-engagement-and-retention",
      "paragraph_s": "If you want to build a strong, productive team, employee engagement and retention should be a priority. To get you started, here are four crucial factors to put at the top of your list.",
      "image": "https://sharp.services.greenhouse.io/production/resources/Happy-male-at-work.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=a09d74a48091e0381f52f294162dc23f6aaa1930cf54a467c1365da0862a66bc"
    },
    {
      "caption": "Article, Industry news",
      "listing__link": "5 key learnings from Greenhouse Open 2022",
      "listing__link href": "https://www.greenhouse.io/blog/5-key-learnings-from-greenhouse-open-2022",
      "paragraph_s": "It finally happened â€“ Greenhouse Open came back and was better than ever. Whether you joined us live at Open 2022 and want to relive the magic or missed it and want to catch the highlights, weâ€™ve got you covered. Read on for some of the key learnings and themes we heard in two days of keynotes, panel discussions and workshops filled with forward-thinking talent acquisition professionals.",
      "image": "https://sharp.services.greenhouse.io/production/resources/Group-of-people-smiling-and-working-at-Open-2022-lounge-space.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=5b6095446fe43c6d871672314024e05658e4a23ec70d711f83a800da6ebece1f"
    },
    {
      "caption": "Article, Hiring tech stack, Industry news",
      "listing__link": "Stay on top of recruiting industry trends with the GartnerÂ® Market Guide for Talent Acquisition (Recruiting)Technologies",
      "listing__link href": "https://www.greenhouse.io/blog/recruiting-industry-trends-gartner-market-guide-for-talent-acquisition-recruiting-technologies",
      "paragraph_s": "Choosing the right technology partner can transform your hiring process, making it faster, better and fairer for everyone. But how do you wade through all the information thatâ€™s out there to make the choice thatâ€™s right for your company? The team at Gartner did the heavy lifting so you donâ€™t have to. Here are some of the key takeaways from this yearâ€™s Market Guide for Talent Acquisition (Recruiting) Technologies report.â€‹",
      "image": "https://sharp.services.greenhouse.io/production/resources/Woman-working-on-laptop-outside.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=fc10a5b8e854d161ccde071f19ffb81d85123ce2797e0a8d3570eea8b9629bb5"
    },
    {
      "caption": "Article, Company culture, Talent strategy",
      "listing__link": "Whatâ€™s next â€“ the rise of the people-first company",
      "listing__link href": "https://www.greenhouse.io/blog/whats-next-the-rise-of-the-people-first-company",
      "paragraph_s": "2022 is a landmark year for Greenhouse. To commemorate the return of hosting Greenhouse Open in person and the companyâ€™s tenth anniversary, CEO and co-founder Daniel Chait reflects on the past ten years in talent acquisition.",
      "image": "https://sharp.services.greenhouse.io/production/resources/Daniel-Chait-Open2022-Keynote.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=a4cf883fbe96befa757cda8a32364b96c0a456d73cbeb0dc12014bbeea5a6a6d"
    },
    {
      "caption": "Article, Candidate sourcing",
      "listing__link": "Sourcing Automation: Greenhouseâ€™s new solution to find, reach and engage passive talent",
      "listing__link href": "https://www.greenhouse.io/blog/find-reach-engage-passive-talent-with-sourcing-automation",
      "paragraph_s": "Introducing Sourcing Automation: a new outbound sourcing solution that helps users find, reach and engage top talent quickly and effectively â€“ all with Greenhouse. Sourcing Automation improves email deliverability, scales outreach through personalized and automated campaigns and gives hiring teams the insights they need to become sourcing experts â€“ and turn more candidates into hires.",
      "image": "https://sharp.services.greenhouse.io/production/resources/Woman-looking-at-laptop-with-sourcing-automation-UI.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=1538d649740172d285a79d7823d88bb103215d5024e210a24757a3722030911b"
    },
    {
      "caption": "Article, Candidate sourcing, Recruiter tips",
      "listing__link": "Sourcing emails: The breakup email",
      "listing__link href": "https://www.greenhouse.io/blog/sourcing-emails-the-breakup-email",
      "paragraph_s": "While you can create compelling and enticing email outreach campaigns, it's possible to not receive any responses or signs of engagement from prospects. This is where the breakup email comes in. In our Sourcing emails series, weâ€™re sharing tips on how to craft the last step in your email outreach to ensure your campaign ends on a positive note and leaves room for re-engagement in the future.",
      "image": "https://sharp.services.greenhouse.io/production/resources/serious-woman-working-on-laptop.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=8d5fe7a070c31fc24b05dcb544a6d36fc6f930182d60082c891a683fbf9e4734"
    },
    {
      "caption": "Article, Industry news",
      "listing__link": "Growing our presence in EMEA: Greenhouse named a Core Leader in talent acquisition in the 2022 Fosway 9-Gridâ„¢",
      "listing__link href": "https://www.greenhouse.io/blog/growing-our-presence-in-emea-greenhouse-named-a-core-leader-in-the-2022-fosway-9-grid",
      "paragraph_s": "Itâ€™s an exciting time for hiring in Europe. The 2022 Fosway 9-Gridâ„¢ for Talent Acquisition reveals both larger trends and key players in the market. And Greenhouse couldnâ€™t be more thrilled to be a part of this growth. Learn how being named as a Core Leader in the Fosway 9-Gridâ„¢ is a reflection of our commitment to and development within the EMEA region.",
      "image": "https://sharp.services.greenhouse.io/production/resources/Woman-waiting-for-meeting-to-start.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=16e2ccfa6fec2d3c6630949ef4322930436fc898acf62b99734abc7c757ba969"
    }
   
   
]


display(data1)
function display(data1){
document.getElementById("append_data").innerHTML=""
data1.forEach(function({caption,listing__link,paragraph_s,image}){
let div=document.createElement("div");
let p=document.createElement("p");
p.innerText=caption;
let h3=document.createElement("h1");
h3.innerText=listing__link;
let p2=document.createElement("p");
p2.innerText=paragraph_s;
let img=document.createElement("img");
img.src=image;
div.append(p,h3,p2)
let div1=document.createElement("div");
div1.append(img)
let div3=document.createElement("div");
div3.append(div,div1)
div3.className="display_grid"
let hr=document.createElement("hr")
document.getElementById("append_data").append(div3,hr)
h3.onclick=function(){
window.location.href="readblog.html"
}



})
}


// filter part

let filter=()=>{
console.log("yes")
let value=document.getElementById("topic").value;
console.log(value)
let arr=[]
for(let i=0;i<data1.length;i++){

if(data1[i].caption.includes(value)){
 console.log(data1[i].caption)
 arr.push(data1[i])
}
 //console.log("NO")

}
console.log(arr)
display(arr)
}
// clear part of filter
let clearone=()=>{

display(data1)
}