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
    id: 'sr',
    name: 'Shri Ramanna Kulkarni',
    image: require('../images/speakers/sr.jpg'),
    tracks: [
          {
    "id": "18Ct3JmUoZLmHIZaT2Xj9H3GqK4kht17W",
    "title": "ShrimatiShakutai_Pune_1994 ",
    "driveId": "18Ct3JmUoZLmHIZaT2Xj9H3GqK4kht17W",
    "year": 1994
  },
  {
    "id": "1ppOAjCGdMQjPjoup2dSHvor-T5vIfWvC",
    "title": "Rajabhau_1994 ",
    "driveId": "1ppOAjCGdMQjPjoup2dSHvor-T5vIfWvC",
    "year": 1994
  },
  {
    "id": "1yaz9VZw2KDfA6gEx9m4n2vxcmMrzJpsp",
    "title": "BhaiPandit_Pune_14/1/1994 ",
    "driveId": "1yaz9VZw2KDfA6gEx9m4n2vxcmMrzJpsp",
    "year": 1994
  },
  {
    "id": "1MHZ_W7BmGXDWFSyC_uGlS72-bQojs6T7",
    "title": "Dynashwari_Nimbal_8/8/1994 1",
    "driveId": "1MHZ_W7BmGXDWFSyC_uGlS72-bQojs6T7",
    "year": 1994
  },
  {
    "id": "1V7F4MbDuSkB3O0rkphSUlEExlLcjtsPs",
    "title": "21/07/1993 ",
    "driveId": "1V7F4MbDuSkB3O0rkphSUlEExlLcjtsPs",
    "year": 1993
  },
  {
    "id": "1QxqGyJrGfAWco1F6xn7EMG5qLsr1oLfK",
    "title": "Mokashi_Pune_1992 1",
    "driveId": "1QxqGyJrGfAWco1F6xn7EMG5qLsr1oLfK",
    "year": 1992
  },
  {
    "id": "1cS1pCkCQXyWSgypSfS5f3hFje9Kt8FQD",
    "title": "Dr.Kumar_20/10/1991 ",
    "driveId": "1cS1pCkCQXyWSgypSfS5f3hFje9Kt8FQD",
    "year": 1991
  },
  {
    "id": "1srQDsHmRSuT2uOWyFC9bsjHD1bDPJF_l",
    "title": "Nimbal_1991 ",
    "driveId": "1srQDsHmRSuT2uOWyFC9bsjHD1bDPJF_l",
    "year": 1991
  },
  {
    "id": "1fvA-bdsv2pG32_YVhe9IPA5F9WkKkGr_",
    "title": "Nimbal_1991 3",
    "driveId": "1fvA-bdsv2pG32_YVhe9IPA5F9WkKkGr_",
    "year": 1991
  },
  {
    "id": "1VE-Hlt8Tzq6OHz_f-RzjWRPUw3fQDaP5",
    "title": "Dr_Anil_Kulkarni_Mulund_1991 ",
    "driveId": "1VE-Hlt8Tzq6OHz_f-RzjWRPUw3fQDaP5",
    "year": 1991
  },
  {
    "id": "1xn7_qe4ZdPY6cAioQamijC5whvA0pn12",
    "title": "01/11/1987 ",
    "driveId": "1xn7_qe4ZdPY6cAioQamijC5whvA0pn12",
    "year": 1987
  },
  {
    "id": "1CcuaTbOD6ESPQJzbgv-IzeIIEUmYWBMl",
    "title": "Dev_nalla_veru_07/01/1987 ",
    "driveId": "1CcuaTbOD6ESPQJzbgv-IzeIIEUmYWBMl",
    "year": 1987
  },
  {
    "id": "1N5HdYAG1VxzV-g9EbeHFKHWJFrCzRm0O",
    "title": "1/12/1986 ",
    "driveId": "1N5HdYAG1VxzV-g9EbeHFKHWJFrCzRm0O",
    "year": 1986
  },
  {
    "id": "1fosVn7ptkMYPa9oSSyUuoGQN_nx8JTwG",
    "title": "Dnyaneshwari_07/01/1983 ",
    "driveId": "1fosVn7ptkMYPa9oSSyUuoGQN_nx8JTwG",
    "year": 1983
  },
  {
    "id": "10pIaxiJ-LVy6ZMsvZC-ehYVEnEx2tGa2",
    "title": "Aanandu_re_sant_sbha_Dasbodh_14/11/1980_Pravahcan",
    "driveId": "10pIaxiJ-LVy6ZMsvZC-ehYVEnEx2tGa2",
    "year": 1980
  },
  {
    "id": "1K_IX30edsWkcBroiOa1W7_I64v36cBKr",
    "title": "S_D_Jogalekar_19/10/1979 ",
    "driveId": "1K_IX30edsWkcBroiOa1W7_I64v36cBKr",
    "year": 1979
  },
  {
    "id": "1s629P35EoqMo1Xn1beeFVs3dSyWb3Zrx",
    "title": "Dhanya_ho_Prdakshina_31/10/1976 ",
    "driveId": "1s629P35EoqMo1Xn1beeFVs3dSyWb3Zrx",
    "year": 1976
  },
  {
    "id": "1XSkNzhn00J3zHaPLvVS4jobExLg9ZdfM",
    "title": "S_D_Jogalekar_03/11/1975 _",
    "driveId": "1XSkNzhn00J3zHaPLvVS4jobExLg9ZdfM",
    "year": 1975
  },
  {
    "id": "1s4OsKctCVI0N_SRADTUvBFTmR4I1d9-W",
    "title": "Vijaya_dashami_vastushant_10/10/89",
    "driveId": "1s4OsKctCVI0N_SRADTUvBFTmR4I1d9-W",
    "year": 1989
  },
  {
    "id": "1UdUkQ65gbtKMt8TM_ZJ7o-mkLTqeQfUu",
    "title": "Nimbal_02/8/84 ",
    "driveId": "1UdUkQ65gbtKMt8TM_ZJ7o-mkLTqeQfUu",
    "year": 1984
  },
  {
    "id": "1a-8VjQSDMSpglhHVaSgu4OmSrLmJCyCK",
    "title": "Nimbal_17/8/92 ",
    "driveId": "1a-8VjQSDMSpglhHVaSgu4OmSrLmJCyCK",
    "year": 1992
  },
  {
    "id": "1XI89rWssDmpHPIAdAi3cN-0QI73ai3NX",
    "title": "Nimbal_18/8/94 ",
    "driveId": "1XI89rWssDmpHPIAdAi3cN-0QI73ai3NX",
    "year": 1994
  },
  {
    "id": "1ITKL3xRIVX17LZJCJH74KaMOEJsALHuy",
    "title": "Nimbal_29/8/89 ",
    "driveId": "1ITKL3xRIVX17LZJCJH74KaMOEJsALHuy",
    "year": 1989
  },
  {
    "id": "1weThPWL6Llr7MC_x0frGLzquGDR4kCW8",
    "title": "Pantharaj_Nimbal 5",
    "driveId": "1weThPWL6Llr7MC_x0frGLzquGDR4kCW8"
  },
  {
    "id": "1qtmM0kxv_PsAGLJISmfuGvPd4cUgJ3XU",
    "title": "Shravan_Nimbal_01/8/93 ",
    "driveId": "1qtmM0kxv_PsAGLJISmfuGvPd4cUgJ3XU",
    "year": 1993
  },
  {
    "id": "1bjonURzKcsym8m3YfuI_aJI1zFQV_1VZ",
    "title": "_Mokashi_Pune_14/4/92 ",
    "driveId": "1bjonURzKcsym8m3YfuI_aJI1zFQV_1VZ",
    "year": 1992
  },
  {
    "id": "1d0LTWms6xe0o914DIh3HYwfO9Iy5JyzD",
    "title": "02/8/84 ",
    "driveId": "1d0LTWms6xe0o914DIh3HYwfO9Iy5JyzD",
    "year": 1984
  },
  {
    "id": "1T3Sv3IYAibUm4KAJihDH3JSFn5bXvn2j",
    "title": "16/11/80 ",
    "driveId": "1T3Sv3IYAibUm4KAJihDH3JSFn5bXvn2j",
    "year": 1980
  },
  {
    "id": "1uJz2CXAQl0vmDnEm3JozUicAgVJSd3dZ",
    "title": "16/11/80 ",
    "driveId": "1uJz2CXAQl0vmDnEm3JozUicAgVJSd3dZ",
    "year": 1980
  },
  {
    "id": "1OX9WVPInywzU5VP8Gbcn7oqi16apafTE",
    "title": "16/5/90 ",
    "driveId": "1OX9WVPInywzU5VP8Gbcn7oqi16apafTE",
    "year": 1990
  },
  {
    "id": "1evxIO5BsY2S1TwHQHOEQeCWOHSKAKnOP",
    "title": "1/11/87 ",
    "driveId": "1evxIO5BsY2S1TwHQHOEQeCWOHSKAKnOP",
    "year": 1987
  },
  {
    "id": "1TG7Vw_42SsmVsaaC_lUY5s3YlksXCXUv",
    "title": "20/7/93 ",
    "driveId": "1TG7Vw_42SsmVsaaC_lUY5s3YlksXCXUv",
    "year": 1993
  },
  {
    "id": "1P-HUWk6cdJEU3HTnOR8cyGm7BcNXoVZW",
    "title": "26/5/89 ",
    "driveId": "1P-HUWk6cdJEU3HTnOR8cyGm7BcNXoVZW",
    "year": 1989
  },
  {
    "id": "1mtlYeSYz9GaQ6_fVVgVqNmrWfKpBcrDY",
    "title": "26/5/89 (NP)",
    "driveId": "1mtlYeSYz9GaQ6_fVVgVqNmrWfKpBcrDY",
    "year": 1989
  },
  {
    "id": "129Q-rDbXzPynHxzxvbvXfp2dKnMsbHvF",
    "title": "26/9/95 ",
    "driveId": "129Q-rDbXzPynHxzxvbvXfp2dKnMsbHvF",
    "year": 1995
  },
  {
    "id": "1GzMCWRW-FlSCl2fxZuBZt2L_e9TjpA73",
    "title": "27/10/84 ",
    "driveId": "1GzMCWRW-FlSCl2fxZuBZt2L_e9TjpA73",
    "year": 1984
  },
  {
    "id": "1G7ZD3nOxOck1jf75KIWVcfh168ZMjdEj",
    "title": "27/7/90",
    "driveId": "1G7ZD3nOxOck1jf75KIWVcfh168ZMjdEj",
    "year": 1990
  },
  {
    "id": "1P2rkhr4FZD5rXHrBVzZXXeouTuBInJlL",
    "title": "4/3/90 ",
    "driveId": "1P2rkhr4FZD5rXHrBVzZXXeouTuBInJlL",
    "year": 1990
  },
  {
    "id": "1aFJpp_KRI39IXkbE08YEiPZaDl39Nau2",
    "title": "4/4/90 ",
    "driveId": "1aFJpp_KRI39IXkbE08YEiPZaDl39Nau2",
    "year": 1990
  },
  {
    "id": "1g5cUJ4ojDzjZE3VKxsIVxhpdmR5DXy5C",
    "title": "Anandure_14/11/80",
    "driveId": "1g5cUJ4ojDzjZE3VKxsIVxhpdmR5DXy5C",
    "year": 1980
  },
  {
    "id": "1HMAIn6Diju9V3E18dq2V1FOHQpuS6mfF",
    "title": "Dhanya to desh_19/6/91 ",
    "driveId": "1HMAIn6Diju9V3E18dq2V1FOHQpuS6mfF",
    "year": 1991
  },
  {
    "id": "114u8fA5pE06xZ89ebJGmbMSOEJLIxiNC",
    "title": "Mokashi_Pune_13/4/92",
    "driveId": "114u8fA5pE06xZ89ebJGmbMSOEJLIxiNC",
    "year": 1992
  },
  {
    "id": "1650mc_Cq3LkGB34mhBPGKCX3aTlEST1N",
    "title": "Mokashi_Pune_14/4/92",
    "driveId": "1650mc_Cq3LkGB34mhBPGKCX3aTlEST1N",
    "year": 1992
  },
  {
    "id": "18S9PG4Y-gQuQFoIel8bxxhY_UYf_fUPi",
    "title": "navavedha_Dasbodh ",
    "driveId": "18S9PG4Y-gQuQFoIel8bxxhY_UYf_fUPi"
  },
  {
    "id": "1jz4J8LZB6dSZQb13zT0zjskiNe5NG1H-",
    "title": "Nimbal_19/7/93 ",
    "driveId": "1jz4J8LZB6dSZQb13zT0zjskiNe5NG1H-",
    "year": 1993
  },
  {
    "id": "1h2tRJIrrRafKwSwL-F-nEtsDW-gDqJf2",
    "title": "Nimbal_21/7/93 ",
    "driveId": "1h2tRJIrrRafKwSwL-F-nEtsDW-gDqJf2",
    "year": 1993
  },
  {
    "id": "1DKRFDbJ8e3H2Sdq2PhLZCeYtIOotuZ19",
    "title": "Nimbal_28/5/93 ",
    "driveId": "1DKRFDbJ8e3H2Sdq2PhLZCeYtIOotuZ19",
    "year": 1993
  },
  {
    "id": "1nF_dySgOAZq6zCm-nZXdCCTc4cBz-k5W",
    "title": "Nimbal_31/7/90 ",
    "driveId": "1nF_dySgOAZq6zCm-nZXdCCTc4cBz-k5W",
    "year": 1990
  },
  {
    "id": "1-xJkZhEnOcppMYhtx8eDGXBTlgFOhgij",
    "title": "Nimbal_31/7/90",
    "driveId": "1-xJkZhEnOcppMYhtx8eDGXBTlgFOhgij",
    "year": 1990
  },
  {
    "id": "1AmMG_fmjc9o5D21SbQP04x1Tpm5_R9Bw",
    "title": "Nimbal 2",
    "driveId": "1AmMG_fmjc9o5D21SbQP04x1Tpm5_R9Bw"
  },
  {
    "id": "14o4BPhaEXPHAR_DOe68j59wDaOGGxeOP",
    "title": "Pravachan 1",
    "driveId": "14o4BPhaEXPHAR_DOe68j59wDaOGGxeOP"
  },
  {
    "id": "1sbMJfmJVCQUdedsOo3K5QsxinbfTrI3z",
    "title": "Pravachan 2",
    "driveId": "1sbMJfmJVCQUdedsOo3K5QsxinbfTrI3z"
  },
  {
    "id": "1d6i0LpVe24FeqXQQe9mdeqxa_BpHGvUy",
    "title": "Pravachan 3",
    "driveId": "1d6i0LpVe24FeqXQQe9mdeqxa_BpHGvUy"
  },
  {
    "id": "10T0BmPc5E04HacW83QTzeEhk1SxJ9BT3",
    "title": "Pravachan 4",
    "driveId": "10T0BmPc5E04HacW83QTzeEhk1SxJ9BT3"
  },
  {
    "id": "1C5cSmddu9l3tWkcKPdb8rCeizcMiw6ia",
    "title": "Pravachan 5",
    "driveId": "1C5cSmddu9l3tWkcKPdb8rCeizcMiw6ia"
  },
  {
    "id": "1EkWe2fMkvWVGBtykVOqr-AmvtVbfkZjV",
    "title": "Pravachan 6",
    "driveId": "1EkWe2fMkvWVGBtykVOqr-AmvtVbfkZjV"
  },
  {
    "id": "1khyb_q7YoCXZQuxJ741SX1PyPBVupFl4",
    "title": "Pravachan 7",
    "driveId": "1khyb_q7YoCXZQuxJ741SX1PyPBVupFl4"
  },
  {
    "id": "1z94I3kSTeAWT7eNlN5mKeuy7Vv7rmc40",
    "title": "Pravachan 8",
    "driveId": "1z94I3kSTeAWT7eNlN5mKeuy7Vv7rmc40"
  },
  {
    "id": "156RlZEDivlPOEAoOcmA1AGLfPxoNKOw5",
    "title": "Pravachan 9",
    "driveId": "156RlZEDivlPOEAoOcmA1AGLfPxoNKOw5"
  },
  {
    "id": "1ifEo_1kGuBjWTJcl-F69-Zsdc2uNkVMr",
    "title": "Pravachan 10",
    "driveId": "1ifEo_1kGuBjWTJcl-F69-Zsdc2uNkVMr"
  },
  {
    "id": "1gzLUeLgxSmmFf0OoYUFjltD1U2emQwCP",
    "title": "Pravachan 11",
    "driveId": "1gzLUeLgxSmmFf0OoYUFjltD1U2emQwCP"
  },
  {
    "id": "1c4Cqu17pqSO9drN1zhBoBeDuJpSozrtp",
    "title": "Pravachan 12",
    "driveId": "1c4Cqu17pqSO9drN1zhBoBeDuJpSozrtp"
  },
  {
    "id": "1_fmxGeCIuAnZ-g0h1T0RG57yZhV3BN1O",
    "title": "Pravachan 13",
    "driveId": "1_fmxGeCIuAnZ-g0h1T0RG57yZhV3BN1O"
  },
  {
    "id": "1K089tQGfR5NPEfI5Og_18bm75mzg_Col",
    "title": "Pravachan6 14",
    "driveId": "1K089tQGfR5NPEfI5Og_18bm75mzg_Col"
  },
  {
    "id": "1sGTnHLWmPiXZ4pZVzPllVDwc_O4CV2g2",
    "title": "Pravachan 15",
    "driveId": "1sGTnHLWmPiXZ4pZVzPllVDwc_O4CV2g2"
  },
  {
    "id": "1vi-crBoFiDuPtlBVOORTvrSjPPWJVOLI",
    "title": "Pravachan 16",
    "driveId": "1vi-crBoFiDuPtlBVOORTvrSjPPWJVOLI"
  },
  {
    "id": "1hTr2qH3s56eyNDFVxb5Fnct_seB6_paW",
    "title": "Pravachan 17",
    "driveId": "1hTr2qH3s56eyNDFVxb5Fnct_seB6_paW"
  },
  {
    "id": "1AKyPuYmWHW-AGxMDy2XsAhm7Rc8wDzkA",
    "title": "1. Shravan_Nimbal_01/8/93 ",
    "driveId": "1AKyPuYmWHW-AGxMDy2XsAhm7Rc8wDzkA",
    "year": 1993
  },
  {
    "id": "1WIWNMR6bJi6o4J_yalvMQ8Ycd6ZbkNEr",
    "title": "2. Shravan_Nimbal_01/8/93 ",
    "driveId": "1WIWNMR6bJi6o4J_yalvMQ8Ycd6ZbkNEr",
    "year": 1993
  },
  {
    "id": "130VodsBDGkakrUGverMh6iqDWpEQbsdc",
    "title": "Shravan_Nimbal_02/8/93 ",
    "driveId": "130VodsBDGkakrUGverMh6iqDWpEQbsdc",
    "year": 1993
  },
  {
    "id": "1j9lUuoD4r4aKvD7d02fu7isLDDicwJtF",
    "title": "Shravan_Nimbal_10/8/94",
    "driveId": "1j9lUuoD4r4aKvD7d02fu7isLDDicwJtF",
    "year": 1994
  },
  {
    "id": "1x6ZEwZWTsSdh79FrCzmN7RbuOmf92MV5",
    "title": "Shravan_Nimbal_1/8/94",
    "driveId": "1x6ZEwZWTsSdh79FrCzmN7RbuOmf92MV5",
    "year": 1994
  },
  {
    "id": "1ilqNsDDWo6o2Hogwn9GpZEchfjuB5wjP",
    "title": "Shravan_Nimbal_22/7/93 ",
    "driveId": "1ilqNsDDWo6o2Hogwn9GpZEchfjuB5wjP",
    "year": 1993
  },
  {
    "id": "1XJoNHV3WtUp3N0Bmv8BqIhjM4Z6i4gD-",
    "title": "Shravan_Nimbal_24/7/93 ",
    "driveId": "1XJoNHV3WtUp3N0Bmv8BqIhjM4Z6i4gD-",
    "year": 1993
  },
  {
    "id": "1lZ5RNgUSMLzZcHFzfk9ly22VzV_Jnf07",
    "title": "Shravan_Nimbal_25/7/93 ",
    "driveId": "1lZ5RNgUSMLzZcHFzfk9ly22VzV_Jnf07",
    "year": 1993
  },
  {
    "id": "1opcy7iZWXNz_NnsMZNscWgiLACcYbXlq",
    "title": "Shri baba 1",
    "driveId": "1opcy7iZWXNz_NnsMZNscWgiLACcYbXlq"
  },
  {
    "id": "1Wi0Tq3iw9YGbgGZXzCh7KHKN4f-anCdm",
    "title": "Tendulkar_Pune_7/12/95",
    "driveId": "1Wi0Tq3iw9YGbgGZXzCh7KHKN4f-anCdm",
    "year": 1995
  },
  {
    "id": "1zvZ2Dg9I_KsugeoRfLVkRU8X7xXWpGTr",
    "title": "TukaramAnubha_28/8/91 2",
    "driveId": "1zvZ2Dg9I_KsugeoRfLVkRU8X7xXWpGTr",
    "year": 1991
  },
  {
    "id": "1He9JHoTz2xmZ1tzi4qvWDL71DcPh9RNO",
    "title": "AamhiVaikunthavasi_Dr_Anil_Kulkarni_20/11/77",
    "driveId": "1He9JHoTz2xmZ1tzi4qvWDL71DcPh9RNO",
    "year": 1977
  },
  {
    "id": "1Ri2UXj2uiudebGlKJqiAcGSGtC8ywdEA",
    "title": "AShravan_Nimbal_22/7/93 ",
    "driveId": "1Ri2UXj2uiudebGlKJqiAcGSGtC8ywdEA",
    "year": 1993
  },
  {
    "id": "14yIkR3daN3MquD-PlCPH7-qndMW9s0z9",
    "title": "1. AthmaDyna_Dr_Anil_Kulkarni_07/10/92 ",
    "driveId": "14yIkR3daN3MquD-PlCPH7-qndMW9s0z9",
    "year": 1992
  },
  {
    "id": "1l2vHNhlEObAz-Wm8vnRO__wfZxx5KZNd",
    "title": "2. AthmaDyna_Dr_Anil_Kulkarni_07/10/92",
    "driveId": "1l2vHNhlEObAz-Wm8vnRO__wfZxx5KZNd",
    "year": 1992
  },
  {
    "id": "1gZyTlEX5Qe_Ia8pv7-tHPdvs-F3a_Otv",
    "title": "AthmaDyna_Dr_Anil_Kulkarni_23/3/83",
    "driveId": "1gZyTlEX5Qe_Ia8pv7-tHPdvs-F3a_Otv",
    "year": 1983
  },
  {
    "id": "1W4XQ_Cf5oiRptEcRv3ERnpD56VUryT2x",
    "title": "3. Atmadyna_Dr_Anil_Kulkarni_Mulund_07/10/92",
    "driveId": "1W4XQ_Cf5oiRptEcRv3ERnpD56VUryT2x",
    "year": 1992
  },
  {
    "id": "1bh9Eg5Kk5cHp9vHaVCAldwWlqhvWbrMg",
    "title": "Balakrishna_Pandit_Pune_26/12/90 ",
    "driveId": "1bh9Eg5Kk5cHp9vHaVCAldwWlqhvWbrMg",
    "year": 1990
  },
  {
    "id": "1kBhYFDT-98UDCE8jAlOKFWkCt8YIVhQS",
    "title": "DevulkarBunglow_Pune_25/9/90",
    "driveId": "1kBhYFDT-98UDCE8jAlOKFWkCt8YIVhQS",
    "year": 1990
  },
  {
    "id": "1FveBC0GvriK0JxZ7ya19V4-7TfxpOqi-",
    "title": "DhanyaHoPradakshana_31/10/76 ",
    "driveId": "1FveBC0GvriK0JxZ7ya19V4-7TfxpOqi-",
    "year": 1976
  },
  {
    "id": "1UaESZLR5fsJxlCzLLgPPCO0dbsBNSUjR",
    "title": "Dhyantochedesh_Nimbal_19/6/91 ",
    "driveId": "1UaESZLR5fsJxlCzLLgPPCO0dbsBNSUjR",
    "year": 1991
  },
  {
    "id": "1DyVhWfoxFVxnvcCymshJmavRsJcPk12b",
    "title": "Dnyaneshwari_Nimbal_12/8/94",
    "driveId": "1DyVhWfoxFVxnvcCymshJmavRsJcPk12b",
    "year": 1994
  },
  {
    "id": "182h5dp3hMRNwbfAD2na_DutM2YbVLCyo",
    "title": "Dr_Anil_Kulkarni_19/10/91",
    "driveId": "182h5dp3hMRNwbfAD2na_DutM2YbVLCyo",
    "year": 1991
  },
  {
    "id": "1vT4Bjg_arymD59MQxJea81bqzSTVnHCz",
    "title": "Dr_Anil_Kulkarni_Mulund_01/8/93 ",
    "driveId": "1vT4Bjg_arymD59MQxJea81bqzSTVnHCz",
    "year": 1993
  },
  {
    "id": "12tZ-1bGavgFHcTdpH1JCJa_Q0QtnNGds",
    "title": "Dr_Anil_Kulkarni_Mulund_06/10/92 ",
    "driveId": "12tZ-1bGavgFHcTdpH1JCJa_Q0QtnNGds",
    "year": 1992
  },
  {
    "id": "14QnI3UEYRXVTgqqOi9c4dcwUpPDHDQCx",
    "title": "Dr_Anil_Kulkarni_Mulund_09/10/92 ",
    "driveId": "14QnI3UEYRXVTgqqOi9c4dcwUpPDHDQCx",
    "year": 1992
  },
  {
    "id": "1Yx-EoeVBxlS4qp2kh2QSxCNGfVkH5s2y",
    "title": "Dr_Anil_Kulkarni_Mulund_10/10/92 ",
    "driveId": "1Yx-EoeVBxlS4qp2kh2QSxCNGfVkH5s2y",
    "year": 1992
  },
  {
    "id": "11scYMJoLKSnJx6pPuiIsjncWd-OdHISc",
    "title": "Dr_Anil_Kulkarni_Mulund_20/10/91 ",
    "driveId": "11scYMJoLKSnJx6pPuiIsjncWd-OdHISc",
    "year": 1991
  },
  {
    "id": "1uowlknTKcrlqf8lDQo1xhdb4HSoRuqr_",
    "title": "Dr_Anil_Kulkarni_Mulund_20/10/91",
    "driveId": "1uowlknTKcrlqf8lDQo1xhdb4HSoRuqr_",
    "year": 1991
  },
  {
    "id": "1GNdRtDBA6EFtV73QDTlcAbKrC22ScAev",
    "title": "Dr_Anil_Kulkarni_Mulund_26/10/93 ",
    "driveId": "1GNdRtDBA6EFtV73QDTlcAbKrC22ScAev",
    "year": 1993
  },
  {
    "id": "1tivD2E295wKNP6P1dAuum3buzJAvnoSf",
    "title": "Dr_Anil_Kulkarni_Mulund_27/10/93 ",
    "driveId": "1tivD2E295wKNP6P1dAuum3buzJAvnoSf",
    "year": 1993
  },
  {
    "id": "1CRRiTOtV_fa49Tkj_YLHG_F7sMqV3jXL",
    "title": "Dr_Anil_Kulkarni_Pune_24/10/93 ",
    "driveId": "1CRRiTOtV_fa49Tkj_YLHG_F7sMqV3jXL",
    "year": 1993
  },
  {
    "id": "1HegZLbw8HlFBYUJKm82-l4QyXN-WfrYD",
    "title": "Dr_Kanetkar_Bunglow_Pune_28/9/92 NP",
    "driveId": "1HegZLbw8HlFBYUJKm82-l4QyXN-WfrYD",
    "year": 1992
  },
  {
    "id": "1Z_9RMGHvt0qaroBZ4WYBV2buEkK9Cg_j",
    "title": "Gokulashtami_Nimbal_2/9/91 ",
    "driveId": "1Z_9RMGHvt0qaroBZ4WYBV2buEkK9Cg_j",
    "year": 1991
  },
  {
    "id": "1rPE_FGSjRx7ySngOF-kyiGKrw8N97JFN",
    "title": "KanetakarBunglow_Pune_19/9/90",
    "driveId": "1rPE_FGSjRx7ySngOF-kyiGKrw8N97JFN",
    "year": 1990
  },
  {
    "id": "1Fj2B-tS9NN3STem_4PET9ZryKyeYll47",
    "title": "KanetakarBunglow_Pune_20/8/90",
    "driveId": "1Fj2B-tS9NN3STem_4PET9ZryKyeYll47",
    "year": 1990
  },
  {
    "id": "1FooQEXHr52v9-904wA5JgbfS1u_fGlPZ",
    "title": "KanetakarBunglow_Pune_21/9/90",
    "driveId": "1FooQEXHr52v9-904wA5JgbfS1u_fGlPZ",
    "year": 1990
  },
  {
    "id": "15lfWHwRMoKlRfQJ8Js8sXpLrBpNiVIC6",
    "title": "1. KanetakarBunglow_Pune_9/10/91",
    "driveId": "15lfWHwRMoKlRfQJ8Js8sXpLrBpNiVIC6",
    "year": 1991
  },
  {
    "id": "11CDlt9YvUIPLTz4qwEd15I3IG9qnIMy2",
    "title": "2. KanetakarBunglow_Pune_9/10/91",
    "driveId": "11CDlt9YvUIPLTz4qwEd15I3IG9qnIMy2",
    "year": 1991
  },
  {
    "id": "1Ia-DMWzqB9h2tJHiAuiGQBF5wAD6wLf5",
    "title": "3. KanetakarBunglow_Pune_9/10/91",
    "driveId": "1Ia-DMWzqB9h2tJHiAuiGQBF5wAD6wLf5",
    "year": 1991
  },
  {
    "id": "1-kC6e9AFYALAsFdQRtM391dulVrJHhXt",
    "title": "Karsekamkaro_RaviParipatedar_21/12/92 ",
    "driveId": "1-kC6e9AFYALAsFdQRtM391dulVrJHhXt",
    "year": 1992
  },
  {
    "id": "19BZbzKhnDo0Z4Rg25-H4JAZ5KvrqqX8-",
    "title": "NamSodunaka_Sangli_21/1/91 ",
    "driveId": "19BZbzKhnDo0Z4Rg25-H4JAZ5KvrqqX8-",
    "year": 1991
  },
  {
    "id": "1iso5uHSTR29hEmm-lyWlPvFd_KFYWijr",
    "title": "NanduDeolkar_Pune_30/9/92 ",
    "driveId": "1iso5uHSTR29hEmm-lyWlPvFd_KFYWijr",
    "year": 1992
  },
  {
    "id": "1CdsBk8hK7aR-GzyFsYd-0rIw-t0foQ7H",
    "title": "Rajabhau_Kulkarni_Pune_01/1/93 ",
    "driveId": "1CdsBk8hK7aR-GzyFsYd-0rIw-t0foQ7H",
    "year": 1993
  },
  {
    "id": "1_18R9y-HtJk8cFZzdmPlE5l2vIsf20V0",
    "title": "Rajabhau_Kulkarni_Pune_02/2/92 ",
    "driveId": "1_18R9y-HtJk8cFZzdmPlE5l2vIsf20V0",
    "year": 1992
  },
  {
    "id": "1zEPo9P7oXE-JL8so-Gg7kAD8qSrUo0f4",
    "title": "Rajabhau_Kulkarni_Pune_31/12/92 ",
    "driveId": "1zEPo9P7oXE-JL8so-Gg7kAD8qSrUo0f4",
    "year": 1992
  },
  {
    "id": "1TBGA4iclrrl9rVv29jz7hlPuCw6OSdwl",
    "title": "RaviParepattedar_Pune_01/7/92 ",
    "driveId": "1TBGA4iclrrl9rVv29jz7hlPuCw6OSdwl",
    "year": 1992
  },
  {
    "id": "1fRE53N-P8_-lMW90qWAaULcJwB-a1Otn",
    "title": "Raviparepattedar_Pune_09/12/92 ",
    "driveId": "1fRE53N-P8_-lMW90qWAaULcJwB-a1Otn",
    "year": 1992
  },
  {
    "id": "16jB2Au2sqDEZRaaAUEG2ICY41NDlLwVT",
    "title": "Raviparipattedar_Pune_28/6/95 ",
    "driveId": "16jB2Au2sqDEZRaaAUEG2ICY41NDlLwVT",
    "year": 1995
  },
  {
    "id": "1lB1AdQEWNQ0LI7CPQCIkZBMXI4fpiFl9",
    "title": "Sadguru_Lakshan_22/03/86 ",
    "driveId": "1lB1AdQEWNQ0LI7CPQCIkZBMXI4fpiFl9",
    "year": 1986
  },
  {
    "id": "1gxHsB6YOXIgCAVRzMaXyOTL4ublcHjkS",
    "title": "Sadhaguruche_Lakshane_22/3/86 ",
    "driveId": "1gxHsB6YOXIgCAVRzMaXyOTL4ublcHjkS",
    "year": 1986
  },
  {
    "id": "1BBETQByCyGnJPbsd9vxno8S_Tq0wlZJn",
    "title": "Shakutaihouse_Pune_23/9/90 ",
    "driveId": "1BBETQByCyGnJPbsd9vxno8S_Tq0wlZJn",
    "year": 1990
  },
  {
    "id": "1JSocPzjCntz95zRv0IcadJjyW97amhS5",
    "title": "Shr_Bhausaheb_Maharaj_Punyatithi_Nimbal_6/2/91",
    "driveId": "1JSocPzjCntz95zRv0IcadJjyW97amhS5",
    "year": 1991
  },
  {
    "id": "1CoDBprhZpXrYW-8Jo5FMgJO-CrMdAjYL",
    "title": "Shravan_Nimbal_01/8/93",
    "driveId": "1CoDBprhZpXrYW-8Jo5FMgJO-CrMdAjYL",
    "year": 1993
  },
  {
    "id": "1Z0wD4ucIKwXaAICUUvWHf70s1Vn--lzp",
    "title": "Shravan_Nimbal_02/8/93",
    "driveId": "1Z0wD4ucIKwXaAICUUvWHf70s1Vn--lzp",
    "year": 1993
  },
  {
    "id": "18tSmgaf7QUtc0S0XzExoNsqlU6nloqo9",
    "title": "Shravan_Nimbal_24/7/93",
    "driveId": "18tSmgaf7QUtc0S0XzExoNsqlU6nloqo9",
    "year": 1993
  },
  {
    "id": "1Eu32aC-3p15L3K6Uh6OVBs1dKN6sAsxC",
    "title": "Shravan_Nimbal_25/7/93",
    "driveId": "1Eu32aC-3p15L3K6Uh6OVBs1dKN6sAsxC",
    "year": 1993
  },
  {
    "id": "1yXvBWepug5oV311R0r0fxMVLJHa4rOPL",
    "title": "1. Shravan_Samapti_Nimbal_01/8/93 ",
    "driveId": "1yXvBWepug5oV311R0r0fxMVLJHa4rOPL",
    "year": 1993
  },
  {
    "id": "1WuxczJI5T1agtqrHmRka4qZgpgPQoDSI",
    "title": "2. Shravan_Sampati_Nimbal_01/8/93",
    "driveId": "1WuxczJI5T1agtqrHmRka4qZgpgPQoDSI",
    "year": 1993
  },
  {
    "id": "1RXwqCXQ-CITcRDsfoY7yEIFzQnf2zApj",
    "title": "ShravanSamapti_Nimbal_28/8/92 ",
    "driveId": "1RXwqCXQ-CITcRDsfoY7yEIFzQnf2zApj",
    "year": 1992
  },
  {
    "id": "1EINMukEHGOeAu56MGsvK1pxJSiMIvbEf",
    "title": "Shri_Baba_BhaiPandit_Pune_29/12/92 ",
    "driveId": "1EINMukEHGOeAu56MGsvK1pxJSiMIvbEf",
    "year": 1992
  },
  {
    "id": "1DeEJK4GQfy_rYapmrT2tD_BZRBFOYeX0",
    "title": "Shri_Baba_Jeevan_Nimbal_1/9/91",
    "driveId": "1DeEJK4GQfy_rYapmrT2tD_BZRBFOYeX0",
    "year": 1991
  },
  {
    "id": "1aLH2i2iCvqRl49x0XpycuHCT7DPxEnEH",
    "title": "Shri_Baba_Nimbal_26/7/90",
    "driveId": "1aLH2i2iCvqRl49x0XpycuHCT7DPxEnEH",
    "year": 1990
  },
  {
    "id": "1gOG58BTr1WuWq71BQKxCbg5DvysxYfaq",
    "title": "Shri_Baba_Nimbal_27/7/90",
    "driveId": "1gOG58BTr1WuWq71BQKxCbg5DvysxYfaq",
    "year": 1990
  },
  {
    "id": "1jUzwdf33UcuW_sXCwzE3M1nD1FNnphs_",
    "title": "Shri_Baba_Nimbal_30/7/90",
    "driveId": "1jUzwdf33UcuW_sXCwzE3M1nD1FNnphs_",
    "year": 1990
  },
  {
    "id": "1sPjxdhBXvdxmhUTqtbe9fWGgocTxeEe6",
    "title": "Shri_Baba_Parmarthaspona_Nimbal 2",
    "driveId": "1sPjxdhBXvdxmhUTqtbe9fWGgocTxeEe6"
  },
  {
    "id": "1NS5SbFhntMbOBEqwicf96zMMrRU5Dezh",
    "title": "Shri_Bhausaheb_MaharajPunyatithi_Nimbal_25/1/93",
    "driveId": "1NS5SbFhntMbOBEqwicf96zMMrRU5Dezh",
    "year": 1993
  },
  {
    "id": "1ULz3I_T1YBMHcjYAYvOhXHZP1EpIdfXJ",
    "title": "Shri_Gurudev_&_Tatvadyna_Nimbal_26/6/93",
    "driveId": "1ULz3I_T1YBMHcjYAYvOhXHZP1EpIdfXJ",
    "year": 1993
  },
  {
    "id": "1kwfCCNBZ7CrX6bskl--XxAKVPV9KnQGK",
    "title": "Shri_Gurudev_Nimbal_16/8/90",
    "driveId": "1kwfCCNBZ7CrX6bskl--XxAKVPV9KnQGK",
    "year": 1990
  },
  {
    "id": "1hiu9pPeZ-mERCYfFdZcelsS61rheoCcP",
    "title": "Shri_Gurudev_Nimbal_18/8/90 ",
    "driveId": "1hiu9pPeZ-mERCYfFdZcelsS61rheoCcP",
    "year": 1990
  },
  {
    "id": "16M3oTDcs4XlsJn33GcVJQHMqCVwV_b7k",
    "title": "Shri_Gurudev_Nimbal_18/8/90",
    "driveId": "16M3oTDcs4XlsJn33GcVJQHMqCVwV_b7k",
    "year": 1990
  },
  {
    "id": "1zDeRgA3xKzNWFmVHo8GIrqyEMmznfW67",
    "title": "Shri_Gurudev_Nimbal_20/8/90",
    "driveId": "1zDeRgA3xKzNWFmVHo8GIrqyEMmznfW67",
    "year": 1990
  },
  {
    "id": "1bKeHIfDeJQxepmahrvTjNsmDcnkolDtr",
    "title": "Shri_Gurudev_Nimbal_3/9/91",
    "driveId": "1bKeHIfDeJQxepmahrvTjNsmDcnkolDtr",
    "year": 1991
  },
  {
    "id": "1lcgTB0q78WGSNvlihK9V5LQoU5xjFAeD",
    "title": "Shri_Gurudev_Nimbal_4/9/91",
    "driveId": "1lcgTB0q78WGSNvlihK9V5LQoU5xjFAeD",
    "year": 1991
  },
  {
    "id": "1OqeYyIJATUC7TYvsMKQfoz1rLOhTkgom",
    "title": "Shri_Gurudev_Nimbal_5/9/91",
    "driveId": "1OqeYyIJATUC7TYvsMKQfoz1rLOhTkgom",
    "year": 1991
  },
  {
    "id": "1LejKZ-gKoNc8Zq7AbNDuCtIpQLmVSiNG",
    "title": "Shri_GurudevancheParmarthiJevan_Nimbal_15/8/90",
    "driveId": "1LejKZ-gKoNc8Zq7AbNDuCtIpQLmVSiNG",
    "year": 1990
  },
  {
    "id": "18N7aeuGhHDvf2Uw7cwBGdLYlNCz0wdYF",
    "title": "Shrimati_Shakutai_Apte_Pune_3/7/94 ",
    "driveId": "18N7aeuGhHDvf2Uw7cwBGdLYlNCz0wdYF",
    "year": 1994
  },
  {
    "id": "1HZ_9nkqe4QDY2xeKmjv81pnNh1_tESkJ",
    "title": "Shrimati_Shakutai_Pune_3/1/92 ",
    "driveId": "1HZ_9nkqe4QDY2xeKmjv81pnNh1_tESkJ",
    "year": 1992
  },
  {
    "id": "1IuPe0gzShBFV1EH_MLD5m8UOS3Opwi3g",
    "title": "Tulpe&Karkhanis_Kaka_Janamasamapti_Dadar",
    "driveId": "1IuPe0gzShBFV1EH_MLD5m8UOS3Opwi3g"
  },
  {
    "id": "1JeJ1c29KgUhEAcLodfugq1G0i4iPp181",
    "title": "Y_P_Pandit_Pune_23/12/90",
    "driveId": "1JeJ1c29KgUhEAcLodfugq1G0i4iPp181",
    "year": 1990
  },
  {
    "id": "1t05151MS6k6biY43FjRpIhw0onkBStJn",
    "title": "16-5-90",
    "driveId": "1t05151MS6k6biY43FjRpIhw0onkBStJn",
    "year": 1990
  },
  {
    "id": "1m30-uKTdq_5Teao2FtayUSB0LgoMFPkb",
    "title": "26-9-95",
    "driveId": "1m30-uKTdq_5Teao2FtayUSB0LgoMFPkb",
    "year": 1995
  },
  {
    "id": "1hDAxeYqBBxkREHfsZG3Swxi-r9SNNmsr",
    "title": "27-1-91",
    "driveId": "1hDAxeYqBBxkREHfsZG3Swxi-r9SNNmsr",
    "year": 1991
  },
  {
    "id": "1wuSvtNF_5PeidfJGOtW38c8uOpBr2oC-",
    "title": "4-3-90",
    "driveId": "1wuSvtNF_5PeidfJGOtW38c8uOpBr2oC-",
    "year": 1990
  },
  {
    "id": "1mtmNJa6w87JUr1qbTH4eD3bYzBTJdMSY",
    "title": "4-4-90",
    "driveId": "1mtmNJa6w87JUr1qbTH4eD3bYzBTJdMSY",
    "year": 1990
  },
  {
    "id": "1QjYBI0ue1Y81IKJPYiYzMR60G2wQnIUs",
    "title": "यांची_अध्यात्मिक_प्रवचने_",
    "driveId": "1QjYBI0ue1Y81IKJPYiYzMR60G2wQnIUs"
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