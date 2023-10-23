<template>
  <div>
    <h2>Lägg till nyhet</h2>
    <form @submit.prevent="submitNews">
      <div>
        <label for="title">Titel:</label>
        <input
          type="text"
          id="title"
          v-model="title"
          required
          class="form-control"
        />
      </div>
      <div>
        <label for="content">Innehåll:</label>
        <textarea
          id="content"
          v-model="content"
          required
          class="form-control"
        ></textarea>
      </div>
      <div>
        <label for="image">Fotografi:</label>
        <input
          class="form-control"
          type="file"
          id="image"
          ref="imageInput"
          @change="handleImageChange"
        />
      </div>
      <button type="submit" class="btn btn-success mt-4">Skapa nyhet</button>
    </form>
  </div>

  <div class="mt-5">
    <h2>Befintliga nyheter</h2>
    <div v-for="newsItem in newsItems" :key="newsItem.id">
      <h3>{{ newsItem.title }}</h3>
      <p>{{ newsItem.content }}</p>
      <img :src="newsItem.image" alt="News image" style="width: 100%; max-width: 200px;" />
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      title: "",
      content: "",
      image: null,
      token: localStorage.getItem("token"),
      newsItems: [],
    };
  },
  methods: {
    async submitNews() {
      // Create a FormData object to send form data including the image
      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("content", this.content);
      formData.append("image", this.image);

      try {
        const response = await axios.post(
          "http://localhost:8000/api/news",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${this.token}`, // Add the bearer token to the headers
            },
          }
        );

        // Handle the response, e.g., show a success message or navigate to the news list
        console.log("News created:", response.data);

        // Clear the form
        this.title = "";
        this.content = "";
        this.image = null;

        // Fetch the news articles again to update the list
        this.fetchNews();
      } catch (error) {
        // Handle errors, e.g., show an error message
        console.error("Error creating news:", error);
      }
    },
    handleImageChange() {
      this.image = this.$refs.imageInput.files[0];
    },
    async fetchNews() {
      try {
        const response = await axios.get("http://localhost:8000/api/news", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });

        // Update the newsItems data property with the fetched news articles
        this.newsItems = response.data;
      } catch (error) {
        // Handle errors, e.g., show an error message
        console.error("Error fetching news:", error);
      }
    },
  },
  setup() {
    const authStore = useAuthStore();

    return {
      authStore,
      token: authStore.token,
    };
  },
  mounted() {
    // Fetch news articles when the component is mounted
    this.fetchNews();
  },
};
</script>
  