/**
 * Use effect after component mount.
 *
 * @param {function} callback Function to run after update.
 * @param {array} dependencies Dependencies used in the effect.
 */
const useEffectAfterMount = (callback, dependencies) => {
  const isMounted = useRef(true);
  useEffect(() => {
    if (!isMounted.current) {
      callback();
    }
    isMounted.current = false;
  }, dependencies);
};
