import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
import { Icon } from "components/Icon/Icon";

import "./Badge.scss";

export const sizes = {
    sm: "sm",
    lg: "lg",
};

export const variants = {
    basic: "basic",
    removable: "removable",
};

export const colors = {
    blue: "blue",
    green: "green",
    violet: "violet",
    orange: "orange",
    pink: "pink",
    red: "red",
    neutral: "neutral",
};

/**
 * @deprecated since version 7.0 - Instead, use enums directly off of the imported component; e.g. Button.variants.secondary
 */
export const ENUMS = {
    sizes,
    variants,
    colors,
};

/**
 * A small component for presenting a small amount of text or data.
 **/
export const Badge = ({
    className,
    text,
    children,
    color,
    variant,
    size,
    isRounded,
    onRemove,
    ...rest
}) => {
    let textColor = `text-${color}-${color === "neutral" ? "2" : "middle"}`;

    return (
        <span
            className={classify(
                "mainsail-badge",
                color,
                size,
                variant,
                isRounded ? "round" : "square",
                className
            )}
            {...rest}>
            {variant !== ENUMS.variants.icon ? text : null}
            {variant !== ENUMS.variants.icon ? children : null}
            {variant === ENUMS.variants.removable ? (
                <button onClick={onRemove}>
                    <Icon
                        className={textColor}
                        size={Icon.sizes.sm}
                        name={Icon.names.close}
                    />
                </button>
            ) : null}
        </span>
    );
};

Badge.propTypes = {
    /** Changes the overall style of badge */
    variant: PropTypes.oneOf(Object.keys(ENUMS.variants)),
    /** Badge text to display, can also optionally provide children */
    text: PropTypes.string,
    /** (Optional click handler) when using the removable variant */
    onRemove: PropTypes.func,
    /** Style class to add to badge element */
    className: PropTypes.string,
    /** Background color (omit for default) */
    color: PropTypes.oneOf(Object.keys(ENUMS.colors)),
    /** Size of Badge to use */
    size: PropTypes.oneOf(Object.keys(sizes)),
    /** Creates a fully rounded badge */
    isRounded: PropTypes.bool,
};

Badge.defaultProps = {
    variant: ENUMS.variants.basic,
    color: ENUMS.colors.neutral,
    size: sizes.sm,
    isRounded: false,
};

Badge.sizes = sizes;
Badge.colors = colors;
Badge.variants = variants;
