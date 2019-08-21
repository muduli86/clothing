import React from "react";
import "../styles/collection-preview.styles.scss";

import CollectionItem from './CollectionItem';

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({id,...itemprops}) => (
          <CollectionItem key={id} {...itemprops}/>
        ))}
    </div>
  </div>
);

export default PreviewCollection;
