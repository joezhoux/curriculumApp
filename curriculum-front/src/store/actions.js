import axios from 'axios'

const API_URL = 'http://localhost:5000/api/v1/curricula'

export default {
  async getCurricula() {
    const res = await axios.get(API_URL)
  }
}
