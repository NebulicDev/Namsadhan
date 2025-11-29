// assets/text/parmarthSopanData.ts

export interface SopanItem {
  id: string;
  part: 1 | 2;         // 1 = Padas, 2 = Dohas
  chapter: number;     // 1 to 5
  chapterSequence: number; // Sequence inside the chapter
  title: string;       // Heading / First Line
  author: string;      // Sant Name
  hindiText: string;   // The main Verse (Abhang/Doha text)
  
  // --- NEW FIELDS ---
  meaning: string;     // Translation/Meaning (English/Hindi)
  audioDriveId: string; // Google Drive ID for the audio file
  singer: string;      // Name of the person singing
  
  globalSequence?: number; // 1-100 index (optional helper)
}

export interface StaticSection {
  id: string;
  title: string;
  content: string;
  type: 'frontmatter' | 'backmatter';
}

// --- 1. STATIC SECTIONS (Front & Back Matter) ---
export const PARMARTH_SOPAN_STATIC_SECTIONS: StaticSection[] = [
  {
    id: 'preface',
    title: 'Preface',
    type: 'frontmatter',
    content: ` 1. Preliminary — “After having gone over to Allahabad and stayed there for about twenty years, I wanted to reach an अन्त of the literature and the place which had conferred many obligations on me. I served the Allahabad University for twenty years from 1927 to 1946, and it would have been a breach of trust for me not to have studied Hindi literature, and placed its spiritual value on the pedestal of Comparative Philosophy and Religion. So I began my work while in service, and, after retirement, I find that the treasure which has been left to us by the Hindi Saints is as valuable as that given to us by the Saints of Maharashtra or Karnatak.” “From 1940 onwards to 1946 I developed a certain taste for Hindi mysticism at the hands of — whom shall I say — you ? — at the hands of door-keeper, chaprasi, munshi, the heads of more than two hundred songs, and I was tempted to reach the meaning of those songs. In my lectures at Allahabad University, I had used to give my own renderings of certain Padas and verses of the Hindi mystics. But I made special acquaintance with Hindi literature in my lectures to teachers at the Rashtrapati Bhavan and the Constitution Club at New Delhi in March 1952.

2. Preparation of the work— (a) Origin — Among the students with whom I came into contact for my early Hindi studies, I may mention the names of Shri Paramatma Prakash, M.A. of Dehra Dun, Shri N. N. Chatterjee, M.A. of Khandwa, Shri S. P. Tiwari, M.A. of Kanpur, Shri Subramanayam Gurti, M.A., the Andhra-Hindi Scholar of Darganj, and, in particular, Shri Ram Narain Pande, M.A., D. Com., of Lucknow, who was a keen student of Tulsidas. One of my students, Shri Hari Shankar Gautam, M.A., who is now a Captain in the Army, used to read spiritual songs with me once every week, and a few good padas found in this volume are due to his literary and spiritual interest. A greater interest was created in me by the appreciation of the collection of songs, which was suggested by our foremost students now Professors, Girish Chandra Srivastava, Sukhadev Chowbe, Shiv Shankar Roy, Chandra Shekhar Dwivedi, Shiv Shankar Roy, and Dr. O. L. Kapoor. My more advanced student Shri Dhirendra Prasad Sharma of Kaviraj College, Udaipur, had the keenest eye for the literature of Pandit Jiyas Yadav and other Unnathi sect of Banaras. The Volume represents the meritorious colloborations of many of my Allahabad students. Shri R. B. Kulkarni, M.A., now Lecturer at R. P. D. College, Belgaum, prepared the earliest draft embodying till 1946, 75 Padas 55 Dohas, a few of which were made use of by the present writer in his Kaushika lectures at Poona under the chairmanship of his University colleague, Shri G. S. Kher, then Chief Minister of Bombay, as well as in his Gujarate Research Institute lectures under the chairmanship of his respected friend Shri G. V. Mavlankar, President of the Legislative Assembly. As the Padas and Dohas were being constantly added, so as to make a century each, when I asked Mr. Awadh Raj Misra, a student of M.A. Philosophy Class at Allahabad, how to write them in Hindi and English, to attempt an emendation of them. Later, in order to divide the functions of the work, I had put Dhir Shukla, Dr. Dhirendra Verma, and Mr. Mataprasad Gupta of the Hindi Department, Allahabad, to help me in the work of annotation of the entire hundred Padas, and Shri Elaichand Jaiswal of the English Department worked independently of Dr. Dhirendra Verma and Awadh Raj M. A. student Mr. Prabhulal H. Kulkarni wrote out accurately the entire text of the Padas and Dohas along with their paraphrases and annotations written by Mr. Jaiswal, so as to make them suitable for the Press. Mr. Suresh Chandra Sharma M.A. Aligarh, now Lecturer in Meerut College, with the laudable gift of brevity and appreciation, summarised the exhaustive annotations, and Mr. Mohan Lal, M. A., who is now Lecturer in Jaswant College, Jodhpur, revised the entire paraphrase portion, and thus the copy was made completely ready for the Press. Mr. Prakash Chandra Sharma of Banaras with untiring labour looked through the proofs of the text, the paraphrase, and the annotations at the Ganapati Sansthan Press, Sangli.

(d) Appendices on History and Rhetoric — The great Hindi author Pandit Sukhadev Behari Misra, M.A., D.Litt., with great imminent spirituality, and with affectionate kindness, wrote for me the historical biography, in Hindi, of the Hindi Saints included in this volume. It is a matter of great regret to me that he could not get his text back from the Press, which printed it in the appendices of that valuable work on the Hindi loverable sages: Prof. R. B. Athavale’s Tattva— Gyan, which has not been included here. In spite of all the urgency displayed by all of us, that part could not be secured in time to be sent along with this Volume; and I, for this reason, requested the Hindi Saints to be inserted in the present appendices. Prof. S. J. Joshi of the Banaras Hindu University, graciously prepared the entire appendices on Rhetoric in Hindi. The historical biography of the Hindi Saints may be of use to students of Hindi Literature, but it will be of much value to students of other Provincial Literatures. The section on Rhetoric in Paramarthas Sopan will be useful not merely to students of Hindi Rhetoric, but to students of Rhetoric in other provincial languages of India also, at the same time that with its criticism of the Sanskrit Rhetoricians it may be said to break some new ground in the general science of Rhetoric from the psychological and philosophical points of view.

3. The Importance of the Hindi Language — We all know the great importance that is now attached to the Hindi language. But it is gratifying to note that the present selection was prepared before Hindi became the national language of India. In these days, for my own part, I have heard an enthusiastic eulogy of the Hindi literature from those who know Hindi, and shouts of it from those who do not. But one’s experience of the many Provincial Literatures shows how far and how short they are of the masterly flights and the heights of the mystic literature of the Hindi language. State language examiners lay bare their own short heads, and show a first-hand judgment to their hearts. Many distinguished examinations of the literature has been made of the difference between Hindi and Hindustani but the difference is not of much significance as the chief centres of Hindi language such as Delhi, Kanpur, Lucknow, Agra and Allahabad speak more or less a mixture of the two. Here, in our present selection, Kabir, and Rahim sit alongside of Tulsidas and Surdas, as Mansur and Yari do with Raidas and Mirabai. Hindus and Muslims, Touchables and Untouchables, Male and Female devotees of God all join in singing the praises of God.

4. Five-fold significance of the work — We now turn to the five-fold significance of the work which we are publishing. In the first place, the Padas and Dohas of our present volume will certainly be useful to the literatures, devotees, and singers of God. Prof. R. B. Athavale, M.A., of Ahmedabad, Dr. N. S. Parjatyapad of Shola- pur, and Shri Gurraroo Dasgupta of the Hindi Department, Dharwar, have sung some of the selected Padas in my presence before they could be incorporated in this present selection. Chandra Sharma, M.A., now Lecturer at Jhan si, had also been appreciative of the work, and to me it seems that the Hindi scholars of the Provinces of India have begun to realise, as some of the professors of English, History, and Philosophy had made me realise of the value of these Padas. Those of my mates who had studied Urdu and Persian made similar approbations. In the second place, the present volume will be useful to Hindi scholars. In the third place, the Sadhu method, the old conversation method by which spiritual literature expressed in a simple style, as vouched by some of the great Hindi scholars like Dr. Sukhadev Behari Misra, and Pandit Devi Prasad Shukla. The spiritual motive is always the most compelling element in human nature, and whatever sustains and develops it is a matter of supreme attraction to humanity. From that point of view, the appreciation of spiritual songs may be accelerated by a study of their simple formulation in understandable language. Thirdly, the annotations that belong to this volume may, it is hoped, be found useful to Hindi schools and students. Fourthly, the Paramarth Sopan will supply the basis for any critical reflection on its text, as may, for example, be seen in the accompanying volume on the Pathway to God in Hindi Literature. The Bhava and Exposition method has been ably employed by scholars like Prof. Burman and while the working Source-Path on which the present interpretation has been constructed, the writer wishes to announce that the Volume is not intended to press any one to adopt the methods given by Burman, or by Dr. Tilak, or by others. These are only must and do not lay any subjective methods. The objective method is to be adopted according to one’s own experience. Tinnikar, my beloved friend, who has made primary attempt to put my spiritual thoughts into this volume and the lecture in public. But I shall be glad if it also helps others like me to perfect the spiritual escapes now.

5. Thanks — I must express my heart-felt gratefulness to His Highness the Rajasaheb of Sangli for the valuable assistance which he rendered on behalf of the Ganapati Sansthan to the foundation of the Adhyatma Vidya Mandir, to which the credit of the preparation and printing of the present and the companion volume is entirely due. The preparation of the present work acquired a new impetus since the starting of the Adhyatma Vidya Mandir in 1947, though initially the work had been begun six years before. When His Highness the Rajasaheb of Sangli expressed his earnest desire that “the highest hopes, the highest desires, and the glorious purpose that one can conceive of the noble, being himself an humble tool in the matter”, hearty response was given to it on that day, the Áshádha Shuddha Ekadashi, 29th June 1947, which, therefore, regarded as the Foundation day. No small praise is due to the memory of the late Shri M. H. Gadagkar, B.A., at whose instance the work was taken in hand. It is pleasant and fortunate that the present volume was printed just about the time of the efficient work of the Manager, Ganapati Press, under whose superintendence the Mandir has had the services of Mr. T. Y. Patil, the Manager, who contributed greatly to the Grammatical Department, and Shri K. D. Zunjarrao, M.A., the Press Manager. The staff of the Adhyatma Vidya Mandir have worked well for this book. Shri R. M. B., as Manager of the Ganapati Sansthan Press, has carried out the responsibility to make the present volume and the companion volume to follow.

In the end, I must express how we are all deeply indebted to Dr. S. Radhakrishnan, Vice-President of the Indian Union, one of the great international Philosophers and Personalities of today, for having graciously presided at the publication function of this volume, and thus put the cope-stone on the work which the Adhyatma Vidya Mandir has done during the past five years of its existence.

9th January 1954.
R. D. RANADE
    `
  },
  {
    id: 'extracts',
    title: 'Extracts from Dr. Radhakrishnan\'s Speech',
    type: 'frontmatter',
    content: `Extracts from Dr. Radhakrishnan’s Speech at the Publication Function of the Paramartha Sopan at Sangli on 9th January 1954. 

1. “I am grateful to the Organisers of this function for asking me to associate myself with the publication of Dr. Ranade’s Paramartha Sopan. I have known Dr. Ranade for a number of years. It has been possible for him, much more than for myself, to pursue his supreme object in a spirit of dedication. My activities have been scattered, and I have had to give much of my time and attention in recent years to other things than Philosophy and Religion. All the same Philosophy remains my first affection. With Ranade, Philosophy is the pursuit of wisdom, not a mere intellectual exercise. It is for him meditation on the Spirit, a dedicated way of life”. 

2. “You call the Institution ‘Adhyatma Vidya Mandir’; and rightly so. “Each religion and philosophy aim at the understanding of Self and communion with Self. They are based on the fundamental bed-rock of self-realisation”. “When, therefore, it is said that we are pursuing the goal of Adhyatma-Vidya which is the quest of the Supreme Self, we are getting beyond the dogmatic and sectarian controversies”. “What we have always stressed is the fundamental spiritual state variously called समाधि, समाधि, समाधि etc. that is, direct communion with the Divine, the direct union of the human Soul with the Divine”. “What may be regarded as the reconditioning of man’s nature must take place, so that his Self soaks and sinks completely in the spirit of the Divine”. 

3. “Paramartha Sopan may be translated either as the Ascent to the Divine, or the Way to Perfection.” “Wherever philosophy has been seriously pursued, wherever religion has been understood in the truest sense of the word, it has meant the study of the true nature of the Self. All religions and philosophies at their highest are agreed on this point. 

4. Socrates was asked when he was to die ‘Where shall we bury you’? He gave the answer ‘You may bury my body, but my soul you cannot bury; it is incorruptible and imperishable.’ The Upanishads say, however far you may go, there is something beyond. The limits of Self are unreachable. There is something which exists beyond logic and language. Buddhism holds that one can rise to be Buddha. The potentialities of human nature extend to Divinity. Jainism makes a discrimination between Atma and Anatma. Their श्रुत attains the knowledge of ‘Atma’. Christianity says ‘The Kingdom of God is within you.’ It is universal spirit of God that dwells in you. ‘The Spirit of man is the candle of the Lord’ say the Jews. St. Paul observes ‘Know you not that you are the temple of God, and the Spirit of God dwelleth in you.’ In different ways, therefore, all the great Prophets have called us back to the realisation of the deepest Self in us which lies behind the layers of the body and mind. Until man attains it, his goal remains unfulfilled. Spiritual realisation is the manifest destiny of man. Until he is able to find his way to the understanding of the Supreme, his heart is restless. All these Prophets of God believed that the natural culmination of human development was in the Divine”. 

5. “In our country, we have worshipped not the industrialists, or the military heroes, or kings, or the emperors, or the dictators, or the statesmen, but we have worshipped the Saints who have penetrated behind the layers of body and mind, sunk into the depths of Self, and anchored themselves to the Divine. Such men are not to be limited to Europe, Asia, or America, or to this or that religion. The spiritual quality is common to the Arya, Anarya, Muslim or Christian. 

6. Secular State does not mean a State without religion. It is not secular in this sense that we deify the worldly and the material. It is secular only in the sense that we recognise that every religion shows a way to reach the Supreme, and we do not wish to identify the State with any particular dogma or creed. It is secular in the sense that it is something which takes its stand on the very roots of our religion. In the Secular State we give liberty to all to exercise freedom of worship and thought. We recognise the liberty of religious life. The same liberty must be given to all people. 

7. Spirituality does not involve renunciation of the world. On the other hand, spirituality is excellence in action, श्रेष्ठ कर्म श्रेष्ठ. The world at present finds itself in a night-mare condition of tension and conflict, from which it can be rescued and united only by true religion. The world can be really bound together and united at the spiritual level through religion expressing itself in love. Religion signifies two things in particular. One is the inward awareness of Spiritual Self, spiritual perception. Outwardly, it is abounding love to humanity. ज्ञान and करुणा, Wisdom and Love, constitute true religion”.
`
  },
//   {
//     id: 'analytical_toc',
//     title: 'Analytical Table of Contents',
//     type: 'frontmatter',
//     content: `PART ONE: PADAS
// 1. Incentives to Spiritual Life
// 2. The Necessity of Moral Preparation
// 3. The Relation of God to Saints
// 4. The Beginnings of the Pilgrimage
// 5. The Highest Ascent

// PART TWO: DOHAS
// (Follows the same five-fold division)`
//   },
  {
    id: 'intro_padas',
    title: 'General Introduction to Padas',
    type: 'frontmatter',
    content: `If we make a comparative study of the Philosophies and Religions of the world, and especially of the lives and teachings of those who in the various stages of humanity and in different ages and lands have walked on the path of God, we shall see that there are certain broad characteristics common to the Pathway, which they have all pursued in the attainment of God. These might for convenience sake be summarised under five heads. First, there are certain incentives prompting men to spiritual life — philosophical, axiological and psychological. Then there is the question of moral and spiritual preparation which they must take before they are to advance on the Pathway. Thirdly, they have to keep before them- selves certain exemplars of devotion and attainments which they must necessarily follow. This they cannot do unless they have defined the incentives, both the- retically and practically, which have made them long for God in relation to the exemplars above mentioned. When the relationship between the exemplars and God has been defined, they have to tread the path them­ selves before they can be convinced about the reality of the experiences of those who have gone before them. Finally, after having walked on the Pathway for a long time, and through travails and turmoils of body and mind, of nature and of society, they can envisage to themselves certain landmarks, certain lamp-posts, which will help them to walk with courage and confidence on the Pathway to God, and attain to the highest ideal they have been seeking.

CHAPTER I

In the present work, we shall be concerned with these five topics which have characterised the pursuit, in the attainment of God, of seekers in the Hindi provinces, as they have also characterised that of the seekers in other provinces of India, as well as of seekers in the world. We shall first state in brief the different incentives which have prompted the Hindi saint to the pursuit of the spiritual ideal. In the first place, the incentives come mainly from the evils and illusions, of blindness to reality, and of sleeping thought, which have been the cause of his formulating the spiritual ideal. The last incentives we shall discuss in the chapter in the next book relate to the highest incentives which prompt men for God.

After studying the highest of the incentives, we shall next study the different types of moral preparation which the aspirant has to undergo. After this, we shall proceed to enumerate the various exercises which, as experience all over the world, and in the Hindi saints group has shown, are necessary for the advancement of the spiritual life, now clearly defined. These, with the exemplars in the Hindi provinces, the aspirant would have a complete idea as to what his spiritual ideal would probably be in the course of his attempt for the determination of his spiritual ideal.

After this philosophical approach, we have to tackle the ethical approach also, especially from the side of the relationship of works to recompense. These questions have received the highest priority from philosophers and moralists, especially from Kant. After these philosophical and ethical approaches, we have to consider the question of sin whose existence we find in the lives of men and in society. Those who want to evolve an incentive to spiritual life through the consideration of sin are necessarily prompted to seek therefore a life which will be for ever beyond its pale. After the consideration of sin come the questions of age and of death, which are very primary considerations, very positive facts, which lead men toward Godward. Immediate lay life leads to the summation of the matter when we are met with the questions of transmutation and metem- psychosis, a determination of the nature of which Naciketa flash has to lead a man to the highest spiritual ideal. The last incentive is that provided in the present chapter in the subito flash of illumination given by the great saints like Mahaprabhu, where the individual reaches the high water-mark in the spiritual path made by him courageously and successfully.

CHAPTER II

The last chapter was devoted to a review of the various incentives that lead to the desire for the spiritual life. Now we must proceed to consider what moral virtues have to be cultivated before such a spiritual life could be realised. Cultivation of the moral virtues also implies an avoidance of bad qualities. Hence arises the necessity of the consideration of the avoidance of vices along with the cultivation of virtues. The first great vice is the company of the wicked; for it is the mother of all the vices. We shall consider with reference to relevant songs from Surdas, Kabir and Charanadas the main vices that are to be avoided, and the main virtues that are to be cultivated. One of the most important of such virtues is the company of Saints. In this connection, Nanak tells us how the company of the saints might enable a man to do a real welfare-state in a vision of God.

Of the company of the Saints, that accord­ ing to Tulsidas, seems to be the firmest. The virtues are further told by Tulsidas the way for God-love through the avoidance of egoism and the attainment of humility (?). Kanak Das emphasises the importance of this, because without the avoidance of ego we cannot have the attention of God or the brilliant jewel*. Further, we can take an important way of devotional Love by the conciliation of the two from Tulsidas. Finally, in a fine literary way told by Tulsidas how this devotion to God might be compared to a diamond with nine facets, each representing one aspect of God-devotion, and all being present in an ideal Saint. The Chapter may well be ended with a review of the various virtues that are to be cultivated and the various vices that are to be avoided, which might be regarded as a distinct contribution of Hindi saints to World-Ethics, a contribution which might well be compared to that made by the great moral philosophers of ancient and modern times, such as Plato and Aristotle, Sidgwick and Green.

CHAPTER III

The subject-matter of the third chapter is God in relation to the Saints. The problem of God is always an interesting and difficult one, and when we try to find its bearing on mystical literature, it becomes all the more difficult, because mystical literature, in the main, cares only for the intuitive apprehension of God.

In our present chapter, we shall first speak about the problem of God as it appears in the major Saints of Hindi pre-Mughal. After this, we may consider the philosophical-mystical argument of Ramananda in his description of God as such; and next the non-dualistic description of God as such as the Niranjan (God) assumes a Sugama form. After this the question of Love in the Hindi Saints group. We shall then speak about the imperative cry of Surdas to God to come down in a lower Order of miraculous grace, creating a proper meaning of God for men, and by describing an order of sportive action of God in which he reveals himself for His devotees. Under these problems, we shall have to consider the Hindi spiritual utterances, in the first place, of Mirabai, the Mystic Princess, then of the two great Hindi poets and Saints Surdas and Tulsidas, then of that group of spiritual realisers revelling in their description of mystical experience, such as Gorakhnath, Dharamdas and Yari, and finally of the two great Maratha saints who have also contributed to the mystical literature in Hindi, namely, Ekanath and Mahipati, the first because he was a citizen of Paitan in the Deccan which was under Mohammedan influence, as well as because he later lived at Banaras for some time in the maturity of his spiritual experience; and the second, because he served and died at Gwalior. After the description of the varieties of mystical experience by these great saints, we shall pass on to Group IV, in which we may find the descriptions by Charandas of the psychological and practical effects of God-realisation. Then, we shall proceed to Group V, wherein we shall find Kabir describing the sublimity and ineffability of mystical experience in language which any theist and Sufi might be satisfied with a more terrene description of the mystics, especially of the intermediary form of joy in mystics, as closely allied to the intuitively realised joy of the theologians in Group V. After this, we might describe the description of God as High Light of the Cosmos by Kabir of the lifting of the Cosmic Decea?. After this new Group under Sufistic description of mystical experience by Kabir, in the present con­ tains his account of mystical experience in a Vedantic vein.. After this, we come to probably the most important Group of poems in the present chapter, namely, on the nature of ecstacy and its contribution to the sustenance of the world. In the Group that follows, we have the post-ecstatic ejaculations of Gulal, Nar- harinath and Raidas — Gulal the Bhojpuri musician— poet, Narharinath, the spiritual teacher of Mahipati whom we have already mentioned, and Raidas, one of the greatest of the Untouchable Saints of India. Finally, we have from Kabir in an autobiographical manner a description of apostleship and prophethood, which may be regarded as the very cope-stone of mystical life to be ever attained by man.

CHAPTER IV

In the last chapter, we have taken a panoramic view of the different ideas held by the Hindi saints about the nature of God, and the prayers which they have offered to him. In the present chapter, we shall proceed to a description of the actual path of their pilgrimage, as well as the conditions which are necessary for taking them to their desired goal. In the first place, the aspirants must feel the necessity of the Spiritual Teacher who will guide them through their moral and physical turmoils of life. In that matter, we shall consider the characteristics, both moral and spiritual, which are necessary for the Spiritual Teacher. In this connection, the description given by Kabir in regard to these qualities of the Spiritual Teacher can never be excelled. We shall then proceed to discuss the meditations which must be conducted in the name of the Name and for the sake of God. After this we shall take up the description of the methods described here in the Hindi Saints’ group of pilgrims which are necessary for the removal of the sins of the aspirant. In this connection two methods are necessary for the development of the meditational life — the first is Yogi meditation of Patanjali as represented by Patanjali’s Ashtanga Yoga, and the second is the Nirvair and the ? (word unclear) method. A man must continue his meditation to the end of his life; he must utilise every breath of his life in its service; and finally, all this must be accomplished in a spirit of devotion. After dealing with these different stages of the meditational process, we shall discuss the place which Yoga and Absolutism occupy in the sphere of meditation. Ultimately, we shall find that the meditational process rises superior to both these elements. Next, we shall proceed to consider two different types of yogis or sants with two different attitudes, the militant and the submissive. The one may be called the tough-minded type, and the other the tender-minded type. The former finds its place in both these, while the tender-minded type finds its representatives in Surdas and Mirabai. In difference to these latter Sants, we shall also consider the phenomenon of the so-called Dark Night and the Dawn.

CHAPTER V

We now pass on to the final chapter of the present Part, namely, on the ultimate realisation of God- experience, in the Pada literature. The great literature of the Hinds contains under the Padas a representation of the fundamental moods of adoration of God under various acts and experiences, each group forming a proper description of the devotional moods experienced by Hindi Sants in their mystical experiences and spiritual uplift. Under this heading fall in their most beautiful utterances, in the first place, of Mirabai, the Mystic Princess, then of the two great Hindi poets Surdas and Tulsidas, then of that group of spiritual realisers revelling in their description of mystical experience, such as Gorakhnath, Dharamdas and Yari, and finally of the two great Maratha saints who have also contributed to the mystical literature in Hindi, namely, Ekanath and Mahipati, the first because he was a citizen of Paithan in the Deccan which was under Mohammedan influence, as well as because he later lived at Banaras for some time in the maturity of his spiritual experience; and the second, because he served and died at Gwalior. After the description of the varieties of mystical experience by these great saints, we shall pass on to Group IV, in which we may find the descriptions by Charandas of the psychological and practical effects of God-realisation. Then, we shall proceed to Group V, wherein we shall find Kabir describing the sublimity and ineffability of mystical experience in language which any theist and Sufi might be satisfied with; a more terrene description of the mystics, especially of the intermediary form of joy in mystics, being closely allied to the intuitively realised joy of the theologians in Group V. After this, we might describe the description of God as High Light of the Cosmos by Kabir of the lifting of the Cosmic Decea? (unclear). After this new Group under Sufistic description of mystical experience by Kabir, in the present contains his account of mystical experience in a Vedantic vein. After this, we come to probably the most important Group of poems in the present chapter, namely, on the nature of ecstacy and its contribution to the sustenance of the world. In the Group that follows, we have the post-ecstatic ejaculations of Gulal, Narharinath and Raidas—Gulal the Bhojpuri musician-poet, Narharinath, the spiritual teacher of Mahipati whom we have already mentioned, and Raidas, one of the greatest of the Untouchable Saints of India. Finally, we have from Kabir in an autobiographical manner a description of apostleship and prophethood, which may be regarded as the very cope-stone of mystical life to be ever attained by man.`
  },
  {
    id: 'intro_dohas',
    title: 'General Introduction to Dohas',
    type: 'frontmatter',
    content: `In the first part of our work, we have seen how an aspirant rises step by step from certain incentives to spiritual life to the culmination of spiritual experience. In the five chapters in the first part, namely, on the Padas, we may say, constitute the macrocosm of spiritual experience as found in Hindi literature. The five chapters in the present part on the Dohas consti­tute the microcosm with the same head-topics seriatim, with are to be met with in the first part of our book. In the division between Padas and Dohas we have followed the time-honoured tradition in Hindi litera­ture, where the Padas are followed by the Sakhiis. Probably this method is to be commended, because a bigger thing cannot naturally be split into a smaller easily, while the smaller could be split giving spiritual reflections and the moral sharp epigrams. It is for this reason that we have definitely held the Doha literature in one place as Epigrammatic Mysticism.

The great saint Tulsidas has made an original use of the Dohas as containing the “Quintessence” of the narrative in the Ramayana, and connecting Janus-wise the Chaupais that precede and the Chaupais that follow in the progress of the narrative. The word Doha thus signifies by a sort of a ????? not merely a metre, but also the ‘churned or condensed milk’ of the narra­tive fully expounded in the Chaupais. Elsewhere, as in other Hindi writers of Doha literature, the Dohas become symbols of highly ethical, spiritual, and even worldly-wise bon mot. The present writer thinks that scarcely in any other provincial literature of India there is this peculiar combination of epigram, wit, humour, sarcasm, love, devotion, service and general advice to worldly affairs, which we find in the Dohas. There are only two parallels which we can think of in connection with the Dohas. In Maratha literature we have the Abhangas, and in Kannada we have the Vachanas, which may offer a parallel to the Dohas in Hindi literature. Just as the Dohas can go to the highest spiritual ascent in the same way as the Padas, they can also take rise, then likewise level. The Dohas are smaller in dimension than the Padas and their tone and tenor are sharper and more emergent. The instances of Dohas as spiritual realisation are very many. The highest of the spiritual experience in a Tukaram and Namdev does not, however, come up to the level of the highest Dohas. In Marathi we have exhibited poetic utterances of Maharashtra which are equal to the level attained by Jnaneshvar or Tukaram, just as the Dohas or utterances in Hindi literature do not always come up to the level attained by Kabir.

As far as possible, we have selected only such Dohas as would supplement the ideas in the Padas, un­less the Dohas are so brilliant that they cannot be omitted. For example, in the first Chapter of our Dohas, we are enumerating only two incentives, the incentive of age or perpetual change, and the incentive of decrepitude or death. The second is to be found in the Padas, but the first is to be found in the Dohas only. To take one more illustration, the Dohas in our second chapter will contain those ideas which are only supplementary to those contained in the Padas, for example, ideas such as those of the combination of material and spiritual welfare, the change of tempera­ment to moral character, valuation of fine arts, and so on. We are stating these facts only to show that our Dohas are not merely replicas of our Pada literature, but are in a way supplement the ideas contained in the Padas.

CHAPTER I

The essence of the first chapter of the Dohas consists in giving similes and analogies for the phenomenon of perpetual unceasing change, and two incentives to spiritual life. They will take us to observe that the (1) age is perpetually changing, and hence forcing the Hindi pilgrim to perpetually strive on with ever approa­ching perfection, (2) the union of age and decrepitude is of a fugitive in nature and, lastly, (3) the doom of ‘all impossibility’ a definite preindication of the united doom of those who pursue a flower. As regards the latter, we meet with trenchant suggestions as to (1) the succes­sion of heights and pitfalls in human life, (2) the incomprehensibility of the emergence and dissolution of the life-principle, and finally, (3) the infinite sadness following upon the spectacles of conflagrations in human existence. These, in fact, are regarded by the Dohas as the incentives that prompt us to spiritual life,

CHAPTER II

After the discussion of the incentives to spiritual life, we pass on to consider the help which the Dohas give for the formation of a good moral life. What moral preparation are we asked to make in order to fit ourselves for the spiritual task ? — that is the question. Analyptically examining the Dohas, we may say that they shall be discussed in the many points seriatim — (1) combination of material and spiritual welfare, (2) the reformation of original nature by the transforma­tion of character, (3) fine arts, their role in moral and immoral assets, (4) industry, (5) love of God and spiritual devotion, (6) self-control and (7) the spiritual road to God.

CHAPTER III

In our last chapter, we have tried to ascertain what the moral path to sainthood is. In the present chapter we propose to examine the nature of the phenomenon of sainthood, we shall proceed to some points in the analogy of God according to the Dohas. Parti­cularly we have to discuss such themes as the Imma­nent, the ????????? and the ?????????, the latter being a very notable contribution of Tulsidas to the Philosophy of Religion. After having discussed these categories, we shall proceed, in connection with the Doha ??????? ??? ?? ??? ???, to indicate the ten ascending stages of Tulsidas’s Philosophy of Devotion, which involves a survey of the relationships between such fundamental conceptions as ?????, ????, ????, ????, and ???.

We shall next proceed to discuss the relationship that exists between Saints and God, both practical and philosophical. Under the first head, we shall consider the questions of (1) proximity and proximity pro­tection, and (2) personal autonomy under the sovereignty of Divine power. We shall next proceed to consider (3) what lofty heights, according to Tulsidas, a saint can ascend starting from a life of abject poverty, as well as of a privileged nobility, under leaders such as saints as Tulsidas in North India, and the great saints in the South. Let us have no gainsaying that the heights of high spiritual experience are not to be found in both these geographical portions of India. Thus unity in diversity in spiritual height is noteworthy in India. Then both the practical and philosophical and the eschatological merging of spirit with spirit to which the Saint ultimately attains.

CHAPTER IV

In this chapter we will discuss the beginnings of the spiritual pilgrimage as found in the Dohas.

We shall begin by considering the nature and function of the spiritual teacher in the scheme of the realisation of God.

Next, we shall proceed to two important topics. First, we shall discuss the method by which the spiri­tual teacher instructs us to begin and perfect our endeavour for God-realisation. This, of course, is medi­tation by the Name which the teacher communicates to us from a high spiritual altitude, from which it must descend and be concluded in the mind of his disciples. Second, we shall discuss the items in the Name, and the function it performs in the spiritual development of the disciple.

Afterwards, we shall discuss four important requisites for the perfection of the method, namely, what physical, moral and mystical regularities are essential for this perfection.

Finally, that inner spring of devotion, that long­ing for the highest realisation of mystic vision, namely the perception of the mystery of the union with the Infinite in different ranges of vision, will be discussed briefly with reference to the Dohas.

CHAPTER V

In our last chapter, we have seen the beginnings of the meditational process, which must be crowned by the perfection of mystical experience. This consti­tutes the highest ascent of man towards the Life Divine. Of course, this ascent is to be made through a number of rungs of the spiritual ladder, but before we tackle this problem, it will be necessary for us to make a preliminary investigation, both philosophically and psychologically, of certain fundamental conceptions such as the relation of intuition to intellect, the meaning of internal perception, and the question of the inter-com­municability or otherwise of various kinds of sensuous and super-sensuous experiences. After this preliminary investigation, it will be our task to consider the varieties of super-sensuous experience, which form the keynote of the present chapter. Of course, these kinds of supersensuous experience are scattered wherever and in whatever form of literature an attempt is made to climb the ascent. In the Dohas in Hindi literature we find in an inexplicable and cryptic form, and at the same time very accurately, all the stages through which are convergent the super-sensuous experiences which make the path to the Divine. But the most important of the varieties of super-sensuous experiences which we find in the Dohas is not any of these, but what we may call the mysterious perception of the “Cosmic fragrance”, the unfathomable experience which we find in various types of mystical literature all over the world. Next, we shall proceed to the link-chain between the sensuous and the supersensuous experiences, differing accordingly as they emerge reflecting the successive trends in the spiritual bath, the spiritual juice and the spiritual fragrance, about which the Dohas speak. After this comes the problem of Self-realisation. Of course, it cannot be maintained that the Dohas do full justice to such an important subject, but there are definite in­dications in the description of the Dohas which put us in mind of similar ideas in more developed literatures in connection with the subject of Self-realisation. Then there are Dohas which describe motor and tactical experiences, which form an important development of one chief form of self-realisation. In order to attain such spiritual heights, however, a great travail has to be experienced. This we might call the travail of union. The dangers we have to face, the temptations we have to resist, the attachments we have to suffer, all these come to the results, such as having to pass, before the attain to the crown of spiritual experience. When the crown is reached, this is accompanied by a peculiar and highly developed mark of God-realisation, we distinguish a highly developed final stage from other stages, the final ‘Summum Bonum’ to be ever attained by man.`
  },
  // {
  //   id: 'notes_part1',
  //   title: 'Notes to Part I: Padas',
  //   type: 'backmatter',
  //   content: `(Notes and annotations for the Padas will appear here...)`
  // },
  // {
  //   id: 'notes_part2',
  //   title: 'Notes to Part II: Dohas',
  //   type: 'backmatter',
  //   content: `(Notes and annotations for the Dohas will appear here...)`
  // },
  // {
  //   id: 'appendix_1',
  //   title: 'Appendix I: Saint Biographies',
  //   type: 'backmatter',
  //   content: `परमार्थसोपानस्थ संत कवियोंका आलोचनात्मक इतिहास by स्वर्गीय पं. सुखदेव बिहारी मिश्र`
  // },
  // {
  //   id: 'appendix_2',
  //   title: 'Appendix II: Rhetoric',
  //   type: 'backmatter',
  //   content: `Contribution to the Science of Rhetoric in Paramartha Sopana.`
  // },
];

// --- 2. MASTER DATA (Full 200 Items) ---

export const PARMARTH_SOPAN_DATA: SopanItem[] = [
  // ================= PART 1: PADAS (100) =================
  
  // --- Chapter 1 ---
  { id: '1-1-1', part: 1, chapter: 1, chapterSequence: 1, title: 'धोखे ही धोखे डहकायो', author: 'सूरदास', 
    hindiText: `1. FROM ILLUSION TO ILLUSION.
    
धोखे ही धोखे डहकायो । समुझि न परी विपय-रस गीध्यो हरि-हीरा घर माँझ गँवायो || टे॥ ज्यों कुरंग जल देखि अवनिकों प्यास न गई दसौं दिसि धायो । जनम जनम बहु करम किए हैं तिन में आपुन आपु बँधायो ॥१॥ ज्यों सुक सेमर-फल-आसा लगि निसि बासर हठि चित्त लगायो । रीतौ पच्यौ जबै फल चाख्यो उड़ि गयो तूल ताँवरो आयो ॥२॥ ज्यों कपि डोरि बाँधि बाजीगर कनकन कौं चौहटै नचायो । सूरदास भगवन्त-भजन बिनु काल व्याल पै आप खवायो ॥३॥
`, meaning: `(मैं) धोखे ही धोखे से ठगा जाता रहा । बात समझ में न आई । विषय-रस में फँस गया । घर के मध्य हरिरूपी हीरा खो दिया । अवनि को जल समझ कर कुरंग के समान दसों दिशाओं में दौड़ता रहा; किन्तु प्यास नहीं बुझी । जन्म जन्म में अनेक कर्म किये हैं । उनमें अपने आपको बँधा दिया। शुक की तरह सेमर के फल की आशा में लग कर रात दिन हठ करके फल पर चित्त लगाया; किन्तु जब फल पर चोंच लगाई, तो तूल उड़ गया। फल खाली पड़ गया और संताप हो गया । जैसे बाजीगर कपि को डोरीसे बाँध कर कण-कण के लिये चौहटे पर नचाता है, उसी प्रकार मैं नचाया गया । सूरदास कहते हैं कि भगवान के भजन के बिना अपने को काल रूपी व्याल का भक्ष्य बना दिया ।
`, audioDriveId: '1i4gmDyviReuzmY7__TMT4QgnED4mmxhF', singer: 'श्रीरंग कुलकर्णी' },
  { id: '1-1-2', part: 1, chapter: 1, chapterSequence: 2, title: 'केहि समुझावों सब जग अन्धा', author: 'कबीर', hindiText: `ON UNIVERSAL BLINDNESS

केहि समुझावों सब जग अन्धा ॥ टे ॥ इक दुइ होयँ उन्हें समुझात्रौं सबहि भुलाने पेटके धन्धा पानी घोड़ पवन असबरवा, ढरकि परे जस ओसक बुन्दा ॥ १॥ गहिरी नदी अगम बहे धरवा, खेवन-हार के पड़िगा फन्दा । घर की वस्तु नजर नहिं आवत, दियना बारि के ढूँढत अन्धा ॥ २॥ लागी आगि बन जरिगा, विन गुरुज्ञान भटकिगा बन्दा । कहे कबीर सुनो भाई साधो, जाय लिङ्गोटी झारि के बन्दा ॥ ३ ॥
`, meaning: `(मैं) किसको समझाऊँ ? सारा जग अन्धा है।. एक दो हों तो उनको समझाऊँ । सभी पेटके धन्धेमें फँसे हुए हैं। पानीरूपी घोड़ा पवन सवार होनेके कारण ओसकी बूँदके रूपमें तुरन्त गिर पड़ता है। गहरी नदीमें अगम धार बहने के कारण खेनेवालेको धोका होगया है । घरकी वस्तु नजर नहीं आती; पर अन्धा दिया जलाकर ढूंढ रहा है। आग लगी, सारा बन जल गया। गुरु-ज्ञानके बिना मनुष्य भटक गया है। कवीर कहते हैं, हे साधो, बन्दा लङ्गोट झाड़कर जाता है ।
`, audioDriveId: '', singer: '' },
  { id: '1-1-3', part: 1, chapter: 1, chapterSequence: 3, title: 'मुसाफिर सोता है बेहोस', author: 'कृष्णानंद', hindiText: `THE SLEEP OF IGNORANCE

मुसाफिर सोता है वेहोस । नैन में भरा नींद का रोस ॥ टे ॥ पूँजी पास बहुत तू लाया । इस नगरी में जब तू आया । कहीं न ठग ले जावे, खोंस ॥१॥ जिस कारज को जो तू आया । सौदा वह कछु कर ना पाया । यही बड़ा अफ़सोस ॥ २ ॥ झूठे सुख की निंदिया सोया । विना विचार माल सब खोया । दीजै सत्रको दोस ॥ ३॥ कृष्णानन्द जान लो हरिको । जाना है जो अपने घर को । प्रभुपद कर सन्तोस ॥४।
`, meaning: `मुसाफिर, तू बेहोश सोता है । (तेरे) नयन में नींद का जोश भरा है । जब तू इस नगरी में आया, तत्र (अपने) पास बहुत पूँजी लाया । उसे कछौंटे में खोंस ले, ऐसा न हो कि ठग उसे लूट ले जाय । जिस कार्य के लिये तू आया, वह सौदा कुछ नहीं कर पाया, यही बड़ा अफ़सोस है । तू झूठे सुख की नींद में सो गया । तूने बिना विचार सब माल खो दिया, ( फिर ) तू सब को दोष देता है। कृष्णानन्द कहते हैं - अगर अपने घर को जाना है, तो प्रभु हरि को जानकर उनके पदमें सन्तोष - कर ले
`, audioDriveId: '1h1rO22KkfqZrGG7zn5ugaj_g73_gKWTN', singer: 'श्रीरंग कुलकर्णी' },
  { id: '1-1-4', part: 1, chapter: 1, chapterSequence: 4, title: 'केशव कहि न जाय', author: 'तुलसीदास', hindiText: `PHILOSOPHICAL AFFLATUS TO SPIRITUAL LIFE.

केशव कहि न जाय का कहिए ? ।। टे ॥ देखत तव रचना विचित्र अति समुझि मनहिं मन रहिए ॥ १ ॥ मून्य भीति पर चित्र रङ्ग नहिं, कर विनु लिखा चितेरे धोए मिटइ न मरइ भीति, दुख पाइय यहि तनु हेरे ।। २ ।। रवि-कर-नीर बसइ अति दारुन मकर रूप तेहि मांहीं बदन-हीन सो ग्रसइ चराचर पान करन जे जाहीं ॥ ३ ॥ कोउ कह सत्य झूठ कह कोऊ जुगल प्रबल करि मानै तुलसिदास परिहरै तीनि भ्रम जो आपहिं पहिचानै ॥४॥
`, meaning: `हे केशव, कहा नहीं जाता । क्या कहा जाय ? तुम्हारी अति विचित्र रचना को देखकर मन ही मन समझ कर रहना पड़ता है। कर-हीन चितेरे ने शून्य भीत पर रङ्ग के चिना चित्र लिखा है, जो धोने से भी नहीं मिटता । (फिर भी) भीति नहीं मरती । इस तन को देखने से दुख प्राप्त होता है । रविकरनीर में अति दारुण मकररूप बसता है । वह मकर मुख-हीन होने पर भी चराचर में से जो कोई (जल) पीने जाता है, उसको खा लेता है। (इस संसार को ) कोई सत्य कहता है, कोई असत्य कहता है। कोई सत्या-सत्य दोनों ही को तुल्यबल मानता है । तुलसीदास कहते हैं, कि जो अपने को पहिचानता है, वही तीनों भ्रमों को छोड़ सकता है ।
`, audioDriveId: '1pCKwY_hGFfQh_hufVrsxKN-vu-Fm38gP', singer: 'श्रीरंग कुलकर्णी' },
  { id: '1-1-5', part: 1, chapter: 1, chapterSequence: 5, title: 'ऊधो धनि तुम्हरो बेवहार', author: 'सूरदास', hindiText: `CONTRADICTIONS OF DESERT AND FRUIT.

ऊधो धनि तुम्हरो बेबहार ॥ टे ॥ धनि वै ठाकुर धनि वै सेवक, धनि तुम वर्तन-हार ॥१॥ आम कटावत बबुर लगावत, चन्दन झोंकत भार ॥२॥ चोर बसावत साह भगावत, चुगलनि कौं एतवार ॥३॥ समुझि न परति तिहारी ऊधो, हम ब्रजनारि गँवार ॥४॥ सूरदास धनि तुम्हरि कचेरी, अंधाधुंध दरवार - ॥५॥
`, meaning: `हे ऊधव, तुम्हारा व्यवहार धन्य है। वह स्वामी धन्य है ! वह सेवक धन्य है ! वर्तनेवाले तुमभी धन्य हो ! (तुम) आम कटाते हो, बबूल लगाते हो और चन्दन को भाड़ में झोंकते हो। चोर को बसाते हो। साह को भगाते हो और चुगलखोरों का विश्वास करते हो । हे ऊधो ! हम ग्रामीण ब्रज-स्त्रियाँ हैं, तुम्हारी विद्या (कथनी, करनी, रहनी,) हमारी समझ में नहीं आती है। सूरदास कहते हैं, तुम्हारी कचहरी धन्य है, जहाँ दरबार अंधाधुंध लग रहा है।
`, audioDriveId: '193mUI4pnth5RhzVyjLRrfFvR2wSaBZTU', singer: 'श्रीरंग कुलकर्णी' },
  { id: '1-1-6', part: 1, chapter: 1, chapterSequence: 6, title: 'कीजै प्रभु अपने बिरदकी लाज', author: 'सूरदास', hindiText: `GOD IMPLORED FOR DELIVERANCE FROM APPEARANCE AND SIN

कीजै प्रभु अपने बिरद की लाज ॥ टे ॥ महा-पतित कबहूँ नहिं आयौं, नैक्कु तिहारे काज ॥ १ ॥ माया सबल धाम धन बनिता, बाँध्यौ इहि साज ॥ २ ॥ देखत सुनत सबै जानत हो, तऊ न आयौं बाज ॥ ३॥ कहियत पतित बहुत तुम तारे, स्रवननि सुनी अवाज ॥ ४॥ दइ न जात केवट-उतराई, चाहत चढ्यौ जहाज ॥ ५ ॥ नई न करन कहत प्रभु तुम, सदा गरीब निवाज ॥ ६ ॥ लीजै पार उतारि सूर कौं महाराज ब्रजराज ॥ ७ ॥
`, meaning: `प्रभु, अपने विरद की लाज रखिये । मैं ऐसा महापतित हूँ कि तनिक भी तुह्मारे काम नहीं आया । इस धाम, धन और वनिता रूप सवल माया की सजावट में अपने को बाँध लिया है। देखता हूँ, सुनता हूँ, सब कुछ जानता हूँ। फिर भी उससे दूर नहीं हुआ। कहा जाता है कि तुमने बहुत पतितों को तारा है। (मैंने भी) अपने कानोंसे ऐसी वाणी सुनी है। जहाज़ पर चढ़ना चाहता हूँ; पर केवट की उतराई नहीं दी जाती। मैं आपसे कोई नई चीज़ करने के लिये नहीं कहता हूँ। हे प्रभु ! तुम सदा गरीयों पर कृपा करनेवाले हो । हे महाराज व्रजराज ! सूरदासको पार उतार लीजिये ।`, audioDriveId: '1Q5eNwECvx42rm8v_ZcbWB6fWLueBdXM6', singer: 'श्रीरंग कुलकर्णी' },
  { id: '1-1-7', part: 1, chapter: 1, chapterSequence: 7, title: 'शङ्कर रामरूप अनुरागे', author: 'तुलसीदास', hindiText: `WE MUST BE BEHOLDEN TO OUR VERY SINS FOR THE VISION OF GOD

शङ्कर रामरूप अनुरागे नयन पञ्चदश अतिप्रिय लागे ॥१॥ निरखि रामछवि विधि हरपाने आठहिं नयन जानि पछिताने ॥२॥ सुरसेनप उर बहुत उछाहू । विधि तें डेवढ़ लोचन लाहू ॥३॥ रामहिं चितव सुरेस सुजाना । गौतम शाप परमहित माना ॥४॥ देव सकल सुरपतिहि सिहाहीं आजु पुरन्दर सम कोउ नाहीं ॥ ५ ॥
`, meaning: `शङ्करजी रामरूपमें अनुरक्त हुए, और उन्हें अपने पन्द्रह नयन अतिप्रिय लगे । राम की छवि देखकर ब्रह्मदेव हर्पित हुए और अपने आठ ही नयन जान कर पछताये । पड़ानन को अपने हृदय में बहुत उत्साह हुआ क्योंकि उन्होंने ब्रह्मदेव से ड्योढ़े नयनों का लाभ उठाया । चतुर इन्द्र ने राम को देखकर गौतम ऋषि के शाप को परम हितकारी मान । देवगण इन्द्र की बढ़ाई करने लगे कि आज पुरंदर के समान कोई नहीं ।
`, audioDriveId: '1WMRxcYXZ-f0brNuyYtcXSKnTJMVK2DjF', singer: 'श्रीरंग कुलकर्णी' },
  { id: '1-1-8', part: 1, chapter: 1, chapterSequence: 8, title: 'ममता तू न गई मेरे मन तें', author: 'तुलसीदास', hindiText: `TULSIDAS ON THE EFFECTS OF OLD AGE.

ममता तू न गई मेरे मन तें ॥ टे ॥ पाके केस जनमके साथी, लाज गई लोकन ते ॥१॥ तन थाके, कर कम्पन लागे, ज्योति गई नयनन तें ॥२॥ सरवन बचन न सुनत काहु के, बल गये सब इन्द्रिन तें टूटे दसन बचन नहिं आवत, सोभा गई मुखन तें ॥३॥ कफ पित बात कण्ठ पर बैठे, सुतहि बुलावत कर तें ॥४॥ भाइ बन्धु सब परम पियारे, नारि निकारत घर तें ॥५॥ जैसे शशिमण्डल विच स्याही, छुटै न कोटि जतन तें ॥६॥ तुलसिदास बलि जाउँ चरन तें, लोभ पराए धन तें ॥७॥
`, meaning: `ममता ! तू मेरे मन से नहीं गई। जन्म के साथी मेरे केश पक गए। लोगों से मेरी लज्जा चली गई । तन थक गया । हाथ काँपने लगे। नेत्रों से ज्योति निकल गई । श्रवण किसी के वचन नहीं सुनते । इन्द्रियों का बल चला गया । दाँत टूट गये । कफ, पित्त, और वात कण्ठ पर बैठ गए हैं। सुत को हाथ से बुलाता हूँ। परम प्यारे भाई, बन्धुजन और नारी घर से निकाल रहे हैं । जैसे शशिमण्डल की स्याही कोटि यत्न से भी नहीं छूटती ( उसी प्रकार ममता मेरे मन से अब भी नहीं गई)। तुलसीदास तुम्हारे उन चरणों की बलि जाता है, जो विषयों के लोभ को परास्त करते हैं ।
`, audioDriveId: '', singer: '' },
  { id: '1-1-9', part: 1, chapter: 1, chapterSequence: 9, title: 'जा दिन मन-पंछी उड़ि जैहे', author: 'सूरदास', hindiText: `SURDAS ON THE RAVAGES OF DEATH.

जा दिन मन-पंछी उड़ि जैहै ॥ टे ॥ ता दिन तेरे तन-तरुवर के, सबै पात झर जैहें ॥१॥ या देही कौ गरव न करिए, स्यार काग गिध खैहैं ॥२॥ तीननि मैं तन के विष्ठा कृमि, के है खाक उड़े हैं ॥ ३॥ कँह वह नीर, कहाँ वह सोमा, कहँ रंग-रूप दिखे हैं ॥४॥ जिन लोगन सों नेह करत हौ, तेई देखि घिनै हैं ॥५॥ घरके कहत सबारे काढौ, भूत होइ धरि खैहैं ॥६॥ जिन पुत्रन्हि बहुत प्रतिपाल्यो, देवी देव मनैहैं ॥७॥ तेई लै खोपरी बांस दै सीस फोरि बिखरे हैं ॥८॥ अजहूँ मूढ़ करहु सतसंगति, सन्तन में कछु पैहैं ॥९॥ नर-वषु धारि भजत नहिं हरि कौं, जम की मार सो ॥१०॥ सूरदास भगवन्त भजन विनु, वृथा सुजनम गँवैहैं ॥११॥
`, meaning: `जिस दिन मन रूपी पक्षी उड़ जायगा, उस दिन तेरे तनरूपी तरुवर के सभी पत्ते झड़ जायँगे । इस देह का गर्व न कर । इसको सियार, काग, और गिद्ध खायेंगे । तन की तीन गतियाँ, (१) विष्ठा बनना, (२, कृमि होना और (३) खाक उड़ना इन में से एक को तू, अवश्य प्राप्त होगा। कहाँ वह नीर, कहाँ वह शोभा और कहाँ वे रूपरंग दिखाई देंगे ? जिन लोगोंसे स्नेह करता है, वे ही तुझको देखकर घृणा करेंगे। घर के लोग कहेंगे कि शीघ्र बाहर निकालो नहीं तो भूत होकर पकड़ लेगा और खा लेगा। देवी देवों की मनौती करके जिन पुत्रों का बहुत प्रतिपालन किया, वे ही (पुत्र) बांस लेकर खोपड़ी पर मारेंगे और शीश को फोड़कर विखरा देंगे। ऐ मूढ़ ! अब भी सत-संगति कर । सन्तों में तू कुछ पा जायगा । नर का शरीर धारण कर हरि को नहीं भजेगा, तो तू यम की मार खाएगा । सूरदास कहते हैं, कि भगवान के भजन के विना तू सुजन्म को व्यर्थ ही गँवा देगा ।
`, audioDriveId: '', singer: '' },
  { id: '1-1-10', part: 1, chapter: 1, chapterSequence: 10, title: 'क्या तन माँजता रे', author: 'प्रभुदास', hindiText: `ON THE VANITY OF HUMAN LIFE.

क्या तन माँजता रे, इक दिन मिट्टी में मिल जाना ॥ दे॥ छैला बन कर फिरै बाग में, धर पगड़ी में फूल । लगा झपेटा काल का, जाय चौकड़ी भूल ॥१॥ जब लगि तेल दिया में बाती, जगमग जगमग होय । चुक गया तेल बिनस गई बाती ले चल ले चल होय ॥३॥ घर की तिरिया झिरझिर रोवै, बिछुड़ि गई मेरी जोड़ी । प्रभुदास तब उठि यों बोलै, जिन जोड़ी तिन तोड़ी ॥३॥
`, meaning: `रे ! (तू) तन क्या माँजता है? एक दिन मिट्टी में मिल जाना है। पगड़ी में फूल धर के रंगीला बनकर बाग में फिरता है। जब कालका झपेटा लगता है, तब (तू) चौकड़ी भूल जाता है। जबतक दीपक में तेल और बत्ती हैं, तबतक वह जगमग जगमग करता है। जब तेल चुक जाता है और बत्ती विनष्ट हो जाती है, तब उसके लिये "ले चल ले चल" होती है। घर की स्त्री झिरझिर रोती है, कि मेरी जोड़ी विछुड़ गई । तत्र प्रभुदास उठकर इस प्रकार बोलते हैं कि जिसने जोड़ी जोड़ दी, उसी ने तोड़ दी।
`, audioDriveId: '1B0fFlsqOMe6nLGxHJu4ChuA21sCgTpvx', singer: 'श्रीरंग कुलकर्णी' },
  { id: '1-1-11', part: 1, chapter: 1, chapterSequence: 11, title: 'बहुरि नहिं आवना या देस', author: 'कबीर', hindiText: `THOSE WHO HAVE GONE NEITHER RETURN NOR SEND ANY MESSAGE.

बहुरि नहिं आवना या देस ॥ दे ॥ जो जो गए बहुरि नहिं आए, पठवत नाहिं सँदेस ॥१॥ सुर नर मुनि अरु पीर औलिया, देवी देव गनेस ॥२॥ घरि धरि जनम सबै भरमे हैं ब्रह्मा विष्णु महेस ॥३॥ जोगी जङ्गम औ संन्यासी, दीगम्बर दरवेस ॥४॥ चुण्डित, मुण्डित पण्डित लोई, सरग रसातल सेस ॥५॥ ज्ञानी, गुनी, चतुर अरु कविता, राजा रंक नरेस ॥६॥ कोइ राम कोइ रहिम बखानै, कोइ कहै आदेस ॥७॥ नाना भेष बनाय सबै मिलि, ढूंढ़ि फिरे चहुँदेस ॥८॥ कहै कबीर अन्त ना पैहो, विन सतगुरु उपदेस ॥९॥
`, meaning: `इस देश में फिर आना नहीं है। जो गये हैं फिर नहीं आये । सन्देश भी नहीं भेजते । सुर, नर, मुनि, पीर, औलिया, देवी, देव, गणेश, ब्रह्मा, विष्णु और महेश सभी जन्म घर धरकर भटके हैं। योगी, जंगम और संन्यासी, दिगम्बर, दरवेश, चुण्डित, मुण्डित, और पण्डित लोग, स्वर्ग, रसातल, इत्यादि लोकों के रहने वाले, ज्ञानी, गुणी, कवि, और चतुर, लोग राजा, रंक और नरेश (सभी भटके हैं)। कोई राम, कोई रहीम बखानते हैं और कोई आदेश कहते हैं। नाना भेप बनाकर सभी चारों दिशाओं में ढूँढ़ते फिरते हैं। कवीर कहते हैं कि विना सद्‌गुरु-उपदेश के अन्त नहीं पाओगे ।`, audioDriveId: '', singer: '' },
  { id: '1-1-12', part: 1, chapter: 1, chapterSequence: 12, title: 'दिवाने मन भजन बिना', author: 'कबीर', hindiText: `ON THE EVIL PROCESS OF METEMPSYCHOSIS.

दिवाने मन, भजन विना दुख पैहौ || टे || पहिला जनम भूत का पै हौ, सात जनम पछितैहौ ||१|| काँटा पर का पानी पैहौ, प्यासन ही मरि जैहौ दूजा जनम सुवा का पैहौ, बाग बसेरा लैहौ ||२|| टूटे पंख बाज मँडराने, अधफड़ प्रान गँवैहौ बाजीगर के वानर होइ हौ, लकड़िन नाच नचैहौ । ऊँच नीच से हाथ पसरि हौ, माँगे भीख न पैहौ || ३ || तेली के घर बैला होइहौ, आँखिन ढाँपि ढँपैहौ । कोस पचास घरै माँ चलिहौ, बाहर होन न पैहौ ||४|| पंचचाँ जनम ऊँट का पैहौ, बिन तोलन बोझ लदैहौं । बैठे से तो उठन न पैहौ, खुरच खुरच मरि जैहौ || ५ || धोवी के घर गदहा होइहौ, कटी घास नहिं पैहौ ||६|| लादी लादि आपु चढ़ि बैठे, लै घाटे पहुँचैहौ पंछिन माँ तो कौवा होइहौ, करर करर गुहरैहौ I उड़ि के जाय बैठि मैले थल, गहिरे चोंच लगैहौ  ||७|| सत्तनाम की हेर न करिहौ, मन ही मन पछितैहौ । कहै कबीर सुनो भइ साधो, नरक नसेनी पैहौ || ८ ||
`, meaning: `ए पागल मन ! भजन के विना दुख पाओगे। पहिला जन्म भूत का पाओगे और सात जन्मों तक पछताओगे । वहाँ केवल काँटे पर का पानी पाओगे, जिससे प्यासे ही मर जाओगे । दूसरा जन्म सुए का पाओगे और बागमें बसेरा लोगे । बाज़ के मँडराने पर पंख टूट जाने से आधे में ही फड़फड़ाकर प्राण गँवा दोगे । बाजीगर के बन्दर होगे, लकड़ियों से नाच नचाये जाओगे । ऊँच नीच के सामने हाथ पसारोगे और माँगने पर भी भीख नहीं पाओगे । तेली के घर बैल बनोगे और आँखों को ढाँप से ढँपाओगे। घर में ही पचास कोस चलोगे; लेकिन बाहर नहीं होने पाओगे । पाँचवाँ जन्म ऊँट का पाओगे, विना तौल बोझ (अपने ऊपर) लदाओगे, बैठकर उठ नहीं पाओगे और खुरच खुरच कर मर जाओगे। धोवी के घर का गदहा होगे, वहाँ सूखी घास भी नहीं पाओगे; लादी लादकर स्वयं भी लादीपर बैठने वाले धोवी को लेकर घाट पर पहुंचाओगे । पक्षियों में कौवा होगे और करर करर चिल्लाओगे, उड़कर मैले स्थल पर जाकर बैठोगे और चोंच को बहुत गहरी घुसाओगे । कवीर कहते हैं, हे साधो, सतनाम की खोज नहीं करोगे तो, मन ही मन पछताओगे और (अन्त में) नरक की नसेनी पाओगे ।
`, audioDriveId: '', singer: '' },
  { id: '1-1-13', part: 1, chapter: 1, chapterSequence: 13, title: 'करम गति टारै नाहि टरी', author: 'कबीर', hindiText: `HELPLESSNESS IN LIFE'S EXPERIENCE.

करम गति टारै नाहिं टरी ॥ टेक ॥ मुनि वसिष्ठ से पण्डित ज्ञानि, सोधि के लगन धरी । सीता हरन मरन दसरथ को, बन में विपति परी कहँ वह फन्द कहाँ वह पारधि, कहँ वह मिरग चरी । कोटि गाय नित पुन्य करत नृग, गिरगिट-जोन परी पाण्डव जिनके आप सारथी, तिन पर विपति परी । कहत कबीर सुनो भाइ साधो, होनी होके रही ॥३॥
`, meaning: `कर्म की गति टालने से भी नहीं टलती। मुनि वशिष्ठ सदृश ज्ञानी पण्डित ने शोध कर लग्न रक्खी थी फिर भी सीता का हरण और दशरथ का मरण हुआ और बन में विपत्ति पड़ी । कहाँ वह फन्दा था, कहाँ वह पारधि था और कहाँ वह मृग चरता था। नित्य कोटि गायों का दान करने वाले नृग को गिरगिट की योनि मिली । जिन पाण्डवों के आप (कृष्ण) ही सारथी थे, उन पर विपत्ति पड़ी । कवीर कहते हैं, कि होनि होके ही रहती है ।
`, audioDriveId: '', singer: '' },
  { id: '1-1-14', part: 1, chapter: 1, chapterSequence: 14, title: 'रे मन जनम अकारथ जात', author: 'सूरदास', hindiText: `SPIRITUAL LIFE AS ALONE CAPABLE OF SAVING ONE FROM HELPLESS SUBMISSION TO DEATH.

रे मन जनम अकारथ जात ॥ टे ॥ बिछुरे मिलन बहुरि नहिं होवे, ज्यों तरुवर के पात ॥१॥ सन्निपात कफ कण्ठ निरोधी, रसना टूटी जात । प्रान लिए जम जात, मूढ़मति देखत जननी तात ॥२॥ छिन इक माहिं कोटि जुग बीतत, फेरि नरक की बात । यह जग प्रीति सुआ सेमर की, चाखत ही उड़ि जात ॥३॥ जम के फन्द नाहिं पड़ बौरे, चरनन चित्त लगात । कहत सूर विरथा यह देही अन्तर क्यों इतरात ॥४॥
`, meaning: `रे मन ! जन्म बेकार जा रहा है। बिछुड़ने पर तरुवर की पत्तियों की तरह फिर मिलन नहीं होगा । सन्निपात में कफ कण्ठ-निरोध करता है। रसना रुक जाती है। यम प्राण लेकर जाता है । माता-पिता मूढ़मति होकर देखते हैं । एक क्षण कोटि युगों के समान व्यतीत होता है । जग के लिये तेरी यह प्रीति सेमर के लिये सुग्गे की प्रीति की तरह है। चोंच लगाते ही तूल उड़ जाता है। रे बावले, यम के फन्दे में मत पड़ । चरणों में चित्त लगाता रह । सूर कहते हैं, कि यह देह बेकार है। तू हृदय में इतना घमण्ड क्यों करता है?
`, audioDriveId: '1rB6JoPMovR9YFxuNgTIeffSNcri_WsUc', singer: 'श्रीरंग कुलकर्णी' },
  { id: '1-1-15', part: 1, chapter: 1, chapterSequence: 15, title: 'रे दिल गाफिल गफलत मत', author: 'कबीर', hindiText: `THE LOVE OF GOD AS THE ONLY WAY OF ESCAPE FROM LIFE'S MISERIES.

रे दिल गाफिल गफलत मत कर एक दिना जम आवेगा ॥ टे॥ सौदा करने या जग आया, पूँजी लाया, मूल गँवाया, प्रेमनगर का अन्त न पाया, ज्यों आया त्यों जावेगा ॥ १ ॥ सुन मेरे साजन, सुन मेरे मीता, या जीवन में क्या क्या कीता, सिर पाहन का बोझा लीता, आगे कौन छुड़ावेगा ॥२॥ परलि पार तेरा मीता खड़िया, उस मिलने का ध्यान न धरिया, टूटी नाव ऊपर जा बैठा, गाफ़िल गोता खावेगा ॥ ३॥ दास कवीर कहै समुझाई, अन्त समय तेरा कौन सहाई, चला अकेला संग न कोई, कीया अपना पावेगा ॥४॥
`, meaning: `रे गाफिल दिल, भूल मत कर । एक दिन यम आवेगा। तू इस जगमें पूँजी लेकर सौदा करने आया, लेकिन मूल गँवा दिया । प्रेमनगर का तूने अन्त नहीं पाया । तू जिस तरह आया, उसी तरह जाएगा ! ऐ मेरे साजन, ऐ मेरे गुणी, सुन, इस जीवन में (तूने) क्या क्या किया ? सिर पर पत्थर का बोझ ले लिया । तुझे आगे कौन छुड़ावेगा ? उस पार तेरा मित्र खड़ा है। तूने उससे मिलने का ध्यान नहीं रक्खा । टूटी नात्र के ऊपर जाकर बैठ गया, ऐ गाफिल, तू डूब जायगा । कबीरदास समझाकर कहते हैं, अन्त समय में तेरा सहायक कौन है? बिना किसी साथी के तू अकेला चला है। अपने किए का फल पाएगा ।
`, audioDriveId: '1xAEJTtp24vJtuKAs6sbCmbDaRu9nHrsw', singer: 'श्रीरंग कुलकर्णी' },

  // --- Chapter 2 ---
  { id: '1-2-1', part: 1, chapter: 2, chapterSequence: 1, title: 'छाँड़ि मन हरि-विमुखन को सङ्ङ्ग', author: 'सूरदास', hindiText: `AVOIDANCE OF THE UNGODLY.

छाँड़ि मन हरि-विमुखन को संग ।। टे ।। जिनके संग कुबुधि उपजति है, परत भजन में भंग ॥१॥ कहा होत पय पान कराए, विप नहिं तजत भुजंग ॥ २०॥ कागहि कहा कपूर चुगाए, स्वान न्हवाए गंग ॥३॥ खर को कहा अरगजा लेपन, मरकट भूपन अंग ॥४॥ गज को कहा न्हवाएं सरिता, बहुरि खेह धरै अंग ॥५॥ पाहन पतित बान नहिं वेधत, रीतो करत निपंग ॥६॥ सूरदास खल कारी कामरी, चढ़त न दूजो रंग ॥ ७॥
`, meaning: `रे मन, जिन के संग से कुबुद्धि उपजती है और भजन में भंग पड़ता है, उन हरिविमुखों का संग छोड़ दे। भुजंग को दूध पिलाने से क्या लाभ ? वह अपना विप नहीं छोड़ता । कौवे को कपूर चुगाने से क्या ? कुत्ते को गंगा में नहलाने से क्या ? गदहे को अरगजा-लेपन से क्या ? बन्दर के अंगों पर भूपण पहिनाने से क्या ? हाथी को सरिता में नहलाने से क्या ? वह फिर अपने अंग पर धूल ही धारण करता है । वाण पतित पापाण को नहीं वेधता (चाहे) निपंग खाली कर दिया जाय। सूरदास कहते हैं, कि खल काली कामरी है, उस पर दूसरा रंग नहीं चढ़ सकता ।
`, audioDriveId: '', singer: '' },
  { id: '1-2-2', part: 1, chapter: 2, chapterSequence: 2, title: 'अब मैं नाच्यों बहुत गुपाल', author: 'सूरदास', hindiText: ` I AM THE KING OF VICES; DESTROY MY EVIL PROPENSITIES. O' LORD!

अब मैं नाच्यों बहुत गुपाल ॥ टे ॥ काम क्रोध को पहिरि चोलना, कण्ठ विषय की माल ॥१॥ महामोह के नूपुर बाजत, निन्दा शब्द रसाल । भरम भन्यो मन भयो पखावज, चलत कुसंगत चाल ॥२॥ तृस्ना नाद करत घट भीतर, नाना विधि दै ताल । माया को कटि फेंटा बाँध्यो, लोभ तिलक दै भाल ॥३॥ कोटि कला काँछि देखराई, जल थल सुधि नहिं काल। सूरदास की सबै अविद्या, दूर करो नंदलाल ॥४॥
`, meaning: `हे गोपाल, आज तक मैं बहुत नाच चुका । (मैंने) काम और क्रोध का चोला पहन कर गले में विषयों की माला डाल ली । महामोह के घुँघरू बज रहे हैं। निन्दा के रसीले शब्द उठते हैं। भ्रम से भरा हुआ मन रूपी पखावज बज रहा है। और बुरी संगत वालों की चाल चलता है । अन्तःकरण में तृष्णा अनेक प्रकार से ताल देकर नाद कर रही है। कमर में माया का फेंटा लपेटा है और भाल पर लोभ का तिलक दिया है। नट के अभिनय वेश में करोड़ों कलाएँ प्रदर्शित की हैं। जल, स्थल और काल की स्मृति नहीं रही । सूरदास कहते हैं, कि हे नन्दलाल, मेरी सब अविद्या दूर करो ।
`, audioDriveId: '', singer: '' },
  { id: '1-2-3', part: 1, chapter: 2, chapterSequence: 3, title: 'सो काफिर जो बोलै काफ', author: 'दादू', hindiText: `THE MEANING OF A KAFIR

सो काफिर जो बोलै काफ़ दिल अपणा नहिं राखै साफ ॥१॥ साईं का फरमान न माने, ' कहाँ पीत्र' ऐसा करि जानै ॥ २। मन आपणे में समझत नाहीं, निरखत चलै आपणी छाहीं ॥३॥ जोर जुल्म करि कुटुम्ब सूँ खाई कपट क्रूड़ सत्र उस ही माहीं ॥४॥ जोर करै, मिसकीन सतावै, दिल उसके में दरद न आवे ॥ ५ ॥ साईं को पहिचानै नाहीं सो काफ़िर दोज़ख में जाहीं ॥६॥
`, meaning: `काफिर वही है 'जो सब झूट है', ऐसा कहता है । जो अपना हृदय शुद्ध नहीं रखता । स्वामी का आदेश नहीं मानता । ' ईश्वर कहाँ है' ऐसा प्रश्न करना जानता है। अपने मन में विवेक नहीं करता । अपनी छाया की ओर दृष्टि रख कर चलता है। कुटुम्बियों पर ज़बरदस्ती कर उनका माल खाता है। कपट का कूड़ा सब उसी में भरा रहता है । जुल्म कर दीन दुखियों को पीड़ा पहुँचाता है। उसके हृदय में तनिक भी अनुकम्पा नहीं आती । स्वामी को वह नहीं पहचानता । ऐसा काफिर नरक में ही जायगा।
`, audioDriveId: '', singer: '' },
  { id: '1-2-4', part: 1, chapter: 2, chapterSequence: 4, title: 'मन लागो यार फकीरी में', author: 'कबीर', hindiText: `A SPIRITUAL FAKIR.

मन लागो यार फकीरी में ॥ टे ॥ जो सुख पात्रो राम भजन में, सो सुख नाहिं अमीरी में ॥१॥ भला बुरा सब को सुनि लीजै, करि गुजरान गरीवी में ॥२॥ प्रेमनगर में रहनि हमारी, भलि बनि आई सबूरी में ॥३॥ हाथ में कुँडी, बगल में सोंटा, चारों दिसा जगीरी में ॥४॥ आखिर यह तन खाक मिलेगा, कहा फिरत मगरूरी में ॥५॥ कहत कबीर सुनो भाइ साधो, साहब मिलै सबूरी में ॥६॥
`, meaning: `हे प्यारे मन, तुम फ़कीरी में लगे रहो । तुम जो सुख रामभजन में पाओगे, वह सुख अमीरी में नहीं पाओगे । सत्र भला बुर। सुन लो । गरीबी में निर्वाह करो । प्रेमनगर में हमारी रहनी सत्र के कारण उन्नत हो रही है। हाथ में कूँडी बगल में सोटा लेने से चारों दिशाए जागीर में आती हैं। अभिमान क्यों करते हो ? अन्त में यह तन मिट्टी में ही मिल जायगा । कवीर कहते हैं, कि हे साधो, साहब सत्र से प्राप्त होता है ।
`, audioDriveId: '', singer: '' },
  { id: '1-2-5', part: 1, chapter: 2, chapterSequence: 5, title: 'ब्राह्मण सो जो ब्रह्म पिछानै', author: 'चरनदास', hindiText: `THE MORAL AND SPIRITUAL REQUIREMENTS OF BRAHMINHOOD.

ब्राह्मण सो जो ब्रह्म पिछानै । बाहर जाता भीतर आनै ॥१॥ पांचों बस करि, झूठ न भाखै, दया जनेऊ अन्तर राखै ॥ २॥ आतमविद्या पर्दै पढ़ावै, परमातम में ध्यान लगावै ॥ ३ ॥ काम क्रोध मन लोभ न होई, चरनदास कहै ब्राह्मण सोई ॥४।
`, meaning: `ब्राह्मण वह है जो ब्रह्म को पहिचांनतां है । जो बाहर दौड़ने वाली पाँचों इन्द्रियों को वश में कर अन्दर लाता है। झूठ नहीं बोलता । अंतःकरण में दया-रूपी जनेऊ पहनता है । आत्मविद्या स्वयं पढ़ता और अन्यों को पढ़ाता है। परमात्मा में ध्यान लगाता है । काम, क्रोध, मद और लोभ उस में नहीं होते । चरणदास कहते हैं, (जो इन सत्र गुणों से युक्त है) वही ब्राह्मण है।
`, audioDriveId: '', singer: '' },
  { id: '1-2-6', part: 1, chapter: 2, chapterSequence: 6, title: 'बिसर गई सब आप', author: 'नानक', hindiText: `FOLLOW THE SAINTS; FOR THEN YOU WILL SEE GOD EVERYWHERE.

विसर गई सब आप-पराई, जब ते साधू संगत पाई ॥१॥ ना कोउ वैरी नहि वेगाना, सकल संग हमरी वनि आई ॥ २ ॥ जो प्रभु कीनो सो भल मानो, यहै सुमति साधू ते पाई ॥ ३॥ सव में रम रहा प्रभु एकाकी, पेखि पेखि नानक विइँसाई ॥ ४ ॥
`, meaning: `जब से साधु की संगति पाई, तब से सब आप-पर-भाव मिट गया । न कोई वैरी, न कोई पराया रहा । सत्संगत से हमारी सत्र पूर्ति हो गई। साधु से यही सुमति पाई कि प्रभु ने जो किया, वह भला मानो । एकाकी प्रभु सब में रम रहा है। नानक उसे देख देख हँस रहा है।`, audioDriveId: '', singer: '' },
  { id: '1-2-7', part: 1, chapter: 2, chapterSequence: 7, title: 'जाके प्रिय न राम-वैदेही', author: 'तुलसीदास', hindiText: `LEAVE AWAY THY FATHER AND MOTHER AND FOLLOW ME.

जाके प्रिय न राम-वैदेही ॥ दे ॥ तजिये ताहि कोटि वैरि सम जद्यपि परम सनेही ॥१॥ तजेउ पिता प्रह्लाद, विभीपन बन्धु, भरत महतारी बलि गुरु तजेउ नाह ब्रज बनितन्ह भे जग-मंगलकारी ॥२॥ नातो नेह राम के मनियत, सुहृद सुसेव्य तहाँ लौं अंजन कहा आँखि जेहि फूटइ, बहुतक कहउँ कहाँ लौ ॥३॥ तुलसी सोइ आपनो सकल विधि, पूज्य प्रान ते प्यारो जासों होइ सनेह राम सों एतो मतो हमारो ॥४॥
`, meaning: `जिसको राम और वैदेही प्रिय नहीं हैं, उसको कोटि वैरी के समान छोड़ देना चाहिए, चाहे वह परमस्नेही ही क्यों न हो । प्रह्लाद ने पिता को, विभीषण ने भाई को और भरत ने अपनी माता को छोड़ दिया। बलि ने अपने गुरु (शुक्राचार्य) और व्रज की स्त्रियों ने (अपने ) पतियों को छोड़ दिया। (तो भी) जगत में मंगलकारी हुए । (जब तक) राम के स्नेह से नाता मानते हैं, तब तक ही वे सुहृद और सुसेव्य होते हैं। वह अंजन किस काम का है, जिस से आँखें फूट जाएँ । अधिक कहाँ तक कहूँ । तुलसीदास कहते हैं, कि वही सत्र प्रकार से अपना है, पूज्य है और प्राण से प्यारा है, जिसके द्वारा राम से स्नेह होता है, यही हमारा मत है । 
`, audioDriveId: '', singer: '' },
  { id: '1-2-8', part: 1, chapter: 2, chapterSequence: 8, title: 'झीनी झीनी बीनी चदरिया', author: 'कबीर', hindiText: `HAND OVER TO GOD, UNSULLIED, THIS FINE VESTURE WHICH HE HAS SO SKILLFULLY WOVEN.

झीनी झीनी वीनी चदरिया ॥ टे ॥ काहे कै ताना काहे के भरनी, कौन तार से वीनी चदरिया ॥१॥ इड़ा पिंगला ताना भरनी, सुखमन तार से बीनी चरिया ॥ २॥ आठ कँवन दल चरखा डोलै, पाँच तत्व गुन तीनी चदरिया ॥ ३॥ साँइ को सियत मास दस लागे, ठोंक ठोंक बीनी चदरिया ॥४॥ सो चादर सुर नर मुनि ओढ़ी, ओढ़ि के मैली कीनी च‌द्रिया ॥५॥ दास कबीर जतन करि ओढ़ी, ज्यों की त्यों धर दीनी चदरिया ।। २ ।।
`, meaning: `चदरिया बहुत झीनी बुनी गई है। किस का ताना और किस की भरनी है? और किस तार से चद‌रिया बुनी गई है ? इड़ा और पिंगला ताना और भरनी हैं। सुषुम्ना के तार से चदरिया बुनी गई है। अष्टकमल-समूह का चरखा डोलता है । पाँच तत्वों और तीन गुणों से यह चादर बनी हुई है। स्वामी को चुनने में दस मास लगे हैं। ठोंक ठोंक कर चादर बुनी । वह चादर सुर, नर, मुनि सब ने ओढ़ी । लेकिन सब ने ओढ़कर मैली कर दी। दास कवीर ने वही चादर सावधानी से ओढ़ी और ज्यों की त्यों धर दी।
`, audioDriveId: '', singer: '' },
  { id: '1-2-9', part: 1, chapter: 2, chapterSequence: 9, title: 'जेहि जय होइ सो स्यन्दन', author: 'तुलसीदास', hindiText: ` THE CHARIOT OF SPIRITUAL VICTORY.

जेहि जय होइ सो स्यन्दन आना ॥ टे ॥ सौरज धीरज तेहि रथ चाका, सत्य, सील दृढ़ ध्वजा पताका ॥ १। बल विवेक दम पर हित घोरे, छमा कृपा समता रजु जोरे ॥२॥ ईस भजन सारथी सुजाना, विरति चर्म सन्तोप कृपाना दान परसु, युधि सक्ति प्रचण्डा, वर विज्ञान कठिन कोदण्डा ॥३॥ अमल अचल मन त्रोण समाना, सम जम नियम सिलीमुख नाना ॥४॥ कवच अभेद विप्र-गुरु-पूजा, एहि सम विजय उपाय न दूजा ॥ ५ ॥
`, meaning: `जिस से जय होगी वह रथ दूसरा है। शौर्य और धैर्य उस रथ के पहिये हैं। सत्य और शील दृढ़ ध्वजा और पताका हैं। बल, विवेक, दम और परोपकार घोड़े हैं। वे क्षमा, कृपा और समता की तीन लड़ी रस्सी से स्यन्दन में जुड़े हैं। ईश्वर का भजन चतुर सारथी है। विरक्ति ढाल है । सन्तोप कृपाण है। दान परशु है। बुद्धिं प्रचण्ड शक्ति है। श्रेष्ठ विज्ञान कठिन कोदण्ड है। मल रहित और अचल मन तूणीर के समान है। शम, यम, नियम अनेक बाण हैं। विप्र और गुरु की पूजा अभेद्य कवच है। इसके समान विजय का उपाय अन्य कोई नहीं है।
`, audioDriveId: '', singer: '' },
  { id: '1-2-10', part: 1, chapter: 2, chapterSequence: 10, title: 'करनी बिन कथनी इसी', author: 'चरनदास', hindiText: `ACTION AS THE CRADLE OF GOD.

करनी बिन कथनी इसी, ज्यों संसि बिन रजनी । बिन साहस ज्यों सूरमा, भूषण बिन सजनी ॥१॥ बाँझ झुलावै पालना, बालक नहि माहीं । बस्तु बिहीना जानिए, जहँ करनी नाहीं ॥२॥ बहु डिम्भी करनी बिना, कथि कथि कर मूए । सन्तो कथि करनी करी, हरि के सम हुए ॥३॥
`, meaning: `जिस प्रकार क्रिया के बिना कथन इसी प्रकार है, चन्द्रमा के बिना रात्रि, हिम्मत के बिना वीर, अथवा अलंकार के बिना नारी होती है। क्रिया के बिना कथनी उसी प्रकार है, जिस प्रकार बालक के बिना पालना झुलाने वाली वन्ध्या। अति-दम्भी लोग कुछ किये बिना, कह कह कर मर गये; किन्तु संत लोग कथन के अनुसार आचरण कर हरि के समान हो गये ।
`, audioDriveId: '', singer: '' },
  { id: '1-2-11', part: 1, chapter: 2, chapterSequence: 11, title: 'सात्त्विक श्रद्धा धेनु सुहाई', author: 'तुलसीदास', hindiText: `THE LAMP OF JNANA.

चौपाईः- सात्विक श्रद्धा घेनु मुहाई । जो हरिकृपा हृदय बसि आई ॥ जप तप व्रत जम नियम अपारा । जे श्रुति कह सुभ धर्म अचारा ।। तेइ तृण हरित चरै जब गाई । भाव बच्छ सिसु पाइ पन्हाई ।। परम धरममय पय दुहि भाई । अँवटै अनल अकाम बनाई ।। तोप मरुत तत्र छमा जुड़ावै । धृति सम जावनु दही जमावै ॥ मुदिता मथै विचार मथानी । दम अधार रजु सत्य सुवानी ॥ तब मथि काढ़ि लेइ नवनीता । विमल विराग सुभग सुपुनीता ॥ दोहाः - जोग अगिनि करि प्रगट तब, कर्म सुभासुभ लाई बुद्धि सिरावै ज्ञान घृत, ममता मल जरि जाइ ॥ चौपाईः - तब विग्यान निरूपिणी, बुद्धि विसद घृत पाइ । चित्त दिया भरि धरै दृढ़, समता दिअटि बनाइ ।। तीन अवस्था तीन गुण, तेहि कपास ते काढ़ि । तूल तुरीअ सँवारि पुनि, वाती करै सुगाढ़ि ॥ सोरठाः - यहि विधि लेसै दीप, तेज-रासि विज्ञानमय । जातहिं जासु समीप, जरहिं मदादिक सलभ सब ।। चौपाईः - सोऽहमस्मि इति वृत्ति अखण्डा, दीपसिखा सोइ परम प्रचण्डा । आतम-अनुभव सुख सुप्रकासा, तत्र भव-मूल भेद-भ्रम नासा ॥
`, meaning: `सात्विक श्रद्धा रूपी सुन्दर धेनु जब हरि की कृपा से हृदय में आ बसती है, तब अपार जप, तप, व्रत, यम, नियम और जो कुछ शुभ धर्म और आचार श्रुतियों ने कहे हैं, उस हरित तृण को वह चरती है और भावरूपी छोटे बछड़े को पाकर पन्हाती है। हे भाई, उस गाय से परम धर्म-मय दूध दुहकर अकामरूपी अनल पर अच्छी तरह औटावे । जब तोपरूपी मरुत चले, क्षमा ठण्डा करे। फिर धृतिरूपी जामन छोड़कर दही जमावे । दम को आधार और सत्य सुवाणी को रज्जु बनाकर विचार रूपी मथानी से सुदिता (उस दही) को मथे । मथकर विमल सुभग सुपुनीत वैराग्य रूपी नवनीत निकाल ले । तब योग रूपी अग्नि को प्रकट कर उसमें शुभाशुभ कर्मरूप ईंधन डाले । जब ममता रूपी मल जल जाय, तब बुद्धि, ज्ञान रूपी घृत निकाल ले । तब विज्ञान निरूपिणी बुद्धि विशद घृत को पाकर उस से चित्तरूपी दीपक को भरे और समता रूपी दृढ़ दीवट बना कर उसपर रक्खे । तीन अवस्था रूप तीन गुणों को (अंतःकरणरूपी) कपास से निकाल कर तुरीय रूपी तूल से उन को ठीक कर के गाढ़ी बत्ती बना ले । इस प्रकार विज्ञानमय तेजराशि दीप जलावे । जिसके समीप जाते ही सब मदादिक शलभ जल जावें । "सोऽहमस्मि” ऐसी जो अखण्ड वृत्ति है, वही परम प्रचण्ड दीप शिखा है। (जत्र) आत्मानुभव-सुख-रूपी सुप्रकाश होता है तब भवमूल भेदरूपी अम का नाश हो जाता है ।
`, audioDriveId: '', singer: '' },
  { id: '1-2-12', part: 1, chapter: 2, chapterSequence: 12, title: 'पावन पर्वत बेद पुराना', author: 'तुलसीदास', hindiText: `THE JEWEL OF BHAKTI.

पावन पर्वत वेद पुराना । रामकथा रुचिराकर नाना ॥ मर्मी सज्जन सुमति कुदारी । ज्ञान विराग नयन उरगारी ।। भाव सहित खोजइ जो प्रानी । पात्र भगति मणि सब सुख खानी ।। रामभगति चिन्तामणि सुन्दर । बसइ गरुड़, जाके उर अन्तर ।। परम प्रकासरूप दिन राती । नहि कछु चहिय दिया घृत बाती ॥ मोह दरिद्र निकट नहिं आवा । लोभ बात नहिं ताहि बुलावा ॥ प्रबल अविद्या तम मिट जाई । हारहिं सकल सलभ समुदाई ।। खल कामादि निकट नहिं जाहीं । बसइ भगति जाके उर माहीं ॥ गरल सुधा सम अरि हित होई तेहि मणि बिनु सुख पाव न कोई ॥ राम भगति मणि उर बसि जाके । दुख लवलेस न सपनेहु ताके ।। चतुर सिरोमणि तेइ जग माहीं । जे मणि लागि सुयतन कराहीं ।। सो मणि जदपि प्रगट जग अहई । राम-कृपा बिनु नहिं कोउ लहई ॥
`, meaning: `वेद और पुराण पावन पर्वत हैं। राम की कथाएं उसमें अनेक सुन्दर खानें हैं। सज्जन मर्मी हैं। सुमति कुदारी है। हे गरुड़, ज्ञान और वैराग्य दो नेत्र ह । जो प्राणी भाव से खोजता है, वह सब सुखों की मूल भक्तिरूपी मणि को पाता है। हे गरुड़, वह (मणि) दिन रात परम प्रकाशरूप है । उस के लिये दीपक, घृत, बत्ती कुछ नहीं चाहिए, लोभ रूपी वात उसे बुझा नहीं सकता । ऐसी रामभक्ति रूपी सुन्दर चिन्तामणि जिसके हृदय में बसती है, मोह दरिद्र उस के निकट नहीं आता है। अविद्या का प्रवल तम मिट जाता है । सकल शलभ समुदाय हार जाते हैं। जिसके हृदय में भक्ति बसती है, कामादि खल उसके निकट नहीं आते हैं। गरल अमृत के सदृश और शत्रु मित्र हो जाता है। उस मणि के बिना कोई सुख नहीं पाता । जिसके हृदय में रामभक्ति रूपी मणि बसती है, उसको स्वप्न में भी लेशमात्र दुःख नहीं होता । इस मणि के लिये जो सुयत्न करते हैं, संसार में वे ही चतुर-शिरोमणि हैं। यद्यपि यह मणि जग में प्रकट है, फिर भी राम-कृपा के बिना कोई नहीं पाता ।`, audioDriveId: '', singer: '' },
  { id: '1-2-13', part: 1, chapter: 2, chapterSequence: 13, title: 'गोपी सुनहु हरि सन्देस', author: 'सूरदास', hindiText: `JNANA AS THE TRANSCENDENCE OF APPEARANCE.

गोपी सुनहु हरि-सन्देस ॥ टे ॥ कह्यो पूरण ब्रह्म ध्यावौ, त्रिगुण मिथ्या भेस ॥१॥ मैं कयौं सो सत्य मानहु, त्रिगुण डारौ नास । पञ्च त्रय गुण सकल देही, जगत ऐसो भास ज्ञान विनु नर मुक्ति नाहीं, यह विषै संसार । रूप रेख न नाम कुल गुण, बरण अवर न सार ॥ ३ ॥ मात पितु कोइ नाहिं नारी, जगत मिथ्या लाइ । सूर सुख दुःख नाहिं जाके, भजो ताको जाइ ॥४॥
`, meaning: `गोपी, हरि का सन्देश सुनो। (उन्होंने) कहा है कि पूर्ण ब्रह्म का ध्यान करो । त्रिगुणात्मक आकार मिथ्या है। मैं जो कहता हूँ सो सत्य मानो । तीनों गुणों को नष्ट कर डालो । सब देही पंचभूतात्मक और त्रिगुणात्मक हैं। इस प्रकार जगत केवल भासमान है। ज्ञान के बिना मनुष्य को मुक्ति नहीं। यह संसार विपरूप है। रूप, रेख, नाम, कुल, गुण और वर्ण असत हैं, अधम हैं, उनमें सार नहीं है। माता, पिता, और स्त्री कोई भी सत्य नहीं हैं । जगत को मिथ्या समझो । सूरदास कहते हैं कि जिसको सुख और दुःख नहीं, उस प्रभु को जाकर भजो ।
`, audioDriveId: '', singer: '' },
  { id: '1-2-14', part: 1, chapter: 2, chapterSequence: 14, title: 'ऊधो हमहि न जोग सिखैहै', author: 'सूरदास', hindiText: `BHAKTI AS THE QUEST FOR GOD.

ऊधो हमहिं न जोग सिखैहै ॥ टे ॥ जेहि उपदेस मिलें हरि हम को, सो व्रत नेम बतै है ॥१॥ मुक्ति रहै घर बैठि आपने, निगुण सुनत दुख पैहै । जिहि सिर केस कुसुम भरि गूँदै, तेहि किमि भसम चढ़े है ॥२॥ जानि जानि सब मगन भए हैं, आपुन आपु लखैहै । सूरदास प्रभु सुनहु नवोनिधि, बहुरि कि या ब्रज अइहै ॥३॥
`, meaning: `ऊधव, हमको योग न सिखाओ । जिस उपदेश से हम को हरि मिलें, वही व्रत, नियम बताओ । मुक्ति अपने घर बैठी रहे । निर्गुण सुनते ही हम दुख पाती है । जिस सिर के केशों में भर भर कर फूल पिरोए, उसी पर भस्म किस प्रकार चढावें ? जान-जान कर हम सब मग्न हो गई हैं; हमको आत्म-दर्शन दो । सूरदास कहते हैं कि हे ऊधव ! क्या नवोनिधि (कृष्ण) फिर इस व्रज में आयेंगे ?
`, audioDriveId: '', singer: '' },
  { id: '1-2-15', part: 1, chapter: 2, chapterSequence: 15, title: 'सुनु मुनि तोहि कहउँ सहरोसा', author: 'तुलसीदास', hindiText: `GOD IN RELATION TO THE JNANI AND THE BНАКТА.

सुनु मुनि तोहिं कहउँ सहरोसा । भजहिं जे मोहिं तजि सकल भरोसा ।। करउँ सदा तिन्हकै रखवारी । जिमि बालक राखइ महतारी ॥ गह सिसु वच्छ अनल अहि धाई । तहँ राखइ जननी अरगाई ।। प्रौढ़ भए तेहि सुत पर माता । प्रीति करइ, नहिं पाछिलि बाता ।। मोरे प्रौढ़ तनय सम ज्ञानी । बालक सुत सम दास अमानी । जिनहिं मोर बल निज बल ताही । दुहुँ कहँ काम, क्रोध, रिपु आहीं ॥ यह विचारि पण्डित मोहिं भजही । पाएहुँ ज्ञान भगति नहिं तजहीं ॥
`, meaning: `हे मुनि, सुनो, तुम से प्रसन्नता पूर्वक कहता हूं : जो सब का भरोसा तज कर मुझे भजते हैं, मैं सदा उनकी रखवाली करता हूँ, जिस प्रकार माता बालक की रखवाली करती है। जब छोटा बच्चा दौड़कर अग्नि या सर्प को पकड़ता है, तब माता उसको अलग करके रक्षा करती है। प्रौढ़ हो जाने पर माता उस पुत्र पर प्रीति करती है, पर (उस श्रीति में) पिछली बात नहीं रहती। मुझ को ज्ञानी प्रौढ़-तनय के समान हैं; अमानी भक्त छोटे बच्चे के समान हैं। जिनको मेरा बल है और जिनको अपना बरु है, उन दोनों ही के लिए काम और क्रोध शत्रु हैं। यह विचार कर पण्डित मेरा भजन करते हैं। और ज्ञान पा जाने पर भी भक्ति नहीं छोड़ते ।
`, audioDriveId: '', singer: '' },
  { id: '1-2-16', part: 1, chapter: 2, chapterSequence: 16, title: 'नवधा भगति कहउँ तोहीँ पाहि', author: 'तुलसीदास', hindiText: `SUPERNAL BHAKTI AS A DIAMOND WITH NINE FACETS.

चौपाईः - नवधा भगति कहउँ तोहि पाहीं । सावधान सुनु धरु मनमाँहीं ।। प्रथम भगति सन्तन्ह कर संगा । दूसरि रति मम कथा प्रसंगा ।। 
दोहाः - गुरुपद-पंकज सेवा, तीसरि भगति अमान । चौथी भगति मम गुणगण करइ कपट तजि गान 
चौपाईः - मन्त्र जाप मम दृढ़ बिस्वासा । पंचम भजन सुवेद प्रकासा ।। छँठ दम सील विरति बहु करमा । निरत निरंतर सज्जन धरमा ॥ सातवँ सम मोहिमय जग देखा । मो ते सन्त अधिक करि लेखा ॥ आठवें जथा लाभ सन्तोपा । सपनेहुँ नहिं देखइ परदोपा ।। नवम सरल सब सन छल हीना । मम भरोस हिय हरप न दीना ॥ नव मुँह एकउ जिनके होई । नारि पुरुप सचराचर कोई ॥ सोइ अतिसय प्रिय सबरी मोरे । सकल प्रकार भगति दृढ़ तोरे ॥
`, meaning: `(हे शवरी,) नवधा भक्ति तेरे प्रति कहता हूँ। सावधान होकर सुन और हृदय में रख । प्रथम भक्ति सन्तों का संग है। दूसरी भक्ति मेरी कथा के प्रसंग में रति है। तीसरी भक्ति गुरु के पदपंकज की मान रहित सेवा है। चौथी भक्ति यह है कि कपट तज कर मेरे गुणगण का गान करे । पंचम भक्ति जो वेद में सुप्रकाशित है वह मुझ में दृढ़ विश्वास के साथ मन्त्र जाप है। दम, शील और विरति की बहुत सी क्रियाएँ करना और सज्जन धर्मों में निरत होना छठवीं भक्ति है। सातवी भक्ति जगत को समदृष्टि से मन्मय देखना और सन्त को मुझ से अधिक समझना । यदृच्छालाभ में सन्तोष करना, स्वप्न में भी परदोप न देखना आठवी भक्ति है। नवीं भक्ति सत्र के साथ सरल और छलहीन होना और मेरे भरोसे हृदय में न हर्ष और न दैन्य लाना । हे शबरी, इन नवों में से जिसकी एक भी (भक्ति) होगी, चाहे वह स्त्री, पुरुप, चर, अचर, कोई भी हो वही मेरा अतिशय प्रिय है। हे शबरी, तेरी भक्ति तो सब प्रकार से दृढ़ है।
`, audioDriveId: '', singer: '' },

  // --- Chapter 3 ---
  { id: '1-3-1', part: 1, chapter: 3, chapterSequence: 1, title: 'कत जाइए रे घर लाग्यो रंगु', author: 'रामानन्द', hindiText: `1. RAMANAND ON THE INTERNAL IMMANENCE AND THE UNIVERSAL PERVASIVENESS OF GOD

कत जाइए रे, घर लाग्यो रंगु । मेरा चित न चलै, मन भयो पंगु ॥१॥ एक दिवस, मन उठी उमंग । घसि चन्दन, चोआ वहु सुगन्ध  ॥२॥ पूजन चले, ब्रह्म ठाईं, । सो ब्रह्म बतायो गुरु, मनहिं माहीं ॥३॥ जहँ जाइए, तहँ जल पखान । तू पूरि रह्यो है सब समान ॥४॥ वेद पुरान सब देखे जोय । उहाँ तो जाइए, जो इहाँ न होय ॥५॥ सतगुरु, मैं, बलिहारी तोर । जिन सकल निकल भ्रम काटे मोर ॥६॥ रामानन्द स्वामी रमत ब्रह्म । गुरु का सबद काटै कोटि करम ॥७॥
`, meaning: `कहाँ जाऊँ ? घर में ही रंग लग गया है । मेरे चित्त ने चंचलता छोड़ दी है, और मन पंगु बन गया है। एक दिन मन में लहर उठी कि अति सुगन्ध चन्दन की लकड़ी घिस कर ब्रह्म के स्थान पर पूजन के लिए चलूँ, तो गुरु ने ब्रह्म मन ही में बताया। जहाँ जाओ, वहाँ जल और पापाण ही हैं। हे भगवन् ! सब में तू पूर्णरूप से समाया है, वेद-पुराण आदि ढूँढ़ कर देखा तो ज्ञात हुआ कि, वहाँ तो तब जाऊँ जब तू यहाँ न हो । हे सद्गुरु ! मैं अपने को तुझ पर निछावर करता हूँ, जो तूने मेरे सकल भ्रम निःशेप काट दिए हैं। रामानन्द स्वामी ब्रह्म में रममाण हैं। गुरु के शद्ध ने कोटि कर्म काट दिए हैं।
`, audioDriveId: '', singer: '' },
  { id: '1-3-2', part: 1, chapter: 3, chapterSequence: 2, title: 'ऐसी आरति त्रिभुवन तारै', author: 'कबीर', hindiText: `THE GOD OF KABIR AS NIRANJANA.

ऐसी आरति त्रिभुवन तारै तेजपुंज तहँ प्रान उतारै ॥१॥ पाती पंच पुहुप करि पूजा देव निरंजन और न दूजा ॥ २ ॥ तन मन सीस समरपन कीन्हा प्रगट ज्योति तहँ आतमलीना ॥३॥ दीपक ज्ञान सबद धुनि घंटा परम पुरिख तहँ देव अनंता ॥४॥ परम प्रकाश सकल उजियारा कहै कबीर मैं दास तुह्मारा ॥५॥
`, meaning: `इस प्रकार की आरती तीनों भुवनों का उद्धार करती है। जहाँ प्रकाश का पुंज है, वहाँ प्राणों को न्योछावर कर पाँच पत्तीवाले पाँच फूलों से पूजन करो । निरंजन देव को छोड़कर दूसरा कोई देव नहीं है । तन, मन, सिर को समर्पण कर के प्रकाशमान ज्योति में आत्मा को लीन करो । वहां ज्ञान दीपक है, शद्ध घंटा ध्वनि है; जो परम पुरुप दिखाई पड़ता है, वही अनन्त देव है । कवीर कहते हैं, स्वयं प्रकाशमान होते हुए अखिल विश्व को प्रकाशित करने वाले हे ईश्वर ! मैं तुम्हारा दास हूं ।
`, audioDriveId: '', singer: '' },
  { id: '1-3-3', part: 1, chapter: 3, chapterSequence: 3, title: 'सोइ सच्चिदानंद घनरामा', author: 'तुलसीदास', hindiText: `TULSIDAS ON THE NIRANJANA GOD AS ASSUMING THE FORM OF SAGUNA

चौपाईः- सोइ सच्चिदानन्द घनरामा अज विज्ञानरूप गुनधामा व्यापक व्याप्य अखण्ड अनन्ता अखिल अमोघ शक्ति भगवन्ता अगुन अदभ्र गिरा-गोऽतीता सत्र दसी अनवद्य अतीता निर्मल निराकार निर्मोहा नित्य निरंजन सुख सन्दोहा इहां मोह का कारन नाहीं रबि सनमुख तम कबहुँ कि जाहीं दोहाः - भगत हेतु भगवान प्रभु, राम धरेउ तनु भूप । किए चरित पावन परम, प्राकृत नर अनुरूप ॥ निर्गुन रूप सुलभ अति, सगुन न जानहिं कोइ । सुगम अगम नाना चरित, सुनि मुनि मन अम होइ ।।
`, meaning: `वही सच्चिदानंद घन राम जन्मरहित, विज्ञानरूप, सब गुणों का आश्रय, व्यापक होते हुए व्याप्य, अविभाज्य, अन्त रहित, सत्र प्रकार की विफल न होने वाली शक्तियों से युक्त, भगवान, गुणातीत, महान, वाणी और इंद्रियों से परे, सर्वसाक्षी, अनिंद्य सत्र के परे, मल रहित, अविनाशी प्रभु हैं । ऐसे पुरुप में मोह या भूल का कोई कारण नहीं है। सूर्य के सामने अंधेरा कभी आ पावेगा ? भगवान प्रभु राम ने भक्तों के लिये भूपति का शरीर धारण कर सामान्य नर के समान परम पावन चरित्र किया । निर्गुणरूप तो अति सुलभ है । सगुणरूप को कोई नहीं जानता । प्रभु के सुगम, अगम, नानाप्रकार के चरित्रों को सुनकर सुनियों के मन में भी अम होता है।
`, audioDriveId: '', singer: '' },
  { id: '1-3-4', part: 1, chapter: 3, chapterSequence: 4, title: 'सुनु गिरिजा हरिचरित सुहाये', author: 'तुलसीदास', hindiText: `INSCRUTABILITY OF THE REASONS FOR THE INCARNATION OF GOD.

सुनु गिरिजां हरि चरित सुह। ये विपुल विशद निगमागम गाये ॥ हरि अवतार हेतु जस होई इदमित्थं कहि जाइ न सोई ॥ राम अतर्क्स बुद्धि मन बानी मत हमार अस सुनहु सयानी ।। तदपि सन्त मुनि वेद पुराना जस कछु कहहिं स्व-मति अनुमाना ।। तस मैं सुमुखि सुनावउँ तोही समुझि परइ जस कारन मोही ।। असुर मारि थापहिं सुरन्ह, राखहिं निजस्रुति सेतु । जग विस्तारहिं विपद जस, राम जनम कर हेतु ।। सोइ जस गाइ भगत भव तरहीं कृपासिन्धु जन हित तनु धरहीं ॥ राम जनम कै हेतु अनेका परम विचित्र एक ते एका ॥
`, meaning: `हे पार्वती, हरि के सुन्दर चरित सुनो। (जिसको) वेद विपुल और विशद (कहकर ) गाते हैं। जिस कारण से हरि का अवतार होता है, वह ठीक " यह इस प्रकार है ऐसा कहा नहीं जाता। राम बुद्धि, मन और वाणी से अतर्क्स हैं । हे बुद्धिमती पार्वती, सुनो; यही हमारा मत है। तथापि सन्त, मुनि, वेद, पुराण अपनी अपनी बुद्धि के अनुसार जो कुछ कहते हैं, वह जिस प्रकार मुझे समझ पड़ता है, हे सुन्दरमुखी पार्वती ! तुझे मैं सुनाता हूं। असुरों को मार कर देवों की स्थापना करते हैं। निज वेदों की मर्यादा का पालन करते हैं (और कराते हैं)। संसार में निर्मल यश फैलाते हैं। यही राम-जन्म का हेतु है। हरि के भक्त इस यश का गान कर भवसागर तर जाते हैं । भगवान कृपासिंधु जगत् कल्याण के लिये शरीर धारण करते हैं। तथापि रामजन्म के अनेक हेतु हैं और वे एक से एक विचित्र हैं।
`, audioDriveId: '', singer: '' },
  { id: '1-3-5', part: 1, chapter: 3, chapterSequence: 5, title: 'जिन्हकै रही भावना जैसी', author: 'तुलसीदास', hindiText: `GOD AS INSPIRING DIFFERENT EMOTIONS IN DIFFERENT MEN.

चौपाईः-- जिन्हकै रही भावना जैसी प्रभु मूरति देखी तिन तैसी ॥ देखहिं भूप महा-रनधीरा, मनहुँ बीर-रस धरे सरीरा ॥ डरे कुटिल नृप प्रभुहिं निहारी मनहुँ भयानक मूरति भारी । रहे असुर छल छोनिप बेखा तिन्ह प्रभु प्रगट काल सम देखा ।। दोहाः - नारि त्रिलोकहिं हरपि हिय, निज निज रुचि अनुरूप । जनु सोहत श्रृंगार धरि, मूरति परम अनूप ।। चौपाईः - विदुपन प्रभु विराटमय देखा बहुमुख कर पग लोचन सीसा ।। सहित विदेह बिलोकहिं रानी । सिसुसम प्रीति न जाइ बखानी ।। जोगिन्ह परम-तत्व मय भासा सान्त सुद्ध सम सहज प्रकासा ।। हरि भगतन्ह देखे दोउ भ्रता इष्ट-देव इव सब सुख दाता ।। रामहिं चितव भाव जेहि सीया सो सनेहु मुख नहिं कथनीया ।। उर अनुभवति न कहि सक सोऊ कवन प्रकार कहइ कवि कोऊ ।।
`, meaning: `जिनकी जैसी भावना रही उन्होंने उसी प्रकार प्रभु की मूर्ति देखी । रणधीर भूपतियों ने देखा मानो वीर रस विग्रहवान होकर खड़ा है । कुटिल नृपति प्रभु को देख कर डर गये, मानो कोई बड़ी भयानक आकृति है। जो असुर छल से राजवेपधारी थे उन्होंने प्रभु को प्रत्यक्ष काल के समान देखा । अपने हृदय में हर्षित होती हुई महिलाओं ने अपनी अपनी इच्छा के अनुसार उनको देखा, मानों श्रृंगार रस शरीर धारण कर अति सुंदर रूप में शोभायमान हो । ज्ञानियों को प्रभु विश्वतोमुख विश्वतोबाहु, विश्व-तस्थात्, विश्वतश्चक्षु और विश्वतःशीर्ष, ऐसे विराट रूप दिखाई दिये । जनक राजा के साथ रानियों ने देखा, उस समय की उनकी वत्सलता का वर्णन नहीं करते बनता । योगी लोगों को शांत, शुद्ध, सम, और संहंज प्रकाशं परंम-तत्व भासमान हुआ । हरि भक्तों ने सत्र सुखों को देने वाले अपने इष्टदेव के समान दोनों भाइयों को देखा । सीता जिस भाव से राम की ओर देखती हैं, वह स्नेह मुख से कहा नहीं जाता । जब कोई अपने अंतःकरण के अनुभव को स्वयं ही वाणी से नहीं कह सके तो कोई कवि किस प्रकार कहेगा ?
`, audioDriveId: '', singer: '' },
  { id: '1-3-6', part: 1, chapter: 3, chapterSequence: 6, title: 'कोई स्याम मनोहर ल्योरी', author: 'मीराबाई', hindiText: `THE VERY THEOS OF THE GOPI BECOMES A PANTHEOS; HER DEVOTION A COSMIC EMOTION.

कोई स्याम मनोहर ल्योरी सिर धरे मटकिया डोलै ॥१॥ दधि को नांव विसर गइ ग्वालिनि 'हरि ल्यो'' हरि ल्यो' बोलै ॥२॥ मीरा के प्रभु गिरधर नागर चेरी भई विन मोलै ॥३॥ कृष्ण-रूप छाकी है ग्वालिनि औरहिं औरै बोलै ॥४॥
`, meaning: `"कोई मनोहर श्याम को ले लो " इस प्रकार पुकारती हुई ग्वालिन सिर पर मिट्टी की हँडिया धर कर डोलने लगी । दही का नाम भूलकर 'ग्वालिन " हरि लो हरि लो " बोलने लगी। मीराः कहती है कि हे प्रभु गिरधर नागर ! वह आपकी विना मोल की दासी बन गयी और कृष्ण-रूप से अधाकर कुछ को कुछ बोलने लगी ।
`, audioDriveId: '', singer: '' },
  { id: '1-3-7', part: 1, chapter: 3, chapterSequence: 7, title: 'अब कैसे छूटे नाम रट लागी', author: 'रैदास', hindiText: `RAIDAS ON VARIOUS ANALOGIES FOR THE RELATION OF SAINT AND GOD.

अब कैसे छूटे नाम रट लागी ॥ टे ॥ प्रभुजी तुम चन्दन, हम पानी जाके अँग अँग बास समानी ॥१ ॥ प्रभुजी तुम घन, हम बन मोरा जैसे चितवत चन्द चकोरा ॥२॥ प्रभुजी तुम दीपक, हम बाती जाकी जोति बरै दिन राती ॥ ३ ॥ प्रभुजी तुम मोती, हम धागा जैसे सोनहिं मिलत सुहागा ॥४॥ प्रभुजी तुम स्वामी, हम दासा, ऐसी भगति करै रैदासा ॥५॥
`, meaning: `नाम की रट लग गई है, अब वह कैसे छूटेगी ? प्रभुजी, तुम चन्दन हो, मैं पानी हूं जिसके अँग अँग में आपकी गंध समा गई है। प्रभुजी, तुम मेघ हो, मैं बन का मोर हूं । जैसे चकोर चन्द्र की ओर देखता है (वैसे ही मैं तुम्हारी ओर देखता हूँ) प्रभुजी, तुम दीपक हो, मैं बत्ती हूँ, जिसकी ज्योति रात दिन जलती रहती है। प्रभुजी, तुम मोती हो, मैं धागा हूं। जैसे सुहागा सोने को मिलता है (वैसे ही तुम मुझको मिलते हो)। प्रभुजी, तुम स्वामी हो, मैं दास हूँ; ऐसी भक्ति रैदास करता है ।
`, audioDriveId: '', singer: '' },
  { id: '1-3-8', part: 1, chapter: 3, chapterSequence: 8, title: 'काहे रे बन खोजन जाई', author: 'नानक', hindiText: `NANAK ON THE UNITY OF THE INTERNAL AND THE EXTERNAL GOD.

काहे रे बन खोजन जाई ॥ टे ॥ सर्व निवासी सदा अलोपा, तोहे संग समाई ॥१॥ पुष्प मध्य जिमि वास बसत है, मुकुर मुँह जैसे छाई तैसे ही हरि बसै निरंतर घट ही खोजो भाई ॥२॥ बाहर भीतर एकहि जानो, यह गुरु ज्ञान बताई कह नानक बिनु आपहिं चीन्हे भिटै न भ्रम की काई ॥५॥
`, meaning: `रे, वन में खोजने के लिये क्यों जाता है ? सर्व-व्यापी और सदा अलोप तुझ में ही समाया है । जिस प्रकार फूल में सुगन्ध और मुकुर में छाया बसती है, वैसे ही हरि निरन्तर (तुझ में) बसता है । रे भाई, अपने घट में ही उसको खोजो । बाहर और भीतर एक ही जान लो । गुरु ने इसी को ज्ञान कहा है। नानक कहते हैं, कि अपने को पहिचाने बिना अम की काई नहीं मिटती ।
`, audioDriveId: '', singer: '' },
  { id: '1-3-9', part: 1, chapter: 3, chapterSequence: 9, title: 'तौ निबहै जन सेवक तेरा', author: 'दादू', hindiText: `DADU'S PRAYER TO KEEP HIM EVER ON THE RIGHT PATH.

तौ निबहै जन सेवक तेरा ऐसे दया करि साहिब मेरा ॥१॥ ज्यूँ हम , त्यूँ तू जोरै हम तोरें, पै तू नहिं तोरै ॥२॥ हम विसरें, त्यों तू न बिसारै हम बिगरें, पै तू न बिगारै ॥३॥ हम भूलें, तू आनि मिलावै हम बिछरें, तू अंग लगावै ॥४॥ तू भावै, सो हम में नाहीं दादू दरसन देहुँ गुसाँई ॥५॥
`, meaning: `ऐ मेरे साहब, ऐसी दया करो, तो तेरे सेवक जन का निर्वाह हो । यदि हम तोड़ें, तो तू नहीं तोड़ना । हमें तेरी विस्मृति होगी, तो तू विस्मृति नहीं होने देना । हम नीति-पथ से भ्रष्ट होंगे, तो हमें अष्ट होने नहीं देना । हम भूल कर दूर रहेंगे, तो तू हमें पास लाकर मिलाना । हम अलग होंगे, तो तू हमें गले लगाना । तू जो भाव हम में चाहता है वह हम में नहीं है। दादू कहते हैं कि हे गुसाँई, हमें कृपया दर्शन दो ।
`, audioDriveId: '', singer: '' },
  { id: '1-3-10', part: 1, chapter: 3, chapterSequence: 10, title: 'नरहरि चंचल है मति मोरी', author: 'रैदास', hindiText: `RAIDAS ON MUTUAL LOVE ONLY ON MUTUAL INSPECTION.

नरहरि चञ्चल है मति मोरी कैसे भगति करूं मैं तोरी ॥१॥ तू मोहि देखे तोहि देखूँ, प्रीति परस्पर होई । तू मोहि देखे, तोहि न देखें, यह मति सत्र बुधि खोई ॥२॥ सब घट अन्तर रमखि निरन्तर, मैं देखत नहिं जाना । गुन सत्र तोर, मोर सब औगुन, कृत उपकार न माना ॥३॥ मैं तोरि मोरि असमझि सौं, कैसे करि निस्तारा । कह रैदास कृष्ण करुणामय, जै जै जगत-अधारा ॥४॥
`, meaning: `हे नरहरि, मेरी मति चंचल है। मैं तुह्मारी भक्ति कैसे करूं ? तू मुझको देखे, और मैं तुझको देखूं, तो परस्पर प्रीति हो सकती है। तू मुझको देखता है, मैं तुझे नहीं देखता, इस मति से बुद्धि सम्पूर्णतया मूढ़ हो गई है। तुम सब घटों के भीतर निरन्तर रमते हो । मैंने देखना नहीं जाना । सब गुण तुह्मारे हैं और सब अवगुण मेरे हैं । किये हुए उपकारों को मैंने नहीं माना। 'मैं', 'तू', 'मेरा' और 'तेरा' इस अज्ञान से कैसे उद्धार हो ? रैदास कहते हैं, जगत के आधार करुणामय कृष्ण की जय हो ।
`, audioDriveId: '', singer: '' },
  { id: '1-3-11', part: 1, chapter: 3, chapterSequence: 11, title: 'मैं मझधारा का माँझी हूँ', author: 'अज्ञात', hindiText: `ON THE PARITY BETWEEN DEVOTEE AND GOD AS IN TULSIDAS.

मैं मझधारा का माँझी हूँ, तुम भव-सागर के केवट हो । जब कृपा नंजर मुझ दास पर हो, तब नैया गंगा के तट हो ॥ १ ॥ मैं सुरसरि पार उतार दिया, भव-सागर पार लगा देना । जिस जोनि में जन्म लिनूं भगवन्, तुम अपना दास बना लेना ॥ २ ॥
`, meaning: `मैं मध्य धार का मल्लाह हूँ। तुम भवसागर के केवट हो । जब मुझं दास पर कृपा-दृष्टि हो तो नैया गंगा के तट पर लग जाय । मैंने तुम को सुरसरि के पार लगा दिया । तुम मुझ को भवसागर के पार लगा देना । हे भगवन्, जिस योनि में मैं जन्म लूं, तुम (मुझे) अपना दास बना लेना ।
`, audioDriveId: '', singer: '' },
  { id: '1-3-12', part: 1, chapter: 3, chapterSequence: 12, title: 'अबकी राखि लेहु भगवान', author: 'सूरदास', hindiText: `SURDASA'S PRAYER TO GOD TO SET OFF ONE EVIL AGAINST ANOTHER.
    
अब की राखि लेहु भगवान ॥ टे ॥ हम अनाथ बैठीं द्रुम डरिया, पारधि साध्यौ वान ॥१॥ ताके डर निक्सन चाहत हौं, ऊपर रह्यो सचान । दोऊ भांति दुख भयो कृपानिधि, कौन उचारै प्रान ॥२॥ सुमिरत ही अहि डस्यौ पारधी, लाग्यौ तीर सचान । सूरदास गुन कहँ लग बरनौं, जै जै कृपा-निधान ॥३॥
`, meaning: `हे भगवन्, अब रक्षा करो । मैं अनाथ होकर द्रुम की डाली पर बैठी हूँ। पारधि ने बाण संधान किया । उसके डर से मैंने निकलना चाहा, ऊपर श्येन मँडराता था। दोनों प्रकार से दुख हुआ । हे कृपानिधि, प्राण की कौन रक्षा करे ? स्मरण करते ही अहि ने पारधि को डस लिया और तीर श्येन को लग गया । सूरदास कहते हैं कि हे कृपानिधान ! आपके गुणों का कहां तक वर्णन करूं? आपकी जय जयकार हो !`, audioDriveId: '', singer: '' },
  { id: '1-3-13', part: 1, chapter: 3, chapterSequence: 13, title: 'मेरो मन अनत कहाँ सुख पावै', author: 'सूरदास', hindiText: `LIKE A SPARROW ON THE HIGH SEAS, I CAN PERCH ONLY ON THY MAST, O' MY BARGE!

मेरो मन अनत कहां सुख पावै ॥ दे ॥ जैसे उड़ि जहाज कौ पंच्छी, फिरि जहाज पर आवै ॥१॥ कमलनैन को छाँड़ि महातम, और देव कौं ध्यावै । परम-गंग को छाँड़ि पियासो दुरमति कूप खनावै ॥२॥ जिहि मधुकर अम्बुज-रस चाख्यौ, क्यों करील फल भावै । सूरदास प्रभु कामधेनु तजि, छेरी कौन दुहावै ॥ ३ ॥
`, meaning: `मेरा मन अन्यत्र कहां सुख पावे ? जहाज़ पर का पक्षी उड़कर फिर जहाज़ पर ही आता है । कमलनयन के महात्म्य की उपेक्षा करके दूसरे देव की उपासना (कौन) करेगा? श्रेष्ठ गंगा को छोड़ कर (कौन) दुर्मति प्यासा कूप खुद्वायगा ? जिस भ्रमर ने कमल का रस चख लिया, वह क्या कँटीली झाड़ी का फल चाहेगा ? सूरदास पूछते हैं कि हे प्रभु ! कामधेनु को छोड़कर छेरी कौन दुहावेगा ?
`, audioDriveId: '', singer: '' },
  { id: '1-3-14', part: 1, chapter: 3, chapterSequence: 14, title: 'नैनहीन को राह दिखा प्रभु', author: 'अज्ञात', hindiText: `LIFT UP THIS BLIND MAN, GOD, TO THY PINNACLE THROUGH TORTUOUS AND DARK ASCENTS.

नैनहीन को राह दिखा प्रभु ॥ पग पग ठोकर खाऊँ मैं ।।१॥ तुमरि नगरिया कि कठिन डगरिया चलत चलत गिरि जाऊँ मैं ॥२॥ ओर मेरे घोर अँधेरा, भूल न जाऊँ द्वार तेरा ॥३ एक बार प्रभु हाथ पकड़ लो, मन का दीप जलाऊं मैं ॥४॥
`, meaning: `हे प्रभु, मुझ नेत्रहीन को रास्ता दिखाओ। मैं पद-पद पर ठोकर खा रहा हूँ। तुम्हारी नगरी विकट पहाड़ी पर बसी है। चलते चलते गिर पड़ता हूँ। मेरे चारों ओर घोर अंधकार फैला हुआ है। ऐसा न हो कि मैं तुम्हारा द्वार भूल जाऊँ । हे प्रभु, एक बार मेरा हाथ पकड़ लो तो मैं अपने मन का दीप जला लूँ !
`, audioDriveId: '', singer: '' },
  { id: '1-3-15', part: 1, chapter: 3, chapterSequence: 15, title: 'घर तजौं, वन तजौं', author: 'अज्ञात', hindiText: `PASSIONATE ATTACHMENT OF DEVOTEE TOWARDS GOD.

घर तजौं, बन तजौं, नागर नगर तजौं, बंसीबट तट तजौं, काहू पै न लजिहों ॥१॥ देह तजौं गेह तजौं, नेह कहौ कैसे तजौं, आज राजकाज सत्र, ऐसो साज सजिहौं ॥२॥ बावरो भयो है लोक, बाबरी कहत मोकों, बावरी कहे तें नेकु काहू न वरजिहौं ॥३॥ कहैया सुनैया तजौं, बाप और भैया तजौं, दैया ! तजौं मैया, पै कन्हैया नाहिं तजिहौं ॥४॥
`, meaning: `(मैं) घर छोड़ सकती हूँ। वन छोड़ सकती हूँ । नगर नागरिकों को छोड़ सकती हूँ। बंसीबट का तट छोड़ सकती हूं। देह छोड़ सकती हूँ, गेह छोड़ सकती हूँ परन्तु तुझीं कहो, स्नेह कैसे छोड़ सकूँगी ? आज सत्र राज-कार्य की भी ऐसी ही सजावट करूँगी। लोग पागल हो गये हैं और मुझको पागल कहते हैं। मैं पागल कहने से किसी को भी नहीं रोकूँगी । कहने और सुनने वाले दोनों को छोड़ दूँगी । बाप और भैया को छोदूँगी। हे दई ! मैया को भी छोड़ दूँगी किन्तु, कन्हैया को नहीं छोदूँगी ।
`, audioDriveId: '', singer: '' },
  { id: '1-3-16', part: 1, chapter: 3, chapterSequence: 16, title: 'तौक पहिरावौ, पाँव बेडी लै', author: 'अज्ञात', hindiText: `A DEVOTEE'S PREPAREDNESS TO BRAVE ALL DANGERS FOR THE SAKE OF GOD.

तौक पहिरात्रौ, पाँच बेड़ी लै भरावौ, गाढ़े बन्धन बँधायौ, औ खिचाओ काची खाल सों ॥१॥ विप लै पियाचौ, ता पै मूठिहू चलाबो, मझधार में डुवायौ, बाँधि पाथर कमाल सों ॥२॥ विच्छ लै बिछायो, ता वै मोहि लै सुलाबो, फेरि आगिहू लगायौ, बाँधि कापड़ दुसाल सों ॥३॥ गिरि तें गिरायौ, कारे नाग ते डसावो, हा ! हा ! प्रीति ना छुड़ावौ गिरधारी नन्दलाल सों ॥४॥
`, meaning: `(चाहे मुझको) तौक पहिना दो। पैरों में बेड़ी डाल दो। गाढ़े बन्धनों से बँधवा दो और कच्ची खाल खिंचवा लो । (चाहे) विप पिलाओ, और उस पर कटार भी चलाओ और भारी से भारी पत्थर बाँधकर मध्यधार में डुबा दो। (चाहे) विच्छुओं को विछा कर उस पर मुझे सुला दो। फिर कपड़ों और दुशालों से बाँधकर आग भी लगा दो । (चाहे) पर्वत से गिरा दो, (या) काले नागों से डसा दो । परन्तु हा ! हा ! गिरधारी नन्दलाल से मेरी प्रीति न छुड़ाओ ।
`, audioDriveId: '', singer: '' },
  { id: '1-3-17', part: 1, chapter: 3, chapterSequence: 17, title: 'इतनी कृपा हो स्वामी', author: 'बहिरो', hindiText: `ABSOLUTE RESIGNATION TO THE WILL OF GOD.

इतनी कृपा हो स्वामी, जब प्राण तन से निकले ॥ श्रीकृष्ण कृष्ण कह कर, मेरि जान तन से निकले ॥ १ ॥ श्रीगंगजी का तट हो, श्रीजमुनजी का वट हो । जब साँवरो निकट हो, तब प्राण तन से निकले ॥ २ ॥ सन्मुख साँवरा खड़ा हो, मुरली का स्वर भरा हो । चित में जो तू अड़ा हो, तत्र प्राण तन से निकले ॥ ३ ॥ जब प्राण कण्ठ आवे, कोइ रोग ना सतावे ।। आपहि दरस दिखावे, तब प्राण तन से निकले ॥ ४ ॥ दुनिया है अपनी गर्जी, बहिरो कि यही अर्जी ॥ जब हो तुम्हारी मर्जी, तब प्राण तन से निकले ॥ ५ ॥
`, meaning: `हे स्वामी, जब प्राण तन से निकले तो इतनी कृपा हो कि कृष्ण कृष्ण कहकर मेरी जान इस शरीर से निकले । श्री गंगाजी का किनारा हो, श्री यमुनाजी पर का वट हो । जब साँवरा निकट हो, तब तन से प्राण निकले । सामने साँवला खड़ा हो; मुरली का स्वर चारों दिशाओं में भरा हो और जब तू चित्त में अड़ा हो, तत्र तन से प्राण निकले । जब प्राण कण्ठ में आवें, तब किसी भी रोग की पीड़ा न हो और जब स्वयं आप दर्शन दें, तब तन से प्राण निकले । दुनियाँ तो अपनी इच्छाओं की पूर्ति चाहती है पर बहिरो की यह प्रार्थना है कि जब आपकी इच्छा हो तभी प्राण तन से निकले ।`, audioDriveId: '', singer: '' },

  // --- Chapter 4 ---
  { id: '1-4-1', part: 1, chapter: 4, chapterSequence: 1, title: 'गुरु विन कौन बतावै बाट', author: 'कबीर', hindiText: `THE GURU AS ENABLING ONE TO CROSS THE TUMULTUOUS STREAM OF LIFE.

गुरु विन कौन बतावै बाट बड़ा विकट यमघाट ॥ १॥ आन्ति पहाड़ी नदिया वीच अहंकार की लाट ॥ २ ॥ काम क्रोध दो पर्वत ठाड़े लोभ चोर संघात ॥ ३ ॥ मद मत्सर का मेंह बरसता माया पौन बह डाट ।॥४॥ कहत कबीर सुनो भई साधो कस तरना यद्द घाद ॥५॥
`, meaning: `विना गुरु के मार्ग कौन बतावे ? यमघाट बड़ा विकट है। जीवन की नदी के बीच आन्ति की पहाड़ी है और अहंकार का ऊंचा स्तम्भ है। काम क्रोध रूपी दो पर्वत खड़े हैं। नाना लोभ रूपी चोरों का जमाव है। मद और मत्सर का मेव बरसता है। माया रूपी पवन प्रबलता से बह रहा है। कवीर कहते हैं कि हे साधो, यह घाट किस प्रकार तरा जाय ?
`, audioDriveId: '', singer: '' },
  { id: '1-4-2', part: 1, chapter: 4, chapterSequence: 2, title: 'साधो सो सद्गुरु मोहिं भावै', author: 'कबीर', hindiText: `THE MORAL CHARACTERISTICS OF A SADGURU.

साधो सो सदगुरु मोहिं भावै ॥ टे ॥ सत्तनाम का भर भर प्याला, आप पिए मोहिं प्यावै ॥१॥ मेले जाय न महन्त कहावै, पूजा भेट न लावै ॥ २ ॥ परदा दूर करै आँखिन का, निज दरसन दिखलावै ॥ ३ ॥ जाके दरसन साहब दरसै, अनहद सब्द सुनावै ॥ ४ ॥ माया के सुख दुख करि जानै, संग न सुपन चलावै ॥५॥ निस दिन सतसंगत में राँचै, शब्द में सुरत समावै ॥६॥ कवीर ताको भय कह नाहीं, निरभय पद सरसावै ॥७॥
`, meaning: `हे साधो, मैं उसी को सद्‌गुरु समझता हूँ, जो सत्य-नाम का प्याला भरभर के स्वयं पीवे और मुझ को भी पिलावे । जो न मेले को जाता है, न महन्त कहलाता है और न पूजा भेंट स्वीकार करता है। जो आंखों का परदा दूर करता है और आत्म-स्वरूप दिखलाता है । जिसके दर्शन से परमेश्वर दृष्टि में आ जावे। जो अनाहत शब्द सुनाता है। जो माया के सुख को दुःख करके जानता है और स्वप्न में भी उस सुख में आसक्त नहीं होता । जो रात दिन सत्संग में अनुरक्त रहता है और शब्द में सुरत का प्रवेश करता है। कवीर कहते हैं उस सद्‌गुरु को भय नहीं, क्योंकि वह निर्भय पद में प्रवेश कर रसपूर्ण होता है।
`, audioDriveId: '', singer: '' },
  { id: '1-4-3', part: 1, chapter: 4, chapterSequence: 3, title: 'वोई सद्गुरु सन्त कहावै', author: 'कबीर', hindiText: `THE MYSTICAL CHARACTERISTICS OF A SADGURU.

वोइ सतगुरु सन्त कहावै, नैनन अलख लखावै ॥ टे ॥ ड़ोलत डिगै न बोलत बिसरै, जब उपदेस दृढ़ावै । प्रानपूज्य किरिया तें न्यारा, सहज समाधि सिखावै ॥ १ ॥ द्वार न सँधै पचन न रोकै, नहिं अनहत अरुझावै । यह मन जाय जहाँ जग जब ही, परमातम दरसाथै करम करै निहकरम रहे जो, ऐसी जुगत दिखावै । सदा विलास त्रास नहिं मन में, भोग में जोग जगावै ॥ ३॥ धरती त्यागि अकासहुँ त्यागै, अधर मड़ैया छावै । सुन सिखर की सार सिला पर, आसन अचल जमात्रै ॥ ४॥ भीतर रहा सो बाहिर देखे, दूजा दृष्टि न आवै । कहत कवीर बसावे हंसा, आवागमन मिटावै ॥ ५॥
`, meaning: `द्गुरु या सन्त वही कहलाता है, जो अलख को आँखों से लखावे । जब अन्तर में उपदेश दृढ़ करे तो वह डोलता हुआ भी न डिगे, बोलता हुआ भी न भूले । जो प्राण प्रधान क्रिया से भिन्न सहज समाधि सिखाता है, जो न द्वार रूंधे न पवन रोके और न अनाहत में फँसावे । यह मन संसार में जब कभी और जहाँ कहीं भी जावे, उसको परमात्मा का दर्शन करावे । जो ऐसी युक्ति बतावे कि कर्म करते हुए भी निष्कर्म रहा जाय, जो सदा प्रसन्न रहे, मन में त्रास न लावे और भोग में भी योग जागृत रक्खे । जो धरती को त्याग कर आकाश को भी छोड़ दे और बीच में आधार रहित कुटिया बनावे । शून्य शिखर की श्रेष्ठ शिला पर अचल आसन जमावे । जो भीतर रहता है उसको बाहर देखे, दूसरा पदार्थ (उसकी) दृष्टि में न आवे । कवीर कहते हैं कि हंस को (परमात्मा में) स्थिर कर के आवागमन मिटा देता है।
`, audioDriveId: '', singer: '' },
  { id: '1-4-4', part: 1, chapter: 4, chapterSequence: 4, title: 'अपने घट दियना बारु रे', author: 'कबीर', hindiText: `THE NAME OF GOD AS THE OIL WHICH ENABLES THE WICK OF MIND TO BE INFLAMED WITH THE FIRE OF GOD.

अपने घट दियना बारु रे ॥ टे ॥ नाम तेल सुरत कै बाती, ब्रम्ह अगिन उद्गारु रे ॥१॥ जग-मग जोत निहार मन्दिर में, तन मन धन सब वारु रे ॥ २॥ झूठी जान जगत की आसा, बारंबार विसारु रे ॥३॥ कहे कबीर सुनो भाइ साधो, आपन काज सँवारु रे ॥४॥
`, meaning: `अपने घट में दीपक जलाओ । नाम का तेल डालकर सुरति की बत्ती को ब्रम्ह-रूप अग्नि से उद्दीपित करो। मन्दिर में जगमग ज्योति देख कर, उस पर अपना तन, मन और धन सब निछावर कर दो। जगत की आशा को झूठी जान कर बार बार उसका विस्मरण करो। कवीर कहते हैं कि हे साधो, अपना काम अच्छी तरह से सम्पूर्ण करो ।
`, audioDriveId: '', singer: '' },
  { id: '1-4-5', part: 1, chapter: 4, chapterSequence: 5, title: 'नाम रूप दुइ ईस उपाधी', author: 'तुलसीदास', hindiText: `NAME AS THE SCHEMATIZER OF NIRGUNA AND SAGUNA.

नाम रूप दुइ ईस उपाधी, अकथ अनादि सुसामुझि साथी ॥ को बड़ छोट कहत अपराधू, सुनि गुन भेद समुझिहहिं साधू ।। रूप विशेष नाम विन जाने, करतल गत न परहिं पहिचाने ।। सुमिरिय नाम रूप विन देखे, आवत हृदय सनेह विसेखे ॥ नाम रूप गति अकथ कहानी, समुझति सुखद, न परत बखानी ।। अगुन सगुन विच नाम सुसाखी, उभय प्रबोधक चतुर दुभाखी ।।
`, meaning: `नाम और रूप दोनों ईश की उपाधियां हैं। दोनों अकथ और अनादि हैं। अच्छी समझ वाले ही इनको साथ सकते हैं। (इनमें से) "कौन बड़ा, कौन छोटा" यह कहना अपराध है । साधु पुरुप इनका गुण भेद सुनकर (अन्तर में) समझ लेंगे । नाम के जाने बिना रूप-विशेप करतल-गत होने पर भी पहिचान नहीं पड़ता । रूप के देखे बिना ही नाम को स्मरण करने से ईश्वर अधिक स्नेह से हृदय में आता है। नाम और रूप की गति एक अकथनीय कहानी है। वह समझने में सुखद है, पर उसका वर्णन संपूर्णतया नहीं किया जा सकता है। नाम निर्गुण और सगुण के बीच एक चतुर सुसाक्षी, दुभाषी और प्रबोधक है।
`, audioDriveId: '', singer: '' },
  { id: '1-4-6', part: 1, chapter: 4, chapterSequence: 6, title: 'काहे न रसना रामहि गावहि', author: 'तुलसीदास', hindiText: `TULSIDASA'S APOSTROPHE TO THE TONGUE.

काहे न रसना रामहिं गावहि ॥ टे ॥ निस दिन पर अपवाद वृथा कृत, रटि रटि राग बढ़ावहि ॥१॥ नर मुख सुन्दर मन्दिर पावन, बसि जनि ताहि लजावहि । ससि समीप रहि त्यागि सुधा कत, रविकर-जल कहँ धावहि ॥२॥ काम कथा कलि कैरव चन्दिनि, सुनत स्रवन दै भावहि । तिन्हहिं हटकि, भजि हरि कल कीरति, करन कलंक नसावहि ॥३॥ जातरूप मति, युक्ति रुचिर मनि, रचि रचि हार बनावहि । सरन सुखद, रविकुल-सरोज रवि, राम नृपहिं पहिराबहि ॥४॥ बाद विवाद स्वाद तजि, भजि हरि, सरस चरित चित लावहि । तुलसिदास भव तरहि, तिहुँ पुर, तू पुनीत जस पावदि ॥५॥
`, meaning: `रे रसना, तू राम को क्यो नहीं गाती ? रात दिन पर-अपवाद रट रट कर उसमें व्यर्थ ही क्यों राग बढ़ा रही है ? नर के मुखरूपी सुन्दर पवित्र मन्दिर में बसकर उसको मत लञ्जित कर । चन्द्रमा के समीप रहने से प्राप्त होनेवाली सुधा को त्यागकर रविकर जल के लिये क्यों दौड़ती है। कलिरूपी कैरव के लिये जो चान्दनी है, ऐसी काम कथा को कान भाव देकर सुनते हैं। उनको रोक कर तू हरि की सुन्दर कीर्ति को भज और कानों के कलंक को दूर कर । मति रूपी सुवर्ण के तार से युक्ति रूपी रुचिर मणियों का हार बहुत कौशल के साथ तू बना और शरण सुखद रविकुल रूपी कमल के लिये सूर्य रूपी राजा राम को पहिना । वाद-विवाद के लिये रति को छोड़कर हरि को भज और मेरे चित्त को उनके सरस चरित्र में लगा । तुलसीदास संसार को तर जाय और तू तीनों लोकों में पुनीत यश प्राप्त करे ।
`, audioDriveId: '', singer: '' },


  { id: '1-4-6b', part: 1, chapter: 4, chapterSequence: 6, title: 'बिनु पग चलै सुनै बिनु काना', author: 'तुलसीदास', hindiText: `बिनु पग चलै सुनै बिनु काना...`, meaning: ``, audioDriveId: '', singer: '' },


  { id: '1-4-7', part: 1, chapter: 4, chapterSequence: 7, title: 'अजर अमर इक नाम है', author: 'कबीर', hindiText: `ON INTERNAL MEDITATION BY MEANS OF THE NAME.

अजर अमर इक नाम है, सुमिरन जो आवै ॥ टेक ॥ विन ही मुख के जप करो, नहिं जीभ डुलाबो । उलटि सुरत ऊपर करो, नैनन दरसायो ॥१॥ जाय हंस पच्छिम दिसा, खिरकी खुलवायो । तिरवेनी के घाट पर, हंसा नहवावो ॥ २ ॥ पानी पचन कि गम नहीं, बोहि लोक मँजाबो । ताही विच इक रूप है, वोही ध्यान लगावो ॥३॥ जिमीं असमान वहां नहीं, वो अजर कहावै । कहै कबीर सोइ साथ जन, वा लोक मँझावै ॥४॥
`, meaning: `वही एक नाम अजर अमर है, जो स्मरण में प्रगटं हो । मुख के विना ही जप करो। जीभ मत डुलाबो । सुरत उलट कर ऊपर करो। नयनों को दिखलाओ । जब हंस पश्चिम दिशा को जाय, तब खिड़की खुलवाओ । त्रिवेणी के घाट पर उसको स्नान कराओ। जहां पानी और पवन की पहुंच नहीं है, उस प्रदेश में उसको मज्जन करने दो । उसी के बीच में एक रूप है। उसी (रूप) पर अपना ध्यान लगाओ । जहाँ जमीन और आसमान नहीं, वह प्रदेश अजर कहलाता है। कबीर कहते हैं कि जो उस लोक में प्रवेश करता है, वही साधु पुरुप है ।`, audioDriveId: '', singer: '' },
  { id: '1-4-8', part: 1, chapter: 4, chapterSequence: 8, title: 'या विधि मनको लगावै', author: 'कबीर', hindiText: `ON INTENSE CONCENTRATION.

या विधि मन को लगावै, मन के लगाए प्रभु पावै ॥ टे ॥ जैसे नटवा चढ़त बाँस पर, ढोलिया ढोल बजावै । अपना बोझ धेरै सर ऊपर, सुरति बरत पर लाथै ॥१॥ जैसे भुवंगम चरत बनहिं में, ओस चाटने आवै । कबहूँ चाटै कवहूँ मनि चितवै, मनि तजि प्रान गँचावै ॥२॥ जैसे सती चढ़ी सत ऊपर, अपनी काय जरावै । मात पिता सब कुटुम्ब तियागै, सुरति पिया पर लावै ॥३॥ धूप दीप नैवेद अरगजा, ज्ञान कि आरत लावै । कहै कबीर सुनो भाइ साधो, फेर जनम नहिं पाथै ॥४॥
`, meaning: `इस प्रकार मन को लगाओ, कि जिसके लगाते ही प्रभु को पाओगे । जैसे नट, ढोलिया के ढोल बजाते समय बाँस पर चढ़ता है और अपने सिर पर बोझ लिये हुए भी अपना ध्यान तन्मयता से रस्सी पर लगाता है। जैसे जंगल में चरते समय सर्प ओस चाटने के लिये आता है तो कभी ओस चाटता है, कभी मणि को देखता है। क्यों कि मणि से बिछुड़ने पर वह प्राण गँवा देगा। जैसे सती आवेश में आकर चिता में अपनी काया जलाने आती है और माता पिता तथा सब कुटुम्ब को त्याग कर एक प्रियतम पर ध्यान लगाती है। कबीर कहते हैं कि हे साधो, जो धूप दीप नैवेद्य अरगजायुक्त ज्ञान रूपी आरती जलायेगा, वह पुनर्जन्म नहीं पायेगा।
`, audioDriveId: '', singer: '' },
  { id: '1-4-9', part: 1, chapter: 4, chapterSequence: 9, title: 'चेतना है तो चेतले', author: 'नानक', hindiText: `ON TURNING EVERY MOMENT TO SPIRITUAL USE.

चेतना है तो चेतले, निसि-दिन में प्रानी । छिन छिन अवधि विहात, फूटे घट ज्यों पानी ॥१॥ हरि-गुन काहे गावहि, रे मूरख अज्ञाना । झूठे लालच लागि के, नाहीं मर्म पिछाना ॥ २ ॥ अजहूँ कछु नहीं, जो प्रभु गुन गावै । कहि नानक तेहि भजन तें, निरभय पद पावै ॥३॥
`, meaning: `ए प्राणी, जब तक चेतना है, तब तक रात दिन चिन्तन कर ले । प्रतिक्षण अवधि उसी तरह व्यतीत हो रही है, जिस तरह फूटे घड़े से पानी चूता है। रे अज्ञान, मूर्ख, हरि के गुण क्यों नहीं गाता ? झूठे लालच में लगकर तूने मर्म को नहीं पहचाना। अगर तू प्रभु के गुण गावे तो अभी भी कुछ बिगड़ा नहीं है। नानक कहते हैं कि प्रभु के भजन से तू निर्भय-पद पावेगा ।
`, audioDriveId: '', singer: '' },
  { id: '1-4-10', part: 1, chapter: 4, chapterSequence: 10, title: 'भूले मन समझके लाद लदनिया', author: 'कबीर', hindiText: `IF YOU WANT TO DO THE RIGHT THING, DO IT HERE AND NOW.

भूले मन समझ के लाद लद‌निया ॥ टे ॥ टाण्डा लाद कहाँ को लै जैयो, आगे मुलुक बिरनिया ॥१॥ सौदा करे तो यहि जुग करले, आगे हाट न बनिया ॥ २ ॥ पानी पिये तो रतन कुएँ का, आगे घाट न पनिया ॥३॥ कहे कवीर सुनो भाइ साधो, यह पद है निरवनिया ॥४॥
`, meaning: `हे मूर्ख मन, सोचकर बोझा लाद । बनजारों के झुण्ड ! माल लाद कर कहाँ ले चले हो ? आगे पराया देश है। सौदा करना है तो इसी क्षण करलो; क्यों कि इसके आगे न बाज़ार है न खरीदने वाला, न बेचने वाला । पानी पीना है तो इसी कुएँ का पीले, जो रत्नसम है। आगे न घाट है, न पानी है। कबीर कहते हैं, हे भाई साधो ! सुनो, यह निर्वाणियों का पद है।`, audioDriveId: '', singer: '' },
  { id: '1-4-11', part: 1, chapter: 4, chapterSequence: 11, title: 'कोरी साल न छाँडै रें', author: 'दादू', hindiText: `LIKE A GOOD WEAVER, PLEASE YOUR MASTER BY PRODUCING A DURABLE GARMENT OF CLOSE AND CONTINUOUS TEXTURE.

कोरी साल न छाँडै रे, सब घावर काढै रे ॥ टे॥ प्रेम प्राग लगाई धागै, तत्त तेल निज दीआ । एक-मना इस आरम्भ लागा, ज्ञान राछ भर लीया ॥१॥ नाम नली भरि बुण कर लागा, अन्तर गति रंग राता । तागै बागै जीव जुलाहा, परम तत्व सों माता ॥ २॥ सकल शिरोमणि बुनै विचारा, सान्हा सूत न तोड़ै । सदा सचेत रहै लौ लागा, ज्यों टूटे त्यों जोड़े ॥ ३॥ ऐसे तनि बुनि गहर गजीना, साई के मन भावै । दादू कोरी कर्ता के संगि, बहुरि न इहि जग आवै ॥४॥
`, meaning: `जुलाहे ! छेद को रहने न देना । सब गाँठों (साँठों) को निकाल देना । प्रेम और प्राण के धागे लगा कर आत्म-तत्व रूपी दीपक के प्रकाश में एक चित्त होकर जुलाहे ने बुनना आरम्भ किया। ज्ञान रूपी राछ ताने से भर लिया और नामरूपी नली बाने से भर कर जुलाहा ताना बाना बुनने लगा । अन्तर्भाव रूपी रंग से लाल होकर जीव रूपी जुलाहा परम-तत्व से मतवाला हो गया । सब जुलाहों का शिरोमणि होकर भी नम्रता से बुनते हुए, सँधा हुआ सूत टूटने नहीं देता। सदा लौ लगाकर सचेत रहता है। ज्योंही टूटता है, त्योंही जोड़ देता है। इस प्रकार बड़ा गाढ़ा और घना कपड़ा बुनकर सांई के चित्त को रिझाता है। दादू कहते हैं कि जुलाहा साईं के संग से इस युग में फिर लौटकर नहीं आवेगा ।`, audioDriveId: '', singer: '' },
  { id: '1-4-12', part: 1, chapter: 4, chapterSequence: 12, title: 'तो भी कच्चा वे कच्चा', author: 'मच्छेन्द्र', hindiText: `INADEQUACY OF MERE YOGA FOR THE REALISATION OF GOD.

तो भी कच्चा बे कच्चा, नहीं गुरू का बच्चा ॥ टे ॥ दुनिया तजकर खाक लगाई, जाकर बैठा बन मों । खेचरि मुद्रा बज्रासन पर, ध्यान धरत है मन मों ॥१॥ गुपित होके परगट होवे, जावे मथुरा कासी । प्राण निकाले सिद्ध भया है, सत्य लोक का वासी ॥ २ ॥ तीरथ कर कर उम्मर खोई, जोग जुगति में सारी । धन कामिनि को नजर न लावे, जोग कमाया भारी ॥३॥ कुण्डलिनी को खूब चढ़ावे, ब्रह्म रन्ध्र में जावें । चलता है पानी के ऊपर, मुख बोले सो होवे ॥४॥ शास्त्रों में कुछ रहा न बाकी, पूरा ज्ञान कमाया । वेद विधी का मारग चलकर, तन को लकड़ा कीया । ५ ॥ कहे मछेन्द सुनु रे गोरख, तीनो ऊपर जाना । किरपा भई जबै सद्गुरु की, आपहिं आप पिछाना ॥ ६॥
`, meaning: `अरे, तब भी कच्चा ही है। गुरु बच्चा नहीं है। दुनिया को छोड़कर, तन पर राख लगाई। वन में जाकर बैठा । वज्रासन पर खेचरि मुद्रा लगाकर मन में ध्यान धरता है । गुप्त होकर प्रगट होता है और मथुरा व काशी जाता है । प्राण को शरीर से बाहर निकाल कर सिद्ध हुआ और सत्य लोक का वासी हुआ। तीर्थ कर कर के योग की युक्ति में सारी आयु खो दी। धन और कामिनी को दृष्टि में नहीं लाता है । भारी योग कमाया है। कुण्डलिनी को इस प्रकार ऊपर चढ़ाता है कि वह ब्रह्म-रन्ध्र में जाये । पानी के ऊपर चलता है। मुख से जो बोलता है, वही होता है। शास्त्रों में कुछ बाकी नहीं रहा । पूरा ज्ञान कमा लिया है। वेद विधि के मार्ग पर चलकर शरीर को लकड़ी कर दिया । मत्स्येन्द्र कहते हैं कि हे गोरख ! सुनो, तीनों (गुणों) के ऊपर हो जाओ। जब सद्‌गुरु की कृपा होती है तभी अपने आपको पहिचानोगे ।
`, audioDriveId: '', singer: '' },
  { id: '1-4-13', part: 1, chapter: 4, chapterSequence: 13, title: 'अगर है शौक मिलने का', author: 'मन्सूर', hindiText: `THE ANAL-HAQ METHOD OF MEDITATION.

अगर है शौक मिलने का, तो हर-दम लौ लगाता जा । जला कर खुद-नुमाई को, भसम तन पर चढ़ाता जा ॥१॥ मुसल्ला फाड़, तसवी तोड़, किताचें डाल पानी में । पकड़ दस्त तू फ़रिश्तों का, गुलाम उनका कहाता जा ॥२॥ न मर भूखा न रख रोज़ा, न जा मसजिद न कर सिज़दा । हुकुम है शाह कलन्दर का, अनलहक़ तू कहाता जा ॥३॥ कहे मन्सूर मस्ताना, हक़ मैंने दिल में पहचाना । वही मस्तों का मैखाना, उसी के बीच आता जा ॥ ४ ॥
`, meaning: `अगर मिलने का शौक़ है, तो प्रतिश्वास ईश्वर पर लौ लगाते जाओ । अहंकार को जलाकर उसकी भस्म शरीर पर लगाओ, नमाज़ की दरी को फाड़ दो। जप माला को तोड़ दो । किताबें पानी में ड़ालो । ईश्वर के दूतों का हाथ पकड़ो और उनका दास कहलाते जाओ । भूखे न मरो । रोज़ा मत रक्खो । मस्जिद को न जाओ । नमाज़ में सिर मत टेको । कलन्दरों के शाह की आज्ञा है कि " मैं ईश्वर हूँ " ऐसा कहते जाओ । मस्त हुआ मन्सूर कहता है कि मैंने ईश्वर को दिल में पहचाना है। वही मस्तों की मधुशाला है । उसी के बीच आते जाओ ।
`, audioDriveId: '', singer: '' },
  { id: '1-4-14', part: 1, chapter: 4, chapterSequence: 14, title: 'नौकरी शरिअतसे करना', author: 'कबीर', hindiText: `STORM THE FORTRESS OF SPIRITUAL EXPERIENCE; DO NOT TURN BACK ANY LONGER.

नौकरी शरिअत से करना, हुकुम पीर सुरशिद का रखना ॥ टे ।। मन घोड़े को मार चाबुका, विवेक लगाम लेना ।। प्रेम क्षेम से रहना बेटा, "सोऽहं" गढ़ लेना ॥१॥ कूच दरकूच मुकाम करके, संगम पूजा करना । अखी लगाकर मार निशानी, पीछे मत हटना ॥ २॥ सिढ़ी पकड़ कर चढ़ना बेटा, धीरज से गढ़ लेना । अन्दर का पट खोल लेना, धीरे से चढ़ना ॥३॥ अजर देश की हवा देख ले, अमर कुण्ड मों न्हाना । भगवा पट की बाँध निशानी, पीछे मत हटना ॥४॥ कहत कबीर सुनो भाइ साधो, बार बार नहिं आना । जोही गुरु का पूरा होगा, बोही बात पहचाना ॥ ५ ॥
`, meaning: `(हे बेटा!) धर्म के अनुसार नौकरी बजाना और महात्माओं तथा गुरु की आज्ञा का पालन करना । मन-रूपी घोड़े को चाबुक मारते हुए विवेक की लगाम हाथ में पकड़ना । प्रेम और क्षेम से रह कर, हे बेटा ! " सोऽहं” किला जीतना । मंजिल दर मंजिल पहुँच कर, संगम पर पूजा करना । अविचल चित्त से लक्ष्य का वेध करना । और पीछे नहीं हटना । (श्वास की) सीढ़ी पकड़कर ऊपर चढ़ना और हे बेटा ! धीरज के साथ किले को जीतना । अन्दर का परदा खोल कर धैर्य से ऊपर चढ़ना । जरा रहित देश की हवा लेकर अमृत-कुण्ड में नहाना । गेरुए वस्त्र की पताका फहराते हुए पीछे नहीं हटना । कवीर कहते हैं कि हे साधो ! सुनो, बार बार नहीं आना है। जो गुरु का पूरा चेला होगा, वही इस बात को पहिचानेगा ।
`, audioDriveId: '', singer: '' },
  { id: '1-4-15', part: 1, chapter: 4, chapterSequence: 15, title: 'सुनारे मैने निर्वल के बल', author: 'सूरदास', hindiText: ` SURRENDER, THE ESSENTIAL CONDITION OF GRACE.

सुना रे मैंने निर्बल के बल राम ॥ टे ॥ पिछले साख भरूँ सन्तन की, अड़े सँवारे काम ॥१॥ जब लगि गज बल अपनो बरत्यो, नेकु नहिं काम । निरवल है, बल राम पुकायो, आए आधे नाम ॥२॥ अपत्रल, तपबल और बाहुबल, चौथो है बल दाम । सूर किसोर-कृपा तें सब बल, हारे को हरिनाम ॥३॥
`, meaning: `मैंने सुना है कि राम निर्बल के बल हैं। पिछले सन्तों की साक्षी देता हूँ कि राम ने अटके हुए काम सँवारे हैं। जब तक गज ने अपना बल लगाया, तब तक थोड़ा भी काम नहीं होने पाया। जब निर्बल होने पर अन्तर्बल से राम को पुकारा तब आधे नाम पर ही राम को आना पड़ा । पहला बल आत्मबल, दूसरा तपचल, तीसरा बाहुबल और चौथा धनबल है। सूरदास कहते हैं कि किशोर कृष्ण की कृपा से ही सब बल प्राप्त होता है; हारे हुए को हरिनाम ही एकमेव बल है।
`, audioDriveId: '', singer: '' },
  { id: '1-4-16', part: 1, chapter: 4, chapterSequence: 16, title: 'प्रीति लगी तुव नामकी', author: 'कबीर', hindiText: `KABIR ON SEPARATION FROM GOD.

प्रीति लगी तुव नाम की, पल विसरै नाई । नजर करौ मेहर की, मोहिं मिलौ गुसाँई ॥१॥ बिरह सतावै हाय अब, जिव तड़पै मेरा । तुम देखन को चाव है, प्रभु मिलौ सवेरा ॥ २ ॥ नैना तरसे दरस को, पल पलक न लागे । दर बन्द दीदार का, निसि-बासर जागै ॥ ३॥ जो अब के प्रीतम मिले, करूँ निमिप न न्यारा । अब कवीर गुरु पाइया, मिला प्रान पियारा ॥४॥
`, meaning: `( हे स्वामी) तुम्हारे नाम की प्रीति लगी है। एक पल भी तुम्हारा नाम नहीं विसरता । हे गोसाँई, कृपादृष्टि करो और मुझ से मिलो । विरह सता रहा है। हाय ! अब जीत्र तड़प रहा है। तुम्हें देखने की उत्कण्ठा है। अत एव हे प्रभु, शीघ्र ही मुझे मिलो । नेत्रों को दर्शन की प्यास लगी है। एक पल भी पलक नहीं लगते । दीदार का द्वार बन्द है। मैं रात दिन जाग रहा हूँ। अगर इस बार प्रिय-तम मिल जाय तो क्षणमात्र भी अलग नहीं करूंगा । अब कबीर गुरु को पा गया और प्राण प्यारा मिल गया ।
`, audioDriveId: '', singer: '' },
  { id: '1-4-17', part: 1, chapter: 4, chapterSequence: 17, title: 'जोगी मत जा, मत जा', author: 'मीराबाई', hindiText: `MIRA'S MIND ON THE RACK.

जोगी मत जा, मत जा, मत जा, पाँइ परूँ मैं तेरी ॥ दे ॥ प्रेम भक्ति को पैण्ड़ो न्यारो, हम को गैल लगा जा ॥१॥ अगर चन्दन की चिता रचाऊँ, अपणे हाथ जला जा ॥२॥ जल बल भई भस्म की ढेरी, अपणे अंग लगा जा ॥३॥ मीरा के प्रभु गिरधर नागर, ज्योत में ज्योत मिला जा ॥ ४ ॥
`, meaning: `हे योगी, मत जाओ, मत जाओ, मत जाओ । मैं तुम्हारे पैर पड़ती हूं। प्रेम भक्ति का मार्ग विचित्र है, मुझ को उसकी गली लगा जाओ । या अगरु चन्दन की मैं चिता रचाऊँ; तो उसे अपने हाथ से जला जाओ। मैं जब विलकुल जलकर भस्म की ढेरी हो जाऊँ तब उसको अपने शरीर पर लगा कर जाओ । प्रभु गिरिधर नागर की भक्त मीराबाई कहती हैं हे गुरु ! तुम ज्योति में ज्योति मिला जाओ ।
`, audioDriveId: '', singer: '' },
  { id: '1-4-18', part: 1, chapter: 4, chapterSequence: 18, title: 'तुम पलक उघारो दीनानाथ', author: 'मीराबाई', hindiText: `MIRA'S LONG WAITING CROWNED WITH SUCCESS.

तुम पलक उधारो दीनानाथ, मैं हाज़िर नाज़िर कब की खड़ी ॥ टे ॥ साहू थे दुस्मन होइ लागे, मैं सब को लगू कड़ी ॥१॥ दिन नहिं चैन रात नहिं निदरा, सूखूँ खड़ी खड़ी ॥२॥ कहा बोझ मीरा में कहिए, सौ पर एक धड़ी ॥३॥ गुरु रैदास मिले मोहिं पूरे, धुर से कमल भिड़ी ॥४॥ सतगुरु सैन दई जब आके, जोत में ज़ोत मिली ॥५॥
`, meaning: `हे दीनानाथ, तुम पलक उघाड़ो । मैं नज़र लेकर आपके सामने कब से खड़ी हूँ। जो साधु थे, वे दुश्मन होकर पीछे पड़े हैं। मैं सब को कड़ी लग रही हूँ। दिन में चैन नहीं, रात में नींद नहीं। खड़ी खड़ी सूख रही हूँ। कहिए ! मीरा में कौन सा बोझ है ? सौ पर एक धड़ी का बोझ ही क्या ? गुरु रैदास मुझे पूरे मिले, मानो मेरा सिर कमल से शोभित हो गया । जब सद्गुरु ने आकर संकेत दिया, तब ज्योति में ज्योति मिल गई ।
`, audioDriveId: '', singer: '' },

  // --- Chapter 5 ---
  { id: '1-5-1', part: 1, chapter: 5, chapterSequence: 1, title: 'पायो जी मैंने रामरतन', author: 'मीराबाई', hindiText: `MIRABAI ON THE GREAT JOY CONSEQUENT UPON THE POSSESSION OF THE JEWEL OF GOD.
    
पायो जी मैंने राम रतन धन पायो ॥ टे ॥ वस्तु अमोलिक दी मेरे सतगुरु, किरपा करि अपनायो ॥१॥ जनम जनम की पूँजी पाई, जग में सभी खोबायो ॥ २ ॥ खरच न खूटै, चोर न लूटै, दिन दिन बढ़त सवायो ॥ ३ ॥ सत की नाव खेवटिया सतगुरु, भव सागर तरि आयो ॥४॥ मीरा के प्रभु गिरिधर नागर, हरखि हरखि जस गायो ॥ ५ ॥
`, meaning: `निश्चय ही मैंने रामरूपी रत्न-धन पा लिया । मेरे सद्गुरु ने मुझे अमोल वस्तु दी और कृपा कर अपना बना लिया । मैंने जग में सब कुछ खो दिया और जन्म जन्म की पूंजी पा ली। वह पूँजी न खर्च करने से कम होती है और न उसको चोर लूट सकते हैं, अपितु वह दिन दिन सवाई बढ़ती जाती है। सत्तनाम की नैया और सद्‌गुरु रूप केवट के द्वारा मैं भवसागर तर आई । मीरा कहती है कि गिरिधर नागर मेरे प्रभु हैं। हर्पित हो होकर मैं उनका यश गाती हूँ।
`, audioDriveId: '', singer: '' },
  { id: '1-5-2', part: 1, chapter: 5, chapterSequence: 2, title: 'फागुन के दिन चार रे', author: 'मीराबाई', hindiText: `MIRA'S EXPERIENCE OF SOUND AND COLOUR.

फागुन के दिन चार रे, होरी खेल मना रे ॥१॥ विनि करताल पखावज बाजै, अणहद की झणकार रे ॥ २ ॥ विनि सुर राग छतीसूँ गावै, रोम रोम रंग सार रे ॥३॥ सील सन्तोख का केसर घोला, प्रेम प्रीति पिचकार रे ॥४॥ उड़त गुलाल लाल भयो अम्बर, बरसत रंग अपार रे ॥५॥ घट के पट सत्र खोल दिये हैं, लोक लाज सब डार रे ॥६॥ होरी खेलि पीव घर आये, सोइ प्यारी प्रिय प्यार रे ॥७॥ मीरा के प्रभु गिरिधर नागर, चरण कँवल बलिहारि रे ॥८॥
`, meaning: `रे मन ! फागुन के दिन चार ही हैं, इन्हीं में होली खेल ले । हाथों के ताड़न के विना ही पखावज बज रही है। अनाहत की झनकार उठ रही है। विना स्वर के छतीसों राग गाये जा रहे हैं। रोम रोम में श्रेष्ठ रंग भरा हुआ है। (मैंने) शील सन्तोप रूपी केसर घोला और प्रेम-प्रीति रूपी पिचकारी से छोड़ा । गुलाल उड़ते उड़ते (दोनों) अम्बर लाल हो गए । अपार रंग बरस रहा है। शरीर के सब परदे खोल दिये हैं और जनलज्जा तज दी है। होली खेल कर प्रिय घर आये; वही आगमन प्यारी के प्रति प्रिय के प्रेम का चिन्ह है। मीरा कहती है कि हे गिरिधर नागर ! मैं आपके चरण-कमल पर बलिहारी हूँ ।
`, audioDriveId: '', singer: '' },
  { id: '1-5-3', part: 1, chapter: 5, chapterSequence: 3, title: 'साधु कि संगत पाई रे', author: 'मीराबाई', hindiText: `MIRABAI ON THE DOCTRINE OF APPROXIMATION.

साधु कि संगत पाई रे, जाकी पूर्ण कमाई रे ॥ टे. ॥ साधु कि संगत गुरुजी की सेवा, बनत बनत बनि आई रे ॥१॥ सुमिरे नामा और कवीरा, तीसर मुक्ताचाई रे ॥२॥ मीरा के प्रभु गिरिधर नागर, जोत में जोत मिलाई रे ॥ ३ ॥
`, meaning: `(मैं) उन साधुओं की संगत पा गई, जिनकी कमाई पूर्ण थी । साधुओं की संगति से और गुरुजी की सेवा से (मेरी साधना) धीरे धीरे पूर्णता को प्राप्त हुई । नामदेव ने स्मरण किया, कवीर ने स्मरण किया और तीसरी मुक्ताबाई ने भी स्मरण किया। मीराबाई कहती है कि हे प्रभु गिरिधर नागर, इन सत्र ने ज्योति में ज्योति मिला दी।
`, audioDriveId: '', singer: '' },
  { id: '1-5-4', part: 1, chapter: 5, chapterSequence: 4, title: 'वन्दउँ श्रीहरि-पद सुखदाई', author: 'सूरदास', hindiText: `SURDAS ON DIVINE OMNIPOTENCE AND SUPERSENSUOUS EXPERIENCE.

वन्दउँ श्री हरि-पद सुखदाई ॥ टे. ॥ जाकी कृपा पंगु गिरि लंथै, अन्धे कूँ सब कछु दरसाई ॥ १॥ बहिरो सुनै गुंग पुनि बोलै, रंक चलै सिर छत्र धराई ॥ २॥ सूरदास स्वामी करुणामय, बार बार बन्दउँ तिहि पाई ॥ ३ ॥
`, meaning: `(मैं) श्री हरि के सुखदाई पदों की वन्दना करता हूँ। जिस हरि की कृपा से पंगु गिरि को लांघता है, अन्धे को सब कुछ दिखाई पड़ता है, बहिरा सुनने लगता है, गूंगा बोलने लगता है और रंक सिर पर छत्र धरा कर चलता है। सूरदास कहते हैं कि हे करुणामय स्वामी ! उन चरणों को प्राप्त करके बार-बार मैं उनकी वन्दना करता हूँ। 
`, audioDriveId: '', singer: '' },
  { id: '1-5-5', part: 1, chapter: 5, chapterSequence: 5, title: 'अब तो प्रगट भई जग जानी', author: 'सूरदास', hindiText: `ON GOD AS INEXTRICABLY BOUND UP WITH EVERY FIBRE OF THE BODY.

अब तो प्रकट भई जग जानी ॥ टे ॥ वा मोहन से प्रीति निरन्तर, क्यों हि रहेगी छानी ॥१॥ कहा करूँ सुन्दर मूरति इन, नयनन माँझ समानी ॥२॥ निकसत नाहिं बहुत पचि हारी, रोम रोम उरझानी ॥३॥ अब कैसे कहूँ री जात है, मिलौ दूध से पानी ॥४॥ सूरदास प्रभु अन्तर्यामी, सब के मन के स्वामी ॥५॥
`, meaning: `अब तो मेरी प्रीति जगत को विदित हो गई है। उस मोहन के प्रति मेरी अविचल प्रीति कैसे छिपी रहेगी ? क्या करूँ? सुन्दर मूर्ति इन नेत्रों के मध्य समा गई है। रोम रोम में फँस गई है। बहुत परिश्रम करने से मैं थक गई, तब भी (वह) निकलती नहीं। क्या अब दूध से मिला पानी किसी प्रकार कहीं जाता है? सूरदास कहते हैं कि प्रभु अन्तर्यामी हैं और सत्र के मन के स्वामी हैं।
`, audioDriveId: '', singer: '' },
  { id: '1-5-6', part: 1, chapter: 5, chapterSequence: 6, title: 'हीरा तहाँ न खोलिये', author: 'कबीर', hindiText: `TULSIDAS ON THE MYSTICAL TRANSCENDENCE OF GOD.

बिनु पग चलै सुनै बिनु काना । बिनु कर करम करै विधि नाना ॥ आनन रहित सकल रस भोगी । विनु वाणी वकता बड़ जोगी ॥ तनु बिनु परस नयन बिनु देखा । गहै प्राण विनु वास असेखा ।। अस सब भाँति अलौकिक करणी । महिमा तासु जाइ नहिं बरणी ॥
`, meaning: `पदों के बिना चलता है। कानों के बिना सुनता है। हाथों के बिना अनेक प्रकार के कर्म करता है। मुख के विना सब रसों का भोगने वाला है। वाणी के बिना भी वह योगी बड़ा वक्ता है। बिना शरीर के स्पर्श करता है। नयनों के बिना देखता है । घ्राण के बिना समस्त वास ग्रहण करता है । इस तरह सब प्रकार उसकी करनी अलौकिक है, उसकी महिमा कही नहीं जाती ।
`, audioDriveId: '', singer: '' },
  { id: '1-5-7', part: 1, chapter: 5, chapterSequence: 7, title: 'शून्य शिखर में सुरत लगाय', author: 'गोरखनाथ', hindiText: `GORAKHANATH'S DESCRIPTION OF HIS SPIRITUAL EXPERIENCE.

शून्य शिखर में सुरत लगाय देखो, निज में अलख बसाय बस्ती । ताल मृदंग पवपवली बजत है, हर दम पर नौचत झड़ती ॥१॥ इड़ा पिंगला चवर डुलावे, सुखमनिया सेवा करती । चन्द सुरज दोउ दीवटि जलते, सत्त सुकृत दोउ फिरे गश्ती ॥ २ ॥ सप्त सागर धनि करे असनान, जहँ मोतियन की बरपा झड़ती । बिरला सन्त कोइ पहुँच गया, निगुरे की मिले नहीं गिनती ॥ ३ ॥ नाथ मछिन्दर दास तुम्हारो, गोरख गरीब मेरी कौन गिनती । सबद सबद में आप विराजे, तुझ बिन दुजी न देखे सुरती ॥४॥
`, meaning: `ब्रह्मरंध्र पर ध्यान लगाकर देखो। अपने में वहां अलक्ष्य पुरुप ने वास किया है। वहां ताल, मृदंग, पावा और बाँसुरी बज रहे हैं। हर क्षण नौचत झड़ती है। इड़ा और पिंगला दोनों चैवर डुला रही हैं और सुपुम्ना सेवा करती है। चांद और सूरज दो मशाल जल रहे हैं। सत्य और सुकृत दोनों गश्त लगाते हैं। सप्त सागर का मालिक वहां स्नान कर रहा है; जहाँ पर मोतियों की लगातार वर्षा हो रही है। कोई विरला सन्त ही वहां पहुँच पाता है, मन-मुख की वहां गिनती तक नहीं होती । गोरख कहता है कि हे मत्स्येन्द्रनाथ ! मैं आपका दास हूं। मुझ गरीच की क्या गिनती है। प्रतिशब्द में आप विराजमान हैं, आपके बिना दूसरी कोई वस्तु मेरी दृष्टि में नहीं आती ।
`, audioDriveId: '', singer: '' },
  { id: '1-5-8', part: 1, chapter: 5, chapterSequence: 8, title: 'झरि लागै महलिया गगन', author: 'धरमदास', hindiText: `DHARAMDAS ON BEATIFICATORY EXPERIENCE.

झरि लागै महलिया गगन घहराय ॥ टे ॥ खन गरजै खन विजुरी चमकै । लहर उठे शोभा बरनि न जाय ॥ १ ॥ सुन्न महल में अमृत बरसै । प्रेम अनन्द है साधु नहाय ॥२॥ खुली केवरिया मिटी अँधेरिया । धन सतगुरु जिन दिया लखाय ॥ ३॥ धरमदास विनवै कर जोरी । सतगुरु चरन में रहा समाय ॥४॥
`, meaning: `महल पर झड़ी लग गई है। गगन घहरा रहा है। क्षण गर्जना होती है, क्षण विजली चमकती है। लहर उठती है, जिसकी शोभा का वर्णन नहीं किया जाता । शून्य महल में अमृत बरस रहा है। साधु प्रेमानन्दित हो कर नहा रहा है । खिड़की खुल गई। अँधेरा मिट गया। सद्गुरु धन्य है, जिसने यह सत्र दिखला दिया है। धर्मदास हाथ जोड़कर विनय करते हैं कि, मैं सद्‌गुरु-चरण में समा रहा हूं।
`, audioDriveId: '', singer: '' },
  { id: '1-5-9', part: 1, chapter: 5, chapterSequence: 9, title: 'झिलमिल झिलमिल बरसै नूरा', author: 'यारी', hindiText: `YARI ON MANIFOLD SPIRITUAL EXPERIENCE.

झिलमिल झिलमिल बरसै नूरा, नूर जहूर सदा भरपूरा ॥ रुनझुन रुनझुन अनहत बाजे, भँवर गुजार गगन चढ़ि गाजै ॥ रिमझिम रिमझिम बरसै मोती, भयो प्रकास निरन्तर जोती ॥ निर्मल निर्मल निर्मल नामा, कह यारी तहँ लियो विस्रामा ॥
`, meaning: `प्रकाश झिलमिल झिलमिल बरस रहा है और सदा सम्पूर्णतया प्रकट होता है। अनाहत शब्द रुनझुन रुनझुन बजता है। अमर का गुजार आकाश पर चढ़ कर गरजता है। मोती रिमझिम रिमझिम बरस रहे हैं और निरन्तर ज्योति का प्रकाश हो रहा है। यारी कहते हैं, नाम निर्मल निर्मल है और वहां मैनें विश्राम लिया है।
`, audioDriveId: '', singer: '' },
  { id: '1-5-10', part: 1, chapter: 5, chapterSequence: 10, title: 'और देवल जहँ धुंधली', author: 'चरनदास', hindiText: `"MY THAKURDWAR IS EVERYWHERE", SAYS CHARANDAS.

और देवल जहँ धुन्धली पूजा, देवत दृष्टि न आवै । हमारा देवत परगट दीसे, बोलै, चालै, खावै ॥१॥ जित देखौं तित ठाकुरद्वारा, करौं जहां नित सेवा । पूजा की विधि नीके जानी, जाखूँ परसन देवा ॥२॥ करि सम्मान अस्नान कराऊँ, चन्दन नेह लगाऊँ । मीठे बचन पुष्प जोइ जानों, है करि दीन चढ़ाऊँ ॥३॥ परसन करि करि दरसन पाऊँ, बार बार बलि जाऊँ । चरनदास सुकदेव बतावें, आठ पहर सुख पाऊँ ॥४॥
`, meaning: `अन्य देवालय ऐसे हैं, जहाँ पर अंधेरी पूजा होती है; क्यों कि वहां देवता दिखाई नहीं देता। हमारा देवता प्रत्यक्ष दीख पड़ता है। वह बोलता है, चलता है और खाता है। जहाँ देखूँ वहाँ प्रभु का ही मंदिर है। जहाँ मैं उसकी अखण्ड सेवा करता हूँ। पूजा की विधि भली भाँति जान ली है, जिससे प्रभु प्रसन्न होता है । उसे सम्मान का स्नान कराता हूँ और स्नेह का चन्दन लगाता हूं । दीन होकर मीठे वचन रूपी पुष्प प्रभु पर चढ़ाता हूं। बार बार रिझा रिझा कर उसका दर्शन पाता हूं और उस पर अपने को न्योछावर करता हूं। चरनदास कहते हैं कि सुकदेव ने मुझे मार्ग बताया, जिससे मैं अहोरात्र सुख पाता हूं।
`, audioDriveId: '', singer: '' },
  { id: '1-5-11', part: 1, chapter: 5, chapterSequence: 11, title: 'गुरु कृपाञ्जन पायो रे भाई', author: 'एकनाथ', hindiText: `ΕΚΝΑΤH ON THE VISION OF GOD IN ALL STATES OF CONSCIOUSNESS.

गुरु कृपाञ्जन पायो रे भाई, राम विना कछु देखत नाहीं ॥ १ ॥ अन्दर राम बाहर राम, जहँ देखे तहँ रामहि राम ॥२ ॥ जागत राम सोबत राम, सपन में देखूँ आतमराम ॥३॥ एका जनार्दनी अनुभव नीका, जहँ देखे बहँ राम सरीका ॥४॥
`, meaning: `रे भाई, गुरु-कृपा का अञ्जन नेत्रों में लगाया है जिससे राम के अतिरिक्त हमें कुछ नहीं दिखाई पड़ता । भीतर राम है; बाहर राम है । जहां देखो वहां राम ही राम है। जागते समय राम है; सोते समय राम है और मैं स्वप्न में भी आत्माराम को देखता हूँ। जनार्दन स्वामी के शिष्य एकनाथ कहते हैं कि मेरा अनुभव सच्चा है; क्यों कि जहां मैं देखता हूं, वहां लगातार राम ही दिखाई पड़ता है ।
`, audioDriveId: '', singer: '' },
  { id: '1-5-12', part: 1, chapter: 5, chapterSequence: 12, title: 'साई अलख पलखमें झलके', author: 'महिपति', hindiText: `MAHIPATI ON A MYSTIC'S LIFE IN A TUMULT OF LIGHT AND COLOUR.

साई अलख पलख में झलके, लहलहाट विजली चमके ।। मन गरक हुआ, मन गरक, गुरु साईनाथ आज पाया, मुझ पकड़ दस्त बैठाया, दो अच्छर बीज पढ़ाया, मेरे सिर पर हाथ चढ़ाया ॥ अब तू सच्चा गुरु का बच्चा, देख परीच्छा, छड़ बदन जुगुत से जखड़, मत डर जोर से पकड़, जो आवे उसे दे छकड़, आगे पीछे मोर की पाँखें, लहलहाट बिजली चमके ॥ १ ॥ नीचे धरनि ऊपर असमाना, दोऊ छोड़ बीच में जाना, चल सरक, आगे चल सरक, प्यारे उलट पुलट से चलना, साहब से जुगुत से मिलना झुक्कुटी ऊपर, त्रिकुटी शीखर, ध्यान लगाकर, खूत्र देख नजर से अभी, रज सोना बिखरा सभी, मूल माया की जो छबी, छोड़ माया स्वरूप परखे, लहलहाट बिजली चमके ॥ २ ॥ मोतियन का मेंह बरसता, सो ब्रह्मा ज्ञान विधाता, खूब घटा, बनी खूब घटा, तारा सो विसन रूप सजता, पालन वाला भरमस्ता, गोल गुण्डाला, चकर उजाला, शिव मतवाला, यही रूप तीनों का हुआ, चल आगे और कुछ हुआ, बड़ी लहर बहर वेनवा, मन उन्मन होके गरके, लहलहाट बिजली चमके ॥ ३ ॥ नरहरि नाथ गुरु मेरा, मैं महिपत गुलाम तेरा, क्या कहूँ, अब क्या कहूँ, जाको वेद न जाने डेरा, वो मैंनें नयनन सों हेरा, सच्चा साई, गुरु गोसाई, राह बताई, जिससे सकल भरमना मिटी, डोरी जनन मरन की टूटी, कोठड़ी करम की फूटी, लागी लगन मगन दिल हरखे, लहलहाट बिजली चमके ॥ ४ ॥
`, meaning: `अलक्ष्य पुरुप पलक में झलकता है । बिजली की लहलहाट चमक रही है। मन मग्न हो गया है । आज गुरु स्वामीनाथ मिले । उन्होंने मेरा हाथ पकड़ कर बिठाया और दो अक्षर का बीजमंत्र पढ़ाया । मेरे मस्तक पर हाथ रक्खा, और कहा कि, अब तू सच्चा गुरु का बच्चा है । परीक्षा देख । पट चक्र को युक्ति से कसकर बाँध । डर मत । जोर से पकड़ । बीच में कोई आवे तो उसे धक्का दे । आगे-पीछे मोर-पंख देख । बिजली की लहलहाट चमक रही है। नीचे धरणी, ऊपर आसमान छोड़ बीच ही में आवागमन कर । खसक कर आगे बढ़ । प्यारे बच्चे, उलट-पुलट चल कर युक्ति से साहब से मिलना । भौहों के ऊपर त्रिकूट के शिखर पर ध्यान लगा । नज़र से खूब देख, जिधर देखे उधर चांदी सोना विखरा है। वह मूल प्रकृति की कान्ति है। माया को तज कर असली स्वरूप को चीन्ह। बिजली की लहलहाट चमकती है। मोतियों को बरसाने वाला मेघ ज्ञान दाता ब्रह्मा है । बरसने वाले मेघों की निधिड़ श्रेणी दीख पड़ती है । ताराओं से अलंकृत, पालने वाले, अलमस्त विष्णु का रूप दिखाई पड़ता है। वलयों से वेष्टित, प्रकाशमान मण्डलों से युक्त मतवाले शिवजी हैं। यह ब्रह्मा, विष्णु और महेश तीनों का रूप हुआ । आगे चल, आगे कुछ और दिखाई देगा । बड़ी लहर और नई बहार होगी। मन तुर्यावस्था में ग़र्क होगा । बिजली की लहलहाट दीख पड़ेगी । नरहरि नाथ मेरे गुरु हैं। मैं " महिपति " तेरा गुलाम हूं । और क्या कहूं ! जिसका स्थान वेद भी नहीं जानता, उसको मैंने अपनी आँखों से देखा। स्वामी सच्चा है गुरु गोसाईं ने उसका मार्ग मुझे बताया। मेरे सत्र भ्रम और भ्रमण मिट गए । जन्म-मरण की डोरी टूट गई। कर्म की कोठरी फूट गई । लगन लगी है। हृदय मग्न होकर हर्पित हो गया है। बिजली की लहलहाट चमक गई ।
`, audioDriveId: '', singer: '' },
  { id: '1-5-13', part: 1, chapter: 5, chapterSequence: 13, title: 'ऐसा देस दिवाना रे', author: 'चरनदास', hindiText: `CHARANDAS ON THE VARIETIES OF ANAHAT SOUND.

ऐसा देस दिवाना रे लोगो, जाय सो माता होय । बिन मदिरा मतबारे झूमै, जनन मरन दुख खोय ॥१॥ बिना सीप अनमोलक, बिन दामिनि दमकाहीं । बिन ऋतु फूले फूल रहत हैं, अमरत रत फल पारौ ॥२॥ अनहत शब्द मैंवर गुजरै, संख पखावज गाजै । ताल घण्ट मुरली घन घोरा, भेरि दमामै गाजै ॥३॥ रम्भा नृत्य करे बिन पग सूँ, बिन पायल ठनकारै । सिद्धि गर्जना अति ही भारी, -गति झनकारै ॥४॥ गुरु सुकदेव करै जब किरपा, ऐसा नगर दिखावै । चरनदास वा पग के परसे, आवागमन नसावै ॥५॥
`, meaning: `हे लोगो, यह देश ऐसा पागल है कि जहाँ आने से आदमी मतवाला हो जाता है। बिना शराब के ही मतवाले हो कर लोग झूमते हैं और जन्म मरण का दुख खो देते हैं। सीप के बिना ही अमूल्य मोती उत्पन्न होते हैं। बिजली के बिना चमक उठती है। ऋतु के बिना ही यहाँ फूल फूले रहते हैं। और फल अमृत-रस से भरे रहते हैं। अनहद शब्द अमर के सदृश गुजारता है। शंख, पखावज, ताल, घण्टा और बाँसुरी बजते हैं। घनघोर मेरी और नगारे झड़ते हैं। यहाँ पर बिना पैरों के रम्भा नृत्य करती है। बिना नूपुर के ठुमकी मारती है। सिद्धियों की गर्जना अति गम्भीर घुँघरुओं की झनकार के सदृश है। गुरु शुकदेव जब कृपा करते हैं, तब ऐसा देश दिखाते हैं। चरणदास उनके पदों का स्पर्श कर के जन्म मरण खो देते हैं ।
`, audioDriveId: '', singer: '' },
  { id: '1-5-14', part: 1, chapter: 5, chapterSequence: 14, title: 'जब ते अनहत घोर सुनी', author: 'चरनदास', hindiText: `CHARANDAS ON THE PHYSIOLOGICAL AND MORAL EFFECTS OF HEARING THE ANAHAT SOUND.

जब तें अनहत घोर सुनी ॥ टे ॥ इन्द्री थकित गलित मन हुआ, आसा सकल भुनी ॥१॥ घूमत नैन शिथिल भइ काया, अमल जो सुरत सनी ॥२॥ रोम रोम आनन्द उपज करि, आलस सहज भनी, मतबारे ज्यों सबद समाये, अन्तर भींज कनी ॥३॥ करम भरम के बन्धन छूटे, दुविधा विपति हनी ॥४॥ आपा बिसरि जगत बिसरो, कित रही पांच जनी ॥५॥ लोक भोग सुधि रही न कोई, भूले ज्ञान गुनी ॥६॥ हो तहँ लीन चरन ही दासा, कह सुकदेव मुनी ॥७॥ ऐसा ध्यान भाग हूँ पैये, चढि रहै सिखर अनी ॥८॥
`, meaning: `जब से घोर अनाहत शब्द सुना, इन्द्रियाँ थकित हो गईं । मन गलित हो गया, सकल आशाएं जल गई । जब अमल में सुरत मिल गई, तव नेत्र घूमने लगे, काया शिथिल हो गई । रोम रोम में उत्पन्न होकर आनन्द ने आसानी से आलस्य को भंग कर दिया । मतवाले होकर जब शब्द में समाते हैं, तब अन्तर का कण कण भीग जाता है। कर्म और भ्रम के बन्धन छूट गए । द्वैतरूपी विपत्ति नष्ट हो गई । अपने को विसर कर जगत को भी बिसरा । फिर पंचतत्वों का समुदाय कहाँ रह गया ? लोक के भोग की कोई स्मृति न रह गई। गुणी लोग ज्ञान को भूल गए । शुकदेव मुनि कहते हैं कि ऐ चरणदास ! वहां लीन हो जाओ । भाग्य से ऐसा ध्यान पाओ कि शिखर की नोक पर चढ़ जाओ ।
`, audioDriveId: '', singer: '' },
  { id: '1-5-15', part: 1, chapter: 5, chapterSequence: 15, title: 'महरम होय सो जानै साधो', author: 'कबीर', hindiText: `KABIR ON A MYSTIC'S LIFE IN THE REGION OF SUPERSENSUOUS EXPERIENCE.

महरम होय सो जानै साथो, ऐसा देस हमारा ॥ टे. ॥
वेद किताब पार नहिं पावत, कहन सुनन से न्यारा ॥१॥
सुन्न महल में नौबत बाजे, किंगरी बीन सितारा ॥ २ ॥
विन बादर जहँ विजुरी चमकै, विनु सूरज उजियारा ॥३॥
विना सीप जहँ मोती उपजै, त्रिनु सुर सब्द उचारा ॥४॥
ज्योति लजाय ब्रह्म जहँ दरसै, आगे अगम अपारा ॥ ५॥
कह कवीर वहँ रहनि हमारी, बूझे गुरुमुख प्यारा ॥ ६ ॥
`, meaning: `हे साधो, हमारा देश ऐसा है कि अन्तर में प्रवेश करने वाला ही उसको जान सकता है। (उस देश का) पार वेद और कुरान नहीं पाते। वह देश कहने सुनने से परे है। शून्य महल में नौवत, किंगरी, वीणा और सितार बज रहे हैं, जहाँ बादलों के विना बिजली चमकती है, सूर्य के बिना उजाला रहता है। सीप के बिना मोती उपजते हैं, स्वर के बिना शब्द उच्चरित होता है। जहां ज्योति को लज्जित कर ब्रह्म दिखाई पड़ता है और आगे अगम अपार है। कवीर कहते हैं कि वहीं हमारा वास है। कोई प्यारा गुरुमुख ही इसको समझ सकता है।
`, audioDriveId: '', singer: '' },
  { id: '1-5-16', part: 1, chapter: 5, chapterSequence: 16, title: 'रस गगन गुफामें अजर झरै', author: 'कबीर', hindiText: `KABIR ON THE MORAL AND PSYCHOLOGICAL EFFECTS OF MYSTICAL REALISATION.

रस गगन गुफा में अजर झरे ॥ टे ॥
चिन बाजा झनकार उठे जहँ, समुझि परै जब ध्यान धेरै ॥१॥
बिना ताल जहँ कमल फुलाने, तेहि चढ़ि हंसा केलि करै ॥ २ ॥
बिन चन्दा उजियारी दरसै, जहँ तहँ हंसा नजर परै ॥३॥
दसवें द्वारे ताली लागी, अलख पुरुख जाको ध्यान धेरै ॥ ४ ॥
काल कराल निकट नहिं आवै, काम क्रोध मद लोभ जरै ॥५॥
जुगन जुगन की तृपा बुझाती, करम भरम अघ व्याधि टरै ॥६॥
कहै कबीर सुनो भई साधो, अमर होय कवहूँ न मरे ॥७॥
`, meaning: `जहां बाजे के बिना ही झनकार उठती है, ऐसी गगन गुफ़ा में अजर रस झरता है। जब ध्यान धरता है तभी यह समझ पड़ता है। जहां ताल के बिना ही कमल फूलता है, उस पर चढ़कर हंस केलि करता है। चन्द्रमा के चिना ही वहाँ उजाला (चन्द्रिका) दिखाई देता है। जहां तहां हंस नज़र पड़ता है। जब दसवाँ द्वार ताली लगने से खुल जाता है, तब वहाँ जो अलख पुरुप है उसका (साधक) ध्यान लगाता है। कराल काल निकट नहीं आता । काम क्रोध मद लोभ जल जाते हैं। युग-युगों की प्यास बुझ जाती है। कर्म, भ्रम, अध, व्याधि टल जाते हैं। कवीर कहते हैं कि हे साधो सुनोः (जीत्र) अमर हो जाता है और कभी मृत्यु के फंदे में नहीं पड़ता ।
`, audioDriveId: '', singer: '' },
  { id: '1-5-17', part: 1, chapter: 5, chapterSequence: 17, title: 'चुवत अमीरस भरत ताल जहँ', author: 'कबीर', hindiText: `KABIR ON THE SUBLIMITY AND INEFFABILITY OF MYSTICAL EXPERIENCE.

चुवत अभी रस, भरत ताल जहँ, सब्द उठै असमानी हो ॥ टे ॥
सरिता उमड़ि सिन्धु को सोखै, नहिं कछु जाय बखानी हो ॥१॥
चाँद सुरज तारागन नहिं वहँ, नहिं वहँ रैन बिहानी हो ॥२॥
बाजे बजैं सितार बाँसुरी, ररंकार मृदुबानी हो ॥३॥
कोटि झिलमिलै जहँ तहँ झलकै, विनु जल बरसत पानी हो ॥४॥
दस अवतार एक रत राजें, अस्तुति सहज से आनी हो ॥ ५ ॥
कहै कबीर भेद की बातें, बिरला कोइ पहचानी हो ॥ ६ ॥
`, meaning: `अमृत रस चूने से जहाँ ताल भर रहा है, वहाँ गगन भेदी शब्द उठता है। सरिता उमड़ कर सिन्धु को सोख रही है। कुछ वर्णन नहीं करते बनता। वहाँ न चाँद है न सूर्य है और न तारागण हैं। और न रात है न प्रभात है। सितार और बाँसुरी (आदि) बाजे बज रहे हैं। मधुर वाणी से राम-राम ध्वनि उठ रही है। जहाँ तहाँ करोड़ों झिलमिलें झलकतीं हैं। जल के बिना ही पानी (तेज बरस रहा है, और, दसों अवतार एक ही रात में (या लगातार) विराजते हैं। मुख में स्तुति अपने आप आती है। कवीर कहते हैं कि, ये रहस्य की बातें हैं। इन्हें कोई विरला ही पहचानता है।`, audioDriveId: '', singer: '' },
  { id: '1-5-18', part: 1, chapter: 5, chapterSequence: 18, title: 'ऐसो है रे हरिरस', author: 'कबीर', hindiText: `THE FLAVOURISM OF KABIR.

ऐसो है रे हरि-रस, ऐसो है रे भाई ॥ टे ॥
जाके पियै अमर है जाई ॥
ध्रुव पीया प्रहलादहुँ पीया, पीया मीराबाई ॥
हरि-रस महँगा मोल का रे, पीयै बिरला कोय ।
हरि-रस महँगा सो पियै, धड़ पै सीस न होय ॥
आगे आगे दावा जलै रे, पीछे हरिया होय ।
कहत कधीर सुनो भाइ साधो, हरिभज निर्मल होय ॥
`, meaning: `हरि-रस ऐसा है, रे भाई, हरि-रस ऐसा है कि जिसको पीने से जीव अमर हो जाता है। ध्रुत्र ने पिया, प्रह्लाद ने पिया और मीराबाई ने पिया। हरि-रस महँगे मोल का है। कोई विरला ही पीता है। महँगा हरि-रस वही पीता है, जिसके धड़ पर शीश न हो। आगे आगे दावा-नल जलता है, पीछे हरियाली होती है। कवीर कहते हैं कि हे साधो ! हरि को भज-कर लोग निर्मल होते हैं।
`, audioDriveId: '', singer: '' },
  { id: '1-5-19', part: 1, chapter: 5, chapterSequence: 19, title: 'हो तो कोई पिये रामरस', author: 'कबीर', hindiText: `THE SLAKING OF SPIRITUAL THIRST AS LEADING ON TO FURTHER THIRST.

हो तो कोई पिये राम-रस प्यासा ॥ टे ॥
मृग तृष्णा-जल छाँड़ि बावरे, करो सुधा रस आता ॥१॥
ध्रुव पिया, प्रह्लादहुँ पीया, और पिया रैदासा ॥ २ ॥
गोरख पिया मछन्दर पीया, मीरा भरि भरि कासा ॥३॥
गुरुमुख होइ सो भर भर पीवे, मनमुख जात निरासा ॥४॥
कहत कबीर सुनो हो सन्तो, और पियन की आसा ॥५॥
`, meaning: `अगर कोई प्यासा हो तो रामरस पिये । ए बावरे ! मृगतृष्णा जल को छोड़कर सुधारस की आशा कर । ध्रुव ने पिया, प्रह्लाद ने पिया और रैदास ने पिया । गोरख ने पिया, मत्स्येन्द्र ने पिया और मीरा ने काँस का पात्र भर-भर पिया । जो गुरुमुख होता है, वह भर भर पीता है। मन्मुख निराश होकर जाता है। कवीर कहते हैं कि, हे सन्तो! इसे पीने से और पीने की आशा होती है।
`, audioDriveId: '', singer: '' },
  { id: '1-5-20', part: 1, chapter: 5, chapterSequence: 20, title: 'रामरस मीठा रे कोई पीवै', author: 'दादू', hindiText: `DADOO ON THE FLAVOURIST AS BECOMING ONE WITH THE FLAVOUR ITSELF.

रामरस मीठा रे, कोइ, पीवै साधु सुजाण ।
सदा रस पीवै प्रेम, सो अविनासी प्राण ॥१॥
इहि रस राते नामदेव, पीपा अरु रैदास ।
पिवत कवीरा ना थक्या, अजहूँ प्रेम पियास ॥२॥
सिथि साधक जोगी जती, सती सबै सुकदेव ।
पीवत अन्त न आवई, ऐसा अलख अभेव ॥३॥
यहु रस मीठा जिन पिया, सो रस ही रहा समाय ।
मीठे मीठा मिलि रहा, दादू अनत न जाइ ॥४॥
`, meaning: `राम रस मीठा है। कोई ज्ञानी साधु ही उसका पान करता है। सदा जो प्रेम से रामरस पीता है, वह प्राणी अविनाशी है। नामदेव, पीपा और रैदास इसी रस में अनुरक्त थे। कबीर इसको पीते-पीते न थका आज भी उसको प्रेम की प्यास है। हे शुकदेव ! सिद्ध, साधक, योगी, यती और साध्वी आदि सभी ने उसको पीया पर उसका अन्त नहीं पाया, वह ऐसा अलक्ष्य और भय-रहित है। जिन्होंने इस मीठे रस का पान किया, वे इसी रस में समा गए । मीठा मीठे में मिल गया। अब दादू अन्यत्र कहाँ जाएगा ?
`, audioDriveId: '', singer: '' },
  { id: '1-5-21', part: 1, chapter: 5, chapterSequence: 21, title: 'है कोई सन्त सहज सुख', author: 'कबीर', hindiText: `KABIR ON THE DISTILLATION OF THE SPIRITUAL WINE.

है कोइ सन्त सहज सुख उपजै, जप तप देउँ दलाली ।
एक बूँद भरि देइ राम रस, भरि देइ कलाली ॥१॥
काय कलाली लाहनि करिहूँ, गुरू सबद गुड़ कीन्हा ।
कामाँ क्रोध मोह मद मत्सर, काटि काटि कस दीन्हा ॥ २ ॥
भुवन चतुरदस भाटी पुरई, ब्रह्म अगिनि परजारी ।
मूँदे मदन सहज धुनि उपजी, सुखमन पोतनहारी ॥ ३॥
नीझर झरै अमीरस निकसै, तिहिं मदिरावल छाका ।
कह कबीर यह वास विकट अति, ज्ञान गुरू ले बाँका ॥४॥
`, meaning: `क्या कोई ऐसा सन्त है जो सहज सुख उपजा सके ? जिसको मैं दलाली में जप तप हूँ। जैसे कलाली काँस का पात्र भर कर देती है, वैसे ही केवल एक बूँद तो रामरस दे ! काया को कलाली कि लाहनि किया । गुरु के शब्द को गुड़ किया । काट-काट-कर काम, क्रोथ, मोह, मद, मत्सर का रस उसमें छोड़ा। चतुर्दश भुवनों की भट्टी पूर ली । ब्रह्माग्नि प्रज्वलित की । मदन को मूँदा, जिससे सहज ध्वनि उत्पन्न हुई । सुषुम्ना को पोतनहारी किया। निर्झर झरने लगा और अमृत रस निकलने लगा। उस मदिरा-वलि से मस्त हुआ कबीर कहता है कि इस प्रकार की रहनी अत्यन्त विकट है। जो गुरु से ज्ञान लेता है, वही इस में बाँका हो सकता है ।
`, audioDriveId: '', singer: '' },
  { id: '1-5-22', part: 1, chapter: 5, chapterSequence: 22, title: 'दरस दिवाना बावला', author: 'कबीर', hindiText: `ON THE MADNESS OF INTOXICATION THROUGH GOD VISION.

दरस दिवाना बावला, अलमस्त फकीरा ।
एक अकेला है रहा, अस्मत का धीरा ॥१॥
हिरदे में महबूब है, हर दम क्या प्याला ।
पीवेगा कोई जौहरी, गुरुमुख मतवाला ॥ २ ॥
पियत पियाला प्रेम का, सुधरे सब साथी ।
आठ पहर झूमत रहे, जस मैगल हाथी ॥ ३ ॥
बन्धन काट मोह का, बैठा निरसंका ।
वाके नजर न आत्रता, क्या राजा क्या रंका ॥ ४ ॥
धरती तो आसन किया, तम्बू असमाना ।
चोला पहिरा खाक का, रहा पाक-समाना ॥ ५ ॥
सेवक को सतगुरु मिलै, कछु रहि न तबाही ।
कह कचीर निज घर चलौ, जहँ काल न जाही ॥६ ॥
`, meaning: `दर्शन से दिवाना हुआ वह बावला फ़कीर बिलकुल मस्त हो गया है। स्थितधी एक वह अकेला रहता है । हृदय में श्वास थास का प्याला- ईश्वर हमेशा उपस्थित है । कोई गुरुमुख जौहरी ही उसको पी कर मतवाला होता है। प्रेम का प्याला पीता तो वह है पर सब साथी सुधर जाते हैं। मदगल हाथी की तरह वह आठों पहर झूमता है और मोह का बन्धन काटकर निःशंक बैठा रहता है। क्या राजा, क्या रंक, यह उसकी दृष्टि में नहीं आता । (उसने ) धरती को आसन किया, आसमान को तम्बू बनाया और ख़ाक का चोला पहिना । पाक होकर वह ईश्वर में समा रहा है। सेवक को सद्गुरु मिलता है, तब कुछ बरबादी नहीं रहती । कबीर कहते हैं, जहाँ काल का प्रवेश नहीं उस अपने घर को चलो ।
`, audioDriveId: '', singer: '' },
  { id: '1-5-23', part: 1, chapter: 5, chapterSequence: 23, title: 'हमन है इश्क मस्ताना', author: 'कबीर', hindiText: `ON THE FREEDOM OF INTOXICATION THROUGH GOD-LOVE.

हमन है इश्क मस्ताना, हमन को होशियारी क्या ।
रहै आज़ाद या जग में, हमन दुनिया से यारी क्या ॥१॥
जो बिछुड़े हैं पियारे से, भटकते दर व दर फिरते ।
हमारा यार है हम में, हमन को इन्तज़ारी क्या ॥२॥
खलक सब नाम अपने को, बहुत कर सर पटकता है ।
हमन हरिनाम राँचा है, हमन दुनिया से यारी क्या ॥ ३ ॥
न पल विछुड़े पिया हम से, न हम बिछुड़ें पियारे से ।
उन्हीं से नेह लागा है, हमन को बेकरारी क्या ॥४॥
कवीरा इश्क का माता, दुई को दूर कर दिल से ।
जो चलना राह नाजुक है, हमन सर बोझ भारी क्या ॥५॥
`, meaning: `हम इश्क में मस्त हैं। हमारे लिये होशियारी से क्या प्रयोजन है ? हम इस जग में स्वतंत्र रहते हैं। हम को दुनिया की दोस्ती से क्या ? जो लोग प्यारे से बिछुड़े हैं, वे द्वार द्वार भटकते फिरते हैं। हमारा यार हम में है। हमें किसी की प्रतीक्षा से क्या प्रयोजन है? सारी दुनिया अपने नाम के लिए भरसक सिर पटकती है। हम को हरिनाम में अनुरक्ति है फिर हमें दुनिया की दोस्ती से क्या प्रयोजन? न पिय हम से पलमात्र बिछुड़े रहते हैं और न हम प्यारे से । उन्हीं से नेह लग गया है, फिर हम को बेचैनी कैसी ? दुविधा को हृदय से दूर कर के कवीर ईश्वर के प्रेम में मस्त हुआ है। अगर नाजुक राह पर चलना है, तो सिर पर भारी बोझ क्यों लिया जाए ?
`, audioDriveId: '', singer: '' },
  { id: '1-5-24', part: 1, chapter: 5, chapterSequence: 24, title: 'मन मस्त हुवा तब', author: 'कबीर', hindiText: `ON THE EQUANIMITY OF INTOXICATION THROUCH GOD-POSSESSION.

मन मस्त हुआ तब क्यों बोलै ॥ टे ॥
हीरा पाय गाँठि गँठियायो, बार बार वाको क्यों खोलै ।
हलकी थी जब चढ़ी तराजू, पूरी भइ तब क्यों तोलै ॥१॥
सुरत कलारी भइ मतवारी, मदवा पी गइ बिन तोलै ।
हंसा पाए मानसरोवर, ताल तलैया क्यों डोलै ॥२॥
तेरा साहब है घट भीतर, बाहर नैना क्यों खोलै ।
कहै कबीर सुनो भई साधो, साहिब मिल गए तिल ओलै ॥३॥
`, meaning: `जब मन मस्त हो गया तब क्यों बोलें ? हीरा पाकर गाँठ में बाँधाः । उसको बार बार क्यों खोलें ? जब तराजू हलकी थी; तब चढ़ी; जब सम हो गई, तब क्यों तोलें ? सुरति रूपी कलाली मतवाली होकर विना तौल मदिरा पी गई । मानसरोवर पहुँच जाने पर हँस ताल तलैया क्यों ढूँढे ? तुम्हारा साहब घट के ही भीतर है। तुम बाहर नेत्र क्यों खोलते हो ? कवीर कहते हैं कि, हे साधो ! साहब तिल की आड़ में मिल गएं ।
`, audioDriveId: '', singer: '' },
  { id: '1-5-25', part: 1, chapter: 5, chapterSequence: 25, title: 'रमैया कि दुलहिनि लूटल', author: 'कबीर', hindiText: `THE GRACE OF GOD IN THE SHAPE OF ANAHAT SAVES KABIR FROM THE REIGN OF UNIVERSAL DECEIPT.

रमैया कि दुलहिनि लूटल बजार ॥ टे ॥
सुरपुर लूट नागपुर लूटा, तीन लोक मच हाहाकार ॥१॥
ब्रह्मा लूट महादेव लूटा, नारद मुनि के परी पिछार ॥२॥
सिंगी की मिंगी करि डारी, परासर के उदर विदार ॥ ३ ॥
कनफूँका चिदकासी लूटे, लूटे जोगेसर करत विचार ॥४॥
हम तो बचिगे साहब दया से, सब्द डोर गहि उतरे पार ॥५॥
कहत कबीर सुनो भई साधो, इस ठगिनी से रहो हुसियार ॥६॥
`, meaning: `राम की बहुरिया बाज़ार लूट रही है। सुरलोक लूट कर नागलोक लूटा । तीनों लोकों में हाहाकार मच गया। ब्रह्मा को लूटा महादेव को लूटा नारद‌मुनि के पीछे पड़ गई । श्रृंगी ऋषि का मर्दन कर डाला। पराशर का पेट फाड़ा । कनफूँका और चिदकाशियों को लूट लिया । योगेश्वर लुट जाने से विचार करने लगे । कबीर कहते हैं कि हम तो साहब की दया से बच गए और शब्द रूपी डोर पकड़ कर पार उतर गए । हे साधो ! इस ठगनी से होशियार रहो ।
`, audioDriveId: '', singer: '' },
  { id: '1-5-26', part: 1, chapter: 5, chapterSequence: 26, title: 'साधो सहज समाधि भली', author: 'कबीर', hindiText: `KABIR ON LIVING IN SAHAJA SAMADHI.

साधो सहज समाधि भली ॥ टे ॥
गुरु प्रताप जा दिन से जागी, दिन दिन अधिक चली ॥१॥
आँख न मूदौं कान न रूँधौं, तनिक कष्ट नहि धारौं ।
खुले नैन पहिचानौं हँसि हँसि, सुन्दर रूप निहारों ॥ २ ॥
सबद निरन्तर से मन लागा, मलिन वासना त्यागी ।
ऊठत बैठत कबहु न छूटै, ऐसी तारी लागी ॥३॥
कह कवीर यह उन्मनि रहनी, सो परगट करि गाई ।
दुख सुख से कोइ परे परमपद, तेहि पद रहा समाई ॥४॥
`, meaning: `हे साधो ! सहज समाधि भली है। गुरु के प्रताप से जिस दिन से जागृत हुई है, प्रतिदिन बढ़ती ही गई । न आँख मूँदता हूँ, न कान रुँचता हूँ । थोड़ा भी कष्ट नहीं उठाता । खुले नेत्रों से पहचानता हूँ और हँस हँस कर सुन्दर रूप निहारता हूँ। निरन्तर शब्द से मन लग गया है। (मन ने ) मलिन वासना त्याग दी है। ऐसी ( अखण्ड) तारी लगी है कि उठते बैठते कभी भी नहीं छूटती । कवीर कहते हैं कि, यह उन्मनि रहती है। जिसको मैंने प्रकट कर के गाया है। दुख सुख से परे एक अकथ परम-पद है, जिसमें मैं समा गया हूं ।
`, audioDriveId: '', singer: '' },
  { id: '1-5-27', part: 1, chapter: 5, chapterSequence: 27, title: 'जो पीर मेरा बड़ा औलिया', author: 'मौला', hindiText: `MAULA ON THE EFACEMENT, IN ECSTACY, OF THE DISTINCTION BETWEEN SELF AND GOD.

जो पीर मेरा बड़ा औलिया, निशान बतलाया ।
उससे मैंने गुङ्ग होकर, अपना घर पाया ॥१॥
पञ्चतत्व के मकान में म ही बैठा रहा ।
तरह तरह का रंग देख कर, बाजा सुन लिया ॥२॥
'ततु त्वं' शब्द का बोल बताया, होशियार मैं हुआ।
नाद विन्दु की कला जानकर, हुआ बेपरवा ॥ ३ ॥
लाल शून्य के ऊपर सफेद शून्य दिखलाया ।
उस पर काला तीसर शून्य सुषुप्ति कहलाया ॥४॥
चौथे शून्य का बड़ा उजियारा, गुरु ने बतलाया ।
उन्मनि मैंने साँइ जगाया, उसे समुझि लिया ॥ ५॥
आनन्द नहाया बन्दा खुदा, दोनो विसर गया ।
वेनाम का नाम होकर, रहटाना राहा ॥६॥
और भी यह समुझि ले, पूर्णब्रह्म कैसोई ।
समझे लाल सफेद पर काला, जो देखे नीला सोई ॥ ७ ॥
कहे मौलाई समुझि ले, जो मुरशिद को पाई ।
प्याला लेवे जाने वाहिद, जान पाई ॥ ८॥
`, meaning: `मेरा गुरु जो बड़ा सिद्ध है, उसने मुझ को चिन्ह बतला दिया । उससे मैने मूक हो कर अपना स्थिर निवास प्राप्त किया । पञ्चभौतिक शरीर में मैं अकेला ही बैठा रहा। वहाँ पर नाना प्रकार के रंग देखकर, बाजा सुन लिया । 'तत्त्वं' महावाक्य मुझे बताया गया, जिससे मैं जागृत हुआ । नाद, विन्दु की कला जान कर मैं वेपरवाह हुआ । लाल शून्य पर सफेद शून्य देख लिया । उस पर तीसरा काला शून्य है, जिसको सुषुप्ति कहते हैं । उसके ऊपर चौथा शून्य, जो तुर्यावस्था का है, उसका बड़ा उजाला गुरु ने बतलाया। उस उन्मनि अवस्था में मैंने स्वामी को जगाया और उसको समझ लिया । आनन्द सागर में डूब कर " बन्दा खुदा " के भेद को भूल गया । दो नाम का एक नाम होकर आवागमन मिट गया । पूर्णब्रह्म कैसा है इसको वही समझता है, जो लाल, सफेद और काले पर नीला शून्य देखता है। मौला कहते हैं कि यह बात समझले कि जो गुरु को पा लेता है और जो रस का प्याला लेना जानता है वही ईश्वर को प्राप्त कर सकता है।
`, audioDriveId: '', singer: '' },
  { id: '1-5-28', part: 1, chapter: 5, chapterSequence: 28, title: 'बन्धनों की शृङखला को', author: 'गिरीशचन्द्र शर्मा', hindiText: `THE RELEASED SOUL, THE CAUSE OF THE SUSTENANCE AND THE UPLIFTMENT OF THE WORLD.

बन्धनों की श्रृंखला को तोड़कर यह पार आया ।
मुक्त हो बैठा पुजारी जागरण का श्वास पाया ॥१॥
सम्पुटों से त्राण पाते ही अमर गुञ्जारता है ।
पंख फैलाकर दिशाओं में उड़ाने चाहता है ॥ २ ॥
वह अपरिमित हो चुका, अब क्यों रहे सीमित सदन में ।
आज जी भर कर उड़ेगा, यह पखेरू चिद्गगन में ॥ ३॥
जो त्वचा के आवरण में, अस्थिपञ्जर बस गया है।
परम पावन रूप निज लख, भूम सागर रम रहा है ॥ ४ ॥
कला बिन्दू नाद का आधार, अब जीवन सफल है ।
ताल स्वर आरोह में सीमित नहीं वह सम विमल है ॥ ५ ॥
आप अपने में मगन कुछ, आप वाणी गा उठी है।
भावना होकर सुहागिनि, बात प्रिय से कह उठी है ॥ ६ ॥
स्त्रयं प्रतिमा बन पुजारी, इस जगत में पुज रहा है।
मौन होकर साधना का, भेद पूरा कह रहा है ॥७॥
पद्म शतदल खिल गए पर गन्ध दादुर को न आई ।
भाग्यशाली ने बिना ही याचना, सम्पत्ति पाई ॥ ८॥
सफल तरु परमार्थ पथ पर, आप नीचे झुक गया है ।
आ गया जो छाँह में वह भाग्य से फल पा गया है ॥ ९ ॥
आज पाहन के प्रतीकों तक, चला है नेह इसका ।
जगमगाता है क्षितिज के पार तक आलोक उसका ॥ १० ॥
`, meaning: `यह साधु कारागार की श्रृंखला को तोड़ कर पार आया । जागरण का श्वास पाकर पुजारी मुक्त हो बैठा । सम्पुटों से त्राण पाते ही भ्रमर गुजारता है; पंखों को फैला कर दिशाओं में उड़ना चाहता है। वह अपरिमित हो चुका । अब सीमित सदन में क्यों रहे ? आज यह पखेरू जी भर कर उड़ेगा। जो त्वचा के आवरण के भीतर अस्थियों के पञ्जर में बसा हुआ है, वह अब परम पावन रूप को देख कर भूम-सागर में रम रहा है। अब कला विन्दु और नाद का आधार यह जीवन सफल हो गया है। ताल, स्वर, आरोह, अवरोह में वह असीमित हो कर असंग और सम हो गया है। आप अपने में मग्न होने पर वाणी आप ही आप कुछ अकथ गा उठी है । भावनां सुहागिनी होकर प्रिय से बात कहने लगी है। पुजारी स्वयं प्रतिमा बन कर इस जगत में पूज रहा है और मौन होकर साधना का भेद कह रहा है। शतदल पद्म खिल गए, पर दादुर को गन्ध नहीं आई । भाग्यशाली ने याचना के विना ही संपत्ति पा ली । फलों से लदा हुआ तरु परमार्थ के पथ पर आपसे आप नीचे झुका है, जो छाया में आ गया, वह भाग्य से फल पा गया है। आज इस साधु का स्नेह पाहन के प्रतीकों तक चल पड़ा है और उसका आलोक क्षितिज के उस पार तक जगमगाता है ।
`, audioDriveId: '', singer: '' },
  { id: '1-5-29', part: 1, chapter: 5, chapterSequence: 29, title: 'तत्त हिण्डोलवा सतगुरु', author: 'गुलाल', hindiText: `GULAL'S FLIGHT INTO THE INFINITE BY THE POWER OF THE SWING-SONG.

तत्त हिंडोलबा सतगुरु नावल, तहँवा मनवा झुलत हमार ॥ १ ॥
बिन डोरी बिन खम्भे पौदल, आठ पहर झनकार ॥ २ ॥
गावहु सखी हिंडोलवा हो, अनभौ मंगल चार ॥३॥
छुटल जगत कर झुलना हो, प्रेम पदारथ भइल निनार ॥ ४॥
अब नहिं अवना जवना हो, दास गुलाल मिलो है यार ॥५॥
`, meaning: `तत्व का हिण्डोला सद्‌गुरु झुलाता है और उसमें मेरा मन झूल रहा है। बिना डोरी और बिना खम्भे के पालने में (वह) लेटा है। आठों पहर झनकार उठ रहीं है। हे सखियो ! अनुभव मंगलाचरण रूप हिण्डोल गीत गाओ । अब आवागमन नहीं होगा । पालना जगत से छूट गया और प्रेम-पदार्थ (जीवात्मा) अलग हो गया । दास गुलाल कहते हैं, कि मुझे यार मिल गया है।
`, audioDriveId: '', singer: '' },
  { id: '1-5-30', part: 1, chapter: 5, chapterSequence: 30, title: 'क्या वे किसी से काम', author: 'महिपति', hindiText: `I AM NOW A BONDSMAN OF MY LORD "; SAYS NARAHARINATH, "WHAT CARE I FOR THE WORLD?"

क्या वे किसी से काम, हम तो गुलाम गुरु घर के ।
वेपरवा मन मौजी राजा, हम अपने दिल के ॥१॥
नहीं किसी से दरकार, टुकड़ा मँगकर खाते हैं ।
गुरु ज्ञान के अमल नशे में, हमेश झुलते हैं ॥२॥
गगन मण्डल में दस नादों का, अवाज सुनते हैं ।
तीनों ऊपर धुनी लगाकर, बैठे रहते हैं ॥ ३॥
चाँद सूरज मशाल लेकर, आगे चलते हैं ।
अर्धचन्द्र का अमृत प्याला, भर भर पीते हैं ॥४॥
उल्टी तुरिया होगइ उन्मनि, मिल गई जाकर के ।
पलख में रहना अलख जगाना, कलख जलाकर के ॥५॥
हुआ दिवाना फकीर भोला, भटकत फिरता है ।
झूटी माया प्रीति लगाकर, गोते खाता है ॥६॥
नाहीं रहना काम करो कुछ, डेरा गिरता है ।
नरहरि मौला जल्दी आकर, हुशार करता है ॥७॥
`, meaning: `हमें किसी से क्या काम है ? हम केवल गुरुघर के गुलाम हैं । हम बेपरवाह होकर मन की मौज के अनुसार काम करने वाले, अपने दिल के राजा हैं। हम किसी से जरूरत नहीं रखते, टुरुड़ा माँग कर खाते हैं । गुरुज्ञान के गाढ़ नशे में झूमते रहते हैं। गगनमण्डल में दस नादा की ध्वनि सुनते हैं, तीनों अवस्थाओं के ऊपर तुर्या की धूनी जलाकर बैठे रहते हैं। चन्द्र और सूर्य मशालची होकर आगे चलते हैं । हम अर्थकपाल में अमृत भर-भर कर पीते हैं। तुर्या उलट कर उन्मनि हो गई और जाकर परमात्मा में मिल गई। पलक में रहो और कल्मप जलाकर अलक्ष्य को जगा दो । भोला फ़कीर पागल हो कर भटक रहा है। सब संसार झूठी माया से प्रीति लगा कर गोते खा रहा है। "तुम्हें यहाँ रहना नहीं है, कुछ काम करो, डेरा अभी गिर जाएगा" इस प्रकार नरहरिनाथ शीघ्र आकर चेतावनी देते हैं।
`, audioDriveId: '', singer: '' },
  { id: '1-5-31', part: 1, chapter: 5, chapterSequence: 31, title: 'आरती कहाँ लौ जोवै', author: 'रैदास', hindiText: `RAIDAS ON THE FUTILITY OF WAVING LIGHTS BEFORE AN OMNIPRESENT GOD.

आरती कहाँ लौ जोवै । सेवक दास अचम्भो होवे ॥ १ ॥
बावन काञ्चन दीप धरावै । जड़ बैरागी दृष्टि न आवै ॥ २ ॥
कोटि भानु जाकी सोभा रोमै । कहा आरती अगनी होमै ॥३॥
पाँच तत्व तिरगुनी माया । जो देखे सो सकल समाया ॥ ४ ॥
कह रैदास देखा हम माहीं । सकल ज्योति रोम सम नाहीं ॥ ५ ॥
`, meaning: `आरती कहाँ तक जलावे ? इस विषय में सेवक दास को आश्चर्य हो रहा है। बावन कंचन की नीरांजनाओं में दीप जलाने पर भी जड़ वैरागी की दृष्टि में (ईश्वर का रूप) नहीं आता । जिसके लोम लोम में करोड़ों सूर्यो की शोभा भरी है, उसके सामने आरती करने अथवा अग्नि में हवन करने से क्या लाभ ? पाँच तत्व और त्रिगुणी माया काद्रष्टा अखिल विश्व में समाया है । रैदास कहते हैं कि, मैंने उसको अपने में ही देख लिया । जगत का समस्त प्रकाश एकत्र करने पर भी उसके एक रोम के तुल्य नहीं होता ।
`, audioDriveId: '', singer: '' },
  { id: '1-5-32', part: 1, chapter: 5, chapterSequence: 32, title: 'पावन जस है माधो तेरा', author: 'रैदास', hindiText: `ON FORGIVENESS AS HAVING NO FUNCTION BEFORE SINLESSNESS.

पावन जस है माधो तेरा, तू दारुन अघमोचन मेरा ॥ टे ॥
कीरति तेरी पाप विनासै, लोग वेद यों गावैं ।
जो हम पाप करत नहिं भूधर, तौ तू कहा नसावै ॥१॥
जब लग अंग पंक नहिं परसै, तौ जल कहा पखारै ।
मन मलीन विषयारम लम्पट, तौ हरिनाम सँभारै ॥२॥
जो हम विमल हृदय चित अन्तर दोष कौन परिहरिहौ ।
कह रैदास प्रभू दयाल हौ, अबन्ध मुक्त का करिहौ ॥३॥
`, meaning: `हे माधव, तेरा यश पावन है। तू मेरे घोर पापों का मोचक है ! "तेरी कीर्ति पापों का विनाश कर देती है " यों लोक और वेद गाते हैं। हे धरणीधर ! जब हम पाप ही नहीं करते, तो तू नाश क्या करेगा ? जब कीचड़ का शरीर से स्पर्श ही नहीं हुआ तो जल किस वस्तु का प्रक्षालन करेगा ? जब मन विषय-रस-मग्न होने से मलिन हो, तब हरि का नाम उसको सँभालेगा। जब हमारे मन, बुद्धि और चित्त निर्मल हैं, तब तू किस दोष का परिहार करेगा ? रैदास कहते हैं कि, हे प्रभु ! तुम दयालु हो; जिसको बन्ध ही नहीं; उसको तुम मुक्त क्या करोगे ?
`, audioDriveId: '', singer: '' },
  { id: '1-5-33', part: 1, chapter: 5, chapterSequence: 33, title: 'कहूँ रे जो कहिवे की', author: 'कबीर', hindiText: `KABIR ON HIS HAVING RECEIVED A MESSAGE FOR THE DELIVERANCE OF THE WORLD.

कहूँ रे जो कहिवे की होइ ॥ टे ॥
ना कोइ जानै ना कोइ मानै, ताते अचरज मोइ ॥१॥
अपने अपने रंग के राजा, मानत नाहीं कोइ ।
अति अभिमान लोभ के घाले, चले अपनपौ खोइ ॥२॥
मैं मेरी करि यह तन खोयो, समझत नहीं गँवार ।
भौजल अधपर थाकि रहे हैं, बुड़े बहुत अपार ॥३॥
मोहीं आज्ञा दई दया करि, काहूँ कूँ समुझाइ ।
कह कवीर मैं कहि कहि हायो, अब मोहिं दोस न लाइ ॥ ४॥
`, meaning: `जो " श्रेय की " बात है, वही मैं कह रहा हूँ। पर उसको न कोई जानता है, न कोई मानता है, इस से मुझको आश्चर्य हो रहा है। सभी अपने अपने मन के राजा हैं। कोई मानता ही नहीं । अत्यन्त अभिमान और लोभग्रस्त होकर अपने को खो चले हैं। मूर्षों ने "मैं और मेरी " करके अपनी देह को बेकार कर दी, समझते नहीं । संसार-सागर के मध्य में बहुत लोग थक गए और असंख्य डूब गए हैं। प्रभु ने दया करके मुझको आज्ञ दी कि, किन्हीं को समझाओ । कवीर कहते हैं, मैं तो कह कह कर हार गया । अब मुझे कोई दोप न दे ।
`, audioDriveId: '', singer: '' },
  { id: '1-5-34', part: 1, chapter: 5, chapterSequence: 34, title: 'गुरुने मोहिं दीन्हीं अजब', author: 'कबीर', hindiText: `KABIR ON THE CONCEPTION OF PARIVARA-MUKTI.

गुरु ने मोहिं दीन्हीं अजब जड़ी ॥ टे ॥
सोहि जड़ी मोहिं प्यारि लगतु है, अमृत रसन भरी ॥१॥
काया नगर अजब इक बँगला, ता में गुप्त धरी ॥२॥
पाँचों नाग पचीसों नागिन, सूंघत तुरत मरीं ॥ ३॥
या कारे ने सब जग खायो, सतगुरु देख डरी ॥४॥
कहत कबीर सुनो भई साधो, लै परिवार तरी ॥५॥
`, meaning: `गुरु ने मुझको अज़ब जड़ी दी है। यह जड़ी अमृत-रस से भरी है, अतएव वह मुझे बहुत प्यारी लगती है । इस शरीर रूपी नगर में एक अजब बँगला है। (मैंने) उसमें जड़ी छिपा के रख दी है। उसको सूँघते ही पाँचों नाग और पचीसों नागिन तुरन्त मर गई। इस काले ने सब संसार को खा डाला, पर सद्गुरु को देख कर डर गया। कवीर कहते हैं कि, हे भाई सुनो ! (सद्गुरु) परिवार ले कर तर जाता है ।
`, audioDriveId: '', singer: '' },

  // ================= PART 2: DOHAS (100) =================
  
  // --- Chapter 1 ---
  { id: '2-1-1', part: 2, chapter: 1, chapterSequence: 1, title: 'सदा नगारा कूचका', author: 'रहीम', hindiText: `ON PERPETUAL FLUX.

सदा नगारा कूच का, बाजत आठों जाम ।
रहिमन या जग आइके, को करि सका मुकाम ।।
`, meaning: 'कूच का नगारा आठों प्रहर बज रहा है । रहीम कहते हैं कि, इस जग में आकर कौन मुकाम कर सका है ?', audioDriveId: '', singer: '' },
  { id: '2-1-2', part: 2, chapter: 1, chapterSequence: 2, title: 'पाती झडती देखते', author: 'अज्ञात', hindiText: `ONE GOES AHEAD, ANOTHER FOLLOWS.

पाती झड़ती देखते, हँसतीं कोपलियाँ ।
हम चलीं तुम भी चलिये, धीमी बावलियाँ ।।
फिर भी पाती यूँ कहे, सुन तरुवर एक बात ।
सैंया ऐसा सिरजिया, एक आवत एक जात ।।
`, meaning: `पत्तियों को झड़ती देखकर कोंपलें हँसती हैं । ( पत्तियां कहती हैं) ऐ बावलियों ! धीमी रहो । हम तो चल पड़ीं, तुमको भी चलना है। फिर पत्तियों ने तरुवर को इस प्रकार कहा, हे तरुवर ! एक बात सुनो, स्वामी ने ऐसी सृष्टि रची है कि एक आता है, एक जाता है।
`, audioDriveId: '', singer: '' },
  { id: '2-1-3', part: 2, chapter: 1, chapterSequence: 3, title: 'क्षणभङ्‌गुर जीवन की कलिया', author: 'अज्ञात', hindiText: `THE UNIVERSAL REIGN OF UNCERTAINTY.

क्षणभंगुर जीवन की कलिका, कल प्रात को जानै खिली न खिली ।
मलयाचल की गुचि सीतल मंद, सुगन्ध समीर मिली न मिली ।।
कलि-काल कुठार लिये फिरता, तनु नम्र है चोट झिली न झिली ।
कह ले हरि-नाम अरी रसना, फिर अन्त समय पै हिली न हिली ।।
`, meaning: `कौन जानें क्षणभंगुर जीवन की कली कल प्रातःकाल खिलेगी या न खिलेगी । मलयाचल की शुचि शीतल मंद सुगन्ध हवा (तुमको) मिलेगी या न मिलेगी । कलि पुरुष कुठार लेकर घूम रहा है, कोमल तनु से चोट सही जायगी या न सही जायगी । अरी रसना ! (अभी) हरि नाम कह ले, फिर अन्त समय में तू हिलेगी या न हिलगी ।
`, audioDriveId: '', singer: '' },
  { id: '2-1-4', part: 2, chapter: 1, chapterSequence: 4, title: 'कच्चे में नीका लग', author: 'अज्ञात', hindiText: `BITTER DECREPITUDE AS THE FINAL LOT OF THE HUMAN BODY.

कच्चे में नीका लगै, गदरे बहुत मिठाय ।
इक फल है ऐसा सखी, पाकि गए कड़वाय ॥
`, meaning: `कच्ची हालत में अच्छा लगता है। अध-पकी हालत में बहुत मीठा लगता है। एक ऐसा फल है, हे सखि ! जो पक जाने पर कड़वा लगता है।`, audioDriveId: '', singer: '' },
  { id: '2-1-5', part: 2, chapter: 1, chapterSequence: 5, title: 'कहँ जाये कहँ ऊपने', author: 'अज्ञात', hindiText:  `DUST THOU ART AND TO DUST RETURNEST.

कहँ जाये, कहँ ऊपने, कहाँ लड़ाए लाड़ ।
कहाँ बिराजै राज सों, कौन खाड़ में हाड़ ॥
`, meaning: `कहाँ गर्भ में आया ? कहाँ गर्भ से पैदा हुआ, कहाँ लाड़ लड़ाया गया, कहां वैभव से विराजमान हुआ और कौन खाड़ में तेरी हड्डियां पड़ेंगी, इसको चेत ले ।`, audioDriveId: '', singer: '' },
  { id: '2-1-6', part: 2, chapter: 1, chapterSequence: 6, title: 'हाड़ जरें ज्यों लाकड़ी', author: 'कबीर', hindiText: `THE FUNERAL PYRE AS THE INCITER TO SPIRITUAL LIFE.

हाड़ जरें ज्यों लाकड़ी, केस जैरें ज्यों घास ।
जगत पजरता देखि कै, कबिरा भया उदास ।।
`, meaning: `हड्डियां लकड़ी की तरह जल रही हैं । केश घास की तरह जलते हैं। सब प्राणियों को प्रज्वलित होते देख कवीर दुखी हो गया ।`, audioDriveId: '', singer: '' },

  // --- Chapter 2 ---
  { id: '2-2-1', part: 2, chapter: 2, chapterSequence: 1, title: 'चींटी चावल ले चली', author: 'कबीर', hindiText:  `YOU CANNOT SERVE GOD AND MAMMON TOGETHER.

चींटी चावल ले चली, बीच में मिल गइ दाल ।
कह कवीर दो ना मिले, इक ले दूजी डाल ।।
`, meaning: `चींटी (पिपीलिका) चावल लेकर चली थी, रास्ते में दाल मिल गई । कवीर कहते हैं कि, दोनों नहीं मिल सकते, एक ले, तो दूसरी (चीज़ ) डाल दे।`, audioDriveId: '', singer: '' },
  { id: '2-2-2', part: 2, chapter: 2, chapterSequence: 2, title: 'कदली सीप भुजङ्गमुख', author: 'अज्ञात', hindiText: `THE SAME DROP OF WATER CAN BE EITHER MEDICINE OR PEARL OR POISON.

कदली सीप भुजंग मुख, स्वाति एक गुण तीन ।
जैसी संगति होयगी, तैसोई फल दीन ।।
`, meaning: `कदली सीप और सर्प-मुख में एक स्वाति-बूँद के तीन (अलग अलग) गुण हो जाते हैं। जैसी संगति होगी, वैसा ही वह फल देगी ।`, audioDriveId: '', singer: '' },
  { id: '2-2-3', part: 2, chapter: 2, chapterSequence: 3, title: 'जो रहीम उत्तम प्रकृति', author: 'रहीम', hindiText:  `THE SANDAL TREE IS NOT CONTAMINATED BY THE VENOM OF THE ENCIRCLING SERPENT.

जो रहीम उत्तम प्रकृति, का करि सकत कुसंग ।
चन्दन विष व्यापत नहीं, लिपटें रहत भुजंग ।।
`, meaning: `रहीम कहते हैं कि अगर प्रकृति उत्तम हो, तो कुसंग क्या कर सकता है? सर्प लिपटे रहने से भी चन्दन वृक्ष में विप नहीं घुसता ।`, audioDriveId: '', singer: '' },
  { id: '2-2-4', part: 2, chapter: 2, chapterSequence: 4, title: 'कबिरा तेरी झोपड़ी', author: 'कबीर', hindiText: `KABIR CANNOT BE AFFECTED BY THE COMPANY OF THE BUTCHERS.

कविरा तेरी झोंपड़ी, गलकट्टन के पास ।
जो करता सो पात्रता, तू क्या करै उदास ।।
`, meaning: `कबीर कहते हैं, (ए मन) तेरी झोंपड़ी गलकट्टों के पास है। जो करता है, सो पाता है । तू क्यों उदास होता है ?`, audioDriveId: '', singer: '' },
  { id: '2-2-5', part: 2, chapter: 2, chapterSequence: 5, title: 'मृदङ्ग कहै धिक् है धिक् है', author: 'अज्ञात', hindiText: `THE LASCIVITY OF THE DANCING ART.

मृदंग कहै धिक् है धिक् है, मञ्जीर कहै किनको किनको ।।
बिसवा तब हाथ उठाय कहै, इनको इनको, इनको, इनको ॥
`, meaning: `मृदंग कहता है, "धिक् है ! धिक् है !" मञ्जीर पूछता है, "किनको ? किनको ?" तब वेश्या ( उपस्थित लोगों की ओर) हाथ उठाकर कहती है "इनको, इनको, इनको, इनको " ।`, audioDriveId: '', singer: '' },
  { id: '2-2-6', part: 2, chapter: 2, chapterSequence: 6, title: 'गाया है बूझा नहीं', author: 'कबीर', hindiText: `MUSIC SHOULD END IN MYSTICISM.

गाया है बूझा नहीं, गया न मन का मोह ।
पारस तक पहुँचा नहीं, रहा लोह का लोह ॥
`, meaning: `(तूने) गाया है, पर जान नहीं लिया है। (तेरे) मन का मोह नहीं गया । (तू) पारस तक नहीं पहुँचा; (इसलिए तू), लोह का लोह ही रह गया ।`, audioDriveId: '', singer: '' },
  { id: '2-2-7', part: 2, chapter: 2, chapterSequence: 7, title: 'ऋतु बसन्त याचक भयो', author: 'अज्ञात', hindiText: `CHARITY RETURNS UPON ITSELF.
ऋतु वसन्त याचक भयो, सब द्रुम दीन्हे पात ।
दीन्हें से फिरि मिलत है, यही दिए की बात ।।
`, meaning: `वसन्त ऋतु याचक हुआ । सभी द्रुमों ने पत्ते दिए । देने की यही बात है कि देने से फिर मिल जाता है ।`, audioDriveId: '', singer: '' },
  { id: '2-2-8', part: 2, chapter: 2, chapterSequence: 8, title: 'सहज मिलै सो दूधसम', author: 'कबीर', hindiText: `VARIETIES OF OBTAINMENT.

सहज मिलै सो दूध सम, माँगा मिलै सो पानि ।
कह कवीर वह रक्त सम, जा में खींचातानि ॥
`, meaning: `कवीर कहते हैं, जो आसानी से मिले वह दूध के समान है, जो माँगने से मिले वह पानी के समान है, जिस में संघर्ष हो वह रक्त के समान है।
`, audioDriveId: '', singer: '' },
  { id: '2-2-9', part: 2, chapter: 2, chapterSequence: 9, title: 'तुलसी कर पर कर करै', author: 'तुलसीदास', hindiText: `NOT TO BEG IS THE RULE OF SPIRITUAL LIFE

तुलसी कर पर कर करै, करतल कर न करे ।
ज़ा दिन करतल कर करै, वा दिन मरन करै ।।
`, meaning: `तुलसीदास कहते हैं कि कर पर कर करो। कर के नीचे कर मत करो । जिस दिन कर के नीचे कर करोगे, उस दिन मरण-स्थिति पावोगे ।`, audioDriveId: '', singer: '' },
  { id: '2-2-10', part: 2, chapter: 2, chapterSequence: 10, title: 'अस्थिचर्ममय देह मम', author: 'तुलसीपत्नी', hindiText: `AN ALL ABSORBING LOVE OF GOD.

अस्थि चर्म मय देह मम, ता में जैसी प्रीति ।
तैसी जो श्रीराम मँह, होति न तौ भवभीति ।।
`, meaning: `मेरी देह अस्थि-चर्म-मय है। उस में जैसी (तुह्मारी ) प्रीति है, वैसी अगर श्रीराम में होती तो भवभीति नहीं रहती ।`, audioDriveId: '', singer: '' },
  { id: '2-2-11', part: 2, chapter: 2, chapterSequence: 11, title: 'तुलसी यह जग आयकै', author: 'तुलसीदास', hindiText: `A DEVOTEE MUST LOOK ON ALL BEINGS AS VERILY THE FORMS OF GOD

तुलसी यह जग आय कै, सब सों मिलिए धाय ।
ना जाने किस वेप में, नारायण मिलि जाँय ।।
`, meaning: `तुलसीदास कहते हैं कि, इस जग में आकर सब से दौड़ कर मिलिये, मालूम नहीं, किस रूप में नारायण मिल जायेंगे ।
`, audioDriveId: '', singer: '' },
  { id: '2-2-12', part: 2, chapter: 2, chapterSequence: 12, title: 'घर राखे घर जात है', author: 'तुलसीदास', hindiText: `LEAVE THE HOUSE AND LEAVE THE FOREST; LIVE IN THE CITY OF GOD.

घर राखे घर जात है, घर छाँड़े घर जाय ।
तुलसी घर बन बीच रहु, राम प्रेम पुर छाय ॥
`, meaning: `घर की रक्षा करने पर भी घर जाता है। घर छोड़ने से घर जाता ही है। तुलसीदास कहते हैं कि घर और बन के बीच में ईश्वर-प्रेम का पुर छाकर रहो ।
`, audioDriveId: '', singer: '' },
  { id: '2-2-13', part: 2, chapter: 2, chapterSequence: 13, title: 'कबिरा खड़ा बजार में लिये', author: 'कबीर', hindiText: `SET THY HOUSE ON FIRE AND FOLLOW ME.

कविरा खड़ा बजार में, लिये लुकाठी हाथ ।
जो घर फूँके आपना, चले हमारे साथ ।।
`, meaning: `कबीर हाथ में जलती मशाल लेकर बाज़ार में खड़ा है (और कहता है,) जो अपना घर फूँके, वही हमारे साथ चले ।
`, audioDriveId: '', singer: '' },
  { id: '2-2-14', part: 2, chapter: 2, chapterSequence: 14, title: 'चढ़ा मन्सूर सूलीपर', author: 'अज्ञात', hindiText: `THE GALLOWS AS THE STAIR-CASE TO SPIRITUAL VICTORY.

चढ़ा मन्सूर सूली पर, पुकारा इष्कवाज़ों से ।
यह उसके बाम का जीना है, आए जिसका जी चाहे ॥
`, meaning: `मन्नूर सूली पर चढ़ा। उसने इष्कवाज़ों से चिल्लाकर कहा कि, यह खुदा की अटारी का जीना है । जिसका दिल चाहे वह आवे ।
`, audioDriveId: '', singer: '' },
  { id: '2-2-15', part: 2, chapter: 2, chapterSequence: 15, title: 'साधु कहावन कठिन है', author: 'कबीर', hindiText: `"AND, IF THEY FALL THEY SHATTER THEMSELVES TO PIECES."

साधु कहावन कठिन है, लम्बा पेड़ खजूर ।
चढ़े तो चाखै प्रेम-रस, गिरै तो चकनाचूर ।।
`, meaning: `साधु कहलाना कठिन है। खजूर का पेड़ ऊँचा होता है। (उसकी चोटी तक) जो चढ़ेगा, वही प्रेमरस चखेगा । जो गिर जाएगा, वह चकनाचूर हो जाएगा ।
`, audioDriveId: '', singer: '' },

  // --- Chapter 3 ---
  { id: '2-3-1', part: 2, chapter: 3, chapterSequence: 1, title: 'सन्त सन्त सब एक हैं', author: 'कबीर', hindiText: `THERE ARE SAINTS AND SAINTS; RARELY ONE AMONG THEM IS THE BELOVED OF GOD.

सन्त सन्त सत्र एक हैं, जस पोहता का खेत ।
कोइ कुदरती लाल है, और सेत के सेत ।।
`, meaning: `सन्त सन्त सब एक हैं, जैसे पोस्ते के खेत में सब पोस्त एक रहते हैं। उनमें विरला ही कोई भाग्य से लाल होता है, शेप श्वेत के श्वेत रहते हैं।
`, audioDriveId: '', singer: '' },
  { id: '2-3-2', part: 2, chapter: 3, chapterSequence: 2, title: 'सिंहों के लेंहड़े नहीं', author: 'कबीर', hindiText: `SAINTS DO NOT MOVE IN FLOCKS.

सिंहों के लेंहड़े नहीं, हंसों की नहिं पाँत ।
लालों की नहिं बोरियाँ, साधु न चलें जमात ।।
`, meaning: `सिंह झुण्डों में नहीं रहते । हँसों को पंक्तियाँ नहीं होतीं । लालों की बोरियाँ नहीं मिलतीं । उसी तरह साधु जत्थे में नहीं चलते ।
`, audioDriveId: '', singer: '' },
  { id: '2-3-3', part: 2, chapter: 3, chapterSequence: 3, title: 'तुलसी मूरति राम की', author: 'तुलसीदास', hindiText: `THE UNIVERSAL IMMANENCE OF GOD.
    
तुलसी मूरति राम की, घट घट रही समाय ।
ज्यों मेहँदी के पात में, लाली लखी न जाय ।।
कस्तूरी कुण्डल बसै, मृग हुँदै बन माँहि ।
ऐसे घट घट राम है, दुनियाँ ढूँढन जाहि ॥
`, meaning: `तुलसीदास कहते हैं कि राम की मूर्ति घट घट में वैसे ही समाई रहती है जैसे मेंहदी की पत्ती में लाली रहती है पर देखी नहीं जाती ।
कस्तूरी (मृग की) नाभि में बसती है। (पर) मृग कस्तूरी को वन में ढूँढता है। इसी प्रकार ईश्वर हर घट में बसता है पर दुनियाँ (उसको बाहर) ढूँढने जाती है।
`, audioDriveId: '', singer: '' },
  { id: '2-3-4', part: 2, chapter: 3, chapterSequence: 4, title: 'अन्तर्जामिहुँ तें बड़', author: 'तुलसीदास', hindiText: `TRANSCENDENCE, HIGHER THAN IMMANENCE.

अन्तर्जामिहुँ तें बड़ बाहरजामि हैं राम, जे नाम लिए तें ।
पैज परे प्रहलादहु को प्रगटे प्रभु पाहन तें, न हिये तें ॥
`, meaning: `अन्तर्यामी से बहिर्यामी राम बड़ा है। ईश्वर का नाम लेते समय जत्र प्रहलाद को प्रण करना पड़ा तो प्रभु पत्थर से प्रकट हुए न कि हृदय से ।
`, audioDriveId: '', singer: '' },
  { id: '2-3-5', part: 2, chapter: 3, chapterSequence: 5, title: 'सगुर्नाहं अगुर्नाहं र्नाहं कछु', author: 'तुलसीदास', hindiText: `ULTIMATE IDENTITY OF TRANSCENDENCE AND IMMANENCE IN THE MULTIFORM NATURE OF GOD.

सगुनहि अगुनहिं नहिं कछु भेदा ।
गावहिं मुनि पुरान बुध वेदा ॥
अगुन अरूप अलख अज जोई ।
भगत प्रेम बस सगुन सो होई ॥
जो गुनरहित, सगुन सोइ कैसे ।
जलु हिम उपल विलग नहिं जैसे ।।
`, meaning: `सगुण और निर्गुण में कुछ भेद नहीं है। इस प्रकार मुनि, पुराण, पण्डित और वेद गाते आये हैं। जो अगुण, अरूप, अलख, अज है, वही भक्तों के प्रेमवश सगुण होता है। जो गुण रहित है वह सगुण कैसे हो सकता है ? जैसे जल हिम और उपल अलग नहीं हैं, एक ही हैं।
`, audioDriveId: '', singer: '' },
  { id: '2-3-6', part: 2, chapter: 3, chapterSequence: 6, title: 'चलती चक्की देखके', author: 'कबीर', hindiText: `THE PROXIMITY OF GOD ALONE SAVES ONE FROM ANNIHILATION.

चलती चक्की देख के, दिया कवीरा रोय ।
दो पाटन के बीच में, साबित बचा न कोय ॥
चक्की चक्की सब कहै, कीला कहै न कोय ।
कीला से जो लग रहै, सावित बचता सोय ।।
`, meaning: `चलती चक्की को देखकर कवीर रो पड़ा, कि दो पाटों के बीच कोई समूचा नहीं बचा । चक्की, चक्की सभी कहते हैं पर कीला कौई नहीं कहता । जो कीले से लगा रहता है, वही समूचा बचता है।
`, audioDriveId: '', singer: '' },
  { id: '2-3-7', part: 2, chapter: 3, chapterSequence: 7, title: 'कबीर कूता रामका', author: 'कबीर', hindiText: `LIMITED HUMAN FREEDOM.

कवीर कृता राम का, मुतिया मेरा नाउँ ।
गले नाम की जेवड़ी, जित खेंचे तित जाउँ ।।
`, meaning: `कबीर कहते हैं कि मैं राम का कुत्ता हूँ। मेरा नाम 'मोतिया' है। गले में नाम की जेवड़ी है। जिधर राम खींचता है, उधर मैं जाता हूँ ।
`, audioDriveId: '', singer: '' },
  { id: '2-3-8', part: 2, chapter: 3, chapterSequence: 8, title: 'घर घर माँगे टूक', author: 'तुलसीदास', hindiText: `GOD THE SOURCE OF ALL HONOUR

घर घर माँगे टूक, पुनि, भूपति पूजे पाय ।
ते तुलसी तब राम बिनु, ते अब राम सहाय ।।
`, meaning: `पहिले घर घर टुकड़े माँगते थे । अब तो भूपति पैर पूजते हैं । वे तुलसी तब बिना राम के थे। आज उन्हीं का राम सहाय है।`, audioDriveId: '', singer: '' },
  { id: '2-3-9', part: 2, chapter: 3, chapterSequence: 9, title: 'चित्रकूटके घाट पर', author: 'तुलसीदास', hindiText: `GOD AS SERVING THE SAINTS.

चित्रकूट के घाट पर, भइ सन्तन की भीर ।
तुलसिदास चन्दन घिसै, तिलक देत रघुबीर ॥
`, meaning: `चित्रकूट के घाट पर सन्तों की भीड़ हुई । तुलसी-दास चन्दन घिसते थे और रघुवीर तिलक दे रहे थे ।
`, audioDriveId: '', singer: '' },
  { id: '2-3-10', part: 2, chapter: 3, chapterSequence: 10, title: 'पीछे माँगै चाकरी', author: 'कबीर', hindiText: `GOD FOREFULFILS THE DESIRES OF THE DEVOTEE.

पीछे माँगै चाकरी, पहिले महिना देय ।
ता साहब सिर सौंपते, क्यों, खसकाता देह ।।
`, meaning: `पहिले दाम देता है; पीछे चाकरी माँगता है। उस साहब को सिर सौंपते क्यों तू अपनी देह पीछे हदाता है ।
`, audioDriveId: '', singer: '' },
  { id: '2-3-11', part: 2, chapter: 3, chapterSequence: 11, title: 'चलो सखी तहँ जाइए', author: 'सूरदास', hindiText: `SPIRITUAL EUDAEMONISM.

चलो सखी तहँ जाइए, जहाँ बसत ब्रजराज ।
गोरस बेंचत हरि मिलें, एक पन्थ दो काज ।।
`, meaning: `सखी, चलो, हम दोनों वहाँ चलें, जहाँ व्रजराज बसते हैं । गोरस बेचते हरि मिलेंगे । 'एक पन्थ दो काज' होगा ।
`, audioDriveId: '', singer: '' },
  { id: '2-3-12', part: 2, chapter: 3, chapterSequence: 12, title: 'जो चाहे आकार तू', author: 'कबीर', hindiText: `SADHU IS GOD WITH FORM NIJARUPA IS GOD WITHOUT FORM

जो चाहै आकार तू, साधू परतछ देव ।
निराकार निजरूप है, प्रेम प्रीति से सेव ।।
`, meaning: `अगर तू आकार चाहता है तो साधु प्रत्यक्ष देव है । निराकार चाहता है तो, निजरूप है। प्रेम प्रीति से (उसकी) सेवा कर ।
`, audioDriveId: '', singer: '' },
  { id: '2-3-13', part: 2, chapter: 3, chapterSequence: 13, title: 'निराकार को आरसी', author: 'कबीर', hindiText: `THE FORMLESS ITSELF IS FULLY MIRRORED IN THE SADHU.

निराकार की आरसी, साधो ही की देह ।
लखा जो चाहै अलख को, इस ही में लखि लेह ॥
`, meaning: `साधु ही की देह एक आरसी है, जिसमें निराकार प्रतिविम्बित होता है; यदि तू अलख को देखना चाहता है, तो इसी में देख ले ।`, audioDriveId: '', singer: '' },
  { id: '2-3-14', part: 2, chapter: 3, chapterSequence: 14, title: 'भजन भरोसे रामके', author: 'अज्ञात', hindiText: `KABIR LIES ON THE LAP OF THE IMMUTABLE.

भजन भरोसे राम के, मगहर तज्यो सरीर ।
अविनाशी की गोद में खेलत दास कबीर ।।
`, meaning: `राम के भजन-भरोसे मगहर में शरीर का त्याग कर दिया । कबीरदास, अविनाशी की गोद में खेल रहे हैं।
`, audioDriveId: '', singer: '' },

  // --- Chapter 4 ---
  { id: '2-4-1', part: 2, chapter: 4, chapterSequence: 1, title: 'क्षीर रूप सतनाम है', author: 'कबीर', hindiText: ` THE SAINT-SWAN SEPARATES THE MILK OF NAME FROM THE WATER OF EXISTENCE.

क्षीर रूप सत नाम है, नीर रूप बेबहार ।
हंस रूप कोइ साथ है, तत् का छाननहार ।।
`, meaning: `सत नाम क्षीर रूप है, व्यवहार नीररूप है। कोई (विरला) साधु हंस रूप है, जो दोनों को छान सकता है।
`, audioDriveId: '', singer: '' },
  { id: '2-4-2', part: 2, chapter: 4, chapterSequence: 2, title: 'गुरु तो वही सराहिए', author: 'कबीर', hindiText: `THE CATHARTIC INFLUENCE OF THE GURU'S TEACHING.

गुरु तो वही सराहिए जो सिकलीगर होय ।
जनम जनम का मोरचा, छन में डाले धोय ।।
`, meaning: `उसी गुरु की श्लाघा करो, जो सिकलीगर हो, (और) जो जन्म जन्म का मोरचा क्षण में धो डाले ।
`, audioDriveId: '', singer: '' },
  { id: '2-4-3', part: 2, chapter: 4, chapterSequence: 3, title: 'गुरू कुम्हार सिख कुम्भ है', author: 'कबीर', hindiText: `SUFFERINGS UNDER THE PROTECTION OF GURU IS BUT A BLESSING IN DISGUISE.

गुरु कुम्हार सिख कुभ्भ है, गढ़ गढ़ काढ़े खोट ।
अन्तर हाथ सहार दै, बाहर बाहै चोट ।।
`, meaning: `गुरु कुम्भकार है और शिष्य कुम्भ है। गुरु ठोक-ठोक कर शिष्य की खोट निकालता है। बाहर चोट लगाता है; पर भीतर हाथ से सहारा देता है ।`, audioDriveId: '', singer: '' },
  { id: '2-4-4', part: 2, chapter: 4, chapterSequence: 4, title: 'कनफूंका गुरु हद्द का', author: 'कबीर', hindiText: `THE REAL GURU IS HE, WHO TEACHES THE WAY TO THE UNLIMITED.

कनफूँका गुरु हद्द का, बेहद का गुरु और ।
बेहद का गुरु जब मिलै, लहै ठिकाना ठौर ।।
`, meaning: `कनफूँका गुरु हद्द का होता है। बेहद का गुरु और ही होता है। जब बेहद का गुरु मिल जाता है, तभी स्थायी स्थान प्राप्त होता है ।
`, audioDriveId: '', singer: '' },
  { id: '2-4-5', part: 2, chapter: 4, chapterSequence: 5, title: 'गुरु गोविन्द दोऊ खड़े', author: 'कबीर', hindiText: `GURU GREATER THAN GOD.

गुरु गोविंद दोऊ खड़े, का के लागू पाय ।
बलिहारि गुरु आप की, गोविन्द दिया दिखाय ॥
`, meaning: `गुरु और गोविन्द दोनों खड़े हैं। किसके पाँय लगू ? हे गुरु ! मैं आपकी बलिहारी हूँ, (क्योंकि आपने मुझे ) गोविन्द दिखा दिया ।
`, audioDriveId: '', singer: '' },
  { id: '2-4-6', part: 2, chapter: 4, chapterSequence: 6, title: 'एक लख चन्दा आन धरि', author: 'कबीर', hindiText: `THE WORD OF THE GURU ALONE AS CAPABLE OF DISPELLING DARKNESS.

इक लख चन्दा आनि घर, सूरज कोटि मिलाय ।
बिना सबद गुरुदेव के, कबहूँ तिभिर न जाय ।।
`, meaning: `चाहे एक लाख चाँद लाकर रक्खो । करोड़ सूर्य मिला कर रक्खो । परन्तु गुरुदेव के " शब्द " के बिना तिमिर कभी भी नहीं जाएगा ।`, audioDriveId: '', singer: '' },
  { id: '2-4-7', part: 2, chapter: 4, chapterSequence: 7, title: 'अगुन सगुन दुइ ब्रह्मसरूपा', author: 'तुलसीदास', hindiText: `BOTH PERSONAL AND IMPERSONAL GOD AS SUBORDINATE TO THE NAME.

अगुन सगुन दुइ ब्रह्म सरूपा ।
अकथ, अगाध, अनादि अनूपा ।।
मोरे मत बड़ नाम दुहूँ ते ।
किय जेहि युग निज बस निज बूते ।।
निर्गुन तें एहि भाँति बड़, नाम प्रभाव अपार ।
कहेऊँ नाम बड़ राम तें, निज विचार अनुसार ॥
`, meaning: `अगुण और सगुण दोनों ब्रह्म के स्वरूप हैं। दोनों अकथनीय अगाध, अनादि और अनुपम हैं। मेरे मत से जिस नाम ने अपने प्रभाव से दोनों को अपने वश में किया है, वह दोनों से भी बड़ा है। इस प्रकार निर्गुण से नाम का प्रभाव बड़ा और अपार है ही, पर अपने विचार के अनुसार मैं ऐसा कहता हूँ कि नाम राम से भी बड़ा है।`, audioDriveId: '', singer: '' },
  { id: '2-4-8', part: 2, chapter: 4, chapterSequence: 8, title: 'हम लखि लखहिं हमार', author: 'तुलसीदास', hindiText: `HOW CAN YOU PERCEIVE THE UNPERCEIVABLE? MEDITATE ON THE NAME OF GOD, O FOOL!

हम लखि लखिहि हमार, लखि हम हमार के बीच।
तुलसी अलग्खे का लखै, राम नाम जपु नीच ॥
`, meaning: `आत्मा को देख; दृश्य को देख और जो आत्मा और दृश्य के बीच है, उसको देख । तुलसीदास कहते हैं कि हे पामर ! अलक्ष्य को कैसे देखेगा ? राम नाम का जप कर ।`, audioDriveId: '', singer: '' },
  { id: '2-4-9', part: 2, chapter: 4, chapterSequence: 9, title: 'एक छत्र एक मुकुटमनि', author: 'तुलसीदास', hindiText: `TULSIDAS ON THE SOVEREIGN STATUS OF THE NAME OF RAMA.
    
एक छत्र एक मुकुट मनि, सब बरनन पर जोउ ।
तुलसी रघुवर नाम के, बरन बिराजत दोउ ।।
`, meaning: `तुलसीदास कहते हैं कि "राम" नाम के दो वर्ण हैं, रेफ और अनुस्वार। वे दोनों छत्र और मुकुटमणि के समान सब अक्षरों पर विराजते हैं।
`, audioDriveId: '', singer: '' },
  { id: '2-4-10', part: 2, chapter: 4, chapterSequence: 10, title: 'रामनाम सब कोइ कहे', author: 'अज्ञात', hindiText: `A NAME THAT SPROUTS AND A NAME THAT DOES NOT SPROUT INTO FORM

राम नाम सब कोइ कहै, ठग ठाकुर अरु चोर ।
जिस से ध्रुव प्रहलाद तरे, वह नाम कुछ और ।।
`, meaning: `'राम' नाम ठग ठाकुर और चोर सभी कहते हैं । पर जिस नाम से ध्रुव और प्रल्हाद तर गए, वह नाम कुछ और ही है।
`, audioDriveId: '', singer: '' },
  { id: '2-4-11', part: 2, chapter: 4, chapterSequence: 11, title: 'रामनाम मणि दीप धरु', author: 'तुलसीदास', hindiText: `NAME ON TONGUE LIGHTS UP BOTH INSIDE AND OUTSIDE.

राम नाम मणि दीप धरु, जीह देहरी द्वार ।
तुलसी भीतर बाहिर हुँ, जो चाहसि उजियार ।।
`, meaning: `तुलसीदास कहते हैं कि यदि भीतर और बाहर दोनों ओर उजाला चाहते हो तो मुखद्वार की जीभ देहली पर राम नाम मणि दीप रक्खो ।`, audioDriveId: '', singer: '' },
  { id: '2-4-12', part: 2, chapter: 4, chapterSequence: 12, title: 'नाम रामको कल्पतरु', author: 'तुलसीदास', hindiText: `THE NAME CAN TRANSMUTE A SINNER INTO A SAINT.

नाम राम को कल्पतरु, कलि कल्यान निवास ।
जो सुमिरत भयो भाँग ते, तुलसी तुलसीदास ।।
`, meaning: `राम का नाम कल्पतरु है। वह कलि में कल्याण का निवास है। तुलसीदास जी कहते हैं कि उसका स्मरण करते करते मैं भाँग से तुलसी हो गया ।`, audioDriveId: '', singer: '' },
  { id: '2-4-13', part: 2, chapter: 4, chapterSequence: 13, title: 'शुन्य मरै अजपा मरै', author: 'कबीर', hindiText: `THE NAME ALONE AS CAPABLE OF CONFERRING IMMORTALITY.

शून्य मरै अजपा मरै, अनहत हूँ मरि जाय ।
दास कबीरा ना मरै, राम नाम रट लाय ।।
`, meaning: `शून्य मर जाता है; अजपा मर जाता है; अनाहत भी मर जाता है। पर दास कबीर नहीं मरता, जिसने राम नाम की रट लगाई है।
`, audioDriveId: '', singer: '' },
  { id: '2-4-14', part: 2, chapter: 4, chapterSequence: 14, title: 'काल करो सो आज कर', author: 'अज्ञात', hindiText: `EXTREME VALUE OF THE PRESENT MOMENT.

काल करो सो आज कर, आज करो सो अच्च ।
पल में परलै होयगी, बहुरि करोगे कव्व ।।
`, meaning: `जो कल करना है, वह आज करो । जो आज करना हो सो अभी कर लो । पल में प्रलय हो जायगी। फिर तुम कब करोगे ?`, audioDriveId: '', singer: '' },
  { id: '2-4-15', part: 2, chapter: 4, chapterSequence: 15, title: 'श्वास श्वास पर हर भजो', author: 'अज्ञात', hindiText: `TAKE CARE OF EVERY ONE OF YOUR BREATHS.

श्वास श्वास पर हर भजो, वृथा श्वास मत खोय ।
श्रास विराना पाहुना, आना होय न होय ।।
कबिरा माला काठ की, बहुत जतन का फेर ।
माला साँस उसाँस की, जामें गाँठ न मेर ।।
स्वाँसा की कर सुमिरनी, अजपा को कर जाप ।
परम तत्व को ध्यान घर, सोऽहं आपै आप ।।
`, meaning: `श्वास श्वास पर हर को भजो। श्वास को व्यर्थ मत खोओ । श्वास पराया पाहुना है। इसका फिर आना हो या न हो । कवीर कहते हैं कि काठ की माला को फेरना बहुत यत्न का काम है। श्रास उच्छवास की माला ऐसी है कि उसमें न गाँठ ह न मेरु । श्वासों की सुमिरनी बना अजपा का जप कर। पर मतत्व का ध्यानं धर । फिर आप ही आप "सोऽहं " है।
`, audioDriveId: '', singer: '' },
  { id: '2-4-16', part: 2, chapter: 4, chapterSequence: 16, title: 'काँकर पाथर जोडकर', author: 'कबीर', hindiText: `MEDITATE IN SILENCE; FOR GOD IS NOT DEAF.

काँकर पाथर जोड़कर, मस्ज़िद लई चुनाय ।
ता चढ़ि मुल्ला बाँग दे, क्या बहिरा हुआ खुदाय ।
अजान से ही वेडर कुल, एंजिन की सीटी है।
जिसको सुनकर सेख ने, छाती अपनी पीटी है ।
बाह्मन से गदहा भला, भला देव से कूता ।
मुल्ला से मुरगा भला, लोक जगावे सोता ।।
`, meaning: `कँकड़ पत्थर जोड़कर मस्ज़िद उठवां ली। उस पर चढ़कर मुल्ला बाँग देता है। क्या खुदा बहरा होगया है ? एंजिन की सीटी अजान से भी विलकुल वेडर है, जिसको सुनकर शेख अपनी छाती पीटने लगा है। ब्राह्मण से गदहा भला है, देव से कुत्ता भला है, मुल्ला से मुरगा भला है, जो सोते हुए लोगों को जगाता है।
`, audioDriveId: '', singer: '' },
  { id: '2-4-17', part: 2, chapter: 4, chapterSequence: 17, title: 'माला तो करमें फिरै', author: 'अज्ञात', hindiText: `CONTROL OF THE WANDERINGS OF THE MIND.

माला तो कर में फिरै, जीह फिरै मुख माहिं ।
मनुवा तो दस दिसि फिरै, यह तो सुमिरन नाहिं ॥
`, meaning: `माला तो कर में फिरती है, जीभ मुख में फिरती है, और मन दसों दिशाओं में फिर रहा है। यह स्मरण नहीं कहलाता ।
`, audioDriveId: '', singer: '' },
  { id: '2-4-18', part: 2, chapter: 4, chapterSequence: 18, title: 'तू रहीम मन आपनो', author: 'रहीम', hindiText: `INTENSE CONCENTRATION OF THE MIND UPON GOD.

तू रहीम मन आपनो, कीन्हो चारु चकोर ।
निसि बासर लाग्यो रहै, कृष्ण चन्द्र की ओर ॥
`, meaning: `रहीम, तू अपने मन को चारु चकोर बना जिससे वह निशि-वासर श्रीकृष्णचन्द्र की ओर लगा रहे ।
`, audioDriveId: '', singer: '' },
  { id: '2-4-19', part: 2, chapter: 4, chapterSequence: 19, title: 'प्रीतम छबी नैनन बसी', author: 'रहीम', hindiText: `NO OUTSIDER CAN ENTER A CROWDED SARAI.

प्रीतम छवि नैनन बसी, पर छवि कहाँ समाय ।
भरी सराय रहीम लखि, पथिक आय फिर जाय ।।
`, meaning: `प्रियतम की प्रभा नयनों में बसी है। दूसरी प्रभा कहां समावे ? रहीम कहते हैं कि सराय को भरी हुई देखकर मुसाफिर आता है लौट जाता है।
`, audioDriveId: '', singer: '' },
  { id: '2-4-20', part: 2, chapter: 4, chapterSequence: 20, title: 'जिन खोजा तिन पाइया', author: 'कबीर', hindiText: `NECESSITY OF ACTIVE EFFORT.

जिन खोजा तिन पाइया, गहरे पानी पैठ ।
हौं बौरी चूड़न डरी, रही किनारे बैठ ।।
`, meaning: `जिन्होंने गहरे पानी में प्रवेश कर खोजा, उन्होंने पाया । मैं पगली डूबने से डर गई, और किनारे पर ही बैठी रही ।
`, audioDriveId: '', singer: '' },
  { id: '2-4-21', part: 2, chapter: 4, chapterSequence: 21, title: 'रक़ीबोने लिखाई है रपटे', author: 'अकबर', hindiText: `CARE NOT FOR THE DERISION OF THE WORLD.

रक़ीबों ने लिखाई हैं रपटें, जा जा के थाने में ।
कि अकबर नाम लेता है, खुदा का इस ज़माने में ।।
`, meaning: `रकीचों ने थाने में जा जा कर रपटें लिखाई हैं कि अकबर इस ज़माने में भी खुदा का नाम लेता है।
`, audioDriveId: '', singer: '' },
  { id: '2-4-22', part: 2, chapter: 4, chapterSequence: 22, title: 'तुलसी ऐसे नामको', author: 'तुलसीदास', hindiText: `MEDITATE ON GOD'S NAME WITH PLEASURE OR DISPLEASURE.

तुलसी ऐसे नाम को, रीझि भजो या खीझि ।
खेत पड़े बीया जमे, उलटि पड़े या सीधि ।।
`, meaning: `तुलसीदास कहते हैं, ऐसे नाम को रीझ कर या खीजकर किसी भी प्रकार भजो । खेत में पड़ा हुआ बीज जब जमता है, तब उल्टा पड़ा हो या सीधा-यह विचार निरर्थक है।
`, audioDriveId: '', singer: '' },
  { id: '2-4-23', part: 2, chapter: 4, chapterSequence: 23, title: 'भाव कुभाव अनख आलस', author: 'तुलसीदास', hindiText: `UTTER THE NAME OF GOD WITH FAITH, WITHOUT FAITH, IN IDLENESS OR EVEN WITH HATRED.

भाव कुभाव अनख आलस हूँ ।
नाम जपत मंगल दिसि दस हूँ ।।
भाव सहित शंकर जप्यौ, जपि कुभाव मुनि बालि ।
कुम्भकरन सालस जप्यौ, अनख सहित दसमाथ ।।
`, meaning: `भाव, कुभाव, असूया, और आलस्य से भी नाम जपने से दसों दिशाओं में मंगल होता है। जैसे शंकर ने भावसहित नाम को जपा । वाल्मीकि ने और बालि ने कुभाव से या अभाव से जपा। कुम्भकर्ण ने आलस्य से और दशमुख ने असूया से जपा ।
`, audioDriveId: '', singer: '' },
  { id: '2-4-24', part: 2, chapter: 4, chapterSequence: 24, title: 'रहिमन गली है साँकरी', author: 'रहीम', hindiText: `LEAVE AWAY ALL EGOISM AND FALSE SENSE OF HONOUR.

रहिमन गली है साँकरी, दूजो ना ठहराहि ।
आपु अहे तो हरि नहीं, हरि तो आपुन नाहिं ।।
पीया चाहै प्रेम-रस, राखा चाहै मान ।
एक म्यान में दो खड़ग, देखा सुना न कान ॥
`, meaning: `रहीम कहते हैं कि गली तंग है (इसमें) दूसरा नहीं ठहरता । आप हैं तो हरि नहीं; हरि हैं तो आप नहीं । प्रेम-रस पीना चाहते हो; फिर मान भी रखना चाहते हो । एक म्यान में दो खङ्ग रहते न (आखों से) देखा, न कानों से सुना ।
`, audioDriveId: '', singer: '' },
  { id: '2-4-25', part: 2, chapter: 4, chapterSequence: 25, title: 'सर्गुणकी सेवा करो', author: 'कबीर', hindiText: `MEDITATE ON THAT WHICH IS BEYOND BOTH SAGUNA AND NIRGUNA.

सर्गुण की सेवा करो, निर्गुण का करु ज्ञान ।
निर्गुन सर्गुन के परे, तहें हमारा ध्यान ।।
`, meaning: `सगुण की सेवा करो । निर्गुण का ज्ञान लो । जो निर्गुण और सगुण के परे है, उस पर ही हमारा ध्यान है।
`, audioDriveId: '', singer: '' },
  { id: '2-4-26', part: 2, chapter: 4, chapterSequence: 26, title: 'कबिरा धारा अगमकीं', author: 'कबीर', hindiText: `REAL MEDITATION IS MEDITATION IN GOD'S PRESENCE.

कविरा धारा अगम की, सद्गुरु दई लखाय ।
उलटि ताहि सुमिरन करौ, स्वामी संग मिलाय ।।
`, meaning: `कबीर कहते हैं कि सद्गुरु ने अगम की धारा दिखला दी । उसको उलट कर स्वामी का साथ मिलाकर स्मरण करो ।
`, audioDriveId: '', singer: '' },
  { id: '2-4-27', part: 2, chapter: 4, chapterSequence: 27, title: 'लाख कोस जो गुरु बसै', author: 'कबीर', hindiText: `REMEMBRANCE OF GOD'S NAME WITH THE HELP OF THE ANAHAT SOUND.

लाख कोस जो गुरु बसै, दीजै सुरत पठाय ।
सबद तुरय असवार है, पल पल आवे जाय ।।
`, meaning: `लाख कोस गुरु के दूर रहने पर भी सुरत को उसके पास भेज दीजिए । तुर्या में प्रतीत होने वाले शब्द पर या शब्द तुरंगम पर सवार होकर वह क्षण क्षण आवागमन करेगी ।
`, audioDriveId: '', singer: '' },
  { id: '2-4-28', part: 2, chapter: 4, chapterSequence: 28, title: 'सर सूखै पन्छी उड़', author: 'रहीम', hindiText: `THOU ART THE SOLE RESORT FOR ME, O GOD! AS THE LAKE FOR A FISH.

सर मूखै पञ्छी उड़ै, औरन सरन समाहिं ।
दीन मीन बिन पच्छ के, कहु रहीम कहँ जाहि ॥
`, meaning: `सरोवर सूख जाने पर पक्षी उड़ जाते हैं और अन्यत्र आश्रय लेते हैं। रहीम कहते हैं, पंखहीन बेचारा मत्स्य, कहो, कहाँ जाए ?
`, audioDriveId: '', singer: '' },
  { id: '2-4-29', part: 2, chapter: 4, chapterSequence: 29, title: 'बार बराबर बारि है', author: 'अज्ञात', hindiText: `SUPPLICATION TO GOD TO SAVE FROM IMMINENT DANGER.

बार बराबर बारि है, ता पर बहै बयार ।
रघुबर पार उतारहू, हमरी ओर निहार ।।
`, meaning: `नैया के किनारे बराबर पानी आगया है। उस पर भी हवा बहुत तेज चल रही है। हे रघुवर ! हम पर कृपा दृष्टि रखो और हमें (नदी के) पार उतारो ।
`, audioDriveId: '', singer: '' },
  { id: '2-4-30', part: 2, chapter: 4, chapterSequence: 30, title: 'एक भरोसो एक बल', author: 'तुलसीदास', hindiText: `A ONE-POINTED DEVOTION DEFIES THE STROKE OF THE GREATEST CALAMITY.

एक भरोसो, एक बल, एक आस विस्वास ।
एक राम घनश्याम हित, चातक तुलसीदास ॥
बरसि परुप पाहन पयद, पंख करौ टुक ट्रक ।
तुलसी परी न चाहिए, चतुर चातकहिं चूक ।।
उपल बरसि गरजत तरजि, डारत कुलिस कठोर ।
चितव कि चातक मेघ तजि, कबहुँ दूसरी ओर ॥
बध्यौ बधिक पौ पुन्यजल, उलटि उठाई चोंच ।
तुलसी चातक-प्रेम-पट, मरतहूँ लगी न खोंच ।।
`, meaning: `एक भरोसा, एक बल, एक आशा और एक विश्वास है। एक घनश्याम राम के लिए तुलसीदास चातक (हो गया है) । तुलसीदास कहते हैं कि चाहे पयद परुष पत्थर बरसा कर पंखों को खंड खंड कर दे, परन्तु चतुर चातक को भूल नहीं पड़नी चाहिए । चाहे मेघ बरसा दे, गर्जना कर के डरा दे और कठोर वज्र डाल दे, तब भी क्या चातक मेघ को छोड़ कर कभी दूसरी और देखेगा ? बधिक ने मारा, चातक पुण्यजल में गिर पड़ा। इतने पर भी उसने अपनी चोंच उलट कर उठा दी । तुलसीदास कहते हैं कि मरते समय भी चातक के प्रेमरूपी पट में खोंच नहीं लगी ।
`, audioDriveId: '', singer: '' },

  // --- Chapter 5 ---
  { id: '2-5-1', part: 2, chapter: 5, chapterSequence: 1, title: 'लिखा पढीकी बात नहीं', author: 'अज्ञात', hindiText: `INTUITION vs. INTELLECT.

लिखा पढ़ी की बात नहिं, देखा देखी बात ।
दुलहा दुलहन मिल गए, फीकी परी बरात ॥
`, meaning: `लिखा पढ़ी की बात नहीं है। देखा देखी की बात है । दुलहा-दुलहन मिल गए और बारात फीकी पड़ गई ।
`, audioDriveId: '', singer: '' },
  { id: '2-5-2', part: 2, chapter: 5, chapterSequence: 2, title: 'तुलसी या संसार को', author: 'तुलसीदास', hindiText: `SEEING, THEY CANNOT PERCEIVE; HEARING THEY CANNOT UNDERSTAND.

तुलसी या संसार को, भयो मोतियाविन्द ।
है नियरे सूझे नहीं, लानत ऐसी जिन्द ।।
`, meaning: `तुलसीदास कहते हैं कि इस संसार को मोतियाबिन्द हो गया है। निकट ही है पर दिखाई नहीं देता । ऐसी जिन्दगी को (सौ दफ़ा) धिकार है।
`, audioDriveId: '', singer: '' },
  { id: '2-5-3', part: 2, chapter: 5, chapterSequence: 3, title: 'हाथ छुड़ाये जात हो', author: 'सूरदास', hindiText: `INTERNAL PERCEPTION.

हाथ छुड़ाए जात हौ, निवल जानि के मोहिं ।
हिरदय से जब जाहुगे, सत्रल बदौंगो तोहि ।।
`, meaning: `मुझ को निर्बल जान अपना हाथ छुड़ाकर जाते हो । जब हृदय से जाओगे, तब तुम को सबल कहूँगा (मानूँगा) ।
`, audioDriveId: '', singer: '' },
  { id: '2-5-4', part: 2, chapter: 5, chapterSequence: 4, title: 'जो देखे सो कहै नहीं', author: 'कबीर', hindiText: `INTER-INCOMMUNICATIVENESS OF SENSES.

जो देखे सो कहै नहिं, कहै सो देखे नाहिं ।
सुनै सो समझात्रै नहीं, रसना दृग श्रुति काहिं ।।
`, meaning: `जो देखता है, वह कहता नहीं; जो कहता है, वह देखता नहीं। जो सुनता है वह समझाता नहीं । रसना, दृग, श्रुति इन में से कौन किस को समझाता है !
`, audioDriveId: '', singer: '' },
  { id: '2-5-5', part: 2, chapter: 5, chapterSequence: 5, title: 'जो गूंगे के सैन को', author: 'कबीर', hindiText: `A SPIRITUAL REALISER ALONE CAN UNDERSTAND THE SIGNS OF A SPIRITUAL REALISER.

जों गूँगे के सैन को, गूँगा ही पहिचान ।
त्यों ज्ञानी के सैन को, ज्ञानी होय सो जान ॥
`, meaning: `जिस प्रकार गूँगे के संकेत को गूँगा ही पहचानता है, उसी प्रकार ज्ञानी के संकेत को ज्ञानी ही जानता है।
`, audioDriveId: '', singer: '' },
  { id: '2-5-6', part: 2, chapter: 5, chapterSequence: 6, title: 'हीरा तहाँ न खोलिये', author: 'कबीर', hindiText: `ONE SHOULD NOT OPEN ONE'S DIAMOND BEFORE A VEGETABLE-SELLER.

हीरा तहाँ न खोलिये, जहँ कुँजरन की हाट ।
सहजहिं गाँठी बाँधि कै, लगौ आपनी बाट ।।
`, meaning: `जहाँ कुँजड़ों की हाट हो, वहाँ हीरा मत खोलो । बिना सोचे गाँठ में बाँधकर अपनी बाट लग जाओ ।
`, audioDriveId: '', singer: '' },
  { id: '2-5-7', part: 2, chapter: 5, chapterSequence: 7, title: 'गुण इन्द्री सहजै गये', author: 'कबीर', hindiText: `BY THE HELP OF MY SPIRITUAL TEACHER, THE NAME HAS SPRUNG UP IN ME; WHY SHOULD I BABBLE ANY LONGER?

गुण इन्द्री सहजै गए, सतगुरु करी सहाय ।
घट में नाम प्रगट भया, बकि बकि मरै बलाय ॥
`, meaning: `सद्गुरु ने सहायता की जिससे गुण और इन्द्रियों के व्यापार आसानी से स्थगित हो गये । अन्तःकरण में नाम प्रकट हो गया । सब आपत्तियों का बक बक करके अन्त हो गया । अब वक-चक करके मेरी बलाय मरे !
`, audioDriveId: '', singer: '' },
  { id: '2-5-8', part: 2, chapter: 5, chapterSequence: 8, title: 'हाड़ सूखि पिञ्जर भए', author: 'अज्ञात', hindiText: `THE RESOUNDING OF GOD'S NAME THROUGH EVERY HAIR OF THE BODY.

हाड़ सूखि पिंजर भए, रगें सूखि भइँ तार ।
रोम रोम सुर उठत है, बाजत नाम तिहार ।।
`, meaning: `हाड़ सूखकर पिञ्जर हो गए। रगें सूखकर तार हो गई । रोम रोम से स्वर उठता है। हे ईश्वर तुम्हारा नाम बज रहा है ।
`, audioDriveId: '', singer: '' },
  { id: '2-5-9', part: 2, chapter: 5, chapterSequence: 9, title: 'सब बाजे हिरदे बजे', author: 'कबीर', hindiText: `I HAVE NOW FOUNDOUT WITHIN ME THE MUSICIAN, FROM WHOM PROCEEDS MANIFOLD MUSIC.

सब बाजे हिरदे बजैं, प्रेम पखावज तार ।
मन्दिर ढूँढ़त को फिरै, मिल्यो बजावनहार ।।
`, meaning: `प्रेम होने के कारण पखावज, तन्त्री आदि सब प्रकार के वाद्य अन्तःकरण में बज रहे हैं। सत्र मन्दिरों को ढूँढ़ता कौन फिरे ? बजवैया अन्दर ही मिल गया है।
`, audioDriveId: '', singer: '' },
  { id: '2-5-10', part: 2, chapter: 5, chapterSequence: 10, title: 'अलख पुरुष निर्वाण है', author: 'कबीर', hindiText: `CONSTANT SERVICE AND WATCHFUL HUMILITY ALONE LEAD ONE TO THE REALISATION OF THE PERSON AND THE LOVE OF SHABDA.

अलख पुरुप निर्वाण है, वाको लखे न कोय ।
बाको तो वाही लखै, जो उस घर का होय ।।
घर का भया तो क्या भया, तत्रत तरे का होय ।
तत्रत तरे का सूरमा, सबद सनेही सोय ।।
`, meaning: `अलक्ष्य पुरुप निर्वाण है - उसको कोई नहीं देख सकता । उसको तो वही देख सकता है जो उस घर का है। केवल घर का हुआ तो हुआ, तख्त तले का निवासी हो । तख्त के नीचे वाला ही वीर है; वही शब्द का प्रेमी होता है ।`, audioDriveId: '', singer: '' },
  { id: '2-5-11', part: 2, chapter: 5, chapterSequence: 11, title: 'सबद सबद का अन्तरा', author: 'कबीर', hindiText: `THE METAPHYSICAL AND EPISTEMOLOGICAL SIGNIFICANCE OF SHABDA.

सबद सबद का अन्तरा, सबद सबद का सीर ।
सबद सबद का खोजना, सबद सबद का पीर ।।
`, meaning: `शब्द शब्द का गर्भ है। शब्द शब्द का सिर है। शब्द ही शब्द का अन्वेषण है। शब्द ही शब्द का स्वामी है।
`, audioDriveId: '', singer: '' },
  { id: '2-5-12', part: 2, chapter: 5, chapterSequence: 12, title: 'मकडी चढती तारसे', author: 'अज्ञात', hindiText: `THE EVER-ASCENDING LADDER OF SHABDA

मकड़ी चढ़ती तार से, चढ़कै उतरी जाय ।
सन्त चढ़त है शब्द से, चढ़त चढ़त चढ़ जाय ।।
`, meaning: `मकड़ी अपने तंतु से चढ़ती है; पर चढ़कर उतर जाती है। सन्त शब्द से चढ़ता है; पर चढ़ते ही चढ़ते जाता है ।
`, audioDriveId: '', singer: '' },
  { id: '2-5-13', part: 2, chapter: 5, chapterSequence: 13, title: 'बूंद समानी बूंद में', author: 'अज्ञात', hindiText: `COALESCENCE OF SOUND AND FORM EXPERIENCE.

बूँद समानी बूँद में, सो जाने सब कोइ ।
बूँद समानी सबद में, जानै विरला कोइ ।।
`, meaning: `बूँद बूँद में समाती है, यह सब कोई जानता है; पर बूँद शब्द में समाती है, इस को विरला ही कोई जानता है।
`, audioDriveId: '', singer: '' },
  { id: '2-5-14', part: 2, chapter: 5, chapterSequence: 14, title: 'हरि दरिया सूभर भरा', author: 'कबीर', hindiText: `IN THE SEA OF GOD, THE SAINT IS AN OYSTER-SHELL, IN WHICH IS BORN THE PEARL OF EXPERIENCE.

हरि दरिया सूभर भरा, साधो का घट सीप ।
ता में मोती नीपजे, चढ़े देसावर दीप ।।
`, meaning: `चारों ओर भरे हुए हरि-रूप समुद्र में साधु का घट सीप है । उसमें (विन्दुरूप या नाम रूप) मोती उत्पन्न होता है, जिसका मोल अन्य देशों में और अन्य द्वीपों में चढ़ता है।`, audioDriveId: '', singer: '' },
  { id: '2-5-15', part: 2, chapter: 5, chapterSequence: 15, title: 'सुन्न मंडलमें घर', author: 'कबीर', hindiText: `EVERY HAIR OF THE BODY HAS VERITABLY BECOME A LAMP OF GOD.

सुन्न मण्डल में घर किया, बाजे शब्द रसाल ।
रोम रोम दीपक भया, प्रगटे दीन दयाल ।।
`, meaning: `गगन मण्डल में घर किया । रसाल शब्द बजने लगे रोम रोम दीपक हो गया और दीन दयाल प्रकट हो गए ।
`, audioDriveId: '', singer: '' },
  { id: '2-5-16', part: 2, chapter: 5, chapterSequence: 16, title: 'गगन गरजि बरसै अमी', author: 'कबीर', hindiText: `KABIR BATHES WHEN THE STORM OF THUNDER AND LIGHTNING SENDS DOWN AMBROSIA.

गगन गरजि बरसे अमी, बादल गहिर गभीर ।
चहुँ दिसि दमके दामिनी, भीजत दास कवीर ।।
`, meaning: `आकाश में घने बादल गम्भीरता से गरजते हैं और अमृत रस को बरसाते हैं। चारों दिशाओं में बिजली दमकती है और कवीरदास भीग रहे हैं।
`, audioDriveId: '', singer: '' },
  { id: '2-5-17', part: 2, chapter: 5, chapterSequence: 17, title: 'धरनी पलक परै नहीं', author: 'धरनीदास', hindiText: `THE INSATIABILITY OF THE THIRST FOR THE ENJOYMENT OF GOD'S SPLENDOUR.

धरनी पलक परे नहीं, पिय की झलक सुहाय ।
पुनि पुनि पीवत परम रस, तत्रहूं प्यास न जाय ॥
`, meaning: `(१) धरनीदास कहते हैं कि पलक मुँदते नहीं क्योंकि प्रिय की झलक अति शोभन है। परम प्रेम-रस बार बार पीता हूँ, तब भी प्यास नहीं बुझती ।
(२) पृथ्वी की ओर पलक नहीं झुकते, (क्यों कि) प्रिय की झलक अतिशोभन है । परम प्रेम-रस बार बार पीता हूँ, तब भी प्यास नहीं बुझती ।
`, audioDriveId: '', singer: '' },
  { id: '2-5-18', part: 2, chapter: 5, chapterSequence: 18, title: 'पिञ्जर प्रेम प्रकासिया', author: 'कबीर', hindiText: `SPEECH BECOMES FRAGRANT IN CONSEQUENCE OF THE ECSTATIC STATE.

पिञ्जर प्रेम प्रकासिया, अन्तर भया उजास ।
सुख करि सूती महल में, बानी फूटी बास ।।
`, meaning: `पिञ्जर में प्रेम प्रकाशित हुआ। अन्तर में उजाला हो गया । (जीवात्मा) महल में सुख से सो गई । वाणी में बास फूट पड़ा ।
`, audioDriveId: '', singer: '' },
  { id: '2-5-19', part: 2, chapter: 5, chapterSequence: 19, title: 'सुन्न सहज मन सुमिरते', author: 'अज्ञात', hindiText: `RESIGN YOURSELF TO THE PERSON WHO MANIFESTS HIMSELF IN THE LIGHT OF MEDITATION.

सुन्न सहज मन सुमिरते, प्रगट भई इक ज्योत ।
ताहि पुरुप, बलिहार में, निरालम्ब जो होत ।।
`, meaning: `निर्विकल्प सहज मन से स्मरण करते करते एक ज्योति प्रकट हो गई । उसमें एक पुरुप है, जो निरालम्ब है। उसकी मैं बलिहारी हूँ ।`, audioDriveId: '', singer: '' },
  { id: '2-5-20', part: 2, chapter: 5, chapterSequence: 20, title: 'लागी लागी सब कहै', author: 'अज्ञात', hindiText: `ATONEMENT MEANS TRANSPARENCY OF VISION.

लागी लागी सत्र कहैं, लागी बड़ी बलाय ।
लागी वही सराहिये, आरपार हो जाय ।।
`, meaning: `लग गई लग गई सत्र कहते हैं, पर लगन एक बड़ी भूत-बाधा (या संचार) है। लगन तो वही प्रशस्य है, जिससे पारदर्शित्व प्राप्त हो ।`, audioDriveId: '', singer: '' },
  { id: '2-5-21', part: 2, chapter: 5, chapterSequence: 21, title: 'हृदया भीतर आरसी', author: 'कबीर', hindiText: `THE SEEING OF THE FACE IN THE MIRROR OF THE HEART.

हृदया भीतर आरसी, मुख तो देखे नाहिं ।
मुख तो तब ही देखिहौ, दिल की दुविधा जाहि ।।
`, meaning: `हृदय के भीतर आरसी है। उसमें तुमने अपना) मुख नहीं देखा । मुख तो तभी देखोगे जब दिल की दुविधा चली जाएगी ।
`, audioDriveId: '', singer: '' },
  { id: '2-5-22', part: 2, chapter: 5, chapterSequence: 22, title: 'पिय को हेरन मैं गयी', author: 'अज्ञात', hindiText: `TO DISCOVER GOD IS TO BE LOST IN HIM.

पिय को हेरन मैं गई, हेरत गई हेराय ।
पिय को पहिचाना नहीं, पिय घट में गया समाय ॥
`, meaning: `मैं प्रिय को हेरने गई । हेरते हेरते स्वयं ही हेरा (या हिरा) गई। मैंने प्रिय को पहिचाना नहीं । प्रिय घट में समा गया ।
`, audioDriveId: '', singer: '' },
  { id: '2-5-23', part: 2, chapter: 5, chapterSequence: 23, title: 'मनुवा मेरो मरि गयो', author: 'कबीर', hindiText: `"STOP A WHILE, O KABIR!" SAYS GOD; KABIR LISTENS NOT AND MOVES ON.

मनुवा मेरो मरि गयो, दुर्बल भयो शरीर ।
पीछे पीछे हरि फिरें, कहत कबीर कवीर ।।
`, meaning: `मेरा मन मर गया और शरीर दुर्बल हो गया । "कवीर ! कवीर !” कहते हरि पीछे-पीछे फिरते हैं ।
`, audioDriveId: '', singer: '' },
  { id: '2-5-24', part: 2, chapter: 5, chapterSequence: 24, title: 'कबिरा देखा एक अङ्ग', author: 'कबीर', hindiText: `KABIR HAS TOUCHED GOD; HE HAS ATTAINED TO ONLY A FRAGMENT OF EXPERIENCE.

कविरा देखा एक अंग, महिमा कही न जाय ।
तेजपुञ्ज परसाधनी, नैनों रहा समाय ।।
`, meaning: `कबीर कहते हैं कि मैने केवल एक अंग देखा । उसकी भी महिमा कही नहीं जाती। तेज-पुञ्ज धनी को मैंने स्पर्श किया । वह नयनों में समा रहा है।`, audioDriveId: '', singer: '' },
  { id: '2-5-25', part: 2, chapter: 5, chapterSequence: 25, title: 'सुरत उड़ानी गगनको', author: 'कबीर', hindiText: `THE SELF FLIES TO THE HIGHEST PINNACLE TO RIVET ITSELF ON THE FEET OF GOD.

सुरत उड़ानी गगन को, चरन विलम्ची जाय ।
सुख पाया, साहेब मिला, आनन्द उर न समाय ।।
`, meaning: `सुरत ब्रह्मरन्ध्र को उड़कर चरणावम्बी हो गई। सुख प्राप्त हुआ; साहब मिल गया। आनन्द हृदय में समाता नहीं है ।
`, audioDriveId: '', singer: '' },
  { id: '2-5-26', part: 2, chapter: 5, chapterSequence: 26, title: 'बड़ा लुफ्त है यार इश्कमें', author: 'मन्सूर', hindiText: `THERE IS EXCRUCIATING PAIN, BUT AT THE SAME TIME THERE IS THE VISION OF GOD.

बड़ा लुत्फ़ है यार इश्क में, मार भी है और प्यार भी है।
सूली पर मन्सूर खड़ा है, दार भी है दीदार भी है ।।
`, meaning: `यार इश्क में बड़ा मज़ा है। मार भी है और प्यार भी है। मन्सूर सूली पर खड़ा है। प्राणदण्ड भी है और प्रिय-दर्शन भी है।`, audioDriveId: '', singer: '' },
  { id: '2-5-27', part: 2, chapter: 5, chapterSequence: 27, title: 'दी गई मन्सूर को सूली', author: 'मन्सूर', hindiText: `IDENTITY CEASES AS SOON AS IT IS ASSERTED.

दी गई मन्सूर को सूली, अदब के तर्क पर ।
था अनल हक़ हक़ मगर यक लफ्ज़े गुस्ताखाना था ।
`, meaning: `अदब छोड़ने से मन्सूर को सूली पर चढ़ना पड़ा । वास्तव में वह हक़ ही था। पर एकही पद (अनलहक कहने) से उसकी बेअद्दी प्रकट हो गई ।`, audioDriveId: '', singer: '' },
  { id: '2-5-28', part: 2, chapter: 5, chapterSequence: 28, title: 'रहिमन बात अगम्य की', author: 'रहीम', hindiText: `IGNORANDO COGNOSCI; COGNOSCENDO IGNORARI.

रहिमन बात अगम्य की, कहन सुनन की नाहिं ।
जे जानत ते कहत नहिं, कहत ते जानत नाहिं ।।
कविरा जब हम गावते, तब जाना गुरु नाहिं ।
अब गुरु दिल में देखिया, गावन को कछु नाहिं ।।
`, meaning: `रहीम कहते हैं कि अगम्य की बात कहने सुनने की नहीं । जो जानते हैं, वे कहते नहीं; जो कहते हैं, वे जानते नहीं ।
कबीर कहते हैं कि जब हम गाते थे, तब गुरु को नहीं जाना था । अब गुरु को हृदय में देख लिया, तब गाने को कुछ नहीं रहा ।
`, audioDriveId: '', singer: '' },
  { id: '2-5-29', part: 2, chapter: 5, chapterSequence: 29, title: 'बड़े बड़ाई ना करें', author: 'अज्ञात', hindiText: `THE DIAMOND DOES NOT PROCLAIM ITS PRICE.

बड़े बड़ाई ना करें, बड़ो न बोलें बोल ।
रहिमन हीरा कब कहै, लाख हमारो मोल ।।
`, meaning: `बड़े (अपनी) बड़ाई नहीं करते । बड़े बोल नहीं बोलते । रहीम कहते हैं कि हीरा कब कहता है कि मेरा मोल लाख (टका) है।
`, audioDriveId: '', singer: '' },
  { id: '2-5-30', part: 2, chapter: 5, chapterSequence: 30, title: 'कबिरा खड़ा बजार में दोनों', author: 'कबीर', hindiText: `THE SAINT MUST STAND UNCONCERNED.

कविरा खड़ा बज़ार में, दोनों दीन कि खैर ।
ना काहू से दोस्ती, ना काहू से बैर ।।
`, meaning: `कबीर बाज़ार में खड़ा है और दोनों धर्मों का क्षेम चाहता है। न किसी से उसकी दोस्ती है और न किसी से वैर है।
`, audioDriveId: '', singer: '' },
  { id: '2-5-31', part: 2, chapter: 5, chapterSequence: 31, title: 'मेरा मुझ में कुछ नहीं', author: 'कबीर', hindiText: `ATTITUDE OF ABSOLUTE RESIGNATION TO GURU AS TO GOD.

मेरा मुझ में कुछ नहीं, जो कुछ है सो तोर ।
तेरा तुझ को सौंपते, क्या लागत है मोर ।।
`, meaning: `मुझ में मेरा कुछ भी नहीं है। जो कुछ है सब तेरा है। तेरा तुझे सुपुर्द करते मेरा क्या लगता है ?`, audioDriveId: '', singer: '' },
  { id: '2-5-32', part: 2, chapter: 5, chapterSequence: 32, title: 'तरुवर फल नहीं खात है', author: 'रहीम', hindiText: `SPIRITUAL ALTRUISM.

तरुवर फल नहिं खात हैं, सरवर पियहिं न पान ।
कह रहीम पर काज हित, सम्पति सँचहिं सुजान ॥
`, meaning: `तरुवर (अपना) फल नहीं खाते । सरोवर (अपना) पानी नहीं पीते । रहीम कहते हैं कि सुज्ञ लोग परोपकार के लिए ही सम्पत्ति का संचय करते हैं ।
`, audioDriveId: '', singer: '' },
  { id: '2-5-33', part: 2, chapter: 5, chapterSequence: 33, title: 'कबिरा हम गुरुरस पिया', author: 'कबीर', hindiText: `I HAVE DRUNK THE CUP OF NECTAR TO THE VERY LAST DROP.

कविरा हम गुरुरस पिया, बाकी रही न छाक ।
पाका कलस कुम्हार का, बहुरि न चढ़सी चाक ।।
`, meaning: `कबीर कहते हैं कि हमने गुरु रस पिया। अब इच्छा शेप नहीं रही । कुम्हार का कलश पक गया । अब चाक पर नहीं चढ़ेगा ।
`, audioDriveId: '', singer: '' },
  { id: '2-5-34', part: 2, chapter: 5, chapterSequence: 34, title: 'नोन मला पानी मिला', author: 'कबीर', hindiText: `THE STATE OF JIVANMUKTI.

नोन गला पानी मिला, बहुरि न भरि है गौन ।
सुरत शब्द मेला भया, काल रहा गहि मौन ।।
`, meaning: `नमक गल कर पानी में मिल गया। फिर बोरी नहीं भरी जायगी । सुरत और शब्द का मेल हो गया तब काल ने मौन धारण कर लिया ।`, audioDriveId: '', singer: '' },
  { id: '2-5-35', part: 2, chapter: 5, chapterSequence: 35, title: 'हद हद पर सब ही गया', author: 'कबीर', hindiText: `THE PERAS AND THE APEIRON.

हद हद पर सब ही गया, बेहद गया न कोय ।
बेहद के मैदान में, रमै कवीरा सोय ।।
`, meaning: `हद हद तक सभी गए । बेहद कोई नहीं गया । पर वह कवीर बेहद के मैदान में रम रहा है।
`, audioDriveId: '', singer: '' },
];

// --- CHAPTER TITLES MAPPING ---
export const CHAPTER_TITLES = {
  1: "1. Incentives to Spiritual Life",
  2: "2. The Necessity of Moral Preparation",
  3: "3. The Relation of God to Saints",
  4: "4. The Beginnings of the Pilgrimage",
  5: "5. The Highest Ascent"
};

// --- HELPER FUNCTIONS ---

export const getItemsByChapter = (part: 1 | 2, chapter: number) => {
  return PARMARTH_SOPAN_DATA
    .filter(item => item.part === part && item.chapter === chapter)
    .sort((a, b) => a.chapterSequence - b.chapterSequence);
};

export const getItemById = (id: string) => {
  return PARMARTH_SOPAN_DATA.find(item => item.id === id);
};

export const getAuthorsByPart = (part: 1 | 2) => {
  const authors = new Set(
    PARMARTH_SOPAN_DATA
      .filter(item => item.part === part)
      .map(item => item.author)
      .filter(Boolean)
  );
  return Array.from(authors).sort((a, b) => a.localeCompare(b, 'hi'));
};

export const getItemsByAuthorAndPart = (author: string, part: 1 | 2) => {
  return PARMARTH_SOPAN_DATA
    .filter(item => item.author === author && item.part === part)
    .sort((a, b) => a.title.localeCompare(b.title, 'hi'));
};

export const getAlphabeticalItemsByPart = (part: 1 | 2) => {
  return PARMARTH_SOPAN_DATA
    .filter(item => item.part === part)
    .sort((a, b) => a.title.localeCompare(b.title, 'hi'));
};

export const getStaticSectionById = (id: string) => {
  return PARMARTH_SOPAN_STATIC_SECTIONS.find(section => section.id === id);
};