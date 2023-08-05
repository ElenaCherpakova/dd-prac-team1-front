import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { SavedRecipe } from "../utils/types";
import SavedRecipesItem from "./SavedRecipesItem";

type SavedRecipesProps = { recipes: Array<SavedRecipe> };

const SavedRecipesList = ({ recipes }: SavedRecipesProps) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={3}>
      {recipes.map(recipe => (
        <GridItem w="100%">
          <SavedRecipesItem key={recipe._id} recipe={recipe} />
        </GridItem>
      ))}
    </Grid>
  );
};
export default SavedRecipesList;
