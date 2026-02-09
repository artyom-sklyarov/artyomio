export const TEXTS = {
  navBar: {
    name: "Artyom Sklyarov",
    workWithMe: "contact →",
    socials: [{
      label: "Github",
      link: "https://github.com/artyom-sklyarov"
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/artyom-sklyarov-75a00a36b"
    },
    ],
  },
  workExperience: {
    title: "WORK EXPERIENCE",
    cta: '→',
    experience: [
      {
        title: "Veon",
        link: "https://www.veon.com",
        description: "Special projects"
      },
      {
        title: 'Ingos',
        link: 'https://www.ingosinvest-am.ru',
        description: "Reimagining the investment platform"
      },
      {
        title: "TASS",
        link: "https://www.tass.com",
        description: "Developing a real-time newswire service"

      }]
  },

  homePage: {
    greeting: "👋",
  },
  contactPage: {
    headline: "Contact me",
    telegram: {
      username: "@ArtiomSklyarov",
      label: "telegram"
    },
    email: {
      address: "hi@artyom.io",
      label: "email"
    },
    goBack: "← Go back"
  },
} as const
