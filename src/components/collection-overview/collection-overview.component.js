import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import './collection-overview.styles.scss'
import { selectCollections } from "../../redux/shop/shop.selector";
// import {CollectionPreview} from '../preview-collection/collection-preview.component'
import CollectionPreview from '../preview-collection/collection-preview.component'

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
             collections.map(({id , ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections : selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)