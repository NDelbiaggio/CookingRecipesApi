const mongoose = require("mongoose");

const { Ingredient } = require("./models/ingredient");
const { Recipe } = require("./models/recipe");
const { Category } = require("./models/category");
const { Unit } = require("./models/unit");

require("./startup/db")();

async function dropTables() {
  await Promise.all([
    await Recipe.remove({}, function(err) {
      console.log("collection Recipe removed");
    }),

    await Ingredient.remove({}, function(err) {
      console.log("collection Ingredient removed");
    }),

    await Category.remove({}, function(err) {
      console.log("collection Ingredient removed");
    }),
    await Unit.remove({}, function(err) {
      console.log("collection Unit removed");
    })
  ]);
}

async function addIngredients() {
  let ingredient = new Ingredient({
    name: "Banana",
    image:
      "data:image/jpeg;base64,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",
    category: "Fruit",
    description: "Banana from Thailand"
  });
  ingredient = await ingredient.save();

  (ingredient = new Ingredient({
    name: "Apple ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/1203781_1-fresho-apple-washington-regualr.jpg",
    category: "fruit",
    description: " Washington, Regualr"
  })),
    (ingredient = await ingredient.save());
  (ingredient = new Ingredient({
    name: "Banana ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000031_20-fresho-banana-yelakki.jpg",
    category: "fruit",
    description: " Yelakki"
  })),
    (ingredient = await ingredient.save());
  (ingredient = new Ingredient({
    name: "Apple ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/1201613_2-fresho-apple-washington-4-pcs-kiwi-green-3-pcs-pomegranate-4-pcs.jpg",
    category: "fruit",
    description: " Washington 4 pcs + Kiwi "
  })),
    (ingredient = await ingredient.save());
  (ingredient = new Ingredient({
    name: "Pomegranate",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40042512_10-fresho-pomegranate.jpg",
    category: "fruit",
    description: ""
  })),
    (ingredient = await ingredient.save());
  (ingredient = new Ingredient({
    name: "Coconut ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000093_16-fresho-coconut-medium.jpg",
    category: "fruit",
    description: " Medium"
  })),
    (ingredient = await ingredient.save());
  (ingredient = new Ingredient({
    name: "Kiwi ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/20000911_27-fresho-kiwi-green.jpg",
    category: "fruit",
    description: " Green"
  })),
    (ingredient = await ingredient.save());
  (ingredient = new Ingredient({
    name: "Papaya ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000152_15-fresho-papaya-semi-ripe.jpg",
    category: "fruit",
    description: " Semi Ripe"
  })),
    (ingredient = await ingredient.save());
  (ingredient = new Ingredient({
    name: "Apple ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/1203785_1-fresho-apple-fuji-regular.jpg",
    category: "fruit",
    description: " Fuji, Regular"
  })),
    (ingredient = await ingredient.save());
  (ingredient = new Ingredient({
    name: "Banana ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000025_22-fresho-banana-robusta.jpg",
    category: "fruit",
    description: " Robusta"
  })),
    (ingredient = await ingredient.save());
  (ingredient = new Ingredient({
    name: "Tender Coconut ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40057966_2-fresho-tender-coconut-medium.jpg",
    category: "fruit",
    description: " Medium"
  })),
    (ingredient = await ingredient.save());
  (ingredient = new Ingredient({
    name: "Watermelon  ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000207_19-fresho-watermelon-small.jpg",
    category: "fruit",
    description: " Small"
  })),
    (ingredient = await ingredient.save());
  (ingredient = new Ingredient({
    name: "Guava",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000369_13-fresho-guava.jpg",
    category: "fruit",
    description: ""
  })),
    (ingredient = await ingredient.save());
  (ingredient = new Ingredient({
    name: "Pomegrante Peeled",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40097808_2-fresho-pomegrante-peeled.jpg",
    category: "fruit",
    description: ""
  })),
    (ingredient = await ingredient.save());
  (ingredient = new Ingredient({
    name: "Avocado",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000312_17-fresho-avocado.jpg",
    category: "fruit",
    description: ""
  })),
    (ingredient = await ingredient.save());
  (ingredient = new Ingredient({
    name: "Apple ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/1203783_1-fresho-apple-royal-gala-regular.jpg",
    category: "fruit",
    description: " Royal Gala, Regular"
  })),
    (ingredient = await ingredient.save());
  (ingredient = new Ingredient({
    name: "Orange ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/20000909_17-fresho-orange-imported-regular.jpg",
    category: "fruit",
    description: " Imported, Regular"
  })),
    (ingredient = await ingredient.save());
  (ingredient = new Ingredient({
    name: "Pear ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/1202331_1-usa-pear-green-imported.jpg",
    category: "fruit",
    description: " Green, Imported"
  })),
    (ingredient = await ingredient.save());
  (ingredient = new Ingredient({
    name: "Apple ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000005_23-fresho-apple-royal-gala-economy.jpg",
    category: "fruit",
    description: " Royal Gala Economy"
  })),
    (ingredient = await ingredient.save());
  (ingredient = new Ingredient({
    name: "Banana ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000346_18-fresho-banana-nendran.jpg",
    category: "fruit",
    description: " Nendran"
  })),
    (ingredient = await ingredient.save());
  (ingredient = new Ingredient({
    name: "Mosambi",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000191_19-fresho-mosambi.jpg",
    category: "fruit",
    description: ""
  })),
    (ingredient = await ingredient.save());
  ingredient = new Ingredient({
    name: "Onion",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000148_24-fresho-onion.jpg",
    category: "vegetable",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Potato",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000159_25-fresho-potato.jpg",
    category: "vegetable",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Tomato ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg",
    category: "vegetable",
    description: " Hybrid"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Carrot ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-local.jpg",
    category: "vegetable",
    description: " Local"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Cauliflower",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
    category: "vegetable",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Capsicum ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000067_23-fresho-capsicum-green.jpg",
    category: "vegetable",
    description: " Green"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Palak",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/20000979_10-fresho-palak.jpg",
    category: "vegetable",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Mushrooms ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000273_13-fresho-mushrooms-button.jpg",
    category: "vegetable",
    description: " Button"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Cucumber",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000102_17-fresho-cucumber.jpg",
    category: "vegetable",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Tomato ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000203_16-fresho-tomato-local.jpg",
    category: "vegetable",
    description: " Local"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Fresho Palak ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/1204552_3-bb-combo-fresho-palak-without-root-250-gm-amul-malai-paneer-200-gm.jpg",
    category: "vegetable",
    description: " Without Root 250 Gm + Amul Malai Paneer 200 Gm"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Bottle Gourd",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000051_18-fresho-bottle-gourd.jpg",
    category: "vegetable",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Cucumber, Carrot &amp; Beetroot 500g Each Salad",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/1202153_1-fresho-cucumber-carrot-beetroot-500g-each-salad.jpg",
    category: "vegetable",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Cabbage",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000066_25-fresho-cabbage.jpg",
    category: "vegetable",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name:
      "Fresho Palak Without Root 250Gm + Gowardhan Fresh Paneer Classic Block 200Gm",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/1204548_3-bb-combo-fresho-palak-without-root-250gm-gowardhan-fresh-paneer-classic-block-200gm.jpg",
    category: "vegetable",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Ridge Gourd",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000175_15-fresho-ridge-gourd.jpg",
    category: "vegetable",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Onion ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40023472_3-fresho-onion-organically-grown.jpg",
    category: "vegetable",
    description: " Organically Grown"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Tomato ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40022638_3-fresho-tomato-local-organically-grown.jpg",
    category: "vegetable",
    description: " Local, Organically Grown"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Beetroot",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000045_18-fresho-beetroot.jpg",
    category: "vegetable",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Coriander Leaves",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg",
    category: "Herbs & Seasonings",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Lemon",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000335_15-fresho-lemon.jpg",
    category: "Herbs & Seasonings",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Ginger",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000338_13-fresho-ginger.jpg",
    category: "Herbs & Seasonings",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Indian Herbs and Condiments",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/1202817_1-fresho-indian-herbs-and-condiments.jpg",
    category: "Herbs & Seasonings",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Garlic &amp; Ginger 100g Each",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/1202152_1-fresho-garlic-ginger-100g-each.jpg",
    category: "Herbs & Seasonings",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Chilli ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/50000511_4-fresho-chilli-green-organically-grown.jpg",
    category: "Herbs & Seasonings",
    description: " Green, Organically Grown"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Garlic",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000330_14-fresho-garlic.jpg",
    category: "Herbs & Seasonings",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Ginger ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40023480_3-fresho-ginger-organically-grown.jpg",
    category: "Herbs & Seasonings",
    description: " Organically Grown"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Chilli ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000333_13-fresho-chilli-green-big.jpg",
    category: "Herbs & Seasonings",
    description: " Green, Big"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Curry Leaves",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000104_17-fresho-curry-leaves.jpg",
    category: "Herbs & Seasonings",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Garlic ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/30005201_4-fresho-garlic-peeled.jpg",
    category: "Herbs & Seasonings",
    description: " Peeled"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Lemon ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40023481_4-fresho-lemon-organically-grown.jpg",
    category: "Herbs & Seasonings",
    description: " Organically Grown"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Garlic ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/50000508_4-fresho-garlic-organically-grown.jpg",
    category: "Herbs & Seasonings",
    description: " Organically Grown"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Basil ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000314_13-fresho-basil-italian.jpg",
    category: "Herbs & Seasonings",
    description: " Italian"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Celery",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000313_13-fresho-celery.jpg",
    category: "Herbs & Seasonings",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Chilli ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000337_12-fresho-chilli-bajji.jpg",
    category: "Herbs & Seasonings",
    description: " Bajji"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Dill Leaves",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000107_18-fresho-dill-leaves.jpg",
    category: "Herbs & Seasonings",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Ginger ",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/30005202_10-fresho-ginger-chopped.jpg",
    category: "Herbs & Seasonings",
    description: " Chopped"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Lemon Grass",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000317_13-fresho-lemon-grass.jpg",
    category: "Herbs & Seasonings",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Coriander",
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000821_3-gopalan-organic-coriander.jpg",
    category: "Herbs & Seasonings",
    description: ""
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Parsley Leaves ",
    image:
      "https://www.bigbasket.com/media/uploads/p/mm/10000663_4-fresho-parsley-leaves-curly.jpg",
    category: "Herbs & Seasonings",
    description: " Curly"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Chilli ",
    image:
      "https://www.bigbasket.com/media/uploads/p/mm/40027986_1-fresho-chilli-green-big-organically-grown.jpg",
    category: "Herbs & Seasonings",
    description: " Green Big, Organically Grown"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Green Chilly ",
    image:
      "https://www.bigbasket.com/media/uploads/p/mm/40005802_8-fresho-green-chilly-chopped.jpg",
    category: "Herbs & Seasonings",
    description: " Chopped"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Neem Giloy (Amruta Balli) ",
    image:
      "https://www.bigbasket.com/media/uploads/p/mm/40020933_4-fresho-neem-giloy-amruta-balli-organically-grown.jpg",
    category: "Herbs & Seasonings",
    description: " Organically Grown"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Fresh Turmeric ",
    image:
      "https://www.bigbasket.com/media/uploads/p/mm/40020581_2-fresho-fresh-turmeric-organically-grown.jpg",
    category: "Herbs & Seasonings",
    description: " Organically Grown"
  });
  ingredient = await ingredient.save();
  ingredient = new Ingredient({
    name: "Sweet Basil (Ocimum Basilicum)",
    image:
      "https://www.bigbasket.com/media/uploads/p/mm/40077440_1-simply-fresh-sweet-basil-ocimum-basilicum.jpg",
    category: "Herbs & Seasonings",
    description: ""
  });
  ingredient = await ingredient.save();
}

async function addCategories() {
  let category = new Category({ name: "fruit" });
  category = await category.save();
  category = new Category({ name: "vegetable" });
  category = await category.save();
  category = new Category({ name: "meat" });
  category = await category.save();
  category = new Category({ name: "fish" });
  category = await category.save();
  category = new Category({ name: "Herbs & Seasonings" });
  category = await category.save();
}
async function addUnits() {
  let unit = new Unit({ name: "grammes" });
  unit = await unit.save();
  unit = new Unit({ name: "kilo grammes" });
  unit = await unit.save();
  unit = new Unit({ name: "piece" });
  unit = await unit.save();
  unit = new Unit({ name: "mili liters" });
  unit = await unit.save();
  unit = new Unit({ name: "liters" });
  unit = await unit.save();
}

async function addRecipes() {
  let recipe = new Recipe({
    name: "Banana cake",
    ingredients: [
      new Ingredient({
        name: "Banana",
        image:
          "data:image/jpeg;base64,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",
        category: "Fruit",
        description: "Banana from Thailand"
      })
    ],
    steps: ["Do your banana cake"]
  });

  recipe = await recipe.save();
}

async function main() {
  await dropTables();
  return await Promise.all([
    addIngredients(),
    addCategories(),
    addUnits(),
    addRecipes()
  ]);
}

main().then(results => {
  console.log("database has been populated");
  process.exit();
});

/**
 * 
https://www.bigbasket.com/pc/fruits-vegetables/fresh-vegetables/?nc=ct-fa&sid=bYIUeIyibWQDoWMBom5mw6JjY6M0ODmiYW_ConVywqJhcMOibHTNARujZHNqTaFvqnBvcHVsYXJpdHmiZHPNAS-jbXJpzQ4u

  let products = document.getElementsByClassName('item')
  for(var i = 0; i < products.length; i++){
    let img = products[i].getElementsByClassName('img-responsive')
    //console.log(img[0].currentSrc)
    let name = products[i].getElementsByClassName('prod-name')
    if(name[0]){
      let nam = name[0].getElementsByTagName('a')
      let props = nam[0].innerHTML.split('-')
      name = props[0]
      desc = props[1] || '';
      console.log(`ingredient = new Ingredient({name: '${name}', image: '${img[0].currentSrc}', category: 'vegetable', description: '${desc}'}); 
      ingredient = await ingredient.save();`)
      }
  }
 */
