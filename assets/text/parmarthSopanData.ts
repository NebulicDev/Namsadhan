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
    content: `1. "I am grateful to the Organisers of this function for asking me to associate myself with the publication of Dr. Ranade's Paramartha Sopan..."

2. "Paramartha Sopana may be translated either as the Ascent to the Divine, or the Way to Perfection..."`
  },
  {
    id: 'analytical_toc',
    title: 'Analytical Table of Contents',
    type: 'frontmatter',
    content: `PART ONE: PADAS
1. Incentives to Spiritual Life
2. The Necessity of Moral Preparation
3. The Relation of God to Saints
4. The Beginnings of the Pilgrimage
5. The Highest Ascent

PART TWO: DOHAS
(Follows the same five-fold division)`
  },
  {
    id: 'intro_padas',
    title: 'General Introduction to Padas',
    type: 'frontmatter',
    content: `If we make a comparative study of the Philosophies and Religions of the world... we shall see that there are certain broad characteristics common to the Pathway...

These might for convenience sake be summarised under five heads: Incentives, Moral Preparation, Relation of God to Saints, Beginnings of Pilgrimage, and The Highest Ascent.`
  },
  {
    id: 'intro_dohas',
    title: 'General Introduction to Dohas',
    type: 'frontmatter',
    content: `In the first part of our work, we have seen how an aspirant rises step by step... The five chapters in the present part on the Dohas constitute the microcosm with the same head-topics seriatim...`
  },
  {
    id: 'notes_part1',
    title: 'Notes to Part I: Padas',
    type: 'backmatter',
    content: `(Notes and annotations for the Padas will appear here...)`
  },
  {
    id: 'notes_part2',
    title: 'Notes to Part II: Dohas',
    type: 'backmatter',
    content: `(Notes and annotations for the Dohas will appear here...)`
  },
  {
    id: 'appendix_1',
    title: 'Appendix I: Saint Biographies',
    type: 'backmatter',
    content: `परमार्थसोपानस्थ संत कवियोंका आलोचनात्मक इतिहास by स्वर्गीय पं. सुखदेव बिहारी मिश्र`
  },
  {
    id: 'appendix_2',
    title: 'Appendix II: Rhetoric',
    type: 'backmatter',
    content: `Contribution to the Science of Rhetoric in Paramartha Sopana.`
  },
];

// --- 2. MASTER DATA (Full 200 Items) ---

export const PARMARTH_SOPAN_DATA: SopanItem[] = [
  // ================= PART 1: PADAS (100) =================
  
  // --- Chapter 1 ---
  { id: '1-1-1', part: 1, chapter: 1, chapterSequence: 1, title: 'धोखे ही धोखे डहकायो', author: 'सूरदास', 
    hindiText: `1. FROM ILLUSION TO ILLUSION.
    
धोखे ही धोखे डहकायो । समुझि न परी विपय-रस गीध्यो हरि-हीरा घर माँझ गँवायो || टे॥ ज्यों कुरंग जल देखि अवनिकों प्यास न गई दसौं दिसि धायो । जनम जनम बहु करम किए हैं तिन में आपुन आपु बँधायो ॥१॥ ज्यों सुक सेमर-फल-आसा लगि निसि बासर हठि चित्त लगायो । रीतौ पच्यौ जबै फल चाख्यो उड़ि गयो तूल ताँवरो आयो ॥२॥ ज्यों कपि डोरि बाँधि बाजीगर कनकन कौं चौहटै नचायो । सूरदास भगवन्त-भजन बिनु काल व्याल पै आप खवायो ॥३॥
`, meaning: `(मैं) धोखे ही धोखे से ठगा जाता रहा । बात समझ में न आई । विषय-रस में फँस गया । घर के मध्य हरिरूपी हीरा खो दिया । अवनि को जल समझ कर कुरंग के समान दसों दिशाओं में दौड़ता रहा; किन्तु प्यास नहीं बुझी । जन्म जन्म में अनेक कर्म किये हैं । उनमें अपने आपको बँधा दिया। शुक की तरह सेमर के फल की आशा में लग कर रात दिन हठ करके फल पर चित्त लगाया; किन्तु जब फल पर चोंच लगाई, तो तूल उड़ गया। फल खाली पड़ गया और संताप हो गया । जैसे बाजीगर कपि को डोरीसे बाँध कर कण-कण के लिये चौहटे पर नचाता है, उसी प्रकार मैं नचाया गया । सूरदास कहते हैं कि भगवान के भजन के बिना अपने को काल रूपी व्याल का भक्ष्य बना दिया ।
`, audioDriveId: '', singer: '' },
  { id: '1-1-2', part: 1, chapter: 1, chapterSequence: 2, title: 'केहि समुझावों सब जग अन्धा', author: 'कबीर', hindiText: `केहि समुझावों सब जग अन्धा...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-1-3', part: 1, chapter: 1, chapterSequence: 3, title: 'मुसाफिर सोता है बेहोस', author: 'कृष्णानंद', hindiText: `मुसाफिर सोता है बेहोस...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-1-4', part: 1, chapter: 1, chapterSequence: 4, title: 'केशव कहि न जाय', author: 'तुलसीदास', hindiText: `केशव कहि न जाय...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-1-5', part: 1, chapter: 1, chapterSequence: 5, title: 'ऊधो धनि तुम्हरो बेवहार', author: 'सूरदास', hindiText: `ऊधो धनि तुम्हरो बेवहार...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-1-6', part: 1, chapter: 1, chapterSequence: 6, title: 'कीजै प्रभु अपने बिरदकी लाज', author: 'सूरदास', hindiText: `कीजै प्रभु अपने बिरद की लाज...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-1-7', part: 1, chapter: 1, chapterSequence: 7, title: 'शंकर रामरूप अनुरागे', author: 'तुलसीदास', hindiText: `शंकर रामरूप अनुरागे...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-1-8', part: 1, chapter: 1, chapterSequence: 8, title: 'ममता तू न गई मेरे मन तें', author: 'तुलसीदास', hindiText: `ममता तू न गई मेरे मन तें...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-1-9', part: 1, chapter: 1, chapterSequence: 9, title: 'जा दिन मन-पंछी उड़ि जैहे', author: 'सूरदास', hindiText: `जा दिन मन-पंछी उड़ि जैहे...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-1-10', part: 1, chapter: 1, chapterSequence: 10, title: 'क्या तन माँजता रे', author: 'प्रभुदास', hindiText: `क्या तन माँजता रे...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-1-11', part: 1, chapter: 1, chapterSequence: 11, title: 'बहुरि नहिं आवना या देस', author: 'कबीर', hindiText: `बहुरि नहिं आवना या देस...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-1-12', part: 1, chapter: 1, chapterSequence: 12, title: 'दिवाने मन भजन बिना', author: 'कबीर', hindiText: `दिवाने मन भजन बिना...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-1-13', part: 1, chapter: 1, chapterSequence: 13, title: 'करम गति टारै नाहि टरी', author: 'कबीर', hindiText: `करम गति टारै नाहि टरी...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-1-14', part: 1, chapter: 1, chapterSequence: 14, title: 'रे मन जनम अकारथ जात', author: 'सूरदास', hindiText: `रे मन जनम अकारथ जात...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-1-15', part: 1, chapter: 1, chapterSequence: 15, title: 'रे दिल गाफिल गफलत मत', author: 'कबीर', hindiText: `रे दिल गाफिल गफलत मत...`, meaning: ``, audioDriveId: '', singer: '' },

  // --- Chapter 2 ---
  { id: '1-2-1', part: 1, chapter: 2, chapterSequence: 1, title: 'छाँड़ि मन हरि-विमुखन को सङ्ङ्ग', author: 'सूरदास', hindiText: `छाँड़ि मन हरि-विमुखन को सङ्ङ्ग...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-2-2', part: 1, chapter: 2, chapterSequence: 2, title: 'अब मैं नाच्यों बहुत गुपाल', author: 'सूरदास', hindiText: `अब मैं नाच्यों बहुत गुपाल...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-2-3', part: 1, chapter: 2, chapterSequence: 3, title: 'सो काफिर जो बोलै काफ', author: 'दादू', hindiText: `सो काफिर जो बोलै काफ...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-2-4', part: 1, chapter: 2, chapterSequence: 4, title: 'मन लागो यार फकीरी में', author: 'कबीर', hindiText: `मन लागो यार फकीरी में...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-2-5', part: 1, chapter: 2, chapterSequence: 5, title: 'ब्राह्मण सो जो ब्रह्म पिछानै', author: 'चरनदास', hindiText: `ब्राह्मण सो जो ब्रह्म पिछानै...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-2-6', part: 1, chapter: 2, chapterSequence: 6, title: 'बिसर गई सब आप', author: 'नानक', hindiText: `बिसर गई सब आप...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-2-7', part: 1, chapter: 2, chapterSequence: 7, title: 'जाके प्रिय न राम-वैदेही', author: 'तुलसीदास', hindiText: `जाके प्रिय न राम-वैदेही...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-2-8', part: 1, chapter: 2, chapterSequence: 8, title: 'झीनी झीनी बीनी चदरिया', author: 'कबीर', hindiText: `झीनी झीनी बीनी चदरिया...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-2-9', part: 1, chapter: 2, chapterSequence: 9, title: 'जेहि जय होइ सो स्यन्दन', author: 'तुलसीदास', hindiText: `जेहि जय होइ सो स्यन्दन...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-2-10', part: 1, chapter: 2, chapterSequence: 10, title: 'करनी बिन कथनी इसी', author: 'चरनदास', hindiText: `करनी बिन कथनी इसी...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-2-11', part: 1, chapter: 2, chapterSequence: 11, title: 'सात्त्विक श्रद्धा धेनु सुहाई', author: 'तुलसीदास', hindiText: `सात्त्विक श्रद्धा धेनु सुहाई...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-2-12', part: 1, chapter: 2, chapterSequence: 12, title: 'पावन पर्वत बेद पुराना', author: 'तुलसीदास', hindiText: `पावन पर्वत बेद पुराना...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-2-13', part: 1, chapter: 2, chapterSequence: 13, title: 'गोपी सुनहु हरि सन्देस', author: 'सूरदास', hindiText: `गोपी सुनहु हरि सन्देस...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-2-14', part: 1, chapter: 2, chapterSequence: 14, title: 'ऊधो हमहि न जोग सिखैहै', author: 'सूरदास', hindiText: `ऊधो हमहि न जोग सिखैहै...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-2-15', part: 1, chapter: 2, chapterSequence: 15, title: 'सुनु मुनि तोहि कहउँ सहरोसा', author: 'तुलसीदास', hindiText: `सुनु मुनि तोहि कहउँ सहरोसा...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-2-16', part: 1, chapter: 2, chapterSequence: 16, title: 'नवधा भगति कहउँ तोहीँ पाहि', author: 'तुलसीदास', hindiText: `नवधा भगति कहउँ तोहीँ पाहि...`, meaning: ``, audioDriveId: '', singer: '' },

  // --- Chapter 3 ---
  { id: '1-3-1', part: 1, chapter: 3, chapterSequence: 1, title: 'कत जाइए रे घर लाग्यो रंगु', author: 'रामानन्द', hindiText: `कत जाइए रे घर लाग्यो रंगु...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-3-2', part: 1, chapter: 3, chapterSequence: 2, title: 'ऐसी आरति त्रिभुवन तारै', author: 'कबीर', hindiText: `ऐसी आरति त्रिभुवन तारै...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-3-3', part: 1, chapter: 3, chapterSequence: 3, title: 'सोइ सच्चिदानंद घनरामा', author: 'तुलसीदास', hindiText: `सोइ सच्चिदानंद घनरामा...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-3-4', part: 1, chapter: 3, chapterSequence: 4, title: 'सुनु गिरिजा हरिचरित सुहाये', author: 'तुलसीदास', hindiText: `सुनु गिरिजा हरिचरित सुहाये...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-3-5', part: 1, chapter: 3, chapterSequence: 5, title: 'जिन्हकै रही भावना जैसी', author: 'तुलसीदास', hindiText: `जिन्हकै रही भावना जैसी...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-3-6', part: 1, chapter: 3, chapterSequence: 6, title: 'कोई स्याम मनोहर ल्योरी', author: 'मीराबाई', hindiText: `कोई स्याम मनोहर ल्योरी...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-3-7', part: 1, chapter: 3, chapterSequence: 7, title: 'अब कैसे छूटे नाम रट लागी', author: 'रैदास', hindiText: `अब कैसे छूटे नाम रट लागी...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-3-8', part: 1, chapter: 3, chapterSequence: 8, title: 'काहे रे बन खोजन जाई', author: 'नानक', hindiText: `काहे रे बन खोजन जाई...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-3-9', part: 1, chapter: 3, chapterSequence: 9, title: 'तौ निबहै जन सेवक तेरा', author: 'दादू', hindiText: `तौ निबहै जन सेवक तेरा...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-3-10', part: 1, chapter: 3, chapterSequence: 10, title: 'नरहरि चंचल है मति मोरी', author: 'रैदास', hindiText: `नरहरि चंचल है मति मोरी...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-3-11', part: 1, chapter: 3, chapterSequence: 11, title: 'मैं मझधारा का माँझी हूँ', author: 'अज्ञात', hindiText: `मैं मझधारा का माँझी हूँ...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-3-12', part: 1, chapter: 3, chapterSequence: 12, title: 'अबकी राखि लेहु भगवान', author: 'सूरदास', hindiText: `अबकी राखि लेहु भगवान...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-3-13', part: 1, chapter: 3, chapterSequence: 13, title: 'मेरो मन अनत कहाँ सुख पावै', author: 'सूरदास', hindiText: `मेरो मन अनत कहाँ सुख पावै...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-3-14', part: 1, chapter: 3, chapterSequence: 14, title: 'नैनहीन को राह दिखा प्रभु', author: 'अज्ञात', hindiText: `नैनहीन को राह दिखा प्रभु...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-3-15', part: 1, chapter: 3, chapterSequence: 15, title: 'घर तजौं, वन तजौं', author: 'अज्ञात', hindiText: `घर तजौं, वन तजौं...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-3-16', part: 1, chapter: 3, chapterSequence: 16, title: 'तौक पहिरावौ, पाँव बेडी लै', author: 'अज्ञात', hindiText: `तौक पहिरावौ, पाँव बेडी लै...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-3-17', part: 1, chapter: 3, chapterSequence: 17, title: 'इतनी कृपा हो स्वामी', author: 'बहिरो', hindiText: `इतनी कृपा हो स्वामी...`, meaning: ``, audioDriveId: '', singer: '' },

  // --- Chapter 4 ---
  { id: '1-4-1', part: 1, chapter: 4, chapterSequence: 1, title: 'गुरु विन कौन बतावै बाट', author: 'कबीर', hindiText: `गुरु विन कौन बतावै बाट...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-4-2', part: 1, chapter: 4, chapterSequence: 2, title: 'साधो सो सद्गुरु मोहिं भावै', author: 'कबीर', hindiText: `साधो सो सद्गुरु मोहिं भावै...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-4-3', part: 1, chapter: 4, chapterSequence: 3, title: 'वोई सद्गुरु सन्त कहावै', author: 'कबीर', hindiText: `वोई सद्गुरु सन्त कहावै...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-4-4', part: 1, chapter: 4, chapterSequence: 4, title: 'अपने घट दियना बारु रे', author: 'कबीर', hindiText: `अपने घट दियना बारु रे...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-4-5', part: 1, chapter: 4, chapterSequence: 5, title: 'नाम रूप दुइ ईस उपाधी', author: 'तुलसीदास', hindiText: `नाम रूप दुइ ईस उपाधी...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-4-6', part: 1, chapter: 4, chapterSequence: 6, title: 'काहे न रसना रामहि गावहि', author: 'तुलसीदास', hindiText: `काहे न रसना रामहि गावहि...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-4-6b', part: 1, chapter: 4, chapterSequence: 6, title: 'बिनु पग चलै सुनै बिनु काना', author: 'तुलसीदास', hindiText: `बिनु पग चलै सुनै बिनु काना...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-4-7', part: 1, chapter: 4, chapterSequence: 7, title: 'अजर अमर इक नाम है', author: 'कबीर', hindiText: `अजर अमर इक नाम है...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-4-8', part: 1, chapter: 4, chapterSequence: 8, title: 'या विधि मनको लगावै', author: 'कबीर', hindiText: `या विधि मनको लगावै...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-4-9', part: 1, chapter: 4, chapterSequence: 9, title: 'चेतना है तो चेतले', author: 'नानक', hindiText: `चेतना है तो चेतले...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-4-10', part: 1, chapter: 4, chapterSequence: 10, title: 'भूले मन समझके लाद लदनिया', author: 'कबीर', hindiText: `भूले मन समझके लाद लदनिया...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-4-11', part: 1, chapter: 4, chapterSequence: 11, title: 'कोरी साल न छाँडै रें', author: 'दादू', hindiText: `कोरी साल न छाँडै रें...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-4-12', part: 1, chapter: 4, chapterSequence: 12, title: 'तो भी कच्चा वे कच्चा', author: 'मच्छेन्द्र', hindiText: `तो भी कच्चा वे कच्चा...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-4-13', part: 1, chapter: 4, chapterSequence: 13, title: 'अमर है शौक मिलने का', author: 'मन्सूर', hindiText: `अमर है शौक मिलने का...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-4-14', part: 1, chapter: 4, chapterSequence: 14, title: 'नौकरी शरिअतसे करना', author: 'कबीर', hindiText: `नौकरी शरिअतसे करना...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-4-15', part: 1, chapter: 4, chapterSequence: 15, title: 'सुनारे मैने निर्वल के बल', author: 'सूरदास', hindiText: `सुनारे मैने निर्वल के बल...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-4-16', part: 1, chapter: 4, chapterSequence: 16, title: 'प्रीति लगी तुव नामकी', author: 'कबीर', hindiText: `प्रीति लगी तुव नामकी...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-4-17', part: 1, chapter: 4, chapterSequence: 17, title: 'जोगी मत जा, मत जा', author: 'मीराबाई', hindiText: `जोगी मत जा, मत जा...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-4-18', part: 1, chapter: 4, chapterSequence: 18, title: 'तुम पलक उघारो दीनानाथ', author: 'मीराबाई', hindiText: `तुम पलक उघारो दीनानाथ...`, meaning: ``, audioDriveId: '', singer: '' },

  // --- Chapter 5 ---
  { id: '1-5-1', part: 1, chapter: 5, chapterSequence: 1, title: 'पायो जी मैने रामरतन', author: 'मीराबाई', hindiText: `पायो जी मैने रामरतन...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-2', part: 1, chapter: 5, chapterSequence: 2, title: 'फागुन के दिन चार रे', author: 'मीराबाई', hindiText: `फागुन के दिन चार रे...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-3', part: 1, chapter: 5, chapterSequence: 3, title: 'साधु कि सङ्गत पाई रे', author: 'मीराबाई', hindiText: `साधु कि सङ्गत पाई रे...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-4', part: 1, chapter: 5, chapterSequence: 4, title: 'वन्दउँ श्रीहरि-पद सुखदाई', author: 'सूरदास', hindiText: `वन्दउँ श्रीहरि-पद सुखदाई...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-5', part: 1, chapter: 5, chapterSequence: 5, title: 'अब तो प्रगट भई जग जानी', author: 'सूरदास', hindiText: `अब तो प्रगट भई जग जानी...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-6', part: 1, chapter: 5, chapterSequence: 6, title: 'हीरा तहाँ न खोलिये', author: 'कबीर', hindiText: `हीरा तहाँ न खोलिये...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-7', part: 1, chapter: 5, chapterSequence: 7, title: 'शून्य शिखरमें सुरत लगाय', author: 'गोरखनाथ', hindiText: `शून्य शिखरमें सुरत लगाय...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-8', part: 1, chapter: 5, chapterSequence: 8, title: 'झरि लागै महलिया गगन', author: 'धरमदास', hindiText: `झरि लागै महलिया गगन...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-9', part: 1, chapter: 5, chapterSequence: 9, title: 'झिलमिल झिलमिल बरसै नूरा', author: 'यारी', hindiText: `झिलमिल झिलमिल बरसै नूरा...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-10', part: 1, chapter: 5, chapterSequence: 10, title: 'और देवल जहँ धुंधली', author: 'चरनदास', hindiText: `और देवल जहँ धुंधली...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-11', part: 1, chapter: 5, chapterSequence: 11, title: 'गुरु कृपाञ्जन पायो रे भाई', author: 'एकनाथ', hindiText: `गुरु कृपाञ्जन पायो रे भाई...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-12', part: 1, chapter: 5, chapterSequence: 12, title: 'साई अलख पलखमें झलके', author: 'महिपति', hindiText: `साई अलख पलखमें झलके...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-13', part: 1, chapter: 5, chapterSequence: 13, title: 'ऐसा देस दिवाना रे', author: 'चरनदास', hindiText: `ऐसा देस दिवाना रे...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-14', part: 1, chapter: 5, chapterSequence: 14, title: 'जब ते अनहत घोर सुनी', author: 'चरनदास', hindiText: `जब ते अनहत घोर सुनी...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-15', part: 1, chapter: 5, chapterSequence: 15, title: 'महरम होय सो जानै साधो', author: 'कबीर', hindiText: `महरम होय सो जानै साधो...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-16', part: 1, chapter: 5, chapterSequence: 16, title: 'रस गगन गुफामें अजर झरै', author: 'कबीर', hindiText: `रस गगन गुफामें अजर झरै...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-17', part: 1, chapter: 5, chapterSequence: 17, title: 'चुवत अमीरस भरत ताल जहँ', author: 'कबीर', hindiText: `चुवत अमीरस भरत ताल जहँ...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-18', part: 1, chapter: 5, chapterSequence: 18, title: 'ऐसो है रे हरिरस', author: 'कबीर', hindiText: `ऐसो है रे हरिरस...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-19', part: 1, chapter: 5, chapterSequence: 19, title: 'हो तो कोई पिये रामरस', author: 'कबीर', hindiText: `हो तो कोई पिये रामरस...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-20', part: 1, chapter: 5, chapterSequence: 20, title: 'रामरस मीठा रे कोई पीवै', author: 'दादू', hindiText: `रामरस मीठा रे कोई पीवै...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-21', part: 1, chapter: 5, chapterSequence: 21, title: 'है कोई सन्त सहज सुख', author: 'कबीर', hindiText: `है कोई सन्त सहज सुख...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-22', part: 1, chapter: 5, chapterSequence: 22, title: 'दरस दिवाना बावला', author: 'कबीर', hindiText: `दरस दिवाना बावला...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-23', part: 1, chapter: 5, chapterSequence: 23, title: 'हमन है इश्क मस्ताना', author: 'कबीर', hindiText: `हमन है इश्क मस्ताना...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-24', part: 1, chapter: 5, chapterSequence: 24, title: 'मन मस्त हुवा तब', author: 'कबीर', hindiText: `मन मस्त हुवा तब...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-25', part: 1, chapter: 5, chapterSequence: 25, title: 'रमैया कि दुलहिनि लूटल', author: 'कबीर', hindiText: `रमैया कि दुलहिनि लूटल...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-26', part: 1, chapter: 5, chapterSequence: 26, title: 'साधो सहज समाधि भली', author: 'कबीर', hindiText: `साधो सहज समाधि भली...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-27', part: 1, chapter: 5, chapterSequence: 27, title: 'जो पीर मेरा बड़ा औलिया', author: 'मौला', hindiText: `जो पीर मेरा बड़ा औलिया...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-28', part: 1, chapter: 5, chapterSequence: 28, title: 'बन्धनों की शृङखला को', author: 'गिरीशचन्द्र शर्मा', hindiText: `बन्धनों की शृङखला को...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-29', part: 1, chapter: 5, chapterSequence: 29, title: 'तत्त हिण्डोलवा सतगुरु', author: 'गुलाल', hindiText: `तत्त हिण्डोलवा सतगुरु...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-30', part: 1, chapter: 5, chapterSequence: 30, title: 'क्या वे किसी से काम', author: 'महिपति', hindiText: `क्या वे किसी से काम...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-31', part: 1, chapter: 5, chapterSequence: 31, title: 'आरती कहाँ लौ जोवै', author: 'रैदास', hindiText: `आरती कहाँ लौ जोवै...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-32', part: 1, chapter: 5, chapterSequence: 32, title: 'पावन जस है माधो तेरा', author: 'रैदास', hindiText: `पावन जस है माधो तेरा...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-33', part: 1, chapter: 5, chapterSequence: 33, title: 'कहूँ रे जो कहिवे की', author: 'कबीर', hindiText: `कहूँ रे जो कहिवे की...`, meaning: ``, audioDriveId: '', singer: '' },
  { id: '1-5-34', part: 1, chapter: 5, chapterSequence: 34, title: 'गुरुने मोहिं दीन्हीं अजब', author: 'कबीर', hindiText: `गुरुने मोहिं दीन्हीं अजब...`, meaning: ``, audioDriveId: '', singer: '' },

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