import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/shared/lib/axiosInstance';
import { PlanItem } from './dto';

export function usePlanAction(plan: PlanItem, type: 'like' | 'bookmark') {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      const url = `/board/actions/${plan.board_id}`;
      const payload = { type }; // 요청 바디
      return plan['is_liked']
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
                is_liked: type === 'like' ? !p.is_liked : p.is_liked,
                like: type === 'like' ? p.liked + (p.is_liked ? -1 : 1) : p.liked,
                // is_bookmarked: type === 'bookmark' ? !p.is_bookmarked : p.is_bookmarked,
                // bookmark: type === 'bookmark' ? p.bookmark + (p.is_bookmarked ? -1 : 1) : p.bookmark,
              }
              : p
          )
        );
      }

      return { previous };
    },
    onError: (_err, _vars, context) => {
      if (context?.previous) queryClient.setQueryData(['plans'], context.previous);
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['plans'] }),
  });
}
