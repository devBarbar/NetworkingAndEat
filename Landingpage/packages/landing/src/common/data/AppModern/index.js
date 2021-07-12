/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from 'common/assets/image/appModern/logo.png';

export const navbar = {
  logo: logo,
  navMenu: [
    {
      id: 1,
      label: 'Home',
      path: '#home',
      offset: '84',
    },
    {
      id: 2,
      label: 'Key Features',
      path: '#features',
      offset: '81',
    },
    {
      id: 3,
      label: 'Showcase',
      path: '#testimonial',
      offset: '81',
    },
    {
      id: 5,
      label: 'Team Members',
      path: '#teamSection',
      offset: '81',
    },
  ],
};

/* ------------------------------------ */
// client data section
/* ------------------------------------ */
import client1 from 'common/assets/image/appModern/company1.png';
import client2 from 'common/assets/image/appModern/company2.png';
import client3 from 'common/assets/image/appModern/company3.png';
import client4 from 'common/assets/image/appModern/company4.png';

export const client = [
  {
    id: 1,
    image: client1,
    title: 'The new york times',
  },
  {
    id: 2,
    image: client2,
    title: 'amazon',
  },
  {
    id: 3,
    image: client3,
    title: 'evernote',
  },
  {
    id: 4,
    image: client4,
    title: 'the verge',
  },
];

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import featureIcon1 from 'common/assets/image/appModern/icon1.svg';
import featureIcon2 from 'common/assets/image/appModern/icon2.svg';
import featureIcon3 from 'common/assets/image/appModern/icon3.svg';
import featureIcon4 from 'common/assets/image/appModern/icon4.svg';

export const features = {
  slogan: 'KEY FEATURES',
  title: 'Deine ganz eigenen Vorteile',
  items: [
    {
      id: 1,
      color: '#F55767',
      icon: featureIcon1,
      title: 'gezielt',
      description:
        'Selektiere ganz genau wer zu dir passt und mit wem du in Kontakt treten möchtest: Ganz gleich ob es eine gezielte Branche, eine bestimmte Fähigkeit oder einfach nur eine gemeinsame Interesse sein soll. Neat findet immer den richtigen der dein Netzwerk bereichert',
    },
    {
      id: 2,
      color: '#ff4742',
      icon: featureIcon2,
      title: 'effizient',
      description:
        'Wäre es nicht mega wenn das Netzwerken sogar während einer Tätigkeit stattfinden würde? Gar kein Problem → verabrede dich über Neat wo auch immer di willst. Sei es im Park, beim Sport oder ganz klassisch beim ESSEN, jede Aktivität kann genutzt werden um ohne geraubte Zeit dein Netzwerk zu erweitern.',
    },
    {
      id: 3,
      color: '#fb5781',
      icon: featureIcon3,
      title: 'intuitiv',
      description:
        'Du hast keine Lust dich bei jedem in Form von privaten Nachrichten "selbst-verkaufen" zu müssen? kein Problem Neat bietet dir eine simple Art und weise dich über einen Matching-Algorithmus zu verabreden! ',
    },
    {
      id: 4,
      color: '#f18e47',
      icon: featureIcon4,
      title: 'interaktiv',
      description:
        'Egal ob mit Hilfe von Likes, Comments, Videos, Bildern oder Ratings zeige jeder Zeit deinen Forschritt dir dein Netzwerk aufzubauen und profitier darüber hinaus von dem Fortschritt der anderen! ',
    },
  ],
};

/* ------------------------------------ */
// App slider data section
/* ------------------------------------ */
import appSlide1 from 'common/assets/image/ScreenMocks/CategorySelection.png';
import appSlide2 from 'common/assets/image/ScreenMocks/Likes.png';
import appSlide3 from 'common/assets/image/ScreenMocks/CategorySelection.png';
import appIcon from 'common/assets/image/appModern/icon1.svg';

export const appSlider = {
  carousel: [
    {
      id: 1,
      image: appSlide1,
      title: 'App Slide 11',
    },
    {
      id: 2,
      image: appSlide2,
      title: 'App Slide 1',
    },
    {
      id: 3,
      image: appSlide3,
      title: 'App Slide 1',
    },
  ],
  title: 'Werfe schon jetzt einen kleinen Voranblick in deine APP',
  description:
    'Nichts ist heutzutage wichtiger, als ein gut ausgebautes und gepflegtes Netzwerk. Doch wie baut man sich dieses auf?',
  features: [
    {
      id: 1,
      icon: appIcon,
      title: 'Match Selektion',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    },
    {
      id: 2,
      icon: appIcon,
      title: 'Interaktion',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr .',
    },
    {
      id: 3,
      icon: appIcon,
      title: 'Profil',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    },
  ],
};

/* ------------------------------------ */
// Design and built data section
/* ------------------------------------ */
import codingImage from 'common/assets/image/appModern/code.png';

export const designAndBuilt = {
  image: codingImage,
  slogan: 'CODE INTEGRATION',
  title: 'Introducing coding features of our apps with Customization',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.',
};

/* ------------------------------------ */
// Product  Slide  section
/* ------------------------------------ */
import slide1 from 'common/assets/image/appModern/page1.png';
import slide2 from 'common/assets/image/appModern/page2.png';
import slide3 from 'common/assets/image/appModern/page3.png';

export const productData = {
  slogan: 'PRODUCT SHOWCASE',
  title: 'Eine Intuitive Nutzbare Plattform als Networking Zentrale',
  carousel: [
    {
      id: 1,
      thumb_url: slide1,
      link: '#1',
      title: 'slide 1',
    },
    {
      id: 2,
      thumb_url: slide2,
      link: '#1',
      title: 'slide 2',
    },
    {
      id: 3,
      thumb_url: slide3,
      link: '#1',
      title: 'slide 3',
    },

    {
      id: 4,
      thumb_url: slide1,
      link: '#1',
      title: 'slide 4',
    },

    {
      id: 5,
      thumb_url: slide3,
      link: '#1',
      title: 'slide 5',
    },
    {
      id: 6,
      thumb_url: slide2,
      link: '#1',
      title: 'slide 6',
    },
  ],
};

/* ------------------------------------ */
// Pricing policy data section
/* ------------------------------------ */
export const pricing = {
  slogan: 'PRICING PLAN',
  title: 'Choose your pricing policy',
  monthly: [
    {
      id: 1,
      title: 'Business Class',
      description: 'For Small teams or office',
      suggested: false,
      price: 0,
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
    {
      id: 2,
      title: 'Pro Master',
      description: 'For Best opportunities',
      suggested: true,
      price: 99,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
  ],
  annualy: [
    {
      id: 1,
      title: 'Pro Master',
      description: 'For Small teams or office',
      suggested: true,
      price: 999,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
    {
      id: 2,
      title: 'Enterprise',
      description: 'For Best opportunities',
      suggested: false,
      price: 1299,
      trail: 30,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// Team Portfolio data section
/* ------------------------------------ */
import member1 from 'common/assets/image/appModern/1.png';
import member2 from 'common/assets/image/appModern/2.png';
import member3 from 'common/assets/image/appModern/3.png';
import member4 from 'common/assets/image/appModern/4.png';
import member5 from 'common/assets/image/appModern/5.png';
import member6 from 'common/assets/image/appModern/6.png';
import member7 from 'common/assets/image/appModern/7.png';

export const teamMember = [
  {
    id: 1,
    name: 'Marvin Diebel',
    thumbnail_url: member1,
    designation: 'Co Founder',
    social_links: [
      {
        id: 1,
        icon: 'flaticon-facebook-logo',
        url: '#',
      },
      {
        id: 1,
        icon: 'flaticon-twitter-logo-silhouette',
        url: '#',
      },
      {
        id: 1,
        icon: 'flaticon-instagram',
        url: '#',
      },
      {
        id: 1,
        icon: 'flaticon-dribble-logo',
        url: '#',
      },
    ],
  },
  {
    id: 2,
    name: 'Barbar Ahmad',
    thumbnail_url: member2,
    designation: 'Co Founder',
    social_links: [
      {
        id: 1,
        icon: 'flaticon-facebook-logo',
        url: '#',
      },
      {
        id: 1,
        icon: 'flaticon-twitter-logo-silhouette',
        url: '#',
      },
      {
        id: 1,
        icon: 'flaticon-instagram',
        url: '#',
      },
      {
        id: 1,
        icon: 'flaticon-dribble-logo',
        url: '#',
      },
    ],
  },
];

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
export const testimonial = {
  slogan: 'TESTIMONIAL',
  title: 'Meet Client Satisfaction by using product',
  reviews: [
    {
      id: 1,
      title: 'Modern look & trending design',
      description:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar:
        'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
      name: 'Jon Doe',
      designation: 'CEO of RedQ Inc.',
      review: 4,
    },
    {
      id: 2,
      title: 'User friendly & Customizable',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Jeny Doe',
      designation: 'Co Founder of RedQ Inc.',
      review: 5,
    },
    {
      id: 3,
      title: 'User friendly & Customizable',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar:
        'https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg',
      name: 'Jon Doe',
      designation: 'Co Founder of RedQ Inc.',
      review: 5,
    },
  ],
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import chat from 'common/assets/image/appModern/chat.svg';
import group from 'common/assets/image/appModern/group.svg';
import github from 'common/assets/image/appModern/github.svg';
import footerLogo from 'common/assets/image/appModern/logoWhite.png';

export const footer = {
  widgets: [
    {
      id: 1,
      icon: chat,
      title: 'Join the Community',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
    {
      id: 2,
      icon: group,
      title: 'Join in Chat Community',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
    {
      id: 3,
      icon: github,
      title: 'Github Access',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
  ],
  logo: footerLogo,
  menu: [
    {
      id: 1,
      text: 'Home',
      link: '#',
    },
    {
      id: 2,
      text: 'Adversite',
      link: '#',
    },
    {
      id: 3,
      text: 'Supports',
      link: '#',
    },
    {
      id: 4,
      text: 'Marketing',
      link: '#',
    },
    {
      id: 5,
      text: 'Contact',
      link: '#',
    },
  ],
};
