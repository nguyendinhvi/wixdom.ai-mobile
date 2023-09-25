import client from '../client';
import { ExampleRequest, ExampleResponse } from '../models/example-models';

const ExampleService = {
  get: async (id: number) => {
    const { data } = await client.get<ExampleResponse>(`/users/${id}`);
    return data;
  },
  post: async (request: ExampleRequest) => {
    const { data } = await client.post<ExampleResponse>('/users', request);
    return data;
  },
};

export default ExampleService;
