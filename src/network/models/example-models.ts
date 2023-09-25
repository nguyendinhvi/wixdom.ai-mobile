export type ExampleRequest = {
  pet: {
    name: string;
    age?: number;
  };
};

export type ExampleResponse = {
  pet: {
    id: string;
    name: string;
    age?: number;
  };
};
