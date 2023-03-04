class ReceipseApiAdapter {
    apiRecipeToRecipes(recipes) {
        return recipes.map(
            this.formatRecipe.bind(this)
        )
    }
    formatRecipe(recipes) {
        return {
            ...recipes,
            date: new Date(recipes.date)
        }
    }
}

export default ReceipseApiAdapter;