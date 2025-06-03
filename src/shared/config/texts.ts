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
      link: "https://www.linkedin.com/in/artyom-sklyarov-898238194"
    },
    ],
  },
  workExperience: {
    title: "PROJECTS I'VE WORKED ON",
    cta: '→',
    experience: [
      {
        title: "Veon",
        link: "https://www.veon.com",
        description: "Improving UX and DX. Mentoring junior developers and interns"
      },
      {
        title: 'Ingosstrakh',
        link: 'https://www.ingosinvest-am.ru',
        description: "Reimagining the existing investment platform"
      },
      {
        title: "TASS",
        link: "https://www.tass.com",
        description: "Developing a real-time news feed for journalists"

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
