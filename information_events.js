const data = {
  currentDate: "2022-01-01",
  events: [
    {
      _id: 1,
      image:
        "http://avante.biz/wp-content/uploads/Party-Images/Party-Images-053.jpg",
      name: "Collectivities Party",
      date: "2021-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
    },
    {
      _id: 2,
      image:
        "https://wallpaper.dog/large/20417324.jpg",
      name: "Korean style",
      date: "2022-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 10,
    },
    {
      _id: 3,
      image:
        "http://getwallpapers.com/wallpaper/full/b/4/f/1046370-beautiful-jurassic-park-background-1920x1080-hd-for-mobile.jpg",
      name: "Jurassic Park",
      date: "2021-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      assistance: 65892,
      price: 15,
    },
    {
      _id: 4,
      image:
        "https://s1.1zoom.me/b4747/196/France_Houses_Louvre_museum_Paris_Pyramid_Night_523082_1920x1080.jpg",
      name: "Parisian Museum",
      date: "2022-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
    },
    {
      _id: 5,
      image:
        "https://gaminghistory101.files.wordpress.com/2015/08/comicon_post.jpeg",
      name: "Comicon",
      date: "2021-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
    },
    {
      _id: 6,
      image:
        "https://wallpapertag.com/wallpaper/full/c/6/7/761175-night-club-wallpapers-1920x1080-for-iphone-5s.jpg",
      name: "Halloween Night",
      date: "2022-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
    },
    {
      _id: 7,
      image:
        "https://wallpaperaccess.com/full/4820465.jpg",
      name: "Metallica in concert",
      date: "2022-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
    },
    {
      _id: 8,
      image:
        "https://wallup.net/wp-content/uploads/2019/09/08/980838-edm-dubstep-electro-house-dance-disco-electronic-concert-rave.jpg",
      name: "Electronic Fest",
      date: "2021-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
    },
    {
      _id: 9,
      image: "https://tse1.mm.bing.net/th?id=OIP.59XPxRjEuJC-uzxxOvoGZQHaEK&pid=Api&P=0",
      name: "10K for life",
      date: "2021-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Soccer field",
      capacity: 30000,
      assistance: 25698,
      price: 3,
    },
    {
      _id: 10,
      image: "https://www.altonivel.com.mx/wp-content/uploads/2017/11/maraton-nueva-york-2017.jpg",
      name: "15K NY",
      date: "2022-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      assistance: 2569800,
      price: 3,
    },
    {
      _id: 11,
      image: "https://tse2.mm.bing.net/th?id=OIP.v-DfOEUSGFIjBUXp8rtgQQHaE8&pid=Api&P=0",
      name: "School's book fair",
      date: "2022-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
    },
    {
      _id: 12,
      image: "https://homebnc.com/homeimg/2016/03/27-kitchen-solution-bookshelf-organization-homebnc.jpg",
      name: "Just for your kitchen",
      date: "2021-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
    },
    {
      _id: 13,
      image: "https://www.xtrafondos.com/wallpapers/resoluciones/15/batman_1920x1080_821.jpg",
      name: "Batman",
      date: "2021-3-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
    },
    {
      _id: 14,
      image: "https://cdn.wallpapersafari.com/70/28/GY0N3X.jpg",
      name: "Avengers",
      date: "2022-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
    },
    {
      _id: 15,
      image: "https://cdn.getyourguide.com/img/tour/5d1891b75b6cd.jpeg/148.jpg",
      name: "River plate Museum",
      date: "2022-10-23",
      description:
        "Dedicated to the history and achievements of Club Atlético River Plate, one of the most successful soccer teams in Argentina and South America.",
      category: "Sports",
      place: "Nuñez",
      capacity: 9000,
      estimate: 9000,
      price: 450,
    },
    {
      _id: 16,
      image: "https://i.pinimg.com/originals/a2/92/f3/a292f3bc2dde0aadcad6ce0c912ab1b9.jpg",
      name: "River plate match",
      date: "2022-12-15",
      description:
        "The match of the famous River Plate club. You will be able to visit the largest stadium in South America.",
      category: "Sports",
      place: "El monumental",
      capacity: 89000,
      estimate: 89000,
      price: 1250,
    },
  ],
};


