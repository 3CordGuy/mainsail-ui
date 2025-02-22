import React, { forwardRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
import { Dropdown } from "components/Dropdown";

import "./TimePicker.scss";

export const placements = {
    auto: "auto",
    top: "top",
    topStart: "top-start",
    topEnd: "top-end",
    left: "left",
    leftStart: "left-start",
    leftEnd: "left-end",
    right: "right",
    rightStart: "right-start",
    rightEnd: "right-end",
    bottom: "bottom",
    bottomStart: "bottom-start",
    bottomEnd: "bottom-end",
};

export const positionings = {
    fixed: "fixed",
    absolute: "absolute",
};

/**
 * A styled form input for selecting Time
 **/
export const TimePicker = forwardRef(
    (
        {
            className,
            isDisabled,
            isTimeDisabled,
            isPeriodDisabled,
            isPeriodHidden,
            isRequired,
            timeOptions,
            placeholder,
            onChange,
            positioning,
            placement,
            isNative,
            period,
            value,
            modifiers = [],
            modifiersTime = [],
            modifiersPeriod = [],
        },
        ref
    ) => {
        const [selectedTime, setSelectedTime] = useState(value);
        const [selectedPeriod, setSelectedPeriod] = useState(
            period.toUpperCase()
        );

        const handleSelect = (type, value) => {
            if (type === "time") {
                setSelectedTime(value);
            } else if (type === "period") {
                setSelectedPeriod(value.toUpperCase());
            }
        };

        useEffect(() => {
            onChange &&
                onChange({ time: selectedTime, period: selectedPeriod });
        }, [selectedTime, selectedPeriod, onChange]);

        useEffect(() => {
            setSelectedPeriod(period.toUpperCase());
        }, [period]);

        useEffect(() => {
            setSelectedTime(value);
        }, [value]);

        return (
            <div className={classify("mainsail-timepicker", className)}>
                <Dropdown
                    ref={ref}
                    isNative={isNative}
                    className={classify("mainsail-timepicker__time")}
                    isRequired={isRequired}
                    isDisabled={isDisabled || isTimeDisabled}
                    value={selectedTime}
                    defaultValue={value}
                    placeholder={placeholder}
                    placement={placement}
                    positioning={positioning}
                    hasCaret={false}
                    modifiers={[...modifiers, ...modifiersTime]}
                    options={timeOptions.map((option) => ({
                        text: option,
                        value: option,
                    }))}
                    onChange={({ value }) => handleSelect("time", value)}
                />
                {isPeriodHidden === true ? null : (
                    <Dropdown
                        isNative={isNative}
                        className={classify("mainsail-timepicker__period")}
                        placeholder={selectedPeriod}
                        isDisabled={isDisabled || isPeriodDisabled}
                        defaultValue={selectedPeriod}
                        placement={placements.bottomStart}
                        positioning={positioning}
                        modifiers={[...modifiers, ...modifiersPeriod]}
                        options={["AM", "PM"].map((option) => ({
                            text: option,
                            value: option,
                        }))}
                        onChange={({ value }) => handleSelect("period", value)}
                    />
                )}
            </div>
        );
    }
);

TimePicker.defaultProps = {
    placeholder: "00:00",
    period: "PM",
    positioning: "absolute",
    timeOptions: [
        "12:00",
        "12:30",
        "1:00",
        "1:30",
        "2:00",
        "2:30",
        "3:00",
        "3:30",
        "4:00",
        "4:30",
        "5:00",
        "5:30",
        "6:00",
        "6:30",
        "7:00",
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
    ],
};

TimePicker.propTypes = {
    /** Controls whether to use custom styled dropdown or native select element (useful for mobile) */
    isNative: PropTypes.bool,
    /** Current selected value */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Value string for prop-controlled period AM/PM (case insensitive) */
    period: PropTypes.oneOf(["AM", "PM", "am", "pm"]),
    /** Callback to fire when time/period change happens receives arguments { time, period } */
    onChange: PropTypes.func,
    /** Disables input field */
    isDisabled: PropTypes.bool,
    /** Disables time field */
    isTimeDisabled: PropTypes.bool,
    /** Disables period dropdown field */
    isPeriodDisabled: PropTypes.bool,
    /** Hides period dropdown field */
    isPeriodHidden: PropTypes.bool,
    /** Marks the form control as required */
    isRequired: PropTypes.bool,
    /** Style class to add to component wrapper */
    className: PropTypes.string,
    /** String to show as the placeholder text in the time dropdown */
    placeholder: PropTypes.string,
    /** Array of time choices to present to the user */
    timeOptions: PropTypes.arrayOf(PropTypes.string),
    /** Position the dropdown menu */
    placement: PropTypes.oneOf(Object.values(placements)),
    /** Positioning strategy of the dropdown menu */
    positioning: PropTypes.oneOf(Object.values(positionings)),
    /** Exposes a [Popperjs](https://popper.js.org/docs/v2/modifiers) api that enables fine-tuning of **both** dropdown menus (will affect both dropdowns with same modifiers). */
    modifiers: PropTypes.arrayOf(PropTypes.object),
    /** Exposes a [Popperjs](https://popper.js.org/docs/v2/modifiers) api that enables fine-tuning of **times** dropdown menu (to be used in lieu of `modifiers`). */
    modifiersTime: PropTypes.arrayOf(PropTypes.object),
    /** Exposes a [Popperjs](https://popper.js.org/docs/v2/modifiers) api that enables fine-tuning of **period** dropdown menu (to be used in lieu of `modifiers`). */
    modifiersPeriod: PropTypes.arrayOf(PropTypes.object),
};

TimePicker.displayName = "TimePicker";

TimePicker.placements = placements;
TimePicker.positionings = positionings;
