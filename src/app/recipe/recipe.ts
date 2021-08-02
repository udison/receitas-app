interface Ingredient {
	name: string;
	quantity?: any;
	measure?: any;
	replacements?: Ingredient[];
	link?: string;
}

export interface Recipe {
	image: string;
	name: string;
	prepTime: number;
	portions: number;
	priceRange: number;
	difficulty: number;
	ingredients: Ingredient[];
	steps: string[];
}