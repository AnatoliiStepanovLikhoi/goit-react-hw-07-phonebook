import { Watch } from 'react-loader-spinner';

export function Loader() {
  return (
    <Watch
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />
  );
}
