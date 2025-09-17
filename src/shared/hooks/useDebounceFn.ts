import { useRef, useEffect, useCallback } from "react";

export function useDebounceFn<T extends (...args: unknown[]) => void>(
    fn: T,
    delay: number
) {
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const debouncedFn = useCallback(
        (...args: Parameters<T>) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                fn(...args);
            }, delay);
        },
        [fn, delay]
    );

    useEffect(() => {
        return () => {
            if (timer.current) clearTimeout(timer.current);
        };
    }, []);

    return debouncedFn;
}
