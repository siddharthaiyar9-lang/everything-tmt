// Background for each page's hero. `image` is a path under /public, so
// public/hero/taj.jpg becomes '/hero/taj.jpg'. Leave it null and the
// gradient shows instead. `imagePosition` picks which part of a wide
// picture stays visible when the screen is narrower than the image.
export const HEROES = {
  home: {
    image: 'heroes/taj.jpg',
    imagePosition: '20% center', // keeps the Taj in view on phones and narrow windows
    gradient: 'linear-gradient(135deg, #0b3d3a, #2d9c8f)',
  },
  blog: {
    image: 'heroes/temple.jpg', // e.g. '/hero/blog.jpg'
    imagePosition: '20% center',
    gradient: 'linear-gradient(135deg, #2b1055, #7597de)',
  },
  podcast: {
    image: 'heroes/guru.jpg',
    imagePosition: '20% center',
    gradient: 'linear-gradient(135deg, #0f1b3d, #2d5bff)',
  },
  about: {
    image: 'heroes/ghat.jpg',
    imagePosition: 'left center', // keeps the dome in view on phones
    gradient: 'linear-gradient(135deg, #3a1c1c, #c26a3d)',
  },
};
