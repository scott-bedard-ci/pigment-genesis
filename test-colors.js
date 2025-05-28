import { colors } from './src/tokens/colors.js';

console.log('Avatar backgrounds length:', colors.avatar.backgrounds.length);
console.log('First few colors:', colors.avatar.backgrounds.slice(0, 5));
console.log('Avatar plus color:', colors.avatar.plus);

// Test the getAvatarBackgroundColor function
const getAvatarBackgroundColor = (input) => {
  if (!input || input.trim() === '') return colors.avatar.backgrounds[0];
  
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  
  const index = Math.abs(hash) % colors.avatar.backgrounds.length;
  return colors.avatar.backgrounds[index];
};

console.log('John Doe color:', getAvatarBackgroundColor('John Doe'));
console.log('Jane Smith color:', getAvatarBackgroundColor('Jane Smith'));
console.log('Bob Johnson color:', getAvatarBackgroundColor('Bob Johnson'));