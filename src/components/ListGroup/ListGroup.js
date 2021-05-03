import React, { useRef } from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
import { useKeydown } from "utility/hooks";
import { Icon } from "components/Icon";

import "./ListGroup.scss";

const renderIcon = (i) => {
    if (typeof i === "string") {
        return <Icon name={i} />;
    }
    return i;
};

/**
 * Define and export enumerable prop values for use (then attach to component below)
 * e.g. export const colors = {
 *    color1: "color1"
 * }
 */

/**
 * A complex styled list of clickable choices that uses **ListGroupItem** as children
 */
export const ListGroup = ({ children, className, ...props }) => {
    return (
        <div
            role="list"
            className={classify("mainsail-listgroup", className)}
            data-testid="listgroup"
            {...props}>
            {children}
        </div>
    );
};

/**
 * An item for use in ListGroup
 **/
export const ListGroupItem = ({
    isVisible,
    text,
    icon,
    description,
    children,
    onClick,
    isActive,
    ...props
}) => {
    const listItemRef = useRef();

    useKeydown(({ key, keyCode, target }) => {
        if (!listItemRef) {
            return;
        }

        if (
            (key === "Enter" || keyCode === 32 || keyCode === 13) &&
            target === listItemRef.current
        ) {
            onClick && onClick();
        }
    });

    if (!isVisible) {
        return null;
    }

    return (
        <a
            ref={listItemRef}
            role="listitem"
            className={classify("mainsail-listgroup-item", {
                active: isActive,
            })}
            tabIndex="0"
            onClick={onClick}
            {...props}>
            <div className="listgroup-item-content">
                {text ? (
                    <div className="listgroup-item-header">
                        {icon ? renderIcon(icon) : null}
                        {text}
                    </div>
                ) : null}
                {description ? (
                    <div className="listgroup-item-desc">{description}</div>
                ) : null}
                {children}
            </div>
            <div className="listgroup-item-icon">
                <Icon name={Icon.names.forward} />
            </div>
        </a>
    );
};

ListGroupItem.propTypes = {
    /** Controls mounting/visibility of component */
    isVisible: PropTypes.bool,
    /** Selected/active state of item*/
    isActive: PropTypes.bool,
    /** Main text to display for the list item */
    text: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.element,
        PropTypes.string,
    ]),
    /** Icon to display left of the main text */
    icon: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.element,
        PropTypes.string,
    ]),
    /** Description to display below the main text */
    description: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.element,
        PropTypes.string,
    ]),
    /** (Optional) click handler */
    onClick: PropTypes.func,
    /** Style class to add to component wrapper */
    className: PropTypes.string,
};

ListGroupItem.defaultProps = {
    isVisible: true,
};

ListGroup.propTypes = {
    /** Style class to add to component wrapper */
    className: PropTypes.string,
};

/*
 * Tip: Be sure to attach any prop enums separately for convenience
 * use the plural form of the prop name
 * ListGroup.variants = variants
 */

ListGroup.Item = ListGroupItem;
