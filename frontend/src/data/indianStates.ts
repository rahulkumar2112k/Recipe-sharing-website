export interface Dish {
  id: string;
  name: string;
  image: string;
  ingredients: string[];
  steps: string[];
  videoUrl?: string;
  region: string;
  state: string;
}

export interface State {
  id: string;
  name: string;
  dishes: Dish[];
}

export const indianStates: State[] = [
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    dishes: [
      {
        id: 'pulihora',
        name: 'Pulihora',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761824488/philora_lofrr4.png',
        ingredients: ['Rice', 'Tamarind paste', 'Peanuts', 'Curry leaves', 'Turmeric', 'Spices'],
        steps: ['Cook rice', 'Prepare tamarind paste', 'Temper with spices', 'Mix rice with tamarind'],
        region: 'South India',
        state: 'Andhra Pradesh'
      },
      {
        id: 'hyderabadi-biryani',
        name: 'Hyderabadi Biryani',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761824458/hyderabadi-birayani_tisz8b.png',
        ingredients: ['Basmati rice', 'Chicken/Mutton', 'Yogurt', 'Saffron', 'Fried onions', 'Spices'],
        steps: ['Marinate meat', 'Cook rice partially', 'Layer rice and meat', 'Dum cook'],
        region: 'South India',
        state: 'Andhra Pradesh'
      },
      {
        id: 'gongura-pickle',
        name: 'Gongura Pickle',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761824660/gongura-pickle_snqijz.png',
        ingredients: ['Gongura leaves', 'Red chilies', 'Garlic', 'Oil', 'Spices'],
        steps: ['Clean gongura leaves', 'Sauté with spices', 'Add garlic and chilies', 'Store in oil'],
        region: 'South India',
        state: 'Andhra Pradesh'
      },
      {
        id: 'pesarattu',
        name: 'Pesarattu',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761824640/pesarattu_umj2vj.png',
        ingredients: ['Green gram', 'Rice', 'Ginger', 'Green chilies', 'Cumin'],
        steps: ['Soak green gram', 'Grind into batter', 'Spread on tawa', 'Cook until crisp'],
        region: 'South India',
        state: 'Andhra Pradesh'
      }
    ]
  },
  {
    id: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    dishes: [
      {
        id: 'thukpa',
        name: 'Thukpa',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761825677/thupka_dwprk2.png',
        ingredients: ['Noodles', 'Vegetables', 'Meat', 'Garlic', 'Ginger', 'Spices'],
        steps: ['Boil noodles', 'Prepare broth', 'Cook vegetables and meat', 'Combine and serve hot'],
        region: 'North East India',
        state: 'Arunachal Pradesh'
      },
      {
        id: 'pehak',
        name: 'Pehak',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761825962/pehak_mdmuos.png',
        ingredients: ['Fermented soybeans', 'Bamboo shoots', 'Pork', 'Chilies', 'Spices'],
        steps: ['Prepare fermented soybeans', 'Cook with bamboo shoots', 'Add meat', 'Simmer'],
        region: 'North East India',
        state: 'Arunachal Pradesh'
      },
      {
        id: 'chura-sabji',
        name: 'Chura Sabji',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761825940/chura-sabji_va54gr.png',
        ingredients: ['Fermented cheese', 'Chili flakes', 'Herbs', 'Tomatoes'],
        steps: ['Prepare fermented cheese', 'Cook with herbs', 'Add chilies', 'Serve hot'],
        region: 'North East India',
        state: 'Arunachal Pradesh'
      },
      {
        id: 'apong',
        name: 'Apong',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761825868/apong_yeoma5.png',
        ingredients: ['Rice', 'Millet', 'Yeast', 'Water'],
        steps: ['Ferment rice', 'Add millet', 'Mix with yeast', 'Serve as beverage'],
        region: 'North East India',
        state: 'Arunachal Pradesh'
      }
    ]
  },
  {
    id: 'assam',
    name: 'Assam',
    dishes: [
      {
        id: 'khar',
        name: 'Papaya Khar',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761827277/papaaya-khar_dtqrfw.png',
        ingredients: ['Raw papaya', 'Banana peel extract', 'Pulses', 'Potatoes', 'Spices'],
        steps: ['Prepare khar extract', 'Cook papaya', 'Add pulses', 'Mix and simmer'],
        region: 'North East India',
        state: 'Assam'
      },
      {
        id: 'masor-tenga',
        name: 'Masor Tenga',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761827205/masor-tenga_kzs1yg.png',
        ingredients: ['Fish', 'Tomatoes', 'Elephant apple', 'Lemon', 'Spices'],
        steps: ['Fry fish', 'Prepare sour broth', 'Add fish', 'Simmer'],
        region: 'North East India',
        state: 'Assam'
      },
      {
        id: 'pitha',
        name: 'Pitha',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761827422/pitha_y4gczw.png',
        ingredients: ['Rice flour', 'Jaggery', 'Coconut', 'Sesame seeds'],
        steps: ['Make rice batter', 'Add filling', 'Steam or fry', 'Serve warm'],
        region: 'North East India',
        state: 'Assam'
      },
      {
        id: 'duck-curry',
        name: 'Duck Curry',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761827403/duck-curray_af3r9c.png',
        ingredients: ['Duck', 'White gourd', 'Ginger', 'Garlic', 'Spices'],
        steps: ['Marinate duck', 'Cook with spices', 'Add gourd', 'Slow cook'],
        region: 'North East India',
        state: 'Assam'
      }
    ]
  },
  {
    id: 'bihar',
    name: 'Bihar',
    dishes: [
      {
        id: 'litti-chokha',
        name: 'Litti Chokha',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761816454/litti-chokha_mwoaeu.png',
        ingredients: ['Wheat flour', 'Sattu', 'Eggplant', 'Tomatoes', 'Potatoes', 'Spices'],
        steps: ['Make litti dough', 'Stuff with sattu', 'Roast litti', 'Prepare chokha', 'Serve together'],
        region: 'East India',
        state: 'Bihar'
      },
      {
        id: 'sattu-paratha',
        name: 'Sattu Paratha',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761817036/sattu-paratha_snobzk.png',
        ingredients: ['Wheat flour', 'Roasted gram flour', 'Onions', 'Spices'],
        steps: ['Make dough', 'Prepare sattu filling', 'Stuff paratha', 'Cook on tawa'],
        region: 'East India',
        state: 'Bihar'
      },
      {
        id: 'khaja',
        name: 'Khaja',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761817022/khaja_wqdevw.png',
        ingredients: ['Flour', 'Sugar', 'Ghee', 'Cardamom'],
        steps: ['Make layered dough', 'Deep fry', 'Soak in sugar syrup', 'Dry and serve'],
        region: 'East India',
        state: 'Bihar'
      },
      {
        id: 'dal-pitha',
        name: 'Dal Pitha',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761826412/dal-pitha_mqjvt4.png',
        ingredients: ['Rice flour', 'Lentils', 'Onions', 'Spices'],
        steps: ['Prepare rice dough', 'Make dal filling', 'Shape dumplings', 'Steam'],
        region: 'East India',
        state: 'Bihar'
      }
    ]
  },
  {
    id: 'chhattisgarh',
    name: 'Chhattisgarh',
    dishes: [
      {
        id: 'aamat',
        name: 'Aamat',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761828842/aamat_glqkee.png',
        ingredients: ['Mixed vegetables', 'Bamboo shoots', 'Tamarind', 'Lentils', 'Spices'],
        steps: ['Cook lentils', 'Add vegetables', 'Add bamboo shoots', 'Temper with spices'],
        region: 'Central India',
        state: 'Chhattisgarh'
      },
      {
        id: 'chila',
        name: 'Chila',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761828956/chilla_utfjzl.png',
        ingredients: ['Rice flour', 'Urad dal', 'Water', 'Salt'],
        steps: ['Soak rice and dal', 'Grind to batter', 'Spread on tawa', 'Cook until crisp'],
        region: 'Central India',
        state: 'Chhattisgarh'
      },
      {
        id: 'bafauri',
        name: 'Bafauri',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761828777/bafuri_ujueey.png',
        ingredients: ['Chana dal', 'Rice', 'Spices', 'Curry leaves'],
        steps: ['Soak and grind dal', 'Steam dumplings', 'Prepare curry', 'Add dumplings'],
        region: 'Central India',
        state: 'Chhattisgarh'
      },
      {
        id: 'red-ant-chutney',
        name: 'Red Ant Chutney',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761828643/red-ant-chutny_fneg4v.png',
        ingredients: ['Red ants', 'Tomatoes', 'Chilies', 'Spices'],
        steps: ['Collect red ants', 'Grind with tomatoes', 'Add spices', 'Serve'],
        region: 'Central India',
        state: 'Chhattisgarh'
      }
    ]
  },
  {
    id: 'goa',
    name: 'Goa',
    dishes: [
      {
        id: 'goan-fish-curry',
        name: 'Goan Fish Curry',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761829475/goan-fish-curry_pbqs3t.png',
        ingredients: ['Fish', 'Coconut milk', 'Tamarind', 'Red chilies', 'Kokum', 'Spices'],
        steps: ['Clean fish', 'Prepare masala paste', 'Cook with coconut milk', 'Add tamarind'],
        region: 'West India',
        state: 'Goa'
      },
      {
        id: 'vindaloo',
        name: 'Vindaloo',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761829486/vindaloo_kgm0hs.png',
        ingredients: ['Pork', 'Vinegar', 'Garlic', 'Red chilies', 'Spices'],
        steps: ['Marinate pork in vinegar', 'Prepare masala', 'Cook meat', 'Slow cook'],
        region: 'West India',
        state: 'Goa'
      },
      {
        id: 'bebinca',
        name: 'Bebinca',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761829155/babiniccaa_hfxib1.png',
        ingredients: ['Coconut milk', 'Eggs', 'Flour', 'Sugar', 'Ghee'],
        steps: ['Mix ingredients', 'Layer and bake', 'Repeat layers', 'Cool and serve'],
        region: 'West India',
        state: 'Goa'
      },
      {
        id: 'prawn-balchao',
        name: 'Prawn Balchao',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761829135/prawn_yzenhx.png',
        ingredients: ['Prawns', 'Tomatoes', 'Vinegar', 'Red chilies', 'Spices'],
        steps: ['Clean prawns', 'Prepare spicy masala', 'Cook prawns', 'Add vinegar'],
        region: 'West India',
        state: 'Goa'
      }
    ]
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    dishes: [
      {
        id: 'dhokla',
        name: 'Dhokla',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761829512/dhokla_x3gfh0.png',
        ingredients: ['Gram flour', 'Yogurt', 'Eno', 'Mustard seeds', 'Curry leaves'],
        steps: ['Prepare batter', 'Add eno', 'Steam', 'Temper and serve'],
        region: 'West India',
        state: 'Gujarat'
      },
      {
        id: 'khandvi',
        name: 'Khandvi',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761829500/khandhavi_rluogx.png',
        ingredients: ['Gram flour', 'Yogurt', 'Sesame seeds', 'Mustard seeds', 'Coconut'],
        steps: ['Cook gram flour mixture', 'Spread thin', 'Roll tightly', 'Temper'],
        region: 'West India',
        state: 'Gujarat'
      },
      {
        id: 'thepla',
        name: 'Thepla',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761829524/thepla_qm8zlz.png',
        ingredients: ['Wheat flour', 'Fenugreek leaves', 'Spices', 'Yogurt', 'Oil'],
        steps: ['Mix flour with methi', 'Knead dough', 'Roll flatbreads', 'Cook on tawa'],
        region: 'West India',
        state: 'Gujarat'
      },
      {
        id: 'undhiyu',
        name: 'Undhiyu',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761829518/udhuu_b0h1ni.png',
        ingredients: ['Mixed vegetables', 'Green garlic', 'Fenugreek dumplings', 'Spices'],
        steps: ['Prepare vegetables', 'Make muthiya', 'Layer in pot', 'Slow cook'],
        region: 'West India',
        state: 'Gujarat'
      }
    ]
  },
  {
    id: 'haryana',
    name: 'Haryana',
    dishes: [
      {
        id: 'kadhi-pakora',
        name: 'Kadhi Pakora',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761830200/khadi-padoka_tsywto.png',
        ingredients: ['Yogurt', 'Gram flour', 'Spices', 'Onions'],
        steps: ['Prepare kadhi', 'Make pakoras', 'Add to kadhi', 'Simmer'],
        region: 'North India',
        state: 'Haryana'
      },
      {
        id: 'bajra-khichdi',
        name: 'Bajra Khichdi',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761830220/bajra-kichdi_snqmpj.png',
        ingredients: ['Pearl millet', 'Ghee', 'Spices', 'Vegetables'],
        steps: ['Coarsely grind bajra', 'Cook with vegetables', 'Add ghee', 'Serve hot'],
        region: 'North India',
        state: 'Haryana'
      },
      {
        id: 'kachri-sabzi',
        name: 'Kachri ki Sabzi',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761830237/kachri-ki-sabji_n4mbgo.png',
        ingredients: ['Wild cucumber', 'Spices', 'Yogurt', 'Oil'],
        steps: ['Clean kachri', 'Cook with spices', 'Add yogurt', 'Simmer'],
        region: 'North India',
        state: 'Haryana'
      },
      {
        id: 'mixed-dal',
        name: 'Mixed Dal',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761830124/mix-dal_lkieco.png',
        ingredients: ['Mixed lentils', 'Tomatoes', 'Onions', 'Spices', 'Ghee'],
        steps: ['Pressure cook lentils', 'Prepare tadka', 'Mix together', 'Serve'],
        region: 'North India',
        state: 'Haryana'
      }
    ]
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    dishes: [
      {
        id: 'dhaam',
        name: 'Dhaam',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761831084/dhaam_hn33tb.png',
        ingredients: ['Rice', 'Dal', 'Rajma', 'Yogurt', 'Various curries'],
        steps: ['Prepare all dishes', 'Cook rice', 'Make curries', 'Serve on platter'],
        region: 'North India',
        state: 'Himachal Pradesh'
      },
      {
        id: 'madra',
        name: 'Madra',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761831081/madra_tqjkck.png',
        ingredients: ['Chickpeas', 'Yogurt', 'Coconut', 'Almonds', 'Raisins', 'Spices'],
        steps: ['Soak chickpeas', 'Cook with yogurt', 'Add nuts', 'Simmer'],
        region: 'North India',
        state: 'Himachal Pradesh'
      },
      {
        id: 'babru',
        name: 'Babru',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761831063/babru_wu6kqc.png',
        ingredients: ['Wheat flour', 'Black gram paste', 'Spices', 'Oil'],
        steps: ['Make dough', 'Prepare filling', 'Stuff and seal', 'Deep fry'],
        region: 'North India',
        state: 'Himachal Pradesh'
      },
      {
        id: 'sidu',
        name: 'Sidu',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761831069/sidu_butpw0.png',
        ingredients: ['Wheat flour', 'Yeast', 'Water', 'Ghee'],
        steps: ['Ferment dough', 'Shape into balls', 'Steam', 'Serve with ghee'],
        region: 'North India',
        state: 'Himachal Pradesh'
      }
    ]
  },
  {
    id: 'jharkhand',
    name: 'Jharkhand',
    dishes: [
      {
        id: 'dhuska',
        name: 'Dhuska',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1762146976/duska_kmr5i3.png',
        ingredients: ['Chana dal', 'Urad dal', 'Rice', 'Spices', 'Oil'],
        steps: ['Soak lentils overnight', 'Grind to batter', 'Deep fry', 'Serve with chutney'],
        region: 'East India',
        state: 'Jharkhand'
      },
      {
        id: 'pittha',
        name: 'Pittha',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761827422/pitha_y4gczw.png',
        ingredients: ['Rice flour', 'Chana dal', 'Spices', 'Jaggery'],
        steps: ['Make rice dough', 'Prepare filling', 'Steam', 'Serve'],
        region: 'East India',
        state: 'Jharkhand'
      },
      {
        id: 'thekua',
        name: 'Thekua',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1762147226/thekua_fswa20.png',
        ingredients: ['Wheat flour', 'Jaggery', 'Ghee', 'Coconut'],
        steps: ['Mix ingredients', 'Shape cookies', 'Deep fry', 'Cool and store'],
        region: 'East India',
        state: 'Jharkhand'
      },
      {
        id: 'handia',
        name: 'Handia',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1762147346/handia_jce9gx.png',
        ingredients: ['Rice', 'Ranu tablets', 'Water'],
        steps: ['Cook rice', 'Add ranu', 'Ferment', 'Strain and serve'],
        region: 'East India',
        state: 'Jharkhand'
      }
    ]
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    dishes: [
      {
        id: 'bisi-bele-bath',
        name: 'Bisi Bele Bath',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1762148723/bisi-bela-bath_olgiat.png',
        ingredients: ['Rice', 'Lentils', 'Vegetables', 'Tamarind', 'Spice powder', 'Ghee'],
        steps: ['Cook rice and dal', 'Add vegetables', 'Mix with spice powder', 'Temper'],
        region: 'South India',
        state: 'Karnataka'
      },
      {
        id: 'mysore-pak',
        name: 'Mysore Pak',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1762148728/mysore-pak_xeyxwz.png',
        ingredients: ['Gram flour', 'Sugar', 'Ghee', 'Cardamom'],
        steps: ['Make sugar syrup', 'Roast gram flour', 'Mix and cook', 'Set and cut'],
        region: 'South India',
        state: 'Karnataka'
      },
      {
        id: 'kori-gassi',
        name: 'Kori Gassi',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1762148732/kori-kassi_wad5hg.png',
        ingredients: ['Chicken', 'Coconut', 'Tamarind', 'Red chilies', 'Spices'],
        steps: ['Marinate chicken', 'Grind masala', 'Cook chicken', 'Add coconut milk'],
        region: 'South India',
        state: 'Karnataka'
      },
      {
        id: 'neer-dosa',
        name: 'Neer Dosa',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1762148734/neer-dosa_jeybkr.png',
        ingredients: ['Rice', 'Coconut', 'Water', 'Salt'],
        steps: ['Soak rice', 'Grind with coconut', 'Make thin batter', 'Pour on tawa'],
        region: 'South India',
        state: 'Karnataka'
      }
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala',
    dishes: [
      {
        id: 'fish-curry',
        name: 'Fish Curry',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1762149388/fish-curray_puprwh.png',
        ingredients: ['Fish', 'Coconut milk', 'Curry leaves', 'Tamarind', 'Spices'],
        steps: ['Clean fish', 'Prepare coconut milk', 'Cook with spices', 'Add tamarind'],
        region: 'South India',
        state: 'Kerala'
      },
      {
        id: 'appam',
        name: 'Appam',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1762149388/appam_gtg397.png',
        ingredients: ['Rice', 'Coconut', 'Yeast', 'Sugar', 'Salt'],
        steps: ['Soak rice', 'Grind with coconut', 'Ferment batter', 'Cook in appam pan'],
        region: 'South India',
        state: 'Kerala'
      },
      {
        id: 'puttu',
        name: 'Puttu',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1762149386/putta_d9nwsm.png',
        ingredients: ['Rice flour', 'Coconut', 'Salt', 'Water'],
        steps: ['Steam rice flour', 'Layer with coconut', 'Steam in puttu maker'],
        region: 'South India',
        state: 'Kerala'
      },
      {
        id: 'sadya',
        name: 'Kerala Sadya',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1762149359/sadya_yjh2tf.png',
        ingredients: ['Rice', 'Various curries', 'Pickles', 'Payasam', 'Banana leaf'],
        steps: ['Prepare multiple dishes', 'Arrange on banana leaf', 'Serve in sequence'],
        region: 'South India',
        state: 'Kerala'
      }
    ]
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    dishes: [
      {
        id: 'poha',
        name: 'Poha',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767705193/Gemini_Generated_Image_h3lsx6h3lsx6h3ls_iafyrh.png',
        ingredients: ['Flattened rice', 'Peanuts', 'Curry leaves', 'Turmeric', 'Lemon'],
        steps: ['Wash poha', 'Temper spices', 'Add poha', 'Mix and serve'],
        region: 'Central India',
        state: 'Madhya Pradesh'
      },
      {
        id: 'bhutte-kees',
        name: 'Bhutte ki Kees',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767705175/ChatGPT_Image_Jan_6_2026_06_42_37_PM_d8lfej.jpg',
        ingredients: ['Grated corn', 'Milk', 'Ghee', 'Spices', 'Coriander'],
        steps: ['Grate corn', 'Cook in milk', 'Add spices', 'Garnish'],
        region: 'Central India',
        state: 'Madhya Pradesh'
      },
      {
        id: 'dal-bafla',
        name: 'Dal Bafla',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767705176/ChatGPT_Image_Jan_6_2026_06_40_07_PM_wxcivj.jpg',
        ingredients: ['Wheat flour', 'Lentils', 'Ghee', 'Spices'],
        steps: ['Make bafla dough', 'Boil and roast', 'Prepare dal', 'Serve with ghee'],
        region: 'Central India',
        state: 'Madhya Pradesh'
      },
      {
        id: 'malpua',
        name: 'Malpua',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767705175/ChatGPT_Image_Jan_6_2026_06_41_38_PM_uuwdwl.jpg',
        ingredients: ['Flour', 'Milk', 'Sugar', 'Fennel seeds', 'Ghee'],
        steps: ['Make batter', 'Fry pancakes', 'Soak in sugar syrup', 'Serve'],
        region: 'Central India',
        state: 'Madhya Pradesh'
      }
    ]
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    dishes: [
      {
        id: 'misal-pav',
        name: 'Misal Pav',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767705727/ChatGPT_Image_Jan_6_2026_06_49_37_PM_yrkm4y.jpg',
        ingredients: ['Sprouted lentils', 'Onions', 'Farsan', 'Pav', 'Spices'],
        steps: ['Cook sprouts', 'Prepare spicy gravy', 'Top with farsan', 'Serve with pav'],
        region: 'West India',
        state: 'Maharashtra'
      },
      {
        id: 'vada-pav',
        name: 'Vada Pav',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767705727/ChatGPT_Image_Jan_6_2026_06_49_40_PM_u2qf0e.jpg',
        ingredients: ['Potatoes', 'Gram flour', 'Pav', 'Green chutney', 'Spices'],
        steps: ['Make potato filling', 'Coat in batter', 'Deep fry', 'Serve in pav'],
        region: 'West India',
        state: 'Maharashtra'
      },
      {
        id: 'puran-poli',
        name: 'Puran Poli',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767705726/ChatGPT_Image_Jan_6_2026_06_49_44_PM_ka6io4.jpg',
        ingredients: ['Wheat flour', 'Chana dal', 'Jaggery', 'Cardamom', 'Ghee'],
        steps: ['Cook dal with jaggery', 'Make dough', 'Stuff and roll', 'Cook with ghee'],
        region: 'West India',
        state: 'Maharashtra'
      },
      {
        id: 'pav-bhaji',
        name: 'Pav Bhaji',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767705726/ChatGPT_Image_Jan_6_2026_06_50_49_PM_zkxmlf.jpg',
        ingredients: ['Mixed vegetables', 'Butter', 'Pav bhaji masala', 'Pav'],
        steps: ['Mash vegetables', 'Cook with butter and masala', 'Toast pav', 'Serve hot'],
        region: 'West India',
        state: 'Maharashtra'
      }
    ]
  },
  {
    id: 'manipur',
    name: 'Manipur',
    dishes: [
      {
        id: 'eromba',
        name: 'Eromba',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767706505/ChatGPT_Image_Jan_6_2026_06_58_27_PM_gxaopb.jpg',
        ingredients: ['Vegetables', 'Fermented fish', 'Chilies', 'Bamboo shoots'],
        steps: ['Boil vegetables', 'Add fermented fish', 'Mash together', 'Season'],
        region: 'North East India',
        state: 'Manipur'
      },
      {
        id: 'kangshoi',
        name: 'Kangshoi',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767706503/ChatGPT_Image_Jan_6_2026_06_57_51_PM_wm8oo1.jpg',
        ingredients: ['Seasonal vegetables', 'Onions', 'Ginger', 'Garlic', 'Chilies'],
        steps: ['Boil vegetables', 'Add aromatics', 'Season', 'Serve hot'],
        region: 'North East India',
        state: 'Manipur'
      },
      {
        id: 'chamthong',
        name: 'Chamthong',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767706499/ChatGPT_Image_Jan_6_2026_06_59_24_PM_gccbh9.jpg',
        ingredients: ['Vegetables', 'Onions', 'Maroi', 'Ginger'],
        steps: ['Boil vegetables', 'Add herbs', 'Season lightly', 'Serve as soup'],
        region: 'North East India',
        state: 'Manipur'
      },
      {
        id: 'singju',
        name: 'Singju',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767706500/ChatGPT_Image_Jan_6_2026_07_01_26_PM_b34vfl.jpg',
        ingredients: ['Cabbage', 'Lotus stem', 'Perilla seeds', 'Fermented fish', 'Chilies'],
        steps: ['Chop vegetables', 'Mix with seeds', 'Add fish paste', 'Toss'],
        region: 'North East India',
        state: 'Manipur'
      }
    ]
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    dishes: [
      {
        id: 'jadoh',
        name: 'Jadoh',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767707203/ChatGPT_Image_Jan_6_2026_07_10_28_PM_rdxeej.jpg',
        ingredients: ['Rice', 'Pork', 'Black sesame', 'Ginger', 'Onions', 'Spices'],
        steps: ['Cook pork', 'Add rice', 'Mix with spices', 'Cook together'],
        region: 'North East India',
        state: 'Meghalaya'
      },
      {
        id: 'dohneiiong',
        name: 'Dohneiiong',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767707201/ChatGPT_Image_Jan_6_2026_07_10_42_PM_v8oeiq.jpg',
        ingredients: ['Pork', 'Black sesame', 'Onions', 'Ginger', 'Chilies'],
        steps: ['Cut pork', 'Dry roast', 'Add sesame paste', 'Cook slowly'],
        region: 'North East India',
        state: 'Meghalaya'
      },
      {
        id: 'tungrymbai',
        name: 'Tungrymbai',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767707200/ChatGPT_Image_Jan_6_2026_07_12_07_PM_o3x64q.jpg',
        ingredients: ['Fermented soybeans', 'Pork', 'Onions', 'Ginger', 'Chilies'],
        steps: ['Prepare fermented beans', 'Cook with pork', 'Add aromatics', 'Simmer'],
        region: 'North East India',
        state: 'Meghalaya'
      },
      {
        id: 'kyat',
        name: 'Kyat',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767707199/ChatGPT_Image_Jan_6_2026_07_13_30_PM_rabe1e.jpg',
        ingredients: ['Rice', 'Water', 'Fermentation culture'],
        steps: ['Brew rice', 'Ferment', 'Strain', 'Serve as beer'],
        region: 'North East India',
        state: 'Meghalaya'
      }
    ]
  },
  {
    id: 'mizoram',
    name: 'Mizoram',
    dishes: [
      {
        id: 'bai',
        name: 'Bai',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767708058/ChatGPT_Image_Jan_6_2026_07_24_31_PM_mp8cdd.jpg',
        ingredients: ['Steamed vegetables', 'Bamboo shoots', 'Pork/Fish', 'Herbs'],
        steps: ['Steam vegetables', 'Add meat', 'Season with herbs', 'Serve'],
        region: 'North East India',
        state: 'Mizoram'
      },
      {
        id: 'misa-mach-poora',
        name: 'Misa Mach Poora',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767708059/ChatGPT_Image_Jan_6_2026_07_26_59_PM_quzmhf.jpg',
        ingredients: ['Shrimp', 'Banana leaves', 'Mustard oil', 'Lemon', 'Spices'],
        steps: ['Marinate shrimp', 'Wrap in banana leaves', 'Grill', 'Serve hot'],
        region: 'North East India',
        state: 'Mizoram'
      },
      {
        id: 'vawksa-rep',
        name: 'Vawksa Rep',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767708060/ChatGPT_Image_Jan_6_2026_07_27_40_PM_imxhsy.jpg',
        ingredients: ['Pork', 'Bamboo shoots', 'Ginger', 'Garlic', 'Herbs'],
        steps: ['Smoke pork', 'Cook with bamboo', 'Add aromatics', 'Simmer'],
        region: 'North East India',
        state: 'Mizoram'
      },
      {
        id: 'koat-pitha',
        name: 'Koat Pitha',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1767708059/ChatGPT_Image_Jan_6_2026_07_25_18_PM_urmyul.jpg',
        ingredients: ['Rice flour', 'Banana', 'Jaggery'],
        steps: ['Mix flour with banana', 'Shape into balls', 'Deep fry', 'Serve'],
        region: 'North East India',
        state: 'Mizoram'
      }
    ]
  },
  {
    id: 'nagaland',
    name: 'Nagaland',
    dishes: [
      {
        id: 'akibeye',
        name: 'Akibeye',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1775036186/ChatGPT_Image_Apr_1_2026_03_03_43_PM_jz1a2h.png',
        ingredients: ['Colocasia leaves', 'Mustard leaves', 'Pork', 'Axone', 'Chilies'],
        steps: ['Prepare leaves', 'Cook with pork', 'Add fermented soybean', 'Season'],
        region: 'North East India',
        state: 'Nagaland'
      },
      {
        id: 'bamboo-fish',
        name: 'Bamboo Fish',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1775036186/ChatGPT_Image_Apr_1_2026_03_04_58_PM_solw69.png',
        ingredients: ['Fish', 'Bamboo', 'Green chilies', 'Ginger', 'Coriander'],
        steps: ['Fill bamboo with fish', 'Add aromatics', 'Cook over fire', 'Serve'],
        region: 'North East India',
        state: 'Nagaland'
      },
      {
        id: 'smoked-pork',
        name: 'Smoked Pork with Axone',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1775036185/ChatGPT_Image_Apr_1_2026_03_05_21_PM_ryltoz.png',
        ingredients: ['Pork', 'Fermented soybeans', 'King chilies', 'Ginger'],
        steps: ['Smoke pork', 'Cook with axone', 'Add chilies', 'Simmer'],
        region: 'North East India',
        state: 'Nagaland'
      },
      {
        id: 'galho',
        name: 'Galho',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1775036185/ChatGPT_Image_Apr_1_2026_03_06_00_PM_clfasb.png',
        ingredients: ['Rice', 'Vegetables', 'Meat', 'Axone', 'Herbs'],
        steps: ['Cook rice with vegetables', 'Add meat', 'Season', 'Serve as porridge'],
        region: 'North East India',
        state: 'Nagaland'
      }
    ]
  },
  {
    id: 'odisha',
    name: 'Odisha',
    dishes: [
      {
        id: 'dalma',
        name: 'Dalma',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1775036804/ChatGPT_Image_Apr_1_2026_03_11_04_PM_grng1z.png',
        ingredients: ['Moong dal', 'Vegetables', 'Ginger', 'Turmeric', 'Panch phoron'],
        steps: ['Cook dal with vegetables', 'Mash lightly', 'Temper with panch phoron', 'Serve'],
        region: 'East India',
        state: 'Odisha'
      },
      {
        id: 'chungdi-malai',
        name: 'Chungdi Malai',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1775036780/ChatGPT_Image_Apr_1_2026_03_15_52_PM_apmiod.png',
        ingredients: ['Prawns', 'Coconut milk', 'Onions', 'Spices'],
        steps: ['Clean prawns', 'Prepare masala', 'Cook in coconut milk', 'Simmer'],
        region: 'East India',
        state: 'Odisha'
      },
      {
        id: 'pakhala',
        name: 'Pakhala Bhata',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1775036794/ChatGPT_Image_Apr_1_2026_03_11_20_PM_dsydth.png',
        ingredients: ['Rice', 'Water', 'Yogurt', 'Mustard seeds', 'Curry leaves'],
        steps: ['Cook rice', 'Soak in water', 'Ferment overnight', 'Serve with sides'],
        region: 'East India',
        state: 'Odisha'
      },
      {
        id: 'rasagola',
        name: 'Rasagola',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1775036783/ChatGPT_Image_Apr_1_2026_03_13_17_PM_uw75dr.png',
        ingredients: ['Chenna', 'Sugar', 'Water', 'Cardamom'],
        steps: ['Make chenna balls', 'Boil in sugar syrup', 'Cook until spongy', 'Cool'],
        region: 'East India',
        state: 'Odisha'
      }
    ]
  },
  {
    id: 'punjab',
    name: 'Punjab',
    dishes: [
      {
        id: 'butter-chicken',
        name: 'Butter Chicken',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1775037161/Savory_butter_chicken_with_accompaniments_dmcmmx.png',
        ingredients: ['Chicken', 'Butter', 'Tomatoes', 'Cream', 'Spices'],
        steps: ['Marinate chicken', 'Cook in butter', 'Add tomato sauce', 'Simmer with cream'],
        region: 'North India',
        state: 'Punjab'
      },
      {
        id: 'makki-roti',
        name: 'Makki di Roti',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1775037163/ChatGPT_Image_Apr_1_2026_03_20_43_PM_pm9lq4.png',
        ingredients: ['Corn flour', 'Water', 'Salt', 'Ghee'],
        steps: ['Mix corn flour with water', 'Knead into dough', 'Roll and cook on tawa'],
        region: 'North India',
        state: 'Punjab'
      },
      {
        id: 'sarson-saag',
        name: 'Sarson da Saag',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1775037161/Sarson_da_Saag_with_makki_di_roti_tdyydt.png',
        ingredients: ['Mustard greens', 'Spinach', 'Ginger', 'Garlic', 'Spices'],
        steps: ['Boil greens', 'Blend coarsely', 'Temper with spices', 'Simmer'],
        region: 'North India',
        state: 'Punjab'
      },
      {
        id: 'chole-bhature',
        name: 'Chole Bhature',
        image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1775037157/Delicious_chole_bhature_feast_vmayqv.png',
        ingredients: ['Chickpeas', 'Flour', 'Yogurt', 'Spices', 'Oil'],
        steps: ['Soak chickpeas', 'Cook with spices', 'Make bhature dough', 'Deep fry'],
        region: 'North India',
        state: 'Punjab'
      }
    ]
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    dishes: [
      {
        id: 'dal-baati',
        name: 'Dal Baati Churma',
        image: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=400',
        ingredients: ['Wheat flour', 'Lentils', 'Ghee', 'Jaggery', 'Spices'],
        steps: ['Make baati dough', 'Bake baati', 'Prepare dal', 'Make churma'],
        region: 'North India',
        state: 'Rajasthan'
      },
      {
        id: 'laal-maas',
        name: 'Laal Maas',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
        ingredients: ['Mutton', 'Red chilies', 'Yogurt', 'Garlic', 'Spices'],
        steps: ['Marinate mutton', 'Cook with red chilies', 'Add yogurt', 'Simmer'],
        region: 'North India',
        state: 'Rajasthan'
      },
      {
        id: 'ghevar',
        name: 'Ghevar',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
        ingredients: ['Flour', 'Ghee', 'Milk', 'Sugar syrup', 'Nuts'],
        steps: ['Make batter', 'Deep fry in special mold', 'Soak in sugar syrup'],
        region: 'North India',
        state: 'Rajasthan'
      },
      {
        id: 'pyaaz-kachori',
        name: 'Pyaaz Kachori',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400',
        ingredients: ['Flour', 'Onions', 'Spices', 'Oil', 'Fennel seeds'],
        steps: ['Make dough', 'Prepare onion filling', 'Stuff and seal', 'Deep fry'],
        region: 'North India',
        state: 'Rajasthan'
      }
    ]
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    dishes: [
      {
        id: 'momos',
        name: 'Momos',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400',
        ingredients: ['Flour', 'Meat/Vegetables', 'Ginger', 'Garlic', 'Spices'],
        steps: ['Make dough', 'Prepare filling', 'Shape dumplings', 'Steam'],
        region: 'North East India',
        state: 'Sikkim'
      },
      {
        id: 'thukpa-sikkim',
        name: 'Thukpa',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400',
        ingredients: ['Noodles', 'Vegetables', 'Meat', 'Broth', 'Spices'],
        steps: ['Prepare broth', 'Cook noodles', 'Add vegetables and meat', 'Serve hot'],
        region: 'North East India',
        state: 'Sikkim'
      },
      {
        id: 'gundruk',
        name: 'Gundruk',
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400',
        ingredients: ['Fermented leafy greens', 'Potatoes', 'Tomatoes', 'Spices'],
        steps: ['Ferment greens', 'Cook with vegetables', 'Season', 'Serve as soup'],
        region: 'North East India',
        state: 'Sikkim'
      },
      {
        id: 'phagshapa',
        name: 'Phagshapa',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
        ingredients: ['Pork fat', 'Radish', 'Dried chilies', 'Ginger'],
        steps: ['Strip pork fat', 'Cook with radish', 'Add chilies', 'Dry cook'],
        region: 'North East India',
        state: 'Sikkim'
      }
    ]
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    dishes: [
      {
        id: 'chicken-chettinad',
        name: 'Chicken Chettinad',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400',
        ingredients: ['Chicken', 'Coconut', 'Poppy seeds', 'Fennel', 'Spices'],
        steps: ['Marinate chicken', 'Grind masala', 'Cook chicken', 'Add roasted spices'],
        region: 'South India',
        state: 'Tamil Nadu'
      },
      {
        id: 'dosa',
        name: 'Dosa',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400',
        ingredients: ['Rice', 'Urad dal', 'Fenugreek seeds', 'Salt'],
        steps: ['Soak rice and dal', 'Grind and ferment', 'Spread on tawa', 'Cook crisp'],
        region: 'South India',
        state: 'Tamil Nadu'
      },
      {
        id: 'rasam',
        name: 'Rasam',
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400',
        ingredients: ['Tamarind', 'Tomatoes', 'Rasam powder', 'Curry leaves', 'Lentils'],
        steps: ['Extract tamarind juice', 'Cook with tomatoes', 'Add rasam powder', 'Temper'],
        region: 'South India',
        state: 'Tamil Nadu'
      },
      {
        id: 'pongal',
        name: 'Pongal',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400',
        ingredients: ['Rice', 'Moong dal', 'Black pepper', 'Cumin', 'Ghee', 'Cashews'],
        steps: ['Cook rice and dal', 'Temper spices', 'Mix together', 'Garnish'],
        region: 'South India',
        state: 'Tamil Nadu'
      }
    ]
  },
  {
    id: 'telangana',
    name: 'Telangana',
    dishes: [
      {
        id: 'sarva-pindi',
        name: 'Sarva Pindi',
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400',
        ingredients: ['Rice flour', 'Chana dal', 'Peanuts', 'Onions', 'Spices'],
        steps: ['Mix all ingredients', 'Make dough', 'Cook on griddle', 'Serve crispy'],
        region: 'South India',
        state: 'Telangana'
      },
      {
        id: 'gongura-ghosht',
        name: 'Gongura Ghosht',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
        ingredients: ['Mutton', 'Gongura leaves', 'Onions', 'Spices'],
        steps: ['Cook mutton', 'Add gongura', 'Slow cook', 'Serve'],
        region: 'South India',
        state: 'Telangana'
      },
      {
        id: 'hyderabadi-haleem',
        name: 'Hyderabadi Haleem',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
        ingredients: ['Meat', 'Wheat', 'Lentils', 'Spices', 'Ghee'],
        steps: ['Soak wheat and lentils', 'Cook meat', 'Mash together', 'Garnish'],
        region: 'South India',
        state: 'Telangana'
      },
      {
        id: 'jonna-rotte',
        name: 'Jonna Rotte',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400',
        ingredients: ['Jowar flour', 'Water', 'Salt', 'Ghee'],
        steps: ['Make dough', 'Roll thick rotis', 'Cook on tawa', 'Apply ghee'],
        region: 'South India',
        state: 'Telangana'
      }
    ]
  },
  {
    id: 'tripura',
    name: 'Tripura',
    dishes: [
      {
        id: 'gudok',
        name: 'Gudok',
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400',
        ingredients: ['Fermented fish', 'Bamboo shoots', 'Vegetables', 'Herbs'],
        steps: ['Prepare fermented fish', 'Cook with bamboo', 'Add vegetables', 'Season'],
        region: 'North East India',
        state: 'Tripura'
      },
      {
        id: 'chuak',
        name: 'Chuak',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400',
        ingredients: ['Fermented rice', 'Water'],
        steps: ['Ferment rice', 'Add water', 'Strain', 'Serve as rice beer'],
        region: 'North East India',
        state: 'Tripura'
      },
      {
        id: 'mui-borok',
        name: 'Mui Borok',
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400',
        ingredients: ['Berma fish', 'Bamboo shoots', 'Herbs', 'Spices'],
        steps: ['Clean fish', 'Cook with bamboo', 'Add herbs', 'Serve'],
        region: 'North East India',
        state: 'Tripura'
      },
      {
        id: 'chakhwi',
        name: 'Chakhwi',
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400',
        ingredients: ['Bamboo shoots', 'Pork', 'Spices'],
        steps: ['Prepare bamboo shoots', 'Cook with pork', 'Season', 'Simmer'],
        region: 'North East India',
        state: 'Tripura'
      }
    ]
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    dishes: [
      {
        id: 'galouti-kebab',
        name: 'Galouti Kebab',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
        ingredients: ['Minced meat', 'Papaya paste', 'Spices', 'Ghee'],
        steps: ['Marinate meat', 'Make fine paste', 'Shape patties', 'Shallow fry'],
        region: 'North India',
        state: 'Uttar Pradesh'
      },
      {
        id: 'tunde-kebab',
        name: 'Tunde Kebab',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
        ingredients: ['Minced meat', '160 spices', 'Papaya', 'Ghee'],
        steps: ['Prepare special spice mix', 'Mix with meat', 'Shape kebabs', 'Cook'],
        region: 'North India',
        state: 'Uttar Pradesh'
      },
      {
        id: 'bedmi-puri',
        name: 'Bedmi Puri',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400',
        ingredients: ['Wheat flour', 'Urad dal', 'Fennel seeds', 'Spices', 'Oil'],
        steps: ['Mix flour with dal', 'Make dough', 'Roll puris', 'Deep fry'],
        region: 'North India',
        state: 'Uttar Pradesh'
      },
      {
        id: 'petha',
        name: 'Petha',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
        ingredients: ['Ash gourd', 'Sugar', 'Lime water', 'Cardamom'],
        steps: ['Cut ash gourd', 'Treat with lime', 'Cook in sugar syrup', 'Dry'],
        region: 'North India',
        state: 'Uttar Pradesh'
      }
    ]
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    dishes: [
      {
        id: 'kafuli',
        name: 'Kafuli',
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400',
        ingredients: ['Spinach', 'Fenugreek leaves', 'Rice paste', 'Spices'],
        steps: ['Blanch greens', 'Make rice paste', 'Cook together', 'Temper'],
        region: 'North India',
        state: 'Uttarakhand'
      },
      {
        id: 'aloo-gutke',
        name: 'Aloo ke Gutke',
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400',
        ingredients: ['Potatoes', 'Coriander powder', 'Red chili', 'Cumin'],
        steps: ['Cut potatoes', 'Dry roast spices', 'Stir fry', 'Serve hot'],
        region: 'North India',
        state: 'Uttarakhand'
      },
      {
        id: 'chainsoo',
        name: 'Chainsoo',
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400',
        ingredients: ['Black gram', 'Garlic', 'Ginger', 'Spices'],
        steps: ['Roast black gram', 'Grind coarsely', 'Cook with spices', 'Serve'],
        region: 'North India',
        state: 'Uttarakhand'
      },
      {
        id: 'bal-mithai',
        name: 'Bal Mithai',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
        ingredients: ['Khoya', 'Sugar', 'Chocolate', 'Sugar balls'],
        steps: ['Roast khoya', 'Make balls', 'Coat with chocolate', 'Top with sugar balls'],
        region: 'North India',
        state: 'Uttarakhand'
      }
    ]
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    dishes: [
      {
        id: 'fish-rice',
        name: 'Maach Bhaat',
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400',
        ingredients: ['Fish', 'Rice', 'Turmeric', 'Mustard oil', 'Spices'],
        steps: ['Fry fish', 'Cook rice', 'Prepare fish curry', 'Serve together'],
        region: 'East India',
        state: 'West Bengal'
      },
      {
        id: 'rosogolla',
        name: 'Rosogolla',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400',
        ingredients: ['Milk', 'Lemon juice', 'Sugar', 'Water', 'Cardamom'],
        steps: ['Make chenna', 'Form balls', 'Boil in sugar syrup', 'Cool'],
        region: 'East India',
        state: 'West Bengal'
      },
      {
        id: 'kosha-mangsho',
        name: 'Kosha Mangsho',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
        ingredients: ['Mutton', 'Onions', 'Yogurt', 'Garam masala', 'Mustard oil'],
        steps: ['Marinate mutton', 'Slow cook with onions', 'Add spices', 'Reduce gravy'],
        region: 'East India',
        state: 'West Bengal'
      },
      {
        id: 'mishti-doi',
        name: 'Mishti Doi',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400',
        ingredients: ['Milk', 'Jaggery', 'Yogurt culture', 'Cardamom'],
        steps: ['Boil milk', 'Add jaggery', 'Cool and add culture', 'Set overnight'],
        region: 'East India',
        state: 'West Bengal'
      }
    ]
  }
];

export const getAllDishes = (): Dish[] => {
  return indianStates.flatMap(state => state.dishes);
};

export const searchDishes = (query: string): Dish[] => {
  const allDishes = getAllDishes();
  return allDishes.filter(dish => 
    dish.name.toLowerCase().includes(query.toLowerCase()) ||
    dish.state.toLowerCase().includes(query.toLowerCase()) ||
    dish.region.toLowerCase().includes(query.toLowerCase())
  );
};

export const getDishesByRegion = (region: string): Dish[] => {
  const allDishes = getAllDishes();
  return allDishes.filter(dish => 
    dish.region.toLowerCase() === region.toLowerCase()
  );
};

export const getDishesByState = (stateName: string): Dish[] => {
  const state = indianStates.find(s => 
    s.name.toLowerCase() === stateName.toLowerCase()
  );
  return state ? state.dishes : [];
};
