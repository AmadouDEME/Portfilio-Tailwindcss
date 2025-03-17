document.addEventListener("alpine:init", () => {
  Alpine.data("skillDisplay", () => ({
    skills: [
      {
        title: "HTML",
        percent: "95",
      },
      {
        title: "CSS",
        percent: "85",
      },
      {
        title: "Tailwind CSS",
        percent: "65",
      },
      {
        title: "Bootstrap",
        percent: "60",
      },
      {
        title: "JavaScript",
        percent: "70",
      },
      {
        title: "Python",
        percent: "50",
      },
      {
        title: "PHP",
        percent: "50",
      },
      {
        title: "Language C",
        percent: "70",
      },

      {
        title: "React",
        percent: "50",
      },
      {
        title: "Nest.js",
        percent: "50",
      },
      {
        title: "UML",
        percent: "50",
      },
      {
        title: "TypeScript",
        percent: "50",
      },
      {
        title: "MySQL",
        percent: "50",
      },
      {
        title: "Git",
        percent: "80",
      },
    ],
    currentSkill: {
      title: "HTML",
      percent: "95",
    },
  }));
});
