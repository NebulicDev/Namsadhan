// assets/text/parmarthSopanData.ts

export interface SopanItem {
  id: string;
  part: 1 | 2;         // 1 = Padas, 2 = Dohas
  chapter: number;     // 1 to 5
  chapterSequence: number; // Sequence inside the chapter (1, 2, 3...)
  title: string;       // Hindi Title
  author: string;      // Hindi Author Name
  hindiText: string;   // Content
  meaning?: string;    // Meaning
  audioDriveId?: string; // Optional
  singer?: string;       // Optional
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
    content: `1. Preliminary - After having gone over to Allahabad and stayed there for about twenty years, I wanted to reach an आनृण्य of the literature and the place which had conferred many obligations on me...

(Source: Preface, Parmarth Sopan)`
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

// --- 2. MASTER DATA (Full 200 Items from Index) ---

export const PARMARTH_SOPAN_DATA: SopanItem[] = [
  // ================= PART 1: PADAS (100) =================
  // Chapter 1
  { id: '1-1-1', part: 1, chapter: 1, chapterSequence: 1, title: 'धोखे ही धोखे डहकायो', author: 'सूरदास', hindiText: 'धोखे ही धोखे डहकायो...' },
  { id: '1-1-2', part: 1, chapter: 1, chapterSequence: 2, title: 'केहि समुझावों सब जग अन्धा', author: 'कबीर', hindiText: 'केहि समुझावों सब जग अन्धा...' },
  { id: '1-1-3', part: 1, chapter: 1, chapterSequence: 3, title: 'मुसाफिर सोता है बेहोस', author: 'कृष्णानंद', hindiText: 'मुसाफिर सोता है बेहोस...' },
  { id: '1-1-4', part: 1, chapter: 1, chapterSequence: 4, title: 'केशव कहि न जाय', author: 'तुलसीदास', hindiText: 'केशव कहि न जाय...' },
  { id: '1-1-5', part: 1, chapter: 1, chapterSequence: 5, title: 'ऊधो धनि तुम्हरो बेवहार', author: 'सूरदास', hindiText: 'ऊधो धनि तुम्हरो बेवहार...' },
  { id: '1-1-6', part: 1, chapter: 1, chapterSequence: 6, title: 'कीजै प्रभु अपने बिरदकी लाज', author: 'सूरदास', hindiText: 'कीजै प्रभु अपने बिरद की लाज...' },
  { id: '1-1-7', part: 1, chapter: 1, chapterSequence: 7, title: 'शंकर रामरूप अनुरागे', author: 'तुलसीदास', hindiText: 'शंकर रामरूप अनुरागे...' },
  { id: '1-1-8', part: 1, chapter: 1, chapterSequence: 8, title: 'ममता तू न गई मेरे मन तें', author: 'तुलसीदास', hindiText: 'ममता तू न गई मेरे मन तें...' },
  { id: '1-1-9', part: 1, chapter: 1, chapterSequence: 9, title: 'जा दिन मन-पंछी उड़ि जैहे', author: 'सूरदास', hindiText: 'जा दिन मन-पंछी उड़ि जैहे...' },
  { id: '1-1-10', part: 1, chapter: 1, chapterSequence: 10, title: 'क्या तन माँजता रे', author: 'प्रभुदास', hindiText: 'क्या तन माँजता रे...' },
  { id: '1-1-11', part: 1, chapter: 1, chapterSequence: 11, title: 'बहुरि नहिं आवना या देस', author: 'कबीर', hindiText: 'बहुरि नहिं आवना या देस...' },
  { id: '1-1-12', part: 1, chapter: 1, chapterSequence: 12, title: 'दिवाने मन भजन बिना', author: 'कबीर', hindiText: 'दिवाने मन भजन बिना...' },
  { id: '1-1-13', part: 1, chapter: 1, chapterSequence: 13, title: 'करम गति टारै नाहि टरी', author: 'कबीर', hindiText: 'करम गति टारै नाहि टरी...' },
  { id: '1-1-14', part: 1, chapter: 1, chapterSequence: 14, title: 'रे मन जनम अकारथ जात', author: 'सूरदास', hindiText: 'रे मन जनम अकारथ जात...' },
  { id: '1-1-15', part: 1, chapter: 1, chapterSequence: 15, title: 'रे दिल गाफिल गफलत मत', author: 'कबीर', hindiText: 'रे दिल गाफिल गफलत मत...' },

  // Chapter 2
  { id: '1-2-1', part: 1, chapter: 2, chapterSequence: 1, title: 'छाँड़ि मन हरि-विमुखन को सङ्ङ्ग', author: 'सूरदास', hindiText: 'छाँड़ि मन हरि-विमुखन को सङ्ङ्ग...' },
  { id: '1-2-2', part: 1, chapter: 2, chapterSequence: 2, title: 'अब मैं नाच्यों बहुत गुपाल', author: 'सूरदास', hindiText: 'अब मैं नाच्यों बहुत गुपाल...' },
  { id: '1-2-3', part: 1, chapter: 2, chapterSequence: 3, title: 'सो काफिर जो बोलै काफ', author: 'दादू', hindiText: 'सो काफिर जो बोलै काफ...' },
  { id: '1-2-4', part: 1, chapter: 2, chapterSequence: 4, title: 'मन लागो यार फकीरी में', author: 'कबीर', hindiText: 'मन लागो यार फकीरी में...' },
  { id: '1-2-5', part: 1, chapter: 2, chapterSequence: 5, title: 'ब्राह्मण सो जो ब्रह्म पिछानै', author: 'चरनदास', hindiText: 'ब्राह्मण सो जो ब्रह्म पिछानै...' },
  { id: '1-2-6', part: 1, chapter: 2, chapterSequence: 6, title: 'बिसर गई सब आप', author: 'नानक', hindiText: 'बिसर गई सब आप...' },
  { id: '1-2-7', part: 1, chapter: 2, chapterSequence: 7, title: 'जाके प्रिय न राम-वैदेही', author: 'तुलसीदास', hindiText: 'जाके प्रिय न राम-वैदेही...' },
  { id: '1-2-8', part: 1, chapter: 2, chapterSequence: 8, title: 'झीनी झीनी बीनी चदरिया', author: 'कबीर', hindiText: 'झीनी झीनी बीनी चदरिया...' },
  { id: '1-2-9', part: 1, chapter: 2, chapterSequence: 9, title: 'जेहि जय होइ सो स्यन्दन', author: 'तुलसीदास', hindiText: 'जेहि जय होइ सो स्यन्दन...' },
  { id: '1-2-10', part: 1, chapter: 2, chapterSequence: 10, title: 'करनी बिन कथनी इसी', author: 'चरनदास', hindiText: 'करनी बिन कथनी इसी...' },
  { id: '1-2-11', part: 1, chapter: 2, chapterSequence: 11, title: 'सात्त्विक श्रद्धा धेनु सुहाई', author: 'तुलसीदास', hindiText: 'सात्त्विक श्रद्धा धेनु सुहाई...' },
  { id: '1-2-12', part: 1, chapter: 2, chapterSequence: 12, title: 'पावन पर्वत बेद पुराना', author: 'तुलसीदास', hindiText: 'पावन पर्वत बेद पुराना...' },
  { id: '1-2-13', part: 1, chapter: 2, chapterSequence: 13, title: 'गोपी सुनहु हरि सन्देस', author: 'सूरदास', hindiText: 'गोपी सुनहु हरि सन्देस...' },
  { id: '1-2-14', part: 1, chapter: 2, chapterSequence: 14, title: 'ऊधो हमहि न जोग सिखैहै', author: 'सूरदास', hindiText: 'ऊधो हमहि न जोग सिखैहै...' },
  { id: '1-2-15', part: 1, chapter: 2, chapterSequence: 15, title: 'सुनु मुनि तोहि कहउँ सहरोसा', author: 'तुलसीदास', hindiText: 'सुनु मुनि तोहि कहउँ सहरोसा...' },
  { id: '1-2-16', part: 1, chapter: 2, chapterSequence: 16, title: 'नवधा भगति कहउँ तोहीँ पाहि', author: 'तुलसीदास', hindiText: 'नवधा भगति कहउँ तोहीँ पाहि...' },

  // Chapter 3
  { id: '1-3-1', part: 1, chapter: 3, chapterSequence: 1, title: 'कत जाइए रे घर लाग्यो रंगु', author: 'रामानन्द', hindiText: 'कत जाइए रे घर लाग्यो रंगु...' },
  { id: '1-3-2', part: 1, chapter: 3, chapterSequence: 2, title: 'ऐसी आरति त्रिभुवन तारै', author: 'कबीर', hindiText: 'ऐसी आरति त्रिभुवन तारै...' },
  { id: '1-3-3', part: 1, chapter: 3, chapterSequence: 3, title: 'सोइ सच्चिदानंद घनरामा', author: 'तुलसीदास', hindiText: 'सोइ सच्चिदानंद घनरामा...' },
  { id: '1-3-4', part: 1, chapter: 3, chapterSequence: 4, title: 'सुनु गिरिजा हरिचरित सुहाये', author: 'तुलसीदास', hindiText: 'सुनु गिरिजा हरिचरित सुहाये...' },
  { id: '1-3-5', part: 1, chapter: 3, chapterSequence: 5, title: 'जिन्हकै रही भावना जैसी', author: 'तुलसीदास', hindiText: 'जिन्हकै रही भावना जैसी...' },
  { id: '1-3-6', part: 1, chapter: 3, chapterSequence: 6, title: 'कोई स्याम मनोहर ल्योरी', author: 'मीराबाई', hindiText: 'कोई स्याम मनोहर ल्योरी...' },
  { id: '1-3-7', part: 1, chapter: 3, chapterSequence: 7, title: 'अब कैसे छूटे नाम रट लागी', author: 'रैदास', hindiText: 'अब कैसे छूटे नाम रट लागी...' },
  { id: '1-3-8', part: 1, chapter: 3, chapterSequence: 8, title: 'काहे रे बन खोजन जाई', author: 'नानक', hindiText: 'काहे रे बन खोजन जाई...' },
  { id: '1-3-9', part: 1, chapter: 3, chapterSequence: 9, title: 'तौ निबहै जन सेवक तेरा', author: 'दादू', hindiText: 'तौ निबहै जन सेवक तेरा...' },
  { id: '1-3-10', part: 1, chapter: 3, chapterSequence: 10, title: 'नरहरि चंचल है मति मोरी', author: 'रैदास', hindiText: 'नरहरि चंचल है मति मोरी...' },
  { id: '1-3-11', part: 1, chapter: 3, chapterSequence: 11, title: 'मैं मझधारा का माँझी हूँ', author: 'अज्ञात', hindiText: 'मैं मझधारा का माँझी हूँ...' },
  { id: '1-3-12', part: 1, chapter: 3, chapterSequence: 12, title: 'अबकी राखि लेहु भगवान', author: 'सूरदास', hindiText: 'अबकी राखि लेहु भगवान...' },
  { id: '1-3-13', part: 1, chapter: 3, chapterSequence: 13, title: 'मेरो मन अनत कहाँ सुख पावै', author: 'सूरदास', hindiText: 'मेरो मन अनत कहाँ सुख पावै...' },
  { id: '1-3-14', part: 1, chapter: 3, chapterSequence: 14, title: 'नैनहीन को राह दिखा प्रभु', author: 'अज्ञात', hindiText: 'नैनहीन को राह दिखा प्रभु...' },
  { id: '1-3-15', part: 1, chapter: 3, chapterSequence: 15, title: 'घर तजौं, वन तजौं', author: 'अज्ञात', hindiText: 'घर तजौं, वन तजौं...' },
  { id: '1-3-16', part: 1, chapter: 3, chapterSequence: 16, title: 'तौक पहिरावौ, पाँव बेडी लै', author: 'अज्ञात', hindiText: 'तौक पहिरावौ, पाँव बेडी लै...' },
  { id: '1-3-17', part: 1, chapter: 3, chapterSequence: 17, title: 'इतनी कृपा हो स्वामी', author: 'बहिरो', hindiText: 'इतनी कृपा हो स्वामी...' },

  // Chapter 4
  { id: '1-4-1', part: 1, chapter: 4, chapterSequence: 1, title: 'गुरु विन कौन बतावै बाट', author: 'कबीर', hindiText: 'गुरु विन कौन बतावै बाट...' },
  { id: '1-4-2', part: 1, chapter: 4, chapterSequence: 2, title: 'साधो सो सद्गुरु मोहिं भावै', author: 'कबीर', hindiText: 'साधो सो सद्गुरु मोहिं भावै...' },
  { id: '1-4-3', part: 1, chapter: 4, chapterSequence: 3, title: 'वोई सद्गुरु सन्त कहावै', author: 'कबीर', hindiText: 'वोई सद्गुरु सन्त कहावै...' },
  { id: '1-4-4', part: 1, chapter: 4, chapterSequence: 4, title: 'अपने घट दियना बारु रे', author: 'कबीर', hindiText: 'अपने घट दियना बारु रे...' },
  { id: '1-4-5', part: 1, chapter: 4, chapterSequence: 5, title: 'नाम रूप दुइ ईस उपाधी', author: 'तुलसीदास', hindiText: 'नाम रूप दुइ ईस उपाधी...' },
  { id: '1-4-6', part: 1, chapter: 4, chapterSequence: 6, title: 'काहे न रसना रामहि गावहि', author: 'तुलसीदास', hindiText: 'काहे न रसना रामहि गावहि...' },
  { id: '1-4-6b', part: 1, chapter: 4, chapterSequence: 6, title: 'बिनु पग चलै सुनै बिनु काना', author: 'तुलसीदास', hindiText: 'बिनु पग चलै सुनै बिनु काना...' },
  { id: '1-4-7', part: 1, chapter: 4, chapterSequence: 7, title: 'अजर अमर इक नाम है', author: 'कबीर', hindiText: 'अजर अमर इक नाम है...' },
  { id: '1-4-8', part: 1, chapter: 4, chapterSequence: 8, title: 'या विधि मनको लगावै', author: 'कबीर', hindiText: 'या विधि मनको लगावै...' },
  { id: '1-4-9', part: 1, chapter: 4, chapterSequence: 9, title: 'चेतना है तो चेतले', author: 'नानक', hindiText: 'चेतना है तो चेतले...' },
  { id: '1-4-10', part: 1, chapter: 4, chapterSequence: 10, title: 'भूले मन समझके लाद लदनिया', author: 'कबीर', hindiText: 'भूले मन समझके लाद लदनिया...' },
  { id: '1-4-11', part: 1, chapter: 4, chapterSequence: 11, title: 'कोरी साल न छाँडै रें', author: 'दादू', hindiText: 'कोरी साल न छाँडै रें...' },
  { id: '1-4-12', part: 1, chapter: 4, chapterSequence: 12, title: 'तो भी कच्चा वे कच्चा', author: 'मच्छेन्द्र', hindiText: 'तो भी कच्चा वे कच्चा...' },
  { id: '1-4-13', part: 1, chapter: 4, chapterSequence: 13, title: 'अमर है शौक मिलने का', author: 'मन्सूर', hindiText: 'अमर है शौक मिलने का...' },
  { id: '1-4-14', part: 1, chapter: 4, chapterSequence: 14, title: 'नौकरी शरिअतसे करना', author: 'कबीर', hindiText: 'नौकरी शरिअतसे करना...' },
  { id: '1-4-15', part: 1, chapter: 4, chapterSequence: 15, title: 'सुनारे मैने निर्वल के बल', author: 'सूरदास', hindiText: 'सुनारे मैने निर्वल के बल...' },
  { id: '1-4-16', part: 1, chapter: 4, chapterSequence: 16, title: 'प्रीति लगी तुव नामकी', author: 'कबीर', hindiText: 'प्रीति लगी तुव नामकी...' },
  { id: '1-4-17', part: 1, chapter: 4, chapterSequence: 17, title: 'जोगी मत जा, मत जा', author: 'मीराबाई', hindiText: 'जोगी मत जा, मत जा...' },
  { id: '1-4-18', part: 1, chapter: 4, chapterSequence: 18, title: 'तुम पलक उघारो दीनानाथ', author: 'मीराबाई', hindiText: 'तुम पलक उघारो दीनानाथ...' },

  // Chapter 5
  { id: '1-5-1', part: 1, chapter: 5, chapterSequence: 1, title: 'पायो जी मैने रामरतन', author: 'मीराबाई', hindiText: 'पायो जी मैने रामरतन...' },
  { id: '1-5-2', part: 1, chapter: 5, chapterSequence: 2, title: 'फागुन के दिन चार रे', author: 'मीराबाई', hindiText: 'फागुन के दिन चार रे...' },
  { id: '1-5-3', part: 1, chapter: 5, chapterSequence: 3, title: 'साधु कि सङ्गत पाई रे', author: 'मीराबाई', hindiText: 'साधु कि सङ्गत पाई रे...' },
  { id: '1-5-4', part: 1, chapter: 5, chapterSequence: 4, title: 'वन्दउँ श्रीहरि-पद सुखदाई', author: 'सूरदास', hindiText: 'वन्दउँ श्रीहरि-पद सुखदाई...' },
  { id: '1-5-5', part: 1, chapter: 5, chapterSequence: 5, title: 'अब तो प्रगट भई जग जानी', author: 'सूरदास', hindiText: 'अब तो प्रगट भई जग जानी...' },
  { id: '1-5-6', part: 1, chapter: 5, chapterSequence: 6, title: 'हीरा तहाँ न खोलिये', author: 'कबीर', hindiText: 'हीरा तहाँ न खोलिये...' },
  { id: '1-5-7', part: 1, chapter: 5, chapterSequence: 7, title: 'शून्य शिखरमें सुरत लगाय', author: 'गोरखनाथ', hindiText: 'शून्य शिखरमें सुरत लगाय...' },
  { id: '1-5-8', part: 1, chapter: 5, chapterSequence: 8, title: 'झरि लागै महलिया गगन', author: 'धरमदास', hindiText: 'झरि लागै महलिया गगन...' },
  { id: '1-5-9', part: 1, chapter: 5, chapterSequence: 9, title: 'झिलमिल झिलमिल बरसै नूरा', author: 'यारी', hindiText: 'झिलमिल झिलमिल बरसै नूरा...' },
  { id: '1-5-10', part: 1, chapter: 5, chapterSequence: 10, title: 'और देवल जहँ धुंधली', author: 'चरनदास', hindiText: 'और देवल जहँ धुंधली...' },
  { id: '1-5-11', part: 1, chapter: 5, chapterSequence: 11, title: 'गुरु कृपाञ्जन पायो रे भाई', author: 'एकनाथ', hindiText: 'गुरु कृपाञ्जन पायो रे भाई...' },
  { id: '1-5-12', part: 1, chapter: 5, chapterSequence: 12, title: 'साई अलख पलखमें झलके', author: 'महिपति', hindiText: 'साई अलख पलखमें झलके...' },
  { id: '1-5-13', part: 1, chapter: 5, chapterSequence: 13, title: 'ऐसा देस दिवाना रे', author: 'चरनदास', hindiText: 'ऐसा देस दिवाना रे...' },
  { id: '1-5-14', part: 1, chapter: 5, chapterSequence: 14, title: 'जब ते अनहत घोर सुनी', author: 'चरनदास', hindiText: 'जब ते अनहत घोर सुनी...' },
  { id: '1-5-15', part: 1, chapter: 5, chapterSequence: 15, title: 'महरम होय सो जानै साधो', author: 'कबीर', hindiText: 'महरम होय सो जानै साधो...' },
  { id: '1-5-16', part: 1, chapter: 5, chapterSequence: 16, title: 'रस गगन गुफामें अजर झरै', author: 'कबीर', hindiText: 'रस गगन गुफामें अजर झरै...' },
  { id: '1-5-17', part: 1, chapter: 5, chapterSequence: 17, title: 'चुवत अमीरस भरत ताल जहँ', author: 'कबीर', hindiText: 'चुवत अमीरस भरत ताल जहँ...' },
  { id: '1-5-18', part: 1, chapter: 5, chapterSequence: 18, title: 'ऐसो है रे हरिरस', author: 'कबीर', hindiText: 'ऐसो है रे हरिरस...' },
  { id: '1-5-19', part: 1, chapter: 5, chapterSequence: 19, title: 'हो तो कोई पिये रामरस', author: 'कबीर', hindiText: 'हो तो कोई पिये रामरस...' },
  { id: '1-5-20', part: 1, chapter: 5, chapterSequence: 20, title: 'रामरस मीठा रे कोई पीवै', author: 'दादू', hindiText: 'रामरस मीठा रे कोई पीवै...' },
  { id: '1-5-21', part: 1, chapter: 5, chapterSequence: 21, title: 'है कोई सन्त सहज सुख', author: 'कबीर', hindiText: 'है कोई सन्त सहज सुख...' },
  { id: '1-5-22', part: 1, chapter: 5, chapterSequence: 22, title: 'दरस दिवाना बावला', author: 'कबीर', hindiText: 'दरस दिवाना बावला...' },
  { id: '1-5-23', part: 1, chapter: 5, chapterSequence: 23, title: 'हमन है इश्क मस्ताना', author: 'कबीर', hindiText: 'हमन है इश्क मस्ताना...' },
  { id: '1-5-24', part: 1, chapter: 5, chapterSequence: 24, title: 'मन मस्त हुवा तब', author: 'कबीर', hindiText: 'मन मस्त हुवा तब...' },
  { id: '1-5-25', part: 1, chapter: 5, chapterSequence: 25, title: 'रमैया कि दुलहिनि लूटल', author: 'कबीर', hindiText: 'रमैया कि दुलहिनि लूटल...' },
  { id: '1-5-26', part: 1, chapter: 5, chapterSequence: 26, title: 'साधो सहज समाधि भली', author: 'कबीर', hindiText: 'साधो सहज समाधि भली...' },
  { id: '1-5-27', part: 1, chapter: 5, chapterSequence: 27, title: 'जो पीर मेरा बड़ा औलिया', author: 'मौला', hindiText: 'जो पीर मेरा बड़ा औलिया...' },
  { id: '1-5-28', part: 1, chapter: 5, chapterSequence: 28, title: 'बन्धनों की शृङखला को', author: 'गिरीशचन्द्र शर्मा', hindiText: 'बन्धनों की शृङखला को...' },
  { id: '1-5-29', part: 1, chapter: 5, chapterSequence: 29, title: 'तत्त हिण्डोलवा सतगुरु', author: 'गुलाल', hindiText: 'तत्त हिण्डोलवा सतगुरु...' },
  { id: '1-5-30', part: 1, chapter: 5, chapterSequence: 30, title: 'क्या वे किसी से काम', author: 'महिपति', hindiText: 'क्या वे किसी से काम...' },
  { id: '1-5-31', part: 1, chapter: 5, chapterSequence: 31, title: 'आरती कहाँ लौ जोवै', author: 'रैदास', hindiText: 'आरती कहाँ लौ जोवै...' },
  { id: '1-5-32', part: 1, chapter: 5, chapterSequence: 32, title: 'पावन जस है माधो तेरा', author: 'रैदास', hindiText: 'पावन जस है माधो तेरा...' },
  { id: '1-5-33', part: 1, chapter: 5, chapterSequence: 33, title: 'कहूँ रे जो कहिवे की', author: 'कबीर', hindiText: 'कहूँ रे जो कहिवे की...' },
  { id: '1-5-34', part: 1, chapter: 5, chapterSequence: 34, title: 'गुरुने मोहिं दीन्हीं अजब', author: 'कबीर', hindiText: 'गुरुने मोहिं दीन्हीं अजब...' },

  // ================= PART 2: DOHAS (100) =================
  // Chapter 1
  { id: '2-1-1', part: 2, chapter: 1, chapterSequence: 1, title: 'सदा नगारा कूचका', author: 'रहीम', hindiText: 'सदा नगारा कूचका...' },
  { id: '2-1-2', part: 2, chapter: 1, chapterSequence: 2, title: 'पाती झडती देखते', author: 'अज्ञात', hindiText: 'पाती झडती देखते...' },
  { id: '2-1-3', part: 2, chapter: 1, chapterSequence: 3, title: 'क्षणभङ्‌गुर जीवन की कलिया', author: 'अज्ञात', hindiText: 'क्षणभङ्‌गुर जीवन की कलिया...' },
  { id: '2-1-4', part: 2, chapter: 1, chapterSequence: 4, title: 'कच्चे में नीका लग', author: 'अज्ञात', hindiText: 'कच्चे में नीका लग...' },
  { id: '2-1-5', part: 2, chapter: 1, chapterSequence: 5, title: 'कहँ जाये कहँ ऊपने', author: 'अज्ञात', hindiText: 'कहँ जाये कहँ ऊपने...' },
  { id: '2-1-6', part: 2, chapter: 1, chapterSequence: 6, title: 'हाड़ जरें ज्यों लाकड़ी', author: 'कबीर', hindiText: 'हाड़ जरें ज्यों लाकड़ी...' },

  // Chapter 2
  { id: '2-2-1', part: 2, chapter: 2, chapterSequence: 1, title: 'चींटी चावल ले चली', author: 'कबीर', hindiText: 'चींटी चावल ले चली...' },
  { id: '2-2-2', part: 2, chapter: 2, chapterSequence: 2, title: 'कदली सीप भुजङ्गमुख', author: 'अज्ञात', hindiText: 'कदली सीप भुजङ्गमुख...' },
  { id: '2-2-3', part: 2, chapter: 2, chapterSequence: 3, title: 'जो रहीम उत्तम प्रकृति', author: 'रहीम', hindiText: 'जो रहीम उत्तम प्रकृति...' },
  { id: '2-2-4', part: 2, chapter: 2, chapterSequence: 4, title: 'कबिरा तेरी झोपड़ी', author: 'कबीर', hindiText: 'कबिरा तेरी झोपड़ी...' },
  { id: '2-2-5', part: 2, chapter: 2, chapterSequence: 5, title: 'मृदङ्ग कहै धिक् है धिक् है', author: 'अज्ञात', hindiText: 'मृदङ्ग कहै धिक् है धिक् है...' },
  { id: '2-2-6', part: 2, chapter: 2, chapterSequence: 6, title: 'गाया है बूझा नहीं', author: 'कबीर', hindiText: 'गाया है बूझा नहीं...' },
  { id: '2-2-7', part: 2, chapter: 2, chapterSequence: 7, title: 'ऋतु बसन्त याचक भयो', author: 'अज्ञात', hindiText: 'ऋतु बसन्त याचक भयो...' },
  { id: '2-2-8', part: 2, chapter: 2, chapterSequence: 8, title: 'सहज मिलै सो दूधसम', author: 'कबीर', hindiText: 'सहज मिलै सो दूधसम...' },
  { id: '2-2-9', part: 2, chapter: 2, chapterSequence: 9, title: 'तुलसी कर पर कर करै', author: 'तुलसीदास', hindiText: 'तुलसी कर पर कर करै...' },
  { id: '2-2-10', part: 2, chapter: 2, chapterSequence: 10, title: 'अस्थिचर्ममय देह मम', author: 'तुलसीपत्नी', hindiText: 'अस्थिचर्ममय देह मम...' },
  { id: '2-2-11', part: 2, chapter: 2, chapterSequence: 11, title: 'तुलसी यह जग आयकै', author: 'तुलसीदास', hindiText: 'तुलसी यह जग आयकै...' },
  { id: '2-2-12', part: 2, chapter: 2, chapterSequence: 12, title: 'घर राखे घर जात है', author: 'तुलसीदास', hindiText: 'घर राखे घर जात है...' },
  { id: '2-2-13', part: 2, chapter: 2, chapterSequence: 13, title: 'कबिरा खड़ा बजार में लिये', author: 'कबीर', hindiText: 'कबिरा खड़ा बजार में लिये...' },
  { id: '2-2-14', part: 2, chapter: 2, chapterSequence: 14, title: 'चढ़ा मन्सूर सूलीपर', author: 'अज्ञात', hindiText: 'चढ़ा मन्सूर सूलीपर...' },
  { id: '2-2-15', part: 2, chapter: 2, chapterSequence: 15, title: 'साधु कहावन कठिन है', author: 'कबीर', hindiText: 'साधु कहावन कठिन है...' },

  // Chapter 3
  { id: '2-3-1', part: 2, chapter: 3, chapterSequence: 1, title: 'सन्त सन्त सब एक हैं', author: 'कबीर', hindiText: 'सन्त सन्त सब एक हैं...' },
  { id: '2-3-2', part: 2, chapter: 3, chapterSequence: 2, title: 'सिंहों के लेंहड़े नहीं', author: 'कबीर', hindiText: 'सिंहों के लेंहड़े नहीं...' },
  { id: '2-3-3', part: 2, chapter: 3, chapterSequence: 3, title: 'तुलसी मूरति राम की', author: 'तुलसीदास', hindiText: 'तुलसी मूरति राम की...' },
  { id: '2-3-4', part: 2, chapter: 3, chapterSequence: 4, title: 'अन्तर्जामिहुँ तें बड़', author: 'तुलसीदास', hindiText: 'अन्तर्जामिहुँ तें बड़...' },
  { id: '2-3-5', part: 2, chapter: 3, chapterSequence: 5, title: 'सगुर्नाहं अगुर्नाहं र्नाहं कछु', author: 'तुलसीदास', hindiText: 'सगुर्नाहं अगुर्नाहं र्नाहं कछु...' },
  { id: '2-3-6', part: 2, chapter: 3, chapterSequence: 6, title: 'चलती चक्की देखके', author: 'कबीर', hindiText: 'चलती चक्की देखके...' },
  { id: '2-3-7', part: 2, chapter: 3, chapterSequence: 7, title: 'कबीर कूता रामका', author: 'कबीर', hindiText: 'कबीर कूता रामका...' },
  { id: '2-3-8', part: 2, chapter: 3, chapterSequence: 8, title: 'घर घर माँगे टूक', author: 'तुलसीदास', hindiText: 'घर घर माँगे टूक...' },
  { id: '2-3-9', part: 2, chapter: 3, chapterSequence: 9, title: 'चित्रकूटके घाट पर', author: 'तुलसीदास', hindiText: 'चित्रकूटके घाट पर...' },
  { id: '2-3-10', part: 2, chapter: 3, chapterSequence: 10, title: 'पीछे माँगै चाकरी', author: 'कबीर', hindiText: 'पीछे माँगै चाकरी...' },
  { id: '2-3-11', part: 2, chapter: 3, chapterSequence: 11, title: 'चलो सखी तहँ जाइए', author: 'सूरदास', hindiText: 'चलो सखी तहँ जाइए...' },
  { id: '2-3-12', part: 2, chapter: 3, chapterSequence: 12, title: 'जो चाहे आकार तू', author: 'कबीर', hindiText: 'जो चाहे आकार तू...' },
  { id: '2-3-13', part: 2, chapter: 3, chapterSequence: 13, title: 'निराकार को आरसी', author: 'कबीर', hindiText: 'निराकार को आरसी...' },
  { id: '2-3-14', part: 2, chapter: 3, chapterSequence: 14, title: 'भजन भरोसे रामके', author: 'अज्ञात', hindiText: 'भजन भरोसे रामके...' },

  // Chapter 4
  { id: '2-4-1', part: 2, chapter: 4, chapterSequence: 1, title: 'छीररूप सतनाम है', author: 'कबीर', hindiText: 'छीररूप सतनाम है...' },
  { id: '2-4-2', part: 2, chapter: 4, chapterSequence: 2, title: 'गुरु तो वही सराहिए', author: 'कबीर', hindiText: 'गुरु तो वही सराहिए...' },
  { id: '2-4-3', part: 2, chapter: 4, chapterSequence: 3, title: 'गुरू कुम्हार सिख कुम्भ है', author: 'कबीर', hindiText: 'गुरू कुम्हार सिख कुम्भ है...' },
  { id: '2-4-4', part: 2, chapter: 4, chapterSequence: 4, title: 'कनफूंका गुरु हद्द का', author: 'कबीर', hindiText: 'कनफूंका गुरु हद्द का...' },
  { id: '2-4-5', part: 2, chapter: 4, chapterSequence: 5, title: 'गुरु गोविन्द दोऊ खड़े', author: 'कबीर', hindiText: 'गुरु गोविन्द दोऊ खड़े...' },
  { id: '2-4-6', part: 2, chapter: 4, chapterSequence: 6, title: 'एक लख चन्दा आन धरि', author: 'कबीर', hindiText: 'एक लख चन्दा आन धरि...' },
  { id: '2-4-7', part: 2, chapter: 4, chapterSequence: 7, title: 'अगुन सगुन दुइ ब्रह्मसरूपा', author: 'तुलसीदास', hindiText: 'अगुन सगुन दुइ ब्रह्मसरूपा...' },
  { id: '2-4-8', part: 2, chapter: 4, chapterSequence: 8, title: 'हम लखि लखहिं हमार', author: 'तुलसीदास', hindiText: 'हम लखि लखहिं हमार...' },
  { id: '2-4-9', part: 2, chapter: 4, chapterSequence: 9, title: 'एक छत्र एक मुकुटमनि', author: 'तुलसीदास', hindiText: 'एक छत्र एक मुकुटमनि...' },
  { id: '2-4-10', part: 2, chapter: 4, chapterSequence: 10, title: 'रामनाम सब कोइ कहे', author: 'अज्ञात', hindiText: 'रामनाम सब कोइ कहे...' },
  { id: '2-4-11', part: 2, chapter: 4, chapterSequence: 11, title: 'रामनाम मणि दीप धरु', author: 'तुलसीदास', hindiText: 'रामनाम मणि दीप धरु...' },
  { id: '2-4-12', part: 2, chapter: 4, chapterSequence: 12, title: 'नाम रामको कल्पतरु', author: 'तुलसीदास', hindiText: 'नाम रामको कल्पतरु...' },
  { id: '2-4-13', part: 2, chapter: 4, chapterSequence: 13, title: 'शुन्य मरै अजपा मरै', author: 'कबीर', hindiText: 'शुन्य मरै अजपा मरै...' },
  { id: '2-4-14', part: 2, chapter: 4, chapterSequence: 14, title: 'काल करो सो आज कर', author: 'अज्ञात', hindiText: 'काल करो सो आज कर...' },
  { id: '2-4-15', part: 2, chapter: 4, chapterSequence: 15, title: 'श्वास श्वास पर हर भजो', author: 'अज्ञात', hindiText: 'श्वास श्वास पर हर भजो...' },
  { id: '2-4-16', part: 2, chapter: 4, chapterSequence: 16, title: 'काँकर पाथर जोडकर', author: 'कबीर', hindiText: 'काँकर पाथर जोडकर...' },
  { id: '2-4-17', part: 2, chapter: 4, chapterSequence: 17, title: 'माला तो करमें फिरै', author: 'अज्ञात', hindiText: 'माला तो करमें फिरै...' },
  { id: '2-4-18', part: 2, chapter: 4, chapterSequence: 18, title: 'तू रहीम मन आपनो', author: 'रहीम', hindiText: 'तू रहीम मन आपनो...' },
  { id: '2-4-19', part: 2, chapter: 4, chapterSequence: 19, title: 'प्रीतम छबी नैनन बसी', author: 'रहीम', hindiText: 'प्रीतम छबी नैनन बसी...' },
  { id: '2-4-20', part: 2, chapter: 4, chapterSequence: 20, title: 'जिन खोजा तिन पाइया', author: 'कबीर', hindiText: 'जिन खोजा तिन पाइया...' },
  { id: '2-4-21', part: 2, chapter: 4, chapterSequence: 21, title: 'रक़ीबोने लिखाई है रपटे', author: 'अकबर', hindiText: 'रक़ीबोने लिखाई है रपटे...' },
  { id: '2-4-22', part: 2, chapter: 4, chapterSequence: 22, title: 'तुलसी ऐसे नामको', author: 'तुलसीदास', hindiText: 'तुलसी ऐसे नामको...' },
  { id: '2-4-23', part: 2, chapter: 4, chapterSequence: 23, title: 'भाव कुभाव अनख आलस', author: 'तुलसीदास', hindiText: 'भाव कुभाव अनख आलस...' },
  { id: '2-4-24', part: 2, chapter: 4, chapterSequence: 24, title: 'रहिमन गली है साँकरी', author: 'रहीम', hindiText: 'रहिमन गली है साँकरी...' },
  { id: '2-4-25', part: 2, chapter: 4, chapterSequence: 25, title: 'सर्गुणकी सेवा करो', author: 'कबीर', hindiText: 'सर्गुणकी सेवा करो...' },
  { id: '2-4-26', part: 2, chapter: 4, chapterSequence: 26, title: 'कबिरा धारा अगमकीं', author: 'कबीर', hindiText: 'कबिरा धारा अगमकीं...' },
  { id: '2-4-27', part: 2, chapter: 4, chapterSequence: 27, title: 'लाख कोस जो गुरु बसै', author: 'कबीर', hindiText: 'लाख कोस जो गुरु बसै...' },
  { id: '2-4-28', part: 2, chapter: 4, chapterSequence: 28, title: 'सर सूखै पन्छी उड़', author: 'रहीम', hindiText: 'सर सूखै पन्छी उड़...' },
  { id: '2-4-29', part: 2, chapter: 4, chapterSequence: 29, title: 'बार बराबर बारि है', author: 'अज्ञात', hindiText: 'बार बराबर बारि है...' },
  { id: '2-4-30', part: 2, chapter: 4, chapterSequence: 30, title: 'एक भरोसो एक बल', author: 'तुलसीदास', hindiText: 'एक भरोसो एक बल...' },

  // Chapter 5
  { id: '2-5-1', part: 2, chapter: 5, chapterSequence: 1, title: 'लिखा पढीकी बात नहीं', author: 'अज्ञात', hindiText: 'लिखा पढीकी बात नहीं...' },
  { id: '2-5-2', part: 2, chapter: 5, chapterSequence: 2, title: 'तुलसी या संसार को', author: 'तुलसीदास', hindiText: 'तुलसी या संसार को...' },
  { id: '2-5-3', part: 2, chapter: 5, chapterSequence: 3, title: 'हाथ छुड़ाये जात हो', author: 'सूरदास', hindiText: 'हाथ छुड़ाये जात हो...' },
  { id: '2-5-4', part: 2, chapter: 5, chapterSequence: 4, title: 'जो देखे सो कहै नहीं', author: 'कबीर', hindiText: 'जो देखे सो कहै नहीं...' },
  { id: '2-5-5', part: 2, chapter: 5, chapterSequence: 5, title: 'जो गूंगे के सैन को', author: 'कबीर', hindiText: 'जो गूंगे के सैन को...' },
  { id: '2-5-6', part: 2, chapter: 5, chapterSequence: 6, title: 'हीरा तहाँ न खोलिये', author: 'कबीर', hindiText: 'हीरा तहाँ न खोलिये...' },
  { id: '2-5-7', part: 2, chapter: 5, chapterSequence: 7, title: 'गुण इन्द्री सहजै गये', author: 'कबीर', hindiText: 'गुण इन्द्री सहजै गये...' },
  { id: '2-5-8', part: 2, chapter: 5, chapterSequence: 8, title: 'हाड़ सूखि पिञ्जर भए', author: 'अज्ञात', hindiText: 'हाड़ सूखि पिञ्जर भए...' },
  { id: '2-5-9', part: 2, chapter: 5, chapterSequence: 9, title: 'सब बाजे हिरदे बजे', author: 'कबीर', hindiText: 'सब बाजे हिरदे बजे...' },
  { id: '2-5-10', part: 2, chapter: 5, chapterSequence: 10, title: 'अलख पुरुष निर्वाण है', author: 'कबीर', hindiText: 'अलख पुरुष निर्वाण है...' },
  { id: '2-5-11', part: 2, chapter: 5, chapterSequence: 11, title: 'सबद सबद का अन्तरा', author: 'कबीर', hindiText: 'सबद सबद का अन्तरा...' },
  { id: '2-5-12', part: 2, chapter: 5, chapterSequence: 12, title: 'मकडी चढती तारसे', author: 'अज्ञात', hindiText: 'मकडी चढती तारसे...' },
  { id: '2-5-13', part: 2, chapter: 5, chapterSequence: 13, title: 'बूंद समानी बूंद में', author: 'अज्ञात', hindiText: 'बूंद समानी बूंद में...' },
  { id: '2-5-14', part: 2, chapter: 5, chapterSequence: 14, title: 'हरि दरिया सूभर भरा', author: 'कबीर', hindiText: 'हरि दरिया सूभर भरा...' },
  { id: '2-5-15', part: 2, chapter: 5, chapterSequence: 15, title: 'सुन्न मंडलमें घर', author: 'कबीर', hindiText: 'सुन्न मंडलमें घर...' },
  { id: '2-5-16', part: 2, chapter: 5, chapterSequence: 16, title: 'गगन गरजि बरसै अमी', author: 'कबीर', hindiText: 'गगन गरजि बरसै अमी...' },
  { id: '2-5-17', part: 2, chapter: 5, chapterSequence: 17, title: 'धरनी पलक परै नहीं', author: 'धरनीदास', hindiText: 'धरनी पलक परै नहीं...' },
  { id: '2-5-18', part: 2, chapter: 5, chapterSequence: 18, title: 'पिञ्जर प्रेम प्रकासिया', author: 'कबीर', hindiText: 'पिञ्जर प्रेम प्रकासिया...' },
  { id: '2-5-19', part: 2, chapter: 5, chapterSequence: 19, title: 'सुन्न सहज मन सुमिरते', author: 'अज्ञात', hindiText: 'सुन्न सहज मन सुमिरते...' },
  { id: '2-5-20', part: 2, chapter: 5, chapterSequence: 20, title: 'लागी लागी सब कहै', author: 'अज्ञात', hindiText: 'लागी लागी सब कहै...' },
  { id: '2-5-21', part: 2, chapter: 5, chapterSequence: 21, title: 'हृदया भीतर आरसी', author: 'कबीर', hindiText: 'हृदया भीतर आरसी...' },
  { id: '2-5-22', part: 2, chapter: 5, chapterSequence: 22, title: 'पियको हेरन मैं गयी', author: 'अज्ञात', hindiText: 'पियको हेरन मैं गयी...' },
  { id: '2-5-23', part: 2, chapter: 5, chapterSequence: 23, title: 'मनुवा मेरो मरि गयो', author: 'कबीर', hindiText: 'मनुवा मेरो मरि गयो...' },
  { id: '2-5-24', part: 2, chapter: 5, chapterSequence: 24, title: 'कबिरा देखा एक अङ्ग', author: 'कबीर', hindiText: 'कबिरा देखा एक अङ्ग...' },
  { id: '2-5-25', part: 2, chapter: 5, chapterSequence: 25, title: 'सुरत उड़ानी गगनको', author: 'कबीर', hindiText: 'सुरत उड़ानी गगनको...' },
  { id: '2-5-26', part: 2, chapter: 5, chapterSequence: 26, title: 'बड़ा लुफ्त है यार इश्कमें', author: 'मन्सूर', hindiText: 'बड़ा लुफ्त है यार इश्कमें...' },
  { id: '2-5-27', part: 2, chapter: 5, chapterSequence: 27, title: 'दी गई मन्सूर को सूली', author: 'मन्सूर', hindiText: 'दी गई मन्सूर को सूली...' },
  { id: '2-5-28', part: 2, chapter: 5, chapterSequence: 28, title: 'रहिमन बात अगम्य की', author: 'रहीम', hindiText: 'रहिमन बात अगम्य की...' },
  { id: '2-5-29', part: 2, chapter: 5, chapterSequence: 29, title: 'बड़े बड़ाई ना करें', author: 'अज्ञात', hindiText: 'बड़े बड़ाई ना करें...' },
  { id: '2-5-30', part: 2, chapter: 5, chapterSequence: 30, title: 'कबिरा खड़ा बजार में दोनों', author: 'कबीर', hindiText: 'कबिरा खड़ा बजार में दोनों...' },
  { id: '2-5-31', part: 2, chapter: 5, chapterSequence: 31, title: 'मेरा मुझ में कुछ नहीं', author: 'कबीर', hindiText: 'मेरा मुझ में कुछ नहीं...' },
  { id: '2-5-32', part: 2, chapter: 5, chapterSequence: 32, title: 'तरुवर फल नहीं खात है', author: 'रहीम', hindiText: 'तरुवर फल नहीं खात है...' },
  { id: '2-5-33', part: 2, chapter: 5, chapterSequence: 33, title: 'कबिरा हम गुरुरस पिया', author: 'कबीर', hindiText: 'कबिरा हम गुरुरस पिया...' },
  { id: '2-5-34', part: 2, chapter: 5, chapterSequence: 34, title: 'नोन मला पानी मिला', author: 'कबीर', hindiText: 'नोन मला पानी मिला...' },
  { id: '2-5-35', part: 2, chapter: 5, chapterSequence: 35, title: 'हद हद पर सब ही गया', author: 'कबीर', hindiText: 'हद हद पर सब ही गया...' },
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