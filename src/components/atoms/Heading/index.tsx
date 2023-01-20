interface Props {
  children: string;
  className?: string;
}

export const Heading1 = (props: Props) => {
  return (
    <>
      <h1 className={'h1 ' + props.className}>{props.children}</h1>
    </>
  );
};

export const Heading2 = (props: Props) => {
  return (
    <>
      <h2 className={'h2 ' + props.className}>{props.children}</h2>
    </>
  );
};

export const Heading3 = (props: Props) => {
  return (
    <>
      <h3 className={'h3 ' + props.className}>{props.children}</h3>
    </>
  );
};

export const Heading4 = (props: Props) => {
  return (
    <>
      <h4 className={'h4 ' + props.className}>{props.children}</h4>
    </>
  );
};

export const Heading5 = (props: Props) => {
  return (
    <>
      <h5 className={'h5 ' + props.className}>{props.children}</h5>
    </>
  );
};

export const Heading6 = (props: Props) => {
  return (
    <>
      <h6 className={'h6 ' + props.className}>{props.children}</h6>
    </>
  );
};
