import { tinaField, useTina } from 'tinacms/dist/react';

export const EditableImage = ({ portfolioData, img, children }) => {
  const { data } = useTina(portfolioData);
  const { portfolioImages } = data;
  return <div data-tina-field={tinaField(portfolioImages, img)}>{children}</div>;
};
