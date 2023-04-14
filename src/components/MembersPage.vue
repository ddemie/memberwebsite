<template>
  <div>
    <h1>Members</h1>
    <input type="text" v-model="searchTerm" placeholder="Search by name">
    <div v-for="member in filteredMembers" :key="member.id" @click="goToProfile(member.id)">
      <img :src="member.thumbnail" alt="Profile picture">
      <div>{{ member.firstName }} {{ member.lastName }}</div>
      <div>{{ member.age }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      members: [],
      searchTerm: '',
    }
  },
  computed: {
    filteredMembers() {
      return this.members.filter((member) => {
        return member.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          member.lastName.toLowerCase().includes(this.searchTerm.toLowerCase())
      });
    },
  },
  mounted() {
    axios.get('https://randomuser.me/api/?results=10')
      .then(response => {
        this.members = response.data.results.map((result, index) => {
          return {
            id: index,
            firstName: result.name.first,
            lastName: result.name.last,
            age: result.dob.age,
            thumbnail: result.picture.thumbnail,
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
  goToProfile(member) {
    this.$router.push({
      name: 'profile',
      params: {
        id: member.id
      },
    });
  },
}}
</script>

  