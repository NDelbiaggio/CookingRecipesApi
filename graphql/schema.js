const { buildSchema } = require("graphql");

module.exports = new buildSchema(`
    type Ingredient {
        id: String,
        name: String,
        image: String,
        category: String,
        description: String
    },

    type Recipe {
        id: String,
        name: String,
        description: String,
        time: Int,
        cookingTime: Int,
        ovenTemperature: String,
        ingredients: [Ingredient],
        steps: [String]
    }

    
    input FilterIngredient {
        name: String,
        image: String,
        category: String,
        description: String
    },
    
    input Filter {
        filterProps: FilterIngredient,
        or: [FilterIngredient],
        sort: FilterIngredient,
        limit: Int
    },

    type Query {
        ingredient(_id: String): Ingredient
        ingredients(filter: Filter): [Ingredient]
        recipes: [Recipe]
    },

    type Mutation {
        addIngredient(name: String, image: String, category: String, description: String): Ingredient!
    }
`);
