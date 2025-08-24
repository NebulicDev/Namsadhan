import { X } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// --- Theme Colors ---
const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
  white: '#FFFFFF', // Added for clarity
};

// --- Updated Data Structure ---
const spiritualGuides = [
  { 
    id: '1', 
    name: 'Shri Nimbargi Maharaj',
    // TODO: Replace with your actual image file
    photo: require('../../assets/images/nimbargi-maharaj.jpg'), 
    bio: 'Shri Narayanrao Bhausaheb - popularly known as Shri Nimbargi Maharaj, can very well be regarded as a Spiritual Bhagirath. Just as King Bhagirath had, by his intense penance brought down the Heavenly Ganga, to the parched earth and enabled it to bloom with fresh verdure, our Spiritual Bhagirath also had, by his intense meditation, brought up the Spiritual Ganga, that had gone underground for centuries in this part and enabled the pining hearts to enjoy her blissful ambrosia. This holy Divine Stream, originated and issued from his heart, gradually gained momentum and expanse from his great disciples and aspired to reach the ocean of humanity through Shri Gurudev. Hence Shri Nimbargi Maharaj has been regarded as the originator of this Sampradaya. Shri Narayanrao belonged to a Virasaiva family of Nimbargi, a village in the Indi Taluka of Karnataka. When he was a youth of 25, once he was severely scolded by his father, for taking active part in the Holi revelry. In a fit of burning remorse and shame, he left for Pandharpur without informing anybody and ardently prayed the Lord Vitthal for three days, to pardon him for his folly and guide him by the right path. On the third day, the Lord Vitthal appeared in his dream and assured him: Child, dont worry ! Go to Siddhagiri. You will find your Master to guide you. This assurance restored his balance and he returned home in a normal mood. A few days later, he went to Siddhagiri, near Kolhapur, on a pilgrimage . It was the place of his family God-Shri Kadasiddhesvara. After finishing the worship of Kadsiddhesvara, he was passing by a cave situated outside the temple, when he saw a Yogi emerging out of a cave nearby and beckoning Narayanrao to approach him. Greatly attracted by the lustrous figure, Narayanrao literally rushed towards the Yogi and fell at his feet. The Yogi gently raised him and took him inside his cave. There he blessed him with the Divine Nama, and advised him to meditate on it regularly. If you do this sincerely he said your fame would spread in all quarters. Fully satisfied with this blessing of the Yogi, Narayanrao returned home. But soon he was absorbed in his family life and did not attend to meditation properly, for about six years. Realising this negligence on the part of his chosen disciple, the Yogi one day came to the house of Narayanrao Greatly surprised by the sudden arrival of his Guru, Narayanrao respectfully welcomed him and worshipped him. He paid Rs. 2/- as Gurudakshina to the Guru, who graciously returned them back and advised him to use one for the Prapancha and the second for his Paramartha. Can the worldly life be made happy by meditation? asked Narayanrao. The most rational reply was Nothings impossible to the Grace of God. He solemnly promised his Guru that he would attend to meditation without fail, in future. Overwhelmed with emotion he lay prostrate at the feet of his Master. And before he could rise and express his humble gratitude to him, the Yogi suddenly left him. This incident brought about a revolutionary change in the outlook of Narayanrao. He made a firm resolve to meditate regularly with one-pointed devotion. He gave up his profession of dyeing and adopted the occupation of a shepherd as that was very helpful for his meditation. He daily used to take his flock along with the flocks of other boys, request them to look after his flock and spend the whole day in soulful meditation under the shade of a tree nearby. Thus, did proceed his continuous Sadhana, day after day, month after month, and year after year, without the help and guidance of anybody. He received guidance and inspiration from the Atman residing in his heart, for his spiritual progress. He, thus, went on progressing from stage to stage for well-nigh 36 years. He visualised the Atman, conversed with the Atman, played with the Atman and ultimately merged in the infinity of the Atman, and enjoyed the ecstatic Bliss. He, Thus, reached the pinnacle of spiritual elevation. The next 28 years, he spent both in doing his meditation and in imparting spiritual instructions to others in accordance with his own mature wisdom. During this period, he came to be known as Nimbargi Maharaj. He conducted discourses to explain the hidden meaning of Dasabodha (holy book by the Saint Ramadasa). He never initiated a desirous person unless he found him quite deserving for initiation. He left his body and became one with Atman in AD. 1885 (29th March). Shri Nimbargi Maharaj, thus, belonged to the galaxy of the greatest of men, who lived and passed away unknown and whose thoughts later on, found expression in the second rate heroes who became known to the world. He was, in the words of Shri Gurudev, like a Bakula tree, whose flowers, though in a corner, would send their fragrance, throughout the length and breadth of Karnataka. His most important teaching is, We must dedicate our worldly life to the Self and should ever be engaged in His meditation. Everything is controlled by the Self. Nothing ever happens without His will. We should, therefore, try to deserve His grace by constant soulful meditation and visualise His Light, for this alone, has the Lord granted us our eyes. It does not matter, even if we will not have a full-fledged vision of the Atman. However, as has been stated by a Muslim saint, Even a glimpse of the Spiritual Atom (Spiriton) by a disciple, is enough for his salvation after death. Similarly, saint Tukaram also asserts: Take whatever has been granted to you (by the Atman). It may be a quarter seer, or a half seer or more (any amount of It is sufficient for your salvation). The same conception has been expressed also by Kannad saint in the following words: If you get even a glimpse of the Spiritual Ensign, you would never be born again. Hence, we should have the vision of the Atman in this very life, by extracting Him from the body. We shall then be free from any further rebirth. We will also enjoy in this life material prosperity and good progeny; and moreover, since we have had the vision of the Light of the Atman, we shall attain salvation after death, by merging in the Atman.'
  },
  { 
    id: '2', 
    name: 'Shri Amburao Maharaj',
    // TODO: Replace with your actual image file
    photo: require('../../assets/images/amburao-maharaj.jpg'),
    bio: 'Amburao Maharaj was a devoted disciple of Nimbargi Maharaj and a key figure in carrying forward the lineage. He was known for his unwavering faith and dedication to his guru\'s teachings, and he played a crucial role in spreading the practice of Namasmaran to a wider audience.'
  },
  { 
    id: '3', 
    name: 'Shri Bhausaheb Maharaj',
    // TODO: Replace with your actual image file
    photo: require('../../assets/images/bhausaheb-maharaj.jpg'),
    bio: 'Bhausaheb Maharaj was another prominent disciple who systematized the teachings of Nimbargi Maharaj, making them more accessible to spiritual seekers. He established a formal framework for the practice and is considered a pillar of the Inchegeri Sampradaya.'
  },
  { 
    id: '4', 
    name: 'Shri Gurudev Ranade',
    // TODO: Replace with your actual image file
    photo: require('../../assets/images/gurudeo-ranade.jpg'),
    bio: 'Dr. R.D. Ranade, respectfully known as Gurudev Ranade, was a philosopher, scholar, and a spiritual successor in the lineage. He masterfully bridged the gap between Eastern mysticism and Western philosophy, authoring several profound books on spirituality and the path of meditation.'
  },
];

// Define the type for a single guide
type Guide = typeof spiritualGuides[0];

export default function HomeScreen() {
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Nimbargi Sampradaya</Text>
          <Text style={styles.subtitle}>Shri Gurudev Ranade Samadhi Trust</Text>
        </View>

        {/* Top Card */}
        <TouchableOpacity style={styles.topCard} onPress={() => setSelectedGuide(spiritualGuides[0])}>
          <Image source={spiritualGuides[0].photo} style={styles.topCardImage} />
          <View style={styles.cardOverlay}>
            <Text style={styles.cardTitle}>{spiritualGuides[0].name}</Text>
          </View>
        </TouchableOpacity>

        {/* Bottom Row of Cards */}
        <View style={styles.bottomRow}>
          {spiritualGuides.slice(1).map((guide) => (
            <TouchableOpacity key={guide.id} style={styles.bottomCard} onPress={() => setSelectedGuide(guide)}>
              <Image source={guide.photo} style={styles.bottomCardImage} />
              <View style={styles.cardOverlay}>
                <Text style={styles.cardTitleSmall}>{guide.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Fullscreen Modal */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={selectedGuide !== null}
        onRequestClose={() => setSelectedGuide(null)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <ScrollView>
            <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedGuide(null)}>
              <X size={32} color={THEME.text} />
            </TouchableOpacity>
            {selectedGuide && (
              <>
                <Image source={selectedGuide.photo} style={styles.modalImage} />
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>{selectedGuide.name}</Text>
                  <Text style={styles.modalBio}>{selectedGuide.bio}</Text>
                </View>
              </>
            )}
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center', // Center align items horizontally
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: THEME.text,
    textAlign: 'center', // Center text
  },
  subtitle: {
    fontSize: 18,
    color: THEME.lightText,
    marginTop: 4,
    textAlign: 'center', // Center text
  },
  topCard: {
    height: 250, // Increased height
    marginHorizontal: 20,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: THEME.card,
  },
  topCardImage: {
    width: '100%',
    height: '100%',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  bottomCard: {
    width: '31%',
    height: 180, // Increased height
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: THEME.card,
  },
  bottomCardImage: {
    width: '100%',
    height: '100%',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
    padding: 15,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: THEME.white,
    // Added text shadow for visibility
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  cardTitleSmall: {
    fontSize: 14,
    fontWeight: 'bold',
    color: THEME.white,
    // Added text shadow for visibility
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 5,
  },
  modalImage: {
    width: '100%',
    height: 400,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  modalContent: {
    padding: 20,
  },
  modalTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: THEME.text,
    marginBottom: 15,
  },
  modalBio: {
    fontSize: 18,
    color: THEME.text,
    lineHeight: 28,
  },
});
