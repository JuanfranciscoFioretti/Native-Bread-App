import { categoryTypes } from "../types/index";

const { SELECT_CATEGORY } = categoryTypes;

const selectCategory = (id) => ({
  type: SELECT_CATEGORY,
  categoryId: id,
});

export default selectCategory;
