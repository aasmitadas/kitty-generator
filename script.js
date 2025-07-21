 <script>
    const catBreeds = [
      'Fluffy Persian', 'Playful Siamese', 'Gentle Maine Coon', 'Curious Bengal',
      'Sweet Ragdoll', 'Elegant Russian Blue', 'Charming British Shorthair', 
      'Adorable Munchkin', 'Lovely Scottish Fold', 'Precious Himalayan',
      'Graceful Abyssinian', 'Cuddly Birman', 'Magical Sphynx', 'Royal Egyptian Mau',
      'Dreamy Turkish Angora', 'Enchanting Siberian', 'Delightful Devon Rex',
      'Majestic Norwegian Forest', 'Angelic Balinese', 'Mystical Bombay'
    ];

    const catColors = [
      'Orange Tabby', 'Tuxedo', 'Calico', 'Tortoiseshell', 'Gray Tabby',
      'Black', 'White', 'Cream', 'Blue', 'Silver', 'Brown Tabby',
      'Ginger', 'Chocolate', 'Lilac', 'Cinnamon'
    ];

    function simpleHash(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash);
    }

    async function generateCat() {
        const name = document.getElementById('nameInput').value.trim();

  if (!name) {
    alert('Please enter your name first! 🥺');
    return;
  }

  const hash = simpleHash(name.toLowerCase());
  const breed = catBreeds[hash % catBreeds.length];
  const color = catColors[(hash * 7) % catColors.length];

  const imageUrl = `https://cataas.com/cat/says/Meow?width=280&height=280&random=${Math.random()}`;

  document.getElementById('catImage').src = imageUrl;
  document.getElementById('catName').textContent = `Meet ${name}'s ${color} ${breed}! 💕`;

  const result = document.getElementById('catResult');
  result.classList.add('show');

  createSparkles();
}


    function createSparkles() {
      const container = document.querySelector('.container');
      for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.fontSize = '1.5rem';
        sparkle.style.opacity = '0';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '10';
        sparkle.style.animation = `sparkle 2s ease-out forswards`;
        container.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 2000);
      }
    }

    // Pressing Enter triggers kitty generation
    document.getElementById('nameInput').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        generateCat();
      }
    });
  </script>