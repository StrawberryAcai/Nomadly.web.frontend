import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/shared/lib/axiosInstance';
import { PlanItem } from './dto';

export function useLikeAction(plan: PlanItem) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      const url = '/board/like';
      const payload = { board_id: plan.board_id };

      return plan.is_liked
        ? api.delete(url, { data: payload })
        : api.post(url, payload);
    },
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['plans'] });

      const previous = queryClient.getQueryData<PlanItem[]>(['plans']);

      if (previous) {
        queryClient.setQueryData(
          ['plans'],
          previous.map((p) =>
            p.board_id === plan.board_id
              ? {
                  ...p,
                  is_liked: !p.is_liked,
                  liked: p.liked + (p.is_liked ? -1 : 1),
                }
              : p
          )
        );
      }

      return { previous };
    },
    onError: (_err, _vars, context) => {
      // 에러 발생 시 롤백
      if (context?.previous) {
        queryClient.setQueryData(['plans'], context.previous);
      }
    },
    onSettled: () => {
      // 서버와 동기화
      queryClient.invalidateQueries({ queryKey: ['plans'] });
    },
  });
}
