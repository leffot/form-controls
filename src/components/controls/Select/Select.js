/* eslint-disable jsx-a11y/no-onchange */
import PropTypes from 'prop-types'
import { useField, useFormikContext } from 'formik'
import cn from 'classnames'

import { InputLabel, ValidationError } from '../../common'
import styles from './Select.module.scss'

export default function Select({
    hideLabel,
    id,
    label,
    name,
    onChange,
    options,
    placeholder,
}) {
    const { handleChange } = useFormikContext()
    const [field, meta] = useField({
        name,
        type: 'select',
        label: id,
    })

    const placeholderEl =
        placeholder !== undefined ? (
            <option
                disabled
                key={`${id}-${placeholder}-${label}`}
                value={placeholder}
            >
                {placeholder}
            </option>
        ) : null

    const handleSelectChange = event => {
        onChange(event.target.value)
        handleChange(event)
    }

    return (
        <>
            <InputLabel id={id} isVisuallyHidden={hideLabel} label={label} />
            <select
                {...field}
                id={id}
                onChange={handleSelectChange}
                className={cn(styles.select, {
                    [styles.errorBorder]: meta.touched && meta.error,
                })}
            >
                {placeholderEl}
                {options}
            </select>
            <ValidationError meta={meta} />
        </>
    )
}

Select.defaultProps = {
    hideLabel: true,
    onChange: () => undefined,
}

Select.propTypes = {
    hideLabel: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array,
    placeholder: PropTypes.string,
}
