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
  { id: '1-1-2', part: 1, chapter: 1, chapterSequence: 2, title: 'केहि समुझावों सब जग अन्धा', author: 'कबीर', hindiText: `ON UNIVERSAL BLINDNESS

केहि समुझावों सब जग अन्धा ॥ टे ॥ इक दुइ होयँ उन्हें समुझात्रौं सबहि भुलाने पेटके धन्धा पानी घोड़ पवन असबरवा, ढरकि परे जस ओसक बुन्दा ॥ १॥ गहिरी नदी अगम बहे धरवा, खेवन-हार के पड़िगा फन्दा । घर की वस्तु नजर नहिं आवत, दियना बारि के ढूँढत अन्धा ॥ २॥ लागी आगि बन जरिगा, विन गुरुज्ञान भटकिगा बन्दा । कहे कबीर सुनो भाई साधो, जाय लिङ्गोटी झारि के बन्दा ॥ ३ ॥
`, meaning: `(मैं) किसको समझाऊँ ? सारा जग अन्धा है।. एक दो हों तो उनको समझाऊँ । सभी पेटके धन्धेमें फँसे हुए हैं। पानीरूपी घोड़ा पवन सवार होनेके कारण ओसकी बूँदके रूपमें तुरन्त गिर पड़ता है। गहरी नदीमें अगम धार बहने के कारण खेनेवालेको धोका होगया है । घरकी वस्तु नजर नहीं आती; पर अन्धा दिया जलाकर ढूंढ रहा है। आग लगी, सारा बन जल गया। गुरु-ज्ञानके बिना मनुष्य भटक गया है। कवीर कहते हैं, हे साधो, बन्दा लङ्गोट झाड़कर जाता है ।
`, audioDriveId: '', singer: '' },
  { id: '1-1-3', part: 1, chapter: 1, chapterSequence: 3, title: 'मुसाफिर सोता है बेहोस', author: 'कृष्णानंद', hindiText: `THE SLEEP OF IGNORANCE

मुसाफिर सोता है वेहोस । नैन में भरा नींद का रोस ॥ टे ॥ पूँजी पास बहुत तू लाया । इस नगरी में जब तू आया । कहीं न ठग ले जावे, खोंस ॥१॥ जिस कारज को जो तू आया । सौदा वह कछु कर ना पाया । यही बड़ा अफ़सोस ॥ २ ॥ झूठे सुख की निंदिया सोया । विना विचार माल सब खोया । दीजै सत्रको दोस ॥ ३॥ कृष्णानन्द जान लो हरिको । जाना है जो अपने घर को । प्रभुपद कर सन्तोस ॥४।
`, meaning: `मुसाफिर, तू बेहोश सोता है । (तेरे) नयन में नींद का जोश भरा है । जब तू इस नगरी में आया, तत्र (अपने) पास बहुत पूँजी लाया । उसे कछौंटे में खोंस ले, ऐसा न हो कि ठग उसे लूट ले जाय । जिस कार्य के लिये तू आया, वह सौदा कुछ नहीं कर पाया, यही बड़ा अफ़सोस है । तू झूठे सुख की नींद में सो गया । तूने बिना विचार सब माल खो दिया, ( फिर ) तू सब को दोष देता है। कृष्णानन्द कहते हैं - अगर अपने घर को जाना है, तो प्रभु हरि को जानकर उनके पदमें सन्तोष - कर ले
`, audioDriveId: '', singer: '' },
  { id: '1-1-4', part: 1, chapter: 1, chapterSequence: 4, title: 'केशव कहि न जाय', author: 'तुलसीदास', hindiText: `PHILOSOPHICAL AFFLATUS TO SPIRITUAL LIFE.

केशव कहि न जाय का कहिए ? ।। टे ॥ देखत तव रचना विचित्र अति समुझि मनहिं मन रहिए ॥ १ ॥ मून्य भीति पर चित्र रङ्ग नहिं, कर विनु लिखा चितेरे धोए मिटइ न मरइ भीति, दुख पाइय यहि तनु हेरे ।। २ ।। रवि-कर-नीर बसइ अति दारुन मकर रूप तेहि मांहीं बदन-हीन सो ग्रसइ चराचर पान करन जे जाहीं ॥ ३ ॥ कोउ कह सत्य झूठ कह कोऊ जुगल प्रबल करि मानै तुलसिदास परिहरै तीनि भ्रम जो आपहिं पहिचानै ॥४॥
`, meaning: `हे केशव, कहा नहीं जाता । क्या कहा जाय ? तुम्हारी अति विचित्र रचना को देखकर मन ही मन समझ कर रहना पड़ता है। कर-हीन चितेरे ने शून्य भीत पर रङ्ग के चिना चित्र लिखा है, जो धोने से भी नहीं मिटता । (फिर भी) भीति नहीं मरती । इस तन को देखने से दुख प्राप्त होता है । रविकरनीर में अति दारुण मकररूप बसता है । वह मकर मुख-हीन होने पर भी चराचर में से जो कोई (जल) पीने जाता है, उसको खा लेता है। (इस संसार को ) कोई सत्य कहता है, कोई असत्य कहता है। कोई सत्या-सत्य दोनों ही को तुल्यबल मानता है । तुलसीदास कहते हैं, कि जो अपने को पहिचानता है, वही तीनों भ्रमों को छोड़ सकता है ।
`, audioDriveId: '', singer: '' },
  { id: '1-1-5', part: 1, chapter: 1, chapterSequence: 5, title: 'ऊधो धनि तुम्हरो बेवहार', author: 'सूरदास', hindiText: `CONTRADICTIONS OF DESERT AND FRUIT.

ऊधो धनि तुम्हरो बेबहार ॥ टे ॥ धनि वै ठाकुर धनि वै सेवक, धनि तुम वर्तन-हार ॥१॥ आम कटावत बबुर लगावत, चन्दन झोंकत भार ॥२॥ चोर बसावत साह भगावत, चुगलनि कौं एतवार ॥३॥ समुझि न परति तिहारी ऊधो, हम ब्रजनारि गँवार ॥४॥ सूरदास धनि तुम्हरि कचेरी, अंधाधुंध दरवार - ॥५॥
`, meaning: `हे ऊधव, तुम्हारा व्यवहार धन्य है। वह स्वामी धन्य है ! वह सेवक धन्य है ! वर्तनेवाले तुमभी धन्य हो ! (तुम) आम कटाते हो, बबूल लगाते हो और चन्दन को भाड़ में झोंकते हो। चोर को बसाते हो। साह को भगाते हो और चुगलखोरों का विश्वास करते हो । हे ऊधो ! हम ग्रामीण ब्रज-स्त्रियाँ हैं, तुम्हारी विद्या (कथनी, करनी, रहनी,) हमारी समझ में नहीं आती है। सूरदास कहते हैं, तुम्हारी कचहरी धन्य है, जहाँ दरबार अंधाधुंध लग रहा है।
`, audioDriveId: '', singer: '' },
  { id: '1-1-6', part: 1, chapter: 1, chapterSequence: 6, title: 'कीजै प्रभु अपने बिरदकी लाज', author: 'सूरदास', hindiText: `GOD IMPLORED FOR DELIVERANCE FROM APPEARANCE AND SIN

कीजै प्रभु अपने बिरद की लाज ॥ टे ॥ महा-पतित कबहूँ नहिं आयौं, नैक्कु तिहारे काज ॥ १ ॥ माया सबल धाम धन बनिता, बाँध्यौ इहि साज ॥ २ ॥ देखत सुनत सबै जानत हो, तऊ न आयौं बाज ॥ ३॥ कहियत पतित बहुत तुम तारे, स्रवननि सुनी अवाज ॥ ४॥ दइ न जात केवट-उतराई, चाहत चढ्यौ जहाज ॥ ५ ॥ नई न करन कहत प्रभु तुम, सदा गरीब निवाज ॥ ६ ॥ लीजै पार उतारि सूर कौं महाराज ब्रजराज ॥ ७ ॥
`, meaning: `प्रभु, अपने विरद की लाज रखिये । मैं ऐसा महापतित हूँ कि तनिक भी तुह्मारे काम नहीं आया । इस धाम, धन और वनिता रूप सवल माया की सजावट में अपने को बाँध लिया है। देखता हूँ, सुनता हूँ, सब कुछ जानता हूँ। फिर भी उससे दूर नहीं हुआ। कहा जाता है कि तुमने बहुत पतितों को तारा है। (मैंने भी) अपने कानोंसे ऐसी वाणी सुनी है। जहाज़ पर चढ़ना चाहता हूँ; पर केवट की उतराई नहीं दी जाती। मैं आपसे कोई नई चीज़ करने के लिये नहीं कहता हूँ। हे प्रभु ! तुम सदा गरीयों पर कृपा करनेवाले हो । हे महाराज व्रजराज ! सूरदासको पार उतार लीजिये ।`, audioDriveId: '', singer: '' },
  { id: '1-1-7', part: 1, chapter: 1, chapterSequence: 7, title: 'शङ्कर रामरूप अनुरागे', author: 'तुलसीदास', hindiText: `WE MUST BE BEHOLDEN TO OUR VERY SINS FOR THE VISION OF GOD

शङ्कर रामरूप अनुरागे नयन पञ्चदश अतिप्रिय लागे ॥१॥ निरखि रामछवि विधि हरपाने आठहिं नयन जानि पछिताने ॥२॥ सुरसेनप उर बहुत उछाहू । विधि तें डेवढ़ लोचन लाहू ॥३॥ रामहिं चितव सुरेस सुजाना । गौतम शाप परमहित माना ॥४॥ देव सकल सुरपतिहि सिहाहीं आजु पुरन्दर सम कोउ नाहीं ॥ ५ ॥
`, meaning: `शङ्करजी रामरूपमें अनुरक्त हुए, और उन्हें अपने पन्द्रह नयन अतिप्रिय लगे । राम की छवि देखकर ब्रह्मदेव हर्पित हुए और अपने आठ ही नयन जान कर पछताये । पड़ानन को अपने हृदय में बहुत उत्साह हुआ क्योंकि उन्होंने ब्रह्मदेव से ड्योढ़े नयनों का लाभ उठाया । चतुर इन्द्र ने राम को देखकर गौतम ऋषि के शाप को परम हितकारी मान । देवगण इन्द्र की बढ़ाई करने लगे कि आज पुरंदर के समान कोई नहीं ।
`, audioDriveId: '', singer: '' },
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
`, audioDriveId: '', singer: '' },
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
`, audioDriveId: '', singer: '' },
  { id: '1-1-15', part: 1, chapter: 1, chapterSequence: 15, title: 'रे दिल गाफिल गफलत मत', author: 'कबीर', hindiText: `THE LOVE OF GOD AS THE ONLY WAY OF ESCAPE FROM LIFE'S MISERIES.

रे दिल गाफिल गफलत मत कर एक दिना जम आवेगा ॥ टे॥ सौदा करने या जग आया, पूँजी लाया, मूल गँवाया, प्रेमनगर का अन्त न पाया, ज्यों आया त्यों जावेगा ॥ १ ॥ सुन मेरे साजन, सुन मेरे मीता, या जीवन में क्या क्या कीता, सिर पाहन का बोझा लीता, आगे कौन छुड़ावेगा ॥२॥ परलि पार तेरा मीता खड़िया, उस मिलने का ध्यान न धरिया, टूटी नाव ऊपर जा बैठा, गाफ़िल गोता खावेगा ॥ ३॥ दास कवीर कहै समुझाई, अन्त समय तेरा कौन सहाई, चला अकेला संग न कोई, कीया अपना पावेगा ॥४॥
`, meaning: `रे गाफिल दिल, भूल मत कर । एक दिन यम आवेगा। तू इस जगमें पूँजी लेकर सौदा करने आया, लेकिन मूल गँवा दिया । प्रेमनगर का तूने अन्त नहीं पाया । तू जिस तरह आया, उसी तरह जाएगा ! ऐ मेरे साजन, ऐ मेरे गुणी, सुन, इस जीवन में (तूने) क्या क्या किया ? सिर पर पत्थर का बोझ ले लिया । तुझे आगे कौन छुड़ावेगा ? उस पार तेरा मित्र खड़ा है। तूने उससे मिलने का ध्यान नहीं रक्खा । टूटी नात्र के ऊपर जाकर बैठ गया, ऐ गाफिल, तू डूब जायगा । कबीरदास समझाकर कहते हैं, अन्त समय में तेरा सहायक कौन है? बिना किसी साथी के तू अकेला चला है। अपने किए का फल पाएगा ।
`, audioDriveId: '', singer: '' },

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
  { id: '1-3-1', part: 1, chapter: 3, chapterSequence: 1, title: 'कत जाइए रे घर लाग्यो रंगु', author: 'रामानन्द', hindiText: `RAMANAND ON THE INTERNAL IMMANENCE AND THE UNIVERSAL PERVASIVENESS OF GOD.
    
कत जाइए रे, घर लाग्यो रंगु । मेरा चित न चलै, मन भयो पंगु ॥१॥ एक दिवस, मन उठी उमंग । घसि चन्दन, चोआ वहु सुगन्ध पूजन चले, ब्रह्म ठाईं, । सो ब्रह्म बतायो गुरु, मनहिं माहीं जहँ जाइए, तहँ जल पखान । तू पूरि रह्यो है सब समान वेद पुरान सब देखे जोय । उहाँ तो जाइए, जो इहाँ न होय सतगुरु, मैं, बलिहारी तोर । जिन सकल निकल भ्रम काटे मोर रामानन्द स्वामी रमत ब्रह्म । गुरु का सबद काटै कोटि करम
`, meaning: ``, audioDriveId: '', singer: '' },
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