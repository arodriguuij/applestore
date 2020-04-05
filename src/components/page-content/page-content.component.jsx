import React from 'react';
import './page-content.styles.css';
import Breadcrumb from "../breadcrumb/breadcrumb.component";

const PageContent = props => {
    return(
        <div className={props.classesContainer}>
            <Breadcrumb text={props.text} />
            <div className={props.classesMain}>
                {props.children}
            </div>
        </div>
    )
}

export default PageContent;