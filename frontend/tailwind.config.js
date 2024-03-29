/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://images.wallpaperscraft.com/image/single/man_mountains_clouds_118031_2560x1080.jpg')",
        tower:
          "url('https://images.unsplash.com/photo-1543349689-9a4d426bee8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWlmZmVsJTIwdG93ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80')",
        tower2:
          "url('https://justfunfacts.com/wp-content/uploads/2016/10/tokyo-tower-2.jpg')",
        tower3:
          "url('https://surfacesreporter.com/myuploads/twisted%20Diamond%20Tower.jpg')",
        tower4:
          "url('https://upload.wikimedia.org/wikipedia/commons/1/12/Tower_Life_Building%2C_San_Antonio%2C_2011_cropped.jpg')",
        dicover:
          "url('https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg?cs=srgb&dl=pexels-kelly-2876511.jpg&fm=jpg')",
        video1:
          "url('https://media.nomadicmatt.com/2023/tropicalislandsfeature.jpg')",
        video2:
          "url('https://fullsuitcase.com/wp-content/uploads/2020/06/Best-places-to-visit-in-Italy.jpg')",
      }
    },
  },
  plugins: [],
};
