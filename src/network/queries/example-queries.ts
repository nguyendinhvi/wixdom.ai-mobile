import { useMutation, useQuery } from '@tanstack/react-query';

import type { AxiosResult } from '../models/axios';
import { ExampleResponse } from '../models/example-models';
import ExampleService from '../services/example-services';

export const GET_EXAMPLE = 'get-example';

const useGetExample = (id: number) =>
  useQuery([GET_EXAMPLE, id], () => ExampleService.get(id));

const usePostExample = ({ onError, onSuccess }: AxiosResult<ExampleResponse>) =>
  useMutation(ExampleService.post, {
    onError,
    onSuccess,
  });

export { useGetExample, usePostExample };
