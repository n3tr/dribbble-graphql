import fetch from 'node-fetch'

const ACCESS_TOKEN = '865c0ec9f1388e9df68a4a2d55d54d9bcfbe330b4e5b3bf9529cfc819b5f7b63'

function fetchShots() {
  return fetch('https://api.dribbble.com/v1/shots', {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  }).then(res => res.json())
}

export default fetchShots
