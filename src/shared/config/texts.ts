export const TEXTS = {
  navBar: {
    name: "Artyom Sklyarov",
    workWithMe: "Work with me →",
    socials: [{
      label: "Github",
      link: "https://github.com/artyom-sklyarov"
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/artyom-sklyarov"
    },
    ],
  },
  workExperience: {
    title: "EXPERIENCE",
    cta: '→',
    experience: [
      {
        title: "Veon",
        link: "https://www.veon.com",
        description: "Improving UX and DX"
      },
      {
        title: 'Ingosstrakh',
        link: 'https://www.ingosinvest-am.ru',
        description: "Reworking the investment platform"
      },
      {
        title: "TASS",
        link: "https://www.tass.com",
        description: "Developing a a real-time newswire platform"

      }]
  },

  homePage: {
    greeting: "👋",
    headline: "I build web applications for enterprise-scale products. Currently working on telecom platforms.",
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
