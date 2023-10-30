const cleanObj = (obj) => {
  return {
    id: obj.id,
    name: obj.name.forename,
    lastname: obj.name.surname,
    description: obj.description,
    image:
      obj.image.url ||
      "https://www.ford.com.ar/content/dam/Ford/website-assets/latam/ar/home/showroom/fds/far-showroom-mustang.jpg",
    nationality: obj.nationality,
    dob: obj.dob,
    teams: obj.teams,
  };
};
module.exports = { cleanObj };
