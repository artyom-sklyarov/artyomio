export const TEXTS = {
  navBar: {
    name: "Artyom Sklyarov",
    workWithMe: "Work with me →",
    socials: [{
      label: "Github",
      link: "https://github.com/artyomskliarov"
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/artyom-sklyarov-898238194"
    },
    ],
  },
  workExperience: {
    title: "PROJECTS I'VE WORKED ON",
    cta: '→',
    experience: [
      {
        title: "Beeline Russia",
        link: "https://www.beeline.ru",
        description: "UX Improvement"
      },
      {
        title: 'Ingosstrakh',
        link: 'https://www.ingosinvest-am.ru',
        description: "Insurance Platform"
      },
      {
        title: "TASS",
        link: "https://www.tass.com",
        description: "News Platform CMS"
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
