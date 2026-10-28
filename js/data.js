/*
  All editable content lives here. Edit the text, covers and Amazon links, then refresh the page.
  Image paths are relative to index.html. A missing image falls back to a soft gradient.
*/
window.SITE = {
  author: {
    name: "Lawrence M. Zaccaro",
    intro:
      "Children's books, a science fiction thriller and an adult comedy, from a former research biologist who turned to storytelling.",
    // Shown in the footer as a contact link. Leave empty to hide it.
    email: "zaccarolarry@gmail.com",
    amazonAuthorUrl: "https://www.amazon.com/stores/author/B001K8HLRQ/allbooks",
    // Add real profile links here. Empty ones are hidden.
    social: { facebook: "", x: "", instagram: "", goodreads: "" }
  },

  /*
    One entry per book. featured: true puts it in the tilted showcase (use four).
    rating and ratings are the Amazon star rating and review count, shown only when present.
  */
  books: [
    {
      title: "Auntie Wintie and the Plopes",
      edition: "Second Edition",
      kind: "Children's story",
      tagline: "A kindly widow and her mysterious furry friends.",
      blurb: "After a sad family event, gentle Auntie Wintie is disheartened and alone, until a community of mysterious plopes helps her regain her happiness and love of life.",
      icon: "fa-heart",
      cover: "images/books/book-1.jpg",
      amazon: "https://www.amazon.com/dp/B0H2WTBK6H",
      featured: true
    },
    {
      title: "Scraps",
      edition: "When Crumbs Are Not Enough",
      kind: "Read aloud for little ones",
      tagline: "The charming follow up to Crumbs.",
      blurb: "Rhyming text, beautiful illustrations and positive messages, written to be read aloud to very young children and preschoolers just starting their reading journey.",
      icon: "fa-cookie",
      cover: "images/books/book-2.jpg",
      amazon: "https://www.amazon.com/dp/B0GYZB75BL",
      featured: true
    },
    {
      title: "Mrs. Razlog",
      edition: "And Her Dogs",
      kind: "Fiction",
      tagline: "A misunderstood loner, her dogs and a town in crisis.",
      blurb: "Mrs. Razlog lives alone in an old farmhouse with only her dogs for company. When tension in the village escalates and an emergency strikes, everything changes.",
      icon: "fa-dog",
      cover: "images/books/book-3.jpg",
      amazon: "https://www.amazon.com/dp/B0GP22QWMJ",
      featured: true
    },
    {
      title: "All The Beautiful Things",
      edition: "Grandpa Answers Liv's Tough Questions",
      kind: "Family conversation starter",
      tagline: "A gentle walk in the woods and the biggest questions.",
      blurb: "Young mouse Olivia and her Grandpa M take a walk in the woods, where he gives thoughtful, clear answers to her questions about life, death, God and love.",
      icon: "fa-tree",
      cover: "images/books/book-4.jpg",
      amazon: "https://www.amazon.com/dp/B0F7HTXL31",
      featured: true
    },
    {
      title: "Crumbs",
      edition: "The Unauthorized Biography",
      kind: "Read aloud for young children",
      tagline: "The pages look good enough to eat.",
      blurb: "The perfect book to read aloud to young children, with pages that look good enough to eat.",
      icon: "fa-cookie-bite",
      cover: "images/books/book-5.jpg",
      amazon: "https://www.amazon.com/dp/B0D6C1513C"
    },
    {
      title: "Chandler's List",
      edition: "A Comedy",
      kind: "Adult comedy novel",
      tagline: "A risky, risqué adventure to rekindle the spark.",
      blurb: "A couple in their forties, bogged down by debt, work and family, set out on a risky and risqué adventure to rekindle their love and passion. Adapted as a screenplay and being shopped in Hollywood.",
      icon: "fa-masks-theater",
      cover: "images/books/book-6.jpg",
      amazon: "https://www.amazon.com/dp/B08F5HL428",
    },
    {
      title: "Amy and the Orca",
      edition: "",
      kind: "Children's adventure",
      tagline: "Inspired by a real event in the author's family.",
      blurb: "A delightful children's adventure inspired by a real life event that happened to the author's own family.",
      icon: "fa-water",
      cover: "images/books/book-7.jpg",
      amazon: "https://www.amazon.com/dp/B07F2M4PXW",
      rating: "4.6",
      ratings: 16,
    },
    {
      title: "Convergent",
      edition: "A Science Fiction Novel",
      kind: "Science fiction thriller",
      tagline: "Far reaching ideas inside a gripping story.",
      blurb: "A thought provoking social thriller with far reaching ideas embedded in the story. Adapted as a screenplay and being shopped in Hollywood.",
      icon: "fa-rocket",
      cover: "images/books/book-8.jpg",
      amazon: "https://www.amazon.com/dp/B089NZGBYF",
      rating: "3.7",
      ratings: 7,
    }
  ],

  faqs: [
    {
      q: "Where can I buy the books?",
      a: "Every book is available on Amazon. Use the Buy on Amazon button on any title and you will go straight to its page."
    },
    {
      q: "Which book should I start with?",
      a: "For young children, try Crumbs, Scraps or Amy and the Orca. For a gentle family conversation, choose All The Beautiful Things. Adults will enjoy Convergent, a science fiction thriller, or Chandler's List, a comedy."
    },
    {
      q: "Are the books available as Kindle and paperback?",
      a: "Yes. Each title has a Kindle edition and a paperback. Open the book on Amazon to see every edition and choose the one that suits you."
    },
    {
      q: "Will Convergent or Chandler's List become films?",
      a: "Both books have been adapted as movie screenplays and are currently being shopped in Hollywood."
    },
    {
      q: "What is Wordplay?",
      a: "Wordplay is an educational family card game created by Lawrence through his company, Mystic Creative Products. Players lay down cards to make new words or add to words already played, and collect points to win."
    }
  ]
};
