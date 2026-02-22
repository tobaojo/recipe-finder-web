export type FeatureItemType = {
  id: number;
  featureItemTitle: string;
  featureItemDescription: string;
  featureItemIcon: {
    id: number;
    url: string;
    width: number;
    height: number;
  };
};

export type RealLifeType = {
  id: number;
  realLifeTitle: string;
  realLifeSection: RealLifeSectionType[];
  realLifeImage: {
    id: number;
    url: string;
    width: number;
    height: number;
  };
};

export type RealLifeSectionType = {
  id: number;
  children: {
    id: number;
    text: string;
  }[];
};

export type RealLifeChildType = {
  id: number;
  text: string;
};

export type RecipeType = {
  id: number;
  cookMinutes: number;
  difficulty: string;
  documentId: string;
  prepMinutes: number;
  servings: number;
  slug: string;
  title: string;
  image: {
    id: number;
    url: string;
    width: number;
    height: number;
    alternativeText: string;
  };
};
