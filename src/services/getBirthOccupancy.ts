import axios from 'axios';

export default async function getBirthOccupancy() {
  try {
    const response = await axios.get('/sp-api/spr_occupancyByTime/2024-02-01%2000:00:00&2024-02-29%2000:00:00&0')
    return response.data.recordset;
  } catch (error) {
    console.error(error);
    return [];
  }
}