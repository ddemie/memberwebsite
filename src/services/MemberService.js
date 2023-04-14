const API_URL = "https://randomuser.me/api/";

async function getMembers() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.results.map((member) => ({
    firstName: member.name.first,
    lastName: member.name.last,
    age: member.dob.age,
    thumbnail: member.picture.thumbnail,
    largePicture: member.picture.large,
    street: member.location.street.name,
    city: member.location.city,
    state: member.location.state,
    postcode: member.location.postcode,
    email: member.email,
    dob: new Date(member.dob.date),
    phone: member.phone,
  }));
}

export default {
  getMembers,
};
