// src/lib/image-map.ts
const imageMap: Record<string, string> = {
  'mada': '/foto/tvari-mada.jpg',
  'fashion': '/foto/tvari-mada.jpg',
  'dviratis': '/foto/elektriniai-dviraciai.png',
  'bike': '/foto/elektriniai-dviraciai.png',
  'kripto': '/foto/kriptovaliutos.webp',
  'crypto': '/foto/kriptovaliutos.webp',
  'mityba': '/foto/sveika-mityba.jpg',
  'food': '/foto/sveika-mityba.jpg',
  'intelektas': '/foto/dirbtinis-intelektas.jpg',
  'kaip-publikuota-pades': '/foto/kaip-publikuota-pades.png',
};
const defaultImage = '/foto/default.jpg';
export const getImageForTopic = (topic: string): string => {
  const lowerCaseTopic = topic.toLowerCase();
  const matchingKey = Object.keys(imageMap).find(key => lowerCaseTopic.includes(key));
  return matchingKey ? imageMap[matchingKey] : defaultImage;
};
