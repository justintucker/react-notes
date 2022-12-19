/**
 * Use initial value
 *
 * @param value
 *
 * @return {*}
 */
export function useInitialValue(value) {
  const initialValue = useRef(null);

  useEffect(() => {
    initialValue.current = value;
  }, []);

  return initialValue.current;
}
