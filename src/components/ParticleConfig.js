const ParticlesConfig = {
    autoplay: true,
    fullScreen: {
      enable: true,
      zIndex: -10
    },
  
  
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          // enable: true,
          mode: "push"
        },
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      Image:{
        src: "../Assets/profile1.jpg",
        width: 100,
        height: 100
      },
      background:{
        color: "#0d47a1",
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40
        },
        push: {
          quantity: 1
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },   
    particles: {
      color: {
        value: "#777"
      },
      links: {
        color: "#777777",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 1.2,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 750
        },
        value: 40
      },
      opacity: {
        value: 0.8
      },
      shape: {
        type: "circle"
      },
      size: {
        random: true,
        value: 5
      }
    },
    themes: [
      {
        name: "light",
        default: {
          value: true,
          mode: "light"
        },
        options: {
          background: {
             color: "#0f0e17",
          },
          particles: {
            color: {
              value: "#ff8906"
              // value: "#008906"
            }
          }
        }
      },
      {
        name: "dark",
        default: {
          value: true,
          mode: "dark"
        },
        options: {
          background: {
            color: "transparent"
          },
          particles: {
            color: {
              value: "#89ff06"
            }
          }
        }
      }
    ],
    detectRetina: true
  };
  export default ParticlesConfig;
  