import PropTypes from 'prop-types'
import { useField } from 'formik'
import cn from 'classnames'

import { ValidationError } from '../../common'
import styles from './Checkbox.module.scss'

export default function Checkbox({ children, disabled, name, onClick, style }) {
    const isRectangleCheckbox = style === 'rectangle'
    const isColorCheckbox = style === 'Color Checkbox'
    const colorClassName = `filter-color-${name.toLowerCase()}`

    const labelStyles = cn({
        [styles.regular]: !isRectangleCheckbox && !isColorCheckbox,
        [styles.rectangle]: isRectangleCheckbox,
        [styles.color]: isColorCheckbox,
        [styles[colorClassName]]: isColorCheckbox,
        [styles.disabled]: disabled,
    })

    const [field, meta] = useField({
        name,
        type: 'checkbox',
    })

    return (
        <>
            <input
                {...field}
                className='visuallyHidden'
                disabled={disabled}
                id={name}
                onClick={onClick}
                type='checkbox'
            />
            <label htmlFor={name} className={labelStyles}>
                {children}
            </label>
            {!isRectangleCheckbox && <ValidationError meta={meta} />}
        </>
    )
}

Checkbox.defaultProps = {
    style: 'regular',
}

Checkbox.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.string,
}
