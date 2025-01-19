import React, {useEffect, useState} from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
   const [init, setInit] = useState(false);

   // Initialize particles engine only once when the component mounts
   useEffect(() => {
     initParticlesEngine(async (engine) => {
       // Load slim particles engine
       await loadSlim(engine);
     }).then(() => {
       setInit(true);
     });
   }, []);

   const particlesLoaded = (container) => {
     console.log(container); // Logs particles container once it's loaded
   };

   return (
     <>
       {init && (
         <Particles
           id="tsparticles"
           particlesLoaded={particlesLoaded}
           options={{
             background: {
               color: {
                 value: "#transparent", // Background color of particles container
               },
             },
             fpsLimit: 120, // Frame rate limit for particles
             interactivity: {
               events: {
                 onClick: {
                   enable: true,
                   mode: "push", // Push new particles on click
                 },
                 onHover: {
                   enable: true,
                   mode: "repulse", // Repulse particles on hover
                 },
                 resize: true, // Resize particles on window resize
               },
               modes: {
                 push: {
                   quantity: 4, // Number of particles pushed on click
                 },
                 repulse: {
                   distance: 200, // Distance for repulsion on hover
                   duration: 0.4, // Duration of repulsion effect
                 },
               },
             },
             particles: {
               color: {
                 value: "#ffffff", // Particle color
               },
               links: {
                 color: "#ffffff", // Link color
                 distance: 150, // Distance between linked particles
                 enable: true, // Enable links between particles
                 opacity: 0.5, // Opacity of the links
                 width: 1, // Width of the links
               },
               move: {
                 direction: "none", // Particle direction
                 enable: true, // Enable particle movement
                 outModes: {
                   default: "bounce", // Bounce particles when they go out of bounds
                 },
                 random: false, // Disable random movement
                 speed: 2, // Speed of particle movement
                 straight: false, // Enable/disable straight movement
               },
               number: {
                 density: {
                   enable: true,
                   area: 800, // Area density of particles
                 },
                 value: 80, // Number of particles
               },
               opacity: {
                 value: 0.5, // Particle opacity
               },
               shape: {
                 type: "circle", // Particle shape
               },
               size: {
                 value: { min: 1, max: 5 }, // Size range of particles
               },
             },
             detectRetina: true, // Enable retina display
           }}
         />
       )}
     </>
   );
};

export default ParticleBackground;
