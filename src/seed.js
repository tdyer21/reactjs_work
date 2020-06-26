
function generateVoteCount() {
  return Math.floor((Math.random() * 50) + 15);
}

// Changed some formatting so its no longer 
// window.Seed, and removed the product abs layer
const Seed = [
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: './images/prof.png',
    productImageUrl: './images/slug.png',
  },
  {
    id: 2,
    title: 'Supermajority: The Fantasy Congress League',
    description: 'Earn points when your favorite politicians pass legislation.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: './images/slug.jpg',
    productImageUrl: './images/image-aqua.png',
  },
  {
    id: 3,
    title: 'Tinfoild: Tailored tinfoil hats',
    description: 'We already have your measurements and shipping address.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: './images/prof.png',
    productImageUrl: './images/slug.jpg',
      },
      {
        id: 4,
        title: 'Haught or Naught',
        description: 'High-minded or absent-minded? You decide.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: './images/daniel.jpg',
        productImageUrl: './images/slug.jpg',
      },
    ];
  
export default Seed;