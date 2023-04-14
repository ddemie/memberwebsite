<template>
    <div>
      <h1>Profile</h1>
      <img :src="member.picture.large" alt="Profile picture">
      <div>{{ member.name.first }} {{ member.name.last }}</div>
      <div>{{ member.location.street.number }} {{ member.location.street.name }}</div>
      <div>{{ member.location.city }}, {{ member.location.state }} {{ member.location.postcode }}</div>
      <div>{{ member.email }}</div>
      <div>{{ formattedDateOfBirth }}</div>
      <div>{{ member.phone }}</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: {
      id: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        member: {},
      }
    },
    computed: {
      formattedDateOfBirth() {
        const dateOfBirth = new Date(this.member.dob.date);
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return dateOfBirth.toLocaleDateString('en-US', options);
      },
    },
    mounted() {
      axios.get('https://randomuser.me/api/')
        .then(response => {
          const result = response.data.results[this.id];
          this.member = {
            name: {
              first: result.name.first,
              last: result.name.last,
            },
            picture: result.picture,
            location: result.location,
            email: result.email,
            dob: result.dob,
            phone: result.phone,
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
  }
  </script>
  