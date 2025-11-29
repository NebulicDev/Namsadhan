// assets/text/pravachansData.ts
import { ImageSourcePropType } from 'react-native';

export interface PravachanTrack {
  id: string;       // Unique ID for the track (can be same as driveId)
  title: string;    // Title of the pravachan
  driveId: string;  // Google Drive ID
  year?: number;    // Optional: Year of the recording
  duration?: string; // Optional: Duration string (e.g., "45:00")
}

export interface SpeakerProfile {
  id: string;       // Unique ID for the speaker (e.g., 'gurudev')
  name: string;     // Display Name
  image: ImageSourcePropType; // Local image path
  tracks: PravachanTrack[];
}

export const PRAVACHANS_DATA: SpeakerProfile[] = [
    {
    id: 'sr',
    name: 'Shri Ramanna Kulkarni',
    image: require('../images/speakers/sr.jpg'),
    tracks: [],
     },
    {
    id: 'gvt',
    name: 'Shri Kakasaheb Tulpule',
    image: require('../images/speakers/gvt.jpg'),
    tracks: [
       {
    "id": "1mzPm4vi-_J2GQbyGDKD6n1ywoF5zVJb0",
    "title": "Shravan Nimbal 1982 Pravachan 3",
    "driveId": "1mzPm4vi-_J2GQbyGDKD6n1ywoF5zVJb0",
    "year": 1982
  },
  {
    "id": "1VA4AoxiFykmHZw37RCPOqDYMk27XnviD",
    "title": "Tukaram_Nimbal 1980 Pravachan 2",
    "driveId": "1VA4AoxiFykmHZw37RCPOqDYMk27XnviD",
    "year": 1980
  },
  {
    "id": "1XYdWBEYW4sxcuAxGvNFPXOexEyWp3YBa",
    "title": "Tukaram_Nimbal 1980 Pravachan 4",
    "driveId": "1XYdWBEYW4sxcuAxGvNFPXOexEyWp3YBa",
    "year": 1980
  },
  {
    "id": "1oUaau8UsAR4ZKO8kXJqB5t2J8VTgLqSg",
    "title": "Diwali_Nimbal 1974 Pravachan",
    "driveId": "1oUaau8UsAR4ZKO8kXJqB5t2J8VTgLqSg",
    "year": 1974
  },
  {
    "id": "1iBiZi64MbRZkRu3wY9O8A5hj4o1MYHqA",
    "title": "Tukaram_Talegaon 1973 Pravachan",
    "driveId": "1iBiZi64MbRZkRu3wY9O8A5hj4o1MYHqA",
    "year": 1973
  },
  {
    "id": "1vso_3g3fhNu8sKf2S-EU7udXGmaIOFgL",
    "title": "Tukaram_Talegaon 1973 Pravachan 1",
    "driveId": "1vso_3g3fhNu8sKf2S-EU7udXGmaIOFgL",
    "year": 1973
  },
  {
    "id": "1skS0cvsa4T5BgykmNJkE78fDDsyZzoq_",
    "title": "1972 Pravachan",
    "driveId": "1skS0cvsa4T5BgykmNJkE78fDDsyZzoq_",
    "year": 1972
  },
  {
    "id": "11BSxR1vxmNZbCptznDkh92jkOvyaKJlp",
    "title": "Dnyaneshwarmandir_Dadar 1971 Pravachan 2",
    "driveId": "11BSxR1vxmNZbCptznDkh92jkOvyaKJlp",
    "year": 1971
  },
  {
    "id": "19d5-R3ERjdLjwzPeioU8Yd1SHcX1pyFL",
    "title": "Dnyaneshwarmandir_Dadar 1971 Pravachan 3",
    "driveId": "19d5-R3ERjdLjwzPeioU8Yd1SHcX1pyFL",
    "year": 1971
  },
  {
    "id": "1bumDS--ATF76GUnuppZE22_Iy79D4lfU",
    "title": "Atmagynanatmak PrathamikVichar 1",
    "driveId": "1bumDS--ATF76GUnuppZE22_Iy79D4lfU"
  },
  {
    "id": "120ma4vBoGp02M4FcSSnD1O_0cp5sX_VV",
    "title": "Atmagynanatmak PrathamikVichar 2",
    "driveId": "120ma4vBoGp02M4FcSSnD1O_0cp5sX_VV"
  },
  {
    "id": "1GJqUr1vX2nE5dFothoTUY7wv-1z4AYeu",
    "title": "Bhaktismulvirakti Pravachan 1",
    "driveId": "1GJqUr1vX2nE5dFothoTUY7wv-1z4AYeu"
  },
  {
    "id": "1HPcKTsyP6820ybzT7d1KMybJW5Vawz_d",
    "title": "VyaragyaSiddhi Pravachan 2",
    "driveId": "1HPcKTsyP6820ybzT7d1KMybJW5Vawz_d"
  },
  {
    "id": "1US7X-i8i2YKJXNhqztyC0u32K9pBIU2G",
    "title": "Brahmasaunsprasha Sangli Pravachan 1",
    "driveId": "1US7X-i8i2YKJXNhqztyC0u32K9pBIU2G"
  },
  {
    "id": "1tFKypPakfYwfEn3Ch9YjypqBR5w-yJMX",
    "title": "EdeAnubhava mantapavu 25/8/80",
    "driveId": "1tFKypPakfYwfEn3Ch9YjypqBR5w-yJMX",
    "year":1980
  },
  {
    "id": "1E_JHiEbmCegeM-SIv0_n5PoGCEAjg9-f",
    "title": "VyaraghyaAnusandhanShanti",
    "driveId": "1E_JHiEbmCegeM-SIv0_n5PoGCEAjg9-f"
  },
  {
    "id": "1stCSx3_3t2fwNqAK8zvzZEx3VaMy0m8L",
    "title": "Atmagynanatmak PrathamikVichar 1",
    "driveId": "1stCSx3_3t2fwNqAK8zvzZEx3VaMy0m8L"
  },
  {
    "id": "1StvQFSjfuZP_iQziR1Z46m5bj0WyMxVr",
    "title": "Atmagynanatmak PrathamikVichar 2",
    "driveId": "1StvQFSjfuZP_iQziR1Z46m5bj0WyMxVr"
  },
  {
    "id": "1cb8V47Jl_yjl3cFVBPF-eTV0e3X97ztN",
    "title": "Bhaktismulvirakti",
    "driveId": "1cb8V47Jl_yjl3cFVBPF-eTV0e3X97ztN"
  },
  {
    "id": "1BEMk4NZsrMrDwlEla35JwzzbBfnyB6Ut",
    "title": "Brahmasaunsprasha Sangli",
    "driveId": "1BEMk4NZsrMrDwlEla35JwzzbBfnyB6Ut"
  },
  {
    "id": "1RlSOQZaQNDuPUm-2fZe-ohuX1gtD0LJD",
    "title": "Gurukrupanjana 28/2/78",
    "driveId": "1RlSOQZaQNDuPUm-2fZe-ohuX1gtD0LJD",
    "year": 1978
  },
  {
    "id": "1mOIJE1IOEyJ4-rqtzF6KKgtYUkalTGnh",
    "title": "Jaisadevtaisaguru 3/9/78 Pravachan",
    "driveId": "1mOIJE1IOEyJ4-rqtzF6KKgtYUkalTGnh",
    "year": 1978
  },
  {
    "id": "1mJObiJLeoq-QhJwtjSn7SmwJKoDuaw0W",
    "title": "Last 18/5/82 Pravachan",
    "driveId": "1mJObiJLeoq-QhJwtjSn7SmwJKoDuaw0W",
    "year": 1982
  },
  {
    "id": "1Sv_nnUsSdKi7XeRviu0QSnyr0oL0Otv0",
    "title": "1 MaharajPatra 5/5/80",
    "driveId": "1Sv_nnUsSdKi7XeRviu0QSnyr0oL0Otv0",
     "year": 1980
  },
  {
    "id": "1MUbgMq-8ocNCUB3LMRy1mWoMqtMH5WFJ",
    "title": "2 MaharajPatra 5/5/80",
    "driveId": "1MUbgMq-8ocNCUB3LMRy1mWoMqtMH5WFJ",
    "year": 1980
  },
  {
    "id": "1OT6ToJKJdIh2SPTYYjeufh2KPvXS0ppI",
    "title": "Mahipati 18/8/80 Pravachan",
    "driveId": "1OT6ToJKJdIh2SPTYYjeufh2KPvXS0ppI",
    "year": 1980
  },
  {
    "id": "1GFaPF6iCB1romoqxSlN6PN0Ow9HHbk4Q",
    "title": "Moghara Phulala",
    "driveId": "1GFaPF6iCB1romoqxSlN6PN0Ow9HHbk4Q"
  },
  {
    "id": "1in7KwGYBeC3ZA7vIK_fizL0pDvAph8LS",
    "title": "Namasadhaneche Marga",
    "driveId": "1in7KwGYBeC3ZA7vIK_fizL0pDvAph8LS"
  },
  {
    "id": "1049ClAY6dOQ_BwsDp02lCOJOyOsGgOWt",
    "title": "Nimbal 30/9/80",
    "driveId": "1049ClAY6dOQ_BwsDp02lCOJOyOsGgOWt",
    "year": 1980
  },
  {
    "id": "1jNPgZTPoX5utcNrb5_CET6vPnBWRQ5Fs",
    "title": "Omtatsat Pravachan",
    "driveId": "1jNPgZTPoX5utcNrb5_CET6vPnBWRQ5Fs"
  },
  {
    "id": "1mMwHfzDqB3GyMUIWtc-xQIqx3wQnap9U",
    "title": "Pravachan 1",
    "driveId": "1mMwHfzDqB3GyMUIWtc-xQIqx3wQnap9U"
  },
  {
    "id": "1ilG4iPwTk2Lr091oSJRWnfFszfgvKmfS",
    "title": "Pravachan 2",
    "driveId": "1ilG4iPwTk2Lr091oSJRWnfFszfgvKmfS"
  },
  {
    "id": "1MDfJxk6NmMLd-IkrCRuIF8Dw91jjCNMS",
    "title": "Pravachan 3",
    "driveId": "1MDfJxk6NmMLd-IkrCRuIF8Dw91jjCNMS"
  },
  {
    "id": "1rwMlHUN9IxMpq5giUfEfUz4jSTkHkpYM",
    "title": "Pravachan 4",
    "driveId": "1rwMlHUN9IxMpq5giUfEfUz4jSTkHkpYM"
  },
  {
    "id": "1BD3M94b37RSyHZmHKrCZIimHq8BbyG9F",
    "title": "Sadagun 19/2/75",
    "driveId": "1BD3M94b37RSyHZmHKrCZIimHq8BbyG9F",
    "year": 1975
  },
  {
    "id": "1GeEmqnvd-Et58ISBb6BoUoflzeTUSeZj",
    "title": "SakhyaBhakti",
    "driveId": "1GeEmqnvd-Et58ISBb6BoUoflzeTUSeZj"
  },
  {
    "id": "1xol80jNdFJuiOoj-3_c1pKbeR743QB2_",
    "title": "Sakshatkarache shikhar",
    "driveId": "1xol80jNdFJuiOoj-3_c1pKbeR743QB2_"
  },
  {
    "id": "1VmUE3YWOF2lU5d-7lxZ-Ik_xLecVpeV9",
    "title": "Shravan Nimbal 24/9/80",
    "driveId": "1VmUE3YWOF2lU5d-7lxZ-Ik_xLecVpeV9",
    "year": 1980
  },
  {
    "id": "1wceYj30JR7H5EVWyu23ndE8kAnCy4DEC",
    "title": "Shri Maharaj Punyatithi ",
    "driveId": "1wceYj30JR7H5EVWyu23ndE8kAnCy4DEC"
  },
  {
    "id": "1qLsZQZ8Yuc4tAkE7tdgd8icf0m3DqyQQ",
    "title": "Tukaram_Bijapur_3/2/80",
    "driveId": "1qLsZQZ8Yuc4tAkE7tdgd8icf0m3DqyQQ",
    "year": 1980
  },
  {
    "id": "1-FFCz4xTi8YDhQr8-fZsXrZhs3BFx_8i",
    "title": "19/4/80",
    "driveId": "1-FFCz4xTi8YDhQr8-fZsXrZhs3BFx_8i",
    "year": 1980
  },
  {
    "id": "1S7ImcglLRebLvNvd95Vv-BiaiNd2V3Yn",
    "title": "20/4/80",
    "driveId": "1S7ImcglLRebLvNvd95Vv-BiaiNd2V3Yn",
    "year": 1980
  },
  {
    "id": "1AkNaGAkoMCZZuLbtElpAvWKOBrkGiCJS",
    "title": "Bijapur 22/8/75",
    "driveId": "1AkNaGAkoMCZZuLbtElpAvWKOBrkGiCJS",
    "year": 1975
  },
  {
    "id": "1cEwbmlkWr0EEro-w0gcpB2PbMXTiqDqi",
    "title": "Bijapur 24/8/75",
    "driveId": "1cEwbmlkWr0EEro-w0gcpB2PbMXTiqDqi",
    "year": 1975
  },
  {
    "id": "1G6CC95E9pZV1QEW83gXab78jDPuVi5qj",
    "title": "Dadar 1/12/74",
    "driveId": "1G6CC95E9pZV1QEW83gXab78jDPuVi5qj",
    "year": 1974
  },
  {
    "id": "1U9vZ-weEJ002hhM8Psp_xIVn0jmG0vOo",
    "title": "Darkniteofsoul_Nimbal_5/2/80",
    "driveId": "1U9vZ-weEJ002hhM8Psp_xIVn0jmG0vOo",
    "year": 1980
  },
  {
    "id": "1jtONguks4u50tRnRXJwZWc0l7nCFj83H",
    "title": "GitaSashatkar_Mumbai",
    "driveId": "1jtONguks4u50tRnRXJwZWc0l7nCFj83H"
  },
  {
    "id": "1FnfheUFtvyOH6IaWibNKRXj1RiKDOUmP",
    "title": "Jevan Krutharatha",
    "driveId": "1FnfheUFtvyOH6IaWibNKRXj1RiKDOUmP"
  },
  {
    "id": "1kTzTnMK-8WSBxcR8yKLJ22LvSxHsVi7i",
    "title": "MemajeZana",
    "driveId": "1kTzTnMK-8WSBxcR8yKLJ22LvSxHsVi7i"
  },
  {
    "id": "15xiNfOuLFgEQ80UFEdFNq0kY7FX3l5tk",
    "title": "Nimbal_2/9/80",
    "driveId": "15xiNfOuLFgEQ80UFEdFNq0kY7FX3l5tk",
    "year": 1980
  },
  {
    "id": "1VlxOdDPyOZKKhmSEKsWwfS-aElMC14Pz",
    "title": "Padsevan Pravachan",
    "driveId": "1VlxOdDPyOZKKhmSEKsWwfS-aElMC14Pz"
  },
  {
    "id": "1cOnC8CS2vkfILv_rqlCCOI06RjkQi60r",
    "title": "Pravachan 5",
    "driveId": "1cOnC8CS2vkfILv_rqlCCOI06RjkQi60r"
  },
  {
    "id": "1JfZXjEnTtFTGMbbZQiOJszGAzPEzqD54",
    "title": "Pravachan 6",
    "driveId": "1JfZXjEnTtFTGMbbZQiOJszGAzPEzqD54"
  },
  {
    "id": "1tH-2ZuGJnTfcyHS77nN8USKd3os7pfZp",
    "title": "Pravachan 7",
    "driveId": "1tH-2ZuGJnTfcyHS77nN8USKd3os7pfZp"
  },
  {
    "id": "1v68OxKRUBGQ4ZKh9BKARxLttdM9ageA7",
    "title": "Pravachan 8",
    "driveId": "1v68OxKRUBGQ4ZKh9BKARxLttdM9ageA7"
  },
  {
    "id": "1pTFxBUbqHFD5zOw0rZcX_-rDZOeHu6GB",
    "title": "Pravachan 9",
    "driveId": "1pTFxBUbqHFD5zOw0rZcX_-rDZOeHu6GB"
  },
  {
    "id": "1dx9dqxc-oORg330kzPENacyYj6O6BE2D",
    "title": "Rasagaganamay ghupha",
    "driveId": "1dx9dqxc-oORg330kzPENacyYj6O6BE2D"
  },
  {
    "id": "10e1PJcDIXXic9RPbdv-1l_Gf2gXw_vlo",
    "title": "1. Sangli Pravachan",
    "driveId": "10e1PJcDIXXic9RPbdv-1l_Gf2gXw_vlo"
  },
  {
    "id": "1E8jaPHy0B0krgCo_gr5jwNsnXtzpFG6a",
    "title": "2. Sangli Pravachan",
    "driveId": "1E8jaPHy0B0krgCo_gr5jwNsnXtzpFG6a"
  },
  {
    "id": "1N5qdDY15i0vQ14DT0CMJgkXbdEVvxJtt",
    "title": "1. Swarupsakshatkar 15/10/78",
    "driveId": "1N5qdDY15i0vQ14DT0CMJgkXbdEVvxJtt",
    "year": 1978
  },
  {
    "id": "1Z3sAFLMlT_Y-186ulLv-BDaaeOUp74FY",
    "title": "2. Swarupsakshatkar 15/10/78",
    "driveId": "1Z3sAFLMlT_Y-186ulLv-BDaaeOUp74FY",
    "year": 1978
  },
  {
    "id": "1cHxzjusdfcM6Xa0j9glwjbX2m4QKb8BV",
    "title": "1. TukaramAbhanga",
    "driveId": "1cHxzjusdfcM6Xa0j9glwjbX2m4QKb8BV"
  },
  {
    "id": "193xoHKrUb0jHr_lkXmm64T5r9IjEJzGT",
    "title": "2. TukaramAbhanga",
    "driveId": "193xoHKrUb0jHr_lkXmm64T5r9IjEJzGT"
  },
  {
    "id": "148cgz0B6OwSaOq3ZRfKODVMXzbU6v6gM",
    "title": "3. TukaramAbhanga",
    "driveId": "148cgz0B6OwSaOq3ZRfKODVMXzbU6v6gM"
  },
  {
    "id": "1P1R9DcgdQ4DyO2z-ZAF9MKBrHxAOR22n",
    "title": "4. TukaramAbhanga",
    "driveId": "1P1R9DcgdQ4DyO2z-ZAF9MKBrHxAOR22n"
  },
  {
    "id": "1wDa8X7FEDDb6j_usLazlB1bt_Q3M19Xe",
    "title": "5. TukaramAbhanga",
    "driveId": "1wDa8X7FEDDb6j_usLazlB1bt_Q3M19Xe"
  },
  {
    "id": "159MOSYOUWn7gJS3Ei34fVHM6oJ09Cd16",
    "title": "1. VyaraghyaAnusandhanShanti",
    "driveId": "159MOSYOUWn7gJS3Ei34fVHM6oJ09Cd16"
  },
  {
    "id": "1-aXUwdM-v7Bv6Ja_6oetoMrPWYPOCZ_K",
    "title": "2. VyaraghyaAnusandhanShanti",
    "driveId": "1-aXUwdM-v7Bv6Ja_6oetoMrPWYPOCZ_K"
  },
  {
    "id": "1VJwi4T1UeT9Np-G3qGpPYGOyGkIKVgaD",
    "title": "VyaragyaSiddhi",
    "driveId": "1VJwi4T1UeT9Np-G3qGpPYGOyGkIKVgaD"
  },
  {
    "id": "1PPf7P8GiRWF8iY8-mZsn7he79K0Ogxuj",
    "title": "EdeAnubhava mantapavu 25/8/80",
    "driveId": "1PPf7P8GiRWF8iY8-mZsn7he79K0Ogxuj",
    "year": 1980
  },
  {
    "id": "1NCdkVMwuhG8fqJ_t4SStBRffaAMZ7W6Q",
    "title": "Namasadhaneche manasshastra_Dadar_4/12/72",
    "driveId": "1NCdkVMwuhG8fqJ_t4SStBRffaAMZ7W6Q",
    "year": 1972
  },
  {
    "id": "157oCeGlw55lQBhaLCLEqnbBngzNYaTPf",
    "title": "Namasadhaneche manasshastra_Dadar_5/12/72",
    "driveId": "157oCeGlw55lQBhaLCLEqnbBngzNYaTPf",
    "year": 1972
  },
  {
    "id": "1rrMBc1LmfOPYrUU95Pq0fiOP32y-qy1c",
    "title": "Namasadhaneche manasshastra_Dadar_6/12/72",
    "driveId": "1rrMBc1LmfOPYrUU95Pq0fiOP32y-qy1c",
    "year": 1972

  },
  {
    "id": "1MpNjSiWWXWNLKtvFar9YEQAYFCxMbDcw",
    "title": "Namasadhaneche manasshastra_Dadar_6/12/82",
    "driveId": "1MpNjSiWWXWNLKtvFar9YEQAYFCxMbDcw",
    "year": 1982
  },
  {
    "id": "1-kUF-17Jl5EbsAwaE7tR9LGn_YT3r4D6",
    "title": "Namasadhaneche manasshastra_KabirPoem",
    "driveId": "1-kUF-17Jl5EbsAwaE7tR9LGn_YT3r4D6"
  },
  {
    "id": "1u3bUfhcqd0AwuXi-t9ADIeTTyrt7Wmbw",
    "title": "Paratatvachadrushtine Sashatkarachinikash",
    "driveId": "1u3bUfhcqd0AwuXi-t9ADIeTTyrt7Wmbw"
  },
  {
    "id": "1RWpsjROUqO2CGlm_X4cdrQoMasgf9TC_",
    "title": "Sankatachyapayryane_sopanchadaleleGurudev",
    "driveId": "1RWpsjROUqO2CGlm_X4cdrQoMasgf9TC_"
  },
  {
    "id": "1vM7LwkvBFda8ChzOCkwhNXRWeln_oCxt",
    "title": "Shri_Baba_47th Punyatithi 11/1/81",
    "driveId": "1vM7LwkvBFda8ChzOCkwhNXRWeln_oCxt",
    "year": 1981
  },
  {
    "id": "1I18ONeciTLZcyssz5r2_eDmJh8igokxh",
    "title": "Visarukasame_Gurukapadukala_5/8/74",
    "driveId": "1I18ONeciTLZcyssz5r2_eDmJh8igokxh",
    "year": 1974
  }
    ],
     },
    {
    id: 'DAK',
    name: 'Dr. Anilkumar Kulkarni',
    image: require('../images/speakers/dak.jpeg'),
    tracks: [
      {
        id: 'track 1',
        title: '17 June 2021',
        driveId: '1AWExo1FObm38eZLjWEzGi-n0hxbv1FMh', 
        year: 2021,
      },
      
      {
        id: 'track_2',
        title: '10 August 2021',
        driveId: '1I5A0KeGvhJMAsrwq2Pifzyk56YyowX-J',
        year: 2021,
      },
    ],
  },
  {
    id: 'dsk',
    name: 'Dr. Suhas Kulkarni',
    image: require('../images/speakers/profile.jpeg'),
    tracks: [],
  },
  {
    id: 'vsh',
    name: 'Dr. Vivek Haldavnekar',
    image: require('../images/speakers/vsh.jpeg'),
    tracks: [],
  },
  
];

// Helper to get download URL
export const getDriveDownloadUrl = (driveId: string) => 
  `https://drive.google.com/uc?export=download&id=${driveId}`;