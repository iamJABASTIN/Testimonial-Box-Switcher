const testimonialConatiner = document.querySelector(".testimonial-container");
const testimonialText = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-img");
const userName = document.querySelector(".user-name");
const userRole = document.querySelector(".role");
let idx = 1;
const testimonials = [
  {
    name: "Sopna Sundhari",
    role: "Creative Head",
    image: "https://randomuser.me/api/portraits/women/49.jpg",
    testimonial:
      "I never believed in miracles until I met our IT guy, Bob 'The Debugger' Smith. He's like a wizard with a keyboard, magically fixing all our tech issues faster than you can say '404 error'. Thanks, Bob, for keeping our sanity intact!",
  },
  {
    name: " Alice",
    role: "Caffeine Connoisseur",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    testimonial:
      "As the office coffee enthusiast, I must say, Joe 'Java Master' Johnson's brews are the only reason I'm able to function before 10 AM. His coffee is so good, it's practically a hug in a mug! Keep brewing the magic, Joe!",
  },
  {
    name: "Tom",
    role: "Budget Buster",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
    testimonial:
      "Working with Sally 'Spreadsheet Sorceress' Williams has been a game-changer for our finance team. Her Excel skills are so impressive, they've got us questioning if she secretly has a PhD in PivotTables! Thanks for making numbers fun, Sally!",
  },
  {
    name: "Emily",
    role: "Inkling Investigator",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    testimonial:
      "Let me tell you about Dave 'Tech Whisperer' Thompson. He's got this uncanny ability to communicate with our office printers in a language only they understand. We've named him our official Print Guru, and our paper jams have never been happier!",
  },
  {
    name: "Mark",
    role: "Deadline Dodger",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
    testimonial:
      "When it comes to tackling deadlines with finesse and flair, nobody does it better than our project manager, Lisa 'Deadline Dynamo' Rodriguez. She's like a superhero in business casual, swooping in to save the day with her trusty Gantt chart!",
  },
];

setInterval(updateTestimonials, 10000);

function updateTestimonials() {
  const { name, role, image, testimonial } = testimonials[idx];
  userName.innerHTML = name;
  userRole.innerHTML = role;
  userImage.src = image;
  testimonialText.innerHTML = testimonial;
  idx++;
  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}
