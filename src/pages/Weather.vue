<template>
  <q-card class="weather-card">
    <q-card-section class="search-section">
      <div class="text-h5 text-white">Cari Lokasi</div>
      <q-input filled v-model="searchLocation" label="Masukkan lokasi" dense color="white" text-color="white"
        class="search-input" @keyup.enter="fetchWeatherData" />
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </q-card-section>

    <q-card-section v-if="location" class="info-section">
      <div class="info-grid">
        <div class="info-item">
          <div class="info-label">Jam</div>
          <div class="info-value info-box">
            <q-icon name="access_time" size="md" class="current-time-icon" />
            {{ currentTime }}
          </div>
        </div>

        <div class="info-item">
          <div class="info-label">Lokasi</div>
          <div class="info-value info-box">
            <q-icon name="location_on" size="md" class="location-icon" />
            {{ location }}
          </div>
        </div>

        <div class="info-item">
          <div class="info-label">Cuaca</div>
          <div class="info-value info-box">
            <div class="weather-details">
              <img :src="weatherIconUrl" alt="Ikon Cuaca" class="weather-icon" />
              <div class="weather-description">{{ description }}</div>
            </div>
          </div>
        </div>

        <div class="info-item">
          <div class="info-label">Suhu</div>
          <div class="info-value info-box">
            <div class="temperature-details">
              <q-icon name="thermostat" size="md" class="temperature-icon" />
              <div class="temperature">{{ temperature }}°C</div>
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import axios from 'axios';
import { QIcon } from 'quasar';
import moment from 'moment-timezone';

export default {
  name: 'WeatherCard',
  components: {
    QIcon,
  },
  data() {
    return {
      location: '',
      searchLocation: '',
      description: '',
      temperature: 0,
      progress: 0,
      weatherIconUrl: '',
      apiKey: '1f5cd134e6d485c10ed826c8cf44b533',
      timeZoneApiKey: 'WQGBLRHWHRAH',
      errorMessage: '',
      currentTime: '',
      timeZone: '',
      clockInterval: null 
    };
  },
  methods: {
    async fetchWeatherData() {
      const loc = this.searchLocation.trim();
      if (!loc) return;

      this.errorMessage = '';
      this.location = '';

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${this.apiKey}&units=metric`
        );
        const data = response.data;
        this.location = loc;
        this.description = data.weather[0].description;
        this.temperature = data.main.temp;
        this.progress = (data.main.temp / 40) * 100;
        this.weatherIconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        // Call TimeZoneDB API to get timezone
        const timeZoneResponse = await axios.get(
          `http://api.timezonedb.com/v2.1/get-time-zone?key=${this.timeZoneApiKey}&format=json&by=position&lat=${data.coord.lat}&lng=${data.coord.lon}`
        );
        this.timeZone = timeZoneResponse.data.zoneName;

        // Update current time based on the new timezone
        this.updateTime();

        // Start clock to update time every second
        this.startClock();

      } catch (error) {
        if (error.response && error.response.status === 404) {
          this.errorMessage = 'Lokasi tidak ditemukan. Silakan masukkan lokasi yang valid.';
        } else {
          this.errorMessage = 'Terjadi kesalahan saat mengambil data cuaca.';
        }
        console.error('Error fetching weather data:', error.response || error.message || error);
      }
    },
    updateTime() {
      const now = new Date();
      const timeZone = this.timeZone;

      try {
        this.currentTime = moment(now).tz(timeZone).format('HH:mm:ss');
      } catch (error) {
        console.error('Error formatting time:', error);
        this.currentTime = '00:00:00';
      }
    },
    startClock() {
      // Clear previous interval if exists
      clearInterval(this.clockInterval);
      
      // Set interval to update time every second
      this.clockInterval = setInterval(() => {
        this.updateTime();
      }, 1000);
    }
  },
  beforeDestroy() {
    // Clean up interval before destroying the component
    clearInterval(this.clockInterval);
  }
};
</script>

<style scoped>
.weather-card {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  top: 200px;
}

.weather-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.search-section {
  margin-bottom: 20px;
}

.search-input {
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}

.error-message {
  color: #ff6b6b;
  margin-top: 10px;
  font-weight: bold;
}

.info-section {
  margin-top: 20px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.info-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.info-item:hover {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.info-label {
  font-size: 1.2em;
  margin-bottom: 5px;
}

.info-value {
  font-size: 1.5em;
  display: flex;
  align-items: center;
}

.weather-details {
  display: flex;
  align-items: center;
}

.weather-icon {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.weather-description {
  font-size: 1.2em;
}

.temperature-details {
  display: flex;
  align-items: center;
}

.temperature {
  margin-left: 10px;
  font-size: 1.5em;
}

.temperature-progress {
  margin-top: 10px;
}

.q-card-actions {
  margin-top: 20px;
}

.q-btn {
  font-weight: bold;
}

/* Grid layout specific styles */
.info-item-col1 {
  grid-column: 1;
}

.info-item-col2 {
  grid-column: 2;
}

.info-item-row1 {
  grid-row: 1;
}

.info-item-row2 {
  grid-row: 2;
}
</style>
