require('tasks/pipeline')({
  ssg: 'jekyll',
  framework: 'bootstrap',
  cdnResources: {
    css: [
      { url: 'https://cdn.jsdelivr.net/npm/aos@latest/dist/aos.css', rename: 'aos.min.css' },
      { url: 'https://cdn.jsdelivr.net/npm/leaflet@latest/dist/leaflet.min.css' },
      { url: 'https://cdn.jsdelivr.net/npm/tiny-slider@latest/dist/tiny-slider.css', rename: 'tiny-slider.min.css' }
    ],
    img: [
      'https://cdn.jsdelivr.net/npm/leaflet@latest/dist/images/layers.png',
      'https://cdn.jsdelivr.net/npm/leaflet@latest/dist/images/layers-2x.png',
      // 'https://cdn.jsdelivr.net/npm/leaflet@latest/dist/images/marker-icon.png',
      // 'https://cdn.jsdelivr.net/npm/leaflet@latest/dist/images/marker-icon-2x.png',
      'https://cdn.jsdelivr.net/npm/leaflet@latest/dist/images/marker-shadow.png'
    ],
    js: [
      { url: 'https://cdn.jsdelivr.net/npm/aos@latest/dist/aos.js', rename: 'aos.min.js' },
      { url: 'https://cdn.jsdelivr.net/npm/leaflet@latest/dist/leaflet.min.js' },
      { url: 'https://cdn.jsdelivr.net/npm/tiny-slider@latest/dist/min/tiny-slider.js', rename: 'tiny-slider.min.js' }
    ]
  }
})
